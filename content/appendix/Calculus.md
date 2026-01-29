---
title: Calculus

# numbering:
#   title:
#     offset: 0

kernelspec:
  name: python3
  display_name: 'Python 3'
---
# Calculus 

## Derivatives

$$ f(x) = x^2 \implies \frac{d}{dx}f(x) = 2x $$

or in general:

$$ f(x) = x^n \implies \frac{d}{dx}f(x) = nx^{n-1} $$

Three perspectives on the derivative (werk van .. in TPT):
1. **Geometric**: The derivative at a point gives the slope of the tangent line to the curve at that point.
2. **Physical**: The derivative represents the instantaneous rate of change, such as velocity being the derivative of position with respect to time.
3. **Analytical**: The derivative is defined as the limit of the average rate of change as the interval approaches zero.

From 



```{grasple} https://embed.grasple.com/exercises/5681833d-5762-42f1-a1e7-8959da537fb7?id=129579

```

### Chain rule
A function with a function $f(g(x))$ (like $\sin(x^2)$) can be differentiated using the chain rule:

$$ \frac{d}{dx}f(g(x)) = f'(g(x)) \cdot g'(x) $$

```{example} Chain rule example
Differentiate $h(x) = \sin(x^2) $. 

Here we first identify our two functions ($f(g(x))=\sin(g(x))$ and $g(x)=x^2$). Using the chain rule we get:

$$ h'(x) = f'(g(x)) \cdot g'(x) = \cos(x^2) \cdot 2x = 2x\cos(x^2) $$
```


### Product rule
A function that is the product of two functions $f(x)$ and $g(x)$ can be differentiated using the product rule:

$$ \frac{d}{dx}[f(x) \cdot g(x)] = f'(x) \cdot g(x) + f(x) \cdot g'(x) $$

A simple example would be differentiating $h(x) = x \cdot x^2 $ where we know this could be written as $h(x) = x^3$ and its derivative is $h'(x) = 3x^2$. Using the product rule we get:

$$ h'(x) = \frac{d}{dx}[x \cdot x^2] = 1 \cdot x^2 + x \cdot 2x = x^2 + 2x^2 = 3x^2 $$

```{example} Product rule example
Differentiate $h(x) = x^3 \cdot \sin(x) $.

Here we identify our two functions ($f(x)=x^3$ and $g(x)=\sin(x)$). Using the product rule we get:

$$ h'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x) = 3x^2 \cdot \sin(x) + x^3 \cdot \cos(x) $$
```


### Quotient rule
The quotient rule is applied when differentiating a function that is the quotient of two functions $f(x)$ and $g(x)$: $h(x) = \frac{f(x)}{g(x)}$. The derivative is then give by:

$$ h'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2} $$

```{example} Quotient rule example
Differentiate $h(x) = \frac{x^2}{\sin(x)} $.

Here we identify our two functions ($f(x)=x^2$ and $g(x)=\sin(x)$). Using the quotient rule we get:

$$ h'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2} = \frac{2x \cdot \sin(x) - x^2 \cdot \cos(x)}{\sin^2(x)} $$
```

### Summarized

