---
numbering:
  title:
    offset: 0



---
(ch_reldyn)=
#  Relativistic dynamics and collisions

(ch_reldyn_s_4F)=    
## 4-force

In the previous chapter we have seen that 4-momentum is defined by taking the derivative of the 4-velocity with respect to proper time: $P^\mu \equiv \frac{d U^\mu}{d \tau}$. This way, 4-momentum became a 4-vector that transforms according to the Lorentz Transformation.

In Special Relativity, we deal with inertial observers. The particles they encounter can, however, accelerate under the influence of forces. As momentum is now a 4-vector, we need to define a 4-force. Following Newton, momentum changes due to a force: $\frac{d\vec{p}}{dt} = \vec{F}$. In [Newton’s Laws](../classic/2_NewtonsLaws.md) we discussed Newton's second Law in the form $\vec{F} = m \vec{a}$. We saw that the acceleration did not provide any problems: we had rulers and clocks. Hence, we could measure the acceleration using known and measurable concepts like position, distance and time. 

The connection between force and acceleration is of a different nature: it is a physical law, i.e. a formulation that reflects how we think nature works at its principle level. It is a hypothesis; something we need to check over and over. A rule that holds until we find inconsistencies: contradictions between theory and experiment. It takes only one experiment to overthrow a theory.

We postulate that force is a 4-vector. Moreover, we require that in the limit of $v/c \ll 1$, we recover Newton's second Law from the spatial components of our new 4-vector force law. After all, for low velocities, Classical Mechanics of Newton and Galilei works like a charm. This indicates that we need to differentiate 4-momentum with respect to time. But, if we require force to be a 4-vector, we need to differentiate with respect to proper time. Thus, we postulate:

$$
\vec{F}=\frac{d\vec{P}}{d\tau}= \gamma(u)\frac{d}{dt}\left ( m\gamma(u)c,m\gamma(u)\vec{u}\right )
$$

with $E=m\gamma(u)c^2$ we can rewrite this to

$$
\vec{F} = \gamma(u) \left ( \frac{1}{c}\frac{dE}{dt}, \frac{d}{dt}m\gamma(u)\vec{u} \right ) = \gamma(u) \left ( \frac{1}{c}\frac{dE}{dt}, \vec{f} \right )
$$

with the 3-force $\vec{f}= \frac{d}{dt}(m\gamma(u)\vec{u})$

(ch_reldyn_s_4F_ss_work)=
### Work and Impulse
How about our ideas of force performing work by that force acting over a distance or providing momentum by a force working during a time interval? These ideas and concepts still apply, but they take a relativistic form. Let's see how that works.

First, the natural extension of the definition of work is now:

$$dW = F^\mu dX^\mu $$

If we repeat what we did before, we will replace $dX^\mu$ by $U^\mu \equiv \frac{dX^\mu}{d\tau}$ and instead of $F^\mu$ we write $\frac{dP^\mu}{d\tau}$:

$$\begin{split}
dW &= F^\mu dX^\mu \\ 
&= \frac{dP^\mu}{d\tau} U^\mu d\tau \\
&= m \frac{dU^\mu}{d\tau} U^\mu d\tau \\
&= mU^\mu d U^\mu \\
&=\frac{1}{2}m \ d \left ( U^\mu U^\mu \right )
\end{split}$$

However, $U^\mu U^\mu = \gamma^2 c^2 - \gamma^2 \vec{u}\cdot \vec{u} = c^2$. That is, it is a constant (for all inertial observers the same). Thus $ d U^\mu U^\mu $ = 0. And we must conclude that

$$dW = F^\mu dX^\mu = 0$$

Surprisingly, 4-force does perform zero work, always?! It is, on second thought, less surprising. Let's see how it works out in terms of 4-momentum:

$$\begin{split}
0 = dW &= F^\mu dX^\mu \\
&= \frac{dP^\mu}{d\tau} dX^\mu \\
&= \gamma \frac{dP^0}{dt} cdt - \gamma \frac{dP^1}{dt} u_xdt - \gamma \frac{dP^2}{dt} u_ydt - \gamma \frac{dP^3}{dt} u_zdt \\
&= \gamma \frac{dE/c}{dt} c - \gamma \vec{u} \cdot \frac{d \gamma m \vec{u}}{dt}
\end{split}$$

