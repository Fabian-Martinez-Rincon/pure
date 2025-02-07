---
title: 'Final de Arquitectura de Computadoras'
publishDate: 2025-02-06
description: 'Material para el final de arquitectura de Computadoras UNLP'
heroImage: { src: './thumbnail.jpg', color: '#37B4E3' }
tags: 
    - certificacion
language: 'Spanish'
category: certificacion
---

# Clases

Link de donde me mire todas las clases [Drive](https://drive.google.com/drive/folders/1xNWfH0CDXUGWf-5Ul0EFcQn47hbeB1sL)

## Clase 1 y 2 Subrutinas

- [Clase 1 Subrutinas](https://drive.google.com/file/d/183v4LEjKWQxPJM05hJLrN3OkRlwL02Lh/view?usp=sharing)
- [Clase 2 Subrutinas](https://drive.google.com/file/d/1GSLI5encA4WBF0caLYn-W8uuvWz7DD1N/view?usp=sharing)

### Clase 1 Pasaje de Parametros

<details><summary>Subrutinas</summary>

![image](https://github.com/user-attachments/assets/1799e09c-d06c-4650-9a22-f8fc19dcf50a)
![image](https://github.com/user-attachments/assets/7503758a-0b59-4916-90e3-6b452f410d73)
</details>

<details><summary>Pasaje de parámetros a subrutinas</summary>

![image](https://github.com/user-attachments/assets/f3793408-5107-4696-8dae-9e8bfb64f94a)
![image](https://github.com/user-attachments/assets/ca6619f1-c536-4c25-acd0-23c49c2c8a71)
![image](https://github.com/user-attachments/assets/c70deab6-df4a-4c4d-909c-77cb7d7e106d)
</details>

<details><summary>¿Dónde se pasan los parámetros?</summary>

![image](https://github.com/user-attachments/assets/36907403-3668-41d9-8df8-f125c5c20764)
![image](https://github.com/user-attachments/assets/fb1164d7-d1aa-4ffa-93a2-9f969826d262)
</details>

<details><summary>Funcionamiento de la Pila</summary>

![image](https://github.com/user-attachments/assets/8a744875-f2d2-4b7c-b03c-1396d0101840)
</details>

<details><summary>Operaciones de apilas/desapilar</summary>

![image](https://github.com/user-attachments/assets/e856a3ba-af50-477c-af2a-814eb480b6ca)
![image](https://github.com/user-attachments/assets/db6962b8-7679-46d6-b15b-334971560a84)
![image](https://github.com/user-attachments/assets/09e1339f-95c0-4159-a4ea-fcb19880f23d)
![image](https://github.com/user-attachments/assets/219f2717-372c-4864-b7e0-adddc59c0549)
![image](https://github.com/user-attachments/assets/ab6a30d9-ea3f-4781-8e79-04763d86742f)
</details>

<details><summary>Llamada al procedimiento y pasaje de parámetros por pila</summary>

![image](https://github.com/user-attachments/assets/e907c2c6-6800-4501-b7c5-4603ceba1f87)
![image](https://github.com/user-attachments/assets/0938db42-f32d-4cf5-aa8d-5b22999e1d45)
![image](https://github.com/user-attachments/assets/90d68170-cf68-42f5-a09d-261a77529a29)
</details>

---

## Clase 3 Interrupciones

- [Clase 3 Interrupciones](https://drive.google.com/file/d/1GSLI5encA4WBF0caLYn-W8uuvWz7DD1N/view?usp=sharing)

## Clase 4 y 5 ES

- [Clase 4](https://drive.google.com/file/d/1ldWAxzR_vgMQoapMfn910WXMGsTgeVVg/view?usp=sharing)
- [Clase 5]()

---

# Parametros e Interrupciones

> @carolina

`1)` Que métodos como pasaje de parametros podemos utilizar en una computadora?

> Pila, Memoria y Registro

Via registros:

Para pasar los parametros se usan los registros del procesador. Su principal limitación son los registros disponibles, es importante documentar cuales son los registros que estamos usando para evitar conflictos

Via Memoria

Los parametros se almacenan en un area difinida en la memoria RAM, es util cuando se deben pasar grandes cantidades de datos, pero es dificil de estandarizar. 

Via PILA/STACK

Los parametros se colocan en la pila. Es el metodo mas utilizado, no depende ni de la memoria ni de los registros, hay que saber bien como utilizarlo ya que la pila es usada tanto por el sistema como por los programas del usuario.


o

Explique los métodos de pasaje de argumentos a procedimientos o funciones.

---

`2)` Explique características y tratamiento de interrupciones múltiples.

Las interrupciones multiples es cuando se reciben varias interrupciones al mismo tiempo.

Son 3 caracteristicas
1) Prioridad de interrupciones: Las interrupciones suelen tener una prioridad. Esto permite que el sistema permita decidir cual interrupcion manejar primero en caso de que ocurran multiples interrupciones.
2) Mascara de Interrupciones: Algunos sistemas permiten desactivar temporalmente interrupciones (GENERALMENTE LAS DE MENOR PRIORIDAD) Utilizando las mascaras de interrupciones, esto ayuda a que las interrupciones de mayor prioridad no sean interrumpidad con las de mayor prioridad

> Gerarquia de interrupciones: Enmascarables y no Enmascarables, Enmascarables pueden ser ignoradas (de baja prioridad) y las no Enmascarables no se pueden ignorar y son de alta prioridad

3) Nivel de anidación: El sistema debe ser capa de manejar nivel de anidación. Si esta atendiendo una interrupcion y ocurre otra de mayor prioridad la interrupcion actual se suspende temporalmente, el sistema atiende la nueva interrupcion y al finalizar regresan para continuar con la interrupcion inicial.
> Tratamiento: Se puede atender una interrupcion e inhabilitar a las demas con el uso de mascaras de interrupciones, de esta manera las interrupciones se manera de forma secuencial.
> Tambien: Es posible asignar prioridades a las interrupciones. Dependiendo del nivel de prioridad el sistema debe respetar su atención.
> Si se esta manejado una interrupcion de menor prioridad y llega una de mayor prioridad se debe atender primero la de mayor prioridad. Una vez finalizada el procesador retoma la atención de la interrupcion previa.

---

`3)` Describir el mecanismo de interrupciones

1) Generar la interrupción: Un disposito del sistema detecta un evento que requiere atención, por lo que se genera una señal de interrupción.
2) Interrupcion del procesador: Cuando se genera una interrupción, el procesador suspende temporalmente su ejecución
3) Guardado de contexto: Antes de manejar la interrupción el procesador guarda el estado actual del programa en ejecución, el contador de programa, registros y otros datos relevantes.
4) Rutina de manejo de interrupciones: El controlador de interrupciones (PIC) determina cual es la interrupción y proporciona un puntero al procesador para buscar en la tabla de vectores la dirección en donde se encuentra la rutina de la interrupción.
5) Ejecución de la rutina de manejo: El procesador comienza a ejecutar la rutina de manejo de interrupcion que corresponde, una vez finalizada la rutina el control es devuelto al punto del programa en donde se detuvo inicialmente.
6) Restauración del estado/contexto: Despues de que se maneja la interrupción el procesador restaura el estado previo/guardado (Los registros y la dirección del programa (PC)), permitiendo que el programa restaure su estado original/inicial antes de que ocurra la interrupción.
7) Continuación de la ejecución: Con el contexto restaurado, el programa original continuo su ejecución en el punto en donde se interrumpio

---

`4)` Describa como se realiza el reconocimiento de interrupciones vectorizadas mediante el pic.

Se genera una interrupción de un dispositivo externo o una señal de sofware, el pic recibe esa interrupción y la clasifica segun la prioridad que tenga, le avisa al procesador/CPU que hay una interrupción que tiene que se atendida, por la linea (IntR).

La CPU al finalizar la instrucción actual, responde al PIC que acepta la interrupción por la linea (INTA), Solicitando el puntero para acceder a la tabla de vectores. 

El PIC le manda al puntero que corresponde a esa interrupción y la CPU lo usa para acceder a la tabla de interrupciones que tiene la dirección donde se encuentra la rutina de servicio de esa interrupción.

La CPU guarda su contexto actual (Contador de programa, registros, etc). Ejecuta la rutina del manejo de la interrupción y una vez finalizada, se le manda un señal al PIC de fin de interrupción (EOI) el PIC actualiza sus registros y puede anteder otras interrupciones.

La CPU restaura el contexto previo que tenia antes de anteder a la interrupcion y continua la ejecución

---

`5)` Cual son las diferencias entre la terminación de una subrutina y un gestor de
interrupciones?

1) Formas de finalización subritina: finalizan con la instrucción de retorno RET

Gestor de interrupciones: Finaliza con la instrucción IRET

2) Contexto de finalización: Subrutina: El contexto (Dirección de retorno, en algunos casos registros). Es gestionado por el programador y almacenado en la pila antes de la llamada a la subrutina. Al finalizar Se restaura manualmente desde la pila para volver al programa principal.

Gestión de interrupciones: El contexto completo del programa interrumpido (contador del programa, registros, etc) es automaticamente guardado y restaurado por el hardware al inicio y al final del gestor de interrupciones respectivamente.

3) Continuación del flujo de la interrupción :Subrutina: Al retornar el programa principal continua su ejecución en la linea posterior a la instrucción de llamada.

Y el gestor de interrupciones una vez restaurado el contexto, la CPU reanuda automaticamente la ejecución del programa interrumpido desde el punto exacto en donde ocurrio la interrupción.

---

`6)` Esquematice y describa la estructura interna de un PIC.

![image](https://github.com/user-attachments/assets/3dadd7b0-cbb4-485b-ba64-dff871d13c32)

Estructura interna del PIC: El pic esta compuesto por un conjunto de registros.

- EOI: Fin de interrupción
- IMR: Mascara de interrupciones, Permite habilitar o deshabilitar ciertas interrupciones
- IRR: Petición de interrupción, identifica que interrupción tiene una solicitud de petición para ser antendida.
- ISR: Interrupción de servicio, indica cual es la interrupción que esta siendo atendida.
- INT0..INT7: Registros relacionados con el vector de interrupciones


---

# Tema Segmentación de Cause

1) A que se entiende por segmentación de cause (pipeline)

Es la forma de organizar el hardware de la CPU para realizar mas de una operacion al mismo tiempo. Divide el proceso de ejecución de las instrucciones en etapas permitiendo que se ejecuten de manera simultanea.

---

2) Cual es el rendimiento de segmentación de cause

El rendimiento es la mejora de eficiencia del procesador al ejecutar varias interrupciones al mismo tiempo, dividiendo el proceso en varias etapas. Cada etapa trabaja en una parte diferente de una instrucción, lo que permite que varias instrucción se ejecuten de manera concurrente. Esto reduce el nro de ciclos de reloj necesarios para ejecutar instrucciones y aumentar el rendimiento.

> Dudas con el ciclo del reloj

Sin enbargo existen riesgos como la dependencia de datos o saltos condicionales que pueden interrumpir el flujo y reducir la eficiencia, el rendimiento mejora cuando el procesador maneja bien estos riesgos, pudiendo manejar mas interrupciones en menos tiempo.

> Se podria consultar

---


3) Describa el problema y posibles soluciones ante el riego por transferencia de control de programa

Problema: Los riesgos por transferencia de control ocurren cuando el flujo del programa se ve alterado por las instrucciones de salto (Condicionales o incondicionales). Esto genera insertidumbre sobre que instrucción se tiene que seguir. Si ya se cargaron instrucciones incorrectas, debe descartarse lo que causa desperdicios de ciclos y penalización de rendimiento

Posibles soluciones: 

Tecnicas de Software: Salto retardado: En la tecnica del salto retardado, el compilador reorganiza las instrucciones para que siempre alla algo de ejecutar despues del salto. Si no es posible agrega la instrucción NOP

Tecnicas de hardware: 
Detención del cause: Cuando se encuentra una interrupción de salto el procesador detiene temporalmente la ejecución hasta que se resuelva si se toma o no el salto. Esto evita que se ejecuten instrucciones incorrectas pero genera un retraso en el flujo de instrucciones

Adelantar la resolución de los saltos a la etapa de codificación. En la etapa de codificación se identifica si la instrucción corresponde a un salto, la condición del salto se evalua mediante un restador y la dirección de destino de salto se calcula usando un sumador. Esto se debe a la toma de desiciones sobre el flujo de ejecución.

Predicción de salto: El procesador intenta predecir si el salto sera tomado o no, para seguir ejecutando instrucciones mientras se confirma la condición del salto.

Hay dos tipos de predicciones, estan las estaticas y las dinamicas

Estaticas: La predicción es fija, por ejemplo siempre se decide si se toman los saltos o no se toman

Dinamica: Se basa en el historial de ejecuciones anteriores de la misma instrucción de salto. Ejemplo: Tambla de historias de salto o buffer de destino (Branch Target Buffer)

---

4) Ventajas de la segmentación de Cause

1) Mejora el rendimiento: La ejecución en paralelo acelera la velocidad de la ejecución de las instrucciones.
2) Aprovechamiento de recurso: mientras una unidad de ejecución realiza una operación, las etapas anteriores y posteriores pueden estar ocupadas con otras instrucciones, permitiendo un uso mas completo de las unidades funcionales.
3) Mayor paralelismo: Como varias instrucciones se ejecutan al mismo tiempo, la segmentación de Causa aumenta el nivel de paralelismo a nivel de instrucciones en el procesador.
4) Reducción del ciclo de reloj por instrucción. Reduce el tiempo necesario para ejecutar una instrucción completa al dividirla en etapas mas pequeñas.
5) Mejora de la predicción de salto: Tecnica que usa el procesador para anticipar si una instrucción de salto condicional se va a tomar o no, antes de que se evalue dicha condición. Esto ayuda a que el procesador siga trabajando sin detenerse mientras espera esa respuesta, evitante retrasos en el flujo de ejecución del programa.

