---
numbering:
  title: 
    offset: 0
---

(ch_WorkEnergy)=
# Work and Energy

```{index} work; energy

```
(sec_WorkEnergy_work)=
## Work
Work and energy are two important concepts. {index}`Work <Work; definition>` is the transfer of energy that occurs when a force is applied to an object and causes displacement in the direction of that force, calculated as 'force times path' . However, we need a formal definition:

*if a point particle moves from $\vec{r}$ to $\vec{r} + d\vec{r}$ and during this interval a force $\vec{F}$ acts on the particle, then this force has performed an amount of work equal to:*

$$dW = \vec{F} \cdot d\vec{r}$$

```{figure} ../images/ch4_Work.svg
:label: fig_Work
:width: 60%
:alt: A curved blue line is drawn with two points marked on it. An arrow labeled r extends from an origin point to the first point on the curve. Another arrow labeled r+dr extends from the origin to the second point, a short distance away. A third arrow labeled dr connects the heads of the other two vectors. 
:align: center

Path of a particle.
```

Note that this an *{abbr}`inner product (a mathematical operation that takes two vectors and returns a scalar, measuring how much one vector extends in the direction of the other)`* between two vectors, resulting in a *{abbr}`scalar (a quantity that has only magnitude and no direction,)`* . In other words, work is a number, not a vector. It has no direction. That is one of the advantages over force.

$$
dW = \vec{F} \cdot d\vec{r} = F_x dx + F_y dy + F_z dz
$$

Work done on $m$ by $F$ during motion from 1 to 2 over a prescribed trajectory:

$$
W_{12} = \int_1^2 \vec{F} \cdot d\vec{r}
$$

Keep in mind: in general the work depends on the starting point 1, the end point 2 and on the trajectory. Different trajectories from 1 to 2 may lead to different amounts of work.

```{tip}
See also the chapter in the [linear algebra book on the inner product](https://interactivetextbooks.tudelft.nl/linear-algebra/Chapter1/Inner_Product.html)
```

## Kinetic Energy
{index}`Kinetic energy <Energy; kinetic>` is defined and derived using the definition of work and Newton's $ 2^{nd} $ Law.

The following holds: if work is done on a particle, then its kinetic energy must change. And vice versa: if the kinetic energy of an object changes, then work must have been done on that particle. The following {index}`derivation <Energy; kinetic; derivation>` shows this.

$$
W_{12} = \int_1^2 \vec{F} \cdot d\vec{r} = \int_1^2 \vec{F} \cdot \frac{d\vec{r}}{dt}dt = \int_1^2 \vec{F} \cdot \vec{v} dt \\
       = \int_1^2 m\frac{d\vec{v}}{dt} \cdot \vec{v} dt = m\int_1^2 \vec{v} \cdot d\vec{v} =m [\frac{1}{2}\vec{v}^2]_1^2 \\
       = \frac{1}{2}m\vec{v}_2^2-\frac{1}{2}m\vec{v}_1^2
$$


It is from the above that we indicate $\frac{1}{2}m\vec{v}^2$ as kinetic energy.  It is important to realize that the concept of kinetic energy does not bring anything that is not contained in N2 to the table. But it does give a new perspective: kinetic energy can only be gained or lost if a force performs work on the particle. And vice versa: if a force performs work on a particle, the particle will change its kinetic energy. 

Obviously, if more than one force acts, the net work done on the particle determines the change in kinetic energy. It is perfectly possible that force 1 adds an amount $ W $ to the particle, whereas at the same time force 2 will take out an amount $ -W $. This is the case for a particle that moves under the influence of two forces that cancel each other: $ \vec{F}_1 = -\vec{F}_2 $. From Newton 2, we immediately infer that if the two forces cancel each other, then the particle will move with a constant velocity. Hence, its kinetic energy stays constant. This is in line with the fact that in this case the net work done on the particle is zero: 

$$ W_1 + W_2 = \int_1^2 \vec{F}_1 \cdot d\vec{r} + \int_1^2 \vec{F}_2 \cdot d\vec{r} = \int_1^2 \vec{F}_1 \cdot d\vec{r} - \int_1^2 \vec{F}_1 \cdot d\vec{r} = 0 $$


## Worked Examples

```{exercise} Carrying a weight
:label: ex_carrying

You carry a heavy backpack $m = 20\ \mathrm{kg}$ from Delft to Rotterdam ($20\ \mathrm{km}$). What is the work that you have done against the gravitational force? 
```

```{solution} ex_carrying
:class: dropdown

The answer is, of course, zero! That is because the path (from Delft to Rotterdam) is perpendicular to the gravitational force. Therefore the inner product $\vec{F_g}\cdot d\vec{r}=0$ over the whole way. Let us look at it more formally, this will help us when things get more complicated later. 

The force is $\vec{F_g}(x,y,z)=(0,0,-mg)=-mg\hat{z}$ and we choose our coordinate system such that the path be along the $x$-axis, the $y$-coordinate is zero and we the backpack is at height $z=1$ m. 
	
$$
	W_g = \int_{Delft}^{Rott} F_x dx + F_y dy + F_z dz = \int F_x dx|_{y=0,z=1} = \int 0\, dx = 0
$$

So gravity has not performed work on your backpack. Similarly, you have exercised a force $\vec{F}_N$ on the backpack. As the backpack doesn't change its vertical coordinate, we know $\vec{F}_N + \vec{F}_g = 0$. And immediately, we see:  

	
$$
	W_N = \int_{Delft}^{Rott} F_{Nx} dx + F_{Ny} dy + F_{Nz} dz = \int F_x dx|_{y=0,z=1} = \int 0\, dx = 0
$$

You didn't perform any work either. This may feel strange or even wrong. After all, you will probably be pretty tired after the walk. However, that is due to the internal working of our muscles and body. In order to sustain the force $\vec{F}_N$ humans do use energy: work is done in their muscles. But from a physics point of view: no work is done on the backpack.

```