Thus we can divide $\gamma$ out of this equation and write $c E/c = E$:

$$0 = \frac{dE}{dt} - \vec{u} \cdot \frac{d \gamma m \vec{u}}{dt} \Rightarrow \frac{dE}{dt} = \vec{u} \cdot \frac{d \gamma m \vec{u}}{dt}$$

But this is the relativistic equivalent of 

$$ \mathcal{P} \equiv \frac{dE}{dt} = \vec{f} \cdot \vec{u}$$

In words: the inner product of 3-force and 3-velocity is the power $\mathcal{P}$.

(ch_reldyn_s_col)=
## Collisions

We will now concentrate on collisions. From our earlier discussions, for collisions we assume that we can look 'over' the collision, that is: we apply conservation of momentum and -for elastic collisions- kinetic energy. The latter implies: no non-conservative forces that dissipate mechanical energy and the potential energy prior and after the collision is the same. 

We do that also for our relativistic collisions. But, we don't require that it only holds for perfectly elastic collisions. Instead, we apply it to cases where there is no possibility to turn some of the energy involved into heat. So, we focus on collisions of elementary particles that do not convert part to their energy to heat.

The 4-momentum is conserved. For $\vec{P}=(\frac{E}{c},\vec{p})$ we have 

$$
\sum_{i,before} \vec{P}_i = \sum_{j,after} \vec{P}_j
$$

and the energy-momentum relation from the LT invariance of $\vec{P}\cdot\vec{P}$

$$
E^2 = (mc^2)^2 + (pc)^2
$$

With $E=m\gamma(u)c^2$ and $\vec{p}=m\gamma(u)\vec{u}$.

````{example} Head on collision

Two elementary particles collide head on, see the figure below.

```{figure} ../images/chx7_relbot.svg
:label: fig:chx7_relbot.svg
:width: 50%
:align: center
```

Both particles have mass $m$, after the collision there is only one particle with unknown mass $M$. What is the mass $M$ and the velocity $v$ of that one particle after the collision/fusion?

We consider the conservation of 4-momentum, in 1D:

$$
\begin{array}{rcl}
P_{before}^\mu &=& (m\gamma(u)c,m\gamma(u)u)+(m\gamma(-u)c,-m\gamma(-u)u)\\
&=& (2m\gamma(u)c,0)\\
P_{after}^\mu &=& (M\gamma(v)c,M\gamma(v)v)
\end{array}
$$

with $\gamma(u)=\gamma(-u)$. The 4-momentum is conserved per component, from the space component we see $0=M\gamma(v)v\Rightarrow v=0$. With $\gamma(u)=5/3$ and $\gamma(v)=1$ we find for the time-component $2m\frac{5}{3}=M$. 

This leads to $M=\frac{10}{3}m > 2m$. Thus, the energy prior to the collision was composed of energy associated with the masses themselves and with kinetic energy. After the collision, there is no kinetic energy but there is mass-energy and there is more of this than prior to the collision.
````

```{example} Decay of a photon into an electron and positron

We discuss if a photon (of sufficient energy $E>1024$ keV) can decay into an electron $e^-$ and positron $e^+$.

If we place us in the Center of Mass (CM) frame of the electron $e^-$ and positron $e^+$ after the decay, then the total spatial momentum is $\vec{p}=0$. The momentum before the decay of the photon is $\vec{p}=\frac{hf}{c}>0$ therefore the decay cannot happen in free space. Momentum must be transferred to an additional different particle. 

$$
\left ( \frac{E_e}{c},\vec{p} \right ) +
\left ( \frac{E_p}{c},-\vec{p} \right ) \neq
\left ( \frac{hf}{c},\frac{hf}{c} \right )
$$
	
```

