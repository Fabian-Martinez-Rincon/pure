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
<img src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExc3N6bmdxMno3ZXd2d205a2ZocGE5aWptZTZkdHhoNmZhbjYyajAwNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l0KRxpBreHTHman2U/giphy.gif" width="400px">

</div>


## Final

**Pregunta 1**

<details><summary>a) ¿A qué se denomina propiedad de programa? ¿Qué son las propiedades de vida y
seguridad? Ejemplifique.</summary>

Una propiedad de un programa es un atributo que es verdadero en cada posible historia de
ese programa. Toda propiedad interesante puede ser formulada en términos de dos clases de
propiedades:

Seguridad y vida.

- **Una propiedad de seguridad** asegura que nada malo ocurre durante la ejecución;
- **Una propiedad de vida** afirma que algo bueno eventualmente ocurre.

Una propiedad de vida asegura que eventualmente ocurre algo bueno con una actividad. (progresa, no hay deadlocks) (Una falla de vida indica que se deja de ejecutar).
En los programas secuenciales, la propiedad de seguridad clave es que el estado final es correcto, y la clave de la propiedad de vida es terminación. Estas propiedades son igualmente importantes para programas concurrentes.

Ejemplos de propiedad de seguridad:
- **Exclusión mutua**: A lo sumo un proceso está en su SC.
- **Ausencia de Deadlock (Livelock)**: si 2 o más procesos tratan de entrar a sus SC, al menos uno tendrá éxito.
- **Ausencia de Demora Innecesaria**: si un proceso trata de entrar a su SC y los otros están en sus SNC o terminaron, el primero no está impedido de entrar a su SC.

Ejemplos de propiedad de vida:
- **Eventual Entrada**: un proceso que intenta entrar a su SC tiene posibilidades de hacerlo (eventualmente lo hará)..
- **Bloqueos temporarios**: una operación es demorada porque otra está ejecutando código crítico, aceptables por un cierto período.
- **Espera**: puede darse por un evento, mensaje o condición que ya produjo otro proceso.
- **Input**: un proceso espera entrada desde otro proceso/device.
- **Contención de CPU**: el procesador está ocupado por otros procesos.
</details>

<details><summary>b) Defina fairness. Relacione dicho concepto con las políticas de scheduling.</summary>

La mayoria de las propiedades de vida dependen de **Fairness**, la cual trata de garantizar que los procesos tengan chance de avanzar, sin importar lo que hagan los otros procesos.

Recordemos que una acción atómica en un proceso es elegible si es la próxima acción atómica en el procesos que será ejecutado. Cuando hay varios procesos, hay varias acciones atómicas elegibles. **Una política de scheduling** determina cuál será la próxima en ejecutarse.

Las acciones atómicas pueden ser ejecutadas en paralelo solo si no interfieren, la ejecución paralela puede ser modelizada por ejecución serial, interleaved.

Una política de scheduling de bajo nivel, tal como la política de alocación de procesador en un sistema operativo, concierne a la performance y utilización del hardware. Esto es importante, pero igualmente importante son los atributos globales de las políticas de scheduling y sus efecto sobre la terminación y otras propiedades de vida de los programas concurrentes.

**Fairness Incondicional:**

Una política de scheduling es incondicionalmente fair si toda acción atómica incondicional que es elegible eventualmente es ejecutada. Cuando un programa contiene acciones atómicas condicionales, necesitamos hacer suposiciones más fuertes para garantizar que los procesos progresarán. Esto es porque una acción atómica condicional, aún si es elegible, es demorada hasta que la guarda es true

**Fairness Débil:**

Una política de scheduling es débilmente fair si es incondicionalmente fair y toda acción atómica condicional que se vuelve elegible eventualmente es ejecutada si su guarda se convierte en true y de allí en adelante permanece true.

En síntesis, si `< await B > S >` es elegible y B se vuelve true y permanece true, entonces la acción atómica eventualmente se ejecuta. Round robin y timeslicing son políticas débilmente fair si todo proceso tiene chance de ejecutar. Esto es porque cualquier proceso demorado eventualmente verá que su condición de demora es true.

Sin embargo, esto no es suficiente para asegurar que cualquier sentencia await elegible eventualmente se ejecuta. Esto es porque la guarda podría cambiar el valor (de false a true y nuevamente a false) mientras un proceso está demorado. En este caso, necesitamos una política de scheduling más fuerte.

**Fairness Fuerte:**

