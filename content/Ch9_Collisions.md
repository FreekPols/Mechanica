---
kernelspec:
  name: python3
  display_name: 'Python 3'
---

# Collisions

## What is it?
In daily life we do understand what a collision is: the bumping of two objects into each other. 

From a physics point of view, we see it slightly different. The objects don't have to touch. It is sufficient if they undergo a mutual interaction 'with a beginning and an end'. What do we mean by this? Firstly, the mutual interaction means that the objects interact with each other through a mutual force, i.e. a force (pair) that obeys Newton's third law.  

Secondly, we assume that this force works over a small distance only. Or re-phrased we will only consider the situation before the objects feel the force and compare that to after they have felt it. We don't bother about the details of the motion of the objects during their interaction. Hence, when we depict a collision, we usually draw the situation before the collision, then some kind of 'comic way' of showing the collision and finally we draw the outcome of the collision, so after the interaction. In many cases, people leave the middle part out of their drawing.

```{figure} images/collision.png
:name: fig:collision.png
:width: 320px
:align: center

Collision of two particles.
```

There are two principle types of collisions to distinguish: *elastic* and *inelastic* collisions. For an elastic collision the kinetic energy is conserved, whereas for an inelastic that is not the case. In the latter case, energy can be converted into deformation or heat.

Since the objects interact under the influence of their mutual interaction, we have conservation of momentum:
$$
\sum_i \vec{p}_i^{before} = \sum_i \vec{p}_i^{after}
$$

Why? No external forces implies constant total momentum.

## Elastic Collisions

For an elastic collision the kinetic energy is conserved by definition, next to the momentum. That is the sum of the kinetic energy before the collision is the same as the sum after the collision. This type of collision is also called hard-ball collision; no energy is dissipated into heat or deformation. Think about colliding billiard balls.

For this to be possible, we need to have that the interaction force is conservative. Then, a potential energy exists. And this energy is such that the objects have the same potential energy before as after the collision. Consequently energy conservation leads to: 

$$ E_{kin, before} + V_{before} = E_{kin, after} +\underbrace{V_{after}}_{= V_{before}} \Rightarrow E_{kin, before} = E_{kin, after} $$

### Solution strategy

Here we explain how to compute the velocities after the collision, given the initial situation before the collision. We show this by an example. Consider a head-on collision of two point particles on a line as shown in the figure.


```{figure} images/collision2.png
:name: fig:collision2.png
:width: 320px
:align: center
 
Example of a 1D elastic collision.
```

One particle with mass $3m$ is initially at rest ($u=0$), the other with mass $2m$ has velocity $v$. What are the velocities $v',u'$ of the particles after the collision?

We can write down two equations using conservation of momentum and kinetic energy before and after the collision

$$
\begin{array}{rcl}
2m(2v)+0 &=& 2mv' + 3mu' \quad (*)\\
\frac{1}{2}2m(2v)^2 + 0 &=& \frac{1}{2}2mv'^2 + \frac{1}{2} 3mu'^2
\end{array}
$$

We have 2 equation and 2 unknowns $(v',u')$, therefore we can in principle solve this problem. The question is, what is the best strategy to do so? One equation involves the square of the velocity therefore a good strategy will help. We first bring the velocities $v,v'$ and $u,u'$ to the same side.

