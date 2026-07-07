---
numbering:
  title:
    offset: 0

kernelspec:
  name: python3
  display_name: 'Python 3'
---


(ch-language)=
# The language of Physics
Physics is the science that seeks to understand the fundamental workings of the universe: from the motion of everyday objects to the structure of atoms and galaxies. To do this, physicists have developed a precise and powerful language: one that combines mathematics, colloquial and technical language, and visual representations. This language allows us not only to describe how the physical world behaves, but also to predict how it will behave under new conditions.

In this chapter, we introduce the foundational elements of this language, covering how to express physical ideas using equations, graphs, diagrams, and words. You’ll also get a first taste of how physics uses numerical simulations as an essential complement to analytical problem solving.

This language is more than just a set of tools—it is how physicists *think*. Mastering it is the first step in becoming fluent in physics.

(ch_language_s_representations)=
## Representations

Physics problems and concepts can be represented in multiple ways, each offering a different perspective and set of insights. The ability to translate between these representations is one of the most important skills you will develop as a physics student. In this section, we examine three key forms of representation: equations, graphs and drawings, and verbal descriptions using the context of a base jumper, see {numref}`fig_basejump`.

```{figure} ../images/ch0_Basejumper.jpg
:label: fig_basejump
:width: 70%
:alt: A base jumper jumping from a very high tower.

A base jumper is used as context to get familiar with representation, picture from https://commons.wikimedia.org/wiki/File:04SHANG4963.jpg
```

(ch_language_s_verbal)=
### Verbal descriptions

Words are indispensable in physics. Language is used to describe a phenomenon, explain concepts, pose problems and interpret results. A good verbal description makes clear:
- What is happening in a physical scenario;
- What assumptions are being made (e.g., frictionless surface, constant mass);
- What is known and what needs to be found.

+++ { "page-break": true }
+++

```{example} Base jumper: Verbal description
Let us consider a base jumper jumping from a $300\; \mathrm{m}$ high building. We take that the jumper drops from that height with zero initial velocity. We will assume that the stunt is performed safely and in compliance with all regulations/laws. Finally, we will assume that the problem is 1-dimensional: the jumper drops vertically down and experiences only gravity, buoyancy and air-friction. 

We know (probably from experience) that the jumper will accelerate. Picking up speed increases the drag force acting on the jumper, slowing the *acceleration* (meaning it still accelerates!). The speed keeps increasing until the jumper reaches its terminal velocity, that is the velocity at which the drag (+ buoyancy) exactly balance gravity and the sum of forces on the jumper is zero. The jumper no longer accelerates. 

Can we find out what the terminal velocity of this jumper will be and how long it takes to reach that velocity?
```

(ch_language_s_visual)=
### Visual representations

*Visual representations* help us interpret physical behavior at a glance. Graphs, motion diagrams, free-body diagrams, and vector sketches are all ways to make abstract ideas more tangible.
- **Drawings** help illustrate the situation: what objects are involved, how they are moving, and what forces act on them.
- **Graphs** (e.g., position vs. time, velocity vs. time) reveal trends and allow for estimation of slopes and areas, which have physical meanings like *velocity* and *displacement*.


````{example} Base jumper: Free body diagram
The situation of the base jumper is sketched in {numref}`fig:HailStoneFriction` using a Free body diagram. Note that all details of the jumper are ignored in the sketch.


```{figure} ../images/ch0_HailStoneFriction.svg
:label: fig:HailStoneFriction
:width: 30%
:align: center
:alt: A free body diagram of a base jumper of mass m, with downward velocity and gravitational force, and upward buoyant and friction force.

The different forces acting on the jumper. 
```

- $m$ = mass of jumper (in $\mathrm{kg}$);  
- $v$ = velocity of jumper (in $\mathrm{m/s}$);  
- $F_g$ = gravitational force (in $\mathrm{N}$);  
- $F_f$ = drag force by the air (in $\mathrm{N}$);  
- $F_b$ = buoyancy (in $\mathrm{N}$): like in water also in air there is an upward force, equal to the weight of the displaced air ($\rho_{\text{air}}V_{\text{p}}g$).

````

(ch_language_s_equations)=
### Equations

Equations are the compact, symbolic expressions of physical relationships. They tell us how quantities like velocity, acceleration, force, and energy are connected.