Una política de scheduling es fuertemente fair si es incondicionalmente fair y toda acción atómica condicional que se vuelve elegible eventualmente es ejecutada si su guarda es true con infinita frecuencia.

Una guarda es true con infinita frecuencia si es true un número infinito de veces en cada historia de ejecución de un programa (non terminating). Para ser fuertemente fair, una política no puede considerar seleccionar sólo una acción cuando la guarda es false; debe seleccionar alguna vez la acción cuando la guarda es true.

</details>

**Pregunta 2**

<details><summary>a) ¿Cuáles son y describa las propiedades que debe cumplir un protocolo de E/S a una sección crítica?</summary>

- **Exclusión mutua:** A lo sumo un proceso está en su SC.
- **Ausencia de Deadlock (Livelock):** si 2 o más procesos tratan de entrar a sus SC, al menos uno tendrá éxito.
- **Ausencia de Demora Innecesaria:** si un proceso trata de entrar a su SC y los otros están en sus SNC o terminaron, el primero no está impedido de entrar a su SC.
- **Eventual Entrada:** un proceso que intenta entrar a su SC tiene posibilidades de hacerlo (eventualmente lo hará).
</details>

<details><summary>b) ¿Cuáles son los defectos que presenta la sincronización por busy waiting? Diferencie esta situación respecto de los semáforos.</summary>

Los protocolos de **sincronización** que usan solo **busy waiting** pueden ser difíciles de diseñar, entender y probar su corrección. La mayoría de estos protocolos son bastante complejos, no hay clara separación entre las variables usadas para sincronización y las usadas para computar resultados. Una consecuencia de estos atributos es que se debe ser muy cuidadoso para asegurar que los procesos se sincronizan correctamente.

Otra deficiencia es que es ineficiente cuando los procesos son implementados por multiprogramación. Un procesador que está ejecutando un proceso **“spinning”** podría ser empleado más productivamente por otro proceso. Esto también ocurre en un multiprocesador pues usualmente hay más procesos que procesadores.

Dado que la **sincronización** es fundamental en los programas concurrentes, es deseable tener herramientas especiales que ayuden en el diseño de protocolos de sincronización correctos y que puedan ser usadas para bloquear procesos que deben ser demorados. **Los Semáforos** son una de las primeras de tales herramientas y una de las más importantes. Hacen fácil proteger SC y pueden usarse de manera disciplinada para implementar sincronización por condición.

**Los semáforos** pueden ser implementados de más de una manera. En particular, pueden implementarse con **busy waiting**, pero también interactuando con un proceso **scheduler** para obtener sincronización **sin busy waiting**.

El concepto de **semáforo** es motivado por una de las maneras en que el tráfico de trenes es sincronizado para evitar colisiones: es una flag de señalización que indica si la pista está desocupada o hay otro tren. Los semáforos en los programas concurrentes proveen un mecanismo de señalización básico y se usan para implementar exclusión mutua y sincronización por condición.

Usando variables de tipo semáforo se distingue claramente entre los tipos de variables para sincronizar y para computar resultados.

</details>

<details><summary>c) Explique la semántica de la instrucción de grano grueso AWAIT y su relación con instrucciones tipo Test & Set o Fetch & Add.</summary>

Si una expresión o asignación no satisface ASV con frecuencia es necesario ejecutarla atómicamente.

En general, es necesario ejecutar secuencias de sentencias como una única acción atómica


```
<await (B) S;> se utiliza para especificar sincronización.
```

La expresión booleana B especifica una condición de demora. S es una secuencia de sentencias que se garantiza que termina. Se garantiza que B es true cuando comienza la ejecución de S. Ningún estado interno de S es visible para los otros procesos

Sentencia con alto poder expresivo, pero el costo de implementación de la forma general de await (exclusión mutua y sincronización por condición) es alto

- **Await general**: `await (s>0) s=s 1;`
- **Await para exclusión mutua**: `x = x + 1; y = y + 1`

Ejemplo await para sincronización por condición: await (count > 0)

Si B satisface ASV, puede implementarse como busy waiting o spin loop

```
do (not B) skip od
(while (not B); )
```

**Solución de “grano fino”: Spin Locks**

- **Objetivo**: hacer “atómico” el await de grano grueso.
- **Idea**: usar instrucciones como `Test & Set (TS)`, `Fetch & Add (FA)` o `Compare & Swap`, disponibles en la mayoría de los procesadores

**¿Como funciona Test & Set?**

```
bool TS (bool ok);
{ 
    < bool inicial = ok;
    ok = true;
    return inicial; >
}
```

