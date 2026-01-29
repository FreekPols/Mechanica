---
numbering:
  title: 
    offset: 0


kernelspec:
  name: python3
  display_name: 'Python 3'
---


(ch_NewtonsLaws)=
# Newton's Laws
Now we turn to one of the most profound breakthroughs in the history of science: the laws of motion formulated by Isaac {index}`Newton <Newton>`. These laws provide a systematic framework for understanding how and why objects move. They form the backbone of classical mechanics. Using these three laws we can predict the motion of a falling apple, a car accelerating down the road, or a satellite orbiting Earth (though some adjustments are required in this context to make use of e.g. GPS!). More than just equations, they express deep principles about the nature of force, mass, and interaction.

In this chapter, you will begin to develop the core physicist’s skill: building a simplified model of the real world, applying physical principles, and using mathematical tools to reach meaningful conclusions.

(sec_NewtonsLaws_laws)=
## Newton's Three Laws
Much of physics, in particular Classical Mechanics, rests on three laws that carry Newton's name:

```{important} Newton's first law (N1)
*Corpus omne perseverare in statu suo quiescendi vel movendi uniformiter in directum, nisi quatenus illud a viribus impressis cogitur statum suum mutare.*

If no force acts on an object, the object moves with constant velocity.
```

```{important} Newton's second law (N2)
*Mutationem motus proportionalem esse vi motrici impressæ, & fieri secundum lineam rectam qua vis illa imprimitur.*

If a (net) force acts on an object, the momentum of the object will change according to:

$$ \frac{d\vec{p}}{dt} = \vec{F} $$ 

```

```{important} Newton's third law (N3)
*Actioni contrariam semper & æqualem esse reactionem: sive corporum duorum actiones in se mutuo semper esse æquales & in partes contrarias dirigi.*

If object 1 exerts a force $ \vec{F}_{12} $ on object 2, then object 2 exerts a force $\vec{F}_{21}$ equal in magnitude and opposite in direction on object 1:

$$ \vec{F}_{21} = -\vec{F}_{12} $$
```


{index}`N1 <Newton; first law>` has, in fact, been formulated by Galileo Galilei. Newton has, in his N2, build upon it: N1 is included in N2, after all:  
if $\vec{F} = 0$, then $\frac{d\vec{p}}{dt} = 0 \rightarrow \vec{p} = \text{constant} \rightarrow \vec{v} = \text{constant}$, provided $m$ is a constant. 

Most people know {index}`N2 <Newton; second law>`as 

$$ \vec{F} = m \vec{a} $$

For particles of constant mass, the two are equivalent:  
if $ m = \text{constant} $, then 

$$\frac{d\vec{p}}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a} $$

Nevertheless, in many cases using the momentum representation is beneficial. The reason is that momentum is one of the key quantities in physics. This is due to the underlying conservation law that we will derive in a minute. Momentum is a more fundamental concept in physics than acceleration. That is another reason why physicists prefer the second way of looking at forces. 

Moreover, using momentum allows for a new interpretation of force: force is that quantity that - provided it is allowed to act for some time interval on an object - changes the momentum of that object. This can be formally written as:

$$ d\vec{p} = \vec{F} dt  \leftrightarrow \Delta \vec{p} = \int \vec{F} dt $$

The latter quantity $\vec{I} \equiv \int \vec{F} dt$ is called the impulse.   

```{note}
**Momentum** is in Dutch **impuls**; the English **impulse** is in Dutch **stoot**.
```

In Newton's laws, velocity, acceleration and momentum are key quantities. We repeat here their formal definition.


```{important} Definition
$$\begin{split}
\mathrm{velocity:} \: \vec{v} &\equiv \lim_{\Delta t \to 0} \frac{\vec{r}(t+\Delta t) - \vec{r}(t)}{\Delta t} = \frac{d\vec{r}}{dt} \\
\mathrm{acceleration:} \: \vec{a} &\equiv \lim_{\Delta t \to 0} \frac{\vec{v}(t+\Delta t) - \vec{v}(t)}{\Delta t} = \frac{d\vec{v}}{dt} \\ 
\mathrm{momentum:} \: \vec{p} &\equiv m\vec{v}= m\frac{d\vec{r}}{dt} 
\end{split}$$
```


```{exercise} &#127798;
:label: ex_ch2_pp

Consider a point particle of mass m, moving at a velocity $ v_0 $ along the x-axis. At $ t=0 $ a constant force acts on the particle in the positive x-direction. The force lasts for a small time interval $ \Delta t $. 

What is the velocity of the particle for $ t> \Delta t $ ? 
```

````{solution} ex_ch2_pp
:class: dropdown

::::{tab-set}
:::{tab-item} Interpret

First we make a sketch.

```{figure} ../images/ch2_Example1.svg
:label: fig:Example1
:width: 40%
:alt: A blue circle denoting the mass is shown on the center of a horizontal axis. A red arrow with label v points to the right. A black arrow with label F points to the right. 
:align: center

```

This is obviously a 1-dimensional problem. So, we can leave out the vector character of e.g. the force.

:::
:::{tab-item} Develop

We will use $ dp = F dt $:

$$ dp = Fdt \Rightarrow \Delta p = \int_0^{\Delta t} Fdt = F \Delta t \rightarrow $$

$$ p ( \Delta t) = p(0) + F \Delta t = mv_0 + F \Delta t  \rightarrow$$

$$ v ( \Delta t ) =  v_0 + \frac{F}{m} \Delta t $$

Note that this example could also be solved by N2 in the form of $F = ma$. It is merely a matter of taste.
:::
::::
````

````{exercise} A pushing contest &#127798;

```{figure} ../images/ch2_ex_carts.svg
:label: fig:pushing-contest
:width: 40%
:align: center
:alt: At the top: cart one with mass m1, force F1 for duration t1. At the bottom: cart two with mass 2*m1, force 4*F1 for duration t1/2. 

```

```{iframe} https://tudelft.h5p.com/content/1292579840119552937/embed
:width: 100%

```
````

```{exercise} Newton's third law &#127798;
:label: ex_ch2_N3

The [base jumper from chapter 1](http://localhost:3000/content/classic/ch0-language#representations) just jumped from the tall building. According to Newton's third law there are two coupled forces. Which are these, and what is the consequence of these two forces?
```

```{solution} ex_ch2_N3
:class: dropdown

The gravitational force acts from the earth on the jumper. Newton's law states that the jumper thus acts a gravitational force on the earth. Hence, the earth accelerates towards the jumper! 

Although this sounds silly, when comparing this idea to the sun and the planets, we must draw the conclusion that the sun is actually wobbling as it is pulled towards the various planets! See also this [animated explanation](https://youtube.com/shorts/SLRGX5H1bt4?si=ded_KLH9kxSxQwQs)
```

(sec_NewtonsLaws_conservation)=
## Conservation of Momentum
```{index} conservation of momentum; introduction
```
From Newton's 2$^{\text{nd}}$ and 3$^\text{rd}$ law we can easily derive the law of conservation of momentum. Assume there are only two point-particle (i.e. particles with no size but with mass), that exert a force on each other. No other forces are present. From N2 we have:

$$ 
\frac{d\vec{p}_1}{dt} = \vec{F}_{21} \\
\\
\frac{d\vec{p}_2}{dt} = \vec{F}_{12}
$$ 

From N3 we know:

$$
\vec{F}_{21} = -\vec{F}_{12}
$$ 

And, thus by adding the two momentum equations we get: 

$$
\left.
  \begin{array}{ll}
    \frac{d\vec{p}_1}{dt} &= \vec{F}_{21} \\
    \\
    \frac{d\vec{p}_2}{dt} &= \vec{F}_{12} = -\vec{F}_{21}
  \end{array}
\right\} \Rightarrow
$$



$$
  \frac{d\vec{p}_1}{dt}  +  \frac{d\vec{p}_2}{dt} = 0 \rightarrow \frac{d}{dt} \left ( \vec{p}_1 + \vec{p}_2 \right ) = 0
