---
title: Linear Algebra

# numbering:
#   title:
#     offset: 0

kernelspec:
  name: python3
  display_name: 'Python 3'
---
(linalg)=
# Linear Algebra

## Vectors
In [the first chapter](#sec-language-vectors), the idea of a vector was introduced as a physical quantity that has both a magnitude and a direction. A vector in three-dimensional space can be represented as:

$$ \vec{r} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} $$

Its magnitude (or length) is given by:

$$ ||\vec{r}|| = \sqrt{x^{2} + y^{2} + z^{2}} $$

In Python, we can represent vectors using NumPy arrays and calculate their magnitude as follows:

```{code-cell} python
import numpy as np
x, y, z = 3, 4, 5
r = np.array([x, y, z])
# r  = np.array([3, 4, 5])     equivalent to the to lines above
magnitude = np.linalg.norm(r)
print(magnitude)
```

### Inner product

Suppose we have two vectors $\vec{F} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$ and $\vec{r} = \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix}$, visualized below. 

```{code-cell} python
:tag: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

F = np.array([0, 1, 0])
r = np.array([2, 0, 0])

plt.figure()
plt.quiver(0, 0, F[0], F[1], angles='xy', scale_units='xy', scale=1, color='r', label='F')
plt.quiver(0, 0, r[0], r[1], angles='xy', scale_units='xy', scale=1, color='b', label='r')
plt.xlim(-1, 3)
plt.ylim(-1, 3)
plt.legend()
plt.grid()
plt.show()
```

What should be noted is that these two vectors are orthogonal: they don't share any direction. We know that the work done by a force in the direction of the displacement is zero if the force and displacement are orthogonal and can show this by taking the inner product. The inner product is also called the dot product and is denoted by a dot between the two vectors: $\vec{F} \cdot \vec{r}$. Mathematically, the inner product of these two vectors is defined as:


$$ W = \vec{F} \cdot \vec{r} = F_{x} r_{x} + F_{y} r_{y} + F_{z} r_{z} $$

Its outcome is a scalar quantity. For our specific vectors, we have:

$$ W = \vec{F} \cdot \vec{r} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \cdot \begin{pmatrix} 2 \\ 0 \\ 0 \end{pmatrix} = 0 \cdot 2 + 1 \cdot 0 + 0 \cdot 0 = 0 $$

More formally, for any inner product in $\mathbb{R}^n$, the **inner product** of two vectors
$\mathbf{v}=\begin{pmatrix}a_{1}\\a_{2}\\ \vdots\\a_{n}\end{pmatrix}$ and
$\mathbf{w}=\begin{pmatrix}b_{1}\\b_{2}\\ \vdots\\b_{n}\end{pmatrix}$ is defined as

$$\mathbf{v} \cdot\mathbf{w} = a_1b_1 + a_2b_2 + \cdots + a_nb_n.$$

Using Python, we can compute the inner product as follows:

```{code-cell} python
import numpy as np
F1 = np.array([0, 1, 0])
r1 = np.array([2, 0, 0])
inner_product = np.dot(F1, r1)
print(inner_product)  # Output: 0
```


### Cross product
The cross product was introduced in this book first in the [context of torque](#torque-angular-momentum). We had an arm 
$\vec{r} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$ and a force $\vec{F} = \begin{pmatrix} F_{x} \\ F_{y} \\ F_{z} \end{pmatrix}$
and defined the torque as the cross product of these two vectors:

$$ \vec{\tau} = \vec{r} \times \vec{F} $$

we can calculate the cross product as:

$$ \vec{\tau} = \begin{pmatrix} r_{y} F_{z} - r_{z} F_{y} \\ r_{z} F_{x} - r_{x} F_{z} \\ r_{x} F_{y} - r_{y} F_{x} \end{pmatrix} $$

```{note} needs some attention
or, as a mnemonic (ezelsbruggetje), we can include the unit vectors $\hat{i}$, $\hat{j}$, and $\hat{k}$:

$$ \vec{\tau} = \begin{pmatrix} \hat{i} & \hat{j} & \hat{k} \\ r_{x} & r_{y} & r_{z} \\ F_{x} & F_{y} & F_{z} \end{pmatrix} $$

```

The outcome of a cross product is a vector quantity, thus with both a magnitude and direction. Moreover, the direction of the resulting vector is orthogonal to both $\vec{r}$ and $\vec{F}$, following the right-hand rule. Note: $F\times r = - (r \times F)$, meaning the direction is reversed.

```{code-cell} python
import numpy as np
r = np.array([2, 0, 0])
F = np.array([0, 1, 0])
torque = np.cross(r, F)
print(torque)  # Output: [0 0 2]
```

### Vector fields
A vector field, for instance a force field or an electric field, assigns a vector to every point in space. When visualized, each point in space has an arrow indicating both the direction and the magnitude of the vector. By changing the function F below, you can create your own vector fields.

```{code-cell} python
:tag: [hide-input]
import numpy as np
import matplotlib.pyplot as plt

def plot_vector_field(F, xlim=(-2, 2), ylim=(-2, 2), N=20, scale=None):
    x = np.linspace(xlim[0], xlim[1], N)
    y = np.linspace(ylim[0], ylim[1], N)
    X, Y = np.meshgrid(x, y)

    Fx, Fy = F(X, Y)

    plt.figure(figsize=(5, 5))
    plt.quiver(X, Y, Fx, Fy, scale=scale)
    plt.xlabel("x")
    plt.ylabel("y")
    plt.xlim(xlim)
    plt.ylim(ylim)
    plt.show()

def F(x, y):
    return -y, x

plot_vector_field(F)
```


## Matrices

### Matrix multiplication
A matrix can be used to transform a vector into another vector, do an operation on a vector. (Note! It has much more functionalities such as representing systems of equations, but we will not go into that here). For example, consider a matrix $A$ and a vector $\vec{r}$:
$$ A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}, \quad \vec{r} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} $$

