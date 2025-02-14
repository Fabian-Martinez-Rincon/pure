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

Esto ya es lo ultimo para el final (Me queda este y el de concurrente y termino el Analista Programador Universitario). A meterle!!!

<div align="center">
<img src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjNiaTd1aDU3OW53ejhtaXk5dzM0bGpocHcwM2t1Z29jcndxN3BhNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT1XGVp95GDPgFYmUE/giphy.gif">

</div>

> @carolina

## Parametros e Interrupciones

<details><summary><b>1) Que métodos como pasaje de parametros podemos utilizar en una computadora?</b></summary>

**Via registros:**

Para pasar los parametros se usan los registros del procesador. Su principal limitación son los registros disponibles, es importante documentar cuales son los registros que estamos usando para evitar conflictos

**Via Memoria**

Los parametros se almacenan en un area difinida en la memoria RAM, es util cuando se deben pasar grandes cantidades de datos, pero es dificil de estandarizar. 

**Via PILA/STACK**

Los parametros se colocan en la pila. Es el metodo mas utilizado, no depende ni de la memoria ni de los registros, hay que saber bien como utilizarlo ya que la pila es usada tanto por el sistema como por los programas del usuario.

> Tambien puede tocar la siguiente pregunta: **Explique los métodos de pasaje de argumentos a procedimientos o funciones.**

</details>


<details><summary><b>2) Explique características y tratamiento de interrupciones múltiples.</b></summary>

Las interrupciones multiples es cuando se reciben varias interrupciones al mismo tiempo. Son 3 caracteristicas

**Prioridad de interrupciones:**

Las interrupciones suelen tener una prioridad. Esto permite que el sistema decidir cual interrupcion debe manejar primero en caso de que ocurran multiples interrupciones.

**Mascara de Interrupciones**:

Algunos sistemas permiten desactivar temporalmente interrupciones (GENERALMENTE LAS DE MENOR PRIORIDAD) Utilizando las mascaras de interrupciones, esto ayuda a que las interrupciones de mayor prioridad no sean interrumpidad con las de mayor prioridad.

Gerarquia de interrupciones: Enmascarables y no Enmascarables, Enmascarables pueden ser ignoradas (de baja prioridad) y las no Enmascarables no se pueden ignorar y son de alta prioridad

**Nivel de anidación:**

El sistema debe ser capa de manejar nivel de anidación. Si esta atendiendo una interrupcion y ocurre otra de mayor prioridad la interrupcion actual se suspende temporalmente, el sistema atiende la nueva interrupcion y al finalizar regresan para continuar con la interrupcion inicial.

- Tratamiento: Se puede atender una interrupcion e inhabilitar a las demas con el uso de mascaras de interrupciones, de esta manera las interrupciones se maneja de forma secuencial. (Esto no me quedo claro 😕)
- Tambien Es posible asignar prioridades a las interrupciones. Dependiendo del nivel de prioridad el sistema debe respetar su atención.
- Si se esta manejado una interrupcion de menor prioridad y llega una de mayor prioridad se debe atender primero la de mayor prioridad. Una vez finalizada el procesador retoma la atención de la interrupcion previa.

</details>


<details><summary><b>3) Describir el mecanismo de interrupciones</b></summary>


- 1) **Generar la interrupción**: Un disposito del sistema detecta un evento que requiere atención, por lo que se genera una señal de interrupción.
- 2) **Interrupcion del procesador**: Cuando se genera una interrupción, el procesador suspende temporalmente su ejecución
- 3) **Guardado de contexto**: Antes de manejar la interrupción el procesador guarda el estado actual del programa en ejecución, el contador de programa, registros y otros datos relevantes.
- 4) **Rutina de manejo de interrupciones**: El controlador de interrupciones (PIC) determina cual es la interrupción y proporciona un puntero al procesador para buscar en la tabla de vectores la dirección en donde se encuentra la rutina de la interrupción.
- 5) **Ejecución de la rutina de manejo**: El procesador comienza a ejecutar la rutina de manejo de interrupcion que corresponde, una vez finalizada la rutina el control es devuelto al punto del programa en donde se detuvo inicialmente.
- 6) **Restauración del estado/contexto**: Despues de que se maneja la interrupción el procesador restaura el estado previo/guardado (Los registros y la dirección del programa (PC)), permitiendo que el programa restaure su estado original/inicial antes de que ocurra la interrupción.
- 7) **Continuación de la ejecución**: Con el contexto restaurado, el programa original continuo su ejecución en el punto en donde se interrumpio

</details>

<details><summary><b>4) Describa como se realiza el reconocimiento de interrupciones vectorizadas mediante el pic.</b></summary>

