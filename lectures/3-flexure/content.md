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

# The load

<div class="container">
<div class="col-large tiny">

<img src="../assets/flexure-seamount-load.svg">

$w$ = deflection,
$q(x)$ = force density of the load,
$g$ = gravity,
$\rho_c$ = load density

Assume that bending is happening under a finite load $q(x)$, i.e. it's
restricted to a finite domain of $x$

</div>
<div class="col-small small">

The load $q(x)$ is the weight of the seamount per unit area:

$q(x) = -g \rho_c h(x)$

$h(x)$ is the height of the seamount at position $x$

The minus sign indicates that the force is downwards

</div>
</div>

---

# Solution by finite-differences

<div class="small">

Approximate the derivatives by differences:

$\dfrac{\partial w}{\partial x}(x) \approx \dfrac{w(x + \Delta x) - w(x)}{\Delta x}$

Discretize the continuous $w(x)$ into $w_0, w_1, \ldots, w_{N-1}$ with $\Delta x$ spacing:

<img src="../assets/finite-differences-grid-first-order.svg" style="width: 100%; margin-top: -2%;">

</div>

---

# Higher order derivatives

<div class="small">

<img src="../assets/finite-differences-grid.svg">

</div>

---

# Flexure in finite-differences

<div class="small">

The differential equation becomes\*:

$D \dfrac{w_{i+2} - 4w_{i+1} + 6w_i - 4w_{i-1} + w_{i-2}}{\Delta x^4} = q_i -
(\rho_m - \rho_w) g\ w_i$

with boundary conditions:

$w_0 = 0$,
$w_{N-1} = 0$,
$\dfrac{w_1- w_0}{\Delta x} = 0$,
$\dfrac{w_{N-1} - w_{N-2}}{\Delta x} = 0$

</div>
<div class="r-stretch bottom-right">

\*
For $i$ ranging from $2$ to $N - 3$.
$N$ is the number of points in our discretized solution.

</div>

---

# Solve for $w$

<div class="small">

Separate $w$ to one side of the equation:

<p style="margin-bottom: 0;">
$D w_{4} - 4 D w_{3} + \left[6D + \Delta x^4 (\rho_m - \rho_w) g\right] w_2 - 4 D w_{1} + D w_{0} = \Delta x^4 q_2$
</p>
<p class="fragment" style="margin-bottom: 0;">
$D w_{5} - 4 D w_{4} + \left[6D + \Delta x^4 (\rho_m - \rho_w) g\right] w_3 - 4 D w_{2} + D w_{1} = \Delta x^4 q_3$
<br>
...
<br>
$D w_{N-1} - 4 D w_{N-2} + \left[6D + \Delta x^4 (\rho_m - \rho_w) g\right] w_{N-3} - 4 D w_{N-4} + D w_{N-5} = \Delta x^4 q_{N-3}$
</p>
<p class="fragment" style="margin-bottom: 0;">
$w_0 = 0$
<br>
$w_{N-1} = 0$
<br>
$w_1- w_0 = 0$
<br>
$w_{N-1} - w_{N-2} = 0$
</p>

</div>
<div class="r-stretch bottom-right fragment">

Linear system with $N$ equations and $N$ unknowns.
<br>
Solve it to find values of $w$.

</div>

---

# Predicting gravity

<div class="container">
<div class="col-large tiny">

Model of density anomalies due to flexure by a seamount. Anomalies are real
Earth density minus normal Earth density.

<img src="../assets/disturbance-flexure-model.svg">

Assumptions: density contrast between lithospheric mantle and asthenosphere is
negligible, the crust has constant thickness, bending at the surface is equal
to bending at the Moho.

</div>
<div class="col-small small">

Model the gravitational attraction of the deflection with the Bouguer plate
approximation:

$g \approx 2 \pi G \Delta \rho |w|$

The seamount will have a different contrast and thickness so we can't easily
combine the top and bottom effects.

</div>
</div>

---

# Does it fit the data?

We can now predict gravity disturbances and bathymetry caused by the deflection
of the lithosphere under the load of a seamount.

In the associated **practical** activity, we will implement the corresponding
equations in Python and evaluate how well our model fits the available data
along profiles.

---

# Reading

For an detailed discussion and derivation of some equations,
<br>
refer to the excellent textbooks:

* "The Solid Earth" by C. M. R. Fowler (section 5.7)
* "Geodynamics" by Donald Turcotte and Gerald Schubert (section 3.16)

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