---

5) Cuanto mejora el rendimiento de la segmentación de cause de interrupciones

> Pregunta CAPSIOSA

---

6) Describa la dependencia de datos que puede afectar un cause segmentado

1) RAW: Una instrucción necesita leer que aun no ha sido escrita por una instrucción.
2) WAW: Dos instrucciones intantan escribir en el mismo lugar, pero deben hacerlo en orden distintos.
3) WAR: Una instrucción quiere escribir en un dato que otra esta leyendo.

---

7) Describa 3 motivos de retardo de cause en la segmentación de cause

1) Dependencia de datos: Cuando una instrucción depende del resultado de la instrucción anterior que todavia no ha completado su etapa de ejecución. Tipos: RAW, WAW, WAR 

2) Dependencias Estructurales: Cuando dos o mas instrucciones compiten por el mismo recurso en una etapa especifica del cause.

3) Dependencia de Control (Saltos): Ocurre cuando hay instrucciones de salto y el procesador no sabe que instrucción ejecutar hasta que no termina de evaluar la condición de salto. Esto podria insterrumpir el flujo del cause porque el procesador debe esperar el resultado de la condición para poder seguir.

---

7.2) ¿Que retardo produce cada una?

> NO SABEMOS QUE RETARDO EN CUANTO A TIMPO

