---
title: Complex numbers

# numbering:
#   title:
#     offset: 0

kernelspec:
  name: python3
  display_name: 'Python 3'
---

(ch-complex)=
# Complex numbers

The concept of complex numbers has been introduced in the [chapter on oscillations](../classic/6_Oscillations.md). It shows up in many places in physics, but isn't often introduced simultaneously in math classes. Hence, we provide a brief introduction to complex numbers here.

## The general idea

A complex number is a number that expresses both a quantity and a phase (angle) with a single number. Complex numbers are expressed in the form $a + bi$, where $a$ and $b$ are *real numbers*, and $i$ is the *imaginary unit*, which satisfies the equation $i^2 = -1$ (see below). The *real part* of the complex number is $a$, and the *imaginary part* is $b$. Complex numbers can be represented in the complex plane, where the horizontal axis represents the real part and the vertical axis represents the imaginary part. The magnitude of a complex number is given by $\sqrt{a^2 + b^2}$, and the angle (or argument) is given by $\arctan(b/a)$, see {numref}`complexplane`.

```{figure} ../images/complexplane.png
:label: complexplane
:width: 70%

The complex plane, where the horizontal axis represents the real part and the vertical axis represents the imaginary part of a complex number.
```

```{exercise} Complex plane
:label: ex_cp
Make a graph of the complex plane. Include the complex number: $2 + 3i$.

1. Multiply $2 + 3i$ by $-1$ and include the vector in the graph.
2. Multiply $2 + 3i$ by $i$ and include the vector in the graph.
```

Why using complex numbers is useful will be covered later, let's first think a little more on representing complex numbers in the complex plane. Consider the following expression: _multiplying by $i$ is the same as rotating by 90 degrees (in the complex plane)_. We can see this easily by taking the inner product. We take the complex number: $1+i$:

$$ \begin{pmatrix} 1 \\ i \end{pmatrix} \cdot \begin{pmatrix} i \\ -1 \end{pmatrix} = 1*i+i*-1 = 0$$

If we think of this idea and imagine that we multiply twice by $i$ we get a 180 degree rotation, which is the same as multiplying by $-1$. This is consistent with the definition of $i$ as the square root of $-1$, or $i^2 = -1$. Note that 180 degree is the same as the rotation of $\pi$ radians. 

### Python
We can use Python as a useful tool to help uncover characteristics of complex numbers. A complex number is given in python with the letter $j$. By default real and imaginary numbers can be calculated - no additional python packages needed.

```{code-cell} python
:tag: hide-input
import matplotlib.pyplot as plt
import numpy as np

data = np.array([2+2j, 4j, 4+1j, -4])
# extract the real and imaginary parts
x = data.real
y = data.imag

# plot the complex numbers
plt.scatter(x, y, color='k', marker='.')
plt.ylabel('Imaginary')
plt.xlabel('Real')
plt.show()
```


We can check that multiplying by $i$ is the same as rotating by 90 degrees (in the complex plane) is true in the python plot below. 

```{code-cell} python
:tag: hide-input
import matplotlib.pyplot as plt
import numpy as np

data = np.array([2+2j, 4j, 4+1j, -4])
data2 = data * 1j
# extract the real and imaginary parts
x, x2 = data.real, data2.real
y, y2 = data.imag, data2.imag

# plot the complex numbers
plt.scatter(x, y, color='k', marker='.')
plt.scatter(x2, y2, color='r', marker='.')
plt.ylabel('Imaginary')
plt.xlabel('Real')
plt.show()
```



## Euler's formula
From @complexplane we see that the complex number $x + iy$ can also be written as $r(\cos(\theta)+i\sin(\theta))$. Euler came up with a helpful way of rewriting this: 

```{important} Euler's formula: 

$$e^{ix} = \cos(x) + i \sin(x)$$

and its special case known as Euler's identity: $e^{i\pi} + 1 = 0$

```

You could show that this is true in multiple ways, e.g. taking the series of the exponential function as well as of the cosine and sine function. However, we leave that to the math course.

```{exercise} Polar coordinates
Do again @ex_cp but now using Euler's formula.
```


```{code-cell} python
:tag: hide-input
%pip install ipywidgets
import numpy as np
import matplotlib.pyplot as plt
from ipywidgets import interact, FloatSlider
from mpl_toolkits.mplot3d import Axes3D

def euler_plot(theta=0.0):
    t = np.linspace(0, 4*np.pi, 500)
    x = t
    y = np.cos(t)
    z = np.sin(t)

    fig = plt.figure(figsize=(8, 5))
    ax = fig.add_subplot(111, projection="3d")

    ax.plot(x, y, z, color="red", linewidth=2, label=r"$e^{i\theta}$")
    ax.plot(x, y, 0*t, color="green", linewidth=2, label=r"$\cos(\theta)$")
    ax.plot(x, 0*t, z, color="blue", linewidth=2, label=r"$i\sin(\theta)$")

    ax.scatter(theta, np.cos(theta), np.sin(theta), color="red", s=60)
    ax.scatter(theta, np.cos(theta), 0, color="green", s=60)
    ax.scatter(theta, 0, np.sin(theta), color="blue", s=60)

    ax.plot([theta, theta], [0, np.cos(theta)], [np.sin(theta), np.sin(theta)],
            color="gray", linestyle="--", linewidth=1)
    ax.plot([theta, theta], [np.cos(theta), np.cos(theta)], [0, np.sin(theta)],
            color="gray", linestyle="--", linewidth=1)

    ax.set_title(r"$e^{i\theta}=\cos(\theta)+i\sin(\theta)$", fontsize=16)
    ax.set_xlabel(r"$\theta$")
    ax.set_ylabel(r"$\mathrm{Re}[e^{i\theta}]$")
    ax.set_zlabel(r"$\mathrm{Im}[e^{i\theta}]$")

    ax.set_xlim(0, 4*np.pi)
    ax.set_ylim(-1.1, 1.1)
    ax.set_zlim(-1.1, 1.1)

    ax.view_init(elev=20, azim=-65)
    ax.legend()
    plt.show()

interact(
    euler_plot,
    theta=FloatSlider(
        value=np.pi,
        min=0,
        max=4*np.pi,
        step=0.05,
        description=r"$\theta$"
    )
)
```

