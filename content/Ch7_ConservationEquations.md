# Conservation Laws / Galilean Transformation

In the previous chapters, we have seen that from Newton's three laws, we can obtain conservation laws. That means, under certain conditions (depending on the law), a specific quantity can not change.

These conservation equations are very important in physics. They tell us that no matter what happens, certain quantities will be present in the same amount: they are *conserved*. 

Conservation of energy follows the concept of work and potential energy. Conservation of momentum is a direct consequence of N2 and N3, as we will see below. And finally, under certain conditions, angular momentum is also conserved. In this chapter we will summarize them. The reason is: their importance in physics. These laws are very general and in dealing with physics questions they give guidance and very strict rules that have to be obeyed. They form the foundation of physics that can not be violated. They provide strong guidance and point at possible directions to look for when analyzing problems in physics.

## Conservation of Momentum

Consider two particles that mutually interact, that is they exert a force on each other. For each particle we can write down N2:

$$
\left . \begin{array}{ll} \frac{d\vec{p}_1}{dt} = \vec{F}_{21} \\
         \frac{d\vec{p}_2}{dt} = \vec{F}_{12} = - \vec{F}_{21}\end{array} \right \} \rightarrow \frac{d}{dt} \left ( \vec{p}_1 + \vec{p}_2 \right ) = 0 \Rightarrow \vec{p}_1 + \vec{p}_2 = const
$$

The total (linear) momentum is conserved if only internal forces are present; "action-reaction pairs" always cancel out.<br>
This law has no exception: it must be obeyed at all times. The total momentum is constant, momentum lost by one must be gained by others.

## Conservation of Energy

As we have seen when deriving the concept of potential energy, for a system with conservative forces the total amount of kinetic and potential energy of the system is constant. We can formulate that in a short way as:

$$
\sum{E_{kin}} + \sum{V} = const
$$

Again: energy can be redistributed but it can not disappear nor be formed out of nothing.

If non-conservative forces are present, the right hand side of the equation should be replaced by the work done by these forces.

$$
 \sum{E_{kin}} + \sum{V} = \sum W
$$

In many cases this will lead to heat, a central quantity in thermodynamics and another form of energy. The "loss" of energy goes always to heat. With this 'generalization' we have a second law that must always hold. Energy can not be created nor destroyed. All it can do is change its appearance or move from one object to another.


## Conservation of Angular Momentum

Also angular momentum can be conserved. According to its governing law $\frac{d\vec{l}}{dt} = \vec{r} \times \vec{F}$ it might seem that we can for two interacting particles again invoke N3 "action = -reaction" and the terms with the forces will cancel out. But we need to be a bit more careful, as outer products are involved which are bilinear. So, let's look at the derivation of "conservation of angular momentum" for two interacting particles:

$$
\left . \begin{array}{ll} \frac{d\vec{l}_1}{dt} = \vec{r}_1 \times \vec{F}_{21} \\
         \frac{d\vec{l}_2}{dt} = \vec{r}_2 \times \vec{F}_{12} = -\vec{r}_2 \times  \vec{F}_{21}\end{array} \right \} \rightarrow \frac{d}{dt} \left ( \vec{l}_1 + \vec{l}_2 \right ) = \left ( \vec{r}_1 -\vec{r}_2 \right ) \times \vec{F}_{21}
$$

As we see, this is only zero if the vector $\vec{r}_1 -\vec{r}_2$ is parallel to the interaction forces (or zero). We called this a *central force*. Luckily, in many cases the interaction force works over the line connecting the two particles (e.g. gravity). In those cases, the angular momentum is conserved. Mathematically we can write this as:

$$
 \text{if } \vec{F}_{21}\, ||\, (\vec{r}_1 -\vec{r}_2)\ \Rightarrow \ \vec{l}_1 + \vec{l}_2  = const
$$

## Conservation of Mass

Within the world of Classical Mechanics, mass is also a conserved quantity. Whatever you do, what ever the process the total mass in the system stays the same. We can not create nor destroy mass. From more modern physics we know that this is not true. On the one hand we can destroy mass. For instance, when an electron and a positron collide, they can annihilate each other resulting in two photons, i.e. 'light particles' that do not have mass. Similarly, we can create mass out of light. This is the inverse of the annihilation: pair production. If we have a photon of at least 1.022 MeV (= 1.66 10$^{-13}$J), then -under the right conditions- an electron-positron pair can be created.

Moreover, Albert Einstein showed that mass and energy are equivalent - expressed via his famous equation $E = mc^2$. His theory of Relativity showed us that in collisions at extreme velocities mass is not conserved: it can both be created or disappear. Rephrased: it is actually part of the energy conservation, mass is in that context just a form of energy.

````{admonition} Emmy Noether, symmetries and conservation laws 