$$ 


$$
    \Rightarrow \vec{p}_1 + \vec{p}_2 = const ~\text{i.e. does } not \text{ depend on time}
$$ 


Note the importance of the last conclusion: **if objects interact via a mutual force then the total momentum of the objects cannot change.** No matter what the interaction is. This notion is easily extended to more interacting particles. The crux is that particles interact with one another via forces that obey N3. Thus for three interacting point particles we would have (with $ \vec{F}_{ij}$ the force from particle *i* felt by particle *j*):

$$
\left.
    \begin{array}{ll}
       \frac{d\vec{p}_1}{dt} &= \vec{F}_{21} + \vec{F}_{31} \\
       \\
        \frac{d\vec{p}_2}{dt} &= \vec{F}_{12} + \vec{F}_{32}= -\vec{F}_{21} + \vec{F}_{32}\\
       \\
        \frac{d\vec{p}_3}{dt} &= \vec{F}_{13}  + \vec{F}_{23}= -\vec{F}_{31} - \vec{F}_{32}
    \end{array}
\right \} 
$$

Sum these three equations:

$$
  \frac{d\vec{p}_1}{dt}  +  \frac{d\vec{p}_2}{dt} + \frac{d\vec{p}_3}{dt} = 0 \rightarrow \frac{d}{dt} \left ( \vec{p}_1 + \vec{p}_2 + \vec{p}_3 \right ) = 0  \\
  \\
  \Rightarrow \vec{p}_1 + \vec{p}_2 + \vec{p}_3 = \text{const.}~\text{ i.e. does } not \text{ depend on time} 
$$

For a system of $N$ particles, extension is straight forward. 


````{intermezzo} Intermezzo: Isaac Newton
```{index} Newton; live
``` 
At the end of the year of Galilei's death, Isaac Newton was born in Woolsthorpe-by-Colsterworth in England. He is regarded as the founder of classical mechanics and with that he can be seen as the father of physics. 

```{figure} ../images/ch2_Newton.jpg
:name: fig:Newton
:width: 70%
:align: center
:alt: A painted portrait of Sir Isaac Newton, a man with grey curly hair wearing a brown robe. 

Isaac Newton (1642-1727). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Portrait_of_Sir_Isaac_Newton,_1689.jpg), public domain.
```

In 1661, he started studying at Trinity College, Cambridge. In 1665, the university temporarily closed due to an outbreak of the plague. Newton returned to his home and started working on some of his breakthroughs in calculus, optics and gravitation. Newton's list of discoveries is unsurpassed. He 'invented' calculus (at about the same time and independent of Leibniz). Newton is known for 'the binomium of Newton', the cooling law of Newton. He proposed that light is made of particles and formulated his law of gravity. Finally, he postulated his three laws that started classical mechanics and worked on several ideas towards energy and work. Much of our concepts in physics are based on the early ideas and their subsequent development in classical mechanics. The laws and rules apply to virtually all daily life physical phenomena and only require adaptation when we go to very small scale or extreme velocities and cosmology. In what follows, we will follow his footsteps, but in a modern way that we owe to many physicist and mathematicians that over the years shaped the theory of classical mechanics in a much more comprehensive form. We do not only stand on shoulders of giants, we stand on a platform carried by many.

