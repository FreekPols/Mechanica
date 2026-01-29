---
numbering:
  title:
    offset: 0
---

# 4-Momentum \& E=mc²
    
## Proper time
We have seen that in Special Relativity events are described by four coordinates: $(ct,x,y,z)$. Moreover, distance is measured via a inner product $A^\mu \cdot B^\mu = A^0B^0 - A^1B^1 - A^2B^2 - A^3 B^3$. That opens the question: what about other quantities that we use in mechanics? 

If position is $X^\mu = (ct,x,y,z)$ then what is velocity? Is $v^\mu \equiv \frac{dX^\mu}{dt}$ a good choice? It is what we are used to: velocity is change in position over time. However, we need to be careful. We require that our quantities are four-vectors, i.e. they transform according to the Lorentz Transformation. And the length, i.e. the inner product with itself, is the same for all inertial observes.

However, in our our first choice of the definition, we take the derivative with respect to time. But time is not the same for different observers!

We do know that the distance $ds^2$ is LT invariant, as is $c^2$, therefore we can combine both into another invariant - of time 

$$
d\tau^2 \equiv \frac{ds^2}{c^2} 
$$

If we spell out $ds^2$ we can write

$$d\tau^2 = \frac{ds^2}{c^2} = dt^2-\frac{1}{c^2}(dx^2+dy^2+dz^2) 
$$

$d\tau$ is called *proper time* or *Eigenzeit* because for the rest frame $S'$ we have $(dx'=dy'=dz'=0)$ and thus

$$
d\tau^2 = dt'^2
$$

We associate to a moving particle the 3-velocity $\vec{u}=(u_x,u_y,u_z)=(\frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt})$. This is the velocity that we normally use: it is distance as measured in our frame of reference over time as we see on our clocks. We can relate the proper time $d\tau$ to the frame/coordinate time $dt$:

$$
\begin{split}
d\tau^2 &= dt^2-\frac{1}{c^2}(dx^2+dy^2+dz^2)\\  
&=dt^2\left [ 1-\frac{1}{c^2} \left (
\left (\frac{dx}{dt} \right )^2+
\left (\frac{dy}{dt} \right )^2+
\left (\frac{dz}{dt} \right )^2
\right) \right ]
\end{split}
$$

Here we use the magnitude of the 3-velocity $u$. In other words

$$
\frac{d\tau^2}{dt^2}=1-\frac{u^2}{c^2} \Rightarrow dt = \gamma (u) d\tau
$$

The proper time interval relates to the frame time via the $\gamma$-factor for the velocity $u$.

## 4-velocity

Now we can tackle the 4-velocity. In order to make any sense we must define a velocity whose length is an invariant. Furthermore, velocity must be something like displacement over time interval. For the displacement the obvious choice is: $dX^\mu$, i.e. a particle has moved from $X^\mu$ to $X^\mu + dX^\mu$. The displacement $dX^\mu$ transforms, of course, via the Lorentz Transformation. Moreover, its length is a Lorentz Invariant. 
In order to arrive at an adequate velocity, we must thus divide the displacement by a time interval that is also a Lorentz Invariant. Luckily, we have just seen that proper time is a Lorentz Invariant. 

Therefore the 4-velocity $\vec{U}$ is

$$
U^\mu \equiv \frac{dX^\mu}{d\tau} 
$$

where the derivative of the 4-position vector is taken with respect to the proper time $\tau$. We obtain the relation to the 3-velocity $\vec{u}$ just from filling in $d\tau = dt/\gamma(u)$

$$
U^\mu = \gamma (u) \left ( \frac{dct}{dt}, \frac{dx}{dt}, \frac{dy}{dt}, \frac{dz}{dt}
\right ) = (\gamma (u) c, \gamma (u)\vec{u})
$$

4-velocity transfers between frames moving with speed $V$ as given by the Lorentz transformation as $\vec{U}$ is a 4-vector.