- Se genera una interrupción de un dispositivo externo o una señal de sofware, el pic recibe esa interrupción y la clasifica segun la prioridad que tenga, le avisa al procesador/CPU que hay una interrupción que tiene que se atendida, por la linea (IntR).
- La CPU al finalizar la instrucción actual, responde al PIC que acepta la interrupción por la linea (INTA), Solicitando el puntero para acceder a la tabla de vectores. 
- El PIC le manda al puntero que corresponde a esa interrupción y la CPU lo usa para acceder a la tabla de interrupciones que tiene la dirección donde se encuentra la rutina de servicio de esa interrupción.
- La CPU guarda su contexto actual (Contador de programa, registros, etc). Ejecuta la rutina del manejo de la interrupción y una vez finalizada, se le manda un señal al PIC de fin de interrupción (EOI) el PIC actualiza sus registros y puede anteder otras interrupciones.
- La CPU restaura el contexto previo que tenia antes de anteder a la interrupcion y continua la ejecución

</details>


<details><summary><b>5) Cual son las diferencias entre la terminación de una subrutina y un gestor de interrupciones?</b></summary>

1) **Formas de finalización**
- **Subritina**: finalizan con la instrucción de retorno RET
- **Gestor de interrupciones**: Finaliza con la instrucción IRET

2) **Contexto de finalización:**
- **Subrutina**: El contexto (Dirección de retorno, en algunos casos registros). Es gestionado por el programador y almacenado en la pila antes de la llamada a la subrutina. Al finalizar Se restaura manualmente desde la pila para volver al programa principal.
- **Gestión de interrupciones:** El contexto completo del programa interrumpido (contador del programa, registros, etc) es automaticamente guardado y restaurado por el hardware al inicio y al final del gestor de interrupciones respectivamente.

3) **Continuación del flujo de la interrupción:**
- **Subrutina**: Al retornar el programa principal continua su ejecución en la linea posterior a la instrucción de llamada.
- **El gestor de interrupciones**: Una vez restaurado el contexto, la CPU reanuda automaticamente la ejecución del programa interrumpido desde el punto exacto en donde ocurrio la interrupción.

</details>



<details><summary><b>6) Esquematice y describa la estructura interna de un PIC.</b></summary>

<div style="width: 50%;" align="center">

![image](https://github.com/user-attachments/assets/3dadd7b0-cbb4-485b-ba64-dff871d13c32)
</div>
Estructura interna del PIC: El pic esta compuesto por un conjunto de registros.

- EOI: Fin de interrupción
- IMR: Mascara de interrupciones, Permite habilitar o deshabilitar ciertas interrupciones
- IRR: Petición de interrupción, identifica que interrupción tiene una solicitud de petición para ser antendida.
- ISR: Interrupción de servicio, indica cual es la interrupción que esta siendo atendida.
- INT0..INT7: Registros relacionados con el vector de interrupciones

</details>

---

## Tema Segmentación de Cause


<details><summary><b>1) A que se entiende por segmentación de cause (pipeline)</b></summary>

Es la forma de organizar el hardware de la CPU para realizar mas de una operacion al mismo tiempo. Divide el proceso de ejecución de las instrucciones en etapas, permitiendo que se ejecuten de manera simultanea.

![segmentación](https://www.researchgate.net/profile/Leandro-Zambrano/publication/347483834/figure/fig5/AS:970292671291393@1608347208263/Comportamiento-en-el-tiempo-del-patron-segmentacion-de-cauce.ppm)

</details>


<details><summary><b>2) Cual es el rendimiento de segmentación de cause</b></summary>

El rendimiento es la mejora de eficiencia del procesador al ejecutar varias interrupciones al mismo tiempo, dividiendo el proceso en varias etapas. Cada etapa trabaja en una parte diferente de una instrucción, lo que permite que varias instrucción se ejecuten de manera concurrente. Esto reduce el nro de ciclos de reloj necesarios para ejecutar instrucciones y aumentar el rendimiento.


Sin enbargo existen riesgos como la dependencia de datos o saltos condicionales que pueden interrumpir el flujo y reducir la eficiencia. El rendimiento mejora cuando el procesador maneja bien estos riesgos, pudiendo manejar mas interrupciones en menos tiempo.

> Se podria consultar

</details>


<details><summary><b>3) Describa el problema y posibles soluciones ante el riego por transferencia de control de programa</b></summary>

**Problema**: Los riesgos por transferencia de control ocurren cuando el flujo del programa se ve alterado por las instrucciones de salto (Condicionales o incondicionales). Esto genera insertidumbre sobre que instrucción se tiene que seguir. Si ya se cargaron instrucciones incorrectas, debe descartarse lo que causa desperdicios de ciclos y penalización de rendimiento, **Posibles soluciones:**

### **Tecnicas de Software**

