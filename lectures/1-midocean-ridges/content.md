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

# Creation of the<br> oceanic lithosphere at<br> mid-ocean ridges

</div>

## Instructors: **[Leonardo Uieda](https://www.leouieda.com)** <span style="margin: 0 10px">&</span> **Andy Biggin**


<i class="fas fa-envelope fa-fw"></i> [Leonardo.Uieda@liverpool.ac.uk](mailto:Leonardo.Uieda@liverpool.ac.uk)
<span style="margin: 0 20px">|</span>
<i class="fab fa-twitter fa-fw"></i> [@leouieda](https://twitter.com/leouieda)
<span style="margin: 0 20px">|</span>
[<i class="fab fa-creative-commons"></i><i class="fab fa-creative-commons-by"></i> CC-BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)

---

# Aims

Understand the main models for the formation of the oceanic lithosphere,
including:

* The physics behind them
* How they compare to observations
* Their implications for our understanding of ocean floor topography

---

# Mid-ocean ridges

<div class="container">
<div class="col-large tiny">

<img src="../assets/topography.png">

Topography and bathymetry map of the Earth according to the
[ETOPO1](https://doi.org/10.7289/V5C8276M) digital elevation model.

</div>
<div class="col-small">

Oceanic lithosphere is created at **mid-ocean ridges**

Ridges are **chains of shallow bathymetry** cutting across the world's oceans

</div>
</div>

---

# Mid-ocean ridges

<div class="container">
<div class="col-large tiny">

<img src="../assets/global-seismicity.png">

Map of global earthquake hypocenters from the Global CMT Catalog
([Dziewonski et al., 1981](https://doi.org/10.1029/JB086iB04p02825);
[Ekström et al., 2012](https://doi.org/10.1016/j.pepi.2012.04.002))


</div>
<div class="col-small">

Marked by concentrated seismicity at shallow depths

Indicator of movement and a key piece of evidence for sea floor spreading

</div>
</div>

---

# Mid-ocean ridges

<div class="container">
<div class="col-large tiny">

<img src="../assets/global-heat-flow.png">

Map of geothermal heat flow
[(Lucazeau, 2019)](https://doi.org/10.1029/2019GC008389) with elevated values at
mid-ocean ridges and lower values in cratonic regions.

</div>
<div class="col-small">

Available data and models show that **ridges have elevated geothermal heat
flow**.

Important boundary condition for mantle convection

</div>
</div>

---

# Mid-ocean ridges

<div class="container">
<div class="col-large tiny">

<img src="../assets/gravity-disturbance.png">

Map of the gravity disturbance from the EIGEN-6C4 spherical harmonic model
[(Foerste et al., 2014)](https://doi.org/10.5880/icgem.2015.1).
Small values indicate isostatic equilibrium.

</div>
<div class="col-small">

Gravity disturbance data suggests that mid-ocean ridges are in
**isostatic equilibrium**

Ridges can't be compensated by thickened lithosphere since it's created
there

</div>
</div>

---

# Questions

<div class="huge">

* What is the thickness of the oceanic lithosphere?
* Does it vary with lithospheric age?
* Can models match observations of heat flow, age, and bathymetry?

</div>

---

Young lithosphere has higher heat flow than old lithosphere.
<br>
Can we **model** this cooling process?

<div class="container">
<div class="col-left tiny">

<img src="../assets/global-heat-flow.png">

Map of global geothermal heat flow
[(Lucazeau, 2019)](https://doi.org/10.1029/2019GC008389).

</div>
<div class="col-right tiny">

<img src="../assets/lithosphere-age.png">

Map of the age of the oceanic crust and lithosphere
[(Müller et al., 2008)](https://doi.org/10.1029/2007GC001743)
showing good correlation with oceanic heat flow.

</div>
</div>

---

# Some assumptions for our modelling

1. Convection of the mantle is controlled by thin **thermal boundary layers**.
1. Surface boundary layer (lithosphere) has the **greatest temperature gradient**.
1. Away from the ridge, the lithosphere **cools by vertical conduction**.
1. Spreading and cooling are **symmetric** around the ridge axis.
1. As it cools it becomes **denser** and the sea-floor depth increases.
1. Ultimately **initiates subduction** (driving convective flow).

---

# Half-space cooling model

<div class="container">
<div class="col-left tiny">

<img src="../assets/halfspace-model-space.svg">

Sketch of the half-space cooling model as a 2D problem (temperature $T$ as a
function of position $x$ and $z$). The ridge is at $x=0$ and spreading happens
at a uniform velocity $u = \frac{x}{t}$ in both directions.

</div>
<div class="col-right small">

Lithosphere-asthenosphere boundary (LAB) is defined by an **isotherm**

Model starts with asthenosphere temperature $T = T_a$ at the ridge

Temperature at the surface is held at $T_0$.

Cooling by **vertical conduction only** (into the water column) as plate
moves away from ridge

No internal heat generation

</div>
</div>

---

# Switching from $x$ to $t$

<div class="container">
<div class="col-left tiny">

<img src="../assets/halfspace-model-time.svg">

Sketch of the half-space cooling model as a 1D problem (temperature $T$ as a
function of depth $z$ and time $t$). Think of each position away from the ridge
as a **snapshop in time** of a 1D problem since the spreading rate $u$ is
constant and conduction only happens vertically.

</div>
<div class="col-right small">

Spreading rate $u$ ties distance from the ridge $x$ and time: $t = \frac{x}{u}$

Switch from 2D in space to the simpler problem of 1D (vertical) varying with
time

Described by the 1D diffusion equation:

$
\dfrac{\partial^2 T}{\partial z^2}
= \dfrac{1}{\alpha} \dfrac{\partial T}{\partial t}
$

$\alpha$ is the
<a href="https://en.wikipedia.org/wiki/Thermal_diffusivity">thermal
diffusivity</a>\*

</div>
</div>

<div class="r-stretch bottom-right">

\* The Geodynamics book uses $\kappa$ for thermal diffusivity.

</div>

---

# Boundary conditions

A 1D partial differential equation (PDE) with time will require:

**Initial condition:** Profile is at asthenosphere temperature $T=T_a$ at the
ridge (or $t=0$)

**Boundary condition:** The top of the lithosphere $z=0$ is at a constant
temperature $T = T_0$

---

# Solution

<div class="container">
<div class="col-left small">

Temperature as a function of time and depth:

$$
T(z, t) = T_0 + (T_a - T_0)\ \text{erf}
\left(
\dfrac{z}{2\sqrt{\alpha t}}
\right)
$$

<div class="tiny">


</div>

<div class="fragment">

Switching back to $x$:

$$
T(x, z) = T_0 + (T_a - T_0)\ \text{erf}
\left(
\dfrac{z}{2\sqrt{\alpha \frac{x}{u}}}
\right)
$$

</div>

</div>
<div class="col-right tiny">

<img src="../assets/halfspace-model-time.svg">

$
\text{erf}(z) = \dfrac{2}{\sqrt{\pi}} \int\limits_0^z e^{-n^2} dn
$
is the [error function](https://en.wikipedia.org/wiki/Error_function).

</div>
</div>

<div class="r-stretch bottom-right">

See "Geodynamics" sections 4.15 and 4.16 for a derivation.

</div>

---

# Reading

For an detailed discussion and derivation of equations:

* Chapter 7 section 5 of "The Solid Earth" by C. M. R. Fowler.
* Chapter 4 sections 15-17 of "Geodynamics" by D. Turcotte and G. Schubert.

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