```{example} Electron-positron annihilation

We consider an electron and positron annihilation, resulting in two photons (after the collision). Remember that the decay cannot happen into one photon as shown above (equations are invariant under time reversal).

In the CM of the $e^-e^+$ system we have for the 4-momentum before

$$
P_{before}^\mu =(m_e \gamma(u)c, m_e \gamma(u)u,0,0)+ (m_e \gamma(-u)c, -m_e \gamma(-u)u,0,0)
$$

After we have two photons, with for now different frequencies $f,f'$ and traveling in different directions $\hat{s},\hat{s}'$

$$
P_{after}^\mu = \left ( \frac{hf}{c}, \frac{hf}{c} \hat{s}\right ) + \left ( \frac{hf'}{c}, \frac{hf'}{c}\hat{s}'\right )
$$

From the conservation of 4-momentum we have 

$$
\begin{array}{rcl}
2m_e\gamma(u) c &=& \frac{hf}{c}+\frac{hf'}{c}\\
0 &=& \frac{hf}{c}\hat{s} + \frac{hf'}{c}\hat{s}'
\end{array}
$$

From the second equation we see

$$
\frac{hf}{c}\hat{s} = -\frac{hf'}{c}\hat{s}' 
\Rightarrow \hat{s} = -\hat{s}',\quad f=f'
$$

The two photons are emitted in opposite directions (in the CM system) with the same frequency.

Filling this into the first equation $hf = m_e \gamma(u)c^2 \approx m_e c^2 = 512 \; \mathrm{keV}$. The speed in the CM frame is typically $u\ll c \Rightarrow \gamma(u)=1$.

NB: observe that analysis in the CM frame is often a good idea.

```

````{example} Compton scattering

