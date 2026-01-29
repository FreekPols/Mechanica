---
title: Differential equations

# numbering:
#   title:
#     offset: 0

kernelspec:
  name: python3
  display_name: 'Python 3'
---
# Differential equations

Already in chapter 1 we have seen the concept of a differential equation: an equation that relates a function to its derivatives. In mechanics, differential equations arise naturally when we express Newton's laws in terms of position, velocity, and acceleration. 

## First order
A first-order differential equation relates a function to its first derivative. The general form of a first-order differential equation is:

$$ \frac{dx}{dt} = f(t) $$

If we know the function $f(t)$, we can solve for $x(t)$ by integrating both sides with respect to time:

$$ x(t) = x(t_0) + \int_{t_0}^{t} f(\tau) d\tau $$

```{example} Simple first-order differential equation
Consider a simple first-order differential equation where the rate of change of position is constant:
$$ \frac{dx}{dt} = v_0 $$

where $v_0$ is a constant velocity. Integrating both sides gives:
$$ x(t) = x(t_0) + v_0 (t - t_0) $$
```

```{example} First order equation
Consider know a function that changes with time:

$$ \frac{dx}{dt} = -2t + 1 $$

To find the function $x(t)$, we can integrate both sides with respect to time:

$$ x(t) = x(t_0) + \int_{t_0}^{t} (-2\tau + 1) d\tau = x(t_0) + \left[ -\tau^2 + \tau \right]_{t_0}^{t} = x(t_0) + (-t^2 + t) - (-t_0^2 + t_0) $$
```

Note that these two examples are dependent on a function that is itself only dependent on time. More complex first-order differential equations can involve the function itself, such as:

$$ \frac{dx}{dt} = -kx $$

where $k$ is a constant. This type of equation often arises in contexts such as radioactive decay or cooling processes. We can solve this equation using separation of variables or integrating factors, leading to an exponential solution $x(t)=Ae^{-kt}$. We can verify this solution by differentiating it:

$$ \frac{dx}{dt} = -kAe^{-kt} = -kx $$

Slotting in this equation in the above allows us to solve for the constant $A$ based on initial conditions:

$$ \frac{dx}{dt} = -kx \implies x(t) = x(t_0)e^{-k(t-t_0)} $$


## Second order
In a second order differential equation, the function is related to its second derivative. The general form of a second-order differential equation is:

$$ \frac{d^2x}{dt^2} = f(t,x) $$

A familiar example from mechanics is Newton's second law in relation to a mass-spring system: 

$$ F_{net} = m a = m \frac{d^2x}{dt^2} = -kx $$

We know this leads to simple harmonic motion, with the general solution:

$$ x(t) = A \cos(\omega t) + B \sin(\omega t) $$

where $\omega = \sqrt{\frac{k}{m}}$ is the angular frequency, and $A$ and $B$ are constants determined by initial conditions. 

