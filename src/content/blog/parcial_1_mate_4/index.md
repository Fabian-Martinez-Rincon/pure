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

*Probar que no hay enteros, simultáneamente, pares e impares.*

<details><summary>Respuesta</summary>


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

¿Cuál es el resto si se lo divide por 35 ?

<details><summary>Respuesta</summary>

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

---

## Ejercicio 5

Convertir los siguientes números de base 10 a base 8:
- (a) 98
- (b) 44
- (c) 20

---

## Ejercicio 6

Calcular el máximo común divisor entre:

- i) (16, 24) 
- ii) (70, 50) 
- iii) (121, 88)
- iv) (−90, 90)
- v) (980, 224)

---

## Ejercicio 7

*Probar que si \( a \) y \( b \) son enteros:*


**(a)**  $$a + b \ \text{es coprimo con} \ a$$

**(b)**  $$\text{Si } a \text{ es no nulo, } (a, 0) = |a|$$

**(c)**  $$(a, b) = 1 \ \text{entonces} \ ma + nb = k, \ \text{con } m, n, k \in \mathbb{Z}$$

---

## Ejercicio 8

Hallar  $$mcd(5k + 3, 3k + 2) $$, para cualquier k entero

---

## Ejercicio 9

Sean $$ ( a, b \in \mathbb{Z} ) $$ y sea $$ p $$ primo. Demostrar que si $$ ( p \mid ab ) $$ entonces $$ ( p \mid a ) $$ ó $$ ( p \mid b ) $$.

Mostrar que esto no se cumple si $$ p $$ no es primo.

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 10

Hallar, si existe, un número entero $$ q $$ tal que $$ 7290q $$ es el cubo de un entero.

<details><summary>Respuesta</summary>
</details>

---

## Ejercicio 11

Demostrar que dados $$ a $$ y $$ b $$ en $$ \mathbb{Q} $$ tales que $$ a < b $$, existe otro número racional $$ x $$ tal que
$$ a < x < b $$.

<details><summary>Respuesta</summary>
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


