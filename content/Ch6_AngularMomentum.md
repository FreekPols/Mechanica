# Angular Momentum, Torque & Central Forces 

## Torque & Angular Momentum
From experience we know that if we want to unscrew a bottle, lift a heavy object on one side, try to unscrew a screw, we better use 'leverage'.


```{figure} images/Leverage.png
:name: fig:Leverage.png
:width: 300px
:align: center

Lifting is easier using leverage.
```

With a relatively small force $F_S$, we can lift the side of a heavy object. The key concept to use here is torque, which in words is loosely formulated: apply the force using a long arm and the force seems to be magnified. The torque is then force multiplied by arm: $\Gamma = F \times arm$ 

This is, of course, too sloppy for physicists. We need strict, formal definitions. So, we put the above into a mathematical definition.


```{admonition} torque

$$\vec{\Gamma} \equiv \vec{r} \times \vec{F}$$
```

That is: torque (or krachtmoment in Dutch) is the outer product of 'arm' as a vector(!) and the force. We notice a few peculiarities.
1. like force, torque is a vector. That is: it has a magnitude and a direction. In principle: three components.
1. its direction is perpendicular to the force vector $\vec{F}$ *and* perpendicular to the arm $\vec{r}$.
1. the arm is not a number: it is a vector!

We further know from experience that we can balance torques, like we can balance forces. Rephrased: the net effect of more than one force is found by adding all the forces (as vectors!) and using the net force in Newtons second law: $m\vec{a} = \sum \vec{F}_i = \vec{F}_{net}$. From Newtons first law, we immediately infer: if $\sum \vec{F}_i = \vec{F}_{net}=0$ then the object moves at constant velocity. We can move with the object at this speed and conclude that it from this perspective has zero velocity: it doesn't move, i.e. it is in equilibrium.

The same hols for torque: we can work with the sum of all torques that act on an object: $\sum \vec{\Gamma}_i = \vec{\Gamma}_{net}$. And if this sum is zero, the object is in equilibrium.

However, there is a catch: using torques requires that we are much more explicit and precise about the choice of our origin. Why? The reason is in the 'arm'. That is only defined if we provide an origin. 


### The seesaw and torque ###
Let's consider a simple example (simple in the sense that we are all familiar with it): the seesaw.


```{figure} images/SeeSaw1.png
:name: fig:SeeSaw1.png
:width: 200px
:align: center

Some caption
```

It is obvious that the adult -seesawing with the child- should sit much closer to the pivot point than the child. That is: we assume that the mass of the adult is greater than that of the child.

Let's turn this picture in on that has the essence and some of the physics quantities we need and draw a free body diagram.


```{figure} images/SeeSaw2.png
:name: fig:SeeSaw2.png
:width: 300px
:align: center

Some caption
```

What did we **draw**?  
1) the force of gravity acting on the two masses $M$ and $m$. That is obvious: without forces nothing will happen and there is nothing to be analyzed.  
2) the 'reaction forces' from the seesaw on both masses. Why? If the seesaw is in equilibrium, then each of the masses is in equilibrium and the sum of forces on each mass must be zero.  
3) the distance of each of the masses to the pivot point. Why? Leverage! The heavy $M$ must be closer to the pivot point the get equilibrium.  
4) an origin $O$. Why? We need a point to measure the 'arm', 'leverage', from.   
5) the $z$-coordinate. Why? We deal with forces in the vertical direction. Hence a coordinate, a direction that we all use, is handy.

**Analysis**  
Time for a first analysis: what keeps this seesaw in equilibrium?  
1) The sum of forces on each of the masses is zero. As gravity pulls them down, the seesaw must exert a force of the same magnitude but in the opposite direction. These are the green forces.
2) With this idea we have the masses in equilibrium, but not necessarily the seesaw. Why? We did not consider forces on the seesaw. Which are these: (a) the reaction force (i.e. the N3 pair) of the green force from the seesaw on mass $M$. We did not draw that! Similarly, for the mass $m$.  
3) Now that we focus on the seesaw itself: this is in equilibrium (that is given), but there are two forces acting on it in the negative $z$-direction as we found in (2). Even if we consider the mass of the seesaw: that will not help, gravity will pull it downwards. What did we forget? The force at the pivot point, of course! The pivot will exert an upward force, preventing the seesaw from falling down. For simplicity, we assume that the seesaw has zero mass. Thus, there are three forces acting on it: $-Mg$, $-mg$, $F_p$ with $F_p - Mg - mg = 0$.

Let's redraw, now concentrating on the forces on the seesaw.

```{figure} images/SeeSaw3.png
:name: fig:SeeSaw3.png
:width: 300px
:align: center

Some caption
```

**Analysis part 2**  
We know that the seesaw is in equilibrium, thus
$$F_p - Mg - mg = 0$$

This guarantees that the seesaw does not change its velocity, and as it does not move at some time $t_0$, it doesn't move for all $t>t_0$.

But this doesn't guarantee that the seesaw doesn't rotate around the pivot point. For that we need that the 'leverages' on the left and right side 'perform' the same.  
Making this precise: the torques exerted on the seesaw must also equate to zero.  
We have 3 forces, thus 3 torques: $-Mg$ with arm $L$, $-mg$ with arm $l$ and $F_p$ with arm zero.

Now we need to be even more precise: torque is a vector and it is made as an outer product of the vector 'arm' and the force.   
We have already drawn an $x$-coordinate in the figure, that will allow us to write the 'arm' as a vector. After all, we need to evaluate the outer product $\vec{r} \times \vec{F}$. We do that for the three forces, starting on the left:

$$\vec{\Gamma}_1 = -L\hat{x} \times (-Mg)\hat{z} = MLg \, \hat{x} \times \hat{z} = MLg \left ( -\hat{y} \right ) = -MLg \, \hat{y}$$

We have used here, that the outer product of $\hat{x}$ with $\hat{z}$ is equal to $-\hat{y}$ with $\hat{y}$ the unit vector in the $y$-direction pointing into the screen.

Similarly for the force coming from the small mass $m$ on the right side:

$$\vec{\Gamma}_2 = l\hat{x} \times (-mg)\hat{z} = -mlg \, \hat{x} \times \hat{z} = mlg \, \hat{y}$$

Finally, the torque from the force exerted by the pivot point:

$$\vec{\Gamma}_3 = 0\hat{x} \times F_p\hat{z} = 0$$

Next, we evaluate the total torque:

$$ \vec{\Gamma}_1 + \vec{\Gamma}_2 +\vec{\Gamma}_3 = ( mlg - MLg )\hat{y}$$

In order for the seesaw not to start rotating, we must have that the torque is zero and thus:

$$ \sum \vec{\Gamma}_i = 0 \Rightarrow mlg = MLg \rightarrow \frac{m}{M} = \frac{L}{l}$$

A result we expected: the greater mass should be closer to the pivot point.

### Different origin
So far, so good. But what if we had chosen the origin not at the pivot point, but somewhere to the left? Then all 'arm' will change length. And all torques will be different. Wouldn't that make $\sum \vec{\Gamma}_i \neq 0$?  
No, it wouldn't! Let's just do it and recalculate. In the figure below, we have moved the origin to the left end of the seesaw. The distance from the heavy mass to the origin is $\Lambda$ (green arrow).

```{figure} images/SeeSaw4.png
:name: fig:SeeSaw4.png
:width: 300px
:align: center

Some caption
```

