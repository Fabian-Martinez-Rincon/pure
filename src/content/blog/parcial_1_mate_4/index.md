---
title: 'Primer Parcial de Matemáticas 4'
publishDate: '2025-10-10'
description: 'Practica de Numeros y Relaciones'
heroImage: { src: './thumbnail.jpg', color: '#E4F5FF' }
tags: 
 - Facultad
language: 'Spanish'
---

https://youtu.be/DfwWEvyZGWY?si=aMl1qzhjDDe-ONxM

# TP 3 Numeros

## Ejercicio 1


<details><summary>Probar que no hay enteros, simultáneamente, pares e impares.</summary>


**Número par** -> Un número entero $$ n $$ es **par** si existe un número entero $$ k $$ tal que  $$ n = 2k $$ Es decir, $$ n $$ es divisible por 2.

**Número impar** -> Un número entero $$ n $$ es **impar** si existe un número entero $$ k $$ tal que  $$ n = 2k + 1 $$ Es decir, $$ n $$ no es divisible por 2.


**Demostración** -> Para que un número sea simultáneamente par e impar, debería cumplir ambas definiciones al mismo tiempo.  
Es decir, existirían enteros $$ k_1 $$ y $$ k_2 $$ tales que:

$$
n = 2k_1 \quad \text{y} \quad n = 2k_2 + 1
$$

Esto implica que:

$$
2k_1 = 2k_2 + 1
$$

Restando ambos lados:

$$
2k_1 - 2k_2 = 1
$$

Simplificando:

$$
2(k_1 - k_2) = 1
$$

**Conclusión** -> Aquí se llega a una **contradicción**, ya que el lado izquierdo de la ecuación es un número par (por ser múltiplo de 2), mientras que el lado derecho es 1, que es impar.  
No existe ningún par de enteros $$k_1$$ y $$k_2$$ que satisfagan esta igualdad.

Por lo tanto:

$$
\text{No hay enteros que sean simultáneamente pares e impares.}
$$

</details>

---

## Ejercicio 2

*Analizar si las siguientes afirmaciones son verdaderas o falsas.*


**(a)** Si  $$a \mid 1 \quad \text{entonces} \quad a = 1 \ \text{o}\ a = -1$$

<details><summary>Respuesta</summary>

1 = a·k, con k ∈ ℤ  
k = 1/a

Para que esta ecuación sea verdadera, k debe ser igual a $$ \frac{1}{a} $$.  
Pero, para que k sea un entero, **a debe ser un divisor de 1**.  

Los divisores de 1 son aquellos números enteros que, multiplicados por otro entero, dan como resultado 1.  
Estos divisores son, únicamente:

- a = 1  
- a = -1  

ya que $$ 1 = 1 \times 1 $$ y $$ 1 = (-1) \times (-1) $$.

**La afirmación es VERDADERA.**

</details>

**(b)** $$ a \mid b \ \text{y}\ b \mid c \ \text{entonces}\ a \mid c$$

<details><summary>Respuesta</summary>

b = a·k₁, con k₁ ∈ ℤ.  
c = b·k₂, con k₂ ∈ ℤ.  

c = a·k₁·k₂  
c = a·k₃, con k₃ ≡ k₁·k₂ ∈ ℤ.  

**La afirmación es VERDADERA.**

</details>

**(c)**  $$ a(a - 1) \ \text{es par} $$

<details><summary>Respuesta</summary>

Si a es par, (a - 1) es impar y, entonces, el producto es par.  
Si a es impar, (a - 1) es par y, entonces, el producto es par.  

**La afirmación es VERDADERA.**

</details>

**(d)**  $$ x \mid y \ \text{y}\ y \mid z \ \text{entonces}\ x \mid yz$$

<details><summary>Respuesta</summary>

y = x·k₁, con k₁ ∈ ℤ.  
z = y·k₂, con k₂ ∈ ℤ.  

yz = x·k₁·z  
yz = x·k₃, con k₃ ≡ k₁·z ∈ ℤ.  

**La afirmación es VERDADERA.**

</details>

---

## Ejercicio 3

