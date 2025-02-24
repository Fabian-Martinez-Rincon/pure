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

Esta respuesta es excesivamente larga, voy a poner las imagenes

![image](https://github.com/user-attachments/assets/47b48450-e9b1-403a-b400-be247f879696)
![image](https://github.com/user-attachments/assets/44e1df12-5208-4dba-ab73-c166291a594e)
![image](https://github.com/user-attachments/assets/c6120641-2459-431a-8d94-0cf3730fc65d)
![image](https://github.com/user-attachments/assets/dac52897-cf08-4929-9cdb-3a08ec93e811)
![image](https://github.com/user-attachments/assets/d5b65aa7-5f5d-4af8-9a4f-8cabe8124b33)
![image](https://github.com/user-attachments/assets/e3d311fe-3e1f-430c-8895-e78f93488232)
![image](https://github.com/user-attachments/assets/b70d1a7e-bd1f-41b7-9384-624f2df07dc2)
![image](https://github.com/user-attachments/assets/8c0e809f-b826-4043-bb2a-445fb7b42cfc)
![image](https://github.com/user-attachments/assets/80c69d67-1306-4740-91f9-872dc6e3b6c6)
![image](https://github.com/user-attachments/assets/167b7ad2-9f7e-4803-8c37-2e31780af86b)
![image](https://github.com/user-attachments/assets/882f605c-10f8-47d6-b3b5-4b909c308e07)
![image](https://github.com/user-attachments/assets/31b8e867-576c-4ab1-af48-ce12c4c7fb4f)
![image](https://github.com/user-attachments/assets/426a7baf-e99b-4a76-9170-700c82813e68)
![image](https://github.com/user-attachments/assets/69a96433-a1ea-40c9-88fc-405fde4990a3)

</details>

<details><summary>¿Minimiza el tiempo promedio de espera? ¿Es fair? Si no lo es, plantee una alternativa que lo sea.</summary>

Minimiza el tiempo promedio de espera pero no es fair, ya que pueden llegar procesos de mayor duración que van quedando relegados por el scheduler a la hora de la elección del siguiente proceso, y viene siempre un proceso nuevo más corto que le gana la posición y lo deja relegado haciéndole inanición.

Para evitar la inanición se plantea una alternativa fair que es igual a SJN agregando la técnica de Aging. Esta técnica toma en cuenta los tiempos de cada proceso en espera para considerar si un proceso que lleva más tiempo en el CPU pero su trabajo es más largo es elegido sobre otro proceso de más corta duración que acaba de entrar en la disputa por la CPU. Suele contar los ciclos de espera.

**Wiki**: La técnica de aging es el proceso de aumentar gradualmente la prioridad de un proceso, en función de su tiempo de espera. El aging se puede utilizar para reducir la inanición de procesos de baja prioridad. El aging se utiliza para garantizar que los procesos en el menor nivel de las colas finalmente completen su ejecución.

</details>

**Pregunta 4**

<details><summary> En qué consiste la técnica de “passing the baton”? ¿Cuál es su utilidad?</summary>

Esta técnica se llama passing the baton por la manera en que los semáforos son señalizados.

Cuando un proceso está ejecutando dentro de una región crítica, podemos pensar que mantiene el baton que significa permiso para ejecutar. Cuando ese proceso alcanza un fragmento SIGNAL, pasa el baton a otro proceso. Si algún proceso está esperando una condición que ahora es verdadera, el baton es paso a tal proceso, el cual a su turno ejecuta la región crítica y pasa el baton a otro proceso. Cuando ningún proceso está esperando una condición que es true, el baton es pasado al próximo proceso que trata de entrar a su región crítica por primera vez.

Esta técnica es lo suficientemente poderosa para implementar cualquier sentencia await

</details>

<details><summary>Aplique este concepto a la resolución del problema de lectores y escritores.</summary>

![image](https://github.com/user-attachments/assets/db9747f6-f1c6-4d0a-bf0d-915c5e2f548d)
![image](https://github.com/user-attachments/assets/034bdc11-ee93-4a7d-bd8b-110b02f3a6b7)
![image](https://github.com/user-attachments/assets/e1ab0c0c-9042-497d-baf1-1dfb0adc410e)
![image](https://github.com/user-attachments/assets/355ce1e6-dd0d-4b11-88f7-2c63cfa7f43b)
![image](https://github.com/user-attachments/assets/2a46c7ae-bfb5-470c-a1cc-f49b59a2fe14)
![image](https://github.com/user-attachments/assets/6991b21b-f157-40af-ba8a-aad22d1274df)
![image](https://github.com/user-attachments/assets/3552cb5b-ecd1-455c-9b1f-63df809c3fcb)
</details>

<details><summary>¿Qué relación encuentra con la técnica de “passing the condition”?</summary>

Passing the condition es una técnica utilizada en monitores donde un proceso pasa una condición implícitamente a un proceso que está demorado en espera de esa condición sin que los demás procesos se perciban de ello.

En la técnica passing the baton se consigue despertar a un proceso de un determinado tipo si se comprueba que la condición por la que estaba esperando es verdadera.

De alguna manera, es como si se ocultara a los otros procesos que el baton a cambiado de dueño. Con “passing the condition” pasa algo similar ya que se consigue despertar a un proceso en particular pasándole la condición que se ha vuelto verdadera al proceso que se va a despertar. Al no hacer esta condición visible, sólo el proceso al que va a despertarse puede verla.

</details>

<details><summary>Utilice la técnica de “passing the condition” para implementar un semáforo fair usando monitores.</summary>

![image](https://github.com/user-attachments/assets/7e039698-9345-4956-980d-825dbc43f93c)
![image](https://github.com/user-attachments/assets/949b853f-b977-473c-bbd3-b12999ed096e)
![image](https://github.com/user-attachments/assets/b33769ea-a7a7-4aae-ab97-9ed79041e392)

</details>

**Pregunta 5**

<details><summary>Explique el concepto de broadcast y sus dificultades de implementación en un ambiente distribuido, con mensajes sincrónicos y asincrónicos.</summary>

```
Algoritmos broadcast
Permiten alcanzar una información global en una arquitectura distribuida.
Sirven para toma de decisiones descentralizadas.
```
> fuente: nuestra brillantez

</details>