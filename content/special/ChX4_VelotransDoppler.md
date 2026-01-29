---
numbering:
  title:
    offset: 0

kernelspec:
  display_name: Python 3
  language: python
  name: python3
---
# Velocity Transformation & Doppler shift

Imagine we have two spaceships moving each with a speed of $\frac{3}{4}c$ as shown below. What is the speed that either the red or yellow spaceships sees for the other spaceship speed?

We should, first of all realize, that the information regarding the velocity of the two spaceships is given by an observer $S$ who is neither in the red nor the yellow ship. We need to transform this information to an observer in the red or in the yellow ship.


```{figure} ../images/chx4_addvel.svg
:label: fig:chx4_addvel.svg
:width: 80%
:align: center
 
Two spaceships approaching each other.
```   

For the GT we have derived the velocity transformation to be 

$$
v'_{x'} = v_x-V
$$

So, let's translate our velocity information from the observer $S$ to someone in the red ship. The relative velocity between $S$ and the red ship is $V=\frac{3}{4}c$. Thus according to the observer in the red ship, $S_R$, her velocity is $V'_R = V_R -V_R =0$, obviously.

However, she will denote the velocity of the yellow ship as $V'_y = V_y - V_R = (-3/4 - 3/4)c = \frac{3}{2}c > c$. In the world of Galilei and Newton, this is no problem at all: velocities can be as big as you can imagine. However, in reality, this is not true. We have to use Special relativity if the velocities start to approach $c$. It is not possible for any object to move faster than the speed of light, as we will see later. 

In the above, we have only looked at the velocity component in the $x$-direction. We have in addition found $v'_{y'}=v_y, v'_{z'}=v_z$.

As our universe does not follow Galilei and Newton, we need to derive the transformation/addition formula for velocities with the LT. So let's do it. 

## Velocity Transformation ##
Let us start from the definition of velocity (assuming we deal with constant velocities, so we don't need to worry about differentiation and integration). We will denote velocities by $u$ to avoid confusion with $V$, the relative velocity between the two observers.

Observer $S'$ will write down:

$$
u'_{x'} = \frac{x'_2-x'_1}{t'_2-t'_1} 
=\frac{\Delta x'}{\Delta t'} \text{\,\,\,\,\ and \,\,\,\, } u'_{y'} = \frac{y'_2-y'_1}{t'_2-t'_1} 
=\frac{\Delta y'}{\Delta t'}  \quad (*)
$$

We have left out the $z'$-component as that will be completely analogous to the $y'$-coordinate.

Observer $S$ will use similar definitions. How do these observers translate velocity information that they get from each other?

We need to use the LT to transform $(ct',x',y')$ to $(ct,x,y)$:

$$
\begin{array}{rcl}
x'_2-x'_1 &=& \gamma \left ( x_2 -\frac{V}{c} ct_2 \right ) -\gamma \left ( x_1 -\frac{V}{c} ct_1 \right )\\
&=& \gamma (x_2-x_1)-\gamma \frac{V}{c}(ct_2-ct_1) \\
\\
y'_2-y'_1 &=& y_2 - y_1
\end{array}
$$

and

$$
\begin{array}{rcl}
ct'_2-ct'_1 &=& \gamma \left ( ct_2 -\frac{V}{c} x_2 \right ) -\gamma \left ( ct_1 -\frac{V}{c} x_1 \right )\\
&=& \gamma (ct_2-ct_1)-\gamma \frac{V}{c}(x_2-x_1)
\end{array}$$

From the last line it is clear that also the $y,z$ components of the velocity $\vec{u}$ will be influenced by the transformation although the relative motion between the two observers is only along the $x$-direction. Substituting the expressions for the space and time difference into $v'_{x'}$, we obtain


$$
\begin{align}
  u'_{x'} &= \frac{\gamma \Delta x - \gamma \frac{V}{c}\Delta c t}
                 {\gamma \Delta c t - \gamma \frac{V}{c}\Delta x}
           = \frac{\frac{\Delta x}{\Delta t} - V}
                  {1 - \frac{V}{c^2} \frac{\Delta x}{\Delta t}} \\
          &= \frac{u_x - V}{1 - \frac{V u_x}{c^2}}
\end{align}
$$


For the transverse components $y,z$, we obtain due to the change of the time interval

$$
u'_{y'} = \frac{\Delta y}{\gamma \Delta ct - \gamma \frac{V}{c}\Delta x} = \frac{u_y}{\gamma \left (1-\frac{Vu_x}{c^2}\right )}
$$