---

# Taxonomia Flynn

1) Describa las 4 variantes de arquitectura de la Taxonomia Flynn

Las 4 principales variantes de taxonomia flynn son: 
1) SISD (Single instruction single data): Una sola unidad de procesamiento que ejecuta una secuencia de instrucciones que opera sobre un unico conjunto de datos en cada ciclo de reloj
2) SIMD (----multiple data) Una unica instrucción se aplica simultaneamente a multiples conjuntos de datos. Esto permite que varias unidades de procesamiento ejecutan la misma operación en paralelo sobre diferentes datos al mismo tiempo.
3) MISD (Multiple instruction -----): Multiples secuencias de instrucciones se ejecutan en paralelo en un solo conjunto de datos.
4) MIMD: Multiples unidades de procesamientos que ejecutan diferentes instrucciones sobre diferentes conjuntos de datos al mismo tiempo. FIN

---

2) Describa las características que diferencian un SMP con respecto a los Clusters/ Compare los sistemas SMP y Clusters

Los SMP se caracterizan por su arquitectura de memoria compartida, donde multiples procesadores comparten el mismo espacio de memoria y recursos, esto permite que todos los procesador accedan a la memoria y a los recursos de manera igualitaria, la comunicación entre los procesadores es directa a travez de la memoria compartida, facilitando el intercambio de datos. La ventazas de los SMP es que son mas faciles de configurar, necesitan menos espacio fisico, necesitan menos energia y son plataformas estables y bien establecidas.