We still have that the sum of forces is zero. But what about the sum of torques? Obviously, the choice of the origin can not affect the seesaw: it is still in balance, regardless of our choice of the origin. Let's see if that is correct:

$$\sum \vec{\Gamma}_i = \Lambda \hat{x} \times -Mg\hat{z} + \left ( \Lambda + L \right ) \times F_p\hat{z} + \left ( \Lambda + L + l \right )\hat{x} \times -mg\hat{z} $$

We have drawn the three unit vectors $\hat{x}, \hat{y}, \hat{z}$ in the figure. We will use again: $\hat{x} \times \hat{z} = -\hat{y}$. This simplifies the torque equation above to:

$$\sum \vec{\Gamma}_i = \left [ Mg\Lambda - (\Lambda + L ) F_p + mg( \Lambda + L + l ) \right ]\hat{y} $$

This is clearly more complicated than the expression we had with the first choice of the origin. Moreover, the force from the pivot point shows up in our expression.

Luckily, we have equilibrium. Hence: $F_p - Mg - mg = 0 \Rightarrow F_p = Mg + mg$. We substitute this into our torque equation:

$$ \begin{split}
\sum \vec{\Gamma}_i &= \left [ Mg\Lambda - (\Lambda + L ) (Mg + mg)) + mg( \Lambda + L + l ) \right ] \hat{y} \\
&= \left [ Mg(\Lambda - (\Lambda + L ))  + mg( - (\Lambda + L ) + \Lambda + L + l ) \right ]\hat{y}\\
&= \left [ -MgL  + mgl \right ]\hat{y}
\end{split}$$

Which is exactly the same expression as we found before. So, indeed, the choice of the origin doesn't matter.

<b style="color:blue; font-size:large">Conclusion  

<font size="4">
For equilibrium we need that the sum of torques is zero: 

$$\sum_i \vec{\Gamma}_i = 0$$

</font>

**

## Angular Momentum

From our seesaw example we learn: the seesaw can only be in equilibrium if the sum of torques is zero. What if this sum is non-zero? That is, a net torque operates on the seesaw.

We know that the seesaw will rotate and in order to balance it, we have to shift at least one of the masses. 

In which direction will it rotate? 

Before answering: first we need to think about <b style="color:blue"> *direction of rotation***. Does it have direction and if so: how do we make clear what that is?

Again the seesaw will give guidance. Suppose we remove the smaller mass all together. Then, it is obvious: the 'heavy' left side will rotate to the ground and the light right side upwards. From the point of view we are standing: the seesaw will rotate counter clockwise. 

We will use the corkscrew rule or right hand rule to give that a direction: rotate a corkscrew clockwise and the screw will move into the cork away from you; rotate a corkscrew counter clockwise and it will move out of the cork, towards you. Of course, in stead of a corkscrew you can think of a screwdriver or a water tap: closing is rotating 'clock wise, opening the tap is counter clockwise. 

```{figure} images/RotatingDirection.png
:name: fig:SeeSaw4.png
:width: 100px
:align: center

The rotation is given by the black arrow. You can find it by using the corkscrew rule: rotating a corkscrew as the blue arrow indicates gives that the screw moves forward like the black arrow.
```

With this, we can define the direction of rotation better than via clock or counter clock wise. In our seesaw example, we will say: if the seesaw rotates clockwise, its rotation is described by a vector that points in the positive $y$-direction as given in the figure, that is pointing into the paper (or screen).

Now, we can couple this to the direction of the torque. We saw -taking the origin at the pivot point- two torques acting on the seesaw. The large mass has its torque pointing in the negative $y$-direction: it points iout of the screen/paper. And this torque tries to rotate the seesaw counter clockwise. On the other hand, the small mass has a torque pointing in the positive $y$-direction which is in line with it trying to rotate the seesaw clockwise.    
Which of the two is 'strongest' determines the direction of rotation: if $MgL > mgl$ then the net torque is in the minus-$y$ direction. That is, the torque of the larger mass is more negative than the smaller one is positive: $-MgL + mgl <0 $ and the net torque points towards us.

The quantity that goes with this, is the angular momentum. It is defined as 

<b style="color:blue; font-size:large">**
```{admonition} <b style="color:blue; font-size:large">angular momentum**

<font size="4">

$$\vec{l} \equiv \vec{r} \times \vec{p}$$
</font>
**
```

Note that it is a cross product as well. Hence it is a vector itself. Further note that $\vec{r} \times \vec{p} \neq \vec{p} \times \vec{r}$. The order matters! First $\vec{r}$ then $\vec{p}$. If you do it the other way around, you unwillingly have introduced a minus sign that should not be there.  
Furthermore, note that since $\vec{l} \equiv \vec{r} \times \vec{p}$, $\vec{l}$ is perpendicular to the plane formed by $\vec{r}$ and $\vec{p}$.

```{figure} images/AngularMomentum.jpg
:name: fig:AngularMomentum.jpg
:width: 250px
:align: center

Angular momentum of a particle at a certain position with momentum.
```


### Torque & Analogy to N2

Angular momentum obeys a variation of Newton's second law that ties it directly to torque.

$$
\vec{l} = \vec{r} \times \vec{p} \Rightarrow 
$$