Si a un número se lo divide por 5, el resto es 3 y si se lo divide por 7, el resto es 4.

<details><summary>¿Cuál es el resto si se lo divide por 35?</summary>

- $$ x = 5k_1 + 3, \quad k_1 \in \mathbb{Z} $$
- $$ x = 7k_2 + 4, \quad k_2 \in \mathbb{Z} $$

Igualando ambas expresiones:

- $$ 5k_1 + 3 = 7k_2 + 4 $$
- $$ 5k_1 = 7k_2 + 1 $$
- $$ k_1 = 3, \quad k_2 = 2 $$
- $$ x = 5 \times 3 + 3 = 15 + 3 = 18 $$
- $$ x = 7 \times 2 + 4 = 14 + 4 = 18 $$
- $$ x = 35k_3 + 18, \quad k_3 \in \mathbb{Z} $$

**Por lo tanto, si se lo divide por 35, el resto es 18.**

</details>

---

## Ejercicio 4

Sean $$ a $$ y $$ b $$ dos números enteros que tienen restos 4 y 7 respectivamente en la división por 11. Hallar los restos de la división por 11 de $$ a + b^2 $$.

<details><summary>Respuesta</summary>

Variables:

- $$ a = 11k_1 + 4, \quad k_1 \in \mathbb{Z} $$
- $$ b = 11k_2 + 7, \quad k_2 \in \mathbb{Z} $$

**Paso 1**: Calculamos la suma

Sabemos que ambos números son múltiplos de 11 más su respectivo resto.  
Sumando las dos expresiones obtenemos:

- $$ a + b = 11k_1 + 4 + 11k_2 + 7 \\ $$
- $$ a + b = 11 (k_1 + k_2) + 11 \\ $$
- $$ a + b = 11 (k_1 + k_2 + 1) \\ $$

Por lo tanto -> $$ a + b = 11k_3, \quad k_3 \equiv (k_1 + k_2 + 1) \in \mathbb{Z} $$

**Paso 2**: Calculamos el cuadrado (Elevamos ambos lados al cuadrado):

- $$ (a + b)^2 = (11k_3)^2 \\ $$
- $$ (a + b)^2 = 11 \times 11k_3^2 \\ $$
- $$ (a + b)^2 = 11k_4, \quad k_4 \equiv 11k_3^2 \in \mathbb{Z} $$


**Por lo tanto, el resto de la división por 11 de $$ (a + b)^2 $$ es 0.**

</details>

---

## Ejercicio 5

Convertir los siguientes números de base 10 a base 8:
<details><summary>(a) 98</summary>

- $$ 98 = 8 \times 12 + 2 $$  
- $$ 12 = 8 \times 1 + 4 $$
- $$ 1 = 8 \times 0 + 1 $$

Por lo tanto:

- $$ 98 = (142)_8 $$

</details>

<details><summary>(b) 44</summary>

- $$ 44 = 8 \times 5 + 4 $$
- $$ 5 = 8 \times 0 + 5 $$

Por lo tanto:

- $$ 44 = (54)_8 $$
</details>

<details><summary>(c) 20</summary>

- $$ 20 = 8 \times 2 + 4 $$  
- $$ 2 = 8 \times 0 + 2 $$

Por lo tanto:

- $$ 20 = (24)_8 $$

</details>

---

## Ejercicio 6

Calcular el máximo común divisor entre:

<details><summary>i) (16, 24)</summary>

- $$ (24, 16) = (16, 8) = (8, 0) = 8 $$

Por lo tanto:

- $$ \text{mcd}(16, 24) = 8 $$

</details>

<details><summary>ii) (70, 50)</summary>

- $$ (70, 50) = (50, 20) = (20, 10) = (10, 0) = 10 $$

Por lo tanto:

- $$ \text{mcd}(70, 50) = 10 $$

</details>

<details><summary>iii) (121, 88)</summary>

- $$ (121, 88) = (88, 33) = (33, 22) = (22, 11) = (11, 0) = 11 $$

Por lo tanto:

- $$ \text{mcd}(121, 88) = 11 $$

</details>