**Salto retardado:** En la tecnica del salto retardado, el compilador reorganiza las instrucciones para que siempre alla algo que ejecutar despues del salto. Si no es posible agrega la instrucción NOP

### **Tecnicas de hardware**

**Detención del cause:** Cuando se encuentra una interrupción de salto el procesador detiene temporalmente la ejecución hasta que se resuelva si se toma o no el salto. Esto evita que se ejecuten instrucciones incorrectas pero genera un retraso en el flujo de instrucciones

**Adelantar la resolución de los saltos a la etapa de codificación**. En la etapa de codificación se identifica si la instrucción corresponde a un salto, la condición del salto se evalua mediante un restador y la dirección de destino de salto se calcula usando un sumador. Esto se debe a la toma de desiciones sobre el flujo de ejecución.

**Predicción de salto:** El procesador intenta predecir si el salto sera tomado o no, para seguir ejecutando instrucciones mientras se confirma la condición del salto. Hay dos tipos de predicciones, estan las estaticas y las dinamicas
- **Estaticas:** La predicción es fija, por ejemplo siempre se decide si se toman los saltos o no se toman
- **Dinamica:** Se basa en el historial de ejecuciones anteriores de la misma instrucción de salto. Ejemplo: Tabla de historias de salto o buffer de destino (Branch Target Buffer)

</details>

<details><summary><b>4) Ventajas de la segmentación de Cause</b></summary>

- 1) **Mejora el rendimiento:** La ejecución en paralelo acelera la velocidad de la ejecución de las instrucciones.
- 2) **Aprovechamiento de recurso:** mientras una unidad de ejecución realiza una operación, las etapas anteriores y posteriores pueden estar ocupadas con otras instrucciones, permitiendo un uso mas completo de las unidades funcionales.
- 3) **Mayor paralelismo:** Como varias instrucciones se ejecutan al mismo tiempo, la segmentación de Causa aumenta el nivel de paralelismo a nivel de instrucciones en el procesador.
- 4) **Reducción del ciclo de reloj por instrucción:** Reduce el tiempo necesario para ejecutar una instrucción completa al dividirla en etapas mas pequeñas.
- 5) **Mejora de la predicción de salto:** Tecnica que usa el procesador para anticipar si una instrucción de salto condicional se va a tomar o no, antes de que se evalue dicha condición. Esto ayuda a que el procesador siga trabajando sin detenerse mientras espera esa respuesta, evitante retrasos en el flujo de ejecución del programa.

</details>


<details><summary><b>6) Describa la dependencia de datos que puede afectar un cause segmentado</b></summary>

1) **RAW:** Una instrucción necesita leer que aun no ha sido escrita por una instrucción.
2) **WAW:** Dos instrucciones intantan escribir en el mismo lugar, pero deben hacerlo en orden distintos.
3) **WAR:** Una instrucción quiere escribir en un dato que otra esta leyendo.

</details>


<details><summary><b>7) Describa 3 motivos de retardo de cause en la segmentación de cause</b></summary>

- 1) **Dependencia de datos:** Cuando una instrucción depende del resultado de la instrucción anterior que todavia no ha completado su etapa de ejecución. Tipos: RAW, WAW, WAR 
- 2) **Dependencias Estructurales:** Cuando dos o mas instrucciones compiten por el mismo recurso en una etapa especifica del cause.
- 3) **Dependencia de Control (Saltos):** Ocurre cuando hay instrucciones de salto y el procesador no sabe que instrucción ejecutar hasta que no termina de evaluar la condición de salto. Esto podria insterrumpir el flujo del cause porque el procesador debe esperar el resultado de la condición para poder seguir.

7.2) ¿Que retardo produce cada una?

> NO SABEMOS QUE RETARDO EN CUANTO A TIMPO | SIN CONTESTAR

</details>




---

## Taxonomia Flynn



<details><summary><b>1) Describa las 4 variantes de arquitectura de la Taxonomia Flynn</b></summary>

![TaxonomiaFlynn](https://www.filosofias.es/wiki/lib/exe/fetch.php/a2/2/flynns-taxonomy-of-computer-architectures.png)

Las 4 principales variantes de taxonomia flynn son:

- 1) **SISD** (Single Instruction Single Data): Una sola unidad de procesamiento que ejecuta una secuencia de instrucciones, opera sobre un unico conjunto de datos en cada ciclo de reloj
- 2) **SIMD** (Single Instruction Multiple Data) Una unica instrucción se aplica simultaneamente a multiples conjuntos de datos. Esto permite que varias unidades de procesamiento ejecutan la misma operación en paralelo sobre diferentes datos al mismo tiempo.
- 3) **MISD** (Multiple Instruction Single Data): Multiples secuencias de instrucciones se ejecutan en paralelo en un solo conjunto de datos.
- 4) **MIMD** (Multiple Instruction Multiple Data): Multiples unidades de procesamientos que ejecutan diferentes instrucciones sobre diferentes conjuntos de datos al mismo tiempo.