$$
\frac{d \vec{l}}{dt} = \frac{d (\vec{r} \times \vec{p} )}{dt}
=  \underbrace{\underbrace{\frac{d \vec{r}}{dt}}_{=\vec{v}} \times \vec{p} }_{=0 \text{ since } \vec{v} // \vec{p}}+ \vec{r} \times \underbrace{\frac{d\vec{p}}{dt}}_{\text{ N2: }= \vec{F} } 
=  \vec{r} \times \vec{F}
$$

Thus, we find a general law for the angular momentum:

<b style="color:blue; font-size:large">**
```{admonition} <b style="color:blue; font-size:large">N2 for angular momentum**

<font size="4">

$$\frac{d \vec{l}}{dt} = \vec{r} \times \vec{F}$$
</font>
**
```

Again, note that the right hand side is a cross product, so the order does matter.

With the torque denoted by $\vec{\Gamma}$, we have

$$
\vec{\Gamma}\equiv \vec{r} \times \vec{F}
$$ 

then we can write down an equation similar to N2 $(\dot{\vec{p}}=\vec{F})$ but now for angular motion

$$
\dot{\vec{l}}=\vec{\Gamma}
$$

where the force is replaced by the torque and the linear momentum by the angular momentum.

NB: Note that the torque and angular moment change if we choose a different origin as this changes the value of $\vec{r}$.

````{note} Intermezzo: cross product

Here is some recap for the cross product. See also the [wiki](https://en.wikipedia.org/wiki/Cross_product) page.
A cross product of two vectors $\vec{a}$ and $\vec{b}$ is defined as

$$
\vec{c} = \vec{a} \times \vec{b} \equiv \| a \| \|b\| \sin\theta \, \hat{n}
$$

Here $\theta$ is the angle between $\vec{a}$ and $\vec{b}$, and $\hat{n}$ is a unit vector normal to the plane spanned by $\vec{a},\vec{b}$ with direction given by the *right-hand rule*. 

```{figure} images/Right_hand_rule.png
:name: fig:Right_hand_rule.png
:width: 250px
:align: center

Right hand rule for cross products. Adapted from [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Magnetic_field_element_%28Biot-Savart_Law%29_PRIME.svg), licensed under CC-BY-SA 4.0.
```


From the definition it is clear that $\| \vec{a}\times\vec{b}\|$ is the area of the parallelogram spanned by $\vec{a},\vec{b}$.


```{figure} images/area_cross.png
:name: fig:area_cross.png
:width: 250px
:align: center

Area of cross products. From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Cross_product_parallelogram.svg), public domain.
```

The cross product is bilinear, anti commutative $(\vec{a}\times\vec{b} = -(\vec{b}\times\vec{a}))$ and distributive over addition. 

The formula is for computation in an orthonormal basis is

$$
\left ( \begin{array}{c}a_1\\ a_2\\ a_3 \end{array}\right ) \times 
\left ( \begin{array}{c}b_1\\ b_2\\ b_3 \end{array}\right ) 
= \left ( \begin{array}{c}a_2b_3 - a_3b_2 \\ 
- (a_1b_3-a_3b_1) \\ a_1b_2-a_2b_1 \end{array}\right )
$$

How to *remember* this rule for the cross product in Cartesian or polar coordinates see [here](potential_energy#worked-example).
*****ik kan deze file niet vinden ****

The formula can be derived from the cross product for orthonormal basis vectors, e.g. $\hat{x},\hat{y},\hat{z}$

$$
\begin{array}{rcl}
\hat{x} \times \hat{y} &=& \hat {z}\\
\hat{y} \times \hat{z} &=& \hat {x}\\
\hat{z} \times \hat{x} &=& \hat {y}
\end{array}
$$

Notice the cyclic structure of the equations.

````

It is a common mistake to identify angular momentum with rotational motion. That is not correct. A particle that travels in a straight line will, in general, also have a non-zero angular momentum. See {numref}`fig:AngularMomentumFreeParticle.jpg`. Here we look at a free particle: there are no forces working on it. So it travels in a straight line, with constant momentum. 

```{figure} images/AngularMomentumFreeParticle.jpg
:name: fig:AngularMomentumFreeParticle.jpg
:width: 250px
:align: center

Angular momentum of a free particle.
```

However, the particle position does change over time. So: is its angular momentum constant or not?   
That is easy to find out. We could take 'N2' for angular momentum:

$$
\frac{d \vec{l}}{dt} = \vec{r} \times \underbrace{\vec{F}}_{\substack{=0 \\ \text{ free particle} }} = 0 \Rightarrow \vec{l} = \text{const}
$$

Clearly, the angular momentum of a free particle is constant. Moreover, the momentum of a free particle is also constant. But what about the position vector: isn't that changing over time and eventually becomes very, very long? Why does that not change $\vec{r} \times \vec{p}$?     
Take a look at {numref}`fig:ConstantAngularMomentum.jpg`. We have chosen the $xy$-plane such that both $\vec{r}$ and $\vec{p}$ are in it. Furthermore, we have taken it such that $\vec{p}$ is parallel to the $x$-axis.

```{figure} images/ConstantAngularMomentum.jpg
:name: fig:ConstantAngularMomentum.jpg
:width: 250px
:align: center

Angular momentum of a free particle is constant.
```

At some point in time, the particle is at position $\vec{r}_1$. Its angular momentum is perpendicular to the $xy$-plane and has magnitude $|| \vec{r}_1 \times \vec{p} || = r_\perp p$.
Later in time it is at position $\vec{r}_2$. Still, its angular momentum is perpendicular to the $xy$-plane and has magnitude $|| \vec{r}_2 \times \vec{p} || = r_\perp p$, indeed identical to the earlier value. This shows that indeed the angular momentum of a free particle is constant.

## Examples
````{important} Example: Throwing a basketball

As seen in class: one person throws a basketball to another via a bounce on the ground, the basketball starts to spin after hitting the ground although initially it did not.
	
```{figure} images/basketball.png
:name: fig:basketball.png
:width: 250px
:align: center

Bouncing basketball
```

When the ball hits the ground a friction force is acting on the ball. This force will apply a torque on the ball. The friction is directed opposite to the direction of motion. The arm $\vec{r}$ from the center of the ball to where the force is acting, is downwards. Using the right-hand rule we find that the torque is pointing in the plane of the screen, and thus the rotation is clockwise (forwards spin).

The forwards momentum of the ball is reduced by the action of the force. The upwards components is just flipped by the bounce on the ground. Therefore the outgoing ball is bouncing up at a steeper angle than it is was incoming.

````

````{important} Conservation of angular momentum & spinning wheel
As seen in class, we have a student sitting on a chair that can rotate (swivel chair). The student is holding a bicycle wheel in horizontal position. 

	
```{figure} images/studentwheel.png
:name: fig:studentwheel.png
:width: 200px
:align: center

Student with a rotating wheel
```

Once the student starts to spin the wheel while sitting on the chair, the student  will start to rotate in the opposite direction (with smaller angular velocity, later on we will see why their speeds are different). There is no external force on the student + wheel. Consequently, the total angular momentum mst stay constant. But the student exerts an angular momentum on the wheel, causing it to rotate. But at the same time, due to action = - reaction, the wheel exerts also a torque on the student. But in the opposite direction. Thus, to compensate the angular momentum pointing up (counter clockwise rotation), an angular momentum pointing down (clockwise rotation) of the same magnitude must occur, keeping the total angular momentum of student + wheel constant.
````


## Exercises
````{exercise} 7.1
:label: ex_71

A point particle (mass $m$) is initially located at position $P=(x_0,H,0)$. At $t = 0$, it is released from rest and falls in a force field of constant acceleration $\vec{a}=(0,-a,0)$ that acts on the mass. 
	
```{figure} images/Fallingm.png
:name: fig:Fallingm.png
:width: 150px
:align: center

some caption
```

Analyze what happens to the angular momentum of $m$.
````

```{exercise} 7.2
:label: ex_72

The same question, but now the particle has an initial velocity $\vec{v} = (v_0 ,0,0)$.
```

```{exercise} 7.3
:label: ex_73

Similar situation: can you find an example of a falling object for which the angular momentum stays constant? Ignore friction with the air. 
```

```{solution} ex_71
:class: dropdown

The particle falls under a force that points in the negaive $y$-direction. As a consequence, it will start moving vertically downwards:

$$\begin{split}
\text{x: } \hspace{1cm} &m\frac{dv_x}{dt} = 0 \rightarrow v_x = C_1 = 0\\
\text{y: } \hspace{1cm} &m\frac{dv_y}{dt} = -ma \rightarrow v_y = -a t + C_2 = -at
\end{split}$$

Thus, we find for the momentum om the particle: $\vec{p} = \left (0, -mat \right )$.

The position of $m$ follows from:

$$\begin{split}
\text{x: } \hspace{1cm} \frac{dx}{dt} &= v_x = 0 \rightarrow x(t) = C_3 = x_0 \\
\text{y: } \hspace{1cm} \frac{dy}{dt} &= v_y = -at \rightarrow y(t) = -\frac{1}{2}at^2 + C_4 = H -\frac{1}{2}at^2
\end{split}$$

We can now compute the angular momentum:

$$\begin{split}
\vec{l} &= \vec{r} \times \vec{p} \\
&=\left ( x_0 \hat{x} + (H -\frac{1}{2}at^2 ) \hat{y} \right ) \times \left ( -mat\hat{y}\right ) \\
&= -mx_0at \underbrace{\hat{x} \times \hat{y}}_{=\hat{z}} + x_0 (H -\frac{1}{2}at^2 )\underbrace{\hat{y} \times \hat{y}}_{=0} \\
&= -mx_0 a t \, \hat{z}
\end{split}$$

Thus, the angular momentum is pointing in the negative $z$-direction and increases linearly with time in magnitude.

We could have tried to find this via the variation of N2 for angular momentum. Now, we need to compute the torque on $m$ and solve $\frac{d\vec{l}}{dt} = \vec{\Gamma}$. This goes as follows:

$$\begin{split}
\vec{\Gamma} &= \vec{r} \times \vec{F} \\
&= \left ( x\hat{x} + y\hat{y}\right ) \times -ma\hat{y} \\
&= -ma\,x\hat{z}
\end{split}$$

And thus: 

$$\frac{d\vec{l}}{dt} = -ma\,x\hat{z}$$

To get any further, we need information about $x(t)$. From the $x$-component of N2 we know (see above): $x(t) = x_0$. If we plug this in, we get:

$$\frac{d\vec{l}}{dt} = -ma\,x_0 \hat{z} \rightarrow \vec{l} = -mx_0at + C_5 = -mx_0at$$

where we have used: $t=0 \rightarrow \vec{p}=0 \rightarrow \vec{l}=0 \Rightarrow C_5 = 0$

```

````{solution} ex_72
:class: dropdown

We can follow the same procedure as in exercise (6.1). But now, the outcome of the $x$-component of N2 changes.

$$\begin{split}
\text{x: } \hspace{1cm} &m\frac{dv_x}{dt} = 0 \rightarrow v_x = C_1 = v_0\\
\text{y: } \hspace{1cm} &m\frac{dv_y}{dt} = -ma \rightarrow v_y = -a t + C_2 = -at
\end{split}$$

Thus, we find for the momentum om the particle: $\vec{p} = \left (mv_0, -mat \right )$.

The position of $m$ follows from:

$$\begin{split}
\text{x: } \hspace{1cm} \frac{dx}{dt} &= v_x = v_0 \rightarrow x(t) = v_0 t + C_3 = x_0 + v_0 t\\
\text{y: } \hspace{1cm} \frac{dy}{dt} &= v_y = -at \rightarrow y(t) = -\frac{1}{2}at^2 + C_4 = H -\frac{1}{2}at^2
\end{split}$$

We can now compute the angular momentum:

$$\begin{split}
\vec{l} &= \vec{r} \times \vec{p} \\
&=\left ( (x_0 + v_0 t) \hat{x} + (H -\frac{1}{2}at^2 ) \hat{y} \right ) \times \left ( mv_0 \hat{x} - mat\hat{y}\right ) \\
&= -m(x_0 + v_0 t)at \underbrace{\hat{x} \times \hat{y}}_{=\hat{z}} + (H -\frac{1}{2}at^2 )mv_0 \underbrace{\hat{y} \times \hat{x}}_{=\hat{-z}} \\
&= -m\left ( Hv_0 + x_0 a t + \frac{1}{2}v_0 a t^2\ \right ) \hat{z}
\end{split}$$

Thus, the angular momentum still points in the negative $z$-direction but increases quadratically with time in magnitude.

	
```{figure} images/Fallingm2.png
:name: fig:Fallingm2.png
:width: 150px
:align: center

some caption
```
````

```{solution} ex_73
:class: dropdown

We can take the situation of exercise 6.1, but shift our origin such that at $t=0 \rightarrow x=0$. Now the particle will fall along the $y$-axis. It has its momentum also in the $y$-direction and consequently $\vec{l} = \vec{r} \times \vec{p} =0$ and stays zero!
```

## Central Forces

We have looked at a specific class of forces: the conservative ones. Here we will inspect a second class, that is very useful to identify: the central forces.

A force is called a central force if:

$$
\vec{F} = |\vec{F}(\vec{r})| \hat{r}
$$

In words: a force is central of it points always into the direction of the origin or exactly in the opposite direction.
The reason to identify this class is in the consequences it has for the angular momentum.

Suppose, a particle of mass $m$ is subject to a central force. Then we can immediately infer that its angular momentum is a constant:

$$
\text{if } \vec{F} = |\vec{F}(\vec{r})| \hat{r} \text{ then } \frac{d\vec{l}}{dt} = \vec{r} \times \vec{F} =  |\vec{F}(\vec{r})| \vec{r} \times \hat{r} = 0
$$

where we have use that $\vec{r}$ and $\hat{r}$ are always parallel so their cross-product is zero.

The above is rather trivial, but has a very important consequence: a particle that moves under the influence of a central force, moves with a constant angular momentum (vector!) and must move in a plane. It can not get out of that plane. Thus its motion is at maximum a 2-dimensional problem. We can always use a coordinate system, such that the motion of the particle is confined to only two of the three coordinates, e.g. we can choose our $x,y$ plane such that the particle moves in it and thus always has $z(t) = 0$.

Why is this so? Why does the fact that the angular momentum vector is a constant immediately imply that the particle motion is in a plane? The argumentation goes as follows.
Imagine a particle that moves under the influence of a central force. At some point in time it will have position $\vec{r}_0$ and momentum $\vec{p}_0$. Neither of them is zero. We will assume that $\vec{r}_0$ and $\vec{p}_0$ are not parallel (in general they will not be). Thus they define a plane. Due to the cross-product $\vec{l}_0 = \vec{r}_0 \times \vec{p}_0$ is perpendicular to this plane.  
A little time later, say $\Delta t$ later, both position and momentum will have changed. Since the force is central, the force is also in the plane defined by the initial position and momentum. Thus the change of momentum is in that plane as well: $\vec{p} (t + \Delta t) = \vec{p} (t) + \vec{F} \Delta t$. The right hand side is completely in our plane. And thus, the new momentum is also in the plane. But that means that the velocity is also in the same plane. An thus the new position $\vec{r} (t + \Delta t) = \vec{r}(t) + \frac{\vec{p}}{m} \Delta t$ must be in the same plane as well. We can repeat this argument for the next time and thus see, that both momentum and position can not get out of the plane. This is, of course, fully in agreement with the fact that $\vec{l} = const$ for a central force.

## Central forces: conservative or not?
We can further restrict our class of central forces:

$$ \text{  if  } \vec{F}(\vec{r}) = f(r) \hat{r} \text{  then F is central and conservative} $$

In the above, $|\vec{F}(\vec{r})| = f(r)$, 
that is: the magnitude of the force only depends on the distance from the origin not on the direction. Rephrased: the force is spherically symmetric. If that is the case, the force is automatically conservative and a potential does exist.   

Both the concept of central forces and potential energy play a pivotal role in understanding the motion of celestial bodies, like our earth revolving the sun. 
The planetary motion is an example of using the concept of central forces. It is, however, also an example in its own right. Using his new theory, Newton was able to prove that the motion of the earth around the sun is an ellipsoidal one. It helped changing the way we viewed the world from geo-centric to helio-centric.

### Keppler's Laws
Before we embark at the problem of the earth moving under the influence of the sun's gravity, we will go back in time a little bit. 

````{note} Intermezzo: Tycho Brahe & Johannes Kepler
note

We find ourselves back in the Late Renaissance, that is around 1550-1600 AD. In Europe, the first signs of the scientific revolution can be found. Copernicus proposed his heliocentric view of the solar system. Galilei used his telescope to study the planets and found further evidence for the heliocentric idea. In Denmark, Tycho Brahe (1546-1601) made astronomical observations with data of unprecedented precision. He did so without the telescope as the first records of telescopes date back to around 1608 AD. 

```{figure} images/BraheFam.png
:name: fig:BraheFam.png
:width: 400px
:align: center

left:Tycho Brahe (1546-1601) - right: Sophia Brahe (1559-1643). From Wikimedia Commons 
([L](https://commons.wikimedia.org/wiki/File:Tycho_Brahe.JPG), [R](https://commons.wikimedia.org/wiki/File:Sophie_Brahe_portrait.jpg)), public domain.
```

Brahe initially studied law, but developed a keen interest in astronomy. He is heavily influenced by the solar eclipse of August 21$^{st}$ in 1560. The eclipse had been predicted via the theory of celestial motion at that time. However, the prediction was off by a day. This led Brahe to the conclusion that in order to advance celestial science, many more and much better observations were needed. He devoted much of his time in achieving this. One of his best assistants was his younger sister, Sophie.

On November 11$^{th}$ 1572, Brahe observed a bright, new star in the constellation Cassiopeia (it consists of five bright stars forming a M or W). That was another event that made him decide to spend his days (or rather nights &#128522; ) gathering astronomical data. The general believe in those days was still that everything beyond the Moon was eternal, never changing. So, this new star, that all in a sudden appeared, must be closer to the earth than the Moon itself. Brahe set out to measure its daily parallax against the five stars of Cassiopeia. But he didn't observe any parallax. Consequently, the new star's position had to be farther out than the Moon and the other planets that did show daily parallax. Moreover, Brahe kept measuring for months and still found no parallax. That meant that this new star was even further out than the known planets that show no daily parallax but did so for periods of month. Brahe reached the conclusion that this new 'thing' thus could not be yet another planet, but that it was a star. Another nail to the coffin of the Aristotle view. Brahe wrote a small book about it, called De Nova Stella (published in 1573). He uses the term 'nova' for a new star. We see this back in our name for the phenomenon observed by Brahe: we call it a supernova. By now it is known that this new star, this supernova is some 8,000 light years away from us. Brahe was upset by those who denied the new findings. In his introduction of De Nova Stella he writes (given here in our modern words): "Oh, coarse characters. Oh, blind spectators of heaven". The work and the booklet made his name in Europe as a leading scientist and astronomer.

In the winter of 1577-1578 a comet, known as the "Great Comet" appeared in the skies. It was observed by many all over the globe (from the Aztecs in the America's via European researchers to the Arabic world, India all the way to Japan). Brahe made thousands of recordings, some simultaneously done in Denmark (close to Copenhagen) and Prague. That way, Brahe could establish that the comet was much beyond the Moon.

At the end of his life, Brahe moved to Prague to become the official imperial astronomer under the protection of Rudolf II, the Holy Roman Emperor. In the later part of his life, Brahe had Johannes Kepler as his assistant. 

Kepler was 6 years old when the Great Comet appeared in the sky. He recorded in his writings that his mother had taken him to a high place to look at it. At the age of nine, he witnessed a lunar eclipse in which the Moon is in the Earth shadow, darkening it and turning quite red. As a child he suffered from smallpox making his vision weak and limited ability to use his hands. This made it difficult for him to make astronomical observations. It pushed him to mathematics. But there he was confronted with the Ptolemaic and the Copernican view on planetary motion. Kepler became a math professor at the Protestant Stiftsschüle in Graz. He wrote his ideas about the universe, following the thoughts of Copernicus in a book, that was read by Tycho Brahe. This brought him into contact with Brahe. In 1600 Kepler and his family moved to Prague as a consequence of political and religious oppression. He was appointed as assistant to Brahe and worked with Brahe on a new star catalogue and planetary tables. Brahe died unexpectedly on October 24th 1601. Two days later, Kepler was appointed as his successor. 

```{figure} images/Kepler.jpg
:name: fig:Kepler.jpg
:width: 220px
:align: center

Johannes Kepler (1571-1630). From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Portrait_Confused_With_Johannes_Kepler_1610.jpg), public domain.
```

Kepler worked on a heliocentric version of the universe and in the period 1609-1619 published his first two laws. With these, he changed from trying circular orbits to other closed ones, to arrive at an elliptical one for Mars. That one was in very good agreement with the Brahe data, much better than had been achieved before. Kepler realized that the other planets might also be in elliptical orbits. In comparison with Copernicus he stated: the planetary orbits are not circles with epi-circles. Instead it are ellipses. Secondly, The sun is not at the center of the orbit, but in one of the focal points of the ellipse. Thirdly, the speed of a planet is not a constant.

Kepler's work was not immediately recognized. On the contrary, Galilei completely ignored it and many criticized Kepler for introducing physics into astronomy.

````

Kepler has formulated three laws that describe features of the orbits of the planets around the sun.
**
<ol type="1">
<li>The orbit of a planet is an ellipse with the Sun at one of the two focal points.</li>
<li>A line segment joining a planet and the Sun sweeps out equal areas during equal intervals of time (Law of Equal Areas).

 ```{figure} images/Perkenwet.png
:name: fig:Perkenwet.png
:width: 350px
:align: center

Kepler's 2nd Law of Equal Area.
```

</li>
<li>The square of a planet's orbital period is proportional to the cube of the length of the semi-major axis of its orbit.</li>
</ol>
**

<div align="center" style="font-size: 14px">

$$ \frac{T_A^2}{R_A^3} = \frac{T_B^2}{R_B^3}= const $$

</div>

It is important to realize, that Kepler came to his laws by -what we would now call- curve fitting. That is, he was looking for a generic description of the orbits of planets that would match the Brahe data. He abandoned the Copernicus idea of circles with epi-circles with the sun in the center of the orbit. Instead he arrived at ellipses with the sun out of the center, in one of the focal points of the ellipse. 

But, there was no scientific theory backing this up. It is purely 'data-fitting'. Nevertheless, it is a major step forward in the thinking about our universe and solar system. It radically changed from the idea that the universe is 'eternal', that is for ever the same and build up of circles and spheres: the mathematical objects with highest symmetry showing how perfect the creation of the universe is.

Kepler had formulated his laws by 1619 AD. It would take another 60 years before Isaac Newton showed that these laws are actually imbedded in his first principle approach: all that is needed is Newton's second law and his Gravitational Law.  

## Newton's theory and Kepler's Laws
The planets move under the influence of the gravitational force between them and the sun. We start with inspecting and classifying the force of gravity. Newton had formulated the Law of gravity: two objects of mass $m_1$ and $m_2$, respectively, exert a force on each other that is inversely proportional to the square of the distance between the two masses and is always attractive. In a mathematical equation, we can make this more precise:

$$ \vec{F}_g = - G \frac{m_1 m_2}{r_{12}^2} \hat{r}_{12} $$

In the figure below, the situation is sketched. We have chosen the origin somewhere and denote te position of the sun and the planet by $\vec{r}_1$ and $\vec{r}_2$. Gravity works along the vector $\vec{r}_{12} = \vec{r}_2 - \vec{r}_1$. The corresponding unit vector is defined as $\hat{r}_{12} = \frac{\vec{r}_{12}}{r_{12}}$. 

```{figure} images/NewtonKeplerProblem.jpg
:name: fig:NewtonKeplerProblem.jpg
:width: 250px
:align: center

The sun and a planet.
``` 

Newton realized that he could make a very good approximation. Given that the mass of the sun is much bigger than that of a planet, the acceleration of the sun due to the gravitational force of the planet on the sun is much less than the acceleration of the planet due to the sun's gravity. For this, we only need Newton's 3rd law:

$$ F_{g, sun \text{ }  on\text{ } planet} = - F_{g, planet \text{ }  on\text{ } sun} $$

Hence

$$ m_{sun} a_{sun} = -m_{planet} a_{planet} \rightarrow a_{sun} = \frac{m_{planet}}{m_{sun}} a_{planet} \ll a_{planet} $$

Newton concluded, that for all practical purposes, he could treat the sun as not moving. Next, he took the origin at the position of the sun. And from here on, we can ignore the sun and pretend that the planet feels a force given by

$$ \vec{F}(\vec{r}) = - G \frac{mM}{r^2}\hat{r} $$

with $M$ the mass of the sun and $m$ that of the planet. $r$ is now the distance from the planet to the origin and $\hat{r}$ the unit vector pointing from the origin to the planet.

**First observation** The force is central!  
** First conclusion** Then the angular momentum of the planet is conserved (is a constant during the motion of the planet) and the motion is in a plane, i.e. we deal with a 2-dimensional problem!

**Second Observation** The force is of the form $\vec{F}({\vec{r}}) = f(r) \hat{r}$  
** Second conclusion** Thus, we do know that a potential energy can be associated with it. It is a conservative force. This also implies that the mechanical energy of the planet, that is the sum of kinetic en potential energy, is a constant over time. In other words, there is no frictional force and the motion can continue forever. This seems to be inline with our observation of the universe: the time scales are so large that friction must be small.

### Constant Angular Momentum: Equal Area Law
The first clue towards the Kepler Laws comes from angular momentum. Let's consider the earth-sun system (ignoring all other planets in our solar system). As we saw above, gravity with the sun pinned in the origin, is a central force and thus

$$\frac{d\vec{l}}{dt} = \vec{r} \times \left ( -G\frac{mM}{r^2} \frac{\vec{r}}{r} \right ) = 0$$

Thus, $\vec{l} =const$ both in length and in direction. From the latter, we can infer that the motion of the earth around the sun is in a plane. Hence, we deal with a 2-dimensional problem. 

	
```{figure} images/Kepler1.png
:name: fig:Kepler1.png
:width: 250px
:align: center

Some caption
```

At some point in time, the earth is at location $\vec{r}$ (see red arrow in the figure above). It has velocity $\vec{v}$, given by the grey arrow in the figure. In a small time interval $dt$, the earth will move a little and arrive at $\vec{r} + d\vec{r}$ (the pink arrow). As the time interval is very short, we can treat the velocity as a constant and thus write: $d\vec{r} = \vec{v} dt$.

Instead of concentrating on the motion of the earth, we focus on the area traced out by the earth orbit in the interval $dt$. That is the yellow area in the figure. This area is composed of two parts: the light yellow part and a smaller, bright yellow part. The light yellow part has an area $A_1 = \frac{1}{2} height * base$ If we make $dt$ very small, the height is almost equal to $r$ and the base becomes $v_{\perp} dt$ and thus $A_1 \approx \frac{1}{2} r v_\perp dt$. For the smaller yellow triangle we have: $A_2 = \frac{1}{2} dr * base \approx \frac{1}{2} (v_{//}dt) \cdot (v_\perp dt) = \frac{1}{2}v_{//}v_\perp dt^2$.

The total area traced out by the earth orbit during $dt$ is thus in good approximation:

$$ dA = A_1 + A_2 = \frac{1}{2} \left ( r v_\perp + v_{//}v_\perp dt \right ) dt$$

We divide both sidues by $dt$ and take the limit $dt \rightarrow 0$:

$$ \frac{dA}{dt} = \frac{1}{2} r v_\perp + \frac{1}{2}v_\perp v_//dt ) \rightarrow \frac{1}{2} r v_\perp $$

In stead of $v_\perp$ we can also write $\frac{p_\perp}{m}$:

$$ \frac{dA}{dt} = \frac{1}{2m} r p_\perp $$

But $r p_\perp $ is the magnitude of $\vec{r} \times \vec{p}$. And that is the magnitude of the angular momentum: $l = || \vec{r} \times \vec{p} || = r p_\perp$!!!

We know $l$ is constant, thus we have found:

$$ \frac{dA}{dt} = \frac{1}{2m} r p_\perp = \frac{l}{2m} = constant$$

We can easily integrate this equation: 

$$ \frac{dA}{dt} = \frac{l}{2m} \rightarrow A(t) = \frac{l}{2m}t + C$$

We can set the constant $C$ to zero at some point in time $t_0$ and start counting the increase of the swept area. But we immediately infer that if we check the swept area between $t$ and $t+\Delta t$, this will be $\Delta A = \frac{l}{2m} \Delta t$ regardless of where the earth is in its orbit. In words: in equal time intervals, the earth sweeps an area that is the same for any position of the earth. We have established the Equal Area Law!


### Newton's theory and Kepler's Laws - part 2
We have:
<ol>
<li> The sun is replaced by a force field originating at the origin. This force field is a central force. 
<ul>
    <li>Thus, the angular momentum is conserved.</li>
    <li> The orbit is in a plane: we deal with a 2-dimensional problem.</li>
</ul></li>
<li> The force is conserved: a potential exists.</li>
</ol>

Based on these, we will derive Kepler's laws only using Newtonian Mechanics. This is easiest in polar coordinates $(r, \phi )$. However, in this course we do not deal with these coordinates. We will thus give a coarse overview of the steps that should be taken.

The first thing we notice, is that the constant angular momentum provides a constraint on the relation between $\vec{r}$ and $\vec{p}$. This constraint can be used to rewrite the kinetic energy $E_{kin} = \frac{1}{2} m v^2$ into $E_{kin} = \frac{1}{2}m\dot{r}^2 + \frac{l^2}{2mr^2}$. 

What does this mean? The coordinate $r$ is the distance from the sun to the earth. Its time derivative $(\dot{r} = \frac{dr}{dt} = v_r$ is the velocity of the earth away from the sun. This is called the radial component of the velocity. The figure below illustrates this.

	
```{figure} images/Vradial.png
:name: fig:Vradial.png
:width: 250px
:align: center

Some caption
```

It is important to realize that $\dot{r}$ tells us if we are moving such that we are getting closer to the sun or further away. But it does not tells us how we move 'around' the sun. For that we need the information of the component of the velocity perpendicular toe $\vec{r}$ (the other grey vector in the figure).

So, it seems that we are working with incomplete information. And in a sense we do. But it will turn out to be very useful to understand the physics of the earth's orbit. 

We already saw that in this case gravity is a conservative force. The potential energy is found by solving $V(r) = -\int_{r_{ref}}^r \vec{F}_g \cdot d\vec{r} $. We can plug in $\vec{F}_g = - G \frac{mM}{r^2} \hat{r}$. Thus only the radial coordinate is of importance in the inner product in the integral. Furthermore, we will use as reference boundary: $\infty$. Thus, the potential energy is:

$$ \begin{split}
V(r) &= -\int_{r_{ref}}^r \vec{F}_g \cdot d\vec{r} \\
&= GmM \int_\infty^r \frac{dr}{r^2} \\
& = -G\frac{mM}{r} 
\end{split} $$

Thus, energy conservation can be written as:

$$ \frac{1}{2} m (v_x^2 + v_y^2) - -G\frac{mM}{r} = E_0 = const $$

As expected: we have an equation with two unknowns $(x(t), y(t))$. Once we solved the problem, we will thus have the coordinates of the planet's trajectory as a function of time. However, we will not do that. Reason: it is complicated and we don't need it! What we need is to find what kind of figure the trajectory is. 

Our first step is to bring the number of unknowns in the energy equation down from two to one. For that, we use $E_{kin} = \frac{1}{2}m\dot{r}^2 + \frac{l^2}{2mr^2}$. 

$$ \frac{1}{2} \dot{r}^2 + \frac{l^2}{2mr^2} - -G\frac{mM}{r} = E_0 = const $$

Now we have an equation with only one unknown $r(t)$.

We can interpret this in a different way: the second term, with the angular momentum, originates from kinetic energy, but now looks like a potential energy. And that is exactly what we are going to do: treat it as a potential energy. 

Hence, we can first inspect the global features of our energy equation. Notice that the gravity potential energy is an increasing function of the distance from the planet to the sun (located and fixed in the origin). This shows that the underlying force attractive is. The new part, coming from angular momentum, on the other hand is a decreasing function of distance. Thus, the related force is repelling. 

We can make a drawing of the energy. See {numref}`fig:KeplerEnergy.png`.

```{figure} images/KeplerEnergy.png
:name: fig:KeplerEnergy.png
:width: 450px
:align: center

Potential energy of a planet.
``` 

The blue line is the potential energy of gravity. The red one stems from the kinetic energy associated with the angular velocity. The black line is the sum of the two, a kind of effective potential:

$$ U_{eff} = \frac{l^2}{2mr^2} - -G\frac{mM}{r} $$

We see, that the energy can not be just any value: the kinetic energy of our quasi-one-dimensional particle ($\frac{1}{2}m\dot{r}^2$) can not be negative and the total potential energy has, according to {numref}`fig:KeplerEnergy.png` a clear minimum. The total energy can not be below this minimum. On the other hand: there is no maximum.    

**Case 1: **$U_{eff} = minimal$

Suppose, we would prepare the system such that its total energy was equal to the minimum of the black line, i.e. of the total potential energy. Then, of course, via the arguments we have given above this is only possible if the kinetic energy is zero. 

$$ E_{kin} + U_{eff}(r) = U_{eff, min} \Rightarrow E_{kin} = 0 $$

This implies that $\dot{r} = 0$:

$$E_{kin} = \frac{1}{2} m \dot{r}^2 = 0 \rightarrow \dot{r} = 0 $$

At first glance, this seems strange: $\dot{r} = 0$ suggests that the earth doesn't move, it has zero velocity. That would indeed be strange: after all we are dealing here with a planet that is attracted via gravity towards the sun. How can it possible have zero velocity?

We are about to make a mistake: $\dot{r} = 0$ doesn't mean that the velocity is zero. It means that $r(t) = const$. The planet still has a velocity perpendicular to its position vector $\vec{r}$. Earlier we found: $l = mrv_\perp = const$. We now have, since 

$$
\dot{r}=0 \rightarrow r=r_0=const, l = mr_0 v_\perp =const \rightarrow v_\perp = \frac{l}{m_{r_0}}= cst 
$$ 

Thus, if a planet orbits its sun such that its (pseudo-)potential $U_{eff} = minimum$, then its orbit is a circle of radius $r_0$ that corresponds to the minimum in $U_{eff}$ and the planet has a velocity that is constant in magnitude $v = \frac{l}{mr_0}$.

**Case 2: **$U_{eff, min} < E_{tot} < 0$

Next, we consider a case where the total energy of the planet has a value between the minimum of the curve of the effective potential and 0. Call the value of the energy $E_2$.

From {numref}`fig:KeplerEnergy2.png` we see that the planet will now be confined to an area where the effective potential is either equal to or smaller than this particular value $E_2$ 

 ```{figure} images/KeplerEnergy2.png
:name: fig:KeplerEnergy2.png
:width: 550px
:align: center

Total energy between 0 and minimum of effective potential.
```

Thus, the trajectory is confined between $r=r_a$ and $r=r_b$. At both these end points, the planet will have zero radial velocity: $\dot{r}_a = \dot{r}_b = 0$. However, as before, the planet will still have angular momentum and thus still have a non-zero velocity. 
The planet will travel in the $(x,y)$-plane between $r=r_a$ and $r=r_b$. How? We don't know yet. 

N.B. Do realize, that the velocity is for this case not a constant. We already have established that it is linked to the angular momentum (which is a constant) and the distance to the origin.

Thus, if the planet is closer to $r_a$ it moves faster than close to $r_b$. But it can not escape from $r_a < r(t) < r_b$.

**Case 3: **$E_{tot} > 0$

Finally, we take the case that the total energy of the planet is positive, say a value of $E_3$ in {numref}`fig:KeplerEnergy3.png`. Now we see that the planet can approach the sun, but not closer than a distance $r=r_c$. The planet is attracted to the sun, but after reaching the closest distance $r=r_c$ it will move away and eventually reach infinity. Again note: at $r=r_c$, the planet does have a non-zero velocity.

```{figure} images/KeplerEnergy3.png
:name: fig:KeplerEnergy3.png
:width: 450px
:align: center

Total energy larger than 0.
```

### Ellipsoidal orbits
We are left with the task of showing that planets 'circle' the sun in an ellipse. From the above, we now know that this must mean that the total energy is smaller than zero: $E<0$.
We will not go over the details of the derivation, but leave that for another course.

The outcome of the analysis would be the following expression for the orbit in case of an ellipse:

$$ \frac{(x+ea)^2}{a^2} + \frac{y^2}{b^2} = 1 $$

  

```{figure} images/KeplerEllips.png
:name: fig:KeplerEllips.png
:width: 350px
:align: center

Ellips in Cartesian coordinates.
```

This is an ellipse with semi major and minor-axis $a$ and $b$, respectively. The center of the ellipse is located at $(-ea,0)$. Note that the sun is in the origin and that seen from the center of the ellipse, the origin is at one of the focal points of the ellipse. Consequently, the orbit is not symmetric as viewed from the sun. We notice this on earth: the summer and winter (when the sun is closest respectively furthest from the sun) are not symmetric, even if we take the tilted axis of the earth into account.

The half and short long axis are given by:

$$a = \frac{\alpha}{1-e^2} = \frac{GMm}{2|E|}$$
$$b = a\alpha = \frac{l^2}{2m|E|}$$

with 

$$ e = \sqrt{1 + \frac{2El^2}{(GMm)^2m}} $$

and 

$$ \alpha \equiv \frac{l^2}{2GMm^2} $$

This type of curve is know as the conic sections. That is, they can be found by intersecting a cone with a plane. See the animation below, where a plane is at various positions and at various angles intesecting a cone.


```{figure} images/conic_sections_small.gif
:name: fig:conic_sections_small.gif
:width: 550px
:align: center

Conic sections   animation created by [Sara van der Werf](https://www.saravanderwerf.com/conics-gifs-why-gifs-are-my-new-addiction/)
``` 

Note that in the definition of $e$, the total energy of the system plays a role. This energy can be negative (see {numref}`fig:KeplerEnergy.png`). The minimum value of the effective potential energy is easily computed. It is $U_{eff, min} = -\frac{1}{2} \frac{(GmM)^2m}{l^2}$ and is realized when the planet is at a distance $r = \frac{l^2}{GMm^2}$. For this case we have $e = 0$ and the planet is moving in a circle around the sun, as we already argued above.

For $0 \leq e < 1 $ the orbit is an ellipse as Kepler already had postulated (for these values of $e$ the orbit is a closed one).

For $e=1$, the orbit is a parabola: the object will eventually move to infinity where it has exactly zero radial velocity.

Finally, for $e > 1$ the trajectory is a hyperbola with the planet again moving to infinity.


**Conclusion: according to Newton's laws of mechanics, combined with the Gravitation force proposed by Newton, planets must move in ellipses around their star.** 

This holds for our solar system, but for any other star with planets as well. Research has shown that there are hundreds of solar systems out in the universe with thousands of planets moving around their star. See e.g. https://exoplanets.nasa.gov/ 
    


### Kepler 3
We are left with proving Kepler's third law:

$$ \frac{T_A^2}{R_A^3} = \frac{T_B^2}{R_B^3}= const $$

Now that we know the orbit, this is not difficult. We concentrate on the motion during one lapse (one 'year'). From Keppler's 1$^\text{st}$ law we know that the area a planet sweeps out of its ellipse is given by

$$ A(t) = \frac{l}{2m}t + C $$

where $C$ is an integration constant. Furthermore, this way of writing makes that the area swept keeps increasing: after one round along the ellipse, we simply keep counting.

However, we can easily back out what happens after exactly one round, or one 'year'. The total area swept is then, of course, the area of the ellipse itself, that is: in one year (time $T$) the area swept is $\pi a b$. Hence we conclude:

$$ A(T) = \pi a b \Rightarrow \pi ab = \frac{l}{2m}T $$

If we put back what we found for $a$ and $b$, we get

$$ \frac{T^2}{a^3} = \frac{4\pi^2}{GM}$$

Thus, indeed Kepler was right. Moreover, we note that the constant is only depending on the mass of the sun. The same law will hold for other solar systems, but with a different constant.

In {numref}`fig:FigureKepler3.png` Kepler's third law is shown for our solar system. The red data points are based on the measured 'year' of each planet and the distance to the sun. The blue line is the prediction from Newton's theory.

```{figure} images/FigureKepler3.png
:name: fig:FigureKepler3.png
:width: 450px
:align: center

Kepler 3 for our solar system.
```


````{note} Haley's comet 
The planets aren't the only objects that move around the sun. Several icy, rocky smaller objects are trapped in a closed orbit around the sun. These objects, comets from the Greek word for 'long-haired star', are left-overs from when our solar system was formed, some  4.6 billion years ago. There are many comets in our solar system. More than 4500 have been identified, but there are probably much more. Usually the orbit of a comet, if its is a closed one, has a high eccentricity (i.e. close to 1). Moreover, their orbital period may be very long.

One of the best visible comets is Haley's comet. However, its orbital period is about 75 years. It last appeared in the inner parts of the Solar System in 1986. So, you will have to wait until mid-2061 to see it again.


```{figure} images/Halley's_Comet_animation.gif

:name: fig:Halley's_Comet_animation.gif
:width: 400px
:align: center

Trajectory of Haley's comet. From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Halley%27s_Comet_animation.gif), licensed under CC-BY 4.0.
```

````


## Speed of the planets & dark matter

Starting from Kepler 3, we can compute the orbital speed of a planet around the sun


$$ \begin{split}
T^2 &= \frac{4\pi^2}{GM}a^3\\
\omega^2 &= \frac{GM}{a^3}, \quad T=\frac{2\pi}{\omega}, \omega=\frac{v}{r},  a \approx r \\
\Rightarrow v &= \sqrt{\frac{GM}{r}}
\end{split} $$

Indeed if we measure the speed of the planets in the solar system this prediction holds, the velocity drops with the distance from the sun as $\propto r^{-1/2}$ (see figure). As $M$ we use the mass of the sun here.

```{figure} images/orbitalspeed.jpg
:name: fig:orbitalspeed.png
:width: 450px
:align: center

From [LibreTexts Physics](https://phys.libretexts.org/Bookshelves/Astronomy__Cosmology/Big_Ideas_in_Cosmology_%28Coble_et_al.%29/08%3A_Dark_Matter/8.02%3A_Velocities_Mass_and_Gravity-_the_Solar_System), licensed under CC BY-NC-SA 4.0.
```

The distance is measured in [Astronomical Units [AU]](https://en.wikipedia.org/wiki/Astronomical_unit), the distance from the earth to the sun (about 8.3 light minutes). Note that the earth is moving with an unbelievable 30 km/s, that is $10^5$ km/h! Do you notice any of that? We will use this motion later with the Michelson-Morley experiment.

If we plot the same speed versus distance curve not for the planets in our solar system, but for stars orbiting the center of our galaxy, the milky way, then the picture looks very different. The far away stars orbit at a much higher speed than expected and the form of the found curve does not match $\propto r^{-1/2}$. 

```{figure} images/orbitmilkyway.png
:name: fig:orbitmilkyway.png
:width: 450px
:align: center

From [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Rotation_curve_of_the_Milky_Way.png), licensed under CC-SA 3.0.
```

This mismatch is not understood to this day! The mass $M$ here is calculated from the visible stars and the supermassive black holes at the center of the galaxy. But even if the mass is calculated wrongly, the shape of the dependency does not match. It turns out, this mismatch is observed in all galaxies! Apparently the law of gravity does not hold for large distances *or* there must be extra mass that increases the speed that we do not see. This mismatch has lead to the postulation of <a href="https://en.wikipedia.org/wiki/Dark_matter"><em>dark matter</em></a> and an <a href="https://en.wikipedia.org/wiki/Alternatives_to_general_relativity"><em>alternative formulation</em></a> for the laws of gravity. This is the most disturbing problem in physics today; second is probably the interpretation of [measurement](https://en.wikipedia.org/wiki/Measurement_in_quantum_mechanics) in quantum mechanics (collapse of the wave function/Kopenhagen interpretation of Quantum Mechanics; multiverse theories). 

The majority of all matter in the universe is believed to be *dark*. And we have no clue what it could be! Most scientist even think it must be [non-baryonic](https://en.wikipedia.org/wiki/Baryon), that is, other stuff than our well-known protons or neutrons. It remains most confusing.

The usual distance unit for distances in astronomy outside the solar system is not light years (ly), but [parsec](https://en.wikipedia.org/wiki/Parsec) [pc], or kpc, or Mpc. One parsec is about 3.3 ly (or $10^{13}$ km). Note: stars visible to the eye are typically not more than a few hundred parsec away. The milkyway is perfectly visible to the naked eye as a band/stripe of "milk" sprayed over the night sky. But you cannot see it anywhere close to Delft, there is much too much light from cities and greenhouses. Go to Scandinavia in the winter ("wintergatan") or any place remote where there are few people. The reason you see a "band" in the night sky, is that the milky way is a spiral galaxy, sort of pancake shaped, and you see the band in the direction of the pancake. 