<details><summary>iv) (−90, 90)</summary>

- $$ (-90, 90) = (90, 0) $$

Por lo tanto:

- $$ \text{mcd}(-90, 90) = 90 $$

</details>

<details><summary>v) (980, 224)</summary>

- $$ (980, 224) = (224, 84) = (84, 56) = (56, 28) = (28, 0) = 28 $$

Por lo tanto:

- $$ \text{mcd}(980, 224) = 28 $$

</details>


---

## Ejercicio 7

*Probar que si $$ a $$ y $$ b $$ son enteros:*


**(a)**  $$a + b \ \text{es coprimo con} \ a$$

<details><summary>Respuesta</summary>

Definición de coprimo -> Dos números son coprimos si su máximo común divisor es 1.

- $$ a = dk_1, \quad k_1 \in \mathbb{Z} $$
- $$ a + b = dk_2, \quad k_2 \in \mathbb{Z} $$

Igualando ambas expresiones:

- $$ dk_1 + b = dk_2 $$
- $$ b = dk_2 - dk_1 $$
- $$ b = d(k_2 - k_1) $$
- $$ b = dk_3, \quad k_3 \equiv (k_2 - k_1) \in \mathbb{Z} $$


No hay razón para que $$a$$ y $$b$$ tengan un divisor común que no sea $$d = 1$$.
Por lo tanto:

$$ (a + b,\, a) = 1 $$

</details>

**(b)**  $$\text{Si } a \text{ es no nulo, } (a, 0) = |a|$$

<details><summary>Respuesta</summary>

$$ a = |a|k_1, \quad k_1 \in \mathbb{Z} $$  
$$ 0 = |a|k_2, \quad k_2 \in \mathbb{Z} $$

No hay divisores comunes entre $$ a $$ y $$ 0 $$ que sean mayores a $$ |a| $$.  
Por lo tanto:

$$ (a, 0) = |a| $$
</details>

**(c)**  $$(a, b) = 1 \ \text{entonces} \ ma + nb = k, \ \text{con } m, n, k \in \mathbb{Z}$$

<details><summary>Respuesta</summary>

ma + nb= 1.
</details>

---

## Ejercicio 8

Hallar  $$mcd(5k + 3, 3k + 2) $$, para cualquier k entero

<details><summary>Respuesta</summary>

$$(5k + 3,\, 3k + 2) = (3k + 2,\, 2k + 1) = (2k + 1,\, k + 1) = (k + 1,\, k) = (k,\, 1) = (1,\, 0)$$

Por lo tanto:

$$ \text{mcd}(5k + 3,\, 3k + 2) = 1 $$
</details>

---

## Ejercicio 9

Sean $$ ( a, b \in \mathbb{Z} ) $$ y sea $$ p $$ primo. Demostrar que si $$ ( p \mid ab ) $$ entonces $$ ( p \mid a ) $$ ó $$ ( p \mid b ) $$.

Mostrar que esto no se cumple si $$ p $$ no es primo.

<details><summary>Respuesta</summary>

$$ a = p_1^{e_1} p_2^{e_2} \dots p_m^{e_m}, \quad p_i \in \mathbb{Z}, \quad i = 1, 2, \dots, m $$

$$ b = q_1^{f_1} q_2^{f_2} \dots q_n^{f_n}, \quad q_i \in \mathbb{Z}, \quad i = 1, 2, \dots, n $$

$$ ab = p^s k, \quad k \in \mathbb{Z} $$

donde $$ k $$ es el producto de los factores primos que no son $$ p $$ y $$ s $$ es el número de veces que $$ p $$ divide el producto $$ ab $$.

Dado que $$ p $$ es primo y que $$ ab $$ se compone de factores primos, $$ p $$ debe aparecer en la factorización de, al menos, uno de los factores $$ a $$ o $$ b $$.

Esto **no se cumple** si $$ p $$ no es primo.  
Consideremos un contraejemplo:

$$ p = 6, \quad a = 2, \quad b = 3 $$

$$ p \mid ab \Rightarrow 6 \mid 6 $$

pero

