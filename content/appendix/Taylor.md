---
title: Series

# numbering:
#   title:
#     offset: 0

kernelspec:
  name: python3
  display_name: 'Python 3'
---
# Taylor series

Every function can be approximated by a polynomial, called its Taylor series. The Taylor series of a function $f(x)$ around the point $a$ is given by:

$$f(x) = f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \ldots $$

We can visualize this idea by looking at the Taylor series expansion of the sine function. The Taylor series of a sine function is given by:

$$\sin(x) = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \ldots $$

or more generally:

$$\sin(x) = \sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!} $$

Below we can see what happens when we take more and more terms of the Taylor series expansion of the sine function. The black dots represent the actual sine function, while the colored lines represent the Taylor series approximations with increasing numbers of terms.

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt
import ipywidgets as widgets
from ipywidgets import interact
import math

x = np.linspace(0,2*np.pi,1000)
y = np.sin(x)

def taylor_series(x, n):
    ts = np.zeros_like(x)
    for k in range(int(n)):
        ts += ((-1)**k * x**(2*k+1)) / math.factorial(2*k+1)
    return ts

def update(n):
    plt.clf()
    plt.figure()
    
    plt.plot(x,y,'k.')
    plt.plot(x,taylor_series(x,n))
    
    plt.ylim(-5,5)
    plt.show()

# Use FloatSlider for smooth interaction
interact(update, n=widgets.FloatSlider(min=1, max=20, step=1, value=4))
```

# Fourier series