</details>

<details><summary><b>2) Describa las características que diferencian un SMP con respecto a los Clusters/ Compare los sistemas SMP y Clusters</b></summary>

**Los SMP** se caracterizan por su arquitectura de **memoria compartida**, donde multiples procesadores comparten el mismo espacio de memoria y recursos, esto permite que todos los procesadores accedan a la memoria y a los recursos de manera igualitaria, la comunicación entre los procesadores es directa a traves de la memoria compartida, facilitando el intercambio de datos. **La ventajas** de los SMP es que son mas faciles de configurar, necesitan menos espacio fisico, necesitan menos energia y son plataformas estables y bien establecidas.

![SMP](https://iesbidaju.wordpress.com/wp-content/uploads/2016/05/smp_01.gif)

**Los Cluster** estan compuestos por **nodos independietes** interconectados por una red, cada uno tiene su memoria y recurso, la comunicación se comunica mediante la red lo que puede generar latencia. Los Cluster ofrecen escalabilidad horizontal al permitir añadir mas nodos para aumentar la capacidad de procesamiento.

![Clusters](https://adictosaltrabajo.com/wp-content/uploads/tutorial-data/MySQLCluster/MySQLCluster_img1.png)

</details>

<details><summary><b>3) Que son los MIMD de la taxonomia Flynn</b></summary>

**MIMD:** Multiples unidades de procesamientos que ejecutan diferentes instrucciones sobre diferentes conjuntos de datos al mismo tiempo. FIN

</details>

---

## Procesadores super escalares y Super segmentado

<details><summary><b>1) Que caracteristicas tienen los procesadores superEscalares</b></summary>

- **1. Captación simultánea de múltiples instrucciones**: Se buscan varias instrucciones al mismo tiempo para mejorar el rendimiento mediante el paralelismo. 
- **2. Gestión de dependencias de datos:** Se usan técnicas como el renombre de registros para evitar conflictos entre instrucciones que dependen de resultados previos. 
- **3. Ejecución paralela de múltiples instrucciones:** Se inician múltiples instrucciones a la vez, usando diferentes unidades funcionales para ejecutarlas simultáneamente.
- **4. Recursos adecuados para ejecución en paralelo:** Tienen múltiples unidades de ejecución, para manejar múltiples instrucciones en paralelo. 
- **5. Entrega de resultados en orden:** Aunque las instrucciones se ejecutan fuera de orden, los resultados se entregan en el orden correcto para mantener la coherencia del programa.

</details>


<details><summary><b>2) Compare las politicas de emisión de instrucciones</b></summary>

Políticas:

- **1. Emisión y finalización en orden**: Las instrucciones se emiten y ejecutan en el mismo orden en que aparecen en el programa. Si una instrucción no puede ejecutarse porque espera un operando, el procesador se detiene hasta que pueda continuar. 
- **2. Emisión en orden y finalización desordenado:** Las instrucciones se emiten en el mismo orden en que aparecen en el programa, pero pueden ejecutarse en cualquier orden si no tienen dependencias entre sí. Si una instrucción no puede ejecutarse aún, el procesador busca otras instrucciones posteriores que sí puedan ejecutarse antes, optimizando el uso de los recursos.
- **3. Emisión y Ejecución desordenada:** El procesador puede emitir y ejecutar instrucciones en cualquier orden, garantizando que el resultado final sea el mismo que en una ejecución secuencial. Para evitar los problemas de dependencias, se usa la técnica de renombre de registros que evitar los conflictos con los registros intermedios.

</details>

<details><summary><b>3) Elegir una de las 3 politicas emisión/finalización y justifique su elección.</b></summary>

ACA ELEGI UNA DE LAS 3 QUE MAS TE CONVENGA Y JUSTIFICALA (CHAT GPT :v )

</details>

<details><summary><b>4) De que depende el paralelismo de una maquina super escalar</b></summary>

- 1. **Dependecia de datos verdadera**: Cuando una instrucción necesita el resultado de una instrucción previa antes de poder ejecutarse.
- 2. **Dependencia relativa del procesamiento**: Se refiere a las restricciones impuestas por el orden en que se deben emitir y ejecutar las instrucciones en un procesador. 
- 3. **Conflicto en los recursos**: Cuando múltiples instrucciones compiten por un mismo recurso al mismo tiempo.
- 4. **Dependencia de salida**: Cuando dos instrucciones intentan escribir en el mismo registro. 
- 5. **Antidependencia**: Cuando una instrucción quiere escribir en un registro que todavía está siendo usada por otra instrucción previa.