| Function                | Derivative                          |
|------------------------|------------------------------------|
| $f(x)\cdot g(x)$       | $f'(x)g(x) + f(x)g'(x)$            |
| $\frac{f(x)}{g(x)}$    | $\frac{g(x)f'(x)-f(x)g'(x)}{g'(x)^2}$ |
| $f(g(x))$              | $f'(g(x))g'(x)$                    |


### List of standard derivatives
Below is a list of some standard functions $Z(x,y)$ and their derivatives with respect to x.

| Function $Z(x,y)$ | $\frac{dZ}{dx}$ | 
|------------------|-----------------|
| $x + y$          | 1               |
| $x \cdot y$      | y               |
| $x^n$            | $n\cdot x^{n-1}$|
| $e^{cx}$         | $ce^{cx}$       |
| $n^x$            | $n^x \ln{n}$    |
| $\ln{x}$         | $\frac{1}{x}$   |
| $\sin{x}$        | $\cos{x}$       |
| $\cos{x}$        | $-\sin{x}$      |
| $\tan{x}$        | $1+\tan^2{x}$   |




## Partial derivatives
Above we have only discussed derivatives of functions with one variable. However, many functions depend on multiple variables, e.g. $Z(x,y)$. In such cases, we can compute the partial derivative with respect to one of the variables, treating the other variables as constants. Consider the function $Z(x,y) = x^2y + y^3$. The partial derivative of $Z$ with respect to $x$ is computed as follows:

$$ \frac{\partial Z}{\partial x} = \frac{\partial}{\partial x}(x^2y + y^3) = 2xy + 0 = 2xy $$

and with respect to $y$:

$$ \frac{\partial Z}{\partial y} = \frac{\partial}{\partial y}(x^2y + y^3) = x^2 + 3y^2 $$

Noted that in the first year physics course, you will encounter this as well as you often have to deal with uncertainties in multiple quantities. To find the total uncertainty, you will need to compute the partial derivatives of the function with respect to each variable.


## Integration


## Line integrals
We encounter line integrals in chapter 4 on work. The amount of work done by a force field $\vec{F}$ when moving an object along a path $C$ is given by the line integral: 

$$ W = \int_C \vec{F} \cdot d\vec{r} $$

We can visualize this by drawing the force field as arrows in space and the path as a curve. The line integral sums up the contributions of the force along the path, taking into account both the magnitude and direction of the force relative to the path. By looking whether the path goes with or against the force field, we can determine whether the work on the object or by the object.

VISUALIZATION

In a conservative force field, such as gravity or electrostatic forces, the work done is path-independent and only depends on the initial and final positions. 


## Closed loop integrals
We encounter closed loop integrals in chapter ... There we see that a closed loop integral is the same as a line integral where the start and end point are the same. A closed loop integral is denoted as:

$$ \oint_C \vec{F} \cdot d\vec{r} $$

If we use again the idea of a conservative force field, we can see that in such a field the closed loop integral is always zero, as the work done going from point A to point B is exactly canceled out by the work done going back from point B to point A. 


## Curl, divergence and gradient

For two or three dimensional vector fields, the derivative can apply to all directions. For this, the nabla operator $\nabla$ exists. In three dimensions, the nabla operator is a vector that takes the partial derivative along each coordinate: 

$$\nabla = \begin{pmatrix} \frac{\partial}{\partial x} \\ \frac{\partial}{\partial y} \\ \frac{\partial}{\partial z} \end{pmatrix}$$

The nabla operator can be applied to a scalar (*gradient*) or to a vector(field) using the dot or cross product (*divergence* and *curl*). We will discuss each of these below.

Note that some of the explanation below is better understood when looking at [linear algebra](#linalg) first.

(Curl)=
### Curl
The curl is used in the [chapter on work and energy](#ch_WorkEnergy), specifically in the context of assessing whether a force field is conservative (if so, the path from A to B does not matter on the amount of work that is done). The curl of a vector field $\mathbf{F}$ is denoted as $\nabla \times \mathbf{F}$. In mathematical terms, it provides a measure of the rotation (or swirling strength) of the field at a given point. A zero curl indicates that the field is irrotational, which is a characteristic of conservative fields. To get a better conceptual understanding, we can inspect the two fields below. The left is clearly rotating around the center, while the right one is not as all vectors point to the same direction (0,0). Hence, we expect that if we take the curl of the left field, it will be non-zero, while for the right field it will be zero.

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

   
def F1(x, y):
    return y, -x

def F2(x, y):
    r = np.sqrt(x**2 + y**2)
    r = np.where(r == 0, 1e-10, r)  # Avoid division by zero
    return -x / r**3, -y / r**3

N = 7
xlim=(-2, 2) 
ylim=(-2, 2)
x = np.linspace(xlim[0], xlim[1], N)
y = np.linspace(ylim[0], ylim[1], N)
X, Y = np.meshgrid(x, y)

Fx1, Fy1 = F1(X, Y)
Fx2, Fy2 = F2(X, Y)
    
fig, (ax1, ax2) = plt.subplots(2, 1, figsize=(5, 10))
ax1.quiver(X, Y, Fx1, Fy1)
ax2.quiver(X, Y, Fx2, Fy2)

ax1.set_xlabel("x")
ax1.set_ylabel("y")
ax1.set_xlim(xlim)
ax1.set_ylim(ylim)
ax2.set_xlabel("x")
ax2.set_ylabel("y")
ax2.set_xlim(xlim)
ax2.set_ylim(ylim)
plt.show()
```

Mathematically, the curl in three dimensions is defined as:
$$ \nabla \times \mathbf{F} = \begin{vmatrix} \hat{x} & \hat{y} & \hat{z} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ F_x & F_y & F_z \end{vmatrix} $$

where $\hat{x}$, $\hat{y}$, and $\hat{z}$ are the unit vectors in the x, y, and z directions, respectively, and $F_x$, $F_y$, and $F_z$ are the components of the vector field $\mathbf{F}$. Note that the outcome of taking the curl at a point returns a vector (or taking the curl of the vector field results in another vector field).

(divergence)=
### divergence
Divergence is used in [chapter ](#link) on ... Divergence of a vector field $\mathbf{F}$ is denoted as $\nabla \cdot \mathbf{F}$. It quantifies the magnitude of a source or sink at a given point in the field. A positive divergence indicates a source (where field lines are diverging), while a negative divergence indicates a sink (where field lines are converging). Mathematically, the divergence in three dimensions is defined as:

$$ \nabla \cdot \mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z} $$

where $F_x$, $F_y$, and $F_z$ are the components of the vector field $\mathbf{F}$. Note that taking the divergence at a point returns a scalar value, not a vector.

(gradient)=
###  Gradient

The gradient of function $f$ is $\nabla f$. It creates a vector that indicates the directions in which $f$ increases or decreases:

$$ \nabla f = \begin{pmatrix} \frac{\partial f}{\partial x} \\ \frac{\partial f}{\partial y} \\ \frac{\partial f}{\partial z} \end{pmatrix}$$