We discussed the conservation laws as consequences of Newton's Laws. That in itself is ok. However, there is a deeper understanding of nature that leads to these conservation laws. And from the conservation laws we can go to Newton's Laws, thus 'reversing the derivations' and starting from this new, different way of looking at nature. 

What is it and how do we know? To answer this question we have to resort to Emmy Noether, a German mathematician. Noether made top contributions to abstract algebra. She proved, what we now call, Noether's first and second theorems, which are fundamental in mathematical physics. Noether is often named as one of the best if not the best female mathematicians ever lived. Her work on differential invariants in the calculus of variations has been called "one of the most important mathematical theorems ever proved in guiding the development of modern physics".


```{figure} images/EmmyNoether.png
:name: fig:EmmyNoether.png
:width: 320px
:align: center
 
Amalie Emmy Noether (1882-1935). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Noether.jpg), public domain.
```

Noether shows, that if a dynamic system is invariant under a certain transformation, that is it has a symmetry, then there is a corresponding quantity that is conserved. Ok, pretty abstract. What does it mean, any examples? Yes! Here is one.

In physics we believe that it does not matter if we do an experiment now and repeated it exactly under the same conditions an hour later, the outcome will be the same. Or rephrased: if we translate it in time, the outcome is the same; the laws of physics are invariant. This is in mathematical terms a symmetry, a symmetry with respect to time. Noether's theorem then shows, that there is a conserved quantity and this quantity is energy. Hence, based on the idea that time itself has no effect on physical laws, we immediately arrive at conservation of energy.

Second example: we also believe that place or position in the universe doesn't matter. The physicals laws are not only always the same (time invariance), they are also the same everywhere (space invariance). From this symmetry, via Noether's work, we immediately get that momentum is a conserved quantity. Thus, these two invariances or symmetries -time and space - provide us directly with conservation of energy and momentum and from that we could easily derive Newton's second and third law. Much of modern physics is now build on the ideas put forward by Emmy Noether. That goes from quantum mechanics to quarks to string theory.

````


## Galilean Transformation

There is one important element of Classical Mechanics that we have to add: for which type of observer do Newton's Laws hold?
The original thought was: for inertial observers. These are observers that are at rest with respect to an inertial frame of reference. 

But this merely shifts the question to: what is an inertial frame of reference. One possible answer is: an inertial frame of reference is a frame in which Newton's Laws hold. That is: a particle on which, according to an observer in such a frame, no net force is acting will keep moving at a constant velocity.

All inertial frames of reference move at a constant velocity with respect to each other. They can not accelerated. To picture what it means, an inertial frame of reference or an inertial observer, we sometimes use the idea that such a frame or observer moves at a constant velocity with respect to the 'fixed' stars. And indeed, for a long time people believed that the stars were fixed in space. But from more modern times we do know, that this is not the case: stars are not fixed in space nor do they move at a constant velocity. 

Later in the study of Classical Mechanics, we will see, that it is possible to do without the restriction that Newton's Law strictly speaking only hold in inertial frames. But for now, we will stick to inertial frames and look at the 'communication' between two observers in two different inertial frames. 

An important requirement of any physical law is that it looks the same for all inertial observers. That doesn't mean that the outcome of using such a law is the same. As a trivial example, take two inertial observers S and S'. According to S, S' moves at a constant velocity, $V$, in the $x$-direction. S' observes a mass $m$ that is not moving in the frame of reference of S'. For simplicity, we will assume that each observer is in its own origin. 


```{figure} images/GTsystem.png
:name: fig:GTsystem.png
:width: 320px
:align: center
 

```

S' rightfully concludes, based on Newton's 1$^{st}$ law that no force is acting on $m$. S agrees, but doesn't conclude that $m$ is at rest. This is trival: both observers can use Netwon's second law which for this case states that $\frac{d\vec{p}}{dt} =0 \rightarrow \vec{p} = const \rightarrow \vec{v} = const$. But the constant is not the same in both frames.

To make the above loose statements more precise. We have two coordinates systems CS and CS'. The transformation between both is given by a translation of the origin of S' with respect to that of S.


### Communication Protocol
We need to have a recipe, a protocol that translates information from $S'$ to $S$ and vice versa.

This protocol is called the *Galilean Transformation* between two inertial frames, $S$ and $S'$. 

According to observer $S$, $S'$ is moving at a constant velocity $V$. Both observers have chosen their coordinate system such that $x$ and $x'$ are parallel. Moreover, at $t=t'=0$, the origins $O$ and $O'$ coincide. The picture below illustrates this.


```{figure} images/GalileiTransformation.jpg
:name: fig:GalileiTransformation.jpg
:width: 320px
:align: center
 
Two inertial observers S and S' and their coordinate systems.
```

