<!-- .slide: class="slide-title" data-background-color="#000000" data-background-image="../assets/background.svg" data-background-repeat="no-repeat" data-background-opacity="0.10" data-background-position="center" -->

<div class="container">
<div class="col-large" style="text-align: left;">

ENVS398 Global Geophysics and Geodynamics

</div>
<div class="col-small" style="text-align: right;">

[<img src="../assets/university-of-liverpool-white.png" style="width: 35%">](https://www.liverpool.ac.uk/earth-ocean-and-ecological-sciences/)

</div>
</div>

<div class="r-stretch" id="slide-title-text">

# Flexure of the oceanic lithosphere under seamounts

</div>

## Instructors: **[Leonardo Uieda](https://www.leouieda.com)** <span style="margin: 0 10px">&</span> **Andy Biggin**


<i class="fas fa-envelope fa-fw"></i> [Leonardo.Uieda@liverpool.ac.uk](mailto:Leonardo.Uieda@liverpool.ac.uk)
<span style="margin: 0 20px">|</span>
<i class="fab fa-twitter fa-fw"></i> [@leouieda](https://twitter.com/leouieda)
<span style="margin: 0 20px">|</span>
[<i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i> CC-BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

---

# Aims

Comprehend the models for flexure of the
<br>
oceanic lithosphere under the load of a seamount:

* The governing equation and it's solution by finite-differences
* How the flexure appears in gravity and bathymetry data

---

# Seamounts everywhere

<div class="container">
<div class="col-large tiny">

<img src="../assets/topography.png">

Topography and bathymetry map of the Earth according to the
[ETOPO1](https://doi.org/10.7289/V5C8276M) digital elevation model.
Seamounts are small dots away from mid-ocean ridges.

</div>
<div class="col-small small">

The sea floor is not smooth away from mid-ocean ridges (as predicted by cooling
models)

It is full of seamounts (small active or extinct volcanoes) and oceanic islands

Current estimates are between 10,000-100,000 seamounts globally
([Wessel et al, 2015](https://doi.org/10.5670/oceanog.2010.60))

</div>
</div>

---

# Seamounts in gravity

<div class="container">
<div class="col-large tiny">

<img src="../assets/gravity-disturbance.png">

Map of the gravity disturbance from the EIGEN-6C4 spherical harmonic model
[(Foerste et al., 2014)](https://doi.org/10.5880/icgem.2015.1).
Seamounts cause large gravity disturbance.

</div>
<div class="col-small small">

Prominent features in gravity disturbance data (look at the West Pacific)

Indicates that the seamounts and small oceanic islands are not supported by
isostatic equilibrium

Try plotting Bouguer disturbances vs smoothed bathymetry around a seamount
chain to verify this

</div>
</div>

---

# Example: Hawai'i

<img src="../assets/topography-profile-hawaii.png" style="width: 100%">

<div class="small">

Bathymetry profile across the island of Oahu in the Hawai'i.
The sea floor is bent downwards next to the island and then upwards before
settling at the normal depth of 6 km.
<br>
**Recognize this pattern?**

</div>

---

<!-- .slide: class="slide-transition" -->

<div class="centered">
<div>

# What mechanism supports seamounts and oceanic islands?

</div>
</div>

---

# Flexure of an elastic plate

<div class="container">
<div class="col-large tiny">

<img src="../assets/flexure-seamount.svg">

$w$ = deflection,
$q(x)$ = force density of the load,
$g$ = gravity,
$E$ = Young's modulus,
$\nu$ = Poisson's ratio,
$T_e$ = effective elastic thickness,
$\rho_m$ = mantle density,
$\rho_w$ = water density

**Note on notation:** $w$ is the deflection from the normal plate depth,
**not** bathymetry.

</div>
<div class="col-small small">

1D flexure equation at equilibrium:

$ D\dfrac{\partial^4 w}{\partial x^4} = q - g (\rho_m - \rho_w) w $

<div style="margin-top: 15%;">

$D$ is the flexural rigidity, which reflects the physical properties of the
plate:

$D = \dfrac{E T_e^2}{12(1 - \nu^2)}$

</div>

</div>
</div>

---

# Boundary conditions

<div class="container">
<div class="col-large tiny">

<img src="../assets/flexure-seamount.svg">

$w$ = deflection,
$q(x)$ = force density of the load,
$g$ = gravity,
$E$ = Young's modulus,
$\nu$ = Poisson's ratio,
$T_e$ = effective elastic thickness,
$\rho_m$ = mantle density,
$\rho_w$ = water density

Assume that bending is happening under a finite load $q(x)$, i.e. it's
restricted to a finite domain of $x$

</div>
<div class="col-small small">

No deflection away from the load:

$w(x=0) = 0$

$w(x=x_{max}) = 0$

The plate is horizontal at the boundaries:

$\dfrac{\partial w}{\partial x}(x=0) = 0$

$\dfrac{\partial w}{\partial x}(x=x_{max}) = 0$

</div>
</div>

---

# Solution for the deflection

<div class="container">
<div class="col-large tiny">

<img src="../assets/flexure-setup.svg" width="100%">

</div>
<div class="col-small small">

Write $w(x)$ in terms of measurable quantities:

* Forebulge deflection $w_b$ and peak position $x_b$
* Position $x_0$ where deflection crosses the zero line

</div>
</div>

<div class="small">

$ w(x) = w_b\ e^{\pi/4} \sqrt{2}
\exp\left( -\dfrac{\pi}{4}\left(\dfrac{x - x_0}{x_b - x_0}\right) \right)
\sin\left(\dfrac{\pi}{4}\left(\dfrac{x - x_0}{x_b - x_0}\right) \right) $

</div>

<div class="r-stretch bottom-left">

See "Geodynamics" section 3.17 for a derivation.

</div>

---

# Gravity disturbances

<div class="container">
<div class="col-large small">

gravity disturbance = observed gravity - normal (ellipsoid) gravity

This means that the density anomalies causing the observed disturbance are:

Real Earth densities - Normal Earth densities

Assume that the ellipsoid is layered (including an ocean)

Density anomalies at subduction zones 👉🏽

</div>
<div class="col-small small">

<img src="../assets/disturbance-subduction.svg" style="width: 90%;">

</div>
</div>

---

# Predicting gravity

<div class="container">
<div class="col-left tiny">

<img src="../assets/disturbance-subduction-model.svg">

Model of density anomalies due to subduction. Anomalies are real Earth density
minus normal Earth density.

Assumptions: density contrast between lithosphere-asthenosphere mantle is
negligible, the crust has constant thickness, bending at the surface is equal
to bending at the Moho.

</div>
<div class="col-right small">

Once again, we can model the gravitational attraction of the deflection with
the Bouguer plate approximation:

$ g_{w} = 2 \pi G \Delta\rho_{top} w + 2 \pi G \Delta\rho_{bottom} w $

$\Delta\rho_{top} = \rho_c - \rho_w$ if $w > 0$

$\Delta\rho_{top} = \rho_w - \rho_c$ if $w < 0$

$\Delta\rho_{bottom} = \rho_m - \rho_c$ if $w > 0$

$\Delta\rho_{bottom} = \rho_c - \rho_m$ if $w < 0$

</div>
</div>

---

# Does it fit the data?

We can now predict gravity disturbances and bathymetry caused by the deflection
of the lithosphere across subduction zones.

In the associated **practical** activity, we will implement the corresponding
equations in Python and evaluate how well our model fits the available data
along profiles.

---

# Reading

For an detailed discussion and derivation of equations,
<br>
refer to the excellent textbooks:

* "The Solid Earth" by C. M. R. Fowler (section 9.6)
* "Geodynamics" by Donald Turcotte and Gerald Schubert (section 3.17)

---

<!-- END MATTER -->
<!-- ====================================================================== -->

<!-- .slide: class="slide-license" -->

<div class="centered">
<div>

<p class="license-icons">
<i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i>
</p>

Unless otherwise noted,
the contents of this lecture are
licensed under the
<br>
[Creative Commons Attribution 4.0 International License](https://creativecommons.org/licenses/by/4.0/).

</div>
</div>
