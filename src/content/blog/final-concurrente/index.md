---
title: 'Final Programación Concurrente'
publishDate: '2025-02-12'
description: 'Finales de la materia programación concurrente'
heroImage: { src: './thumbnail.jpg', color: '#5F5F5F' }
tags: 
 - Facultad
 - Finales
language: 'Spanish'
---

<div align="center">
<img src="https://github.com/user-attachments/assets/d9e3ea61-bb8c-42d5-8eba-c9fc561e705e" width="400px">

</div>

---

# Posibles Preguntas

![image](https://github.com/user-attachments/assets/6650d0ae-c1b2-4adc-9dba-5d68724bdf49)

<details><summary>Respuesta</summary>

Si el algoritmo se ejecuta secuencialmente se tienen:

**Asignaciones**

- 128^3 + 128^2
- 2097152 + 16384
- 2113536

¿Por qué 128^3 y 128^2?

![image](https://github.com/user-attachments/assets/01115fc1-ec0a-4724-9c8c-e2d4f131e889)

**Sumas**

- 128^3
- 2097152

![image](https://github.com/user-attachments/assets/ae892334-82aa-4884-94d3-e8c1141fe745)


**Productos**
- 128^3
- 2097152

![image](https://github.com/user-attachments/assets/f81d5dd9-7a52-4786-88bd-0723be012499)


</details>


![image](https://github.com/user-attachments/assets/c37c9c7e-c1a1-4ffd-ae67-7d6825e6a457)

<details><summary>Respuesta</summary>

Si tenemos 8 procesos cada uno con un strip de 16 (128/8) los cálculos de tiempo quedarían para cada proceso como:

- La matriz de `C` es de tamaño `128x128`
- La estrategia paralela divide las **filas** de `C` entre **8 procesos**
- Y como hay `128` filas y `P=8`, cada proceso trabaja sobre `128/8` = `16 filas`

**Asignaciones con 8 procesos**

Anteriormente calculabamos las asignaciones de esta forma `128^3 + 128^2`, ahora vamos a hacer exactamente los mismo pero lo dividimos por la cantidad de procesos que tenemos

- Con `P=1` -> `128^3` + `128^2`
- Con `P=8` -> `(128^3)/8` + `(128^2)/8`

`(128^3)/8` + `(128^2)/8` <=> `128^2 * 16` + `128 * 16`

Podes usar la cuenta que quieras, son equivalentes, el resultado final te tendria que dar lo siguiente

- 262144 + 2048
- 264192

**Sumas**

- `(128^3)/8` <=> `128^2 * 16`
- 262144

**Productos**

- `(128^3)/8` <=> `128^2 * 16`
- 262144

</details>

![image](https://github.com/user-attachments/assets/8d2b8ec4-75e2-4888-bb95-823827ce131f)

<details><summary>Respuesta</summary>

**Problema Inicial: Distribución equitativa pero ineficiente**

Inicialmente, cada procesador **P1** a **P8** procesa la misma cantidad de filas de la matriz. Dado que la matriz es de tamaño **128×128**, se divide en **8 partes iguales**, lo que significa que cada procesador maneja **16 filas**.

> P1 a P8 tienen igual número de operaciones.
> Es como tener 8 autos y a uno le faltan dos ruedas

- **Asignaciones** -> `264192`
- **Sumas** -> `262144`
- **Producto** -> `262144`

Los tiempos de ejecución para **P1** a **P7** son:

- T(P1-P7)
- (`264192` x 1) + (`262144` x 2) + (`262144` x 3)
- `264192` + `524288` + `786432` = 1574912

Sin embargo, P8 es 4 veces más lento, por lo que su tiempo total de ejecución es

- T(P8)
- 1574912 x 4
- `6299648`

Como el tiempo de ejecución total en paralelo está determinado por el procesador más lento, el tiempo total de ejecución es:

Cálculo del speedup inicial:

T(Secuencial) = 1574912 * 8  -> 12.599.296

- Speedup
- T(secuencial)/ T(paralelo)
- (1574912 * 8) / (1574912 x 4)
- 2

> 🔴 Problema:
> Aunque tenemos 8 procesadores, el speedup es solo 2, lo cual es muy bajo. Esto ocurre porque P8, al ser más lento, arruina la eficiencia del paralelismo.

**Objetivo del Balance de Carga**

La solución al problema es redistribuir la carga de trabajo para que `P8` tenga menos filas, y así termine aproximadamente en el mismo tiempo que `P1-P7`.

Queremos encontrar cuántas filas `𝑓` debe procesar `P8` para que su tiempo total sea igual al tiempo de ejecución de `P1-P7`.

Sabemos que el tiempo de ejecución de un procesador depende del número de filas que procesa.

Como `P8` es `4` veces más lento, su tiempo de ejecución será:

> Formula original n=128/8  -> 16 Filas

![image](https://github.com/user-attachments/assets/2f0c423e-94bc-41df-82d1-8f086635ed76)

- Calculamos f
- f/16 x 4 = 1
- f x 4 = 16
- f = 16/4
- f = 4

> Por lo tanto, P8 debe procesar solo 4 filas.

**Redistribución de Filas en P1-P7**

Ahora que sabemos que P8 debe procesar 4 filas, debemos redistribuir las filas restantes entre los otros procesadores.

- Total de filas en la matriz: 128
- Filas asignadas a P8: 4
- Filas restantes para los demás procesadores:

128 − 4 = 124

Distribuimos estas filas entre los 7 procesadores restantes (P1-P7):

- `124/7` = 17.71 ≈ 18

Creeeeo que esta bien, aca esta otra respuesta

![image](https://github.com/user-attachments/assets/5efe7df8-630b-4df3-81f1-96fb8f792f80)

</details>

---

![image](https://github.com/user-attachments/assets/86e7c19f-e61d-4b44-9fb1-75a1a161a54d)

<details><summary>Respuesta</summary>

```
Co
    X := X - Z
    Z := Z * 2
    Y := Z + 4
Oc
```

**📌 Recordatorio: ¿Qué es ASV?**

Una asignación `x := e` **cumple la propiedad de ASV** si:

- ✅ (1) `e` contiene **a lo sumo una referencia crítica**, **y** la variable `x` (la que se asigna) **no es usada en otros procesos**,  
**o**
- ✅ (2) `e` **no contiene ninguna referencia crítica**.


**🧠 ¿Qué es una *referencia crítica*?**

Es cualquier acceso (lectura o escritura) a una variable **compartida entre procesos concurrentes**.  
Si una variable aparece en más de una instrucción dentro del bloque `Co ... Oc`, entonces es **crítica**.


**`1)`** `X := X - Z`

```
Co
    X := X - Z
    Z := Z * 2
    Y := Z + 4
Oc
```

- `Variables involucradas:`
    - Lee `X` y `Z`
    - Asigna a `X`
- **`¿Referencias críticas?`**
    - `Z` también aparece en otras asignaciones (`Z := Z * 2`, `Y := Z + 4`) → **Sí**, es crítica  
    - `X` **no aparece en ninguna otra instrucción** → **No es crítica**
- **`Evaluación ASV`**:
    - Tiene **una sola referencia crítica** (`Z`)
    - La variable asignada (`X`) **no se usa en otro proceso**

✅ **Cumple ASV**


**`2)`** `Z := Z * 2`

```
Co
    X := X - Z
    Z := Z * 2
    Y := Z + 4
Oc
```

- **`Variables involucradas:`**
    - Lee y escribe `Z`
- **`¿Referencias críticas?`**
    - `Z` aparece también en:
      - `X := X - Z`
      - `Y := Z + 4`
    - **Z es usada en múltiples procesos** → **es crítica**
    - Además, se está modificando en esta instrucción → escritura
- **`Evaluación ASV`**
    - Tiene **una referencia crítica** (`Z`)
    - La variable asignada (`Z`) **sí se usa en otros procesos**

❌ **No cumple ASV**

**`3)`** `Y := Z + 4`

 Variables involucradas:
- Lee `Z`
- Asigna a `Y`

 ¿Referencias críticas?
- `Z` es crítica (como ya dijimos)
- `Y` **no aparece en ningún otro proceso**

 Evaluación ASV:
- Tiene **una sola referencia crítica** (`Z`)
- La variable asignada (`Y`) **no se usa en otros procesos**

✅ **Cumple ASV**

| Instrucción      | ¿Cumple ASV? | Justificación                                                                 |
|------------------|--------------|--------------------------------------------------------------------------------|
| `X := X - Z`     | ✅ Sí         | Tiene una única referencia crítica (`Z`), y `X` no es usada en otros procesos |
| `Z := Z * 2`     | ❌ No         | Tiene referencia crítica (`Z`), y `Z` es usada en otros procesos              |
| `Y := Z + 4`     | ✅ Sí         | Tiene una única referencia crítica (`Z`), y `Y` no es usada en otros procesos |

> A chequear

</details>

![image](https://github.com/user-attachments/assets/052eabe9-b404-42c7-8227-1ef028305441)

<details><summary>Respuesta</summary>

```
x = 3; y = 2; z = 5;
Co
    X := X - Z
    Z := Z * 2
    Y := Z + 4
Oc
```

| Orden de ejecución | Operaciones realizadas (con valores) | Resultado final `(X, Z, Y)` |
|--------------------|---------------------------------------|------------------------------|
| **T1 → T2 → T3**   | `X = 4 - 3 = 1`<br>`Z = 3 * 2 = 6`<br>`Y = 6 + 4 = 10` | **(1, 6, 10)** |
| **T1 → T3 → T2**   | `X = 4 - 3 = 1`<br>`Y = 3 + 4 = 7`<br>`Z = 3 * 2 = 6` | **(1, 6, 7)** |
| **T2 → T1 → T3**   | `Z = 3 * 2 = 6`<br>`X = 4 - 6 = -2`<br>`Y = 6 + 4 = 10` | **(-2, 6, 10)** |
| **T2 → T3 → T1**   | `Z = 3 * 2 = 6`<br>`Y = 6 + 4 = 10`<br>`X = 4 - 6 = -2` | **(-2, 6, 10)** |
| **T3 → T1 → T2**   | `Y = 3 + 4 = 7`<br>`X = 4 - 3 = 1`<br>`Z = 3 * 2 = 6` | **(1, 6, 7)** |
| **T3 → T2 → T1**   | `Y = 3 + 4 = 7`<br>`Z = 3 * 2 = 6`<br>`X = 4 - 6 = -2` | **(-2, 6, 7)** |



- `X := 4 - Z` → depende del valor de `Z` al momento de ejecutar T1
- `Y := Z + 4` → depende del valor de `Z` al momento de ejecutar T3
- `Z := Z * 2` → siempre lleva `Z` de 3 a 6

El valor de Z es siempre el mismo ya que no posee ninguna referencia crítica. Los valores de X e Y se ven afectados por la ejecución de T2 ya que sus resultados dependen de la referencia que hacen a la variable Z que es modificada. Entonces, si T1 y T3 se ejecutan antes que T2 ambas usarán el valor inicial de Z que es 3 obteniendo los resultados X=1 e Y=7; ahora si T2 se ejecuta antes que las demás los resultados serán X=-2 e Y=10 y por último, tenemos los casos en que T2 se ejecuta en medio con T1 antes y T3 después o con T3 antes y T1 después.

- Nota 1: las instrucciones NO SON atómicas.
- Nota 2: no es necesario que liste TODOS los resultados.

> Se podria consultar esto

</details>

---

![alt text](image.png)

<details><summary>Respuesta</summary>

Siendo:
```
A: x = y * z  Tiene 2 referencias críticas (a y, a z), por lo tanto no cumple ASV. (además x es leída en en C.)
B: z = z * 2 No tiene referencia crítica y es leída por otro (en A se lee z), por lo tanto cumple ASV.
C: y = y + 2x Tiene 1 referencia crítica (a x) y además es leída por otro proceso (en A se lee y), por lo
tanto no cumple ASV.
```

> A chequear
</details>