Interesting to know is that his mentioning of *standing on shoulders* can be interpreted as a sneer towards Robert Hooke (1635-1703), with he was in a [fight with over several things](https://en.wikipedia.org/wiki/Newton%E2%80%93Hooke_priority_controversy_for_the_inverse_square_law). Hooke was a rather short man... See, e.g., {cite:t}`gribbin2019scientists`.
````


```{important}
In Newtonian mechanics time does not have a preferential direction. That means, in the equations derived based on the three laws of Newton, we can replace $t$ by $-t$ and the motion will have different sign, but that's it. The path/orbit will be the same, but traversed in opposite direction. Also in special relativity this stays the same.

However, in daily life we experience a clear distinction between past, present and future. This difference is not present in this lecture at all. Only by the second of law thermodynamics the time axis obtains a direction, more about this in classes on Statistical Mechanics.
```

(sec_NewtonsLaws_applied)=
## Newton's laws applied

(sec_NewtonsLaws_forces)=
### Force addition, subtraction and decomposition
```{index} forces; addition subtraction and decomposition
```
Newton's laws describe how forces affect motion. Applying them often requires combining multiple forces acting on an object , see {numref}`fig_additionF`. This is done through vector addition, subtraction, and decomposition—allowing us to find the net force and to analyze its components in different directions (see [this chapter in the book on linear algebra](https://interactivetextbooks.tudelft.nl/linear-algebra/Chapter1/Vectors.html#arrows-in-the-plane) for a full elaboration on vector addition and subtraction).

```{figure} ../images/ch2_fig_additionF.svg
:label: fig_additionF
:width: 70%
:alt: A central point mass with three forces working on it. The magnitude of each mass is displayed on an analog spring scale. 
:align: center

Three forces acting on a particle. In which direction will it accelerate?
```


````{example} Three forces acting on a particle
Consider three forces acting on a particle: 

$\vec{F}_1 = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$, $\vec{F}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ and $\vec{F}_3 = \begin{pmatrix} -1 \\ -0.5 \end{pmatrix}$

What is the net force acting on the particle and in which direction will the particle accelerate? 

```{dropdown} solution

$$ 
\begin{aligned}
    \vec{F}_{net} &= \sum\vec{F}_i=\vec{F}_1+\vec{F}_2+\vec{F}_3\\ 
                  &=  \begin{pmatrix} 1 \\ 0 \end{pmatrix} + \begin{pmatrix} 1 \\ 1 \end{pmatrix} + \begin{pmatrix} -1 \\ -0.5 \end{pmatrix}
                  &= \begin{pmatrix} 1 + 1 -1 \\ 0 + 1 + -0.5 \end{pmatrix} = \begin{pmatrix} 1 \\ 0.5 \end{pmatrix}
\end{aligned}
$$

Hence, the net force acting on the particle is $\sqrt{1^2+.5^2}=1.1\text{N}$ and it will accelerate in the direction $\begin{pmatrix} 1 \\ 0.5 \end{pmatrix}$.
```
````





```{exercise} Forces acting on a particle in 3D
:label: ex_ch2_F3D
Three forces act on a particle with mass $m$:

$$
\vec{F}_1 = \begin{pmatrix} 1 \\ 0 \\ -4 \end{pmatrix}, \vec{F}_2 = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix} \text{and } \vec{F}_3 = \begin{pmatrix} -1 \\ -0.5 \\ 1 \end{pmatrix}
$$

Determine the acceleration of this particle.
```

```{solution} ex_ch2_F3D
:class: dropdown
$$ 
\begin{aligned}
    \vec{F}_{net} &= \sum\vec{F}_i=\vec{F}_1+\vec{F}_2+\vec{F}_3\\ 
                  &=  \begin{pmatrix} 1 \\ 0 \\ -4 \end{pmatrix} + \begin{pmatrix} 1 \\ 1 \\3 \end{pmatrix} + \begin{pmatrix} -1 \\ -0.5 \\ 1 \end{pmatrix}
                  &= \begin{pmatrix} 1 + 1 -1 \\ 0 + 1 + -0.5 \\ -4 + 3 + 1 \end{pmatrix} = \begin{pmatrix} 1 \\ 0.5 \\ 0 \end{pmatrix}
\end{aligned}
$$

Hence, the net force acting on the particle is $\sqrt{1^2+.5^2}=1.1\text{N}$ and the particle will accelerate in the direction $\begin{pmatrix} 1 \\ 0.5 \\ 0 \end{pmatrix}$, in essence just like in the previous example. The magnitude of the acceleration is $a=F/m$ and can only be calculated when the mass of the particle is specified.
```

`````{example} Incline 
The box in {numref}`fig_inc_pl` is at rest. Calculate the frictional force acting on the box.

```{figure} ../images/ch2_Inclined_plane.svg
:label: fig_inc_pl
:width: 50%
:alt: A right-angled triangle denoting a surface inclined by alpha degrees. A cube of mass m is located on the incline. A normal force N is drawn perpendicular to the inclined surface. The gravitational force points straight down. 

A box is at rest on an incline.
``` 

::::{tab-set}

:::{tab-item} Develop
As the box is not moving (i.e. it has a constant velocity) the sum of forces on the box must be equal to zero. In the sketch we see two forces that clearly do not add up to zero. A third force is needed. 
:::

:::{tab-item} Evaluate
If we assume that only friction as a third force is present, we require:

$$\sum_i \vec{F}_i = 0 \Rightarrow \vec{F}_g + \vec{F_N} + \vec{F}_f = 0 \Rightarrow \vec{F}_f = - \vec{F}_g - \vec{F}_N$$

We can progress further by assuming that the friction force acts parallel to the slope. With this assumption, we can decompose gravity in its components perpendicular to the slope and parallel to the slope.

```{figure} ../images/ch2_Inclined_plane_sol.svg
:width: 50%
:alt: The same mass on the inclined surface. The gravitational force is decomposed into a component parallel to the surface and a component perpendicular to the surface. The same is done for the normal force. 
``` 

$$\vec{F}_g = \vec{F}_{g//} + \vec{F}_{g\perp} $$

The normal force exactly balances the perpendicular component: that is what a normal force does.
Friction balances the parallel component of gravity:

$$\begin{split}
\vec{F}_f + \vec{F}_{g//} = 0 \rightarrow \vec{F}_f = -\vec{F}_{g//} \\
\end{split}$$

and its magnitude is thus $F_f = F_g \sin \alpha$ 

````{note} Reminder
```{figure} ../images/ch2_vectors.svg
:width: 40%
:alt: The vector representing the gravitational force points straight down. The parallel and perpendicular components of the force are drawn using the parallelogram method. 
``` 
Remember from secondary school how to break down a force vector into components.
````
:::

::::
`````



(sec_NewtonsLaws_acceleration_gravity)=
### Acceleration due to gravity

In most cases the forces acting on an object are not constant. However, there is a classical case that is treated in physics (already at secondary school level) where only one, constant force acts and other forces are neglected. Hence, according to Newton's second law, the acceleration is constant. 

When we first consider only the motion in the z-direction, we can derive:

$$ a=\frac{F}{m}=\text{const.} $$

Hence, for the velocity:

$$ v(t) = v_0 + \int_{t_0}^{t_e} a dt = a(t_e-t_0) + v_0 $$

assuming $t_0=0 \text{ and } t_e=t \Rightarrow v(t)=v_0+at$ the position is described by 

$$ s(t) = \int_{0}^{t} v(t)dt = \int_{0}^{t} at + v_0 dt = \frac{1}{2}at^2 + v_0t + s_0 $$

Rearranging: 

$$ \label{eq:vert_mot} s(t) = \frac{1}{2}at^2 + v_0t + s_0$$

```{exercise} Tossing a stone in the air &#127798;
:label: ex-toss

At a height of $1.5\ \mathrm{m}$ a stone is tossed in the air with a velocity of $10\ \mathrm{m/s}$. 

1. Calculate the maximum height that it reaches.
2. Calculate the time it takes to reach this point.
3. Calculate with which velocity it hits the ground.

```

`````{solution} ex-toss
:class: dropdown

::::{tab-set}
:::{tab-item} Interpret
```{figure} ../images/ch2_figure_ex_toss.svg
:width: 30%
:alt: A blue circle is drawn at a height H0 above the ground. An arrow with the label v0 points in the upward direction. A gray line that goes up from the circle and then curves back down to the ground illustrates the trajectory of the stone. The highest point in the trajectory is labelled by tmax and hmax. 
:align: center

A free body diagram of the situation with all relevant quantities.
```

Only gravity acts on the stone (in the downward direction). We will call the position of the stone at time $t$: $s(t)$  
Initial conditions: $t=0 \rightarrow s(0) = s_0 = 1.5 \: \mathrm{m} \text{ and } \dot{s} = v = v_0 = 10 \: \mathrm{ m/s}$
:::
:::{tab-item} Develop
1. $s(t) = \frac{1}{2}at^2 + v_0t + s_0$ Highest point reached when $\dot{s}=0$
2. $\Delta t = \frac{\Delta v}{a}$
3. $s(t) = \frac{1}{2}at^2 + v_0t + s_0$. We are interested in the stone hitting the ground. Thus, solve for $s(t)=0$ to find at what time this happens.
:::
:::{tab-item} Evaluate
1. $\dot{s} = at + v_0 = -gt + v_0 = 0 \Rightarrow t = 1.02 \text{s}$  
$s(1.02) = -\frac{1}{2}*9.81*1.02^2 + 10*1.02 + 1.5 = 6.6 \text{m}$
2. See above.
3.  $s(t) = \frac{1}{2}at^2 + v_0t + s_0 = s_e$  
$t = \frac{-v_0\pm\sqrt{v_0^2-4(\frac{1}{2}a(s_0-s_e))}}{2\frac{1}{2}a} = \frac{-10\pm\sqrt{10^2-4(\frac{1}{2}(-9.81)(1.5))}}{-9.81}=2.18\text{s}$  
$v(2.18)=\dot{s}(2.18)=v_0 + at=10-9.81*2.18=-11.3 \: \mathrm{m/s}$  
Note that $t=-0.14\text{s}$ is another solution, but not physically realistic.
:::
:::{tab-item} Assess
The times we calculated are in the right order: First stone is tossed (at $t_0=0$), then it reaches its highest point (at $t_m=1.02 \: \mathrm{s}$). After that it falls and hits the ground at $t_e=2.18 \: \mathrm{s}$. Thus $t_0 \lt t_m \lt t_e$.

Furthermore, the velocity upon impact with the earth is negative as it should: the stone is falling downward. Its magnitude is on the order of the initial upward velocity, which makes sense. Finally, our answers have the right units.
:::
::::


**NOTE:** Some of these solutions can be derived more easily using the concept of *conservation of energy* which will be covered in one of the next chapters.
`````


````{example} 2D-motion
We only considered motion in the vertical direction, however, objects tend to move in three dimension. We consider now the two-dimensional situation, starting with an object which is horizontally thrown from a height.

```{figure} ../images/ch2_fig_hor_mot.svg
:width: 50%
:align: center
:label: fig_hor_mot
:alt: A ball and its trajectory when thrown horizontally, vectors for force (downward) and starting velocity (horizontal) are drawn.

A sketch of the situation where an object is thrown horizontally and the horizontal distance should be calculated.
```

In the situation given in {numref}`fig_hor_mot` the object is thrown with a horizontal velocity of $v_{x0}$. As no forces in the horizontal direction act on the object (N1), its horizontal motion can be described by

$$s_x(t)=v_{x0}t$$

In the vertical direction only the gravitational force acts (N2), hence the motion can be described by {eq}`eq:vert_mot`. Taking the $y$-direction upward, a starting height $y(0)=H_0$ and $v_y(0)=0$ it becomes:

$$s_y(t)=H_0-\frac{1}{2}gt^2$$

The total horizontal traveled distance of the object before hitting the ground then becomes:

$$ \label{eq:projmot} s_{x,max} = v_x\sqrt{\frac{2H_0}{g}}$$

This motion is visualized in {numref}`fig_parmot`. The trajectory is shown with $s_x$ on the horizontal axis and $s_y$ on the vertical axis. At regular time intervals $\Delta t$, velocity vectors are drawn to illustrate the motion. Note that the horizontal and vertical components of velocity, $v_x$ and $v_y$, vary independently throughout the trajectory. Moreover, $\vec{v}(t)$ is the tangent of $s(t)$.

```{figure} ../images/parmotionv.svg
:label: fig_parmot
:width: 70%
:alt: A plot of the horizontal distance (x-axis) versus the vertical distance (y-axis). For each position along the mass's trajectory, the horizontal and vertical component of its velocity is indicated by an arrow.

The parabolic motion is visualized with blue velocity vectors $v, v_x \text{ and } v_y$ shown at various points along the trajectory.
```

````

```{exercise} Horizontal throw &#127798;
Derive the above expression {numref}`eq:projmot`  yourselves.
```

````{exercise} Projectile motion &#127798; &#127798;
:label: ex_pj1

Watch the recording below. What happens with the horizontal distance traveled per time unit? And with the vertical distance traveled?

```{figure} ../images/Parabolic.*
:width: 70%

A parabolic motion visualized, with the position stored per time unit
:alt: A short video of a small ball being shot upward at an angle. For each frame, it position is marked by a dot. The dots make up a parabola. 
```

Assume the object with mass $m_1$ is shot from the ground with a velocity of $v_0$ at an angle of $\theta$. Derive where the object hits the ground in terms of $m_1$, $v_0$ and $\theta$.

How does the distance traveled changes when the mass of the object is doubled $m_2=2m_1$?
````

````{solution} ex_pj1
:class: dropdown

The horizontal traveled distance is the same per time unit. For the vertical traveled distance it decreases until $v_y=0$ and then increases.

::::{tab-set}
:::{tab-item} Interpret
```{figure} ../images/ch2_ex_pj.*
:alt: A ball of mass m1, with a velocity vector pointing upward at angle theta with respect to the horizontal.
```
:::

:::{tab-item} Develop
The basic formulas are:
$$s_x(t)=v_xt$$
and
$$s_y(t)=v_yt-1/2gt^2$$
:::

:::{tab-item} Evaluate
The horizontal traveled distance is given by:

$$s_x(t)=v_xt=v_0\cos(\theta)t$$

The time the object stays in the air is

$$s_y(t)=v_yt-1/2gt^2=0 \Rightarrow t=0 \text{ \& } t=\frac{2v_y}{g}=\frac{2v_0\sin(\theta)}{g}$$

Hence, the maximum distance traveled is:

$$s_x(t)=v_xt=v_0\cos(\theta)\frac{2v_0\sin(\theta)}{g}=\frac{2v_o^2\sin(\theta)\cos(\theta)}{g}$$

Note that the distance traveled is independent of the mass!
:::

````


```{danger}
Understand that the case above is specific in physics: in most realistic contexts multiple forces are acting upon the object. Hence the equation of motion does not become $s(t) = s_0 + v_0t + 1/2at^2$
```


```{exercise} Constant acceleration due to gravity &#127798;
:label: Const_g
We assumed a constant acceleration due to gravity. However, the gravitational force is given by $F=-G\frac{mM}{r^2}$.  
Calculate at what height above the earth the acceleration due to gravity has 'significantly' changed from $9.81 \mathrm{m/s}^2$, say to $9.80 \mathrm{m/s}^2$.
```

````{solution} Const_g
:class: dropdown

The acceleration of gravity is found by setting the gravitation force equal to $-mg$:

$$-G\frac{mM}{r^2} = -mg(r) \Rightarrow g(r) = G\frac{M}{r^2}$$

with $M$ the mass of the earth.

At the surface of the earth, $r = R_e$ we have for the value of $g_e = 9.81 \: \mathrm{m/s}^2$. We look for the height above the earth surface where $g$ has dropped to $9.80 \: \mathrm{m/s}^2$. If we call this height $H$, we write for the distance to the center of the earth $r = R_e +H$. 

Thus, we look for $\frac{g(r)}{g_e} = \frac{9.80 (\mathrm{m/s}^2)}{9.81 (\mathrm{m/s}^2)} = 0.999$:

$$ \frac{g(r)}{g_e} = \frac{GM/r^2}{GM/R_e^2} \rightarrow \frac{R_e^2}{r^2} = \frac{R_e^2}{(R_e+H)^2} = \frac{9.80}{9.81} = 0.999$$

If we solve $H$ from this equation we find: $H = 3.25 \: \mathrm{km}$ (we used $R_e = 6378 \: \mathrm{km}$).

```{note} 
We could have also looked at the ratios (between $g$ and $r$), and found that $R_2=\sqrt{.999} \cdot 6378 = 6374.8 \: \mathrm{km}$. Hence, $H=3.2 \: \mathrm{km}$.
```

If we would have said: 'significant change' in means $g \rightarrow 9.81 \to 9.71 \: \mathrm{m/s}^2$, we would have found $H = 32.8 \: \mathrm{km}$.

````

```{exercise} A rocket in space &#127798;
A rocket moves freely horizontal through space. At position $x=2$ it turns on its propulsion. At position $x=4$ it turns off its propulsion. The force due to this propulsion is directed perpendicular to the x-direction.

Provide a sketch of its movement highlighting all important parts.
```


```{code-cell} python
:tag: hide-input


# Rocket simulation
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML
#plt.rcParams['font.family'] = 'Segoe UI Emoji' #for rocket

# Simulationparameters
dt = 0.05
t_max = 10
t_values = np.arange(0, t_max, dt)

# Physical parameters
vx = 1.0
Fy = 1.0
m = 1.0
ay = Fy / m

# Calculation trajectory
x = vx * t_values
y = np.zeros_like(t_values)

x_burn_start = 2.0
x_burn_end = 4.0
i_start = np.argmax(x >= x_burn_start)
i_end = np.argmax(x >= x_burn_end)

for i in range(i_start, i_end+1):
    t_burn = t_values[i] - t_values[i_start]
    y[i] = 0.5 * ay * t_burn**2

vy_final = ay * (t_values[i_end] - t_values[i_start])
y0 = y[i_end]
t0 = t_values[i_end]

for i in range(i_end, len(t_values)):
    y[i] = y0 + vy_final * (t_values[i] - t0)

# Plot
fig, ax = plt.subplots(figsize=(8, 4))
ax.set_xlim(0, np.max(x)+1)
ax.set_ylim(0, np.max(y)+1)
ax.set_xlabel("x")
ax.set_ylabel("y")
ax.set_title("Rocket with propulsion on between x=2 en x=4")

# Rocket 
#rocket = ax.text(0, 0, "\U0001F680", fontsize=14)
rocket = ax.text(0, 0, "↑", fontsize=14)

# Trail
trail, = ax.plot([], [], 'r-', lw=1)

# Time
time_text = ax.text(0.98, 0.95, '', transform=ax.transAxes,
                    ha='right', va='top', fontsize=12)

# Init
def init():
    rocket.set_position((0, 0))
    trail.set_data([], [])
    time_text.set_text('')
    return rocket, trail, time_text

# Update
def update(frame):
    rocket.set_position((x[frame], y[frame]))
    trail.set_data(x[:frame+1], y[:frame+1])
    time_text.set_text(f"t = {t_values[frame]:.2f} s")
    return rocket, trail, time_text

# Animation
ani = FuncAnimation(fig, update, frames=len(t_values),
                    init_func=init, interval=dt*1000, blit=True)

plt.close()
HTML(ani.to_jshtml())

```

```{exercise} Particle movement &#127798; &#127798;
:label: ex_part
Consider a particle which will travel a distance $x$. Find two different mathematical expressions for a force acting on the particle in such a way that the particle will travel the same distance in the same time for each $F(t)$ compared to a particle which travels at constant speed. Assume no initial velocity for the two particles.
```

```{solution} ex_part
:class: dropdown
Uniform motion ($F=ma=0 \rightarrow s=v_0t$).

Constant acceleration $a=const \rightarrow s=1/2at^2$, with $a=\frac{2v_0^2}{s}$.

Consider the third being a harmonic oscillating force field: $F(t)=A\sin(2\pi ft)$
Then the equation of motion becomes:

$$a = F/m = \frac{A}{m}\sin(2\pi ft)$$

$$v = \int{a}dt = \frac{A}{m2\pi f}\cos(2\pi ft) + C_0$$

Assuming $v(0)=0 \rightarrow C_0 = -\frac{A}{m2\pi f}$

And, 

$$x = \int{v}dt = \frac{A}{m(2\pi f)^2}\sin(2\pi ft) + C_0t + C_1$$

Assuming $x(0)=0 \rightarrow C_1 = 0$

Hence:

$$x = \frac{A}{m(2\pi f)^2}\sin(2\pi ft) - \frac{A}{m2\pi f}t$$

Now, finding traveling the same distance in the same time AND the harmonic oscillation is complete (hence, $f=\frac{1}{t_e}$):

$$v_0t_e = \frac{A t_e^2}{m(2\pi)^2}\sin(2\pi) - \frac{A t_e}{m2\pi}t_e$$

$$v_0t_e = - \frac{A t_e^2}{m2\pi}$$

$$v_0 = - \frac{A t_e}{m2\pi}$$

$$\frac{m}{A} = - \frac{t_e}{v_02\pi}$$

```


```{code-cell} python
:tag: hide-input
# Animatie van een deeltje met constante snelheid en een deeltje met constante versnelling
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from IPython.display import HTML

# Parameters
v = 1.0                         # snelheid in x-richting
dt = 0.05                       # tijdstap in seconden
t_max = 10 + dt                 # totale simulatie tijd
y = 0.5                         # constante y-positie
a = 2*v**2/(v*(t_max-dt))       # versnelling in x-richting
m = 1.0                         # massa van het deeltje
A = - v*2*np.pi / (t_max-dt)    # amplitude van de sinusgolf
f = 1 / (t_max-dt)              # frequentie van de sinusgolf

# Vooraf posities berekenen
t_values = np.arange(0, t_max, dt)
x_values = v * t_values
x_values_2 = 1/2 * a * t_values**2  # voor een andere beweging
x_values_3 = A / (m * (2 * np.pi * f)**2) * np.sin(2 * np.pi * f * t_values) - A / (m * 2 * np.pi * f) * t_values

y_values = np.full_like(x_values, y)  # constante y

# Setup plot
fig, ax = plt.subplots(figsize=(8, 4))
ax.set_xlim(0, x_values[-1] + 1)
ax.set_ylim(0, 1)
ax.set_xlabel("x")
ax.set_ylabel("y")


particle, = ax.plot([], [], 'ro', markersize=10, label='uniform motion')
particle_2, = ax.plot([], [], 'bo', markersize=10, label='uniform acceleration')
particle_3, = ax.plot([], [], 'go', markersize=10, label='harmonic oscillating force')

ax.legend(loc='lower right')
time_text = ax.text(0.98, 0.95, '', transform=ax.transAxes,
                    ha='right', va='top', fontsize=12)

# Initialisatie
def init():
    particle.set_data([], [])
    particle_2.set_data([], [])
    particle_3.set_data([], [])
    time_text.set_text('')
    return particle, time_text

# Update per frame
def update(frame):
    x = x_values[frame]
    x_2 = x_values_2[frame]
    x_3 = x_values_3[frame]
    y = y_values[frame]
    t = t_values[frame]
    particle.set_data([x],[y])
    particle_2.set_data([x_2], [.5*3*y])
    particle_3.set_data([x_3], [.5*y])
    time_text.set_text(f"t = {t:.2f} s")
    return particle, time_text

# Animatie
ani = FuncAnimation(fig, update, frames=len(t_values),
                    init_func=init, interval=dt*1000, blit=True)

plt.close()
HTML(ani.to_jshtml())

```

(sec_NewtonsLaws_friction)=
### Frictional forces
There are two main types of frictional force:
* **Static friction** prevents an object from starting to move. It adjusts in magnitude up to a maximum value, depending on how much force is trying to move the object. This maximum is given by
    
$$F_{static,max}=\mu_sN$$
    
where $\mu_s$​ is the coefficient of static friction and $N$ is the normal force. If the applied force exceeds this maximum, the object begins to slide.

* **Kinetic (dynamic) friction** opposes motion once the object is sliding. Its magnitude is generally constant and given by

$$ F_{kinetic} = \mu_k N $$

where $\mu_k$​ is the coefficient of kinetic friction. This force does not depend on the velocity of the object, only on the normal force and surface characteristics.

Friction always acts opposite to the direction of intended or actual motion and is essential in both preventing and controlling movement.

| Material Pair                  | Static Friction ($\mu_s$) | Kinetic Friction ($\mu_k$) |
|------------------------------- |:------------------------:|:--------------------------:|
| Rubber on dry concrete         | 1.0                      | 0.8                        |
| Steel on steel (dry)           | 0.74                     | 0.57                       |
| Wood on wood (dry)             | 0.5                      | 0.3                        |
| Aluminum on steel              | 0.61                     | 0.47                       |
| Ice on ice                     | 0.1                      | 0.03                       |
| Glass on glass                 | 0.94                     | 0.4                        |
| Copper on steel                | 0.53                     | 0.36                       |
| Teflon on Teflon               | 0.04                     | 0.04                       |
| Rubber on wet concrete         | 0.6                      | 0.5                        |
| Leather on wood                | 0.56                     | 0.4                        |

*Values are approximate and can vary depending on surface conditions.*

```{note}
Not always are the friction coefficients constants. They may, for instance, depend on the relative velocity between the two materials.
```


```{code-cell} python
:tag: hide-input

import numpy as np
import matplotlib.pyplot as plt
from matplotlib.patches import Rectangle
from matplotlib.transforms import Affine2D
from ipywidgets import interact
import ipywidgets as widgets

# Constants
start = [0, 0]

L = 2
m = 10 #kg
g = 9.81 #kgm/s^2

def Fw(theta,mu):
    return mu*m*g*np.cos(theta)

def Fzx(theta):
    return m*g*np.sin(theta)

def update(theta,mu):
    # Compute arrow end coordinates
    end = np.array([L * np.cos(theta), L * np.sin(theta)])

    # Clear figure
    plt.clf()
    fig, ax = plt.subplots()
    ax.set_xlim(0, 2)
    ax.set_ylim(0, 2)
    ax.set_aspect('equal')
    ax.grid(True)

    if Fw(theta,mu)>Fzx(theta):
        ax.text(1.5, 1.5, 'Stable', fontsize=12)
    else:
        ax.text(1.5, 1.5, 'Sliding', fontsize=12)
    # Draw arrow
    ax.arrow(start[0], start[1], end[0], end[1],
             head_width=0, head_length=0, fc='black', ec='black')

    # Box properties
    box_width = 0.4
    box_height = 0.2

    # Create unrotated rectangle at (0,0)
    rect = Rectangle((-box_width / 2, 0 ),
                     box_width, box_height,
                     linewidth=1, edgecolor='red', facecolor='lightgray')

    # Compute arrow end coordinates
    end = start + np.array([L * np.cos(theta), L * np.sin(theta)])

    # Compute midpoint of arrow
    mid = start + np.array([L/2 * np.cos(theta), L/2 * np.sin(theta)])
    
    # Transformation: rotate around origin, then translate to arrow tip
    trans = (Affine2D()
             .rotate(theta)
             .translate(mid[0], mid[1]) + ax.transData)

    rect.set_transform(trans)
    ax.add_patch(rect)

    #Normal force
    #Forces include 0.01 for scaling purposes
    Fn = .01*m*g*np.cos(theta)
    ax.arrow(mid[0], mid[1], Fn * np.cos(theta + np.pi/2), .01*m*g*np.cos(theta) * np.sin(theta + np.pi/2), 
         head_width=0.05, head_length=0.1, fc='blue', ec='blue')

    #Friction
    if Fw(theta, mu) < Fzx(theta):
        Ff = 0.01 * mu * m * g * np.cos(theta)
    else:
        Ff = 0.01 * m * g * np.sin(theta)

    ax.arrow(mid[0], mid[1], Ff * np.cos(theta), Ff * np.sin(theta),
         head_width=0.05, head_length=0.1, fc='red', ec='red')
    
    #Fx
    Fx = 0.01 * m * g * np.sin(theta)
    ax.arrow(mid[0], mid[1], -Fx * np.cos(theta), -Fx * np.sin(theta),
         head_width=0.05, head_length=0.1, fc='green', ec='green')
    
    plt.show()

# Use FloatSlider for smooth interaction
interact(update, theta=widgets.FloatSlider(min=0, max=np.pi/2, step=np.pi/16, value=np.pi/4),
         mu=widgets.FloatSlider(min=0, max=1, step=0.05, value=1))

```


```{exercise} Block on an incline
:label: ex_ch2_block

A block with mass $m$ is put on an inclined plane of which we can change the inclination angle $\theta$. 

1. Determine the angle at which it starts to slide in terms of mass $m$, inclination angle $\theta$, acceleration due to gravity $g$ and coefficient of static friction $\mu_s$.
2. Once it starts to slide, it will accelerate. Determine its acceleration in terms of mass $m$, inclination angle $\theta$, acceleration due to gravity $g$ and coefficient of kinetic friction $\mu_f$.
```

```{solution} ex_ch2_block
:class: dropdown

1. There a two forces acting on $m$ parallel to the inclined plane: friction and gravity's component parallel to the slope. These two determine the motion along the slope: if we tilt the plane the component of gravity parallel to the slope gets bigger. The particle will start moving when we pass: $F_{g_x} = F_s \rightarrow mg\sin(\theta) = mg\mu_s\cos(\theta) \Rightarrow \theta_{max} = \tan^{-1}(\mu_s)$
2. Once the particle is sliding downward, gravity and the kinetic friction determine how fast: 
$$F_{net} = F_{g_x} - F_f \rightarrow ma = mg\sin(\theta) - mg\mu_k\cos(\theta) \Rightarrow$$
and  
$$a = g(\sin(\theta)-\mu_k\cos(\theta))$$

```

```{h5p} https://tudelft.h5p.com/content/1292811209119377557/embed
```

(sec_NewtonsLaws_momentum)=
### Momentum example
The above theoretical concept is simple in its ideas: 
- a particle changes its momentum whenever a force acts on it; 
- momentum is conserved; 
- action = - reaction. 

But it is incredible powerful and so generic, that finding when and how to use it is much less straight forward. The beauty of physics is its relatively small set of fundamental laws. The difficulty of physics is these laws can be applied to almost anything. The trick is how to do that, how to start and get the machinery running. That can be very hard. Luckily there is a recipe to master it: it is called practice. 

```{exercise} &#127798;
:label: ex_ch2_pointp

A point particle (mass $m$) is dropped from rest at a height $h$ above the ground. Only gravity acts on the particle with a constant acceleration $g$ ($=9.813 \: \mathrm{m/s}^2$).

* Find the momentum when the particle hits the ground.
* What would be the earth' velocity upon impact?

```

````{solution} ex_ch2_pointp
:class: dropdown

Let's do this one together. We follow the standard approach of IDEA: Interpret (and make your sketch!), develop (think 'model'), evaluate (solve your model) and assess (does it make any sense?).  

::::{tab-set}

:::{tab-item} Interpret

First a sketch: draw what is needed, no more, no less. 

```{figure} ../images/ch2_Example2.svg
:name: fig:Example2
:width: 20%
:alt: At the top, a small gray circle is drawn to denote the mass. At the bottom, a large blue circle is drawn to denote Earth. An arrow points downward from the center of the small mass, and is labelled -mg. An upward arrow points from the Earth's center, and is labelled mg.  
align: center
```
:::

:::{tab-item} Develop

Actually this is half of the work, as when deciding what is needed we need to think what the problem really is. Above, is a sketch that could work. Both the object $m$ and the earth (mass $M$) are drawn schematically. On each of them acts a force, where we know that on $m$ standard gravity works. As a consequence of N3, a force equal in strength but opposite in direction acts on $M$.  
Why do we draw forces? Well, the question mentions 'momentum the particle hits the ground'. Momentum and forces are coupled via N2.  

We have drawn a z-coordinate: might be handy to remind us that this looks like a 1D problem (remember: momentum and force are both vectors).

As a first step, we ignore the motion of the earth. Argument? The magnitude of the ratio of the acceleration of earth over object is given by:

$$
\frac{a_e}{a_o} = \frac{| F_{o \rightarrow e} |/m_e}{| F_{e \rightarrow o} |/m_o} = \frac{m_o}{m_e}
$$

here for the second equality we used N3.  

For all practical purposes, the mass of the object is many orders of magnitude smaller than that of the earth. Hence, we can conclude that the acceleration of the earth is many orders of magnitude less than that of the object. The latter is of the order of $g$, gravity's acceleration constant at the earth. Thus, the acceleration of the earth is next to zero and we can safely assume our lab system, that is connected to the earth, can be treated as an inertial system with, for us, zero velocity.

:::

:::{tab-item} Evaluate

The remainder is straightforward. Now we have an object, that moves under a constant force. So its velocity will increase linearly in time:

$$
\frac{dp}{dt} = -mg \Rightarrow p(t) = m\underbrace{v_0}_{=0} - mgt = -mgt
$$

From the momentum we can calculate the velocity and from the velocity the position:

$$
v = -gt \Rightarrow \frac{dz}{dt} = -gt \Rightarrow z(t) = \underbrace{z_0}_{=H} - \frac{1}{2}gt^2 = H - \frac{1}{2}gt^2
$$

Solve for $z(T) = 0 $ and find $ T = \sqrt{\frac{2H}{g}} $. Substitute this into the relation for $ v $: $ v(T) = -\sqrt{2gH} $. As the earth-object system has conserved momentum, the velocity of the earth is to a good approximation: 

$$ p_e + p_o = 0 \Rightarrow v_e = - \frac{m_o}{m_e} v_o = \frac{m_o}{m_e} \sqrt{2gH} $$

:::

:::{tab-item} Assess

We found that the particle changed its momentum from $p_i=0$ to $p_f=-mv$. The earth compensates for this, to keep momentum conserved. That gave that earth got a tiny, tiny upwards velocity. We could estimate the displacement of the earth. Suppose, the particle has mass $m$=1kg and is dropped from a height $H=100\mathrm{m}$. Then we get for the velocity of the mass upon impact: $v=-44.3\mathrm{m/s}$ and a falling time $\Delta t=4.5\mathrm{s}$. For the earth we thus find that during the process the velocity is smaller than $v_e$ and thus, the distance traveled by earth towards the mass is less than $\Delta x_e \lt v_e \Delta t = 1.6 \cdot 10^{-24}\mathrm{m}$. Indeed completely negligible, the size of the nucleus of an atom is many orders of magnitude bigger!

:::

::::

````


(sec_NewtonsLaws_forces_inertia)=
## Forces & Inertia
Newton's laws introduce the concept of force. Forces have distinct features:
* forces are vectors, that is, they have magnitude and direction;
* forces change the motion of an object:
  - they change the velocity, i.e. they accelerate the object  

$$\vec{a} = \frac{\vec{F}}{m} \leftrightarrow d\vec{v} = \vec{a}dt = \frac{\vec{F}dt}{m}$$

  - or, equally true, they change the momentum of an object 
      
  $$\frac{d\vec{p}}{dt} = \vec{F} \leftrightarrow d\vec{p} = \vec{F}dt $$

Many physicists like the second bullet: forces change the momentum of an object, but for that they need time to act.

Momentum is a more fundamental concept in physics than acceleration. That is another reason why physicists prefer the second way of looking at forces. 



````{tip} Connecting physics and calculus
Let's look at a particle of mass $m$, that has initially (say at $t=0$) a velocity $v_0$. For $t>0$ the particle is subject to a force that is of the form $F = - b v$. This is a kind of frictional force: the faster the particle goes, the larger the opposing force will be. 

We would like to know how the position of the particle is as a function of time. 

We can answer this question by applying Newton 2:

$$ m\frac{dv}{dt} = F \Rightarrow m\frac{dv}{dt} + bv = 0$$

Clearly, we have to solve a differential equation which states that if you take the derivative of $v$ you should get something like $- v$ back. From calculus we know, that exponential function have the feature that when we differentiate them, we get them back. So, we will try $v(t) = A e^{-\mu t}$ with $A$ and $\mu$ to be determined constants.

We substitute our trial $v$:

$$ m \cdot A \cdot -\mu e^{-\mu t} + b \cdot A e^{-\mu t} = 0$$

This should hold for all $t$. Luckily, we can scratch out the term $e^{-\mu t}$, leaving us with:

$$-m A \mu + Ab = 0$$

We see, that also our unknown constant $A$ drops out. And, thus, we find

$$ \mu = \frac{b}{m} $$

Next we need to find $A$: for that we need an initial condition, which we have: at $t=0$ is $v=v_0$. So, we know:

$$v(t) = A e^{-\frac{b}{m}t} \text{   and  } v(0)=v_0$$

From the above we see: $A = v_0$ and our final solution is:

$$v(t) = v_0 e^{-\frac{b}{m}t}$$

From the solution for $v$, we easily find the position of $m$ as a function of time. Let's assume that the particle was in the origin at $t=0$, thus $x(0)=0$. So, we find for the position

$$\frac{dx}{dt} \equiv v = v_0 e^{-\frac{b}{m}t} \Rightarrow x = v_0 \cdot \left ( -\frac{m}{b}e^{-\frac{b}{m}t} \right ) + B$$

We find $B$ with the initial condition and get as final solution:

$$x(t) = \frac{m v_0}{b} \left ( 1 - e^{-\frac{b}{m}t} \right ) $$

If we inspect and assess our solution, we see: the particle slows down (as is to be expected with a frictional force acting on it) and eventually comes to a stand still. At that moment, the force has also decreased to zero, so the particle will stay put.

```{code-cell} python
:tag: hide-input

import numpy as np
import matplotlib.pyplot as plt
import ipywidgets

#code to study the x(t) formula above
```

````


(sec_NewtonsLaws_inertia)=
### Inertia
Inertia is denoted by the letter $ m $ for mass. And mass is that property of an object that characterizes its resistance to changing its velocity. Actually, we should have written something like $ m_i $, with subscript i denoting inertia.

Why? There is another property of objects, also called mass, that is part of Newton's Gravitational Law.

Two bodies of mass $ m_1 $ and $ m_2 $ that are separated by a distance $r_{12}$ attract each other via the so-called gravitational force ($\hat{r}_{12}$ is a unit vector along the line connecting $m_1$ and $m_2$):

$$\label{fgrav} \vec{F}_{12} = - G \frac{m_1 m_2}{r^2_{12}}\hat{r}_{12}$$
      
Here, we should have used a different symbol, rather than $ m $. Something like $ m_g $, as it is by no means obvious that the two 'masses' $ m_i $ and $ m_g $ refer to the same property. If you find that confusing, think about inertia and electric forces. Two particles with each an electric charge, $q_1$ and $q_2$, respectively exert a force on each other known as the Coulomb force:

$$\vec{F}_{C,12} = \frac{1}{4\pi\epsilon_0} \frac{q_1 q_2}{r^2_{12}}\hat{r}_{12}$$

We denote the property associated with electric forces by $ q $ and call it charge. We have no problem writing

$$\label{eq:F_net} \vec{F} = m \vec{a} \\ \vec{F}_C = \frac{1}{4\pi \epsilon_0} \frac{q Q}{r^2} \hat{r} $$

We do not confuse $q$ by $m$ or vice versa. They are really different quantities: $q$ tells us that the particle has a property we call 'charge' and that it will respond to other charges, either being attracted to, or repelled from. How fast it will respond to this force of another charged particle depends on $m$. If $m$ is big, the particle will only get a small acceleration; the strength of the force does not depend on $m$ at all. So far, so good. But what about $m_g$? That property of a particle that makes it being attracted to another particle with this same property, that we could have called 'gravitational charge'. It is clearly different from 'electrical charge'. But would it have been logical that it was also different from the property inertial mass, $m_i$? 

$$\begin{aligned}
\vec{F} &= m_i \vec{a} \\
\vec{F}_g &= -G \frac{m_g M_g}{r^2} \hat{r} 
\end{aligned}$$

As far as we can tell (via experiments) $ m_i $ and $ m_g $ are the same. Actually, it was Einstein who postulated that the two are referring to the same property of an object: there is no difference.
 
**Force field**  
We have seen, forces like gravity and electrostatics act between objects. When you push a car, the force is applied locally, through direct contact. In contrast, gravitational and electrostatic forces act over a distance — they are present throughout space, though they still depend on the positions of the objects involved.

One powerful way to describe how a force acts at different locations in space is through the concept of a **force field**. A force field assigns a force vector (indicating both direction and magnitude) to every point in space, telling you what force an object would experience if placed there.

For example, the graph below at the left shows a gravitational field, described by $\vec{F}_g=G\frac{mM}{r^2}\hat{r}$. Any object entering this field is attracted toward the central mass with a force that depends on its distance from that mass's center.

The figure on the right shows the force field that a positively charged particle would feel due to the presence of 2 negatively charged particles (both of the same charge). Clearly this is a much more complicated force field. 


```{code-cell} python
:tag: hide-input

import numpy as np
import matplotlib.pyplot as plt

# Define the grid
r = np.linspace(1.4, 3, 3)
theta = np.linspace(0, 2*np.pi, 11)

R, T = np.meshgrid(r, theta)

X = np.cos(T) * R
Y = np.sin(T) * R

# Gravitational field at a point (r,theta)
def gravitational_field(R, T):
    # Magnitude 
    F = -1 / (R**2) 

    # X-component
    F_x = F * np.cos(T)
    # Y-component
    F_y = F * np.sin(T)

    return F_x, F_y

# Calculate the field
F_x, F_y = gravitational_field(R, T)

# Create a figure with a fixed aspect ratio
fig, axes = plt.subplots(1, 2, figsize=(10, 5))

# Plot gravitational field
axes[0].set_xlim((-3, 3))
axes[0].set_ylim((-3, 3))
axes[0].quiver(X, Y, F_x, F_y, color='#00a6d6ff', scale=3.5, width=0.004)
axes[0].scatter(0, 0, s=800, c='k')
axes[0].set_aspect('equal', 'box')
axes[0].set_xticks([])
axes[0].set_yticks([])
axes[0].set_xlabel('x')
axes[0].set_ylabel('y')

# Simulation parameters
electron1 = np.array([-1, 0])  # x, y position of the electron
electron2 = np.array([1, 0])

# Define the grid
x = np.linspace(-2, 2, 400)
y = np.linspace(-2, 2, 400)

X, Y = np.meshgrid(x, y)

# Electric field at a point (x, y)
def electric_field(x, y):
    r1 = np.sqrt((x - electron1[0])**2 + (y - electron1[1])**2)
    r2 = np.sqrt((x - electron2[0])**2 + (y - electron2[1])**2)

    # Electric field due to electron1
    E1_x = - (x - electron1[0]) / r1**3
    E1_y = - (y - electron1[1]) / r1**3

    # Electric field due to electron2
    E2_x = - (x - electron2[0]) / r2**3
    E2_y = - (y - electron2[1]) / r2**3

    # Total electric field
    E_x = E1_x + E2_x
    E_y = E1_y + E2_y

    return E_x, E_y

# Calculate the electric field
E_x, E_y = electric_field(X, Y)

# Plot electric field lines
axes[1].set_xlim((-2, 2))
axes[1].set_ylim((-2, 2))
axes[1].streamplot(X, Y, E_x, E_y, color='#00a6d6ff', density=1, linewidth=1, zorder=1)
axes[1].scatter(electron1[0], electron1[1], s=200, c='k', zorder=10)
axes[1].scatter(electron2[0], electron2[1], s=200, c='k', zorder=10)
axes[1].text(electron1[0], electron1[1], '-', color='white', ha='center', va='center', fontsize=20, zorder=11)
axes[1].text(electron2[0], electron2[1], '-', color='white', ha='center', va='center', fontsize=20, zorder=11)
axes[1].set_aspect('equal', 'box')
axes[1].set_xticks([])
axes[1].set_yticks([])
axes[1].set_xlabel('x')
axes[1].set_ylabel('y')

plt.tight_layout()
plt.show()
```

**Measuring mass or force**  
So far we did not address how to measure force. Neither did we discuss how to measure mass. This is less trivial than it looks at first side. Obviously, force and mass are coupled via N2: $ F = m a $. 

```{figure} ../images/ch2_UsingABalance.svg
:name: fig:UsingABalance
:width: 40%
:align: center
:alt: A simplified drawing of a scale, with a stack of six small standard masses on the left and one big unknown mass on the right. The scale is in balance. 
 
Can force be measured using a balance?
```

The acceleration can be measured when we have a ruler and a clock, i.e. once we have established how to measure distance and how to measure time intervals, we can measure position as a function of time and from that velocity and acceleration.

But how to find mass? We could agree upon a unit mass, an object that represents by definition 1kg. In fact we did. But that is only step one. The next question is: how do we compare an unknown mass to our standard. A first reaction might be: put them on a balance and see how many standard kilograms you need (including fractions of it) to balance the unknown mass. Sounds like a good idea, but is it? Unfortunately, the answer is not  a 'yes'. 

As on second thought: the balance compares the pull of gravity. Hence, it 'measures' gravitational mass, rather than inertia. Luckily, Newton's laws help. Suppose we let two objects, our standard mass and the unknown one, interact under their mutual interaction force. Every other force is excluded. Then, on account on N2 we have

$$
\left\{
\begin{array}{l}
  m_1 a_1 = F_{21} \\
  m_2 a_2 = F_{12} = -F_{21}
\end{array}
\right.
$$
where we used N3 for the last equality. Clearly, if we take the ratio of these two equations we get: 

$$
\frac{m_1}{m_2} = \left | \frac{a_2}{a_1} \right |
$$

irrespective of the strength or nature of the forces involved. We can measure acceleration and thus with this rule express the unknown mass in terms of our standard.

```{note}
We will not use this method to measure mass. We came to the conclusion that we can't find any difference in the gravitational mass and the inertial mass. Hence, we can use scales and balances for all practical purposes. But the above shows, that we can safely work with inertial mass: we have the means to measure it and compare it to our standard kilogram.
```

Now that we know how to determine mass, we also have solved the problem of measuring force. We just measure the mass and the acceleration of an object and from N2 we can find the force. This allows us to develop 'force measuring equipment' that we can calibrate using the method discussed above. 
 
````{intermezzo} Intermezzo: kilogram, unit of mass
In 1795 it was decided that 1 gram is the mass of 1 cm$^3$ of water at its melting point. Later on, the kilogram became the unit for mass. In 1799, the *kilogramme des Archives* was made, being from then on the prototype of the unit of mass. It has a mass equal to that of 1 liter of water at 4$^\circ$C (when water has its maximum density).

```{figure} ../images/kg.jpg
:width: 50%
:alt: A shiny metal cylinder sits on a glass base under two nested glass bell jars. A pair of tongs is placed beside the base. 
:label: fig_kg

The International Prototype of the Kilogram, whose mass was defined to be one kilogram from 1889 to 2019. Picture by [BIPM](https://www.nist.gov/si-redefinition/kilogram), CC BY-SA 3.0 igo, https://commons.wikimedia.org/w/index.php?curid=117707466
```

In recent years, it became clear that using such a standard kilogram does not allow for high precision: the mass of the standard kilogram was, measured over a long time, changing. Not by much (on the order of 50 micrograms), but sufficient to hamper high precision measurements and setting of other standards. In modern physics, the kilogram is now defined in terms of Planck's constant. As Planck's constant has been set (in 2019) at exactly $ h = 6.62607015 \cdot10^{-34} \text{ kg} \text{m}^2 \text{s}^{-1} $, the kilogram is now defined via $h$, the meter and second. 

````

(sec_NewtonsLaws_eotvos)=
### Eötvös experiment on mass
The question whether inertial mass and gravitational mass are the same has put experimentalists to work. It is by no means an easy question. Gravity is a very weak force. Moreover, determining that two properties are identical via an experiment is virtually impossible due to experimental uncertainty. Experimentalist can only tell the outcome is 'identical' within a margin. Newton already tried to establish experimentally that the two forms of mass are the same. However, in his days the inaccuracy of experiments was rather large. Dutch scientist Simon Stevin concluded in 1585 that the difference must be less than 5\%. He used his famous 'drop masses from the church' experiments for this (they were primarily done to show that every mass falls with the same acceleration).

A couple of years later, Galilei used both fall experiments and pendula to improve this to: less than 2\%. In 1686, Newton using pendula managed to bring it down to less than 1&permil; .

An important step forward was set by the Hungarian physicist, Loránd Eötvös (1848-1918). We will here briefly introduce the experiment. For a full analysis, we need knowledge about angular momentum and centrifugal forces that we do not deal with in this book.

**The experiment**  
The essence of the Eötvös experiment is finding a set up in which both gravity (sensitive to the gravitational mass) and some inertial force (sensitive to the inertial mass) are present. Obviously, gravitational forces between two objects out of our daily life are extremely small. These will be very difficult to detect and thus introduce a large error if the experiment relies on measuring them. Eötvös came up with a different idea. He connected two different objects with different masses, $m_1$ and $m_2$, via a (almost) massless rod. Then, he attached a thin wire to the rod and let it hang down. 


```{figure} ../images/ch2_EotvosExperiment.svg
:name: fig:EotvosExperiment
:width: 50%
align: center
:alt: Mass m1 and m2 are connected to either end of a horizontal rod. The rod, in turn, is connected by a vertical wire to the ceiling. The rod can rotate around its suspension point. 
 
Torsion balance used by Eötvös.
```

This is a sensitive device: any mismatch in forces or torques will have the setup either tilt or rotate a bit. Eötvös attached a tiny mirror to one of the arms of the rod. If you shine a light beam on the mirror and let it reflect and be projected on a wall, then the smallest deviation in position will be amplified to create a large motion of the light spot on the wall.

In [Eötvös experiment](https://nl.wikipedia.org/wiki/E%C3%B6tv%C3%B6s-experiment) two forces are acting on each of the masses: gravity, proportional to $m_g$, but also the centrifugal force $F_c = m_i R \omega^2$, the centrifugal force stemming from the fact that the experiment is done in a frame of reference rotating with the earth. This force is proportional to the inertial mass. The experiment is designed such that if the rod does not show any rotation around the vertical axis, then the gravitational mass and inertial mass must be equal. It can be done with great precision and Eötvös observed no measurable rotation of the rod. From this he could conclude that the ratio of the gravitational over inertial mass differed less from $1$ than $ 5 \cdot 10^{-8}$. Currently, experimentalist have brought this down to $ 1 \cdot 10^{-15}$.

```{note}
The question is not if $m_i / m_g$ is different from 1. If that was the case but the ratio would always be the same, then we would just rescale $m_g$, that is redefine the value of the gravitational const $G$ to make $m_g$ equal to $m_i$. No, the question is whether these two properties are separate things, like mass and charge. We can have two objects with the same inertial mass but give them very different charges. In analogy: if $m_i$ and $m_g$ are fundamentally different quantities then we could do the same but now with inertial and gravitational mass.
```

```{tip}
Want to know more about this experiment? Watch this [videoclip](https://youtu.be/w2r9ISVJOhs?si=xmfY4f8MLoup1fM4).
```

[^1]: Cannot be reprinted without permission.
