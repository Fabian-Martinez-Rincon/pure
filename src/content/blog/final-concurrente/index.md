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

---

<div align="center">
<img src="https://github.com/user-attachments/assets/d9e3ea61-bb8c-42d5-8eba-c9fc561e705e" width="400px">

</div>

---

## Final Viejo

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