<table><td>

```javascript
bool lock = false;
process SC [i=1..n] {
    while (true){
        await (not lock) lock= true;
        sección crítica;
        lock = false;
        sección no crítica;
    }
}
```
</td><td>

```javascript
bool lock=false;
process SC[i=1 to n]{
    while (true){
        while (TS(lock)) skip ;
        sección crítica;
        lock = false;
        sección no crítica;
    }
}
```

</td></table>

Solución tipo **“spin locks”**: los procesos se quedan iterando (spinning) mientras esperan que se limpie lock.

Cumple las 4 propiedades si el scheduling es fuertemente fair. Una política débilmente fair es aceptable (rara vez todos los procesos están simultáneamente tratando de entrar a su SC).

</details>

**Pregunta 3**

<details><summary>Defina el problema general de alocación de recursos y su resolución mediante una política SJN(Shortest Job Next).</summary>

**ALOCACION DE RECURSOS**

La alocación de recursos es el problema de decidir cuándo se le puede dar a un proceso acceso a un recurso. En programas concurrentes, un recurso es cualquier cosa por la que un proceso podría ser demorado esperando adquirirla. Esto incluye entrada a una SC, acceso a una BD, un slot en un buffer limitado, una región de memoria, el uso de una impresora, etc.

Ya hemos examinado varios problemas de alocación de recursos específicos. En la mayoría, se empleó la política de alocación posible más simple: si algún proceso está esperando y el recurso está disponible, se lo aloca.

Por ejemplo, la solución al problema de la SC aseguraba que se le daba permiso para entrar a algún proceso que estaba esperando; no intentaba controlar a cuál proceso se le daba permiso si había una elección. De manera similar, la solución al problema del buffer limitado no intentaba controlar cuál productor o cuál consumidor eran el próximo en acceder al buffer. La política de alocación más compleja que consideramos fue en el problema de lectores/escritores.

Sin embargo, nuestra atención estuvo en darle preferencia a clases de procesos, no a procesos individuales.

Esta sección muestra cómo implementar políticas de alocación de recursos generales y en particular muestra cómo controlar explícitamente cuál proceso toma un recurso cuando hay más de uno esperando.

Primero describimos el patrón de solución general. Luego implementamos una política de alocación específica (shortest job next). La solución emplea la técnica de passing the baton.

También introduce el concepto de semáforos privados, lo cual provee la base para resolver otros problemas de alocación de recursos.

**Definición del problema y Patrón de solución general**

En cualquier problema de alocación de recursos, los procesos compiten por el uso de unidades de un recurso compartido. Un proceso pide una o más unidades ejecutando la operación request, la cual con frecuencia es implementada por un procedure.

Los parámetros a request indican cuantas unidades se requieren, identifican alguna característica especial tal como el tamaño de un bloque de memoria, y dan la identidad del proceso que pide. Cada unidad del recurso compartido está libre o en uso. Un pedido puede ser satisfecho cuando todas las unidades del recurso compartido están libres.

Por lo tanto request se demora hasta que esta condición es true, luego retorna el número requerido de unidades. Después de usar los recursos alocados, un proceso los retorna al pool de libres ejecutando la operación release.

Los parámetros a release indican la identidad de las unidades que son retornadas. Ignorando la representación de las unidades del recurso, las operaciones request y release tienen la siguiente forma general:

- **request(parámetros):** á await request puede ser satisfecho ® tomar unidades ñ
- **release(parámetros):** á retornar unidades ñ

Las operaciones necesitan ser atómicas dado que ambas necesitan acceder a la representación de las unidades del recurso. Siempre que esta representación use variables diferentes de otras variables del programa, las operaciones aparecerán como atómicas con respecto a otras acciones y por lo tanto pueden ejecutar concurrentemente con otras acciones.

Este patrón de solución general puede ser implementado usando la técnica de passing the baton. En particular, request tiene la forma de F2 de modo que es implementada por un fragmento similar a (4.7):

**request(parámetros):**

```
P(e)
if request no puede ser satisfecho ® DELAY **fi**
toma unidades
SIGNAL`
```

Similarmente, release la forma de F1 de modo que es implementada por un fragmento de programa similar a (4.6):

Release(parámetros)

```
P(e)
retorna unidades
SIGNAL
```

</details>

<details><summary>¿Minimiza el tiempo promedio de espera? ¿Es fair? Si no lo es, plantee una alternativa que lo sea.</summary>

</details>