$$
\begin{array}{rcl}
2m(2v-v')&=& 3mu'\\
\frac{1}{2}2m(4v^2-v'^2)  &=& \frac{1}{2}3mu'^2
\end{array}
$$

Now we divide the two equations, this makes the solution very easy as the squares of the velocities always divide out.


$$
\Rightarrow 2v+v'=u' \quad (**)
$$

We can use this to find both unknowns by adding equations $(*)$ and $(**)$

$$\begin{array}{lcl}
\begin{split}
    4v&=2v'+3u' \\
    2v&=-v'+u'|* 2 \\
    \hline
    8v&=5u' \\ &\Rightarrow u'=\frac{8}{5}v  
  \end{split} &&
\begin{split}
    4v&=2v'+3u' \\
    2v&=-v'+u'| *-3 \\
    \hline
    -2v&=5v' \\ &\Rightarrow v'=-\frac{2}{5}v  
  \end{split}  
\end{array}$$

This solution strategy always works. NB: you need to practice this. Although it is conceptually easy, we often see that students have problems when actually solving for the 2 unknowns.

Actually, now we think about this strategy: isn't it strange, the kinetic energy equation is squared in our unknowns. Shouldn't we expect 2 solutions? 

The answer is yes: there ought to be 2 solutions. Where is the second one?
Note that when dividing the two equations, we have to make sure that we do not divide by 0. It is very well possible that we do so: suppose $u' = 0$, then also $2v-v' = 0$ and we can not do the division. But what does that mean: $u'=0$ and $2v-v'=0$? Well, of course, then we have after the collision that the incoming particle $2m$ still has velocity $2v$ and the other particle $3m$ is still at rest. 

In retrospect: of course this must be one of the solutions to the problem. We haven't specified anything about the interaction force. But suppose it is absent, that is, the particles don't feel each other at all. Then of course the situation before the collision (a bit strange calling this a collision, but anyway), will still be present after the 'collision'. If nothing happens to the particles, then obviously the sun of the momentum as well as of the kinetic energy stays the same. This actually provides a great check of your work: do you recover the initial conditions?

### Collisions in a plane

Consider now a 2D elastic collision such that the two particles collide in the origin.


```{figure} images/2Dcollision1.png
:name: fig:2Dcollision1.png
:width: 250px
:align: center
 
Example of a 2D elastic collision.
```

If we write down the equation of conservation of momentum (in $x,y$ components) and of kinetic energy, we get

$$
\begin{array}{lcr}
2m(2v)+0 &=& 2mv'_x + 3mu'_x \\
0+ 3mv &=& 2mv'_y + 3mu'_y \\
\frac{1}{2}2m(2v)^2 + \frac{1}{2}3mv^2 &=& \frac{1}{2}2m v'^2 + \frac{1}{2}3mu'^2  
\end{array}
$$

Now we have **4** unknowns ($v'_x, v'_y, u'_x, u'_y$) but only **3** equations. The outcome seems not to be determined by the initial condition? Of course, that cannot be the case. Think shortly why? The outcome is fully determined by the initial conditions, but we did not set up the equations in the best way because we did not first transform the problem into a 1D problem such that the collision is head-on.

We can use a Galilean Transformation to put one particle at rest. Here we set the blue particle to rest by subtracting $-2v$ from its velocity, that is we move with the blue particle (prior to the collision). The corresponding Galilean Transformation is

$$
\begin{array}{rcl}
x' &=& x-2vt\\
y' &=& y
\end{array}
$$

The red particle now has velocity $(-2v,v)$. The problem is still 2D.

```{figure} images/2Dcollision2.png
:name: fig:2Dcollision2.png
:width: 250px
:align: center
 
Applying the Galilean Transformation.
```

Next, we can rotate the coordinate system, to obtain a 1D head-on collision that we can solve as above. 

```{figure} images/2Dcollision3.png
:name: fig:2Dcollision3.png
:width: 250px
:align: center
 
Rotating the coordinate system.
```

We see that we now have a 1-dimensional elastically collision with a particle of mass $3m$ coming in over the $x"$-axis with velocity $-\sqrt{5}v$. It will collide with a particle of mass $2m$ which is at rest. We know how to solve this problem and find the velocities of both particles after the collision. If we do this, we find that after the collision the velocity of the blue particle is $U^{''}_{x^{''}} = -\frac{6}{5}\sqrt{5}v$ and of the red particle $V^{''}_{x^{''}} = -\frac{1}{5}\sqrt{5}v$. Note that we have specified these velocity in the $(x",y")$ coordinate system.

next steps would be to convert the velocities back to the initial coordinate frame. That is a bit cumbersome, but again conceptually easy. The final answer in the original frame of reference is: 

$$\begin{array}{lll}
2m: &U_x = -\frac{2}{5}v, &U_y = \frac{6}{5}v\\
3m: &V_x = \frac{8}{5}v, &V_y = \frac{1}{5}v
\end{array}$$


## Collisions in the Center of Mass frame

There is a special frame of reference: the Center of Mass (CM) frame. Its origin is defined w.r.t the *lab frame* as 

$$\vec{R}=\frac{\sum m_i \vec{x}_i}{\sum m_i}$$ 

We will introduced it formally in the next chapter.

As the mass is conserved during a collision we have 
1) $\sum m_i=const$ and 
2) as the momentum is conserved $\sum m_i \dot{\vec{x}}_i=const$, 

we see that the velocity of the CM does not change before and after collision

$$
\dot{\vec{R}}_{before}=\dot{\vec{R}}_{after}
$$

Instead of working in the lab frame we can use the CM frame. A sketch of the coordinates and vectors is given in the figure below.

```{figure} images/CMsketch.png
:name: fig:CMsketch.png
:width: 250px
:align: center
 
Center of mass.
```