</details>

<details><summary><b>5) Cual es el objetivo de usar la tecnica de renombre de registros en un procesador super escalar</b></summary>

Es resolver problemas de dependencia entre instrucciones que intentan usar los mismos registros. Esto permite una ejecucion más eficiente y paralela de instrucciones.
</details>

<details><summary><b>6) Que es el paralelismo y de que depende el paralelismo de una maquina</b></summary>

El paralelismo es la capacidad de un sistema para ejecutar múltiples operaciones al mismo tiempo, en lugar de procesarlas de manera secuencial. 

El paralelismo de una maquina depende: 
- 1. **Numero de instrucciones captadas por ciclo**: Cuantas más instrucciones se puedan decodificar y enviar al procesador en cada ciclo de reloj , mayor va a ser el aprovechamiento del paralelismo a nivel de instrucción. 
- 2. **Número de unidades funcionales**: A mayor número de unidades funcionales logra que más instrucciones se procesen en paralelo, siempre que sean independientes entre sí. 
- 3. **Mecanismo de localización de instrucciones independientes**: El procesador detecta las instrucciones que puedan ejecutarse en paralelo sin violar dependencias de datos o de control. Usando técnicas como el renombre de registros, predicción de saltos y la ejecución fuera de orden.

</details>

---

## Memoria

<details><summary><b>1) Por que funciona un sistema de memoria basado en la jerarquia.</b></summary>

Funciona gracias al principio de localidad de referencia basado en 2 tipos de acceso a memoria:

- **Localidad Temporal**: hace referencia a que los elementos de memoria que fueron recientemente referenciados (como datos e instrucciones) se vuelvan a referenciar en el futuro cercano. 
- **Localidad Espacial**: hace referencia a que si un elemento de memoria fue referenciado, es probable que otros elementos cuyas direcciones están cercanas también sean referenciados.


</details>

<details><summary><b>2) Analice las politicas de escritura desde el punto de vista de la coerencia de datos</b></summary>

### Acierto

- **Escritura inmediata (write-through)**: Cada escritura en caché se refleja inmediatamente en la memoria principal, por lo que se mantiene la coherencia de datos en todo momento, suele combinarse con la técnica **no-write-allocate.**
- **Postescritura (write-back)**: Las actualizaciones se hacen en la cache y se marca un bit de “actualizar o sucio”. Cuando el bloque se saca de la cache se chequea ese bit si está activo, se escribe ese bloque en la memoria principal. Esto puede producir que la memoria principal tenga informacion errónea durante un tiempo. Suele combinarse con la técnica **write-allocate.**

### Fallo

- **Write Allocate**: la informacion se lleva de memoria principal a la cache y se sobrescribe sobre ella , por lo que se puede alterar la coherencia de datos hasta que haya un remplazo de memoria principal.
- **No write Allocate**: El bloque no se lleva a la memoria cache ,se escribe directamente en memoria principal.


</details>

<details><summary><b>3) Analice cuales son las ventajas y desventajas de tener varios niveles de cache</b></summary>

Tener varios niveles de caché (L1, L2, L3) mejora el rendimiento al reducir la latencia y aprovechar la localidad temporal y espacial, optimizando el acceso. Además, permite un balance entre capacidad y velocidad. Sin embargo, aumenta la complejidad del diseño, incrementa los costos y el consumo de energía, y requiere mecanismos de coherencia entre niveles que pueden afectar el rendimiento.

</details>

<details><summary><b>4) Compare la correspondencia entre la memoria principal y la memoria cache.</b></summary>

- **1. DIRECTA**: cada bloque de la memoria principal se mapea a una única línea en la caché. la dirección de memoria se divide en 3 campos para determinar en qué línea de caché se almacena el bloque de datos correspondiente.
- **2. ASOCIATIVA**: cada bloque de memoria principal puede cargarse en cualquier línea de la cache. La lógica del control de la cache interpreta una dirección de memoria como una etiqueta y un campo de palabras.
- **3. ASOCIATIVA POR CONJUNTO**: la cache se divide en v conjuntos, cada uno con k líneas. La lógica de control de la cache interpreta una dirección de memoria como 3 campos: etiqueta, conjunto y palabra.

</details>


<details><summary><b>5) Describe las funciones de correspondencia entre la cache y la memoria principal</b></summary>

- **DIRECTA**: cada bloque de la memoria principal se mapea a una única línea en la caché.
- **ASOCIATIVA**: cada bloque de memoria principal puede cargarse en cualquier línea de la cache.
- **ASOCIATIVA POR CONJUNTO**: Un bloque puede almacenarse en un conjunto restringido de la cache.
</details>

<details><summary><b>6) Cuales son los elementos a tener en cuenta en el diseño de una memoria cache</b></summary>