Consider for simplicity a 2D point $P$ with coordinates $(x',y')$ and time $t'$ for  $S'$. What are the coordinates according to $S$? First of all: in classical mechanics, there is only one time, that is: $t=t'$. Until the days of Einstein this seemed self evident; we now know that nature is more complex.

For the spatial coordinates, we see immediately: $y=y'$. And for the $x$-coordinate $S$ can do the following. To go to the $x$-coordinate of $P$, first $S$ goes to the origin $O'$ of $S'$. $O'$ is a distance $Vt$ from $O$. Thus, the distance to $P$ along the $x$-axis is $Vt+x'$. If we sum the above up, we can formulate the relation between the coordinate system of the two observers. This transformation is the <b>Galilean Transformation</b>, or <b>GT</b> for short.

```{admonition} Galilean Transformation
:class: note

$$ \begin{split} 
x' &= x - Vt \\
y' &= y \\
t' &= t
\end{split} $$
```

### Velocity is relative; acceleration is absolute ###

A direct consequence of the Galilean Transformation is that velocity is observer-dependent (not surprising), but for observers in inertial frames, observed velocities differ by a constant velocity vector.

In what follows we will derive the relations between velocity and acceleration as observed by S and S'. Note that we need to be precise in our notation: $S'$ denotes quantities with a prime ('), but $S$ does not. This is obvious for the coordinates as $S$ uses $x$ whereas $S'$ will write $x'$. It is, however, also wise to use primes on the velocity: $S$ will denote the $x$-component as: $v_x = \frac{dx}{dt}$. So, $S'$ will note denote velocity by $v$, but by $v'$. Hence $S'$ will write $v'_{x'} = \frac{dx'}{dt'}$. Now, obviously, $t'=t$ so we could drop the prime on time, but it is handy to do that in the second step.

First we look at velocity. 

$$ \begin{split} 
v'_{x'} &\equiv \frac{dx'}{dt'} \Rightarrow  v'_{x'} = \frac{d(x-Vt)}{dt} = v_x - V\\
v'_{y'} &\equiv \frac{dy'}{dt'} \Rightarrow  v'_{y'} = \frac{dy}{dt} = v_y 
\end{split} $$

Thus indeed velocity is 'relative': different observers find different values, but they do have a simple protocol to convert information from the other colleague to their own frame of reference.

Secondly, we look at acceleration.

$$ \begin{split} 
a'_{x'} &\equiv \frac{dv'_{x'}}{dt'} \Rightarrow  a'_{x'} = \frac{d(v_x-V)}{dt} = a_x\\
a'_{y'} &\equiv \frac{dv'_{y'}}{dt'} \Rightarrow  a'_{y'} = \frac{dv_y}{dt} = a_y 
\end{split}
$$

So, we conclude: acceleration is the same for both observers. 

Consequently, N2 holds in both inertial systems if we postulate that $m' = m$. In other words: mass is an object property that does not depend on the observer.

Thus, two observers, each with its own inertial frame of reference, will both *see the same forces*: $F = ma = m'a' = F'$.

This finding is stated as: Newton's second law is *invariant* under Galilean Transformation. Invariant means that the form of the equation does not change if you apply the Galilean coordinate transformation. Later we will expand this to [Lorentz invariant](lorentz.md) transformation in the context of special relativity. The concepts of invariance is very important in physics as hereby we can formulate laws that are the same for everybody (loosely speaking).

## Worked Example

In class you have seen the *Superballs* example. You can watch it <a href="https://www.youtube.com/watch?v=2UHS883_P60">here</a> again. The explanation is not really correct there, we will reason the observations here.

If you let a <span style="color:green">smaller</span> and a <span style="color:blue">larger</span> ball drop together, stacked on top of each other, the smaller ball will bounce back much stronger (higher) than if you let the small ball fall without stacking it on the lager ball. How can that happen?


```{figure} images/superballs.png
:name: fig:superballs.png
:width: 450px
:align: center
 
Bouncing balls.
```

To explain this we use the Galilean Transformation (GT).

* Situation 1). Both balls are falling with velocity $\vec{v}$ towards the ground.
* Situation 2a). The larger ball just hit the ground. As the mass of the ground is much larger than that of the large ball, it is (elastically) reflected, i.e. the direction of the velocity is reversed but the magnitude stays the same. The small ball is still moving downwards with $\vec{v}$.
* Situation 2b). We apply a GT of the observer (yellow star) from the ground to an observer moving with the larger ball. The observer moving with the larger ball sees the smaller ball moving with $2\vec{v}$ towards it.
* Situation 3a). The smaller ball hits the larger ball and is reflected due to its smaller mass. In the frame of the observer on the larger ball, the smaller ball now moves with $2\vec{v}$ away from it.
* Situation 3b).  We apply a GT of the observer (yellow star) from the larger ball  back to an observer on the ground. For the observer on the ground the larger ball has velocity $\vec{v}$ upwards from 2a), therefore the smaller ball has velocity $3\vec{v}$ upwards.