For the relative coordinates $\vec{r}_i$ it holds that $\sum m_i \vec{r}_i =0$. Considering 2 particles: The relative distance $\vec{r}=\vec{r}_1-\vec{r}_2 = \vec{x}_1 -\vec{x}_2$ is Galilei invariant.

Using this property we express the vectors $\vec{r}_1$ and $\vec{r}_2$ in terms of the the relative distance vector $\vec{r}$ for $\vec{r}_1=\frac{\mu}{m_1}\vec{r}$ and $\vec{r}_2=-\frac{\mu}{m_2}\vec{r}$ with $\mu$ the so-called reduced mass (see next chapter). Therefore

$$
\begin{array}{lcr}
m_1\vec{r}_1 &=& \mu \dot{\vec{r}}_1\\
m_2\vec{r}_2 &=& -\mu \dot{\vec{r}}_2
\end{array}
$$

This means the momenta of both particles are *always* equal in magnitude and opposed in direction in the CM frame. Only the orientation of the pair $\dot{\vec{r}}_{1,2}$ can change from before to after the collision.


```{figure} images/CMmomentum.png
:name: fig:CMmomentum.png
:width: 320px
:align: center
 
Collision in center of mass frame.
```

## Inelastic Collisions

For inelastic collisions only the momentum is conserved, but not the kinetic energy. The total energy is of course always conserved. The kinetic energy after the collision is always less than before the collision. This difference is converted to deformation or heat.

The amount of "inelasticity" or loss of energy can be quantified by the *coefficient of restitution* $e$

$$
e\equiv \frac{v_{rel,after}}{v_{rel,before}}
$$

$$
e^2 \equiv \frac{E_{kin,after}}{E_{kin,before}} \text{ in CM frame}
$$

For $e=0$ the collision is fully inelastic, for $e=1$ it is fully elastic.



## Examples

### Newton's Cradle
Click on the image below for a video on Newton's cradle (gives you also the possibility to 'play' with different numerical solvers, from (too) simple to advanced).

<a href="https://www.myphysicslab.com/engine2D/newtons-cradle-en.html">

```{figure} images/newtonCrad.jpg
:name: fig:newtonCrad.jpg
:width: 320px
:align: center
 

```
</a>

````{exercise} Colliding Superballs
Watch this video on bouncing superballs. We discussed this problem in [this chapter](./Ch7_ConservationEquations.md).

```{iframe} https://www.youtube.com/embed/2UHS883_P60?si=KYY0YWHbW-a3UqwU
```


```{figure} images/SuperBall_animation.gif
:name: fig:SuperBall_animation.gif
:width: 320px
:align: center
 
```

Do you agree with the explanation in the movie?

We seem to violate the conservation of kinetic energy: there is much more kinetic energy after the collision than before! Can you figure out what is happening?

```{tip} 
Look carefully at the bouncing of the blue ball with the earth. Is it really true that the velocity after bouncing is $v$ and that the earth does not move? Probably not, as this violates conservation of momentum!
```
````

### Elastic Collision

#### 1D elastic collision
Consider two particles, $m_1$ and $m_2$, moving along the $x$-axis. The two particles will elastically collide. We set mass 2 at a value of 1 (kg) and vary $m_1$. 
In the widget below, you can change the value of $m_1$ and of the velocities of both particles before the collision.

Solve the collision by using conservation of momentum and kinetic energy and compare your results with those of the widget.

```{warning}
here python code for jpnb: 1DelasticCollision.py

test below
```

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from math import atan2, degrees
from IPython.display import HTML

# -------------------------------
# Adjustable Parameters
# -------------------------------
m1 = 1   # mass of particle 1
m2 = 6   # mass of particle 2
v1x = 1  # x velocity of particle 1
v1y = 0  # y velocity of particle 1
v2y = 1  # y velocity of particle 2

# -------------------------------
# Constants and Initial Velocities
# -------------------------------
dt = 0.05
t_stop = 10
tcoll = 5
scale = 40

v1 = np.array([v1x, v1y], dtype=float)
v2 = np.array([0, v2y], dtype=float)

# -------------------------------
# Compute Collision Result
# -------------------------------
def compute_collision(m1, m2, v1, v2):
    Vcg = (m1 * v1 + m2 * v2) / (m1 + m2)
    u1 = v1 - Vcg
    u2 = v2 - Vcg

    angle = atan2(u1[1], u1[0])
    R = np.array([[np.cos(angle), np.sin(angle)],
                  [-np.sin(angle), np.cos(angle)]])
    
    uac1 = R @ u1
    uac2 = R @ u2

    wac2x = ((1 - m1 / m2) * uac2[0] + 2 * m1 / m2 * uac1[0]) / (1 + m1 / m2)
    wac1x = uac2[0] - uac1[0] + wac2x

    wac1 = np.array([wac1x, 0])
    wac2 = np.array([wac2x, 0])

    R_inv = np.linalg.inv(R)
    w1 = R_inv @ wac1 + Vcg
    w2 = R_inv @ wac2 + Vcg

    return w1, w2