### 1.El tamaño de la cache

No se puede determinar un tamaño fijo optimo, pero a mayor tamaño se necesitas más circuitos para su gestión, las caches más grandes suelen ser un poco más lentas y su tamaño está limitado por el espacio disponible en el chip y las tarjetas.

### 2.Funcion de correspondencia

Define cómo se asignan los bloques de memoria en la caché.
- **DIRECTA**: cada bloque puede ir solo a una línea especifica.
- **ASOCIATIVA**: cualquier bloque puede ir a cualquier línea.
- **ASOCIATIVA POR CONJUNTO**: los bloques se asignas a un conjunto de líneas específicas.

### 3.Algoritmo de sustitución

Decide qué bloque se reemplaza cuando la caché está llena.

- **LRU**: se remplaza el bloque menos usado recientemente.
- **LFU**: se remplaza el bloque menos accedido.
- **FIFO**: se remplaza el bloque más antiguo.
- **ALEATORIA**: Se reemplaza un bloque al azar.

### 4.Politica de escritura

Cuando se debe reemplazar un bloque de la caché, si se ha realizado algún cambio en una línea de caché, es necesario escribir esos datos modificados en la memoria principal antes de hacer el reemplazo.

- **Escritura inmediata**: Cada escritura en caché se refleja inmediatamente en la memoria principal.
- **Postescritura**: Las actualizaciones se hacen en la cache y luego se sobrescriben en la memoria principal cuando el bloque se remplaza.

### 5.Tamaño de línea: Define cuántas palabras o bytes conforman un bloque en la caché.

A Líneas más grandes se reducen la cantidad de accesos a la memoria principal, pero pueden generar desperdicio de almacenamiento si los datos no se utilizan completamente.

### 6.Numero de caches

El diseño de caché en un sistema de cómputo puede abordarse desde dos perspectivas:'

**1.Número de niveles de caché (caché multinivel vs. caché de un solo nivel)**

- **Caché de un solo nivel** (L1 única):Es la primera y única caché entre el procesador y la memoria principal. Su acceso es rápido, pero si la información no está en caché, se debe ir directamente a la RAM, aumentando la latencia.
- **Caché multinivel** (L1, L2, L3): Divide la caché en varios niveles, cada uno con diferentes tamaños y velocidades.
    - **L1**: Más rápida pero pequeña (cercana al procesador).
    - **L2**: Más grande que L1, pero más lenta.
    - **L3**: Mayor capacidad, compartida entre núcleos del procesador en muchos casos.
Reduce la cantidad de accesos a la memoria RAM, mejorando el rendimiento.

**2.Organización de la caché (unificada vs. separada):**

- **Caché unificada**: Almacena tanto instrucciones como datos en una única caché.
- **Cache separada**: Se divide en caché de instrucciones y caché de datos. Evita conflictos cuando el procesador necesita acceder a instrucciones y datos simultáneamente. Mejora el rendimiento en procesadores con segmentación de instrucciones.

</details>

<details><summary><b>7) Si se pretende el tiempo de acceso mediante la memoria cache sobre que parametro sera necesario trabajar y que propone como medidas para hacerlo.</b></summary>

Para mejorar el tiempo de acceso medio en la memoria caché, es necesario optimizar los siguientes parámetros: 

- **1.Tamaño de la caché**: Aumentarlo puede reducir fallos, pero si es demasiado grande, puede volverse más lenta. Se debe encontrar un equilibrio. 
- **2.Función de correspondencia**: Usar asociatividad por conjuntos en lugar de mapeo directo reduce colisiones y mejora la tasa de aciertos.
- **3.Tamaño de bloque**: Un tamaño adecuado minimiza reemplazos innecesarios y mejora la localidad espacial. 
- **4.Algoritmo de reemplazo**: LRU (menos recientemente usado) es eficiente, pero puede ser costoso en hardware. Alternativas como FIFO o reemplazo aleatorio pueden simplificar la implementación.
- **5.Política de escritura**: Write-back en lugar de write-through reduce accesos innecesarios a la memoria principal. 
- **6.Cachés multinivel**: Usar una caché L2 o L3 de mayor tamaño y menor velocidad que L1 ayuda a reducir la frecuencia de accesos a la RAM. 
- **7.Separación de instrucciones y datos**: Evita competencia por el acceso y mejora el rendimiento en arquitecturas segmentadas.

</details>

---

## Modulo de E/S y DMA

<details><summary><b>1) Como es la estructura de un modulo de entrada y salida, esquematice y describa</b></summary>