```{example} Base jumper: equations
The forces acting on the jumper are already shown in {numref}`fig:HailStoneFriction`. Balancing of forces tells us that the jumper might reach a velocity such that the drag force and buoyancy exactly balance gravity and the jumper no longer accelerates:

$$F_g = F_f + F_b$$

We can specify each of the forces:

$$\begin{aligned}
F_g &= - mg = -\rho_p V_p g\\
F_f &= \frac{1}{2}\rho_{air}C_D A v^2\\
F_b &= \rho_{air} V_p g
\end{aligned}
$$

with $g$ the acceleration of gravity, $\rho_p$ the density of the jumper ($\approx 10^3 \; \mathrm{kg/m}^3$), $V_p$ the volume of the jumper, $\rho_{air}$ the density of air ($\approx 1.2 \; \mathrm{kg/m}^3$), $C_D$ the so-called drag coefficient, $A$ the frontal area of the jumper as seen by the air flowing past the jumper.
```

A physicist is able to switch between these representations, carefully considering which representations suits best for the given situation. We will practice these when solving problems.

```{danger}
Note that in the example above we neglected directions. In our equations we should have been using vector notation, which we will cover in one of the next sections in this chapter.
```

+++ { "page-break": true }
+++

(ch_language_s_problem_solving)=
## How to solve a physics problem?

One of the most common mistakes made by 'novices' when studying problems in physics is trying to jump as quickly as possible to the solution of a given problem or exercise by picking an equation and slotting in the numbers. For simple questions, this may work. But when problems get more complicated, it is almost a certain route to frustration.

There is, however, a structured way of problem solving, that is used by virtually all scientists and engineers. Later this will be second nature to you, and you will apply this way of working automatically. It is called IDEA, an acronym that stands for:

```{figure} ../images/ch0_IDEA.svg
:name: fig:IDEA
:width: 50%
:alt: A flow diagram linking the four steps of IDEA.
:align: center

IDEA: a structured way of problem solving
```

* **Interpret** - First think about the problem. What does it mean? Usually, making a sketch helps. ***Actually:*** *always start with a sketch*;
* **Develop** - Build a model, from coarse to fine, that is, first think in the governing phenomena and then subsequently put in more details. Work towards writing down the equation of motion and boundary conditions;
* **Evaluate** - Solve your model, i.e. the equation of motion;
* **Assess** - Check whether your answer makes any sense (e.g. units OK? What order of magnitude did we expect?). Is our answer in the order of magnitude that we expected?

We will practice this and we will see that it actually is a very relaxed way of working and thinking. We strongly recommend to apply this strategy for your homework and exams (even though it seems strange in the beginning).

The first two steps (Interpret and Develop) typically take up most of the time spend on a problem.

+++ { "page-break": true }
+++

(ch_language_s_example)=
### Example
Let us reconsider our example and use the IDEA approach to solve it. 

::::{tab-set}

:::{tab-item} Interpret
Three forces act on the jumper, shown in the figure below. Finding the terminal velocity implies that all forces are balanced  $(\sum F=0 )$. 

```{figure} ../images/ch0_HailStoneFriction.svg
:width: 30%
:align: center
:alt: A free body diagram of a base jumper of mass m, with downward velocity and gravitational force, and upward buoyant and friction force.

```

The buoyancy force is much smaller than the force of gravity (about $0.1%$) and we thus may neglect it.

:::
:::{tab-item} Develop
We know all forces: gravitational force equals the drag force
$$ \begin{aligned}
F_g &= F_f\\
mg &= \frac{1}{2}\rho_{air}C_D A v^2
\end{aligned}
$$

:::
:::{tab-item} Evaluate
Assume a mass of $75 \:\mathrm{kg}$, an acceleration due to gravity of $9.81 \: \mathrm{ m/s}^2$, and air density of $1.2 \: \mathrm{ kg/m}^3$, a drag coefficient of $1$, a frontal surface area of $0.7 \: \mathrm{ m}^2$.

$$mg = \frac{1}{2}\rho_{air}C_D A v^2\\$$

Rewriting:

$$ \begin{aligned}
v &= \sqrt{\frac{2mg}{\rho_{air}C_D A }}\\
v &= \sqrt{\frac{2 \cdot 75 \: (\mathrm{ kg}) \cdot 9.81 \: (\mathrm{ m/s}^2)}{1.2 \: (\mathrm{ kg/m}^3) \cdot 1\cdot 0.7 \: (\mathrm{ m}^2) }}\\
v &= 40 \: \mathrm{ m/s}
\end{aligned}
$$


:::
:::{tab-item} Assess
We may know that raindrops typically reach a terminal velocity of less than $10 \: \mathrm{m/s}$. A terminal velocity of $40 \: \mathrm{m/s}$ seems therefore plausible for a much heavier object. 