Los Cluster estan compuestos por nodos independietes interconectados por una red, cada uno tiene su memoria y recurso, la comunicación se comunica mediante la red lo que puede generar latencia. Los Cluster ofrecen escalabilidad horizontal al permitir añadir mas nodos para aumentar la capacidad de procesamiento.

---

3) Que son los MIMD de la taxonomia Flynn

MIMD: Multiples unidades de procesamientos que ejecutan diferentes instrucciones sobre diferentes conjuntos de datos al mismo tiempo. FIN


---

# Procesadores super escalares y Super segmentado

1) Que caracteristicas tienen los procesadores superEscalares

2) Compare las politicas de emisión de instrucciones

3) Elegir una de las 3 politicas emisión/finalización y justifique su elección.

4) De que depende el paralelismo de una maquina super escalar

5) Cual es el objetivo de usar la tecnica de renombre de registros en un procesador super escalar

6) Que es el paralelismo y de que depende el paralelismo de una maquina

---

# Memoria

1) Por que funciona un sistema de memoria basado en la jerarquia.

2) Analice las politicas de escritura desde el punto de vista de la coerencia de datos

3) Analice cuales son las ventajas y desventajas de tener varios niveles de cache

4) Compare la correspondencia entre la memoria principal y la memoria cache.

5) Describe las funciones de correspondencia entre la cache y la memoria principal