```{exercise} Compressing a spring [^TI]
:label: ex_ch4_spring
You're compressing an uncompressed spring with spring constant $k$ over a distance $x$. How much work do you need to do? 
```

[^TI]: Exercise from Idema, T. (2023). Introduction to particle and continuum mechanics. https://doi.org/10.59490/tb.81



```{solution} ex_ch4_spring
:class: dropdown

$$ W = \int_{x_1}^{x_2} F \mathrm{d}x = \int_{0}^{x} kx \mathrm{d}x = \frac{1}{2}kx^2$$

```


````{exercise} Work in a force field
:label: ex_workinF

Now we consider a force field $\vec{F}(x,y)=(-y,x^2)=-y \hat{x} +x^2 \hat{y}$. We compute the work done over a path from the origin $(0,0)$ to $(1,0)$ and then to $(1,1)$ first along the $x$-axis and then parallel to the $y$-axis. 

```{figure} ../images/force_field.png
:width: 50%
:alt: A vector field is plotted. A red line is drawn from (0,0) to (1,0) and then to (1,1). 
```
````

```{solution} ex_workinF
:class: dropdown

We can split up the integral in these two parts as the direction in both parts is constant, therefore the inner product can be separated out.

$$
	\begin{array}{rcl}
	W &=& \int_{(0,0)}^{(1,0)} \vec{F}\cdot d\vec{r} + \int_{(1,0)}^{(1,1)} \vec{F}\cdot d\vec{r} \\
	&=& \int_{(0,0)}^{(1,0)} F_x dx|_{y=0} + \int_{(1,0)}^{(1,1)} F_y dy|_{x=1}\\
	&=&  \int_{(x=0)}^{(x=1)} -y\,dx|_{y=0} +   \int_{(y=0)}^{(y=1)} x^2\,dy|_{x=1}\\
	&=& -yx|_{x=0}^{x=1}|_{y=0} + x^2y|_{y=0}^{y=1}|_{x=1} = 1
	\end{array}
$$ 
	
Try to integrate the force field yourself along a different path $(0,0)\to(0,1)\to(1,1)$ to the same end point.

$$
	\begin{array}{rcl}
	W &=& \int_{y=0}^{y=1} F_y \,dy|_{x=0} + \int_{x=0}^{x=1} 	F_x\,dx|_{y=1} \\
	&=& \int_{y=0}^{y=1} x^2\,dy|_{x=0} + \int_{x=0}^{x=1} 	-y\,dx|_{y=1} \\
	&=& -1 +0 =-1
	\end{array}
$$
	 	
The work done is not the same over this path. This is already obvious from the graph showing the path and the force field: the second path clearly moves against the force, where the first is moving with direction of the force. 
```

```{tip} Reminder of path/line integral from Analysis

As long as the path can be split along coordinate axis the separation above is a good recipe. If that is not the case, then we need to turn back to the way how things have been introduced in the Analysis class. We need to make a 1D parameterization of the path.

		
Line integral of a vector valued function $\vec{F}(x,y,z): \mathbb{R}^3\to\mathbb{R}^3$ over a curve ${\cal{C}}$ is given as
		
$$
	\int_{{\cal{C}}} \vec{F}(x,y,z)\cdot d\vec{r} = \int_a^b \vec{F}(\vec{r}(\tau)) \cdot \frac{d \vec{r}(\tau)}{d\tau} \, d\tau
$$
	
We integrate in the definition of the work from point 1 to 2 over an implicitly given path. To compute this actually, you need to parameterize the path by $\vec{r}(\tau )=(x(\tau), y(\tau), z(\tau))$. The integration variable $\tau$ tells you where you are on the path, $\tau \in [a,b]\in\mathbb{R}$. The derivative of $\vec{r}$ with respect to $\tau$ gives the tangent vector to the curve, the "speed" of walking along the curve. In the analysis class you used $\vec{v}(\tau)\equiv \frac{d \vec{r}(\tau)}{d\tau}$ for the speed. The value of the line integral is independent of the chosen parameterization. However, it changes sign when reversing the integration boundaries.
```