[Compton scattering](https://en.wikipedia.org/wiki/Compton_scattering) describes the (elastic) scattering of an incoming photon by a (bound) charged particle, typically an electron. 

Compton scattering was discovered in 1923 by Arthur Compton. He was investigating the interaction between X-rays (high energy photons) and some of the light elements. The classical theory of scattering of electro-magnetic waves with matter could not explain the observations. Compton had to combine quantum mechanics with special relativity to understand the interaction of a high-energy photon and a (loosely) bound electron in the outer shell of an atom. It earned him the Nobel Prize in Physics in 1927. 

When a high-frequency photon scatters at an electron, it looses some of its energy. Consequently its frequency reduces and its wave length increases. As energy is conserved, the lost energy shows up in the electron that is emitted, that is 'freed' from the atom.

```{figure} ../images/chx7_compton.svg
:label: fig:chx7_compton.svg
:width: 90%
:align: center
```

In its simplest form, we ignore the energy that is needed to free the electron from its nucleus. This is to a certain extent justified as the outer electron has a very small binding energy, that is, small compared to the energy transferred between the photon and the electron.

In the rest frame of the electron, we have for the 4 different 4-momenta:

$$
\begin{array}{rcl}
P_{e,b} &=& (m_e c,0,0,0)\\
P_{\gamma, b} &=& (E/c,E/c,0,0)\\
P_{e,a} &=& (\frac{E_e'}{c},m_e\gamma(u)u \cos\phi, -m_e \gamma(u)u \sin \phi,0)\\
P_{\gamma,a} &=& (\frac{E'}{c}, \frac{E'}{c} \cos\theta, \frac{E'}{c}\sin\theta,0)
\end{array}
$$

We have

$$
P_{e,b} + P_{\gamma, b} = P_{e,a} + P_{\gamma,a}
$$

Now we make use of the LT invariance of $\vec{P}^2$ 

$$
(P_{e,b} + P_{\gamma, b} - P_{\gamma,a})^2 = P^2_{e,a} 
$$

$$
P_{e,b}^2 + P_{\gamma, b}^2 + P_{\gamma,a}^2 + 2P_{e,b}P_{\gamma, b} - 2P_{e,b}P_{\gamma,a} - 2P_{\gamma, b}P_{\gamma, a} = P^2_{e,a}
$$

where we know $P^2_{e,b}=P^2_{e,a} = m_e^2c^2$ (totally elastic collision) and $P_\gamma^2=0$ directly as [shown before](ChX6_FourMomentum.md#lt-invariance-of-p). Evaluating the cross terms gives

$$
m_e^2c^2 +0+0+2m_eE'-2m_eE-2 \frac{EE'}{c^2}(1-\cos\theta)=m_e^2c^2
$$

We isolate the energy after the collision $E'$

$$
E' = \frac{Em_ec^2}{m_ec^2 +E(1-\cos\theta)}
$$

With $E=hc/\lambda$ we obtain

$$
\frac{\lambda'}{hc} = \frac{m_ec^2 +\frac{hc}{\lambda}(1-\cos\theta )}{\frac{hc}{\lambda} m_ec^2}
$$

Now we multiply both sides by $hc$ and on the right we divide out, to obtain

$$
\lambda' = \lambda + \frac{h}{m_ec}(1-\cos\theta)
$$


Alternatively, we could try and solve the collision by directly using conservation of momentum. This is much more work than the $P^2$ trick. The calculation goes as follows.

In the rest frame of the electron

$$
P_{before}^\mu = \left ( \frac{hf}{c},\frac{hf}{c},0,0 \right ) +(m_e c,0,0,0)
$$

After the scattering

$$\begin{split}
P_{after}^\mu = &\left ( \frac{hf'}{c},\frac{hf'}{c} \cos\theta, \frac{hf'}{c} \sin\theta,0 \right ) + \\
& + \left ( m_e\gamma(u)c,\, m_e\gamma(u)u \cos\phi,\, -m_e \gamma(u) u\sin\phi,\,0 \right )
\end{split}$$

We have three equations, but four unknowns $(f', u, \phi, \theta)$. Therefore the outgoing frequency $f'$ is not uniquely determined, but dependent on the scattering angle $\theta$. We can eliminate two (here $u,\phi$) of the four unknowns, to remain with a relation for the other two.

For the spatial momentum we have 

$$
\begin{array}{rcl}
\frac{hf}{c} &=& \frac{hf'}{c}\cos\theta + m_e \gamma(u)u\cos\phi\\
0 &=& \frac{hf'}{c}\sin\theta - m_e \gamma(u)u\sin\phi
 \end{array}
$$

We rewrite the equations slightly, before squaring them and then adding them to eliminate $\phi$

$$
\begin{array}{rcl}
\frac{hf}{c} - \frac{hf'}{c}\cos\theta&=&  m_e \gamma(u)u\cos\phi\\
\frac{hf'}{c}\sin\theta &=&  m_e \gamma(u)u\sin\phi
 \end{array}
$$

We indeed eliminate $\phi$ to

$$
\frac{h^2f^2}{c^2}-2\frac{hfhf'}{c^2}\cos\theta + \frac{h^2 f'^2}{c^2}=m_e^2 \gamma^2(u)u^2 \quad (*)
$$

The right hand side of the equation is the space component squared of the momentum after: $p^2_{e'} = m_e^2\gamma^2(u)u^2$, but this can be related to the energy via the momentum-energy relation for the moment after $(p_{e'}c)^2 = E^2_{e'}-(m_ec^2)^2$. We will use this to eliminate the unknown speed $u$.

The energies can be related via the 0-component of the 4-momentum

$$
\begin{array}{rcl}
\frac{hf}{c}+m_e c &=& \frac{hf'}{c} + \frac{E'_e}{c}\\
\Rightarrow E^{'2}_e &=& (hf-hf'+m_ec^2)^2
\end{array}
$$

Substituting the energy $E^{'2}_e$ into the momentum-energy relation and replacing the right hand side of equation $(*)$ after multiplying by $c^2$ to

$$
h^2f^2-2hfhf'\cos\theta + h^2 f'^2=
(hf-hf'+m_ec^2)^2 - (m_ec^2)^2
$$

Indeed we have removed the speed $u$ and angle $\phi$. We cannot do more, but remain with a relation for the frequency $f'$ after scattering as function of angle $\theta$. To this end we evaluate the square in the equation, cancel a few terms and rearrange to

$$
\begin{array}{rcl}
2hfm_ec^2 - 2hf'm_ec^2 &=& 2h^2 ff' (1-\cos\theta)\\
\frac{c}{f'}-\frac{c}{f} &=& \frac{h}{m_ec}(1-\cos\theta)
\end{array}
$$

Finally, by replacing the frequency with the wavelength $f\lambda=f'\lambda'=c$

$$
\lambda'-\lambda = \frac{h}{m_ec}(1-\cos\theta)
$$

This is, of course, the same result as we derived earlier.

As $\cos\theta<1$ we find $\lambda'>\lambda$, which makes sense as the photon can only loose energy to the electron in the initial rest frame of the electron. After the scattering the electron can pick up some speed.

To analyze the outcome we check for 

- $\theta=0$ (no scattering): $\Rightarrow \lambda'=\lambda$ which makes sense
- $\theta=\pi$: backwards scattering, maximal $\Delta \lambda = \frac{2h}{m_ec}$ largest energy transfer


````