***Note***: We didn't solve the problem entirely! We only calculated the terminal velocity, where the question was how long it would roughly take to reach such a velocity.
:::
::::

```{danger} Good Practice

It is a good habit to make your mathematical steps small: one-by-one. Don't make big jumps or do multiple steps at once. If you make a mistake, it will be very hard to trace it back.

Next: check always the dimensional correctness of your equations: that is easy to do and you will find the majorities of your mistakes.

Finally, use letters to denote quantities, including $ \pi $.
The reason for this is:
  * letters have meaning and you can easily put dimensions to them;
  * letters are more compact;
  * your expressions usually become easier to read and characteristic features of the problem at hand can be recognized.

```

```{note} Powers of ten
:class: dropdown

In physics, powers of ten are used to express very large or very small quantities compactly and clearly, from the size of atoms ($\approx 10^{-10} \:\mathrm{m}$) to the distance between stars ($\approx 10^{16} \: \mathrm{m}$). This notation helps compare scales, estimate orders of magnitude, and maintain clarity in calculations involving extreme values.

We use prefixes to denote these powers of ten in front of the standard units, e.g. $\mathrm{km}$ for $1000 \; \mathrm{meters}$, $\mathrm{ms}$ for $\mathrm{milliseconds}$, $\mathrm{GB}$ for $\mathrm{gigabyte}$ that is $1 \; \mathrm{billion bytes}$. Here is a list of prefixes.

| Prefix         | Symbol | Math        | Prefix         | Symbol | Math        |
|----------------|--------|-------------|----------------|--------|-------------|
| Yocto          | y      | $10^{-24}$  | Base           | -      | $10^{0}$    |
| Zepto          | z      | $10^{-21}$  | Deca           | da     | $10^{1}$    |
| Atto           | a      | $10^{-18}$  | Hecto          | h      | $10^{2}$    |
| Femto          | f      | $10^{-15}$  | Kilo           | k      | $10^{3}$    |
| Pico           | p      | $10^{-12}$  | Mega           | M      | $10^{6}$    |
| Nano           | n      | $10^{-9}$   | Giga           | G      | $10^{9}$    |
| Micro          | µ      | $10^{-6}$   | Tera           | T      | $10^{12}$   |
| Milli          | m      | $10^{-3}$   | Peta           | P      | $10^{15}$   |
| Centi          | c      | $10^{-2}$   | Exa            | E      | $10^{18}$   |
| Deci           | d      | $10^{-1}$   | Zetta          | Z      | $10^{21}$   |
| Base           | -      | $10^{0}$    | Yotta          | Y      | $10^{24}$   |
```

+++ { "page-break": true }
+++

```{note} On quantities and units
:class: dropdown

Each quantity has a unit. As there are only so many letters in the alphabet (even when including the Greek alphabet), letters are used for multiple quantities. How can we distinguish meters from mass, both denoted with the letter 'm'? Quantities are expressed in italics ($m$) and units are not ($\mathrm{m}$).

We make extensively use of the International System of Units (SI) to ensure consistency and precision in measurements across all scientific disciplines. The seven base SI units are:

| Unit     | Symbol | Quantity             |
|----------|--------|----------------------|
| meter    | m      | length               |
| kilogram | kg     | mass                 |
| second   | s      | time                 |
| ampere   | A      | electric current     |
| kelvin   | K      | temperature          |
| mole     | mol    | amount of substance  |
| candela  | cd     | luminous intensity   |

All other quantities can be derived from these using dimension analysis:

$$
\begin{aligned}
    W &= F \cdot s = m a \cdot s = m \frac{\Delta v}{\Delta t} \cdot s\\
    [\mathrm{J}] &= [\mathrm{N}] \cdot [\mathrm{m}] = [\mathrm{kg}] \cdot [\mathrm{m/s^2}] \cdot [\mathrm{m}] = [\mathrm{kg}] \cdot \frac{[\mathrm{m/s}]}{[\mathrm{s}]} \cdot [\mathrm{m}] = [\mathrm{\frac{kg m^2}{s^2}}]
\end{aligned}
$$

***Note:*** Newton is the person, fully written the unit $\mathrm{N}$ is newton, without capitalization of the first letter.
```

```{tip} 
For a more elaborate description of quantities, units and dimension analysis, see the manual of the [first year physics lab course](https://contemporary-physicslab.github.io/NP-new-style/main/Deel2/MO2.html#grootheden-eenheden-dimensie-analyse-en-constanten).
```
+++ { "page-break": true }
+++