```{example} Another path

Now we integrate from $(0,0)\to(1,1)$ but along the diagonal. A parameterization of this path is $\vec{r}(\tau) = (0,0)+(1,1)\tau = (\tau, \tau), \tau\in [0,1]$. The derivative is $\frac{d \vec{r}(\tau)}{d\tau}=(1,1)$. Therefore we can write the work of $\vec{F}(x,y)=-y \hat{x} +x^2 \hat{y}$ along the diagonal as
	
$$
	\int_0^1 \vec{F}(\tau,\tau) \cdot (1,1) \, d\tau 
	= \int_0^1 (-\tau,\tau^2) \cdot (1,1) \, d\tau =\\
	\int_0^1 \left ( -\tau+\tau^2 \right ) \,d\tau =
	 -\frac{1}{6}
$$

Integration of the same force $\vec{F}(x,y)=-y \hat{x} +x^2 \hat{y}$ from $(0,0)\to(1,1)$ but along a normal parabola. A parameterization of the path is $\vec{r}(\tau)=(0,0)+(\tau,\tau^2), \tau\in[0,1]$ and the derivative is $\frac{d\vec{r}}{d\tau} = (1,2\tau)$. The work then is

$$
	\int_0^1 \vec{F}(\tau,\tau^2)\cdot (1,2\tau) \,d\tau =\\
	\int_0^1 (-\tau^2,\tau^2)\cdot (1,2\tau) \,d\tau = \\
	\int_0^1 \left ( -\tau^2+2\tau^3 \right ) \,d\tau = \frac{1}{6}
$$
```

## Gravitational potential energy
Let's consider an object close to the surface of any planet, where the acceleration due to gravity can be described by $F_g=-mg$. Raising the object to a height $H$ requires us to do work: we will have to apply a force $F = +mg$ to the object to lift it to position $H$. Thus, with two forces acting - each doing work on the object we get:

$$\begin{split}
W_g &= \int_0^H F_g dx = \int_0^H -m g dx = -m g H \\
W_+ &= \int_0^H -F_g dx = \int_0^H m g dx = m g H
\end{split}$$

The net effect is of course $W_{net} = 0$ as the object started without kinetic energy and ends without kinetic energy, thus we knew in advance $0 = \Delta E_{kin} = W_g + W_+$

We can also take a slightly different view on this. Suppose we only concentrate on the work done by gravity: $W_g = -mgH$. Note that there is a minus sign, the gravitational force works in the opposite direction of the movement of the object. As energy is a {abbr}`conservative quantity (A quantity that remains constant within an isolated system, regardless of the processes occurring within it)`, someone or something has supplied the object with some 'gained' energy. We call this potential energy, more particular in this case gravitational potential energy. 

Why is it called 'potential'?
When the object is released from that height $H$, this gravitational potential energy is converted to kinetic energy. The gravitational force does work on the object:

$$W = \int_H^0 F dx = \int_H^0 m g dx = m g H = \Delta E_{kin}$$

From this, it follow that the object will reach a velocity of $v=\sqrt{2gH}$. This is an example of a situation where an object looses potential energy and gains kinetic energy.

```{exercise} Potential \& kinetic energy
Proof that the velocity of an object released from a height $H$ will reach the velocity $v=\sqrt{2gH}$.
```

```{exercise}
A point particle of mass $m=1\mathrm{kg}$ is at $t=0$ at position $x=0$. It has initial velocity $v_0$. From $t=0$ to $t_{stop}=2\mathrm{s}$ it is under the influence of a constant force $F$. This is a 1D problem.

The top graph show the position of the particle. The bottom graph shows the Work done on the particle by the force and the kinetic energy of the particle.

Analyse this situation and calculate the work done by the force at any time. Is the work done in this case always sufficient to account for the change in kinetic energy?
What does it mean if the work is positive or negative? 
```

```{exercise}
Use the Python app below, and answer the following questions:

- does the acceleration double when the mass of the falling box doubles?
- the position time diagram is made using kinematics, how would the code look like when based on energy conservation?
- how would you include friction in the code?
```


