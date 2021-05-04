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

# Bending of the oceanic lithosphere at subduction zones

</div>

## Instructors: **[Leonardo Uieda](https://www.leouieda.com)** <span style="margin: 0 10px">&</span> **Andy Biggin**


<i class="fas fa-envelope fa-fw"></i> [Leonardo.Uieda@liverpool.ac.uk](mailto:Leonardo.Uieda@liverpool.ac.uk)
<span style="margin: 0 20px">|</span>
<i class="fab fa-twitter fa-fw"></i> [@leouieda](https://twitter.com/leouieda)
<span style="margin: 0 20px">|</span>
[<i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i> CC-BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

---

# Aims

Understand the processes associated with
<br>
subduction of the oceanic lithosphere:

* How we image slab geometry
* Flexure of the lithosphere in convergent margins
* How subduction appears in gravity, topography, and bathymetry

---

# Overview

<div class="container">
<div class="col-large tiny">

<img src="../assets/Subduction-en.png" width="100%">

</div>
<div class="col-small small">

Subduction is a big part of global tectonics

Possible driver of convection in the mantle

Important global cycles: water and carbon

Understanding subduction is key to understanding the deep Earth

</div>
</div>

<div class="r-stretch bottom-left">

Image credit:
[K. D. Schroeder](https://commons.wikimedia.org/wiki/File:Subduction-en.svg) (CC-BY-SA)

</div>

---

# Where is the slab?

<div class="container">
<div class="col-large small">

The cold subducting slab heats and deforms causing deep earthquakes (70-300km)

This region is known as the Wadati-Benioff zone

The surrounding asthenosphere is ductile and cannot cause earthquakes

Hypocenters provide an image of the slab

<div class="tiny">

Example: hypocenters along the Japan
subduction zone from the Global CMT Catalog
([Dziewonski et al., 1981](https://doi.org/10.1029/JB086iB04p02825);
[Ekström et al., 2012](https://doi.org/10.1016/j.pepi.2012.04.002))

</div>

</div>
<div class="col-small tiny">

<img src="../assets/japan-trench-globalcmt.png" style="width: 85%;">

</div>
</div>

<div class="r-stretch bottom-left">

This is still used to determine slab geometry,
for example the 2018 [Slab2](https://doi.org/10.1126/science.aat4723) model.

</div>

---

# At the surface

<div class="container">
<div class="col-large tiny">

<img src="../assets/profiles-mariana.png">

Profile of bathymetry across the Mariana Trench subduction.

</div>
<div class="col-small small">

Subducting plate bends under the load, creating trenches

Bending causes a forebulge next to the trench

Island arcs are often associated with the overlying plate

Examples: Japan, Philippines, Tonga, Solomon Islands

</div>
</div>

<div class="r-stretch bottom-left">

The Pacific plate is older (hence cooler and denser). How can we tell from
comparing the bathymetry the two plates?

</div>

---

# At the subsurface

<div class="container">
<div class="col-large tiny">

<img src="../assets/Cross_section_of_mariana_trench.svg">

</div>
<div class="col-small small">

Subduction brings water (in minerals) to the mantle

Hydration reduces the melting point of mantle rocks

Melt rises to the surface

Associated volcanism creates island arcs

</div>
</div>

<div class="r-stretch bottom-left">

Image credit:
[V. Ezekowitz](https://en.wikipedia.org/wiki/File:Cross_section_of_mariana_trench.svg)
(CC-BY-SA)

</div>

---

<!-- .slide: class="slide-transition" -->

<div class="centered">
<div>

# What physical model describes <br> bending during subduction?

Is it able to explain surface geophysical observations?

</div>
</div>

---

# Flexure of an elastic plate

<div class="container">
<div class="col-large tiny">

<img src="../assets/flexure-concepts.svg">

$w$ = deflection,
$q$ = force density of the load,
$g$ = gravity,
$E$ = Young's modulus,
$\nu$ = Poisson's ratio,
$T_e$ = effective elastic thickness

**Note on notation:** $w$ is the deflection from the normal plate depth, **not** bathymetry.
Away from subduction zones, we expect $w = 0$.

</div>
<div class="col-small small">

1D flexure equation at equilibrium:

$ D\dfrac{\partial^4 w}{\partial x^4} = q - g (\rho_m - \rho_c) w $

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

<img src="../assets/flexure-boundary-conditions.svg" width="100%">

</div>
<div class="col-small small">

Bending under an **end load**:

1. No flexure far away from the trench, $w \to 0$ as $x \to \infty$
1. Load of $-V_0$ is applied at $x = 0$
1. The *bending moment* at $x = 0$ is $M_0$

**Problem:** In reality $M_0$ and $V_0$ are unknown.

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

* "The Solid Earth" by C. M. R. Fowler, section 9.6
* "Geodynamics" by Donald Turcotte and Gerald Schubert, sections 3.17

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