### Be careful with 4-vector interpretation

We compute the inner product of $\vec{U}$ with itself $U^2 = \gamma^2(u) (c^2-u^2)$. That is a LT invariant of course. Therefore we can choose the frame such that $u=0$, or in other words $U^2=c^2$. The 4-velocity length is constant! That is not intuitive at all. Even stranger as the vector has constant length, it follows that the 4-velocity is always perpendicular to the 4-acceleration.

$$
\frac{d}{d\tau}U^2 = 2\vec{U}\cdot \frac{d}{d\tau}\vec{U}=0
$$

The counter intuitive stuff happens of course due to the pseudo-Euclidean metric.

### Revisit 3-velocity transformation

Earlier we transformed the velocity $u$ of a particle in $S$ to $S'$ which was moving with $V$. This was quite complicated and the formula is difficult to remember. However, there is no need to remember the formula, you can always derive it from the transformation of the 4-velocity.

The 4-velocity of a particle moving at velocity $\vec{u} = (u_x, u_y, u_z)$ according to observer $S$ is as we have seen:

$$ \vec{U}=(\gamma(u)c,\gamma(u)\vec{u})$$.

Note that the gamma-factor here is a property of the particle, that is: it is the gamma-factor as $S$ would calculated based on the particle velocity that $S$ observes: $\gamma (u) \equiv \frac{1}{\sqrt{1 - \frac{u^2}{c^2}}}$. It has nothing to do with the gamma-factor that $S$ and $S'$ use in their Lorentz Transformation to exchange information. 

As we can write down the LT of a 4-vector between $S$ and $S'$.

$\vec{U}$ is a four-vector it transforms from $S$ to $S'$ via the LT:

$$
\begin{array}{rcl}
\gamma(u') c &=& \gamma(V) \left ( \gamma(u)c - \frac{V}{c}\gamma(u)u_x\right )\\
\gamma(u') u'_{x'} &=& \gamma(V) \left ( \gamma(u)u_x - \frac{V}{c}\gamma(u)c\right )\\
\gamma(u') u'_{y'} &=& \gamma(u)u_y\\
\gamma(u') u'_{z'} &=& \gamma(u)u_z
\end{array}
$$

Note: here $\gamma (V)$ is the gamma-factor corresponding to the relative velocity $V$ between $S$ and $S'$. And $\gamma (V)$ has nothing to do with $\gamma (u)$. On the other hand $\gamma (u')$ is the gamma-factor that $S'$ uses for the four-velocity of the particle that has, according to $S'$ three-velocity $\vec{u}'$.


If we now divide the second of these equations by the first we obtain

$$
\frac{u'_{x'}}{c} = \frac{\frac{u_x}{c}-\frac{V}{c}}{1-\frac{Vu_x}{c^2}}
$$

and if we divide the third of these equations by the first we obtain

$$
\frac{u'_{y'}}{c} =\frac{\frac{u_y}{c}}{\gamma(V) \left( 1-\frac{Vu_x}{c^2}\right )}
$$

Just what we have derived before, but now in a way that you can always do this on the spot if you know the definition of the 4-velocity and the LT of a 4-vector.

## 4-momentum

If we postulate that the mass $m$ is LT invariant we can define the 4-momentum simply by

$$
\vec{P} = m\vec{U} = (m\gamma (u)c,m\gamma(u)\vec{u})\equiv (P^0,\vec{p})
$$

with the 3-momentum $\vec{p}=m\gamma(u)\vec{u}=m\frac{d\vec{x}}{d\tau}$.

```{warning} mass is an LT invariant
The mass $m$ _does not_ change as a function of velocity $\vec{u}$. You still sometimes see $\tilde{m}\equiv\gamma(u)m$ and with this $\vec{P}=(\tilde{m}c,\tilde{m}\vec{u})$. That is not practical as it mixes kinetic energy with inertial mass.
```

### Conservation of 4-momentum

For collisions now the total 4-momentum is conserved (per component)

$$
\sum_{i,before} \vec{P}_i = \sum_{j,after} \vec{P}_j
$$

If the total momentum is conserved than this must hold for the components $(m\gamma (u)c,\vec{p})$. 

Note, that we did not write "mass is conserved". We postulate that it is a LT invariant, that is: it is the same for all inertial observers. But that does not imply that for collisions the mass should equal before and after the collision.

## E=mc&sup2;

*The* most famous equation in physics.

We will derive it by looking at N2 in its relativistic form.

$$
\vec{F} = \frac{d\vec{p}}{dt} = \frac{d}{dt}(m\gamma(u)\vec{u}) = m\frac{d\vec{u}}{d\tau}
$$

Kinetic energy was defined as work done on a mass. We again start from that and fill in N2 and take it step by step

$$
\begin{align}
  \Delta E_{kin} &=& \int_1^2 \vec{F}\cdot d\vec{r}
                   = \int_1^2 \vec{F}\cdot \vec{u} dt \\
                 &=& \int_1^2 \frac{d}{dt}(m \gamma(u)\vec{u}) \cdot \vec{u} dt \\
                 &=& m \int_0^{\tilde{u}} \vec{u} \cdot d\gamma(u)\vec{u}
\end{align}
$$

This integration is more difficult than what we had before as the $\gamma(u)$ factor appears additional in the differential (for small velocities we have $\gamma(u)=1$ and  we just get $\frac{1}{2}mu^2$ as before). So, we will first give the outcome and the look into the details:

$$
\begin{align}
  \Delta E_{kin} &= m \int_0^{\tilde{u}} \vec{u} \cdot d\gamma(u)\vec{u} \\
                 &= mc^2 \bigl( \gamma(\tilde{u}) - 1 \bigr)
\end{align}
$$

How did we do this? We apply integration by parts. below is the full derivation. If you have difficulties following the math: don't worry, you will get this in your Calculus courses. For now, if you struggles with it: just skip the derivation and remember the outcome given above.

+++{"no-pdf": true}
```{math}
\begin{array}{rcl}
\Delta E_{kin} &=& \displaystyle{m[\vec{u}\cdot \gamma(u)\vec{u}]_0^{\tilde{u}} - m\int_0^{\tilde{u}} \gamma(u)\vec{u} \cdot d\vec{u}}\\
&=& \displaystyle{m\gamma (\tilde{u}){\tilde{u}}^2 -  m\int_0^{\tilde{u}} \frac{\vec{u} \cdot d\vec{u}}{\sqrt{1-\frac{u^2}{c^2}}}}\\
&=& \displaystyle{m\gamma (\tilde{u}){\tilde{u}}^2 -  m\int_0^{\tilde{u}}\frac{\frac{1}{2}du^2}{\sqrt{1-\frac{u^2}{c^2}}}}\\
&=& \displaystyle{m\gamma (\tilde{u}){\tilde{u}}^2 - mc^2 \left[\sqrt{1-\frac{u^2}{c^2}}\right]_0^{\tilde{u}}}\\
&=& m\gamma (\tilde{u})\tilde{u}^2 - mc^2\left ( - \sqrt{1-\frac{\tilde{u}^2}{c^2}}+1 \right )\\
&=& m\gamma (\tilde{u})\tilde{u}^2 + \frac{mc^2}{\gamma(\tilde{u})}-mc^2\\
&=& \displaystyle{-mc^2+mc^2\gamma(\tilde{u}) \left ( \frac{\tilde{u}^2}{c^2}+1-\frac{\tilde{u}^2}{c^2} \right ) }\\
&=& mc^2(\gamma(\tilde{u})-1)
\end{array}
```
+++

```{warning} not in pdf yet
```


**Integration by parts**

Easy to remember integration by parts formula, from the product rule
	
$$
	\begin{array}{rcl}
	(fg)' &=& f'g+fg' \\
	\Rightarrow \int (fg)' &=& \int f'g + \int fg'\\
	\int f'g &=& [fg] - \int fg'
	\end{array}
$$

In the derivation of the kinetic energy we used $f'=d\gamma(u)\vec{u}$ and $g=\vec{u}$.

If we now inspect the limiting cases for the velocity

$$
\Delta E_{kin} = mc^2(\gamma(u)-1)
$$

- particle at rest: $u=0 \Rightarrow \gamma (u)=1 \Rightarrow \Delta E_{kin}=0$
- small velocity $\frac{u}{c}\ll 1 \Rightarrow \gamma (u)=1+\frac{1}{2}\frac{u^2}{c^2}+{\cal{O}}(\frac{u^4}{c^4}) \Rightarrow \Delta E_{kin}=\frac{1}{2}mu^2$

The limiting cases work out. Very reassuring.

**4-momentum**  
Now that we have the kinetic energy, $mc^2(\gamma(u)-1)$, we can compare that with the zeroth component of the 4-Momentum: $P^0 = m \gamma (u) c$. As we expected, the energy has a unit $c$ extra: momentum and energy differ unit wise by $m/s$.
But we also see that the kinetic energy (even if we divide it by c, i.e. use $E_{kin}/c$ as the zeroth component) it is still not ok. The term $\gamma (u) -1$ should have been $\gamma (u)$.

To cure this, we can add a constant (provide it is LT invariant) to the kinetic energy $E=E_{kin}+mc^2 = m\gamma(u)c^2$. Adding constants to the energy/potential is always allowed as only the change of it is physically relevant (or the relative energies). 

We obtain

$$
E=m\gamma(u) c^2
$$

or in the rest frame $(u=0 \Rightarrow \gamma(u)=1)$

$$
E=mc^2
$$

With this energy $E=m\gamma(u)c^2$ we can define the 4-momentum as follows (we had $\vec{P}=(m\gamma(u)c,\vec{p})$)

$$
\vec{P}=\left ( \frac{E}{c},\vec{p} \right )
$$

**4-momentum with a different energy?**
	
With a different energy (addition of another constant to $E_{kin}$ than what we did above) the length of the 4-momentum would not be LT invariant and $\vec{P}$ not a 4-vector. If we would have used $E=mc^2(\gamma -1)$ then $P^2$ would not be LT invariant. You see this by computing $P^2=\frac{E^2_{kin}}{c^2}-p^2c^2=m^2c^2(2-2\gamma)$.

And we have finally derived *the* most famous equation in physics. We will use, however, $E=m\gamma(u)c^2$ most of the time as we are not always in the rest frame. The equation says essentially that mass is the same as energy. They are different manifestations of the same thing. A particle has energy in itself at rest without being in any potential. 

```{note}
As gravitation acts on mass, it should also act on energy if they are the same! This is indeed the case, also photons, massless particles, feel gravity. More about that in Einstein's theory of general relativity. 
```

### Mass in units of energy

The mass of an electron $m_e = 9.13\cdot 10^{-31} \mathrm{kg}$ is often given as $512\ \mathrm{keV}$, [kilo electron Volts]. Mass of all elementary particles is given actually in units of $\mathrm{eV}$.

One electron volt is 

$$
1\ \mathrm{eV} = 1.6\cdot 10^{-19} \mathrm{C} \cdot 1\mathrm{V} =  1.6\cdot 10^{-19} \mathrm{J}
$$

The conversion to mass via $E=mc^2$

$$
m_e c^2 = 8.2 \cdot 10^{-14}\mathrm{J} = \frac{8.2 \cdot 10^{-14}}{1.6\cdot 10^{-19}} = 512\ \mathrm{keV}
$$

### The fame

The origin of the fame is probably twofold. 

- Firstly, mass is no longer conversed as was a central pillar in Newton's mechanics. It can be converted. This was shocking for *physicists only*.
- Secondly, when mass is actually converted into energy e.g. in a nuclear fission bomb or inside the sun with nuclear fusion, the effect is immense. The drop of the two nuclear bombs (little boy and fat man) on Hiroshima and Nagasaki made the equation inglorious world-known;  life changing for *all people*. 
- Einstein's rock star status helped certainly quite a bit.

## Energy-momentum relation

The 4-momentum is, of course, a 4-vector and therefore [$P^2$ is LT invariant](./ChX5_FourVectors.md#lorentz-invariants). Let us have a look at the outcome with $\vec{P}=\left ( \frac{E}{c},\vec{p} \right )$

$$
\begin{array}{rcl}
P^2 = \frac{E^2}{c^2}-p^2 &=& m^2\gamma^2(u) c^2 - m^2\gamma^2(u)u^2\\
&=& m^2\gamma^2(u)c^2 \left ( 1-\frac{u^2}{c^2}\right ) = m^2c^2\\
\Rightarrow E^2-p^2c^2 &=& m^2c^4
\end{array}
$$

Indeed, we find that $P^2$ is LT invariant as $m$ and $c$ are LT invariants. Rearranging the equation, we obtain

$$
E^2 = (mc^2)^2 + (pc)^2
$$

This converts back to $E=mc^2$ in the rest frame.

```{figure} ../images/einsteintriangle.*
:label: fig:chx6_einsteintriangle.svg
:width: 70%

Einstein triangle.
```


You can visualize the energy momentum relation with the Einstein triangle shown here, as the relation has the form of $c^2=a^2+b^2$. With the kinetic energy as $E_{kin}=mc^2(\gamma(u)-1)$. $E=E_0+E_{kin}\equiv mc^2 +E_{kin}$.

### LT invariance of P&sup2;

Above we found a very useful, but bit hidden relation in the derivation

$$
P^2 = m^2c^2
$$

This is of course LT invariant, as $m$ and $c$ are LT invariants (and the momentum is a 4-vector), but more importantly we can use this for computations of [relativistic collisions](./ChX7_RelDynColl.md). By the conservation of 4-momentum we can of course compute all collisions by equating the 4 components of the momentum before and after the collision. It is often, however, mathematically easier to write down the conservation of momentum and then square it. Because you can write down $P^2=m^2c^2$ directly, this saves often computations.

## Photons

For photons we have the energy given by $E= \hbar \omega$ and the momentum as $p= \frac{\hbar\omega}{c}$. 
The 4-momentum of a photon is 

$$
\vec{P} = P^\mu = \left ( \frac{E}{c},\vec{p} \right ) = \left ( \frac{\hbar \omega}{c}, \frac{\hbar \omega}{c} \right )
\left ( \frac{h \nu}{c}, \frac{h \nu}{c} \right )
$$

It is directly clear that for photons the LT invariant $P^2=0$.

We could substitute the photon 4-momentum into the energy-momentum relation, we find

$$
E^2 = (pc)^2+(mc^2)^2 \Rightarrow m=0
$$
 This seems to confirm that photons do not have mass. But we need to be careful: photons do not have a 4-momentum of the form $P^\mu = ( m\gamma c, m\gamma u)$. They can't: (1) their velocity is always c, which would lead to $\infty$ for their $\gamma (c)$, (2) with a mass  $m=0$ we multiply $\gamma c$ by zero. Together, this would gives us $0 \times \infty$ which is not defined in a unique way.

Thus: photons do not have mass. Do not get confused with $E=mc^2$.

### Rest frame of a photon?

Does a photon have a rest frame? It travels with the speed of light $c$ (obviously) in all frames.

The answers is no and we give three good arguments.

- A rest frame implies that in this frame the object is at rest. But for a photon, traveling at $c$, which is LT invariant, there is no frame at which it is at rest, but only frames with $v=c$.
- The proper time of a photon is $d\tau^2 = dt^2 -\frac{1}{c^2}d\vec{x}^2$	but this is always equal to 0! A photon does not experience the passage of time, therefore it is reasonable to state that do not have a rest frame.
- In the hypothetical rest frame for a photon there would be no electro-magnetic radiation/interaction possible. In this frame e.g. the interaction between electrons would be zero.

### Doppler revisited ###
In chapter 14 we discussed the Doppler effect from a relativistic point of view. With the concept of 4-momentum it is easy to derive the Doppler shift of photons as observed in different frames of reference. We take the usual LT between $S'$ and $S$. In $S$' a photon is moving along the $x'$-direction. It has frequency $f'$. Its 4-momentum is 

$$ P'^\mu_{photon} = \left ( \frac{hf'}{c}, \pm \frac{hf'}{c} \right ) $$

The $\pm$-sign indicates the direction of the photon: + for moving in the positive $x'$-direction, - for moving in the negative $x'$-direction.

Using the Lorentz Transformation, we can easily transform the 4-momentum to the frame of $S$:

$$\begin{split}
\frac{hf}{c} &= \gamma \left (\frac{hf'}{c} + \frac{V}{c} \frac{\pm hf'}{c}\right ) = \gamma \left ( 1 \pm \frac{V}{c} \right ) \frac{hf'}{c} \Rightarrow \\
\frac{f}{f'} &= \frac{1 \pm V}{\sqrt{1-V^2}}
\end{split}$$

Note that we didn't use the transformation of $P'^1_{photon}$ as this will give the same result.


## Speed of light as limiting velocity

The $\gamma$ factor increases strongly if the speed approaches the speed of light $u/c\to 1$ as can be seen in this plot

```{code-cell} python
:tag: hide-input

import numpy as np
import matplotlib.pyplot as plt

c = 299792458 # speed of light in m/s
x = np.linspace(0.01, c, 1000)
y = 1 / np.sqrt(1 - (x / c)**2)

plt.figure(figsize=(8, 6))
plt.plot(x/c, y, 'b-')
plt.vlines(1,0,20,color='red')
plt.xlim(0,1.1)
plt.ylim(0,20)
plt.xlabel('$u/c$')
plt.ylabel('$\gamma$')
plt.grid()
#plt.savefig('../images/chx6_gamma_v.svg')
plt.show()

```


```{figure} ../images/chx6_gamma_v.svg
:label: fig:gamma_v.png
:width: 80%

The $\gamma$ factor increases strongly if the speed approaches the speed of light $u/c\to 1$
```

For a massive particle this has strong consequences. In the limit $u\to c$ the factor goes towards infinity. If we consider that the kinetic energy is $E=m(\gamma(u) -1)c^2$, the amount of work done to increase the speed increases with $\gamma$. Therefore no massive particle can move with the speed of light (or faster) as this would require an infinite amount of energy for the acceleration.

NB: $c$ is the speed of light in vacuum. In matter the speed of light $v$ is smaller than $c$, characterized by the *refractive index*  $n$ as $n=c/v$. This leads e.g. to refraction by [Snell's law](https://en.wikipedia.org/wiki/Snell%27s_law) at an interface. In matter the speed of massive particles can be larger than the speed of light there. This happens e.g. in a nuclear reactor when electrons move faster than the speed of light in water ($0.75c$). As water is a dielectric, the light waves generated from the response to the moving charge lag behind and a phenomena similar to a sonic boom is created. This phenomenon is termed [Cherenkov radiation](https://en.wikipedia.org/wiki/Cherenkov_radiation). If you have the opportunity to see it in a nuclear reactor, we highly recommend to take it. The color is a very intense deep blue.


```{figure} ../images/CherenkovRadiation.jpg
:label: fig:CherenkovRadiation.jpg
:width:  350px
:align: center

Cherenkov radiation glowing in the core of the Advanced Test Reactor at Idaho National Laboratory (Wikipedia Commons, CC BY-SA 2.0)
```