6) Cuales son los elementos a tener en cuenta en el diseño de una memoria cache

7) Si se pretende el tiempo de acceso mediante la memoria cache sobre que parametro sera necesario trabajar y que propone como medidas para hacerlo.

---

# Modulo de E/S y DMA

1) Como es la estructura de un modulo de entrada y salida, esquematice y describa

2) La coerencia de un sistema jerarquico se ve afectado por el uso del DMA

3) Describa las caracteristicas funcionales del acceso directo a memoria

4) Describa el funcionamiento de gestion de entrada y salida programada con espera de respuesta

5) Desarrolle el funcionamiento del DMA y a los usos que de el se hacen.

---

# Buses

1) Que elementos caracteristicos describen un bus

1) Tipos de buses:
- Dedicado: El bus esta permanentemente asignado a una función o a un subconjunto especifico de componentes dentro del sistemas.
- Multiplexado: Utiliza las mismas lineas de comunicación para diferentes funciones o componentes en diferentes momentos
2) Metodo de arbitraje: 
- Centralizado: Un dispositivo o unidad de control se encarga de gestionar el acceso al buss, asignado el tiempo de uso a cada componente
- Distribuido: Cada modulo o componente tiene su propia logica para acceder al buss y los modulos colaboran para compartir los recursos

3) Temporización
- Sincronica; El funcionamiento del bus esta cordinado por un reloj y todos los elementos del bus dependen de este.
- Asincronica: Los eventos del buss no dependen de un reloj central sino que son impulsadas por eventos previos y señales de control

4) Anchura de buss: La anchura de bus se refiere al nro de lineas que tiene el bus, lo que determina la cantidad de información que puede tranmitirse simultaneamente.
- En ell buss de datos, la anchura indica cuantos bits se pueden transferir de manera paralela
- En el bus de direcciones la anchura determina el tamaño de memoria que se puede direccionar.

5)Tipo de transferencia de datos
- Transferencia de escritura: El bus permite que el maestro envie datos al exclavo
- Transferencia de lectura: El esclavo envia datos al maestro.
Algunos buses permiten operaciones combinadas como:
- 1) Lectura-Modificación-Lectura: Una lectura seguida de una escritura en la misma dirección
- 2) Lectura-Despues-Escritura: Una escritura seguida de una lectura en la misma dirección

Ademas, algunos buses permiten transferencias de bloques de datos donde multiples datos se transfieren en un solo ciclo

---

# Maquina/Arquitectura

1) Que elementos componen una maquina con arquitectura Von Newman descrir funcion de cada componente