The smaller ball has now velocity $3\vec{v}$ instead of $\vec{v}$ if you drop it without the larger ball. NB: If you would use three balls instead of two, the third ball would have a velocity of $7\vec{v}$ using the same reasoning as above. 

```{figure} images/Superball_animation.gif
:name: fig:Superball_animation.gif
:width: 450px
:align: center
 
Bouncing of three (super)balls.
```

How much higher does the smaller ball fly with velocity $3\vec{v}$ compared to $\vec{v}$?

<b>Answer</b>
<br>We equate the kinetic energy when the ball is just reflected with the potential energy when the ball reached it maximal height before falling back.

$$ \frac{1}{2}mv^2 = mgh \Rightarrow h = \frac{v^2}{2g} $$
	
Therefore the ball with $3v$ flies 9 times higher.
	
We equate the kinetic energy when the ball is just reflected with the potential energy when the ball reached it maximal height before falling back.
	
$$ \frac{1}{2}mv^2 = mgh \Rightarrow h = \frac{v^2}{2g} $$
	
Therefore the ball with $3v$ flies 9 times higher.

<b>What is very fishy about this whole outcome?</b><br>
In situation 1) the kinetic energy is $\frac{1}{2}m_s v^2 + \frac{1}{2}m_\ell v^2$, but in situation 3b) it is $\frac{1}{2}m_s (3v)^2 + \frac{1}{2}m_\ell v^2$ while the potential energy is zero in both cases. This clearly does not add up! But energy must be conserved under all circumstances!

The conclusion is, that we did make an approximation and did not solve the energy and momentum conservation equations for elastic collisions. Even for the case $M \gg m$ there is some momentum transfer. If you solve for the velocity of $m$ after the collision with $M$, you obtain 

$$ v' = \frac{\frac{m}{M}-1}{\frac{m}{M}+1} v $$

For $M \gg m$ you indeed see $v'=-v$. Thus the smaller ball will have a smaller velocity than reasoned above *and* the larger ball with also have a smaller velocity (in the experiment you can clearly notice that it does not fly as high as when it drops without the small ball on top). In real life, the balls also deform which makes the collision inelastic.

## Examples
````{example} 8.1

Consider yourself biking at a constant velocity on an unlikely day with zero wind. Still, you experience a frictional force from the air, with the following observation: the faster you bike, the larger this force. An experimentalist is trying to measure the friction force of the air and relate it to your velocity. She finds that, by and large, these forces turn out to scale with the square of your velocity $v_b$

$$ F_f \propto v_b^2 $$

```{figure} images/Fietser.jpg
:name: fig:Fietser.jpg
:width: 300px
:align: center
 
Air resistance on cyclist.
```   

Understanding the Galilean transformation, you immediately see that this can't be correct. In your frame of reference, your velocity is zero. And thus, the friction force would be zero. But that cannot be true: both observers should see the same forces. What you see is that the air is blowing at a speed $v_{air}−v_b$ past you. And indeed, the faster you bike, according to the experimentalist, the faster you see the air moving past you: velocity is relative.

You quickly realize that a proper description of the air friction must depend on the relative velocity between you and the air. *Relative* velocities are invariant under Galilean transformation:

$$ F_f \propto (v_b - v_{air} )^2 $$
````

````{example} 8.2

Riding a bike while it rains. You have done this 100s of times. Your front gets soaked, while the backside of your coat stays dry. Or if you have a passenger on your carrier he/she will not get wet, while you take all the water. From a GT to the reference frame of the biker it is obvious  why this is the case. The rain is not falling straight from the sky, but at an angle towards him. 

```{figure} images/RainBike.png
:name: fig:RainBike.png
:width: 400px
:align: center
 
Riding a bike in the rain.
```   

NB: For Dutch bikers you have had this experiences with head wind and rain all your life.
````

## Demo

A ball is bouncing at a wall. The mass of the wall is much greater than that of the ball. So, acceleration of the wall or changes in momentum of the wall can be ignored. 

On the left side, we see this from the perspective of an observer, S, standing next to the wall. The right side shows what observer S', who is traveling with the ball as it moves towards the wall, sees.
Notice, that both S and S' are inertial observers. That is, they keep their velocity and are no part of the collision.
What would Galilei say?

```{figure} images/BallAgainstWall_animation.gif
:name: fig:BallAgainstWall_animation.gif
:width: 400px
:align: center
 
Ball bouncing at a wall.
```  