![image](https://github.com/user-attachments/assets/4956384b-96e2-4221-bf30-86fde8cae56e)

- **Conexión del sistema**: el módulo de E/S se conecta con el resto del computador a través de las líneas del bus del sistema (datos, dirección, control).
- Registro de Datos y estados:
    - **Registro de datos**: almacena temporalmente los datos que entran o salen de los dispositivos.
    - **Registro de estado**: indica el estado actual del dispositivo ( listo, ocupado, error). Puede funcionar también como registro de control para recibir instrucciones del procesador.
- **Interacción con CPU:** La CPU utiliza las líneas de control para enviar ordenes al módulo E/S por ejemplo leer datos o escribir en un dispositivo.
- **Reconocimiento de direcciones**: el módulo reconoce una dirección única para identificar que dispositivo controla. Si controla varios tiene un conjunto único de direcciones.
- **Interfaz específica para dispositivos:** Contiene la lógica necesaria para comunicarse directamente con cada uno de los dispositivos conectados.


</details>


<details><summary><b>2) La coerencia de un sistema jerarquico se ve afectado por el uso del DMA</b></summary>

Puede verse afectado, ya que si se realizan operaciones sobre un dato, este se actualiza en cache y si no se vacía la memoria antes de que un dispositivo intente accederlo, se podría estar usando un valor erróneo y viceversa.
</details>


<details><summary><b>3) Describa las caracteristicas funcionales del acceso directo a memoria</b></summary>

El Acceso Directo a Memoria permite que un dispositivo periférico acceda a memoria principal (RAM) directamente sin la intervención de la CPU. El DMA acelera la transferencia de datos entre la memoria y los dispositivos periféricos, lo que libera recursos de la CPU para otras tareas. Las características funcionales del DMA incluyen varias etapas de transferencia:

**Solicitud**

La primera etapa implica que un dispositivo periférico envíe una solicitud de acceso a la memoria al controlador DMA. Esta solicitud incluye información sobre la dirección de memoria de origen y destino, la cantidad de datos a transferir y el sentido de la transferencia.
Selección del Canal DMA: Los sistemas informáticos pueden tener múltiples canales, cada uno dedicado a un tipo específico de dispositivo o función. En esta etapa, el sistema debe asignar el canal DMA a la solicitud entrante.

**Configuración**

Una vez seleccionado el canal DMA, se configura para que coincida con los requisitos de la transferencia de datos. Esto incluye la configuración de las direcciones de inicio y finalización en la memoria, el tamaño de la transferencia y otras características relevantes.

**Acceso Directo:**

El controlador DMA se comunica directamente con la memoria principal y el dispositivo periférico para iniciar la transferencia de datos. La CPU no participa en la transferencia en sí, lo que permite que la CPU realice otras tareas mientras se lleva a cabo la transferencia.

**Transferencia de Datos:**

El controlador DMA transfiere datos entre la memoria y el dispositivo periférico utilizando el canal DMA configurado previamente. La transferencia puede ser en una dirección o bidireccional.

**Finalización**

Cuando se completa la transferencia, el controlador DMA notifica al dispositivo periférico y actualiza cualquier estado relevante. La CPU puede ser notificada de la finalización de la transferencia mediante una interrupción o un mecanismo similar.

**Liberación del Canal DMA**

Después de completar la transferencia, el canal DMA se libera para su uso posterior. Esto permite que otros dispositivos o solicitudes utilicen el canal DMA según sea necesario.

</details>

<details><summary><b>4) Describa el funcionamiento de gestion de entrada y salida programada con espera de respuesta</b></summary>

inicia una operación de E/S (como leer o escribir datos en un dispositivo de almacenamiento, por ejemplo), y luego espera a que el dispositivo de E/S termine la operación antes de continuar con su ejecución. En este modelo, el procesador se "bloquea" o "espera" mientras la operación de E/S se lleva a cabo.

**Funcionamiento paso a paso:**

- **Iniciar la operación de E/S**: El procesador envía una solicitud al dispositivo de E/S para realizar una operación específica (por ejemplo, leer un bloque de datos de un disco duro o escribir datos en una impresora).
- **Espera de respuesta**: Una vez que el procesador emite la solicitud de E/S, espera que el dispositivo termine la operación. Durante este tiempo, el procesador no realiza ninguna otra tarea, ya que está esperando que se complete la operación solicitada.
- **Polling**: El procesador revisa periódicamente el estado del dispositivo de E/S para determinar si la operación ha finalizado. Esto es menos eficiente que el uso de interrupciones.
- **Procesamiento de los datos**: Después de que el dispositivo ha terminado la operación, y el procesador ha recibido la respuesta el procesador puede procesar los datos que fueron leídos o verificar que los datos fueron escritos correctamente.

</details>

<details><summary><b>5) Desarrolle el funcionamiento del DMA y a los usos que de el se hacen.</b></summary>

El controlador de DMA recibe el control del sistema cedido por el procesador, para transferir datos a y desde memoria a través del bus del sistema.