In the limit of $u_x,V\ll c$ both formulas reduce to the Galilean Transformation as required. For $u_x\to c$ and $V\to -c$ the combined velocity will stay smaller than $c$. Check yourself that this is true.

The formula for the velocity transformation/addition are not so easy to remember. Later you will see how to derive them from the transformation properties of the 4-velocity, which is easy to remember.  

For our example of the two approaching spaceships,  $u_x=-\frac{3}{4}c, V=\frac{3}{4}c$ we find for the speed of the yellow approaching the red ship

$$
u''_{x''} = \frac{-\frac{3}{4}-\frac{3}{4}}{1+\frac{3}{4}\frac{3}{4}}c=-\frac{24}{25}c <c
$$

This is again smaller (in absolute sense) than $c$. For the other ship we find of course the same, but with different sign.


## Doppler effect

The [Doppler effect](https://en.wikipedia.org/wiki/Doppler_effect) is well-known from waves. You know it from daily life. If a car is passing you at high speed, the frequency of the sound you hear changes from approaching to driving away from you. The received frequency $f_{obs}$ by you is higher than the emitted frequency $f_{src}$ while the car is approaching, and smaller when it drives off.  

Here we investigate the effect of a moving source that is emitting light with $f_{src}$ (electro-magnetic waves). This is one of the few cases where the relativistic case is easier than the classical effect. In the latter it matters if the source is moving or the medium. For EM-waves, however, there is no medium (aether) as we have seen which simplifies things.

```{figure} ../images/Doppler_animation.gif
:label: fig:Doppler_animation.gif
:width: 80%
:align: center
 
Effect on sound waves due to motion.
```   

For the case of an observer with speed $v_{obs}$ and speed of sound in the medium $u$ and moving source $v_{src}$ (e.g. car) the classical formula of the frequency shift is

$$
f_{obs} = f_{src}\frac{u\pm v_{obs}}{u ∓ v_{src}}
$$

where for the stationary observer and medium, we have $+/-$ and for the moving observer and stationary source $-/+$.

The origin of the observed frequency shift of a moving source is visible in the picture. In the direction of motion, more wave maxima arrive per unit time, as the car is moving closer between two wave maxima. Consequently, the observer in the car will count more maxima per unit time: the frequency is higher.

For the relativistic effect we consider a moving source with velocity $\vec{u}$ moving with observer $S'$ relative to $S$. The frequency of the source is $f_0=\frac{1}{T_0}$ in the rest frame, with $T_0$ the period of the oscillation.

```{figure} ../images/chx4_doppler2.svg
:label: fig:chx4_doppler2.svg
:width: 60%
:align: center
 
Observer S' and source both moving with respect to S.
``` 

We now consider the situation for $S$ as shown in the figure below. The position of the source $\vec{r}_0$ is indicated with the star $*$. 

```{figure} ../images/chx4_doppler3.svg
:label: fig:chx4_doppler3.svg
:width: 60%
:align: center
 
.
```   

We do know that according to $S'$, the proper frequency is $f_0$ and the proper period $T_0 = 1/f_0$. Thus if a maximum is send at $t'_0$ the next one will be at $t'_0 + \frac{1}{f_0}$.

$S$ will denote the first maximum with time $t_1 = t_0$, but will have to take time dilation into account for the second one: $t_2  = t_0 + \frac{\gamma}{f_0}$. Note that these two time instants are the moments, according to $S$ when the two maxima are send, not when they are received by $S$.

During this time interval $\frac{\gamma}{f_0}$ the source moves from $\vec{r}_0$ to $\vec{r}_1=\vec{r}_0+\vec{u}\frac{\gamma}{f_0}$. Thus, the distance that the second maximum has to travel is different from that of the first one, just like in the classical Doppler case.

We consider the 2 consecutive wave maxima that are emitted in $S'$ and received in $S$:

- 1$^{st}$ maximum in $S'$ at $t'_0$, that is received in $S$ at $t_1=t_0 +\frac{r_0}{c}$. The additional time $\frac{r_0}{c}$ is needed for the light to travel from $\vec{r}_0$ to the observer at the origin of $S$.
- 2$^{nd}$ maximum in $S'$ at $t'_0+\frac{1}{f_0}$, is received in $S$ at $t_2=(t_0+\frac{\gamma}{f_0})+\frac{r_1}{c}$.

To move further we split the velocity of the source into a radial component (in line to the observer in $S$) and a tangential part perpendicular $\vec{u}=\vec{u}_r+\vec{u}_t =u_r \hat{r} +u_t \hat{t}$. See {numref}`fig:DopplerVelo.png`.
If the distance $r_0 \gg u \frac{\gamma}{f_0}$ then the distance $r_1 = r_0 + u_r \frac{\gamma}{f_0}$. 


```{figure} ../images/DopplerVelo.png
:label: fig:DopplerVelo.png
:width: 50%
:align: center
 
.
``` 

Note that we could drop the vector notation here from the exact relation above. Classically only the radial component is relevant as only the distance matters.

With this simplification on the distances we can compute $t_2$

$$
t_2 = (t_0+\frac{\gamma}{f_0})+\frac{r_1}{c} \approx t_0+\frac{\gamma}{f_0} + \frac{r_0+u_r \frac{\gamma}{f_0}}{c}
$$

For the frequency $f$ in $S$ we now subtract the two arrival times 

$$
\frac{1}{f} =t_2-t_1 =  \frac{\gamma}{f_0}+ \frac{u_r}{c}\frac{\gamma}{f_0}
$$

Rewriting this into a ratio of the emitted and received frequency, we obtain for the relativistic Doppler effect

$$
\frac{f_0}{f} = \gamma \left (1+\frac{u_r}{c} \right ) = \frac{1+\frac{u_r}{c}}{\sqrt{1-\frac{u^2}{c^2}}}
$$

Please observe that the $\gamma$ factor is of $\gamma(u)$ that means even for only tangential movement $(u_r=0)$ there is a Doppler shit.

### Cosmic background radiation

The most well-known frequency shift is the red-shift from the expanding universe. Light coming from a star has a certain frequency as observed in the rest frame of the star. This frequency corresponds to a quantum mechanical drop in energy level. The photon emitted in this energy transition has a well known wave length and frequency. That is, of course, in the rest frame of the process. Anybody observing these photons while traveling with respect to the star will see a Doppler-shifted frequency. If the star is moving away from the observer, the wave length seems longer and thus the frequency lower: the light is shifted to the red end of the spectrum. If on the other hand the star is moving towards the observer, the waves seem compressed and the frequency detected is higher: the light is shifted to the blue end of the spectrum. Hence, astronomers talk about red sifted and blue shifted light.

The astronomer [Edwin Hubble](https://en.wikipedia.org/wiki/Edwin_Hubble) first found in the 1920s that the universe does not only consists out of our own galaxy, the milky way, but there must be (many) other galaxies, which were called *nebula* at that time. Second he could show that all further away galaxies move away from us by measuring the Doppler shift of well-known emission lines of stars and their distance from periodic intensity variation of Cepheid Variable stars. It turned out that the distance of the galaxies $d$ was roughly linearly proportional to the red-shift which is again linearly related to the the radial velocity $v$ as we derived. This is known now as Hubble's law $v=H_0 d$ with the Hubble constant ($H_0 \sim 70\ km/s/Mpc$). Further away galaxies move faster away, but why? And why is no galaxy approaching us?

At end of the 1920s [Georges Lemaître](https://en.wikipedia.org/wiki/Georges_Lema%C3%AEtre) applied Einstein general theory of relativity to cosmology and found that the universe must be expanding, while it started in a "primeval atom", now known as the *Big Bang*. He could explain the red-shift relation from the expanding universe hypothesis.

The Big Bang theory was highly debated early on, in particular by Einstein, but is now fully accepted. The strongest experimental evidence was the discovery of the *cosmic background radiation* in 1965 (by accident).

The whole cosmos is nearly uniformly filled by a background radiation of about $2.7\ \mathrm{K}$ (wavelength in the $\mu$m range) with small inhomogeneities as shown in the picture by the Planck satellite around 2013.


```{figure} ../images/1280px-WMAP_2012.png
:label: fig:1280px-WMAP_2012.png
:width: 550px
:align: center
 
Background radiation in the universe as observed from earth.
By NASA / WMAP Science Team - <a rel="nofollow" class="external free" href="https://map.gsfc.nasa.gov/media/121238/ilc_9yr_moll4096.png">http://map.gsfc.nasa.gov/media/121238/ilc_9yr_moll4096.png</a>, Public Domain.
```   

This radiation is the red shifted radiation from around 380,000 years after the Big Bang when the universe became transparent. At that time the temperature had dropped (due to the adiabatic expansion) to around 3000 K, at which protons and electrons can form stable hydrogen atoms $p+e^- \to H$. This event is called *recombination*. At higher temperatures photons are scattered from the free electrons (and protons) constantly, effectively the photons have a very short mean free path and the universe is opaque. At the recombination temperature all of a sudden the photon could travel without strong scattering, the universe was transparent. The 3K cosmic background radiation that we measure today is the red-shifted version of this 3000 K light. It gives us a glimpse of how the universe looked at that time. Apart from the background radiation there were no other light sources in the universe as stars had not formed yet, the [Dark Ages](https://en.wikipedia.org/wiki/Chronology_of_the_universe#Dark_Ages) of the universe began.

The red-shift here is actually caused by the expansion of the universe itself (the universe expands causing the photons' wavelength to expand). NB: Time in cosmology is often given in units of red-shift (e.g. the red-shift for recombination is $z=1089$).

**Wavelength temperature relation**

How can we relate the wavelength of electro-magnetic radiation to temperature?
	
Matter emits electro-magnetic radiation depending on its temperature. This relation is given by [Planck's law](https://en.wikipedia.org/wiki/Planck%27s_law) with which quantum mechanics started in 1900 as he considered *black body radiation*. The emitted spectral density per solid angle depends on the thermal energy $kT$ and is given by

$$
	u(\lambda, T) = \frac{2hc}{\lambda^5}\frac{1}{e^{hc/\lambda kT}-1}
	$$

Here for the first time $h$, Planck's constant, was introduced to quantize energy packages $hf$ of oscillation.

Phenomenologically, the relation between the peak of the spectrum and the temperature was found by <a herf="https://en.wikipedia.org/wiki/Wilhelm_Wien">Wien</a> already earlier to be $\lambda_{peak} = \frac{b}{T}$ with $b$ Wien's constant $b\sim 2900\ \mu m\cdot K$.
	
NB: If you buy a light bulb for a lamp, then a temperature is indicated on the packaging, e.g. $2700\ \mathrm{K}$ for "warm white", $4000\ \mathrm{K}$ for "cool white" to describe the light color. Quantum physics at your local super market.

```{code-cell} python
:tag: hide-input

import numpy as np
import matplotlib.pyplot as plt
import ipywidgets
from IPython.display import display

# Constants
h = 6.62607015e-34  # Planck constant, J*s
c = 3.0e8           # Speed of light, m/s
k = 1.380649e-23    # Boltzmann constant, J/K

# Wavelength range (from 1 nm to 3000 nm)
wavelengths = np.linspace(1e-9, 3000e-9, 1000)

# Planck's Law function with overflow protection
def planck(wavelength, T):
    exp_term = (h * c) / (wavelength * k * T)
    # Prevent overflow in the exponential function
    with np.errstate(over='ignore'):
        return (2.0 * h * c**2) / (wavelength**5) * np.where(exp_term < 700, 1/(np.exp(exp_term) - 1), 0)

# Visible spectrum range in meters
visible_start = 380e-9
visible_end = 750e-9

# Colors of the visible spectrum in the correct order from violet to red
colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
num_colors = len(colors)
wavelength_visible = wavelengths[(wavelengths >= visible_start) & (wavelengths <= visible_end)]
color_indices = np.linspace(0, len(wavelength_visible), num_colors + 1, dtype=int)

# Function to plot the Planck curve
def plot_planck_curve(T):
    spectral_radiance = planck(wavelengths, T)
    
    plt.figure(figsize=(10, 6))
    
    # Plot the Planck curve
    plt.plot(wavelengths * 1e9, spectral_radiance, label=f'T = {T} K')
    
    # Highlight the visible spectrum with rainbow bands
    for i in range(num_colors):
        plt.fill_between(wavelength_visible[color_indices[i]:color_indices[i+1]] * 1e9, 
                         spectral_radiance[(wavelengths >= visible_start) & (wavelengths <= visible_end)][color_indices[i]:color_indices[i+1]], 
                         color=colors[i])
    
    # Plot settings
    plt.xlim(0, 3000)
    plt.ylim(0, 4.5E14)
    plt.xlabel('Wavelength (nm)')
    plt.ylabel('Spectral Radiance')
    plt.title('Planck Curve')
    plt.legend()
    plt.grid(True)
    plt.show()

ipywidgets.interact(plot_planck_curve,T=(1,10000,100))
```
