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
- 1574912 * 8 / 1574912 x 4
- 2

> 🔴 Problema:
> Aunque tenemos 8 procesadores, el speedup es solo 2, lo cual es muy bajo. Esto ocurre porque P8, al ser más lento, arruina la eficiencia del paralelismo.

---

</details>

## Final 1

Suponga que N procesos poseen inicialmente cada uno un valor. Se debe calcular
la suma de todos los valores y al finalizar la computación todos deben conocer
dicha suma.
Analice (desde el punto de vista del número de mensajes y la performance global)
las soluciones posibles con memoria distribuida para arquitecturas en Estrella
(centralizada), Anillo Circular, Totalmente Conectada y Árbol

**Arquitectura en estrella (centralizada)**

En este tipo de arquitectura, todos los procesos (*workers*) envían su valor local al procesador central (*coordinador*). Este suma los N datos y reenvía la información de la suma al resto de los procesos.  

Por lo tanto, se ejecutan `2(N-1)` mensajes. Si el procesador central dispone de una primitiva *broadcast*, se reduce a `N` mensajes.  

En cuanto a la performance global, los mensajes al coordinador se envían casi al mismo tiempo. Estos se quedarán esperando hasta que el coordinador termine de computar la suma y envíe el resultado a todos.

```c
chan valor (INT),
resultados[n] (INT suma);

Process P[0]{  # Coordinador, v está inicializado
    INT v;
    INT sum = 0;
    sum = sum + v;

    for (i = 1 to n-1){
        receive valor(v);
        sum = sum + v;
    }

    for (i = 1 to n-1){
        send resultado[i](sum);
    }
}

Process P[i = 1 to n-1]{  # Worker, v está inicializado
    INT v; INT sum;
    send valor(v);
    receive resultado[i](sum);
}
```

**Anillo circular**

Se tiene un anillo donde P[i] recibe mensajes de P[i-1] y envía mensajes a P[i+1]. P[n-1] tiene como sucesor a P[0]. El primer proceso envía su valor local ya que es lo único que conoce.

Este esquema consta de dos etapas:

1. Cada proceso recibe un valor y lo suma con su valor local, transmitiendo la suma local a su sucesor.  
2. Todos reciben la suma global.

P[0] debe ser algo diferente para poder "arrancar" el procesamiento: debe enviar su valor local ya que es el único que conoce. Se requerirán **2(n-1)** mensajes.

A diferencia de la solución centralizada, esta reduce los requerimientos de memoria por proceso, pero tardará más en ejecutarse, por más que el número de mensajes requeridos sea el mismo. Esto se debe a que cada proceso debe esperar un valor para computar una suma parcial y luego enviársela al siguiente proceso; es decir, un proceso trabaja por vez, se pierde el paralelismo.

**Código en C para la implementación en anillo circular**

```c
// Se define un canal de comunicación para intercambiar valores entre procesos
chan valor[n](suma);  

// Proceso P[0]: Actúa como el primer proceso en el anillo
process p[0]{  
    INT v;  // Valor inicial del proceso P[0]
    INT suma = v;  // Inicializa la suma con su propio valor

    send valor[1](suma);  // Envía su valor inicial al siguiente proceso P[1]
    receive valor[0](suma);  // Espera recibir la suma global de vuelta desde el último proceso
    send valor[1](suma);  // Reenvía la suma global a P[1] para que todos la conozcan
}

// Procesos P[i] (para i = 1 hasta n-1): Cada uno recibe, acumula y reenvía la suma
process p[i = 1 to n-1]{  
    INT v;  // Valor inicial del proceso P[i]
    INT suma;  // Variable para almacenar la suma parcial

    receive valor[i](suma);  // Recibe la suma parcial del proceso anterior (P[i-1])
    suma = suma + v;  // Agrega su propio valor a la suma parcial
    send valor[(i+1) mod n](suma);  // Envía la suma parcial al siguiente proceso en el anillo
    receive valor[i](suma);  // Espera recibir la suma global de vuelta en el anillo
    if (i < n-1)  // Si no es el último proceso en la secuencia
        send valor[i+1](suma);  // Reenvía la suma global al siguiente proceso
}
```

---

## Final del 26-02-2025

![image](https://github.com/user-attachments/assets/93626c52-5b27-47b0-870a-8dbe4add0a59)

**Estrella Centralizada**

```c
// Canal para enviar los valores al coordinador
chan valor (INT);

// Canal para enviar el promedio calculado a todos los procesos
resultados[n] (FLOAT promedio);

Process P[0]{  // Coordinador (Proceso central)
    INT v;  // Valor inicial del coordinador
    INT sum = 0;  // Variable para acumular la suma de los valores
    FLOAT promedio;  // Variable para almacenar el promedio

    sum = sum + v;  // El coordinador suma su propio valor primero

    // Recibe los valores de los demás procesos y los acumula en sum
    for (i = 1 to n-1){
        receive valor(v);  // Recibe un valor de un proceso
        sum = sum + v;  // Suma el valor recibido a la suma total
    }

    promedio = sum / n;  // Calcula el promedio dividiendo la suma por N

    // Envía el promedio calculado a todos los procesos
    for (i = 1 to n-1){
        send resultado[i](promedio);  // Envia el promedio a cada proceso worker
    }
}

Process P[i = 1 to n-1]{  // Worker (Procesos trabajadores)
    INT v;  // Valor inicial del proceso worker
    FLOAT promedio;  // Variable para recibir el promedio

    send valor(v);  // Envía su valor al coordinador

    receive resultado[i](promedio);  // Recibe el promedio calculado por el coordinador
}
```

**Anillo Circular**

```c
// Canal para enviar y recibir valores en el anillo
chan valor[n](promedio);

process p[0]{  
    INT v;                  // Valor inicial del proceso P[0]
    INT suma = v;           // Inicializa la suma con su propio valor
    send valor[1](suma);    // Envía su valor inicial al siguiente proceso P[1]

    receive valor[0](suma); // Espera recibir la suma global de vuelta desde el último proceso
    FLOAT promedio = suma / n;  // Calcula el promedio

    send valor[1](promedio); // Reenvía el promedio a P[1] para que todos lo conozcan
}

process p[i = 1 to n-1]{  
    INT v;               // Valor inicial del proceso P[i]
    INT suma;            // Variable para almacenar la suma parcial

    receive valor[i](suma);      // Recibe la suma parcial del proceso anterior (P[i-1])
    suma = suma + v;             // Agrega su propio valor a la suma parcial
    send valor[(i+1) mod n](suma); // Envía la suma parcial al siguiente proceso en el anillo

    receive valor[i](suma);      // Espera recibir la suma global de vuelta en el anillo
    if (i == n-1) {              // Último proceso calcula el promedio
        FLOAT promedio = suma / n;
        send valor[0](promedio); // Envía el promedio de vuelta a P[0]
    }

    receive valor[i](promedio);  // Recibe el promedio final
    if (i < n-1)                 // Si no es el último, lo reenvía al siguiente proceso
        send valor[i+1](promedio);
}
```

---