(ch_language_s_calculus)=
## Calculus

Most of the undergraduate theory in physics is presented in the language of Calculus. We do a lot of differentiating and integrating, and for good reasons. The basic concepts and laws of physics can be cast in mathematical expressions, providing us the rigor and precision that is needed in our field. Moreover, once we have solved a certain problem using calculus, we obtain a very rich solution, usually in terms of functions. We can quickly recognize and classify the core features that help us understand the problem and its solution much deeper.

Given the example of the base jumper, we would like to know the jumper's position as a function of time. We can answer this question by applying Newton's second law (though it is covered in secondary school, the next [chapter](./2_NewtonsLaws.md) explains in detail Newton's laws of motion):

$$\sum F = F_g - F_f = m a = m \frac{dv}{dt} $$ 

$$ m \frac{dv}{dt} = m g - \frac{1}{2} \rho_{air} C_D A v^2$$

Clearly this is some kind of differential equation: the change in velocity depends on the velocity itself ($\frac{dv}{dt} = .. v(t)$). Before we even try to solve this problem ($v(t)=...$), we have to dig deeper in the precise notation, otherwise we will get lost in directions and sign conventions.

(ch_language_s_differentiation)=
### Differentiation

Many physical phenomena are described by differential equations. That may be because a system evolves in time, or because it changes from location to location. In our treatment of the principles of classical mechanics, we will use differentiation with respect to time a lot. The reason is obviously found in Newton's $2^{\text{nd}}$ law: $F = ma$. 

The acceleration $a$ is the derivative of the velocity with respect to time ($a\equiv\frac{dv}{dt}$); velocity in itself is the derivative of position with respect to time ($v\equiv\frac{dx}{dt}$). Or when we use the equivalent formulation with momentum: $\frac{dp}{dt} = F$. So, the change of momentum in time is due to forces. Again, we use differentiation, but now of momentum.

There are three common ways to denote differentiation. The first one is by 'spelling it out': 

$$v = \frac{dx}{dt} \: \mathrm{and} \: a = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

- Advantage: it is crystal clear what we are doing.
- Disadvantage: it is a rather lengthy way of writing.

Newton introduced a different flavor: he used a dot above the quantity to indicate differentiation with respect to time. So,

$$v = \dot{x}, \: \mathrm{or} \: a = \dot{v} = \ddot{x}$$

- Advantage: compact notation, keeping equations compact.
- Disadvantage: a dot is easily overlooked or disappears in the writing.

Finally, in math often the prime is used: $\frac{df}{dx} = f'(x)$ or $\frac{d^2f}{dx^2} = f''(x)$.
Similar advantage and disadvantage as with the dot notation.

+++ { "page-break": true }
+++
```{important}
$$v = \frac{dx}{dt} = \dot{x} = x'$$

$$a = \frac{dv}{dt} = \dot{v} = \frac{d^2x}{dt^2}=\ddot{x}$$

It is just a matter of notation.
```
(ch_language_s_definition)=
## Definition of velocity, acceleration and momentum

In mechanics, we deal with forces on particles. We try to describe what happens to the particles, that is, we are interested in the position of the particles, their velocity and acceleration. We need a formal definition, to make sure that we all know what we are talking about.

**1-dimensional case**

In one dimensional problems, we only have one coordinate to take into account to describe the position of the particle. Let's call that $x$. In general, $x$ will change with time as particles can move. Thus, we write $x(t)$ showing that the position, in principle, is a function of time $t$. How fast a particle changes its position is, of course, given by its velocity. This quantity describes how far an object has traveled in a given time interval: $v = \frac{\Delta x}{\Delta t}$. However, this definition gives actually the average velocity in the time interval $\Delta t$. The (momentary) velocity is defined as:

```{important} Definition Velocity
$$v \equiv \lim_{\Delta t \to 0 } \frac{x(t+\Delta t) - x(t)}{(t+\Delta t) - t} = \frac{dx}{dt} $$
```

Note that we here use $\equiv$ rather than $=$ to indicate that this is a definition.

Similarly, we define the acceleration as the change of the velocity over a time interval $\Delta t$: $a = \frac{\Delta v}{\Delta t}$. Again, this is actually the average acceleration and we need the momentary one:

```{important} Definition Acceleration
$$a \equiv \lim_{\Delta t \to 0 } \frac{v(t+\Delta t) - v(t)}{(t+\Delta t) - t} = \frac{dv}{dt} $$

Consequently, 

$$a = \frac{dv}{dt} = \frac{d}{dt} \left ( \frac{dx}{dt} \right ) = \frac{d^2x}{dt^2}$$
```

+++ { "page-break": true }
+++

Now that we have a formal definition of velocity, we can also define momentum: momentum is mass times velocity, in math:

```{important} Definition Momentum
$$p \equiv mv = m\frac{dx}{dt} $$
```

In the above, we have not worried about how we measure position or time. The latter is straight forward: we use a clock to account for the time intervals. To find the position, we need a ruler and a starting point from where we measure the position. This is a complicated way of saying the we need a coordinate system with an origin. But once we have chosen one, we can measure positions and using a clock measure changes with time.



```{figure} ../images/stopmotion.*
:width: 70%
:label: fig_stopmotion
:alt: A video of a toy car rolling down a slope, with its position during each time interval marked by a dot. It can be observed that the distance between the dots increases as the car rides down the slope. 

Calculating velocity requires both position and time, both easily measured e.g. using a stopmotion where one determines the position of the car per frame given a constant time interval.
```

(ch_language_s_vectors)=
### Vectors - more dimensional case

Position, velocity, momentum, force: they are all *{abbr}`vectors (physical quantities that have both a length/magnitude and a direction)`*. In physics we will use vectors a lot. It is important to use a proper notation to indicate that you are working with a vector. That can be done in various ways, all of which you will probably use at some point in time. We will use the position of a particle located at point P as an example.

```{tip}
See the [linear algebra book on vectors](https://interactivetextbooks.tudelft.nl/linear-algebra/Chapter1/Vectors.html).
```

**Position vector**

We write the position **vector** of the particle as $\vec{r}$.
This vector is a 'thing', it exists in space independent of the coordinate system we use. All we need is an origin that defines the starting point of the vector and the point P, where the vector ends.  

```{figure} ../images/ch0_vector.svg
:width: 70%
:label: fig_ch1_vec
:alt: A 2D coordinate system with a vector r, which starts at the origin (0,0) and ends at point P(2,2). 

Some physical quantities (velocity, force etc) can be represented as a vector. They have in common the direction, magnitude and point of application.
```

A coordinate system allows us to write a representation of the vector in terms of its coordinates. For instance, we could use the familiar Cartesian Coordinate system {x,y,x} and represent $\vec{r}$ as a column.

$$\vec{r} \rightarrow \begin{pmatrix}
          x \\
          y \\
          z
    \end{pmatrix}
$$

Alternatively, we could use unit vectors in the x, y and z-direction. These vectors have unit length and point in the x, y or z-direction, respectively. They are denoted in varies ways, depending on taste. Here are 3 examples:

$$ \begin{split}
\hat{x},\;\; \hat{i}, &\;\;\vec{e}_x \\
\hat{y},\;\; \hat{j}, &\;\;\vec{e}_y \\
\hat{z},\;\; \hat{k}, &\;\;\vec{e}_z
\end{split} $$

With this notation, we can write the position vector $\vec{r}$ as follows:

$$ \begin{split}
\vec{r} &= x \hat{x} \;+ y \hat{y} \;+ z \hat{z} \\
\vec{r} &= x \hat{i}\;\; + y \hat{j}\; + z \hat{k} \\
\vec{r} &= x \vec{e}_x + y \vec{e}_y + z \vec{e}_z
\end{split} $$

Note that these representations are equivalent: the difference is in how the unit vectors are named. Also note, that these three representations are all given in terms of vectors. That is important to realize: in contrast to the column notation, now all is written at a single line. But keep in mind: $\hat{x}$ and $\hat{y}$ are perpendicular **vectors**.

```{important} Other textbooks
Note that other textbooks may use bold symbols to represent vectors: $\vec{F}=m\vec{a}$ is the same as $\mathbf{F}=m\mathbf{a}$.
```

```{tip}
Push the ON-button at the top right and the play button next to launch the python app below.
```


+++{"no-pdf": true}
```{code-cell} python
:tag: hide-input
# App on vector addition

import matplotlib.pyplot as plt
import numpy as np
from ipywidgets import interact, FloatSlider

def plot_vector_standaard_form(a_x=2.0, a_y=2.0, b_x=4.0, b_y=1.0):
    a = np.array([a_x, a_y])
    b = np.array([b_x, b_y])
    c = a + b

    fig, ax = plt.subplots(figsize=(6, 6))
    ax.set_xlim(-5, 9)
    ax.set_ylim(-5, 9)
    ax.set_aspect('equal')
    ax.grid(True)
    ax.set_title("Vectoraddition", fontsize=14)

    origin = np.array([0, 0])
    a_tip = a
    b_tip = b
    c_tip = c

    # Vector a
    ax.arrow(*origin, *a, head_width=0.2, head_length=0.3, fc='blue', ec='blue', length_includes_head=True)
    ax.text(*(a / 2 + [0.2, 0.2]), r'$\vec{a}$', fontsize=14, color='blue')
    
    # Vector b 
    ax.arrow(*origin, *b, head_width=0.2, head_length=0.3, fc='red', ec='red', length_includes_head=True)
    ax.text(*(b / 2 + [0.2, 0.2]), r'$\vec{b}$', fontsize=14, color='red')

    # Vector b on a 
    ax.arrow(*a, *b, head_width=0.2, head_length=0.3, fc='red', ec='red', linestyle='dotted', length_includes_head=True)

    # Vector a on b 
    ax.arrow(*b, *a, head_width=0.2, head_length=0.3, fc='blue', ec='blue', linestyle='dotted', length_includes_head=True)

    # Added Vector c = a + b
    ax.arrow(*origin, *c, head_width=0.2, head_length=0.3, fc='purple', ec='purple', length_includes_head=True)
    ax.text(*(c / 2 + [0.2, 0.2]), r'$\vec{c} = \vec{a} + \vec{b}$', fontsize=14, color='purple')


    plt.show()

# Sliders
interact(
    plot_vector_standaard_form,
    a_x=FloatSlider(value=2.0, min=-2.0, max=4.0, step=0.5, description='a x'),
    a_y=FloatSlider(value=2.0, min=-2.0, max=4.0, step=0.5, description='a y'),
    b_x=FloatSlider(value=4.0, min=-2.0, max=4.0, step=0.5, description='b x'),
    b_y=FloatSlider(value=1.0, min=-2.0, max=4.0, step=0.5, description='b y')
)

```
+++


**Differentiating a vector**

We often have to differentiate physical quantities: velocity is the derivative of position with respect to time; acceleration is the derivative of velocity with respect to time. But you will also come across differentiation with respect to position ($\frac{d}{dx}$).  
As an example, let's take velocity. Like in the 1-dimensional case, we can ask ourselves: how does the position of an object change over time? That leads us naturally to the definition of velocity: a change of position divided by a time interval:

```{important} Definition Velocity (Vector)
$$\vec{v} \equiv \lim_{\Delta t \to 0} \frac{\vec{r}(t+\Delta t) - \vec{r}(t)}{\Delta t} = \frac{d\vec{r}}{dt} $$
```

What does it mean? Differentiating is looking at the change of your 'function' when you go from $x$ to $x+dx$ (or from $t$ to $t+\Delta t$):

$$\frac{df}{dx} \equiv \lim_{\Delta x \to 0} \frac{f(x + \Delta x ) - f(x)}{\Delta x}$$

In 3 dimensions we will have that we go from point P, represented by $\vec{r} = x\hat{x} + y\hat{y} + z\hat{z}$ to 'the next point' $\vec{r} + d\vec{r}$. The small vector $d\vec{r}$ is a small step forward in all three directions, that is a bit $dx$ in the x-direction, a bit $dy$ in the y-direction and a bit $dz$ in the z-direction.  
Consequently, we can write $\vec{r} + d\vec{r}$ as

$$\begin{aligned} 
\vec{r} + d\vec{r} &= x\hat{x} + y\hat{y} + z\hat{z} + dx\hat{x} + dy\hat{y} + dz\hat{z} \\
&= (x+dx)\hat{x} + (y+dy)\hat{y} + (z+dz)\hat{z}
\end{aligned}$$

Now, we can take a look at each component of the position and define the velocity component as, e.g., in the x-direction

$$v_x = \lim_{\Delta t \to 0} \frac{x(t + \Delta t ) - x(t)}{\Delta t} = \frac{dx}{dt}$$

Applying this to the 3-dimensional vector, we get

$$\begin{split}
\vec{v} \equiv \frac{d\vec{r}}{dt} &= \frac{d}{dt} \left ( x\hat{x} + y\hat{y} + z\hat{z} \right ) \\
 &=\frac{dx}{dt}\hat{x} + \frac{dy}{dt}\hat{y} + \frac{dz}{dt}\hat{z} \\
 &= v_x \hat{x} + v_y \hat{y} + v_z \hat{z}
\end{split}$$

Note that in the above, we have used that according to the product rule:  

$$\frac{d}{dt} (x\hat{x} ) = \frac{dx}{dt}\hat{x} + x\frac{d\hat{x}}{dt} = \frac{dx}{dt}\hat{x}$$

since $\frac{d\hat{x}}{dt} = 0$ (the unit vectors in a Cartesian system are constant). This may sound trivial: how could they change; they have always length 1 and they always point in the same direction. Trivial as this may be, we will come across unit vectors that are not constant as their direction may change. But we will worry about those examples later.

Now that the velocity of an object is defined, we can introduce its momentum:

```{important} Definition Momentum (Vector)
$$\vec{p} \equiv m\vec{v} = m\frac{d\vec{r}}{dt} $$
```

Albeit we have now a formal definition of momentum, we come later to its physical interpretation.  

We can use the same reasoning and notation for acceleration:

```{important} Definition Acceleration (Vector)
$$\vec{a} \equiv \lim_{\Delta t \to 0} \frac{\vec{v}(t+\Delta t) - \vec{v}(t)}{\Delta t} = \frac{d\vec{v}}{dt} = \frac{d^2\vec{r}}{dt^2} $$
```


````{example} The base jumper

Given the above explanation, we can now reconsider our description of the base jumper. 

```{figure} ../images/ch0_HailStoneFriction.svg
:width: 30%
:align: center
:alt: A free body diagram of a base jumper of mass m, with downward velocity and gravitational force, and upward buoyant and friction force.
```

We see a z-coordinate pointing upward, where the velocity. As gravitational force is in the direction of the ground, we can state

$$\vec{F_g} = - m g \hat{z}$$

Buoyancy is clearly along the z-direction, hence

$$\vec{F_b} = \rho_{air} V g \hat{z}$$

The drag force is a little more complicated as the direction of the drag force is always against the direction of the velocity $-\vec{v}$. However, in the formula for drag we have $v^2$. To solve this, we can write

$$\label{eq_Ff} \vec{F_f} = -\frac{1}{2}\rho_{air}C_DA|v|\vec{v}$$

Note that $\hat{z}$ is missing in equation {eq}`eq_Ff` on purpose. That would be a simplification that is valid in the given situation, but not in general.
````

(ch_language_s_numerical)=
## Numerical computation and simulation

In simple cases we can obtain a physical model where we can derive an analytical solution. In the case of the base jumper, an analytical solution exists, though it is not trivial and requires some advanced operations as separation of variables and partial fractions:

$$ v(t) = \sqrt{\frac{mg}{k}}\tanh(\sqrt{\frac{kg}{m}}t) $$ 

with

$$ k = \frac{1}{2} \rho_{air} C_D A $$

In this case there is nothing to add or gain from a numerical analysis. Nevertheless, it is instructive to see how we could have dealt with this problem using numerical techniques. One way of solving the problem is, to write a computer code (e.g. in python) that computes from time instant to time instant the force on the jumper, and from that updates the velocity and subsequently the position.

```{code}
some initial conditions
t = 0
x = x_0
v = 0
dt = 0.1 

for i is 1 to N:
    compute F: formula
    compute new v: v[i+1] = v[i] - F[i]/m*dt
    compute new x: x[i+1] = x[i] + v[i]*dt
    compute new t: t[i+1] = t[i] + dt
```

You might already have some experience with numerical simulations. {numref}`fig_num_ana` presents a script for the software Coach, which you might have encountered in secondary school.

```{figure} ../images/ch0_numcoach.svg
:label: fig_num_ana
:width: 90%
:alt: A table containing the numerical model in a source code font. 

An example of a numerical simulation made in Coach. At the left the iterative calculation process, at the right the initial conditions.
```

````{example} The base jumper

Let us go back to the context of the base jumper and write some code.

First we take: $k = \frac{1}{2} \rho_{air} C_D A $ which eases writing. Newton's second law then becomes:

$$ m \vec{a} = -m \vec{g} - k |v|\vec{v}$$

We rewrite this to a proper differential equation for $v$ into a finite difference equation. That is, we go back to how we came to the differential equation:

$$ m \lim_{\Delta t \rightarrow 0} \frac{\vec{v}(t+\Delta t) - \vec{v}(t)}{\Delta t} = \vec{F}_{net} $$

with $\vec{F}_{net}= -m \vec{g} - k |v|\vec{v}$

On a computer, we cannot literally take the limit of $\Delta t$ to zero, but we can make $\Delta t$ very small. If we do that, we can rewrite the difference equation (thus not taken the limit):

$$ \vec{v}(t+ \Delta t) = \vec{v}(t) + \frac{\vec{F}}{m}\Delta t $$

This expression forms the heart of our numerical approach. We will compute $v$ at discrete moments in time: $t_i = 0, \Delta t, 2\Delta t, 3\Delta t, ...$. We will call these values $v_i$. Note that the force can be calculated at time $t_i$ once we have $v_i$. 

$$
\begin{aligned}
F_{i} &= m g - k |v_i|v_i\\
v_{i+1} &= v_{i} + \frac{F_i}{m} \Delta t
\end{aligned}
$$

Similarly, we can keep track of the position:

$$\frac{dx}{dt} = v \Rightarrow x_{i+1} = x_i + v_i \Delta t$$

With the above rules, we can write an iterative code:

```{code-cell} Python
:tag: [hide-input,skip-execution]
:linenos:

# Simulation of a base jumper 

## Importing libraries
import numpy as np
import matplotlib.pyplot as plt

## Constants
rho = 1.29 #kg/m^3
A = 0.7 #m^2
m = 75 #kg
C_d = 1.0 #-
k = 1/2*rho*A*C_d #kg/m
g = 9.81 #m/s^2

## Time step
dt = 0.01 #s
t = np.arange(0, 12, dt) #s

## Initial conditions
z = np.zeros(len(t)) #m
v = np.zeros(len(t)) #m/s
z[0] = 300 #m

for i in range(0, len(t)-1):
    F = - m*g - k*abs(v[i])*v[i]  #N
    v[i+1] = v[i] + F/m*dt #m/s
    z[i+1] = z[i] + v[i]*dt #m
    if z[i+1] < 0:
        break

v_t = np.sqrt(m*g/k)*np.tanh(np.sqrt(k*g/m)*t) #m/s

## Plotting results
figs, axs = plt.subplots(1, 2, figsize=(10, 5)) 

axs[0].set_xlabel('Time (s)')
axs[0].set_ylabel('Velocity (m/s)')
axs[0].plot(t, v, 'k.', markersize=1, label='numerical solution')
axs[0].plot(t, -v_t, 'r--', label='analytical solution')
axs[0].legend()

axs[1].set_xlabel('Time (s)')
axs[1].set_ylabel('Position (m)')
axs[1].plot(t, z, 'k.', markersize=1)

#plt.savefig('../images/basejumpgraph.svg')

plt.show()
```

```{figure} ../images/basejumpgraph.svg
:width: 100%

```
Important to note is the sign-convention which we adhere to. Rather than using $v^2$ we make use of $|v|v$ which takes into account that drag is always against the direction of movement. Note as well the similarity between the analytical solution and the numerical solution.

To come back to our initial problem:  
It roughly takes $10 \: \mathrm{s}$ to get close to terminal velocity (note that without friction the velocity would be $98 \: \mathrm{m/s}$). The building is not high enough to reach this velocity (safely).
````

````{exercise} Base jumper with initial velocity &#127798;
:label: ex_sim_v

Change the code so that the base jumper starts with an initial velocity along the z-direction.

Is the acceleration in the z-direction with and without initial velocity the same? Elaborate.

```{pyodide}

# Simulation of a base jumper 

## Importing libraries
import numpy as np
import matplotlib.pyplot as plt

## Constants
rho = 1.29 #kg/m^3
A = 0.7 #m^2
m = 75 #kg
C_d = 1.0 #-
k = 1/2*rho*A*C_d #kg/m
g = 9.81 #m/s^2

## Time step
dt = 0.01 #s
t = np.arange(0, 12, dt) #s

## Initial conditions
z = np.zeros(len(t)) #m
v = np.zeros(len(t)) #m/s
z[0] = 300 #m

for i in range(0, len(t)-1):
    F = - m*g - k*abs(v[i])*v[i]  #N
    v[i+1] = v[i] + F/m*dt #m/s
    z[i+1] = z[i] + v[i]*dt #m
    if z[i+1] < 0:
        break

v_t = np.sqrt(m*g/k)*np.tanh(np.sqrt(k*g/m)*t) #m/s

## Plotting results
figs, axs = plt.subplots(1, 2, figsize=(10, 5)) 

axs[0].set_xlabel('Time (s)')
axs[0].set_ylabel('Velocity (m/s)')
axs[0].plot(t, v, 'k.', markersize=1, label='numerical solution')
axs[0].plot(t, -v_t, 'r--', label='analytical solution')
axs[0].legend()

axs[1].set_xlabel('Time (s)')
axs[1].set_ylabel('Position (m)')
axs[1].plot(t, z, 'k.', markersize=1)

plt.show()
```
````