### cos(x) and sin(x)
Using Euler's formula:

$$e^{ix} = \cos(x) + i\sin(x)$$ (euler_1)

we can derive expressions for either the cosine or sine function. We replace replace $x$ with $-x$ and consider that $\cos$ is an even function ($\cos(x)=\cos(-x)$) and $\sin$ is an odd function ($\sin(x)=-\sin(-x)$): 

$$
\label{euler_2}
e^{-ix} = \cos(x) - i\sin(-x)
$$ 

If we add @euler_1 and @euler_2, we get:

$$e^{ix} + e^{-ix} = 2 \cos(x)$$ (euler_cos)

and if we subtract the two functions we get: 

$$e^{ix} - e^{-ix} = 2i\sin(x)$$ (euler_sin)

or, more frequently given as: 

$$ \cos(x) = \frac{e^{ix} + e^{-ix}}{2} \\ \sin(x) = \frac{e^{ix}-e^{-ix}}{2i} $$ (euler_cos_sin)


## Integrating
Using complex numbers, we can make some integrals easier to solve (like sometimes switching to the frequency domain helps also in solving integrals). Below we provide two examples:

$$\int \cos^2(x) dx = \int (\frac{e^{ix} + e^{-ix}}{2})^2 dx = \int \frac{e^{2ix} + 2e^{ix}e^{-ix} + e^{-2ix}}{4} dx$$

where we first have used @euler_cos_sin. This becomes:

$$ \int \frac{e^{2ix} + 2 + e^{-2ix}}{4} dx = \frac{1}{4} \left(\frac{e^{2ix}}{2i} + 2x + \frac{e^{-2ix}}{-2i}\right) + C $$

Rearranging and changing back to trigonometric functions we would obtain:

$$ \frac{1}{4}\left( 2x + \frac{e^{2ix}+-e^{-2ix}}{2i} \right) + C = \frac{1}{4}\left(2x + \sin(2x)\right) + C $$

Let's look at another difficult integral:

$$ \int e^x \cos(x) dx$$

We can consider that the cosine is the real part of Euler's formula and rewrite the integral:

$$ \int e^x \cos(x) dx = \mathrm{Re} \int e^x e^{ix} dx = \mathrm{Re} \int e^{(1+i)x}dx $$

The primitive of this function is much easier: 

$$ 
\begin{aligned}
 \mathrm{Re} \int e^{(1+i)x}dx &= \mathrm{Re} \frac{1}{1+i}e^{(1+i)x} + C = e^x\mathrm{Re}\frac{e^{ix}}{1+i}\frac{1-i}{1-i} + C\\
&=e^x\mathrm{Re}\frac{(\cos(x)+i\sin(x))(1-i)}{2} + C= e^x\mathrm{Re}\frac{\cos(x) - i\cos(x) + i\sin(x) + \sin(x)}{2} + C\\
& = e^x\frac{\cos(x)+\sin(x)}{2}
\end{aligned}
$$

But we didn't come here to make integrals easier, although it is a good idea to see how complex numbers may make your life as a physics student easier. The true reason why we introduced complex numbers was of their use in differential equations.

## Solution to differential equations
The solution of a differential equation in which the second derivative is proportional to the negative of the function itself is harmonic oscillation:

$$ m\frac{d^2x}{dt^2} = -C x $$ (eq_seq_dv)

We have seen before that the cosine and sine function may be written using Euler's formula. Let us investigate how this would work with the equation above.

We propose the general solution $x(t) = Ae^{iat} + Be^{-iat}$

If we use @eq_seq_dv and our general solution we get:

$$ m\left(-a^2Ae^{iat} + -a^2Be^{-iat} \right) = -C \left(Ae^{iat} + Be^{-iat}\right) $$

Rearranging and reducing:

$$ ma^2\left(Ae^{iat} + Be^{-iat} \right) = C \left(Ae^{iat} + Be^{-iat}\right) \rightarrow ma^2 = C$$

or $a=\sqrt{\frac{C}{m}}$, which is the same as (see [oscillations](../classic/6_Oscillations.md)) the angular frequency $\omega$. Based on the initial conditions we can find the values of $A$ and $B$.