We now can multiply the matrix $A$ with the vector $\vec{r}$ to obtain a new vector $\vec{R}$:
$$ R = A\vec{r} = \begin{pmatrix} a_{11}x + a_{12}y + a_{13}z \\ a_{21}x + a_{22}y + a_{23}z \\ a_{31}x + a_{32}y + a_{33}z \end{pmatrix} $$


### Rotation matrices

### Two dimensional
**unit matrix**
$$ R = A\vec{r} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix} $$

**rotation matrix**  
We can introduce a rotation matrix $A$ that rotates a vector $\vec{r}$ in two-dimensional space. Below this show for a matrix $A$ swaps the x and y coordinates:

$$ R = A\vec{r} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} y \\ x \end{pmatrix} $$

**90 degrees rotation**  
Given this concept we can introduce a matrix $A$ that rotates a vector $\vec{r}$ by 90 degrees counterclockwise:
$$ R = A\vec{r} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} -y \\ x \end{pmatrix} $$



```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

F = np.array([1, 0])
A = np.array([[0, -1], [1, 0]])  # 90 degrees rotation matrix

R = A @ F                        # Matrix multiplication to rotate vector F

plt.figure(figsize=(6,6))
plt.quiver(0, 0, F[0], F[1], angles='xy', scale_units='xy', scale=1, color='r', label='original vector')
plt.quiver(0, 0, R[0], R[1], angles='xy', scale_units='xy', scale=1, color='b', label='rotated vector')
plt.xlim(-1, 2)
plt.ylim(-1, 2)
plt.legend()

plt.show()
```

**45 degrees rotation**  
In a similar way, we can define a rotation matrix for a 45-degree clockwise rotation: 

$$ R = A\vec{r} = \begin{pmatrix} \cos(-45^\circ) & -\sin(-45^\circ) \\ \sin(-45^\circ) & \cos(-45^\circ) \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \\ -\frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \frac{\sqrt{2}}{2}(x + y) \\ \frac{\sqrt{2}}{2}(-x + y) \end{pmatrix} $$

In Python, we can implement this as follows:

```{code-cell} python
import numpy as np
import matplotlib.pyplot as plt

F = np.array([1, 0])
angle = 45  # degrees
theta = np.radians(-angle)  # Convert angle to radians for clockwise rotation
A = np.array([[np.cos(theta), -np.sin(theta)], [np.sin(theta), np.cos(theta)]])

R = A @ F  # Matrix multiplication to rotate vector F

plt.figure(figsize=(6,6))
plt.quiver(0, 0, F[0], F[1], angles='xy', scale_units='xy', scale=1, color='r', label='original vector')
plt.quiver(0, 0, R[0], R[1], angles='xy', scale_units='xy', scale=1, color='b', label='rotated vector')
plt.xlim(-1, 2)
plt.ylim(-1, 2)
plt.legend()
plt.show()
```




### Three dimensional

$$ R = A\vec{r} = \begin{pmatrix} 1 & 0 & 0\\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} x \\ y \\ z \end{pmatrix} $$

$$ R = A\vec{r} = \begin{pmatrix} 0 & 0 & 1\\ 0 & 1 & 0 \\ 1 & 0 & 0 \end{pmatrix} \begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} z \\ y \\ x \end{pmatrix} $$
