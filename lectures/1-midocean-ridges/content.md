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

<div class="centered">
<div>

# Some assumptions for our modelling

1. Away from the ridge, the lithosphere **cools by vertical conduction**.
1. Spreading and cooling are **symmetric** around the ridge axis.
1. As it cools it becomes **denser** and the sea-floor depth increases.
1. Ultimately, this process **initiates subduction** (driving convective flow).

</div>
</div>

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

<div class="container">
<div class="col-left tiny">

<img src="../assets/halfspace-model-time.svg">

</div>
<div class="col-right small">

**Initial condition:** Profile is at asthenosphere temperature $T=T_a$ at the
ridge (or $t=0$)

**Boundary condition:** The top of the lithosphere $z=0$ is at a constant
temperature $T = T_0$

</div>
</div>

---

Solving the diffusion equation and applying
<br>
the boundary and initial conditions

<div class="container">
<div class="col-left small">

We get temperature as a function of time and depth:

$$
T(z, t) = T_0 + (T_a - T_0)\ \text{erf}
\left(
\dfrac{z}{2\sqrt{\alpha t}}
\right)
$$

<div class="tiny">

$
\text{erf}(x) = \dfrac{2}{\sqrt{\pi}} \int\limits_0^x e^{-n^2} dn
$
is the [error function](https://en.wikipedia.org/wiki/Error_function), which
we can easily calculate numerically using Python or Matlab.

</div>

</div>
<div class="col-right tiny">

<img src="../assets/halfspace-model-time.svg">

</div>
</div>

<div class="r-stretch bottom-right">

See "Geodynamics" sections 4.15 and 4.16 for a derivation.

</div>

---

# Example

<div class="container">
<div class="col-large">

<img src="../assets/halfspace-temperature.png">

</div>
<div class="col-small small">

Calculate $T(z, t)$ for a range of times and depths assuming:

* $T_0 = 273\ K$
* $T_a = 1300\ K$
* $\alpha = 1\ mm^2/s$

</div>
</div>

---

# Comparing with observations

Now that we have a model, we can compare **observations** to values predicted
by the model.

We can't measure temperature up to depths of 100s of km.

So we need to use our model to predict other observables, like **heat flow** at
the surface and **bathymetry**.

---

# Heat flow

<div class="container">
<div class="col-large tiny">

<img src="../assets/global-heat-flow.png">

Like much of geophysics, this map is actually an interpolation of several
scattered data sources
[(Lucazeau, 2019)](https://doi.org/10.1029/2019GC008389).

</div>
<div class="col-small small">

Can be measured in ocean bottom drilling operations (expensive)

Difficult to remove effects of hydrothermal convection in younger lithosphere

Data compilations exist that try to control for these effects

</div>
</div>

---

# Heat flow for half-space cooling

<div class="small">

From [Fourier's law](https://en.wikipedia.org/wiki/Thermal_conduction#Fourier's_law),
heat flow is:
$\ q(z) = -k \dfrac{\partial T}{\partial z}$

We want to calculate heat flow at the surface $q(z=0) = q_0$

Substituting $T$ from the half-space model\*:
$\ q_0(t) = k \dfrac{T_a - T_0}{\sqrt{\pi \alpha t}}$

Assuming we know $T_a$, $T_0$, $\alpha$, and $k$ we can calculate heat flow
<br>
as a function of lithospheric age

</div>

<div class="r-stretch bottom-left">

$k$ is the [thermal conductivity](https://en.wikipedia.org/wiki/Thermal_conductivity)
<br>
\*See "Geodynamics" section 4.15 for a derivation
(the sign here is flipped because most data have positive flow upward instead
of downward)

</div>

---

# Bathymetry

<div class="container">
<div class="col-left tiny">

<img src="../assets/topography.png">

[ETOPO1](https://doi.org/10.7289/V5C8276M) is also the result of the
integration of several different data sources, including shipborne surveys and
satellite data.

</div>
<div class="col-right small">

Can be measured to high resolution from ships using
[singlebeam and multibeam echosounders](https://en.wikipedia.org/wiki/Multibeam_echosounder)
but at high cost and low spatial coverage

Or from space with
[satellite altimetry](https://en.wikipedia.org/wiki/Satellite_geodesy#Altimetry)
for lower resolution and global coverage

</div>
</div>

---

# Bathymetry for half-space cooling

<div class="container">
<div class="col-left tiny">

<img src="../assets/cooliing-and-bathymetry.svg">

</div>
<div class="col-right small">

We know from gravity disturbances that ridges are in isostatic equilibrium

At a compensation depth $D$ the mass of the column above any point $x$ must be
the same

At the ridge ($x = t = 0$), the total is the mass of asthenosphere plus the
water column with depth $w_r$

$$
\rho_w w_r + \rho_a (D - w_r)
$$

</div>
</div>

<div class="r-stretch bottom-left">

Assuming columns with unit area.

</div>

---

# Bathymetry for half-space cooling


<div class="container">
<div class="col-left tiny">

<img src="../assets/cooliing-and-bathymetry.svg">

</div>
<div class="col-right small">

At a distance $x$, the total is sum of the mass of the asthenosphere,
lithosphere, and water

Assuming that the density of the lithosphere varies with depth $z$:

$
\rho_w w + \rho_a (D - L - w) + \int\limits_{w}^{w + L}\rho(z) dz
$

</div>
</div>

---

# Bathymetry for half-space cooling


<div class="container">
<div class="col-left tiny">

<img src="../assets/cooliing-and-bathymetry.svg">

</div>
<div class="col-right small">

The density of the lithosphere will also depend on its **temperature**,
which we can calculate as a function of $x$ and $z$ from our model

Assuming density variations are due to thermal expansion:

$$
\rho(x, z) = \rho_a \left[1 - \alpha_V [T(x, z) - T_a]\right]
$$

</div>
</div>

<div class="r-stretch bottom-right">

$\alpha_V$ is the coefficient of thermal expansion

</div>

---

# Bathymetry for half-space cooling


<div class="container">
<div class="col-left tiny">

<img src="../assets/cooliing-and-bathymetry.svg">

</div>
<div class="col-right small">

Equating the total masses at the ridge and at $x$, substituting the density
from thermal expansion, integrating, and converting $x$ back to $t$ we get\*:

$$
w(t) = w_r + \dfrac{2 \rho_a \alpha_V (T_a - T_0)}{\rho_a - \rho_w}
\sqrt{\dfrac{\alpha t}{\pi}}
$$

</div>
</div>

<div class="r-stretch bottom-right">

\*See "The Solid Earth" section 7.5.2 for a derivation.

</div>

---

# Does it fit the data?

Now that we can predict two observable quantities (heat flow and bathymetry as
functions of lithospheric age), we can test the half-space cooling model.

In the associated **practical** activity, we will implement the corresponding
equations in Python and evaluate how well our model fits the available data.

---

# Reading

For an detailed discussion and derivation of equations,
<br>
refer to the excellent textbooks:

* "The Solid Earth" by C. M. R. Fowler (chapter 7 section 5)
* "Geodynamics" by D. Turcotte and G. Schubert (chapter 4 sections 15-17)

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
