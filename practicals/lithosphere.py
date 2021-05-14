"""
Python module with some of the functions developed during the practicals.

Can be imported in different notebooks to reuse code instead copy-pasting.
"""
import numpy as np
import xarray as xr


GRAVITATIONAL_CONSTANT_SI = 6.67430e-11


def profile_points(start, end, npoints):
    """
    Generate evenly spaced coordinates for a profile along a great circle.
        
    Both start and end should be (longitude, latitude) pairs.
    
    Returns the longitude and latitude coordinates of each point in a 
    format that can be passed xarray.Dataset.interp.
    """
    lon1, lat1 = np.radians(start)
    lon2, lat2 = np.radians(end)
    # These are needed to calculate the lon/lat coordinates of the profile.
    # See https://en.wikipedia.org/wiki/Great-circle_navigation#Finding_way-points
    azimuth1 = np.arctan2(
        np.cos(lat2) * np.sin(lon2 - lon1),
        np.cos(lat1) * np.sin(lat2) - np.sin(lat1) * np.cos(lat2) * np.cos(lon2 - lon1)
    )
    azimuth_equator = np.arctan2(
        np.sin(azimuth1) * np.cos(lat1),
        np.sqrt(np.cos(azimuth1) ** 2 + np.sin(azimuth1) ** 2 * np.sin(lat1) ** 2)
    )    
    great_circle_equator = np.arctan2(np.tan(lat1), np.cos(azimuth1))
    lon_equator = lon1 - np.arctan2(
        np.sin(azimuth_equator) * np.sin(great_circle_equator),
        np.cos(great_circle_equator)
    )
    # The great-circle distance between start and end (in radians)
    # This is the haversine formula: https://en.wikipedia.org/wiki/Haversine_formula
    great_circle_distance = 2 * np.arcsin(
        np.sqrt(
            np.sin((lat2 - lat1) / 2) ** 2 + np.cos(lat1) * np.cos(lat2) * np.sin((lon2 - lon1) / 2) ** 2
        )
    )
    # Generate evenly spaced points along the great circle 
    distances = np.linspace(start=0, stop=great_circle_distance, num=npoints)
    # Make the distances relative to where the great circle cross the equator
    # This is needed for the calculations below.
    distances_equator = distances + great_circle_equator 
    # Calculate the lon/lat coordinates of each point given their arc distance
    # and the azimuth of the great circle
    latitudes = np.arctan2(
        np.cos(azimuth_equator) * np.sin(distances_equator),
        np.sqrt(np.cos(distances_equator) ** 2 + (np.sin(azimuth_equator) * np.sin(distances_equator)) ** 2)
    )
    longitudes = lon_equator + np.arctan2(
        np.sin(azimuth_equator) * np.sin(distances_equator), 
        np.cos(distances_equator)
    )
    # Convert the arc-distances into kilometers
    mean_earth_radius = 6_371
    distances *= mean_earth_radius
    # xarray stuff so we can interpolate values on these coordinates
    # see: http://xarray.pydata.org/en/stable/interpolation.html#advanced-interpolation
    longitude = xr.DataArray(np.degrees(longitudes), coords={"distance": distances}, dims="distance")    
    latitude = xr.DataArray(np.degrees(latitudes), coords={"distance": distances}, dims="distance")
    return longitude, latitude