$$ p \nmid a \Rightarrow 6 \nmid 2 \quad \text{y} \quad p \nmid b \Rightarrow 6 \nmid 3 $$

Por lo tanto, si $$ p $$ **no es primo**, la propiedad deja de cumplirse.
</details>

---

## Ejercicio 10

Hallar, si existe, un número entero $$ q $$ tal que $$ 7290q $$ es el cubo de un entero.

<details><summary>Respuesta</summary>

**1️⃣ Factorización de 7290**

Comenzamos descomponiendo $$ 7290 $$ en sus factores primos:

$$
7290 = 3645 \times 2 \\
7290 = 1215 \times 3 \times 2 \\
7290 = 405 \times 3^2 \times 2 \\
7290 = 135 \times 3^3 \times 2 \\
7290 = 45 \times 3^4 \times 2 \\
7290 = 15 \times 3^5 \times 2 \\
7290 = 5 \times 3^6 \times 2
$$

Por lo tanto, la **factorización prima de 7290** es:

$$
7290 = 2 \times 3^6 \times 5
$$

**2️⃣ Hallar el valor de $$ q $$**

Para que $$ 7290q $$ sea el **cubo de un número entero**, cada exponente en la factorización debe ser múltiplo de 3.

Actualmente tenemos:

- $$ 2^1 $$
- $$ 3^6 $$
- $$ 5^1 $$

Faltan potencias para que todos los exponentes sean múltiplos de 3.  
Necesitamos completar:

- $$ 2^1 \to 2^3 $$ → multiplicamos por $$ 2^2 $$
- $$ 3^6 \to 3^6 $$ → ya es múltiplo de 3
- $$ 5^1 \to 5^3 $$ → multiplicamos por $$ 5^2 $$

Por lo tanto:

$$
q = 5^2 \times 2^2
$$

$$
q = 25 \times 4 = 100
$$

**3️⃣ Comprobamos que $$ 7290q $$ sea un cubo perfecto**

Multiplicamos ambos:

$$
n^3 = 7290 \times 100
$$

Reemplazamos por las factorizaciones:

$$
n^3 = (5 \times 3^6 \times 2) \times (5^2 \times 2^2)
$$

Agrupando factores semejantes:

$$
n^3 = 5^3 \times 3^6 \times 2^3
$$

Extraemos la raíz cúbica:

$$
n = (5^3 \, 3^6 \, 2^3)^{\frac{1}{3}} = 5 \times 3^2 \times 2
$$

Simplificamos:

$$
n = 5 \times 9 \times 2 = 90
$$

✅ Por lo tanto:

$$
\boxed{q = 100 \quad \text{y} \quad n = 90.}
$$


</details>

---

## Ejercicio 11

Demostrar que dados $$ a $$ y $$ b $$ en $$ \mathbb{Q} $$ tales que $$ a < b $$, existe otro número racional $$ x $$ tal que
$$ a < x < b $$.

<details><summary>Respuesta</summary>

**1️⃣ Punto de partida**

Sabemos que $$ a < b $$.  
Queremos encontrar un número **racional** $$ x $$ que esté **entre** ellos, es decir:

$$
a < x < b.
$$

**2️⃣ Proponemos un candidato**

Un candidato natural es el **promedio aritmético** de ambos:

$$
x = \frac{a + b}{2}.
$$

Este número es racional porque $$ a, b \in \mathbb{Q} $$ y la suma y división entre racionales sigue siendo racional.

**3️⃣ Demostramos que $$ a < \frac{a + b}{2} $$**

Partimos de la desigualdad inicial $$ a < b $$:

$$
a + a < a + b
$$

Sumamos $$ a $$ en ambos lados.  
Luego simplificamos:

$$
2a < a + b
$$

Dividimos por 2 (como 2 > 0, la desigualdad se mantiene):

$$
a < \frac{a + b}{2}
$$

✅ Por lo tanto, el promedio es **mayor que $$ a $$**.

**4️⃣ Demostramos que $$ \frac{a + b}{2} < b $$**

Partimos nuevamente de $$ a < b $$ y ahora sumamos $$ b $$ en ambos lados:

$$
a + b < b + b
$$

Simplificamos:

$$
a + b < 2b
$$

Dividimos por 2:

$$
\frac{a + b}{2} < b
$$

✅ Entonces el promedio es **menor que \( b \)**.

**5️⃣ Conclusión**

Hemos probado que:

$$
a < \frac{a + b}{2} < b
$$

Por lo tanto, el número racional $$ x = \frac{a + b}{2} $$ **cumple** con la condición pedida.

✅ **Resultado final:**

$$
\boxed{x = \frac{a + b}{2}}
$$

es un número racional tal que $$ a < x < b $$.
</details>

---

## Ejercicio 12

Probar que no existe un número racional cuyo cubo sea igual a 2.

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 13

Indique la parte real $$ \text{Re}(z) $$ y la parte imaginaria $$ \text{Im}(z) $$ de los siguientes complejos:

**a)**  $$ z = \sqrt{-49} $$

<details><summary>Respuesta</summary>
</details>

---

**b)**  $$ z = \sqrt{-20} $$

<details><summary>Respuesta</summary>
</details>

---

**c)**  $$ z = \sqrt{-\dfrac{9}{16}} $$

<details><summary>Respuesta</summary>
</details>

---

**d)**  $$ z = -8 $$

<details><summary>Respuesta</summary>
</details>

---

**e)**  $$ z = 7i $$

<details><summary>Respuesta</summary>
</details>

---

**f)**  $$ z = (3 + i) + (5 - 4i)$$

<details><summary>Respuesta</summary>
</details>

---

**g)**  $$ z = 3i - (5 - 2i) $$

<details><summary>Respuesta</summary>
</details>

---

**h)**  $$ z = \dfrac{1 + 3i}{3 - i} $$

<details><summary>Respuesta</summary>
</details>

---

**i)**  $$ z = \dfrac{1 - i}{(1 + i)^2} $$

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 14

La suma de un número complejo y su conjugado es −8 y la suma de sus módulos es 10. De qué números complejos se trata?

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 15

Hallar, si existe, $$ x $$ real tal que $$ \text{Re}(z) = \text{Im}(z) $$ siendo $$ z = \dfrac{x + 2i}{4 - 3i} $$

<details><summary>Respuesta</summary>
</details>

---


## Ejercicio 16

Encontrar, si existe, un valor de $$ k $$ real para que el complejo $$ \frac{2 - (1 + k)i}{1 - ki} $$ *sea un número real.*

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 17

*Calcular las siguientes potencias:*

**a)**  $$ i^{489} $$

<details><summary>Respuesta</summary>
</details>

---

**b)**  $$ -i^{1026} $$

<details><summary>Respuesta</summary>
</details>

---

**c)**  $$(3i)^{168} $$

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 18

*Dados los siguientes números complejos, encontrar la forma más adecuada para realizar las operaciones pedidas:*

$$
\begin{aligned}
z_1&=3+3i &\quad z_2&=-1+i &\quad z_3&=5+4i &\quad z_4&=9 &\quad z_5&=5i \\
z_6&=-7   &\quad z_7&=-4-4i &\quad z_8&=-8i  &\quad z_9&=2-2i &\quad z_{10}&=3-4i
\end{aligned}
$$

**Operaciones:**

- a) $$ z_1+z_7 $$  
- b) $$ z_5 - z_3 $$  
- c) $$ z_9 \cdot z_6 $$  
- d) $$ \dfrac{z_8}{z_{10}} $$  
- e) $$ z_3 + z_6 $$  
- f) $$ z_2 - z_6 $$  
- g) $$ z_3 \cdot z_{10} $$  
- h) $$ z_1^{3} $$  
- i) $$ z_{9}^{9} $$  
- j) $$ z_{5}^{15} $$  
- k) $$ z_{10}^{3} $$

l) Hallar las **raíces cuartas** de $$ z_2 $$.  
m) Hallar las **raíces cúbicas** de $$ z_4 $$.  
n) Hallar las **raíces séptimas** de $$ i $$.

<details><summary>Respuesta</summary>
</details>