Para hacerlo, el DMAC debe utilizarlo sólo cuando el procesador no lo necesita, o forzar al procesador a que suspenda temporalmente su funcionamiento, a esto se lo conoce como robo de ciclo.

Cuando el procesador desea leer o escribir un bloque de datos, envía una orden al módulo de DMA, incluyendo:
- Si se solicita una lectura o una escritura.
- La dirección del dispositivo de E/S en cuestión, indicada a través de las líneas de datos.
- La posición inicial de memoria a partir de donde se lee o se escribe, indicada a través del bus de datos y almacenada por el DMAC en su registro de direcciones.
- El número de palabras a leer o escribir, indicado a través de las líneas de datos y almacenado en el registro de cuenta de datos.

El procesador continúa su trabajo y el DMAC transfiere el bloque completo de datos, palabra a palabra, directamente desde o hacia la memoria. Cuando la transferencia ha terminado, el DMAC envía una señal de interrupción al procesador.


</details>

---

## Buses

<details><summary><b>1) Que elementos caracteristicos describen un bus</b></summary>

**1) Tipos de buses**
- **Dedicado:** El bus esta permanentemente asignado a una función o a un subconjunto especifico de componentes dentro del sistemas.
- **Multiplexado:** Utiliza las mismas lineas de comunicación para diferentes funciones o componentes en diferentes momentos

**2) Metodo de arbitraje**

- **Centralizado:** Un dispositivo o unidad de control se encarga de gestionar el acceso al buss, asignado el tiempo de uso a cada componente
- **Distribuido:** Cada modulo o componente tiene su propia logica para acceder al buss y los modulos colaboran para compartir los recursos

**3) Temporización**
- **Sincronica:** El funcionamiento del bus esta cordinado por un reloj y todos los elementos del bus dependen de este.
- **Asincronica:** Los eventos del buss no dependen de un reloj central sino que son impulsadas por eventos previos y señales de control

**4) Anchura de buss**

La anchura de bus se refiere al nro de lineas que tiene el bus, lo que determina la cantidad de información que puede tranmitirse simultaneamente.

- En el buss de datos, la anchura indica cuantos bits se pueden transferir de manera paralela
- En el bus de direcciones la anchura determina el tamaño de memoria que se puede direccionar.

**5) Tipo de transferencia de datos**

- **Transferencia de escritura:** El bus permite que el maestro envie datos al exclavo
- **Transferencia de lectura:** El esclavo envia datos al maestro.

Algunos buses permiten operaciones combinadas como:

- 1) Lectura-Modificación-Lectura: Una lectura seguida de una escritura en la misma dirección
- 2) Lectura-Despues-Escritura: Una escritura seguida de una lectura en la misma dirección

Ademas, algunos buses permiten transferencias de bloques de datos donde multiples datos se transfieren en un solo ciclo

</details>

---

## Maquina/Arquitectura

<details><summary><b>1) Que elementos caracteristicos describen un bus</b></summary>

1) Que elementos componen una maquina con arquitectura Von Newman descrir funcion de cada componente

***Unidad Central de Procesamiento (CPU):***

Es el componente principal encargado de ejecutar las instrucciones del programa. Se divide en:

- **Unidad de Control (CU)**: Coordina la ejecución de instrucciones, decodificándolas y enviando señales de control a los demás componentes.
- **Unidad Aritmético-Lógica (ALU)**: Realiza operaciones matemáticas y lógicas.
- **Registros**: Pequeñas unidades de almacenamiento dentro de la CPU que guardan datos temporales y direcciones.

**Memoria Principal:**

Almacena datos e instrucciones de los programas en ejecución. Es de acceso aleatorio (RAM), lo que permite una lectura y escritura rápida por parte del procesador.

**Bus de Datos, Dirección y Control:**

Permiten la comunicación entre los componentes de la máquina.
- **Bus de Datos**: Transporta los datos entre la memoria, la CPU y los dispositivos de entrada/salida.
- **Bus de Direcciones**: Indica la ubicación de los datos en la memoria.
- **Bus de Control**: Transporta señales de control que coordinan el funcionamiento de los demás buses y dispositivos.

**Unidad de Entrada/Salida (E/S)**:

Permite la interacción entre la computadora y el usuario o dispositivos externos. Incluye teclados, pantallas, discos duros, impresoras, entre otros.

</details>

---

## Finales

![image](https://github.com/user-attachments/assets/183b4a19-5c0d-46e9-bc9c-083854796011)
![image](https://github.com/user-attachments/assets/9b5cbd08-8209-4cfc-b5d8-b7c07890c391)
![image](https://github.com/user-attachments/assets/60e4083e-cbb4-4af3-b527-a0b863af6c33)