w1, w2 = compute_collision(m1, m2, v1, v2)
alpha_1 = round(degrees(atan2(w1[1], w1[0])) / 10) * 10
alpha_2 = round(degrees(atan2(w2[1], w2[0])) / 10) * 10

x1_init = -v1 * (t_stop - tcoll)
x2_init = -v2 * (t_stop - tcoll)

x1_coll = x1_init + v1 * tcoll
x2_coll = x2_init + v2 * tcoll

# -------------------------------
# Set Up Figure
# -------------------------------
fig, ax = plt.subplots(figsize=(6, 6))
ax.set_xlim(-300, 300)
ax.set_ylim(-300, 300)
ax.set_xticklabels([])
ax.set_yticklabels([])
ax.set_aspect('equal')
ax.grid()

p1, = ax.plot([], [], 'ro')
p2, = ax.plot([], [], 'bo')
path1, = ax.plot([], [], 'r--', lw=1)
path2, = ax.plot([], [], 'b--', lw=1)
angle_text = ax.text(0.02, 0.02, '', transform=ax.transAxes)

traj1, traj2 = [], []

# -------------------------------
# Animation Functions
# -------------------------------
def init():
    p1.set_data([], [])
    p2.set_data([], [])
    path1.set_data([], [])
    path2.set_data([], [])
    angle_text.set_text('')
    return p1, p2, path1, path2, angle_text

def update(frame):
    t = frame * dt
    if t < tcoll:
        pos1 = x1_init + v1 * t
        pos2 = x2_init + v2 * t
    else:
        pos1 = x1_coll + w1 * (t - tcoll)
        pos2 = x2_coll + w2 * (t - tcoll)

    traj1.append(pos1.copy())
    traj2.append(pos2.copy())

    p1.set_data([scale * pos1[0]], [scale * pos1[1]])
    p2.set_data([scale * pos2[0]], [scale * pos2[1]])

    traj1_np = np.array(traj1)
    traj2_np = np.array(traj2)

    path1.set_data(scale * traj1_np[:, 0], scale * traj1_np[:, 1])
    path2.set_data(scale * traj2_np[:, 0], scale * traj2_np[:, 1])

    if abs(t - t_stop) < dt:
        angle_text.set_text(f"α₁ = {alpha_1}°, α₂ = {alpha_2}°")

    return p1, p2, path1, path2, angle_text

# -------------------------------
# Create and Display Animation
# -------------------------------
ani = FuncAnimation(fig, update, frames=int(t_stop / dt), init_func=init, blit=True, interval=50)
HTML(ani.to_jshtml())


```



#### 2D elastic collision
Next, we consider an elastic collision between $m_1$ and $m_2$, but now in a 2-dimensional setting.

In the widget below, the situation is animated. You can change the values of the initial velocity and masses. Can you (qualitatively) predict the outcome of the collision for a given set os parameters?

```{warning}
here python code for jpnb: 2DElasticCollision.py
```

### Inelastic Collision
PArticle $m_1$ is moving over the $x$-axis with unit velocity. Simultaneously, particle $m_2$ is moving over the $y$-axis also with unit velocity. Both particles will collide in the origin. The collision is inelastic with restitution coefficient $e$.

The widget below shows the trajectories of the particles and gives the velocities after the collision. Moreover, als the angle of the trajectories after the collision with the $x$-axis is given.

```{warning}
here python code for jpnb: 2DCollision.py
```

Can you solve this problem for a few values of the restitution coefficient? The 'easy ones' are for $e=0$.


```{exercise} Completely inelastic collision
:label: ex_91

Consider a particle with mass $M$ being at rest in your frame of reference. A second particle of mass $m$ comes in over the negative $x$-direction with velocity $v$. The collision is completely inelastic.

Find the velocities after the collision.
```

```{solution} ex_91
:class: dropdown
Given: the collision is completely inelastic. That means $e=0$ or in words: after the collision the two particles stick together and move as one particle. Thus, we have only one unknown velocity after the collision.

The problem is 1-dimensional and we can solve it by requiring conservation of momentum:

$$\begin{split}

\text{before \;\;\;\;\;\;\;} mv &+ M \cdot 0 = (m+M)U \text{ \;\;\;\;\;\;\; after} \\
\Rightarrow U &= \frac{m}{m+M} v