```{code-cell} python
:tag: hide-input

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.animation import FuncAnimation
from IPython.display import HTML, display
from ipywidgets import interact, FloatSlider, IntSlider

def run_animation(g=9.81, M=1):
    m1 = 1.0  # red block mass
    acc = M / (m1 + M) * g  # Net acceleration

    t_stop = 1.5
    dt = 0.02
    t_vals = np.arange(0, t_stop, dt)

    scale_factor = 25
    x0 = 40
    y0 = 210

    fig, ax = plt.subplots(figsize=(9, 5))
    ax.set_xlim(0, 900)
    ax.set_ylim(500, 0)
    ax.axis('off')

    # Static scene
    ax.fill_between([20, 320], 180, 190, color='black')  # floor
    pulley = plt.Circle((320, 180), 15, color='grey')
    ax.add_patch(pulley)

    ax.plot([450, 450], [20, 470], color='black')   # y-axis
    ax.plot([450, 800], [420, 420], color='black')  # x-axis
    ax.text(408, 170, "x (m)", fontsize=12)
    ax.text(780, 440, "t (s)", fontsize=12)

    for i, y in enumerate(range(125, 426, 75)):
        ax.text(423, y, f"{(4 - i):.1f}", fontsize=10)
    for i, x in enumerate([540, 640, 740]):
        ax.text(x, 440, f"{0.5 * (i + 1):.1f}", fontsize=10)

    for i in range(24):
        ax.plot([450, 800], [420 - 15 * (i + 1)] * 2, color='grey', linewidth=0.5)
    for i in range(17):
        ax.plot([450 + 20 * (i + 1)] * 2, [60, 420], color='grey', linewidth=0.5)

    # Dynamic elements
    red_block = Rectangle((x0, 150), 30, 30, color='red')
    grey_block = Rectangle((320, y0), 30, 30, color='grey')
    ax.add_patch(red_block)
    ax.add_patch(grey_block)
    cord1, = ax.plot([], [], color='black')
    cord2, = ax.plot([], [], color='black')
    trace, = ax.plot([], [], color='blue')
    x_trace, y_trace = [], []

    def update(frame):
        t = frame * dt
        disp = scale_factor * 0.5 * acc * t**2

        x = min(x0 + disp, 270)
        y = min(y0 + disp, 440)

        red_block.set_xy((x, 150))
        grey_block.set_xy((320, y))
        cord1.set_data([x + 30, 320], [165, 165])
        cord2.set_data([335, 335], [180, y])

        if x < 270:
            x_trace.append(450 + (200 * t))
            y_trace.append(420 - 1.53 * (x - x0))
            trace.set_data(x_trace, y_trace)

        return red_block, grey_block, cord1, cord2, trace

    ani = FuncAnimation(fig, update, frames=len(t_vals), blit=True, interval=dt * 1000)

    plt.close(fig)  # Prevent duplicate static figure
    display(HTML(ani.to_jshtml()))

# Interact widget with sliders
interact(run_animation,
         g=FloatSlider(min=1.5, max=15.0, step=0.1, value=9.81, description='g (m/s²)'),
         M=IntSlider(min=1, max=5, step=1, value=1, description='Mass (kg)'))

```


    interactive(children=(FloatSlider(value=9.81, description='g (m/s²)', max=15.0, min=1.5), IntSlider(value=1, d…





    <function __main__.run_animation(g=9.81, M=1)>



```{exercise}
Look at the [following roller coaster app](https://www.myphysicslab.com/roller/roller-single-en.html). 

Change the various graph settings (what is on the x/y axis). Change the starting position of the ball, and try to change the path. 

Can you make sense of the motion and the graphs? 
```

(ch3_conservartive)=
## Conservative force

As we saw, work done on $m$ by $F$ during motion from 1 to 2 over a prescribed trajectory, is defined as:
$$
	W_{12} = \int_1^2 \vec{F} \cdot d\vec{r} 
$$

In general, the amount of work depends on the path followed. That is, the work done when going from $ \vec{r}_1 $ to $ \vec{r}_2 $ over the red path in the figure below, will be different when going from  $ \vec{r}_1 $ to $ \vec{r}_2 $ over the blue path. Work depends on the specific trajectory followed.

```{figure} ../images/ch4_Path12.svg
:label: fig:ch4_Path12.svg
:width: 50%
:alt: Two points are plotted (r1 and r2). Two different curvy paths between the two points are drawn. 
:align: center

Two different paths.
```


However, there is a certain class of forces for which the path does not matter, only the start and end point do. These forces are called conservative forces. As a consequence, the work done by a conservative force over a closed path, i.e start and end are the same, is always zero. No matter which closed path is taken.

```{math}
:label: eq:5.1

\text{conservative force } ⇔ ∮ \vec{F} \cdot d\vec{r} = 0 \text{ for ALL}\text{ closed paths}                                          
```

### Stokes' Theorem
It was George Stokes who proved an important theorem, that we will use to turn the concept of conservative forces into a new and important concept.

```{figure} ../images/GeorgeStokes.jpg
:label: fig:GeorgeStokes.jpg
:width: 50%
:alt: A black-and-white portrait photo of George Stokes. He is wearing a suit with a bowtie. He has a stern facial expression and prominent sideburns. 
:align: center

Sir George Stokes (1819-1903). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ggstokes.jpg), public domain.
```

His theorem reads as: 

$$
	∮ \vec{F} \cdot d\vec{r} = \iint \vec{\nabla} \times \vec{F} \cdot d\vec{\sigma} 
$$

In words: the integral of the force over a closed path equals the surface integral of the curl of that force. The surface being 'cut out' by the close path. The term $\vec{\nabla} \times \vec{F}$ is called the curl of $F$:, which is a vector. The meaning of the curl and some words on the theorem are given below.

````{intermezzo} Intermezzo: intuitive proof of Stokes' Theorem 
Consider a closed curve $\Gamma$ in the $xy$-plane. We would like to calculate the work done when going around this curve. In other words: what is $∮ \vec{F} \cdot d\vec{r}$ if we move along this curve?  

We can visualize what we need to do: we cut the curve in small part; compute $\vec{F} \cdot d\vec{r}$ for each part (i.e. the red, green, blue, etc. in {numref}`fig:Stokes2` and sum these to get the total along the curve. If we make the parts infinitesimally small, we go from a (Riemann) sum to an integral. 

```{figure} ../images/ch4_Stokes2.svg
:label: fig:Stokes2
:width: 30% 
:alt: A 'blob'is drawn on grid paper. Contours are drawn around the boxes in the grid. 
:align: center
 
Closed path on a grid.
```

However, we are going to compute much more: take a look at {numref}`fig:Stokes2`. We have put a grid in the $xy$-plane over a closed curve $\Gamma$. Hence, the interior of our curve is full of squares. We are not only computing the parts along the curve, but also along the sides of alle curves. This will sound like way too much work, but we will see that it actually is a very good idea.

See {numref}`fig:Stokes2`: we calculate $∮ \vec{F} \cdot d\vec{r}$ counter clockwise for the green square. Than we have at least the green part of our $∮ \vec{F} \cdot d\vec{r}$ done in the right direction. Hence, we compute $\int \vec{F} \cdot d\vec{r}$ along the right side of the green square. We do that from bottom to top as we go counter clockwise along the green square. Let's call that $\int_g \vec{F} \cdot d\vec{r}$.  

Then we move to the blue square and repeat in counter clockwise direction our calculation. But this means that we compute along the left side of blue the square from top to bottom. We will call this $\int_b \vec{F} \cdot d\vec{r}$.  

Next, we will add all contributions. Thus we get $\int_g \vec{F} \cdot d\vec{r} + \int_b \vec{F} \cdot d\vec{r}$. But these two cancel each other as they are exactly the same but done in opposite directions. Thus if we use that $\int_1^2 f dx = - \int_2^1 f dx$ for any integration, it becomes obvious that  $\int_g \vec{F} \cdot d\vec{r} + \int_b \vec{F} \cdot d\vec{r} = 0$.  

Note that this will happen for all side of the squares that are in the interior of our curve. Thus, the integral over all squares is exactly the integral along the curve $\Gamma$.  

It seems, we do a lot of work for nothing. But there is another way of looking at the path-integrals along the squares. If we make the square small enough, the calculation along one square can be approximated:

$$ \begin{split}
∮_{square} \vec{F} \cdot d\vec{r} &\approx F_x(x,y) dx + F_y(x+dx,y) dy - F_x (x,y+dy) dx - F_y(x,y) dy \\
& \approx \frac{F_x(x,y) - F_x (x,y+dy)}{dy} dxdy + \frac{F_y(x+dx,y) - F_y(x,y) }{dx} dxdy \\
& \approx \left ( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right ) dx dy
\end{split} $$

The results get more accurate the smaller we make the square.

If we now sum up all squares and make these squares infinitesimally small, the sum becomes an integral, but now an integral over the surface enclosed by the curve:

$$
∮_{\Gamma} \vec{F} \cdot d\vec{r} = \iint \left ( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right ) dx dy
$$

The right hand side of the above equation is a surface integral of the 'vector' $\frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y}$. Obviously, we did not provide a rigorous proof, but only an intuitive one. For a mathematical proof, see your calculus classes.  

Moreover, we only worked in the $xy$-plane. If we would extend our reasoning to a closed curve in 3 dimensions, we would get Stokes theorem, which reads as:

$$ ∮_{\Gamma} \vec{F} \cdot d\vec{r} = \iint \vec{\nabla} \times \vec{F} \cdot d\vec{\sigma} $$

Here, $d\vec{\sigma}$ is a small element out of the surface. Note that it is a vector: it has size and directions. The latter is perpendicular to the surface element itself. Furthermore, we have the vector $\vec{\nabla} \times \vec{F}$. This is the cross-product of the nabla-operator and our vector field $\vec{F}$. The nabla operator is a strange kind of vector. Its components are: partial differentiation. In a Cartesian coordinate system this can be written as:

$$
\vec{\nabla} \equiv \frac{\partial}{\partial x} \hat{x} + \frac{\partial}{\partial y} \hat{y} + \frac{\partial}{\partial z} \hat{z}
$$

or if you prefer a column notation:

$$
\vec{\nabla} \equiv \left ( \begin{matrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \\ \frac{\partial}{\partial z} \end{matrix} \right )
$$

The curl of $F$ can be found from e.g.

$$
\vec{\nabla} \times \vec{F} =  \begin{vmatrix} \hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z  \end{vmatrix} 
= \left ( \frac{\partial F_z}{\partial y} - \frac{\partial F_y}{\partial z} \right ) \hat{x} + \left ( \frac{\partial F_x}{\partial z} - \frac{\partial F_z}{\partial x} \right ) \hat{y} + \left ( \frac{\partial F_y}{\partial x} - \frac{\partial F_x}{\partial y} \right ) \hat{z}
$$

Note of warning: do be careful with the nabla-operator. It is not a standard vector. For instance, ordinary vectors have the property $\vec{a} \cdot \vec{b} = \vec{b} \cdot \vec{a}$. This does not hold for the nabla-operator.  

Second note of warning: the representation of the nabla-operator does change quite a bit when using other coordinate systems like cylindrical or spherical. For instance, in cylindrical coordinates it is <b><em>not</em></b> equal to $\left ( \begin{matrix} \frac{\partial}{\partial r} \\ \frac{\partial}{\partial \phi} \\ \frac{\partial}{\partial z} \end{matrix} \right )$. This can be easily seen as both $r, z$ have units length, i.e. meters, but $\phi$ has no units.
````

````{example} Work done in a vectorfield

Suppose we need to calculate the integral of the vectorfield $\vec{F}(x,y) = y \hat{x} - x \hat{y}$ over the closed curve formed by a square from $(0,0)$ to $(1,0)$, $(1,1)$, $(0,1)$ and back to $(0,0)$.

```{code-cell} python
:tag: hide-input
:class: dropdown

import numpy as np
import matplotlib.pyplot as plt

N = 1.5
x = np.linspace(-N, N, 15)
y = np.linspace(-N, N, 15)
X, Y = np.meshgrid(x, y)
U = Y
V = -X


plt.figure(figsize=(4, 4))

plt.plot([0,1], [0,0], color='red', linewidth=2, marker='o', markersize=5)
plt.plot([1,1], [0,1], color='red', linewidth=2, marker='o', markersize=5)
plt.plot([1,0], [1,1], color='red', linewidth=2, marker='o', markersize=5)
plt.plot([0,0], [1,0], color='red', linewidth=2, marker='o', markersize=5)

plt.arrow(1, 0, 0, .5, head_width=0.1, head_length=0.1, fc='red', ec='red', linewidth=2)
plt.arrow(0, 1, 0, -.5, head_width=0.1, head_length=0.1, fc='red', ec='red', linewidth=2)
plt.arrow(0, 0, 0.5, 0, head_width=0.1, head_length=0.1, fc='red', ec='red', linewidth=2)
plt.arrow(1, 1, -0.5, 0, head_width=0.1, head_length=0.1, fc='red', ec='red', linewidth=2)

#plt.plot(path_y, path_z, color='red', linewidth=2, marker='o', markersize=5)


plt.quiver(X, Y, U, V, color='k')
plt.xlim(-.5*N, N)
plt.ylim(-.5*N, N)
plt.xlabel('x')
plt.ylabel('y')
plt.savefig('../../images/StokesTheoremExample.png', dpi=300)
plt.show()
```

```{figure} ../images/StokesTheoremExample.png
:label: fig:StokesTheoremExample.png
:width: 70%
:alt: A vector field is shown, with a red square between point (0,0) and (1,1). 
:align: center

Integrating along the unit square.
```

We go counter clockwise. 

$$ \begin{split}
∮ \vec{F} \cdot d\vec{r} &= \int_{x=0}^1 F_x(x,y=0) dx + \int_{y=0}^1 F_y(x=1,y) dy + \\
& \;\; + \int_{x=1}^0 F_x(x,y=1) dx + \int_{y=1}^0 F_y(x=0,y) dy \\
&= \int_0^1 0 dx + \int_0^1 -1 dy + \int_1^0 1 dx + \int_1^0 -0 dx  \\
&= 0 - [y]_0^1 + [x]_1^0 - 0 \\
&= -2 
\end{split} $$

Now we try this using Stokes' Theorem:

$$
∮ \vec{F} \cdot d\vec{r} = \iint \vec{\nabla} \times \vec{F} \cdot d\vec{\sigma}
$$

We first calculate $\vec{\nabla} \times \vec{F}$:

$$
\vec{\nabla} \times \vec{F} =  \begin{vmatrix} \hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
F_x & F_y & F_z  \end{vmatrix} = \begin{vmatrix} \hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\
y & -x & 0  \end{vmatrix} = \left ( \frac{\partial (-x)}{\partial x}  - \frac{\partial (y)}{\partial y} \right ) \hat{z} = -2 \hat{z}
$$

Thus, in this example $\vec{\nabla} \times \vec{F}$ has only a $z$-component. 

An elementary surface element of the square is: $d\vec{\sigma} = dx dy \hat{z}$.
This also has only a $z$-component. Note that it points in the positive $z$-direction. This is a consequence of the counter clockwise direction that we use to go along the square.

According to Stokes Theorem, we this find:

$$
∮ \vec{F} \cdot d\vec{r} = \iint \vec{\nabla} \times \vec{F} \cdot d\vec{\sigma} = \int_{x=0}^1 \int_{y=0}^1 (-2) dxdy = -2
$$

Indeed, we find the same outcome.
````

### Conservative force and $\vec{\nabla} \times \vec{F}$

For a conservative force the integral over the closed path is zero for any closed path. Consequently, $ \vec{\nabla} \times \vec{F} = 0 $ everywhere. How do we know this? Suppose $ \vec{\nabla} \times \vec{F} \neq 0 $ at some point in space. Then, since we deal with continuous differentiable vector fields, in the close vicinity of this point, it must also be non-zero. Without loss of generality, we can assume that in that region $ \vec{\nabla} \times \vec{F} \cdot d\vec{\sigma}> 0 $. Next, we draw a closed curve around this point, in this region. We now calculate the $∮ \vec{F} \cdot d\vec{r}$ along this curve. That is, we invoke Stokes Theorem. But we know that $ \vec{\nabla} \times \vec{F} \cdot d\vec{\sigma} > 0 $ on the surface formed by the closed curve. Consequently, the outcome of the surface integral is non-zero. But that is a contradiction as we started with a conservative force and thus the integral should have been zero.   
The only way out, is that $ \vec{\nabla} \times \vec{F} = 0 $ everywhere.

Thus we have:

$$
\text{conservative force  } ⇔ \vec{\nabla} \times \vec{F} = 0 \text{ everywhere}
$$



## Potential Energy
This function $V$ is called the potential energy or the potential for short and has a direct connection to the work. A direct consequence of the above is:

if $ \vec{\nabla} \times \vec{F} = 0 $ everywhere, a function $ V (\vec{r}) $ exists such that $ \vec{F} = -\vec{\nabla}V $
          
$$
	\text{conservative force } ⇔ \vec{\nabla} \times \vec{F} = 0  \text{ everywhere} \\  
	⇕ \\%\big  \\
	\vec{F} = -\vec{\nabla}V ⇔ V(\vec{r}) = -\int_{ref} \vec{F} \cdot d\vec{r} 
$$
       

where in the last integral, the lower limit is taken from some, self picked, reference point. The upper limit is the position $ \vec{r} $.

Next to its direct connection to work, the potential is also connected to kinetic energy.

$$
	E_{kin,2} - E_{kin,1} = W_{12} = \int_1^2 \vec{F} \cdot d\vec{r} = V(\vec{r}_2) - V(\vec{r}_1)
$$

or rewritten:

$$
	E_{kin,1} + V(\vec{r}_1)  = E_{kin,2} + V(\vec{r}_2) 
$$ 

In words: for a conservative force, the sum of kinetic and potential energy stays constant.    

### Energy versus Newton's Second Law
We, starting from Newton's Laws, arrived at an energy formulation for physical problems.   
Question: can we also go back? That is: suppose we would start with formulating the energy rule for a physical problem, can we then back out the equation of motion?  
Answer: yes, we can!

It goes as follows. Take a system that can be completely described by its kinetic plus potential energy. Then: take the time-derivative and simplify, we will do it for a 1-dimensional case first.

$$\begin{split}
&\frac{1}{2}mv^2 + V(x) = E_0 \Rightarrow \\
&\frac{d}{dt} \left [ \frac{1}{2}mv^2 + V(x) \right ] = \frac{dE_0}{dt} = 0 \Rightarrow \\
&mv\dot{v} + \frac{dV}{dx}\underbrace{\frac{dx}{dt}}_{=v} = 0 \Rightarrow \\
&v \left (m\dot{v} + \frac{dV}{dx} \right ) = 0
\end{split}$$

The last equation must hold for all times and all circumstances. Thus, the term in brackets must be zero.

$$ m\dot{v} + \frac{dV}{dx} = 0 \Rightarrow m\ddot{x} = -\frac{dV}{dx} = F $$

And we have recovered Newton's second law.

In 3 dimensions it is the same procedure. What is a bit more complicated, is using the chain rule. In the above 1-d case we used $\frac{dV}{dt} = \frac{dV(x(t))}{dt} = \frac{dV}{dx}\frac{dx(t)}{dt}$. In 3-d this becomes: 

$$\frac{dV}{dt} = \frac{dV(\vec{r}(t))}{dt} = \frac{dV}{d\vec{r}}\cdot \frac{d\vec{r}(t)}{dt} = \vec{\nabla} V \cdot \vec{v} $$

Thus, if we repeat the derivation, we find: 

$$\begin{split}
&\frac{1}{2}mv^2 + V(\vec{r}) = E_0 \Rightarrow \\
&\frac{d}{dt} \left [ \frac{1}{2}mv^2 + V(\vec{r}) \right ] = 0 \Rightarrow \\
&m\vec{v} \cdot \dot{\vec{v}} + \vec{\nabla} V \cdot \vec{v} = 0 \Rightarrow \\
&v \left (m\vec{a} + \vec{\nabla} V \right ) = 0 \Rightarrow \\
&m\vec{a} = -\vec{\nabla} V = \vec{F}
\end{split}$$

And we have recovered the 3-dimensional form of Newton's second Law.
This is a great result. It allows us to pick what we like: formulate a problem in terms of forces and momentum, i.e. Newton's second law, or reason from energy considerations. It doesn't matter: they are equivalent. It is a matter of taste, a matter of what do you see first, understand best, find easiest to start with. Up to you!


## Stable and Unstable Equilibrium
A particle (or system) is in equilibrium when the sum of forces acting on it is zero. Then, it will keep the same velocity, and we can easily find an inertial system in which the particle is at rest, at an equilibrium position.   
The equilibrium position (or more general: state) can also be found directly from the potential energy.

Potential energy and (conservative) forces are coupled via: 

$$ \vec{F} = - \vec{\nabla}V $$

The equilibrium positions $\left ( \sum_i \vec{F}_i = 0 \right )$ can be found by finding the extremes of the potential energy:

$$
\text{equilibrium position } ⇔ \vec{\nabla}V = 0
$$
Once we find the equilibrium points, we can also quickly address their nature: is it a stable or unstable solution? That follows directly from inspecting the characteristics of the potential energy around the equilibrium points.

For a stable equilibrium, we require that a small push or a slight displacement will result in a force pushing back such that the equilibrium position is restored (apart from the inertia of the object that might cause an overshoot or oscillation).

However, an unstable equilibrium is one for which the slightest push or displacement will result in motion away from the equilibrium position.

The second derivative of the potential can be investigated to find the type of extremum. For 1D functions that is easy, for scalar valued functions of more variables that is a bit more complicated. Here we only look at the 1D case $V(x): \mathbb{R} \rightarrow \mathbb{R}$

$$
\text{equilibrium: } \vec{\nabla}V = 0 
	\begin{cases}
	\text{stable: } & \frac{d^2V}{dx^2} > 0 \\
	\text{unstable: } & \frac{d^2V}{dx^2} < 0
	\end{cases} 
$$
 
Luckily, the definition of potential energy is such that these rules are easy to visualize in 1D and to remember, see {numref}`fig:ch4_PotentialStableUnstable.svg`

```{figure} ../images/ch4_PotentialStableUnstable.svg
:label: fig:ch4_PotentialStableUnstable.svg
:width: 70%
:alt: Left: a cup parabola is drawn, with a red circle place at the bottom (stable). Right: a cap parabola with the red circle placed at the top (unstable). 
:align: center

Stable and unstable position of a particle in a potential.
```

A valley is stable; a hill top is unstable.   
NB: Now the choice of the minus sign in the definition of the potential is clear. Otherwise a hill would be stable, but that does not feel natural at all.

It is also easy to visualize what will happen if we distort that particle from the equilibrium state:

<ul>
<li>The valley, i.e., the stable system, will make the particle move back to the lowest point. Due to inertia, it will not stop but will continue to move. As the lowest position is one of zero force, the particle will 'climb' toward the other end of the valley and start an oscillatory motion.</li>
<li>The top, i.e., the unstable point, will make the particle move away from the stable point. The force acting on the particle is now pushing it outwards, 'down the slope of the hill'.</li>
</ul>
  


### Taylor Series Expansion of the Potential

The Taylor expansion or Taylor series is a different way of writing down the value of a function in the vicinity of a point $x_0$. Even though the function is written down in a different way, it is equal to $f$ in the vicinity of $x_0$. It uses an infinite series of polynomial terms with coefficients given by value of the derivative of the function at that specific point $x_0$. The value of the terms for higher n become small, so we can approximate the function by using only the first few terms. The more of these first terms you take, the closer your approximation is. Mathematically, it reads for a 1D scalar function $f: \mathbb{R} \rightarrow \mathbb{R}$:

$$
 f(x) \approx f(x_0) + \frac{1}{1!} f'(x_0) (x-x_0 ) + \frac{1}{2!} f''(x_0) (x-x_0)^2 + \frac{1}{3!} f'''(x_0) (x-x_0)^3 + ...
$$
 
For our purpose here, it suffices to stop after the second derivative term:

 $$
 f(x) \approx f(x_0) + f'(x_0) (x-x_0 ) + \frac{1}{2} f''(x_0) (x-x_0)^2 + \mathcal{O}(x^3)
 $$
 
A way of understanding why the Taylor series actually works is the following.  
Imagine you have to explain to someone how a function looks around some point $x_0$, but you are not allowed to draw it. One way of passing on information about $f(x)$ is to start by giving the value of $f(x)$ at the point $x_0$:

$$
 f(x) \approx f(x_0)
$$
 
Next, you give how the tangent at $x_0$ is: you pass on the first derivative at $x_0$. The other person can now see a bit better how the function changes when moving away from $x_0$:

$$
 f(x) \approx f(x_0) + f'(x_0) (x-x_0 ) 
$$

Then, you tell that the function is not a straight line but curved, and you give the second derivative. So now the other one can see how it deviates from a straight line:

$$
 f(x) \approx f(x_0) + \frac{1}{1!} f'(x_0) (x-x_0 ) + \frac{1}{2!} f''(x_0) (x-x_0)^2 
$$
 
Note that the prefactor is placed back. But the function is not necessarily a parabola; it will start deviating more and more as we move away from $x_0$. Hence we need to correct that by invoking the third derivative that tells us how fast this deviation is. And this process can continue on and on.

Important to note: if we stay close enough to $x_0$ the terms with the lowest order terms will always prevail as higher powers of $(x-x_0)$ tend to zero faster than a lower powers (for instance: $0.5^4 << 0.5^2$).

This 3Blue1Brown clip explains the 1D Taylor series nicely.

```{iframe} https://www.youtube.com/embed/3d6DsjIBzJ4?si=wKSWFL0prSEKTtyF
:width: 70%

A 3blue1brown clip on Taylor series.
```

For scalar valued functions as our potentials $V(\vec{r}): \mathbb{R}^3 \rightarrow \mathbb{R}$ the extension of the Taylor series is not too difficult. If we expand the function around a point 

$$\begin{split}
 V(\vec{r}) &\approx V(\vec{r}_0) + \vec{\nabla}V(\vec{r}_0) \cdot (\vec{r}-\vec{r}_0 ) \\
 &+ \frac{1}{2} (\vec{r}-\vec{r}_0 ) \cdot (\partial^2 V)(\vec{r}_0) \cdot (\vec{r}-\vec{r}_0 ) + \mathcal{O}(r^3)
\end{split}$$
 
The second derivative of the potential indicated by $\partial^2 V$ is the {abbr}`Hessian matrix (The Hessian Matrix is a matrix with each element representing a second-order derivative of a scalar valued function. It describes the local curvature of a function of many variables)`. Right now, this all sound a bit hocus pocus. But don't worry: you won't need it right away in its full glory. In the rest of your physics and math classes, this will all come back and start to make sense. 

Conceptually the extrema of the function are again the hills and valleys. The classification of the extrema has next to hills and valleys also saddle points etc. In this course we will not bother about these more dimensional cases, but only stick to simple ones.