\end{split}$$

```


## Exercises

Here are some exercises that deals with oscillations. Make sure you practice IDEA.

```{exercise}
:label: 9.1


A particle of mass $3m$ and velocity $2v$ will collide with a particle of mass $2m$ and velocity $-3v$. The problem is 1-dimensional.

- The collision is elastic. Find the velocities of the masses after the collision.
- The collision is completely inelastic. Find the velocities of the masses after the collision.
- The restitution coefficient is: e=1/5. Find the velocities of the masses after the collision.
```


```{exercise}
:label: 9.2

A particle of mass $2m$ moves over the x-axis with velocity $v$. It will collide with a particle of mass $m$ that moves over the y-axis also with velocity $v$. The collision is completely inelastic.

Find the velocity of the particles after the collision and calculate the loss of kinetic energy.

```


```{exercise}
:label: 9.3

A tennis ball is dropped from a height of 1m (with zero initial velocity) on the tennis court. The restitution coefficient is $\frac{1}{2}\sqrt{2}$. After how many bounces does the tennis ball no longer reach a height of 0.25m. Friction with the air can be ignored.

```


```{exercise}
:label: 9.4

In Hollywood films often one of the persons is shot. That person (whether dead, wounded or 'just fine' for the hero) is blown of its feet and may fly a meter or more backwards.

The shooter, however, does not fly or fall backwards.

1. Show that if the victim moves backwards significantly, then the shooter shoot do at least the same.
1. A bullet weighs several grams and may have a velocity of several hundred m/s. Estimate what the backward velocity of a victim is. For comparison: when we walk, our velocity is 1 to 2 m/s. Conclusion?


```

### Answers

```{solution} 9.1
:class: dropdown

- $3m$ has velocity $-2v$ and $2m$ has velocity $3v$
- Both particles have zero velocity.
- $3m$ has velocity $-2/5 v$ and $2m$ has velocity $3/5 v$.
```

```{solution} 9.2
:class: dropdown

$$\vec{v}_{after} = \frac{2}{3}v \hat{x} + \frac{1}{3}v \hat{y}$$

$$\Delta E_{kin} = -\frac{2}{3}mv^2$$

```

```{solution} 9.3
:class: dropdown


After each bounce, the tennis ball reaches half of the height it had before the bounce. Thus after two bounces, the ball reaches 25cm and with the third bounce only 12.5cm.
```


```{solution} 9.4
:class: dropdown


1. We can consider the shooting as a collision. Bullets don't bounce back, they penetrate a body. So the victim 'gains' maximum momentum if the bullet stays in the body. Then according to conservation of momentum, we have for this inelastic collision:

$$m_b v_b + M_v \cdot 0 = \left ( m_b + M_v \right ) U$$

Thus the velocity of the victim after being shot is:

$$U = \frac{m_b}{m_b + M_v} v_b $$

For the shooter a similar argument holds: before the shot, bullet & shooter have zero momentum. After firing, the bullet has velocity $v_b$. Thus conservation of momentum requires:

$$0 = m_b v_b + M_s U_s$$

and we find for the velocity of the shooter:

$$U_s = -\frac{m_b}{M_s} v_b$$

Conclusion: as the mass of the bullet is negligible compared to that of a person both shooter and victim have similar velocities. As their mass is comparable, it is clear: from a physics point of view, if the victim is blown backward, than also the shooter is.

1. From the above we get, using $m_b \approx 10 \cdot 10^{-3}$kg, $v_b \approx 500$m/s and $M_v \approx 70$kg:

$$U_v = \frac{m_b}{m_b + M_v} v_b \approx 7 cm/s$$

That is much too little to 'knock' someone over. Hollywood is good at 'dramatic effects', not so good at physics.

```


````{experiment} restitution coefficient
Is the restitution coefficient of a bouncing tennis ball a constant or does it depend on the velocity at bouncing?
You can 'easily' find out yourself. What you need is a tennis ball, and your mobile with the [phyphox app](https://phyphox.org).

Experiment: drop a tennis ball with zero initial velocity from various height, $H$. Use the acoustic chronometer to measure the time between multiple bounces.

1. Show that the relation between height and time between two bounces is equal to $s=\frac{1}{8}gt^2$
1. Use your recordings to compute the height as function of number of bounces and compute the restitution coefficient $e$. 
1. Plot $e$ as a function $H$ and you will have answered the above question.

```{figure} images/DroppingTennisBall2.png
:name: fig:DroppingTennisBall2.png
:width: 200px
:align: center
 

```
````
