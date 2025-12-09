---
title: 'Introducción a los sitemas Operativos'
description: "Practica 1, 2 y 3 de Introducción a los Sistemas Operativos."
heroImage: { src: './thumbnail.jpg', color: '#FFFFFF' }
publishDate: '2022-07-15'
tags: 
    - Facultad
language: 'Spanish'
---



> El objetivo de esta práctica es que el alumno se familiarice con los conceptos básicos del sistema operativo GNU/Linux, así como con su entorno y comandos principales.


## 1) Características de **GNU/Linux**:

<details><summary>a) Mencione y explique las características más relevantes de GNU/Linux.</summary>

**Es multiusuario:** Cumple simultáneamente las necesidades de dos o más usuarios que comparten los mismos recursos, un sistema multiusuario permite que los usuarios accedan a los datos o procesos de una única maquina, desde diferentes computadoras o termínales

**Es multitarea y multiprocesador:** Puede realizar varias operaciones, funciones o ejecuciones al mismo tiempo

Los SO multitarea permiten realizar varias operaciones gracias a una operación denominada cambio de contexto que actúa de la siguiente manera, quita un proceso del CPU, ingresa uno nuevo, y luego vuelve a ingresar el proceso que quitó del CPU en una especie de cola de ejecución, sin que el procesador se entere de todo lo que está pasando, de modo, que pueda realizar varias tareas simultáneas. Es como una especie de engaño, que permite mejorar el rendimiento de los ordenadores y facilitar el trabajo a los usuarios.

Multiprocesador se refiere al número de procesadores del sistema, que es más de uno y éste es capaz de usarlos todos para distribuir su carga de trabajo. 

**Es altamente portable:** Se puede usar en cualquier ordenador que tenga el SO para el que fue programado sin la
necesidad de una instalación previa; significa que no hace falta la instalación de bibliotecas adicionales en el sistema para que pueda funcionar. 

**Posee diversos intérpretes de comandos, de los cuales algunos son programables**

- Es el método de interacción entre el usuario y la máquina (shell)
- CLI (interfaz de línea de comando) un ejemplo seria la terminal bash. 

**Permite el manejo de usuarios y permisos:** Nos permite darle permisos particulares a usuarios y archivos del file system.

**Todo es un archivo (hasta los dispositivos y directorios):** Todo es un fichero. Los directorios son ficheros, los ficheros son ficheros, y los dispositivos son ficheros. A veces a los dispositivos se les llama nodos, pero siguen siendo ficheros.

Los sistemas de ficheros de GNU/Linux se organizan en una estructura jerárquica, de tipo árbol.

El nivel más alto del sistema de ficheros es / o directorio raíz. Todos los demás ficheros y directorios están bajo el directorio raíz. Por ejemplo, `/home/jebediah/cheeses.odt` muestra la ruta completa al fichero cheeses.odt que está en el directorio jebediah, que a su vez está bajo el directorio home, que por su parte está bajo el directorio raíz (/).

**Cada directorio puede estar en una partición diferente (/temp, /home, etc.):** En Linux, el sistema de archivos se organiza en una estructura de árbol con una raíz denominada "/" (barra). Dentro de esta estructura de árbol, cada partición puede montarse en un directorio diferente, lo que significa que los archivos y directorios que se encuentran dentro de esa partición se harán accesibles a través del directorio montado.

Por ejemplo, si tienes una partición llamada /dev/sda1 y quieres montarla en el directorio /home, los archivos y directorios en esa partición estarán disponibles en el directorio /home. Si tienes otra partición llamada /dev/sda2 y quieres montarla en /temp, los archivos y directorios en esa partición estarán disponibles en el directorio /temp.

En resumen, en Linux, cada partición puede montarse en un directorio diferente en la estructura de árbol de archivos del sistema, lo que permite una mejor organización y gestión de los datos.

**Es case sensitive:** Sensible a las mayúsculas y minúsculas

**Es código abierto:** Software cuyo código fuente y otros derechos que normalmente son exclusivos para quienes poseen los derechos de autor, son publicados bajo una licencia de código abierto o forman parte del dominio público. En las licencias compatibles con la Open Source Definition el propietario de los derechos de autor permite a los usuarios utilizarlo, modificarlo, estudiarlo, aprovechar su documentación, redistribuir el software, a cualquiera, para cualquier propósito, ya sea en su forma modificada o en su forma original etc. 
</details>

<details><summary>b) Mencione otros sistemas operativos y compárelos con GNU/Linux en cuanto a los puntos mencionados en el inciso a.</summary>

- A diferencia de Windows y Mac, Linux no pertenece a ninguna compañía, sino que su desarrollo depende de la colaboración de un gran número de empresas y profesionales.
- Su uso esta mas enfocado a programadores dado que sus interfaces son menos amigables.
- Los demás sistemas suelen ser en su mayoría pagos y enfocados mas a lo comercial
- El manejo de permisos de Linux vuelve mas difícil la creación de un virus para dicho sistema mientras que en Windows es mas común.

</details>

<details><summary>c) ¿Qué es GNU?</summary>

GNU es un SO de tipo Unix pero libre, diseñado por miles de programadores, así como una gran colección de programas informáticos que componen al sistema, desarrollado por y para el GNU.

Está formado en su totalidad por software libre, mayoritariamente bajo términos
de copyleft. GNU es el acrónimo recursivo de "GNU's Not Unix" **(GNU no es Unix)**, nombre elegido debido a que GNU sigue un diseño tipo Unix y se mantiene compatible con este, pero se distingue de Unix por ser software libre y por no contener código de Unix.

</details>

<details><summary>d) Indique una breve historia sobre la evolución del proyecto GNU</summary>

- El proyecto GNU fue iniciado por Richard M. Stallman con el propósito de crear un sistema operativo completo y libre: el sistema GNU.
- Se baso principalmente en 4 libertades
    - **Libertad 1:** la libertad para ejecutar el programa con cualquier fin.
    - **Libertad 2:** La libertad de estudiar cómo trabaja el programa y de adecuarlo para que haga lo que usuario desee
    - **Libertad 3:** la libertad de redistribuir el programa de manera de colaborar con el resto de la sociedad.
    - **Libertad 4:** la libertad de hacer pública y distribuir a terceros la versión mejorada.

Pondria más pero a nadie le importa la historia de linux salu2.

</details>

<details><summary>e) Explique qué es la multitarea, e indique si GNU/Linux hace uso de ella.</summary>

Puede realizar varias operaciones, funciones o ejecuciones al mismo tiempo

Los SO multitarea permiten realizar varias operaciones gracias a una operación denominada cambio de contexto que actúa de la siguiente manera, quita un proceso del CPU, ingresa uno nuevo, y luego vuelve a ingresar el proceso que quitó del CPU en una especie de cola de ejecución, sin que el procesador se entere de todo lo que está pasando, de modo, que pueda realizar varias tareas simultáneas. Es como una especie de engaño, que permite mejorar el rendimiento de los ordenadores y facilitar el trabajo a los usuarios. 

`Linux es Multitarea:` La multitarea no consiste en hacer que el procesador realice más de un trabajo al mismo tiempo (un solo procesador no tiene esa capacidad), lo único que realiza es presentar las tareas de forma intercalada para que se ejecuten varias simultáneamente. Por lo tanto en Linux es posible ejecutar varios programas a la vez sin necesidad de tener que parar la ejecución de cada aplicación. 

**GNU/Linux si es multitarea.**

</details>

<details><summary>f) ¿Qué es POSIX?</summary>

POSIX (Interfaz de sistema operativo portátil) es un conjunto de interfaces de sistema
operativo estándar basadas en el sistema operativo Unix .

Definen una interfaz y un entorno estándar que puede utilizar un sistema operativo para proporcionar acceso a aplicaciones compatibles con POSIX.

El estándar también define un intérprete de comandos ( shell ) y programas de utilidad comunes . POSIX admite la portabilidad de aplicaciones en el nivel del código fuente , por lo que las aplicaciones se pueden crear para ejecutarse en cualquier sistema operativo compatible con POSIX.

</details>

---

## 2) Distribuciones de **GNU/Linux**:

<details><summary>a) ¿Qué es una distribución de GNU/Linux? Nombre al menos 4 distribuciones de GNU/- Linux y cite diferencias básicas entre ellas.</summary>

Una distribución es un conjunto de software de GNU, así como programas de sistema, librerías y aplicaciones de usuario, con también software de terceros (a veces), con una versión de un kernel de Linux, todo compilado, empaquetado, configurado y preparado para su instalación en una computadora.

En resumen una distribución de GNU/Linux es el sistema operativo preparado para ser instalado y usado en una computadora.

Desarrollar una distribución es elegir de entre todos los programas de sistema (compiladores, intérpretes, etc.) y aplicaciones de usuario (entornos gráficos de escritorio, editores de texto, paquetes de ofimática, etc.) de GNU y de software de terceros (a veces, no siempre), los que se crean convenientes según la distribución que se quiera crear, más pesada, más ligera, etc., sumado a una versión de un kernel de Linux.

**Distribución GNU/Linux = Software GNU + Software de terceros (no siempre) + Kernel de Linux.**

Cualquier persona con conocimientos de programación puede crear una distribución
GNU/Linux, por eso hay cientos de ellas.

Es tan indispensable el kernel de Linux como el conjunto de programas y librerías de GNU. Por ello cuando a una distribución GNU/Linux se le llama Linux a secas, es una falta de respeto hacia todo el software que GNU ha desarrollado y continua desarrollando como software libre y gratuito.

Debian, Opensuse, Fedora, Ubuntu.

- **`Debian:`** Se orienta a la estabilidad, en términos de ciclo de desarrollo. Sus actualizaciones y versiones se liberan cuando están listas y bien probadas. Lo cual es bueno para servidores, pero por otra parte nos limita compatibilidad con dispositivos de hardware más novedosos. Son muy exigentes en lo que respecta a Software Libre.
- **`Fedora:`** Se orienta a innovación con un ciclo de desarrollo corto de seis meses, y un tiempo de soporte de un año sobre sus paquetes. Lo más nuevo se encuentra en Fedora, a veces la gente desconfía de la solidez de sus paquetes sin embargo lo que sucede es que están en fase de maduración y se le integran mejores funcionalidades. Por ahí leí que Fedora es como probar lo que Linux ofrecerá dentro de seis meses.
- **`Opensuse:`** Novel se quedó sin sistema operativo para su plataforma de servidores y redes, así que compro Suse. Su panel de control para configuración lo hace fácil de configurar. Es un buena elección para aprender de servidores, pero posiblemente para cosas más sofisticadas dejarán las herramientas de configuración y harán ajustes personalizados. El mundo de Software Libre les critica fuertemente sus acuerdos de interoperabilidad con Microsoft.
- **`Ubuntu:`** Se propuso cambiarle la cara al mundo Linux y ciertamente lo ha logrado. Apuntando a ser fácil de usar hace bien simple la instalación de drivers y decodificadores privativos, cosa que se le critican los fundamentalistas del software libre. Su programa de enviar discos gratis hasta la puerta de tu casa ha significado su creciente popularidad. Tiene ciclo de desarrollo rápido, pero sus versiones tienen ciclos de soporte alternado, entre periodos largos y cortos, tratando de tener estabilidad de soporte y flexibilidad de desarrollo.

</details>

<details><summary>b) ¿En qué se diferencia una distribución de otra?</summary>

Las mayores diferencias se encuentran sobre todo en distribuciones comerciales, donde se han introducido herramientas para una fácil instalación, detección de software etc... 

**Diferencias:**

- Proceso de instalación.
- Ayudantes o wizard que te ayuden en la configuración de tu máquina.
- Gestores de paquetes.
- Secuencia en el proceso de arranque.

</details>

<details><summary>c) ¿Qué es Debian? Acceda al sitio 1 e indique cuáles son los objetivos del proyecto y una breve cronología del mismo.</summary>

Debian es una comunidad de desarrolladores , que mantiene un sistema operativo GNU basado en software libre. El sistema se encuentra precompilado, empaquetado y en formato deb para múltiples arquitecturas de computador y para varios núcleos.

El proyecto Debian fue anunciado inicialmente 1993 por Ian Murdock. Debian 0.01 fue lanzado el 16 de agosto de 1993 y la primera versión estable fue hecha en 1996.

Nació como una apuesta por separar en sus versiones el software libre del software no libre. El modelo de desarrollo del proyecto es ajeno a motivos empresariales o comerciales, siendo llevado adelante por los propios usuarios, aunque cuenta con el apoyo de varias empresas en forma de infraestructuras.

Debian no vende directamente su software, lo pone a disposición de cualquiera en Internet, aunque sí permite a personas o empresas distribuirlo comercialmente mientras se respete su licencia.

La primera adaptación del sistema Debian, siendo también la más desarrollada, es Debian GNU/Linux, basada en el núcleo Linux, y como siempre utilizando herramientas de GNU

Los nombres de las versiones de Debian son tomados de la película Toy Story. Hasta la fecha,
hay quince versiones estables (con sus respectivas revisiones) enumeradas en la tabla adjunta:

</details>

---

## 3) Estructura de GNU/Linux:

<details><summary>a) Nombre cuales son los 3 componentes fundamentales de GNU/Linux.</summary>

Kernel, shell y Filesystem.

</details>


<details><summary>b) Mencione y explique la estructura básica del Sistema Operativo GNU/Linux.</summary>

Estructura. Nos ocuparemos de tres componentes principales:

- **`Kernel:`** El núcleo se podría definir como el corazón de este sistema operativo. Es a grandes rasgos, el encargado de que el software y el hardware de una computadora puedan trabajar juntos.
- **`Shell:`** Es un programa que recibe lo que se escribe en una terminal de texto y lo convierte en instrucciones para el sistema operativo.
- **`Filesystem:`** Es la forma lógica en que dentro de un SO se organizan y se administran los archivos. 

</details>

---

## 4) Kernel:


<details><summary>a) ¿Qué es? Indique una breve reseña histórica acerca de la evolución del Kernel de GNU/Linux.</summary>

El kernel es la estructura principal del SO, es el que se encarga de que el software y el hardware puedan trabajar juntos.

Es un núcleo monolítico hibrido, y esta licenciado bajo la licencia GPL v2. 

***Evolución***

En 1991 Linus Torvalds inicia la programación del kernel Linux basándose en Minix (un clon de Unix desarrollado por Tenembaum en 1987).

En octubre de 1991 sale la primera versión oficial Linux(0.02) .

En 1992 se une Linux con el proyecto Gnu de Richard Stallman , la versión 1.0 aparece el 14 de marzo del 94’ , luego el desarrollo de Gnu/Linux se sigue desarrollando por miles de programadores, en el 96’ adoptan como mascota oficial a Tux (pingüinito).

En julio de 1996 se lanza la versión 2.0 y se define la nomenclatura de versionado. Se desarrollo hasta febrero de 2004 y termino con la 2.0.40. En enero de 1999 se lanza la versión 2.2, que provee mejoras de portabilidad entre otras y se desarrolla hasta febrero de 2004 terminando en la versión 2.2.26.

En 2001 se lanza la versión 2.4 y se deja de desarrollar a fines del 2010 con la 2.4.37.11. La versión 2.4 fue la que catapulto a GNU/Linux como un SO estable y robusto.

Durante este período es que se comienza a utilizar Linux más asiduamente Núcleo.

A fines del 2003 se lanza la versión 2.6, Esta versión ha tenido muchas mejoras para el SO dentro de las que se destacan soporte de hilos, mejoras en la planificación y soporte de nuevo hardware.

El 3 de agosto de 2011 se lanza la versión 2.6.39.4 anunciándose la misma desde meses
previos como la última en su revisión.

El 17 de julio de 2011 se lanza la versión 3.01, No agrega mayores cambios.

La decisión del cambio son los 20 años del SO y no superar los 40 números de revisión. Totalmente compatible con 2.6. La última versión estable es la 5.19.6 (agosto de 2022). 

</details>


<details><summary>b) ¿Cuáles son sus funciones principales?</summary>

Funciones principales: Administrar la memoria, CPU y E/S, administración de procesos y
comunicación y concurrencia. 

</details>



<details><summary>c) ¿Cuál es la versión actual?</summary>

La versión del kernel actual es 5.16. Lo demas a nadie le importa 

</details>


<details><summary>¿Cómo se definía el esquema de versionado del Kernel en versiones anteriores a la 2.4?</summary>

En la versión 2.0 se define la nomenclatura del versionado:

Modo de Versionar: A.B.C.[D]

- `A)` Denota Versión. Cambia con menor Frecuencia. en 1994 (versión 1.0), en 1996 (versión 2.0) y en 2010(3.0).
- `B)` Denota Mayor revisión. Antes de la versión 2.6, los números impares indicaban desarrollo, los pares producción.
- `C)` Denota Menor revisión. Solo cambia cuando hay nuevos drivers o características. -------------------------- la D se agrega a partir de la visión 2.4 ------------------------------------------

- `D)` Cambia cuando se corrige un grave error sin agregar nueva funcionalidad.
(casi no se usan en la rama de versiones 3.x, 4.x y 5.x viéndose reflejado en el componente C del SO).

Ejemplo actualidad: versión 5.19.6

</details>

<details><summary>¿Qué cambió en el versionado se impuso a partir de la versión 2.6?</summary>

- Antes de la versión 2.6, los números impares indicaban desarrollo, los pares producción.

</details>

<details><summary>d) ¿Es posible tener más de un Kernel de GNU/Linux instalado en la misma máquina?</summary>

Sí. Se puede instalar en la misma máquina, pero 2 núcleos corriendo simultáneamente en Linux es imposible

</details>

<details><summary>e) ¿Dónde se encuentra ubicado dentro del File System?</summary>

Se encuentra ubicado el /lib/: librerías esenciales compartidas y módulos de kernel

Directorio raíz de toda la jerarquía de archivos del sistema.

`\` Jerarquia Primaria

- `/bin/` Comandos binarios esenciales de usuario
- `/boot/` Archivos estáticos del selector de arranque
- `/dev/` Archivos de unidades
- `/etc/` Configuración del sistema de Host Especifico
- `/home/` Directorio "home" de usuario
- `/lib/` Librerias esenciales compartidas y módulos de Kernel
- `/media/` Punto de Montaje para medios removibles
- `/mnt/` Punto de Montaje temporal para sistemas de archivos
- `/opt/` Agregados de paquetes de Software y Aplicaciones
- `/sbin/` Binarios de Sistema
- `/srv/` Datos para los servicios provistos por este sistema
- `/tmp/` Archivos temporales
- `/usr/` Unidades y aplicaciones de (Multi) usuario
- `/var/` Variables de archivo
- `/root/` Directorio "Home" del usuario Root
- `/proc/` Documentación del sistema de archivos virtual del Kernel y las condiciones de los procesos en archivos de texto

</details>

<details><summary>f) ¿El Kernel de GNU/Linux es monolítico? Justifique.</summary>

El kernel Gnu/Linux si es **monolítico**.

**`Kernel monolítico`** quiere decir que toda funcionalidad que implementa el SO se ejecuta en modo kernel o supervisor, ejemplo cuando un usuario quiere ejecutar un proceso se pasa a modo kernel se resuelve todo ahí y después regresa a modo usuario cuando esa resolución termino, toda la lógica se encuentra en el modo kernel. 

**`Ventajas`** el modelado, el diseño implica menos tiempo en la resolución de las cosas. (cambio de modo - resuelvo lo que tengo que resolver - vuelvo a modo usuario). 

También existe el ***kernel microkernel***, se trata de que el modo kernel o supervisor este el menos tiempo posible y trata de dejar en modo usuario diferentes componentes para que se ejecuten en modo usuario y que hagan de apoyo al modo kernel.

**`Ejemplo:`** el SO tiene un conjunto de procesos que van a ir cambiando cada 3 segundos, cada vez que cambia de proceso eso debe estar en modo kernel, ahora la selección de cuál de esos 3 procesos va a ser seleccionado para a entrar a ejecutarse se puede hacer en modo usuario.

Básicamente el kernel microkernel reduce al máximo el uso del modo kernel y delega cosas al modo usuario cosa que no sucede con el modo kernel.

</details>

---

## 5) Intérprete de comandos (Shell):

<details><summary>a) ¿Qué es?</summary>

La shell también conocida como CLI (interfaz de línea de comando), es el que gestiona la interacción entre el usuario y el sistema operativo.

(es solo un programa que hará de mediador entre nosotros y el kernel del SO. Puede ser tanto gráfico Ej. La interfase X-Window, como de texto Linux (Ej. El bash).

La Shell no forma parte básico del sistema operativo si no que la misma dialogo con el kernel.\
La shell es iniciada por un proceso llamado login y dado que cada usuario tiene asignado una shell por defecto la misma se inicia cada vez que un usuario comienza a trabajar en su estación de trabajo, es decir se loguea en una terminal. Dentro del contenido del archivo /etc/passwd, se puede ver cual es la shell que cada usuario tiene asignada por defecto.

</details>

<details><summary>b) ¿Cuáles son sus funciones?</summary>

Es el encargado de ejecutar programas a partir del ingreso de comandos.

Ejemplo: control de procesos, redirección de entrada/salida, listado y lectura de ficheros, protección, comunicaciones y un lenguaje de órdenes para escribir programas por lotes o (scripts o guiones).

</details>

<details><summary>c) Mencione al menos 3 intérpretes de comandos que posee GNU/Linux y compárelos entre ellos.</summary>

- **`Bourne Shell (sh)`** Creado por S. Bourne, es el más utilizado en la actualidad. Su símbolo del sistema es $. Es el shell estándar y el que se monta en casi todos los sistemas UNIX/Linux.
- **`Korn Shell (ksh)`** Escrito por David Korn, amplía el shell del sistema añadiendo historial de órdenes, edición en línea de órdenes y características ampliadas de programación. 
- **`Bourne Again Shell (bash)`** Fue creado para usarlo en el proyecto GNU. BASH, por lo tanto, es un shell o intérprete de comandos GNU que incorpora la mayoría de distribuciones de Linux. Es compatible con el shell sh. Además, incorpora algunas características útiles de ksh y csh, y otras propias como la edición de línea de comandos, tamaño ilimitado del historial de comandos, control de los trabajos y procesos, funciones y alias, cálculos aritméticos con números enteros, etc. Su símbolo del sistema es nombre_usuario@nombre_equipo. 

Los intérpretes se diferencian entre sí básicamente en la sintaxis de sus comandos y en la interacción con el usuario.

</details>

<details><summary>d) ¿Dónde se ubican (path) los comandos propios y externos al Shell?</summary>

**PATH:** es una variable y su contenido es una cadena que contiene rutas de
directorios separadas por dos puntos.

Por ejemplo, para mostrar el valor de una variable en la shell se debe escribir:

- `echo $ nombrevariable `
- en el caso de la variable path seria
- echo$ PATH

la variable PATH contiene una lista de directorios separados por dos puntos. Estos son los directorios en los que el shell busca el comando que el usuario escribe desde el teclado.

La búsqueda no se realiza en el orden en el que están los directorios en la variable PATH.

- Los `comandos propios`, también conocidos como built-in commands, son aquellos que están integrados en la propia shell. Estos comandos suelen ser los más básicos y necesarios para la gestión de la sesión y del sistema, como por ejemplo: cd (para cambiar de directorio), echo (para imprimir texto en la pantalla), exit (para salir de la sesión), entre otros.
- Por otro lado, los `comandos externos` son aquellos que se encuentran en el sistema operativo y que son invocados desde la shell. Estos comandos pueden ser programas completos o scripts que realizan una tarea específica. Ejemplos de comandos externos son ls (para listar los archivos en un directorio), cat (para mostrar el contenido de un archivo), grep (para buscar patrones en un archivo), entre otros.

En resumen, los comandos propios están integrados en la propia shell y los comandos externos son programas o scripts que se ejecutan desde la shell.

</details>

<details><summary>e) ¿Por qué considera que el Shell no es parte del Kernel de GNU/Linux?</summary>

La principal razon es que es muy remplazable, en caso de que falle, se puede reiniciar y todo tendria que seguir andando.

Y tambien

La shell no forma parte del kernel de Linux porque es una aplicación que proporciona una interfaz de línea de comandos para interactuar con el sistema operativo, mientras que el kernel es la parte central del sistema operativo que administra los recursos del hardware y proporciona servicios básicos al software. Aunque la shell y el kernel trabajan juntos, son dos componentes distintos con diferentes funciones y responsabilidades.

</details>

<details><summary>f) ¿Es posible definir un intérprete de comandos distinto para cada usuario?</summary>

Si, es posible. 

**¿Desde dónde se define?**

Se definen en etc/passwd 

**¿Cualquier usuario puede realizar dicha tarea?**

No, cada usuario puede definir su o sus intérpretes

</details>

---

## 6) Sistema de Archivos (File System):

<details><summary>a) ¿Qué es?</summary>

Es la forma en que dentro de un SO se organizan y se administran los archivos.

Los usuarios de Linux hacen una distinción del filesystem. Dicen que un filesystem es un esquema de programación que se utiliza para organizar y buscar archivos en una
partición. Mientras que el sistema de archivos se refiere a todos los archivos de la
computadora.

Lo que esto significa, básicamente, es que el filesystem es la estructura que se utiliza para ver, buscar y usar los archivos mediante Ubuntu. Mientras que el sistema de archivos son todos los archivos separados de esa estructura y el formato de esos archivos. 

</details>

<details><summary>b) Mencione sistemas de archivos soportados por GNU/Linux.</summary>

A continuación veremos una lista con algunos filesystem utilizados hoy en día:

- ext2
- ext3
- ReiserFS
- XFS

</details>

<details><summary>c) ¿Es posible visualizar particiones del tipo FAT y NTFS en GNU/Linux?</summary>

Si. En estos momentos existen distribuciones de GNU-Linux que pueden realizar operaciones de lectura y escritura sobre ellas. 

</details>

<details><summary>d)  ¿Cuál es la estructura básica de los File System en GNU/Linux?</summary>

![image](https://user-images.githubusercontent.com/55964635/227661611-40497548-8ce3-4142-88f9-e193515a9d88.png)

Mencione los directorios más importantes e indique qué tipo de información se encuentra en ellos.

- **`/`** Tope de la estructura de directorios. Es como el C:\ (raíz).
- **`/home`** Se almacenan archivos de usuarios (Mis documentos)
- **`/var`** Información que varía de tamaño (logs, BD, spools)
- **`/etc`** Archivos de configuración del sistema.
- **`/bin`** Archivos binarios y ejecutables.
- **`/dev`** Enlace a dispositivos.
- **`/usr`** Aplicaciones de usuarios

</details>

<details><summary>e) ¿A qué hace referencia la sigla FHS?</summary>

(Filesystem Hierarchy Standard - Estándar de jerarquía del sistema de archivos).

FHS: es el estándar que siguen todos los sistemas operativos unix, para organizar el sistema de archivos. 

</details>

---

## 7) Particiones:

<details><summary>a)  Definición</summary>

Es el nombre que recibe cada división de una sola unidad física de almacenamiento
de datos. (es un pedazo de una unidad ).

Toda partición tiene su propio sistema de archivos (formato); generalmente, casi cualquier sistema operativo interpreta, utiliza y manipula cada partición como un disco físico independiente, a pesar de que dichas particiones estén en un solo disco físico.

</details>

<details><summary>Tipos de particiones</summary>

Existen 3 tipos diferentes de particiones:

- **`Partición primaria`** Son las divisiones crudas o primarias del disco, solo puede haber 4 de éstas o 3 primarias y una extendida. Depende de una tabla de particiones. Un disco físico completamente formateado consiste, en realidad, de una partición primaria que ocupa todo el espacio del disco y posee un sistema de archivos. A este tipo de particiones, prácticamente cualquier sistema operativo puede detectarlas y asignarles una unidad, siempre y cuando el sistema operativo reconozca su formato (sistema de archivos). 
- **`Partición extendida`** También conocida como partición secundaria es otro tipo de partición que actúa como una partición primaria; sirve para contener múltiples unidades lógicas en su interior. Fue ideada para romper la limitación de 4 particiones primarias en un solo disco físico. Solo puede existir una partición de este tipo por disco, y solo sirve para contener particiones lógicas. Por lo tanto, es el único tipo de partición que no soporta un sistema de archivos directamente.
- **`Partición lógica`** Ocupa una porción de la partición extendida o la totalidad de la misma, la cual se ha formateado con un tipo específico de sistema de archivos (FAT32, NTFS, ext2,...) y se le ha asignado una unidad, así el sistema operativo reconoce las particiones lógicas o su sistema de archivos. Puede haber un máximo de 23 particiones lógicas en una partición extendida.

</details>

<details><summary>Ventajas</summary>

- **`Facilidad de reinstalación.`** Si separamos los archivos Windows de nuestra información personal, será mucho más fácil reinstalar Windows. Esto es porque nos «ata» todo lo que tenemos guardado, evitando formatear o intentando hallar otras soluciones antes que esa. De hecho, podemos clonar la partición de Windows para hacer restauración.
- **`Copias de seguridad.`** Las copias de seguridad son las que nos salvan de los problemas catastróficos (que me lo digan a mí). Siempre hay que funcionar sobreseguro, lo que se traduce en tener backups de toda la información, o de la más importante. Las particiones nos dan la ventaja de tener un volumen para copias de seguridad.
- **`Más seguridad.`** Imaginad que nuestra partición de Windows queda infectada por un virus y perdemos toda la información hallada en ella. Tener nuestra información importante en otra partición nos salva de un gran apuro, especialmente si el virus es ransomware. Igualmente, instalad un antivirus y funcionad con él.
- **`Mejor organización.`** Esto depende de la persona, pero es innegable que podemos organizarnos mucho mejor teniendo varias particiones. Así, podemos clasificar toda nuestra información de mayor a menor importancia, o según el tipo de información, tamaño, etc. 
- **`Instalar dos o más sistemas operativos.`** En mi opinión, es uno de los motivos principales por los que las personas hacen particiones. En el pasado, hice una partición para usar OS X y Windows, creando un arranque dual que me permitiera elegir el sistema operativo que quisiese iniciar. Al fin y al cabo, tenéis un volumen listo para usar. 
- **`Máquinas virtuales.`** Quienes trabajéis con ellas, haréis particiones para instalar una máquina virtual en ella. Es una gran idea para separar nuestro PC de nuestra máquina virtual. Por tanto, podemos tener ambos contenidos separados; de lo contrario, si algo falla, podríamos perder toda la información de nuestro PC y máquina virtual.

</details>

<details><summary>Desventajas</summary>

- **`Experiencia más lenta.`** Si tenemos muchas particiones, puede que nos cueste encontrar un archivo en concreto. Aquí hay que ser muy metódico y ordenado para saber qué partición es vital, como cuál es prescindible. Al final, tardamos en encontrar algo por tener demasiadas particiones.
- **`Posibilidad de errores.`** Existe la posibilidad de que surjan más fallos cuando tenemos muchas particiones. Son meras cuestiones de probabilidad, así que no hay que volverse loco.
- **`Desorden en los volúmenes.`** Es fácil que esto ocurra; de hecho, me ha pasado muchas veces a mí. Cuando hacemos una partición, formateamos, volvemos a crear un volumen, etc., podemos crear particiones extendidas que no van a ningún sitio. En mi caso, se trataba de una partición de 700 MB en un HDD de 2 TB: el impacto es mínimo. Sin embargo, no tiene gracia que nos pase en un SSD de poca capacidad.
- **`Innecesario para el usuario medio.`** Al final, las personas que utilizan el PC para «3 cosas», no requieren particiones, ni se quieren liar a aprender cómo funciona esto. Por tanto, es una opción limitada a aquellos que buscan cierta utilidad. 

</details>

<details><summary>b) ¿Cómo se identifican las particiones en GNU/Linux? (Considere discos IDE, SCSI y SATA).</summary>

El primer disco duro **`IDE`** se conoce como /dev/hda. Si tenemos un segundo disco duro IDE se llamará /dev/hdb, etc.

Los discos duros **`SCSI`** y **`SATA`** se denominan /dev/sda, /dev/sdb, etc. En cada disco son representadas **añadiendo un número decimal al nombre del disco**: sda1 y sda2 representan a la primera y segunda partición en la primera unidad de disco SCSI en el sistema.

</details>

<details><summary>c) ¿Cuántas particiones son necesarias como mínimo para instalar GNU/Linux? Nómbrelas indicando tipo de partición, identificación, tipo de File System y punto de montaje.</summary>

Si bien el número **mínimo absoluto de particiones sería uno (1)**, una **instalación típica de GNU / Linux tendrá al menos dos (2)** particiones: la partición raíz (indicada como /) y la partición de **intercambio**. Puede optar por tener todos los archivos en una sola partición dentro de la mayoría de las distribuciones durante la instalación.

El esquema de particiones estándar para la mayoría de las instalaciones domésticas de Linux es el siguiente: Una partición de 12-20 GB para el sistema operativo, que se monta como / (llamada **“raíz”** o **root**) Una partición más pequeña que se utiliza para aumentar su RAM, montada y denominada **/swap**. Una mampara más grande para uso personal, montada como **/home**

Para una instalación de **GNU/Linux saludable se recomiendan 3 particiones swap, root y home**.

**Hay 2 tipos de particiones principales en un sistema Linux:**

- **`Partición de datos`** datos normales del sistema Linux, incluida la partición raíz que contiene todos los datos para iniciar y ejecutar el sistema; y.
- **`Partición de intercambio`** expansión de la memoria física de la computadora, memoria extra en el disco duro.
- **`Tipo de filesystem`** Sistema de archivos Ext2, ext3 y ext4: Así como Apple y Microsoft tienen sus propios sistemas, estos tres (cada uno evolución del anterior) son los utilizados por las distribuciones GNU/Linux. El principal inconveniente es que sólo puede ser utilizado en esta familia de sistemas operativos. 

**`Tipo de filesystem`** Sistema de archivos **Ext2, ext3 y ext4**: Así como Apple y Microsoft tienen sus propios sistemas, estos tres (cada uno evolución del anterior) son los utilizados por las distribuciones GNU/Linux. El principal inconveniente es que sólo puede ser utilizado en esta familia de sistemas operativos. 

</details>

<details><summary>d) Ejemplifique diversos casos de particionamiento dependiendo del tipo de tarea que se deba realizar en su sistema operativo.</summary>

**`Integración de nuevas adquisiciones`** Si forma una empresa nueva. La empresa recién formada no utiliza las mismas aplicaciones para las nóminas, el inventario y la facturación. Tiene previsto consolidar las dos empresas en un solo conjunto de aplicaciones, pero esta consolidación tardará un tiempo. Mientras tanto, debe reducir el coste de los centros de datos con rapidez. 

Por tanto, decide crear particiones lógicas para las aplicaciones utilizadas por la empresa recién adquirida. Instala un sistema operativo y las aplicaciones utilizadas por la empresa nueva en la partición lógica. Si las cargas de trabajo combinadas necesitan más recursos. 

**`Creación de varios entornos de cliente`** El usuario suministra servicios e-commerce de alta disponibilidad a diversos clientes. Proporciona recursos de sistema, aplicaciones y soporte técnico a cada cliente, y cada cliente puede configurar y utilizar independientemente las aplicaciones ejecutadas en los recursos de sistema suministrados. En un entorno de este tipo, es esencial aislar a los clientes para que sólotengan acceso a sus recursos. Sin embargo, dedicar un servidor físico a cada cliente tiene un coste prohibitivo, y no permite aumentar ni disminuir fácilmente la cantidad de recursos de sistema utilizados por cada cliente. 

Por tanto, decide crear una partición lógica para cada cliente. Instala un sistema operativo y aplicaciones en cada partición lógica. A continuación, puede utilizar el particionamiento dinámico para añadir recursos a particiones lógicas o eliminar recursos de ellas según sea necesario. Si un cliente deja de utilizar el servicio, puede suprimir la partición lógica de dicho cliente y reasignar los recursos a otras particiones lógicas 

</details>

<details><summary>e) ¿Qué tipo de software para particionar existe? Menciónelos y compare</summary>

Existen 2 tipos:

- **Destructivos:** permiten crear y eliminar particiones (fdisk)
- **No destructivo:** permiten crear, eliminar y modificar particiones

</details>

---

## 8) Arranque (bootstrap) de un Sistema Operativo:

<details><summary>a) ¿Qué es el BIOS?</summary>

La BIOS (Sistema Básico de Entrada/Salida) es un software que inicializa y comprueba todos los componentes de hardware durante el arranque de la máquina. También prepara el equipo para que el Sistema Operativo se cargue y se ejecute. Su nombre viene de las siglas en inglés Basic Input Output System.

La Bios es un software de bajo nivel que se encuentra en el Motherboard. Cuando se arranca la computadora el bios se ejecuta, realizando el POST (power – on Self -test) que incluye rutinas que, entre otras actividades, fijan valores de señales internas y ejecutan test internos (ram , teclado etc). 

</details>

<details><summary>¿Qué tarea realiza?</summary>

- **`POST`** POST es un acrónimo de Power-On Self Test (Autocomprobación de encendido) que se ejecuta en tu PC en el momento en que la enciendes. El POST prueba el hardware de tu computadora y se asegura de que no exista ninguna avería ni haya errores presentes en su sistema operativo.
El POST comprueba todo, desde el teclado y la unidad de disco, hasta la velocidad de la RAM en una computadora y los puertos integrados. Si todo está en orden, POST continuará como de costumbre y permitirá que tu PC se inicie normalmente. Si se detecta un error, el BIOS emitirá un mensaje de error que puede aparecer en forma de texto en la pantalla o una serie de pitidos indicativos de dicho error. Estos sonidos siempre son señales para mensajes determinados, por lo que, si te sucede esto, deberás verificar lo que ello significa para el hardware de tu computadora.
- **`Configuración del CMOS`** Tu PC almacena todas las configuraciones de bajo nivel como la hora del sistema y la configuración de hardware dentro del CMOS. Esto significa que cada cambio que realices en la estructura del BIOS se guardará en este chip de memoria especial llamado Semiconductor Complementario de Óxido Metálico, o CMOS (por sus siglas en inglés). La configuración del CMOS es responsable, a su vez, de configurar tu contraseña, hora y fecha.
- **`Cargador de arranque`** El cargador de arranque, programa que vive dentro de la EPROM o ROM de tu computadora, tiene la tarea de leer el sector de arranque del disco duro de tu PC para moverse a lo largo de todo el proceso de carga del sistema operativo. 

</details>

<details><summary>b) ¿Qué es UEFI?</summary>

UEFI (Unified Extensible Firmware Interface o Interfaz de Firmware Extensible Unificada). Es la Alianza entre varias compañías con el objetivo de modernizar el proceso de arranque, querían reemplazar a la BIOS. Sus funciones son parecidas a los de la BIOS, pero mejoradas. UEFI aporta criptografía, autenticación por red, y una interfaz gráfica. 

</details>

<details><summary>¿Cuál es su función?</summary>

Usa el sistema GPT (GUID Partition table) para solucionar algunas limitaciones del MBR, tales como la cantidad de particiones y capacidad máxima del dispositivo particionado.

</details>

<details><summary>c) ¿Qué es el MBR?</summary>

Sector de arranque – MBR

El Master Boot Record es el primer sector del disco físico.

Se ubica en el cilindro 0, cabeza 0, sector 1. En todos los discos existe un MBR, pero el mismo es tenido en cuenta si el disco contiene las particiones del sistema.

El tamaño de MBR coincide con el tamaño estandard de sector del disco, generalmente 512 bytes. Estos bytes contienen lo siguiente:

</details>

<details><summary>¿Que es el MBC?</summary>

El MBC es un pequeño código que permite arrancar el sistema operativo. La tarea del MBC consiste en buscar una entrada de la tabla de particiones marcada con el valor 0x80 indicando que esta entrada es booteable lo cual indica que la partición correspondiente a esta entrada es booteable. La última acción del BIOS es leer el MBC. Lo lleva a memoria y lo ejecuta. 

</details>

<details><summary>d) ¿A qué hacen referencia las siglas GPT?</summary>

Una partición GPT GUID Partition Table es un estándar diseñado para realizar la configuración de las tablas de particiones y su ubicación en medios de almacenamiento como los discos duros físicos.

Puede ser utilizado independientemente de la UEFI.

</details>

<details><summary>¿Qué sustituye? Indique cuál es su formato.</summary>

`MBR` es la tabla de particiones tradicional que soporta los sistemas operativos más antiguos, mientras que `GPT` es un nuevo sustituto que no tiene límites en cuanto al tamaño del disco y el número de particiones que se pueden crear

**`Las ventajas de GPT sobre MBR`**

- Soporta discos duros más grandes que 2TiB.
- Permite crear particiones teóricamente ilimitadas. 
- Contiene una verificación de redundancia cíclica para comprobar la integridad de sus datos.
- Contiene la copia de seguridad del encabezado GPT primario y las entradas de la partición que protege mejor los datos del disco.

</details>

<details><summary>e) ¿Cuál es la funcionalidad de un “Gestor de Arranque”? ¿Qué tipos existen? ¿Dónde se instalan? Cite gestores de arranque conocidos.</summary>

Un gestor de arranque, es un programa que se encarga del inicio del ordenador, antes del sistema operativo, y que nos permite elegir el sistema operativo que queremos cargar, es decir se encarga del bootstrap (carga) o booteo del sistema.

Es el encargado de carga el sistema operativo (kernel) de un ordenador en la memoria RAM.

Se ejecuta luego del código de la BIOS.

Los datos de un sistema operativo deben cargarse directamente en la memoria RAM al iniciarse el dispositivo. Esto es posible con el bootloader, también conocido como gestor de arranque. El bootloader suele ejecutarse directamente al arrancar un dispositivo usando algún medio que sea booteable, es decir, que sirva como unidad de arranque, como puede ser un disco duro, un CD o DVD, o un stick booteable. El medio de arranque recibe la información acerca de dónde se encuentra el bootloader por parte del firmware del ordenador (BIOS, por ejemplo). Al proceso completo se le denomina inicio, arranque o, en inglés to boot. 

En lo que a la ubicación de los bootloaders se refiere, se han consolidado dos opciones: 

- **`El bootloader se guarda en el primer bloque del medio booteable o de arranque (MBR):`** Está estrechamente relacionada con el principio de los Master Boot Records, que no solo contienen la referencia necesaria por parte del firmware hacia el bootloader, sino también el software de inicio en sí. Para el record se reserva siempre el primer bloque o sector de memoria disponible en el medio. Este bloque o sector también es llamado, precisamente por esta función tan importante, boot block o boot sector.
- **`El bootloader se guarda en una partición específica del medio de arranque:`** El sistema operativo usa como lugar de almacenamiento del bootloader una partición seleccionada, si bien el sistema de archivos de base y la tabla de particiones utilizada no tienen por qué coincidir en absoluto. El firmware siempre es un factor decisivo y, este tipo de ubicación del bootloader, requiere además un formato de archivo específico del gestor de arranque. En dispositivos con UEFI se trata, por ejemplo, del formato PE/COFF (Portable Executable / Common Object File Format). 

**Algunos gestores de arranque: GRUB**
- GRUB 2
- LILO o SYSLINUX.
- NTLDR
- GAG
- YaST 

GRand Unified Bootloader(grub): gestor de arranque múltiple que se usa para iniciar dos o más sistemas operativos instalados en un mismo ordenador. 

</details>

<details><summary>f) ¿Cuáles son los pasos que se suceden desde que se prende una computadora hasta que el Sistema Operativo es cargado (proceso de bootstrap)?</summary>

Cuando aprietas el botón de arranque de un ordenador, lo primero que aparece en la pantalla son los datos acerca del hardware del equipo. El software responsable de esta información es, en primer lugar, el ya mencionado firmware, que los productores de los dispositivos por lo general implementan en una memoria flash en la placa base o mainboard. En la mayoría de los ordenadores de mesa y portátiles se apuesta por el ya veterano BIOS (Basic Input/Output System) o por el más reciente UEFI (Unified Extensible Firmware Interface). Ambos programas reúnen diferentes datos del hardware y para generar, entre otras cosas, una lista completa de todas las unidades de disco disponibles en el dispositivo. 

Una vez se ha completado este proceso, el firmware comprueba uno a uno los soportes de datos encontrados en busca del bootloader o, más concretamente, la llamada boot signature o boot record. La búsqueda se inicia siempre en los medios extraíbles conectados (CD/DVD, stick USB, discos duros externos, etc.) y luego pasa a los discos duros internos. En estos últimos, el bootloader (o la boot signature) suele estar en el Master Boot Record (MBR), que también aloja la tabla de particiones del soporte de datos. Cuando se encuentre un bootloader, este se cargará y se iniciará así el sistema. Si la búsqueda, en cambio, no tiene éxito, el firmware mostrará un mensaje de error. 

</details>

<details><summary>g) Analice el proceso de arranque en GNU/Linux y describa sus principales pasos.</summary>

Ell flujo de control durante el arranque es desde el **[BIOS]()**, al **[gestor de arranque]()** y al núcleo (**[kernel]())**). 

- **Kernel:** Este inicia el planificador (para permitir la **[multitarea]()**) y ejecuta el primer **[espacio de usuario]()** (fuera del espacio del núcleo) y el programa de inicialización (que establece el entorno de usuario y permite la interacción del usuario y el **[inicio de sesión]())**, momento en el que el núcleo se inactiva hasta que sea llamado externamente.

- La etapa del **[cargador de arranque]()** no es totalmente necesaria. Determinadas BIOS pueden cargar y pasar el control a Linux sin hacer uso del cargador. Cada proceso de arranque será diferente dependiendo de la arquitectura del **[procesador]()** y el *BIOS*.

- En el apagado, Init es llamado a cerrar toda las funcionalidades del espacio de usuario de una manera controlada, de nuevo a través de secuencias de comandos, tras lo cual el Init termina y el núcleo ejecuta el apagado.

</details>

<details><summary>h) ¿Cuáles son los pasos que se suceden en el proceso de parada (shutdown) de GNU/Linux?</summary>

- Se notifica a los usuarios este hecho.
- Se bloquea el sistema para que nadie más pueda acceder exceptuando el **root**.
- Se envía la señal **SIGTERM** (señal de terminación) a todos los procesos no definidos en **inittab**(contiene un registro para cada proceso que define los niveles de ejecución para ese proceso) para el siguiente run level, provocando que terminen su ejecución de modo ordenado.

</details>

<details><summary>i) ¿Es posible tener en una PC GNU/Linux y otro Sistema Operativo instalado? Justifique</summary>

Si es posible ya lo vimos anteriormente gracias a las particiones de disco instalar múltiples sistema operativos o a través de maquinas virtuales.

</details>

---

## 9) Archivos

<details><summary>a) ¿Cómo se identifican los archivos en GNU/Linux?</summary>

Un nombre de archivo puede tener entre 1 y 255 caracteres. recomendable emplear los caracteres con significado especial en Linux, que son los siguientes: **= \ ^ ~ ' " ` * ; - ? ( )! & ~ < >**

</details>

<details><summary>b) Investigue el funcionamiento de los editores vi y mcedit, y los comandos cat y more.</summary>

- **VI**
Es el editor de texto clásico en UNIX. Puede usarse en cualquier tipo de terminal con un mínimo de teclas.

**MODOS DE VI:**
Existen tres modos o estados de vi:

- **Modo comando:** Este es el modo en el que se encuentra el editor cada vez que se inicia.
Las teclas ejecutan acciones (comandos) que permiten mover el cursor, ejecutar comandos de edición de texto, salir de **vi**, guardar cambios, etc.
- **Modo inserción o texto:** Este es el modo que se usa para insertar el texto. Existen varios
comandos que se pueden utilizar para ingresar a este modo.
- **Modo línea o ex:** Se escriben comandos en la última línea al final de la pantalla.

- **MCEDIT**

Al igual que Vi funciona como gestor de archivos

- **cat**
Es la abreviatura de concatenar. Esto se refiere al hecho de que cat puede ser utilizado para combinar múltiples archivos en un archivo, también se puede utilizar para crear nuevos archivos y para mostrar el contenido de los archivos existentes.

- **more**
Es un comando para ver (pero no modificar) el contenido de un archivo o comando y visualizarlo por páginas.

</details>

<details><summary>c) Cree un archivo llamado “prueba.exe” en su directorio personal usando el vi. El mismo debe contener su número de alumno y su nombre.</summary>

- Utilice el siguiente comando para crear un archivo (en este ejemplo, .htaccess). También puede editar un archivo existente con el mismo comando. 

```
nvim fabianmartinezrincon.txt
```

- Pulse la tecla de la letra i para cambiar al modo de entrada.
- Inserte el contenido deseado o realice las modificaciones deseadas.
- Pulse la tecla ESC para salir del modo de entrada.
- Guarde el nuevo archivo o los cambios realizados con el siguiente comando:

```
:wq
```

</details>

<details><summary>d) Investigue el funcionamiento del comando file. Pruébelo con diferentes archivos. ¿Qué diferencia nota?</summary> 

Permite detectar el tipo y formato de un archivo

```css
file [opciones] archivo
```

- `b)` muestra solo el tipo de archivo sin ninguna información adicional.
- `i)` fuerza el uso de la sintaxis MIME para mostrar el tipo de archivo.
- `z)` trata los archivos como si estuvieran comprimidos.

</details>

---

### 10) Indique qué comando es necesario utilizar para realizar cada una de las siguientes acciones. Investigue su funcionamiento y parámetros más importantes:

- `mkdir "ISO 2022"` Cree la carpeta ISO2017 
- `cd 'ISO 2022'` Acceda a la carpeta (cd)
- `touch ISO2022-1 ISO2022-2` Cree dos archivos con los nombres iso2017-1 e iso2017-2 (touch)
- `ls` Liste el contenido del directorio actual (ls)
- `pwd` Visualizar la ruta donde estoy situado (pwd)
- `find ./'ISO 2022' -name "ISO*"` Busque todos los archivos en los que su nombre contiene la cadena “iso*” (find)
- `df` Informar la cantidad de espacio libre en disco (df)
- `who` Verifique los usuarios conectado al sistema (who)
- `vi ISO2022-1` Acceder a el archivo iso2017-1 e ingresar Nombre y Apellido
- `tail ISO2022-1` Mostrar en pantalla las últimas líneas de un archivo (tail).

---



<details><summary>11) Investigue su funcionamiento y parámetros más importantes:</summary> 

- `shutdown`  El comando de apagado (Shutdown) te permite apagar, reiniciar y detener tu sistema

```
sudo shutdown
sudo shutdown now
sudo shutdown [time]
sudo shutdown 11:50
sudo shutdown +5
sudo shutdown +2 "System update"
sudo shutdown -r
sudo shutdown +3 –r "Update System"
sudo shutdown -c
```

- `sudo reboot` Sirve para reiniciar el equipo
- `sudo halt` El comando halt detiene la CPU del ordenador
- `locate` El comando locate es una alternativa útil, ya que es más rápido que find para realizar búsquedas. Eso se debe a que sólo escanea tu base de datos de Linux en lugar de todo el sistema. Además, la sintaxis es más fácil de escribir `sudo apt install locate`
- `uname` Se usa para verificar la información del sistema
    ```
    uname -s
    uname -r
    uname -v
    uname -n
    uname -m
    uname -p
    uname -i
    uname -o
    uname -a
    ```
- `gmesg` (No entiendo porque esta diferente) El comando `dmesg` es una utilidad de Linux que muestra mensajes relacionados con el kernel recuperados del búfer de anillo del kernel. `dmesg`
- `lspci` El comando lspci lista todos los componentes tipo pci como son las tarjetas de red, tarjetas de sonido o tarjetas de televisión. 
- `at` Ejecuta comandos a la hora especificada.
- `netstat` Los administradores de sistemas utilizan netstat el comando de Linux para ver información sobre las conexiones de red `sudo apt install net-tools`
- `mount` Se utiliza para montar dispositivos y particiones para su uso por el sistema operativo <br> <br>
    ```
    sudo apt install nfs-common
    sudo mkdir -p /mnt/client_ shareddirectory
    sudo mount [nfs_server]:/[nfs_shareddirectory] [client_mountpoint]
    ```
- `umount` El comando umount le permite eliminar un sistema de archivos remoto que esté montando en la actualidad `umount --all`
- `head` Este comando sirve principalmente para mostrar al principio de un archivo (de texto) o para reducir a lo especificado los datos mostrados por un comando de Linux
- `losetup` losetup de comandos de Linux se utiliza para fijar el dispositivo de bucle.
**parámetros:**
    - `d` dispositivo extraíble.
    - `e` <cifrado> Iniciar cifrado codificación.
    - `o` <número de traducción> Establecer el número de conversión de datos.
- `write` sirve para enviar un mensaje a otro usuario del sistema.
    - write usuario
    - Escribo aquí lo que
    - quiera que le llegue y luego cierro.
    - Control-D
- `mkfs` Se utiliza para dar formato a un dispositivo de almacenamiento de bloque con un determinado sistema de archivos
- `fdisk` (con cuidado) Permite al usuario crear particiones en el disco duro de la misma manera que su contraparte de MS-DOS

</details>

---

### Indique en qué directorios se almacenan los comandos mencionados en el ejercicio anterior.

El directorio /bin es un directorio estático y es donde se almacenan todos los binarios necesarios para garantizar las funciones básicas a nivel de usuario. Solo almacena los ejecutables de usuario, ya que los binarios necesarios para tareas administra/vas gestionadas por el usuario root o súper-usuario del sistema se encuentran en el directorio / sbin.

---


> El objetivo de esta práctica es que el alumno comprenda los aspectos principales acerca de la estructura del sistema Operativo GNU/Linux en lo que respecta a procesos, usuarios, filesystems,
permisos, etc

---

## 1) Editor de textos:

<details><summary>a) Nombre al menos 3 editores de texto que puede utilizar desde la línea de comandos.</summary>

-  **Vim:** Es un editor de texto que rompe las bolas pero aprendes
- **GNU Emacs:** La misma basura que vim pero con calculadora y administrador de archivos
- **mcedit:** Te permite navegar entre los ficheros con una interfaz.

</details>

<details><summary>b) ¿En qué se diferencia un editor de texto de los comandos cat, more o less? Enumere los modos de operación que posee el editor de textos vi.</summary>

Los **comandos cat, more y less** permiten mostrar el contenido de ficheros de texto desde la línea de comandos en sistemas **Unix**. 

En su lugar los **editores de texto**, justamente nos dejan **editar texto** además de poder **visualizarlo**. 

- `cat` imprimirá por pantalla el contenido del fichero sin ningún tipo de paginación ni posibilidad de modificarlo. Básicamente concatena archivos o la salida estándar en la salida estándar. 
- `more` permite visualizar por pantalla el contenido de un fichero de texto, con la diferencia con el anterior de que `more` página los resultados. Primero mostrará por pantalla todo lo que se pueda visualizar sin hacer scroll y después, pulsando la tecla espacio avanzará de igual modo por el fichero. 
- `less` es el más completo de los tres, pues puede hacer todo lo que hace `more` añadiendo mayor capacidad de navegación por el fichero (avanzar y retroceder) además de que sus comandos están basados en el editor `vi`, del cual se diferencia en que no tiene que leer todo el contenido del fichero antes de ser abierto.

</details>

<details><summary>c) Nombre los comandos más comunes que se le pueden enviar al editor de textos vi</summary>

- [Comandos basicos](https://docs.oracle.com/cd/E19620-01/805-7644/6j76klopr/index.html)
</details>

---

## 2) Proceso de Arranque SystemV

<details><summary>a) Enumere los pasos del proceso de inicio de un sistema GNU/Linux, desde que se prende la PC hasta que se logra obtener el login en el sistema.</summary>

- `Paso 1)` Se empieza a ejecutar el código del BIOS
- `Paso 2)` El BIOS ejecuta el POST
- `Paso 3)` El BIOS lee el sector de arranque (MBR)
- `Paso 4)` Se carga el gestor de arranque (MBC)
- `Paso 5)` El bootloader carga el kernel y el initrd
- `Paso 6)` Se monta el initrd como sistema de archivos raíz y se inicializan componentes esenciales (ej.: scheduler)
- `Paso 7)` El Kernel ejecuta el proceso init y se desmonta el initrd
- `Paso 8)` Se lee el /etc/inittab
- `Paso 9)` Se ejecutan los scripts apuntados por el ***runlevel 1***
- `Paso 10)` El final del ***runlevel 1*** le indica que vaya al runlevel por defecto
- `Paso 11)` Se ejecutan los scripts apuntados por el runlevel por defecto
- `Paso 12)` El sistema est´a listo para usarse

</details>

<details><summary>b) Proceso INIT. ¿Quién lo ejecuta? ¿Cuál es su objetivo?</summary>

- Su función es cargar todos los subprocesos necesarios para el correcto funcionamiento del SO
- El proceso init posee el PID 1 y se encuentra en **/sbin/init**
- En SysV se lo configura a traves del archivo **/etc/inittab**
- No tiene padre y es el padre de todos los procesos (pstree)
- Es el encargado de montar los filesystems y de hacer disponible los dem´as dispositivos

</details>

<details><summary>c) Ejecute el comando pstree. ¿Qué es lo que se puede observar a partir de la ejecución de este comando?</summary>

El programa pstree facilita información sobre la finalización de una serie de procesos relacionados entre sí, esto es, todos los descendientes de un proceso particular. El programa deja claro desde un principio que proceso es el primario y cuales son los secundarios.

</details>

<details><summary>d) RunLevels. ¿Qué son? ¿Cuál es su objetivo?</summary>

- Es el modo en que arranca Linux (3 en Redhat, 2 en Debian)
- El proceso de arranque lo dividimos en niveles
- Cada uno es responsable de levantar (iniciar) o bajar (parar) una serie de servicios
- Un nivel de ejecución es básicamente una configuración de programas y servicios que se ejecutarán orientados a un determinado funcionamiento. 

Explicación más detallada

- `Paso 1)` Cuando un sistema GNU/Linux arranca, primero se carga el kernel del sistema, después se inicia el primer proceso, denominado **init**, que es el responsable de ejecutar y activar el resto del sistema, mediante la gestión de los niveles de ejecución (o **runlevels**).
- `Paso 2)` En el caso del modelo runlevel de SystemV, cuando el proceso init arranca, utiliza un fichero de configuración llamado **/etc/inittab** para decidir el modo de ejecución en el que va a entrar.
- `Paso 3)` En este fichero se define el runlevel por defecto (initdefault) en arranque (por instalación en Fedora el 5, en Debian el 2) y una serie de servicios de terminal por activar para atender la entrada del usuario.
- `Paso 4)` Después, el sistema, según el runlevel escogido, consulta los ficheros contenidos en **/etc/rcn.d**, donde **n** es el número asociado al runlevel (nivel escogido), en el que se encuentra una lista de servicios por activar o parar en caso de que arranquemos en el runlevel, o lo abandonemos
- `Paso 5)` Dentro del directorio encontraremos una serie de **scripts** o enlaces a los scripts que controlan el servicio. Cada script posee un nombre relacionado con el servicio, una S o K inicial que indica si es el script para iniciar **(S)** o matar **(K)** el servicio, y un número que refleja el orden en que se ejecutarán los servicios. 

</details>

<details><summary>e) ¿A qué hace referencia cada nivel de ejecución según el estándar?</summary>

- **`0`** Indica halt o apagado de la máquina.
- **`1`** Indica monousuario.
- **`2`** Indica modo multiusuario sin soporte de red.
- **`3`** Indica modo multiusuario completo con soporte de red.
- **`4`** No usado, con esta opción el administrador puede personalizar el inicio para cargar algún servicio.
- **`5`** Indica multiusuario completo con inicio gráfico (X11)
- **`6`** Indica shutdown y reboot: Se apaga inmediatamente la máquina para reinicio.

Un administrador (root) puede editar el archivo **/etc/inittab** como mejor convenga al usuario, sin embargo también tiene el poder de establecerlo en 0 o en 6. Si se establece en 6, algo que hice como experimento en mi Mandriva, la próxima vez que la máquina se encienda, se leerá el modo 6, shutdown y reboot, y se hará exactamente eso. 

**¿Dónde se define qué Runlevel ejecutar al iniciar el sistema operativo?**

- Se encuentran definidos en **/etc/inittab**
- Los scripts que se ejecutan están en **/etc/init.d**
- En **/etc/rcX.d** (donde X = 0..6) hay links a los archivos del /etc/init.d
- Formato de los links:

```
    [SjK]<orden><nombreScript>
```

- `S)` lanza el script con el argument start
- `K)` lanza el script con el argument stop

**¿Todas las distribuciones respetan estos estándares?**

No todas las distribuciones respetan los estándares.

</details>

<details><summary>f) Archivo /etc/inittab. ¿Cuál es su finalidad?  </summary>

Es el archivo de configuración de init, que decide el modo de ejecución en el que va a entrar.

Cuando el sistema se arranca, se verifica si existe un runlevel predeterminado en el archivo **/etc/inittab**, si no, se debe introducir por medio de la consola del sistema. Después se procede a ejecutar todos los scripts relativos al runlevel especificado. 

**¿Qué tipo de información se almacena en el? ¿Cuál es la estructura de la información que en él se almacena?**

`/etc/inittab`

**`id:nivelesEjecucion:acción:proceso`**
- **Id**: identifica la entrada en inittab (1 a 4 caracteres)
- **Niveles_ejecucion**: el/los nivel de ejecución en los que se realiza la acción
- **Acción**: describe la acción a realizar
    - **wait**: Se inicia cuando se entra al runlevel e init espera a que termine
    - **initdefault**
    - **ctrlaltdel**: se ejecutará cuando init reciba la señal SIGINT
    - **off, repawn, once, boot, bootwait, powerwait, otras…**
- **Proceso**: el proceso exacto que será ejecutado

</details>

<details><summary>g) Suponga que se encuentra en el runlevel X. Indique qué comando(s) ejecutaría para cambiar al runlevel Y. ¿Este cambio es permanente? ¿Por qué?</summary>

Existen dos formas de modificar los runlevels:

- **a) Cambiar de runlevel en ejecución:**
Existe una utilidad para línea de comandos que permite cambiar de un nivel de ejecución a otro. Esta es la herramienta init. Para cambiar de nivel de ejecución sólo hay que ejecutar init seguido del número del runlevel.\
Por ejemplo
- **` init 0`** Cambia al runlevel 0 (se apaga el sistema, equivalente al comando halt).
- **` init 2`** Cambia al runlevel 2.
- **` init 6`** Cambia al runlevel 6 (reinicia el sistema, equivalente al comando reboot). 

También **`telinit`**, nos permite cambiar de nivel de ejecución, sólo tenemos que indicar el número. Por ejemplo, necesitamos hacer una tarea crítica en root; sin usuarios trabajando, podemos hacer un **`tellinit 1`** (también puede usarse S) para pasar a runlevel monousuario, y después de la tarea un tellinit 3 para volver a multiusuario

**b) Modificar el runlevel por defecto**

Por defecto, el sistema suele arrancar en el nivel de ejecución 5 (modo gráfico). Si se quisiera modificar este comportamiento, habría que editar el fichero **`/etc/inittab.`**

Más concretamente, habría que modificar en el fichero /etc/inittab la línea donde el número 5 indica que el nivel de ejecución por defecto es el 5

No es permanente. En el caso de que el runlevel se cambie durante la sección de bash abierta y luego se apague la máquina, cuando se vuelva a prender la maquina se volverá a restablecer al modo que tenga el sistema configurado (por defecto).

En el caso de que se quiera cambiar el modo de arranque del runlevel de manera permanente se tendrá que configurar para que eso suceda. 

```shell
ls /etc/rc0.d
sudo runlevel
sudo telinit 2
```

</details>

<details><summary>h) Scripts RC. ¿Cuál es su finalidad?</summary>

Los scripts RC se encargan de cargar o cerrar los servicios necesarios para que el sistema funcione, de acuerdo con el runlevel que se está iniciando. Por ejemplo: lpd (servicio para imprimir), fetchmail (servicio para leer correo-e), sshd (SecureShell para abrir sesiones remotas de una manera segura), networking (abre las conexiones de red).

**¿Dónde se almacenan?**

Todos estos servicios se encuentran en **/etc/init.d/**

Sin embargo, no todos los servicios se cargan en todos los runlevels. **¿Cómo sabe el RC que servicios tiene que cargar?** Los servicios a cargar se encuentran en el directorio /etc/rcX.d/, donde X es el runlevel a cargar. En realidad, en estos directorios no hay más que enlaces simbólicos a /etc/init.d/

**Cuando un sistema GNU/Linux arranca o se detiene se ejecutan scripts, indique cómo determina qué script ejecutar ante cada acción. ¿Existe un orden para llamarlos? Justifique.**

`Orden para llamarlos:`

Los nombres en estos directorios tienen una sintaxis bastante concreta. Empiezan por una letra (S o K) seguidos de un número y el nombre del servicio. La letra S significa iniciar (S de start). La letra K significa acabar (K de kill). El número es de dos dígitos, de 00 a 99 e indica el orden en el que se arrancará el servicio.

- `1)` Ejecuta, por orden de nombre, todos los scripts que comienzan por **K** en el directorio correspondiente al nivel, utilizando como argumento para dicho script la opción **stop**.
- `2)` Ejecuta, por orden de nombre, todos los scripts que comienzan por S en el directorio correspondiente al nivel, utilizando como argumento para dicho script la opción start.

</details> 

<details><summary>i) ¿Qué es insserv?</summary>

El comando **insserv** se usa para controlar el orden de inicio y detención de los servicios que se encuentran en un sistema Linux. 

**¿Para qué se utiliza?**

Se utiliza para administrar el orden de los enlaces simbólicos del **`/etc/rcX.d`**, resolviendo las dependencias de forma automática

- Utiliza cabeceras en los scripts del **`/etc/init.d`** que permiten especificar la relación con otros scripts rc -> LSBInit (Linux Standard Based Init)
- Es utilizado por update-rc.d para instalar / remover los links simbólicos

**¿Qué ventajas provee respecto de un arranque tradicional?**

Mejora la performance del arranque en sistemas multiprocesadores. 

</details> 

<details><summary>j) ¿Cómo maneja Upstart el proceso de arranque del sistema?</summary>

Upstart fue el primer reemplazo propuesto para SystemV (Ubuntu, Fedora, Debian, etc.). 

- Permite la ejecución de trabajos en forma asincrónica a través de eventos (event-based) como principal diferencia con sysVinit que es estrictamente sincrónico (dependencybased).
- Estos trabajos se denominan **Jobs**.
- El principal objetivo de un job es definir servicios o tareas a ser ejecutadas por init
- Son scripts de texto plano que definen las acciones/tareas (unidad de trabajo) a ejecutar ante determinados eventos.
- Cada job es definido en el **/etc/init (.conf).**
- Suelen ser de dos tipos:
    - **Task**: ejecución finita (task) -> not respawning -> exit 0 o uso de stop.
    - **Service**: ejecución indeterminada  respawning
- Los jobs son ejecutados ante eventos (arranque del equipo, inserción de un dispositivo USB,etc)
    - Es posible crear eventos pero existen algunos de manera estándar.
    - Definido por **start on y stop on.**
- Es compatible con SystemV ! **/etc/init/rc-sysinit.conf**, runlevels, scripts en /etc/init.d, objetivo start y stop. 
- Cada job posee un objetivo (goal start/stop) y un estado (state). 
    - En base a ellos se ejecuta un proceso específico.
    - Al inicio, init emite el evento startup. 
- Un job puede tener uno o varias tareas ejecutables como parte de su ciclo de vida y siempre debe existir la tarea principal
- Las tareas de un job se definen mediante exec o script ... end script
- A través de **initctl** podemos administrar los jobs del demonio de Upstart: 
- **`start <job>`**: cambia el objetivo a start del job especificado
- **`stop <job>`**: cambia el objetivo a stop del job especificado
- **`emit <event>`**: event es emitido causando que otros Jobs cambien a objetivo start o stop 
- No más **/etc/inittab**

</details>

<details><summary>k) Cite las principales diferencias entre SystemV y Upstart.</summary>

Upstart se creó como reemplazo del modelo SysVinit. A diferencia de SysVinit, que se creó para operar en un entorno estático Upstart se creó para operar en un entorno flexible.

Upstart proporciona beneficios principales sobre el SysVinit. Estos beneficios son: event-based (principal diferencia con SysVinit que es estrictamente sincrónico - dependecy-based -) es la ejecucion de servicios en forma asincrónica y otro beneficio es el reinicio automático de servicios que dejan de responder de la manera inesperada para el sistema.

Upstart en lugar de usar runlevels, usa jobs que cada uno de ellos posee un objetivo (start/stop y un estado state). Cuando ocurre una interrupción, upstart detecta ese interrupción y realiza los cambios necesarios. 

</details>

<details><summary>l) Qué reemplaza a los scripts rc de SystemV en Upstart? ¿En que ubicación del filesystem se encuentran?</summary>

- Los **`jobs`** reemplazan a los scripts de SystemV en Upstart.
- Cada job es definido en el **`/etc/init (.conf)`**

</details>

<details><summary>m) Dado el siguiente job de upstart perteneciente al servicio de base de datos del mysql indique a qué hace referencia cada línea del mismo:</summary>

```powershell
# MySQL Servise
description "MySQL Server " {Descripcion}
autor "info autor" {Autor}
start on ( net − device − up {Iniciar base de datos}
        and local −filesystems   {}
        and runlevel [2345])
stop on runlevel [016]
[...]
exec / usr / sbin /mysqld
[...]
```

Este es un archivo de configuración Upstart para el servicio de base de datos MySQL. Cada línea se explica a continuación:

- MySQL Service: un comentario que describe el servicio que se va a iniciar.
- description "MySQL Server": una descripción del servicio, que aparecerá en los registros del sistema. {Descripcion}
- author "info autor": información sobre el autor del archivo de configuración. {Autor}
- start on (net-device-up and local-filesystems and runlevel [2345]): indica que el servicio debe iniciarse cuando la red y el sistema de archivos locales estén disponibles y el sistema se esté ejecutando en el nivel de ejecución 2, 3, 4 o 5. {Iniciar base de datos}
- stop on runlevel [016]: indica que el servicio debe detenerse cuando el sistema se esté ejecutando en el nivel de ejecución 0, 1 o 6.
- exec `/usr/sbin/mysqld`: la línea que indica al sistema qué comando ejecutar para iniciar el servicio MySQL. El comando `/usr/sbin/mysqld` es el comando para iniciar el servidor de base de datos MySQL.

</details>

<details><summary>n) ¿Qué es sytemd?</summary>

- Es un sistema que centraliza la administración de demonios y librerias del sistema.
- Puede ser controlado por `systemctl`
- Compatible con SysV -> si es llamado como `init`
- El demonio systemd reemplaza al proceso init -> este pasa a terner PID 1
- Los runlevels son reemplazados por `targets`
- Al igual que con Upstart el archivo `/etc/inittab` no existe más. 

</details>

<details><summary>ñ) ¿A qué hace referencia el concepto de activación de socket en systemd?</summary>

Las unidades de trabajo son denominadas units de tipo:

Service: controla un servicio particular (.service)

- **`Socket`** encapsula IPC, un sockect del sistema o file system FIFO (.socket) -> sockect-based activation.
- **`Target`** agrupa units o establece puntos de sincronización durante el booteo (.target)
- **`dependencia`** de unidades
- **`Snapshot`** almacena el estado de un conjunto de unidades que puede ser establecido más tarde (.snapshot) etc. 

Las **units** pueden tener dos estados -> **active** o **inactive** 

</details>

<details><summary>o) ¿A qué hace referencia el concepto de cgroup?</summary>

Permite organizar un grupo de procesos en forma jerárquica

Agrupa conjunto de procesos relacionados (por ejemplo, un servidor web Apache con sus dependientes).

Tareas que realiza:

- Tracking mediante subsistema cgroups  no se utiliza el PID  doble fork no funciona para escapar de systemd.
- Limitar el uso de recursos. 

</details>

---

## 3) Usuarios

<details><summary>a) ¿Qué archivos son utilizados en un sistema GNU/Linux para guardar la información de los usuarios?</summary>

En un sistema GNU/Linux, la información de los usuarios se almacena principalmente en los siguientes archivos:

- **`/etc/passwd`** Este archivo contiene información básica de los usuarios, como sus nombres de usuario, identificación de usuario (UID), identificación de grupo (GID), nombre completo, ruta del directorio de inicio y shell predeterminada.
- **`/etc/shadow`** Este archivo contiene información confidencial de los usuarios, como sus contraseñas encriptadas, tiempo de última modificación de la contraseña, tiempo de expiración, cuenta bloqueada, etc.
- **`/etc/group`** Este archivo contiene información de los grupos de usuarios, como el nombre del grupo, identificación de grupo (GID) y una lista de nombres de usuario que pertenecen a ese grupo.
- **`/etc/gshadow`** Este archivo contiene información confidencial de los grupos de usuarios, como sus contraseñas encriptadas, tiempo de última modificación de la contraseña, tiempo de expiración, cuenta bloqueada, etc.

Es importante destacar que estos archivos son de lectura y escritura solo para el superusuario (root) y que modificarlos sin conocimiento puede comprometer la seguridad del sistema.

</details>

<details><summary>b) ¿A qué hacen referencia las siglas UID y GID? ¿Pueden coexistir UIDs iguales en un sistema GNU/Linux? Justifique.</summary>

Los sistemas operativos Linux y Unix utilizan el UID (User ID o ID de usuario) para identificar al usuario particular. El GID (Group ID o ID de grupo) se utiliza para identificar a un grupo. Supongo que no podrian existir dos iguales ya que no los podrias distinguir.

Puede haber un caso que seria el root en el que podemos tener varios usuarios root con el ID 0

</details>

<details><summary>c) ¿Qué es el usuario root? ¿Puede existir más de un usuario con este perfil en GNU/Linux? ¿Cuál es la UID del root?.</summary>

En sistemas operativos del tipo Unix, el superusuario o root es el nombre
convencional de la cuenta de usuario que posee todos los derechos en todos los
modos (monousuario o multiusuario). Normalmente es la cuenta de administrador. 

- Su UID (User ID) y GID es 0 (cero).
- Es la única cuenta de usuario con privilegios sobre todo el sistema.
- Acceso total a todos los archivos y directorios con independencia de propietarios y permisos.
- Controla la administración de cuentas de usuarios.
- Ejecuta tareas de mantenimiento del sistema.
- Puede detener el sistema.
- Instala software en el sistema.
- Puede modificar o reconfigurar el kernel, controladores, etc. 

</details>

<details><summary>d) Agregue un nuevo usuario llamado iso2017 a su instalación de GNU/Linux, especifique que su home sea creada en /home/iso_2017, y hágalo miembro del grupo catedra (si no existe, deberá crearlo). Luego, sin iniciar sesión como este usuario cree un archivo en su home personal que le pertenezca. Luego de todo esto, borre el usuario y verifique que no queden registros de él en los archivos de información de los usuarios y grupos.</summary>

- `sudo adduser iso2022` creo un usuario y en home le agrego /home/ (contra = nombre para pruebas)
- `sudo gropadd catedra` creo un grupo 
- `sudo usermod -a -G catedra iso2022`
- `id -nG iso2022` menciona los grupos a los que pertenece mi usuario
- `sudo login iso2022` entro como el usuario
- `cd ..` para ir a la home personal y crear un archivo (creo)
- `sudo userdel iso2022` lo elimina pero aun tenemos todos los archivos creados por este

</details>

<details><summary>e) Investigue la funcionalidad y parámetros de los siguientes comandos:</summary>

- **`useradd nombre ó adduser nombre`** Crea un nuevo usuario
- **`usermod nombre`** nos permite modificar todos los parámetros de la cuenta de un usuario creado con anterioridad.
- **`userdel nombre`** Elimina un usuario
- **`su`** entrar al super usuario (tenes los permisos de TODO)
- **`groupadd nombre`** te deja crear un grupo
- **`who`** Verifiqua los usuarios conectado al sistema
- **`groupdel nombre`** elimina un grupo
- **`passwd`** de deja cambiar la constraseña del usuario actual

</details>

---

## 4) FileSystem:

<details><summary>a) ¿Cómo son definidos los permisos sobre archivos en un sistema GNU/Linux?</summary>

Este mecanismo permite que archivos y directorios “pertenezcan” a un usuario en particular. Por ejemplo, como diego creó archivos en su directorio “home”, diego es el propietario de esos archivos y tiene acceso total a ellos. 

Unix también permite que los archivos sean compartidos entre usuarios y grupos de usuarios. Si diego lo desea, podría restringir el acceso a sus archivos de forma que ningún otro usuario pueda acceder a ellos. 

Los **permisos están divididos en tres tipos: `lectura`, `escritura` y `ejecución`**. Estos permisos pueden ser fijados para tres clases de usuarios: el propietario del archivo o directorio, los integrantes del grupo al que pertenece y todos los demás usuarios. 

- **`lectura`** permite a un usuario leer el contenido del archivo o en el caso de un directorio, listar el contenido del mismo (usando ls).
- **`escritura`** permite a un usuario escribir y modificar el archivo (inclusive, eliminarlo). Para directorios, el permiso de escritura permite crear nuevos archivos o borrar archivos ya existentes en el mismo.
- **`ejecución`** permite a un usuario ejecutar el archivo si es un programa. Para directorios, el permiso de ejecución permite al usuario ingresar al mismo (por ejemplo, con el comando cd). 
- **`Interpretando los permisos de archivos`** Veamos un ejemplo del uso de permisos de archivos. Usando el comando ls con la opción **`-l`** se mostrara un listado **`largo`** de los archivos, el cual incluye los permisos. <br><br>
    ```
    fabrizio@debian: /$ ls -l
    -rwxr-xr-- 1 fabrizio users 505 May 5 19:05 prueba.exe
    ```

El primer campo representa los permisos del archivo. El tercer campo es el propietario del mismo (fabrizio), el cuarto es el grupo al cual pertenece el archivo (users) y el último campo es el nombre del archivo (prueba.exe). 

La cadena **`-rwxr-xr--`** nos informa, por orden, los permisos para el propietario, los usuarios del grupo y el resto de los usuarios.

El primer carácter de la cadena de permisos `(“-”)` representa el tipo de archivo. El `“-”` significa que es un archivo regular, `“d”` indicaría que se trata de un directorio. Los siguientes tres caracteres `(“rwx”)` representan los permisos para el propietario del archivo, fabrizio. Éste tiene permisos para leer `(r)`, escribir `(w)` y ejecutar `(x)` el archivo prueba.exe.

Los siguientes tres caracteres, `“r-x”`, representan los permisos para los miembros del grupo al que pertenece el archivo (en este caso, users). Como sólo aparece `“r-x”` cualquier usuario que pertenezca al grupo users puede leer este archivo, y ejecutarlo, pero no modificarlo.

Los últimos tres caracteres, `“r--”`, representan los permisos para cualquier otro usuario del sistema (que no sea fabrizio ni pertenezca al grupo users). Como sólo está presente la `“r”`, los demás usuarios pueden leer el archivo, pero no escribir en él o ejecutarlo

Aquí tenemos otros ejemplos de permisos de grupo

- **`-rw-------`**
- El propietario del archivo puede leer y escribir. Nadie más puede acceder al archivo.
- **`rwxrwxrwx`**
- Todos los usuarios pueden leer, escribir y ejecutar el archivo. 
- **`drwxr-xr-x`**
- El propietario del directorio puede leer, escribir y entrar al mismo. Los usuarios pertenecientes al grupo del directorio y todos los demás usuarios pueden leer e ingresar al directorio.

</details>

---

<details><summary>b) Investigue la funcionalidad y parámetros de los siguientes comandos relacionados con los permisos en GNU/Linux:</summary>

- **chmod:** nos permite gestionar permisos
- **chown:** permite cambiar el propietario de un archivo o directorio en sistemas
- **chgrp:** nos permite cambiar el grupo al que pertenece un archivo

</details>

<details><summary>c) Al utilizar el comando chmod generalmente se utiliza una notación octal asociada para definir permisos. ¿Qué significa esto? ¿A qué hace referencia cada valor?</summary>

Existen 3 tipos de permisos y se basan en una notacion octal para referenciar a cada uno:

| Permiso  | Valor | Octal |
| ------------- | ------------- | ------------- |
| Lectura  | R  | 4 |
| Escritura  | W  | 2 |
| Ejecución  | X  | 1 |

Se aplican sobre los usuarios:

- Usuarios: permisos del dueño -> `U`
- Usuarios: permisos del grupo -> `G`
- Usuarios: permisos de otro usuario -> `O`

La notación octal se refiere a ver estos valores en 3 bits , 010 equivale a 2 , por lo tanto si un archivo tendrá solo permisos de escritura, figura de esa manera. Si los valores fueran 110= serian permisos de lectura y escritura, y si fueran 111 el archivo tendría todos los permisos (lectura escritura y ejecución). 

- En general cuando se le da un permiso a un archivo requiere 3 números (ejemplo **`chmod 755`**) cada uno de esos números representa los permisos para diferentes cosas.
- El primer número es para indicar los permisos para el dueño del archivo (**`U`**).
- El segundo número es para indicar los permisos para los usuarios del grupo de un archivo (**`G`**)
- El tercer número es para indicar los permisos para todo el resto de los usuarios (**`O`**). 

Por lo tanto, en el ejemplo **`chmod 755`**, indica que el **`dueño (U)`** tiene permiso para lectura, escritura y ejecución ( 4 + 2 + 1 = 7). Los **`usuarios del grupo (G)`** y para el **`resto de los usuarios (O)`** tienen permiso para lectura y ejecución (4 + 1= 5). Ver tabla.

</details>

<details><summary>d) ¿Existe la posibilidad de que algún usuario del sistema pueda acceder a determinado archivo para el cual no posee permisos? Nombrelo, y realice las pruebas correspondientes.</summary>

Existe la posibilidad, si es que el usuario puede utilizar el comando su, o sudo. Sino, sin poseer los permisos necesarios no puede acceder al archivo. Sólo root.

</details>

<details><summary>e) Explique los conceptos de “full path name” y “relative path name”. De ejemplos claros de cada uno de ellos.</summary>

- **`Full path name`** es la ruta completa a ese archivo o carpeta desde el directorio / del sistema de archivos. ejemplo `/home/your_username/my_script`
- **`Relative path name`** Rastrea la ruta desde el directorio actual a través de su padre o sus subdirectorios y archivos. ..\Documents

</details>

<details><summary>f) ¿Con qué comando puede determinar en qué directorio se encuentra actualmente? ¿Existe alguna forma de ingresar a su directorio personal sin necesidad de escribir todo el path completo? ¿Podría utilizar la misma idea para acceder a otros directorios? ¿Cómo? Explique con un ejemplo.</summary>

- Con el comando pwd podemos saber el directorio actual.
- Con `cd`o `cd ~` vamos al directorio personal.
- Se puede usar este mismo comando para acceder a directorios a partir de la ruta en donde estemos parados

Se podría acceder a diferentes directorios gracias la ubicación relativa o atajos ya prestablecidos como `cd ..` para volver al directorio anterior sin necesidad de poner ningún atajo

</details>

<details><summary>g) Investigue la funcionalidad y parámetros de los siguientes comandos relacionados con el uso del FileSystem:</summary>

- **`cd`** Nos permite meternos en un directorio interno
- **`umount`** permite eliminar un sistema de archivos remoto que esté montando en la actualidad (no usar xd)
- **`mkdir`** Cree una carpeta
- **`du`** Para ver el tamaño de ficheros y carpetas
- **`rmdir`** Borrar directorios
- **`df`** Informa la cantidad de espacio libre en disco
- **`mount`** Se utiliza para montar dispositivos y particiones para su uso por el sistema operativo (se instala con **sudo apt install nfs-common**)
- **`ln`** crear un enlace simbólico al fichero o directorio (como un acceso directo)
- **`ls`** Lista el contenido del directorio actual
- **`pwd`** Visualiza la ruta donde estoy situado
- **`cp`** sirve para copiar archivos y directorios dentro del sistema de archivos
- **`mv`** se utiliza para mover o renombrar los archivos y directorios

</details>

---

## 5) Procesos

<details><summary>a) ¿Qué es un proceso? ¿A que hacen referencia las siglas PID y PPID? ¿Todos los procesos tienen estos atributos en GNU/Linux? Justifique. Indique qué otros atributos tiene un proceso.</summary>

Un proceso es un programa en ejecución. Para nosotros serán sinónimos de tarea, job y proceso.
- Es dinámico
- Tiene program counter.
- Su ciclo de vida comprende desde que se lo **`dispara`** hasta que termina.

La sigla `PID` hace referencia al `ID` del Proceso y la sigla `PPID` hace referencia al `ID` del Proceso Padre del proceso.

Todos los procesos tienen estos atributos, además de estos (que son los más importantes pero no todos): Usuario (`UID`), Grupo (`GID`), Prioridad, etc. Con ps –ejH

PUEDO VER EL PPID.

</details>

<details><summary>b) Indique qué comandos se podrían utilizar para ver qué procesos están en ejecución en un sistema GNU/Linux.</summary>

- **`pstree`** que nos muestra los procesos en una estructura de árbol top El comando top te permite ver las tareas del sistema que se ejecutan en tiempo real.
- **`top`** El comando top te permite ver las tareas del sistema que se ejecutan en tiempo real.Proporciona un buen resumen de tu sistema para verificar rápidamente si algo se destaca que pueda estar causando problemas con tu sitio web o servidor
- **`ps`** muestra por pantalla un listado de los procesos que están ejecutándose en el sistema.

Las opciones (parámetros) más importantes y utilizadas de este comando son:
- **`a`** para mostrar los procesos de todos los teminales.
- **`u`** para mostrar el usuario al que pertenece el proceso y la hora de inicio.
- **`x`** para mostrar procesos que no estan controlados por ningún terminal.

Suelen usarse combiandas para tener una visión global de los procesos que están en ejecutan.

</details>

<details><summary>c) ¿Qué significa que un proceso se está ejecutando en Background? ¿Y en Foreground?</summary>

- **`Proceso ejecutándose en Background`** significa que el proceso continúa la ejecución mientras que el shell se libera para otras actividades. **`Proceso en segundo plano`**.
- **`Proceso ejecutándose en Foreground`** Es exactamente lo contrario, quiere decir que no se admitirá ningún otro comando hasta que se complete el proceso. **`Proceso en primer plano`**.

</details>

<details><summary>d) ¿Cómo puedo hacer para ejecutar un proceso en Background? ¿Como puedo hacer para pasar un proceso de background a foreground y viceversa?</summary>

Para ejecutar un proceso en background en Linux, se puede agregar el símbolo "&" al final del comando en la línea de comandos. Por ejemplo, para ejecutar un proceso llamado "mi_proceso" en background, se puede escribir:

```bash
mi_proceso &
```

Esto permitirá que el proceso se ejecute en segundo plano mientras se sigue usando la terminal para ejecutar otros comandos.

Para pasar un proceso de background a foreground y viceversa, se pueden usar los siguientes comandos:

- **`fg`** mueve un proceso en background a foreground. Se debe proporcionar el número de trabajo (job number) del proceso como argumento. El número de trabajo se puede obtener con el comando "jobs". Por ejemplo: <br><br>
    ```bash
    fg %1
    ```
    Esto mueve el proceso número 1 en background al foreground.
- **`bg`** mueve un proceso en foreground a background. También se debe proporcionar el número de trabajo del proceso como argumento. Por ejemplo:
    ```bash
    bg %1
    ```
    Esto mueve el proceso número 1 en foreground a background.

También se puede suspender un proceso en foreground con la combinación de teclas `Ctrl + Z`. Esto detendrá el proceso y lo moverá a background. Para reanudar el proceso en background, se puede usar el comando `bg`

</details>

<details><summary>e) Pipe ( | ). ¿Cuál es su finalidad? Cite ejemplos de su utilización.</summary>

El **`|`** nos permite comunicar dos procesos por medio de un pipe o tubería desde la shell

El pipe conecta stdout (salida estándar) del primer comando con la stdin (entrada estándar) del segundo.

Por ejemplo:

```
ls | more
```

- Se ejecuta el comando ls y la salida del mismo, es enviada como entrada del comanda **`more`**. 
- Se pueden anidar tantos pipes como se deseen

¿Cómo haríamos si quisiéramos contar la cantidad de usuarios del sistema que en su
nombre de usuario aparece una letra “a"?

```shell
cat /etc/passwd | cut -d: -f1 | grep a | wc –l
```

</details>

<details><summary>f) Redirección. ¿Qué tipo de redirecciones existen? ¿Cuál es su finalidad? Cite ejemplos de utilización.</summary>

En Linux, al final todo es tratado como si fuera un fichero y como tal, tenemos descriptores de fichero para aquellos puntos donde queramos acceder.

Hay unos descriptores de fichero por defecto:
- **`0`** Entrada estándar (normalmente el teclado).
- **`1`** Salida estándar (normalmente la consola).
- **`2`** Salida de error. 

Para redirigir las salidas utilizaremos el descriptor de fichero seguido del símbolo > o < si redirigimos la entrada hacia un comando. Veamos unos ejemplos

- **`ls -l > fichero`** Guarda la salida de ls -l en fichero. Si no existe lo crea, y si existe lo sobreescribe.
- **`ls -l >> fichero`** Añade la salida del comando a fichero. Si no existe lo crea, y si existe, lo añade al final.
- **`ls -l 2 > fichero`** Si hay algún error, lo guarda en fichero (podría salir un error si no tuviéramos permiso de lectura en el directorio). 


Las **redirecciones** consisten en trasladar información de un tipo a otro

Hay 2 tipos de redirecciones 

- Al utilizar redirecciones mediante > (destructiva):
    - Si el archivo de destino no existe, se lo crea
    - Si el archivo existe, se lo trunca y se escribe el nuevo contenido
- Al utilizar redirecciones mediante >> (no destructiva):
    - Si el archivo de destino no existe, se lo crea
    - Si el archivo existe, se agrega la información al final

EJEMPLOS

>  Redirecciona **stdout** hacía un archivo. Lo crea si no existe, si existe lo sobreescribe.
```
ls -l > lista.txt
```

>> (La salida del comando se envía a un archivo en vez de la terminal.)

Redirecciona **stdout** hacía un archivo. Lo crea si no existe, si existe concatena la salida al final de este.

```
ps -ef >> processos.txt
```
(Concatena al archivo procesos.txt la salida del comando.)

Es importante ver que si no se especifica el descriptor de fichero se asume que se redirige la salida estándar. En el caso del operador `<` se redirige la entrada estándar, es decir, el contenido del fichero que especificáramos, se pasaría como parámetro al comando.

Si quisiéramos redirigir todas las salidas a la vez hacia un mismo fichero, podríamos utilizar **`>&`**.

Además, con el carácter `&` podemos redirigir salidas de un tipo hacia otras, por ejemplo, si quisiéramos redirigir la salida de error hacia la salida estándar podríamos indicarlo con: **`2>&1`**. Es importante tener en cuenta que el orden de las redirecciones es significativo: se ejecutarán de izquierda a derecha.

</details>

<details><summary>g) Comando kill. ¿Cuál es su funcionalidad? Cite ejemplos.</summary>

El comando **`kill`** en Linux (ubicado en / bin / kill), es un comando incorporado que se usa para terminar los procesos manualmente. El comando kill envía una señal a un proceso que termina el proceso. Si el usuario no especifica ninguna señal que se enviará junto con el comando kill, se envía la señal TERM predeterminada que finaliza el proceso.

- **`kill -l`** Para mostrar todas las señales disponibles, puede usar la siguiente opción de comando.
- **`kill pid`** Para mostrar cómo usar un PID con el comando kill.
- **`kill -s`** Para mostrar cómo enviar señales a los procesos.
- **`kill -L`** este comando se usa para listar las señales disponibles en un formato de tabla. 

</details>

<details><summary>h) Investigue la funcionalidad y parámetros de los siguientes comandos relacionados con el manejo de procesos en GNU/Linux. Además, compárelos entre ellos:</summary>

- **ps:** Muestra información de los procesos activos.
- **kill:** Usa el PID para matar el proceso. Permite interactuar con cualquier proceso mandando señales. Kill `<pid>` termina un proceso y Kill -9 `<pid>` fuerza a terminar un proceso en caso de que la anterior opción falle. 
- **pstree:** muestra un árbol de procesos.
- **killall:** nos permite matar un proceso escribiendo su nombre
- **top:** Sirve para ver los procesos de ejecución del sistema (y más cosas) en tiempo real
- **nice:** Ejecuta un comando con una prioridad determinada, o modifica la prioridad a de un proceso. `nice -10 named` Esto bajaría la prioridad de named en 10 unidades(Si estaba en -10, pasará a - 20) `MENOS GENTIL = MAS PRIORIDAD`

</details>

---

## 6) Otros comandos de Linux (Indique funcionalidad y parámetros)

<details><summary>a) ¿A qué hace referencia el concepto de empaquetar archivos en GNU/Linux?</summary>

Los archivos `TAR` no son archivos comprimidos sino empaquetados. `TAR` es un empaquetador, es algo más parecido a un compresor como `arj` ó `zip` pero sin compresión. Su función es la de incluir todos los ficheros juntos en el mismo archivo, conservando las estructuras de directorios y permisos de los mismos. 

- **``crear``** un archivo .tar <br><br> 
    ```shell
    tar –cvf mi_archivo.tar /directorio/a/empaquetar 
    ```
- **``extraer``** el contenido de un archivo .tar ya creado <br><br> 
    ```shell
    tar –xvf mi_archivo.tar
    ```
- **`actualizar`** el contenido de un archivo .tar ya existente <br><br> 
    ```shell
    tar –uvf mi_archivo.tar
    ```
- **`agregar`** un directorio a un archivo .tar ya existente <br> <br> 
    ```shell
    tar –rvf archivo. tar  directorio/a/agregar
    ```
- **`empaquetar`** y comprimir el archivo .tar <br><br> 
    ```shell
    tar –cvzf archivo.tgz /directorio/a/empaquetar/y/comprimir
    ```
- **`desempaquetar`** el archivo .tgz <br><br>
    ```shell
    tar –xvzf archivo.tgz
    ```
- Ojo : Observa la extensión ".tgz" para el tar comprimido. Aunque también podemos ponerle como extensión ".tar.gz"

</details>

<details><summary>b) Seleccione 4 archivos dentro de algún directorio al que tenga permiso y sume el tamaño de cada uno de estos archivos. Cree un archivo empaquetado conteniendo estos 4 archivos y compare los tamaños de los mismos. ¿Qué característica nota?</summary>

Claro, para sumar el tamaño de cuatro archivos en Linux y crear un archivo empaquetado que los contenga, puede seguir los siguientes pasos:

- Abrir una terminal y navegar hasta el directorio que contiene los cuatro archivos usando el comando `cd`.
- Para sumar el tamaño de los cuatro archivos, use el comando <br> <br>
    ```shell
    du -sh file1 file2 file3 file4
    ```
    Esto le dará la suma total de los tamaños de los cuatro archivos.
- Para crear un archivo empaquetado que contenga los cuatro archivos, puede utilizar el comando 
    ```shell
    tar -cvzf archivo_empaquetado.tar.gz file1 file2 file3 file4
    ```
    Esto creará un archivo empaquetado llamado `archivo_empaquetado.tar.gz` que contiene los cuatro archivos.
- Para comparar los tamaños de los cuatro archivos individuales y el archivo empaquetado, use el comando `ls -lh`. Esto mostrará el tamaño de cada archivo en una lista. Compare el tamaño total de los cuatro archivos individuales con el tamaño del archivo empaquetado para notar la diferencia en el tamaño.


Es importante tener en cuenta que el comando `tar` utiliza la compresión para reducir el tamaño del archivo empaquetado, por lo que es posible que el tamaño del archivo empaquetado sea menor que la suma total de los tamaños de los cuatro archivos individuales.

</details>

<details><summary>c) ¿Qué acciones debe llevar a cabo para comprimir 4 archivos en uno solo? Indique la secuencia de comandos ejecutados.</summary>

Teniendo en cuenta que tenemos 4 archivos en el directorio Descargas/ejercicio6 y nos situamos en Descargas ejecutamos lo siguiente

```shell
tar cvfz archivo.tar.gz ejercicio6
```
Esto nos dejaria un archivo empaquetado de archivos comprimidos en un solo archivo archivo.tar.gz y para acceder a dicha informacion haremos

```powershell
tar xvfz archivo.tar.gz
```

</details>

<details><summary>d) ¿Pueden comprimirse un conjunto de archivos utilizando un único comando?</summary>

Si los archivos están en el mismo directorio utilizamos el comando visto anteriormente

</details>

<details><summary>e) Investigue la funcionalidad de los siguientes comandos:</summary>

- **`tar`** Empaqueta/desempaqueta varios archivos en uno solo, puede realizar compresión sin perdida
- **`grep`** El comando grep nos permite buscar cadenas de texto y palabras dentro de un fichero de texto o de la entrada estándar de la terminal. Una vez encontrado el contenido que estamos buscando: 
    grep mostrará en pantalla la totalidad de la línea/s que contiene/n la cadena de texto o palabra que estamos buscando
- **`gzip`** Comprime solo archivos utilizando la extensión .gz que se utiliza para truncar el tamaño de un archivo.
- **`zgrep`** Se usa para buscar expresiones de un archivo dado, incluso si está comprimido
- **`wc`** Cuenta los caracteres, palabras y líneas del archivo de texto.

</details>

---

## 7) Ejercicio

Enunciado: Indique qué acción realiza cada uno de los comandos indicados a continuación considerando su orden. Suponga que se ejecutan desde un usuario que no es root ni pertenece al grupo de root. (Asuma que se encuentra posicionado en el directorio de trabajo del usuario con el que se logueó). En caso de no poder ejecutarse el comando, indique la razón

```shell
l s −l > prueba {No se puede acceder a pruebas pq no existe el fichero}                         
ps > PRUEBA 
chmod 710 prueba
chown root : root PRUEBA
chmod 777 PRUEBA 
chmod 700 / etc / passwd 
passwd root 
rm PRUEBA 
man / etc / shadow 
find / −name ∗ .conf 
usermod root −d /home/ newroot −L 
cd / root 
rm ∗ 
cd / etc 
cp ∗ /home −R 
shutdown 
```

<details><summary>Respuesta</summary>

- `ls -l > prueba` Genera un archivo de nombre prueba que contiene un listado detallado con los contenidos del directorio home del usuario. Se redirige la salida estándar de ls mediante el carácter > hacia el archivo prueba.
- `ps > PRUEBA` Genera un archivo de nombre PRUEBA que contiene un listado de los procesos en ejecución en el directorio home del usuario. AL igual que en el ejemplo anterior, se redirige la salida estándar mediante >.
- `chmod 710 prueba` Cambia los permisos del archivo prueba a 710 para UGO (usuario, Grupo, Otros).
- `chown root:root PRUEBA` Se intenta cambiar el propietario del archivo prueba pero la operación no está permitida.
- `chmod 777 PRUEBA` Cambia los permisos del archivo PRUEBA a 777. Es decir, todos los usuarios pueden leer, escribir y ejecutar el archivo.
- `chmod 700 /etc/passwd` Intenta cambiar los permisos a 700, pero la operación no está permitida para un usuario que no es root, esto por el archivo que está intentando cambiar.
- `passwd root` passwd: No debe ver o cambiar la información de la contraseña para root.
- `rm PRUEBA` Se elimina el archivo PRUEBA.
- `man /etc/shadow` Permiso denegad, porque “man” no debe recibir una ruta, si hago “man shadow” si anda.
- `find / -name *.conf` Lista todos los archivos cuyo nombres terminan con .conf, empezando la búsqueda en el directorio raíz /.
- `usermod root –d /home/newroot –L`
- `cd /root` Se intenta acceder a la carpeta root, pero la operación falla porque el usuario no tiene los permisos.
- `rm *` Borra todos los archivos del directorio donde está posicionado el usuario.
- `cd /etc` Cambia el directorio a /etc, osea “se mueve” a /etc
- `cp * /home –R` Intenta copiar el contenido de /etc a home, pero el usuario no tiene los permisos necesarios para crear archivos en el directorio /home.
- `shutdown` Apaga el equipo

</details>

---

## 8) Indique qué comando sería necesario ejecutar para realizar cada una de las siguientes acciones:

<details><summary>a) Terminar el proceso con PID 23.</summary>

- Todos los procesos tienen un pid (id de proceso) para terminar un proceso se usa el comando:
    ```
    kill -9 23 (kill menos 9 número de id del proceso).
    ```
- `ps –aux` Para ver los procesos del sistema que corren en el momento comando:

</details>

<details><summary>b) Terminar el proceso llamado init. ¿Qué resultados obtuvo?</summary>

- `1)` Primero buscamos el PID de init con el comando `ps –aux`
- `2)` Ingresamos como superusuario: su – e ingresamos contraseña
- `3)` Utilizamos el comando kill –9 1
- `4)` Y vamos a ver que no va a suceder nada, porque el proceso init, no puede terminarse, así que ni responde al comando. 

</details>

<details><summary>c) Buscar todos los archivos de usuarios en los que su nombre contiene la cadena “.conf”</summary>

Para buscar un `archivo` se utiliza el comando:
```
 find / -type f -name NombreDelArchivoABuscar
```
Búsqueda por tipo

Linux permite a los usuarios listar toda la información basada en sus tipos. Hay varios filtros que puedes usar:
- **`d`** directorio o carpeta
- **`f`** archivo normal
- **`l`** enlace simbólico
- **`c`** dispositivos de caracteres
- **`b`** dispositivos de bloque

Si deseamos buscar la palabra “conf” en todo el sistema se utiliza el comando:
```
find / -name NombreABuscar 
```

</details>

<details><summary>d) Guardar una lista de procesos en ejecución el archivo /home/\<su nombre de usuario>/procesos</summary>

```
ps > /home/user/procesos
```

- `cat Procesos` Para poder comprobar el contenido que tiene el directorio Procesos
- `rm –r Procesos` Para eliminar dicho directorio

</details>

<details><summary>e) Cambiar los permisos del archivo /home/\<su nombre de usuario>/xxxx a:</summary>

- **Usuario:** Lectura, escritura, ejecución
- **Grupo:** Lectura, ejecución
- **Otros:** ejecución

- `mkdir xxxx` Primero creamos el directorio “xxxx” 
- `ls –l` Para ver los permisos que tiene dicho directorio
- `chmod 751 xxxx` Para cambiar sus permisos donde Usuario tenga los permisos de lectura, escritura, ejecución, Grupo los permisos de lectura y ejecución y Otros el permiso
- `7` = 4(Lectura) + 2(Escritura) + 1(Ejecución) --> `Usuario`
- `5` = 4(Lectura) + 1(Ejecución) --> `Grupo`
- `1` = 1(Ejecución) --> `Otros`
- `ls -l` Para chequear si los permisos fueron modificados

Para lograr visualizar los permisos se lee de la siguiente forma: 

![image](https://user-images.githubusercontent.com/55964635/227809799-8f8fb1d2-8ea0-4a2e-8a26-33bc6d1f83f0.png)
- No ver la primera d!
- Los primeros `rwx`(Lectura, Escritura, Ejecución) pertenecen a Usuario
- Luego rx (LecturaEjecución) pertenece a Grupo
- Y x (Ejecución) pertenece a Otros

</details>

<details><summary>f) Cambiar los permisos del archivo /home/<su nombre de usuario>/yyyy a:</summary>

- **Usuario:** Lectura, escritura.
- **Grupo:** Lectura, ejecución
- **Otros:** Ninguno

- `mkdir yyyy` Primero creamos el directorio `“yyyy”`
- `ls –l` Para ver los permisos que tiene dicho directorio 
- `chmod 650 yyyy` Para cambiar sus permisos donde Usuario tenga los permisos de lectura, escritura, ejecución, Grupo los permisos de lectura y ejecución y Otros el permiso de ejecución.

</details>

<details><summary>g) Borrar todos los archivos del directorio /tmp</summary>

```shell
cd /tmp
rm *
```

</details>

<details><summary>h) Cambiar el propietario del archivo /opt/isodata al usuario iso2010</summary>

```shell
chown iso2010 /opt/isodata
```

</details>

<details><summary>i) Guardar en el archivo /home/\<su nombre de usuario>/donde el directorio donde me encuentro en este momento, en caso de que el archivo exista no se debe eliminar su contenido anterior.</summary>

```
pwd >> /home/user/donde
```

</details>

---

## 9) Indique qué comando sería necesario ejecutar para realizar cada una de las siguientes acciones

<details><summary>a) Ingrese al sistema como usuario “root”</summary>

```shell
su
```

</details>

<details><summary>b) Cree un usuario. Elija como nombre, por convención, la primer letra de su nombre seguida de su apellido. Asígnele una contraseña de acceso.</summary>

```powershell
sudo adduser il {crear}
passwd il {nueva contra}
```

</details>

<details><summary>c) ¿Qué archivos fueron modificados luego de crear el usuario y qué directorios se crearon?</summary>

se modificaron los archivos `/etc/passwd` y se creo el directorio personal del perfil en /home/nombrelegido

</details>

<details><summary>d) Crear un directorio en `/tmp` llamado cursada2017</summary>

```shell
cd /tmp
mkdir cursada2017
```

</details>

<details><summary>e) Copiar todos los archivos de `/var/log` al directorio antes creado.</summary>

En modo superusuario/root

```shell
cp /var/log/* /tmp/cursada2017
```

</details>

<details><summary>f) Para el directorio antes creado (y los archivos y subdirectorios contenidos en él) cambiar el propietario y grupo al usuario creado y grupo users.</summary>

```shell
chown nombreUsuario:nombreUsuario /tmp/cursada2017
```

</details>

<details><summary>g) Agregue permiso total al dueño, de escritura al grupo y escritura y ejecución a todos los demás usuarios para todos los archivos dentro de un directorio en forma recursiva.</summary>


```shell
chmod -R 745 /tmp/cursada2017
```

</details>

<details><summary>h) Acceda a otra terminal virtual para loguearse con el usuario antes creado.</summary>

```
sudo login user
```

</details>

<details><summary>i) Una vez logueado con el usuario antes creado, averigüe cuál es el nombre de su terminal.</summary>

```shell
ps -p 544
```

</details>

<details><summary>j) Verifique la cantidad de procesos activos que hay en el sistema.</summary>

```shell
ps aux | wc -l
```

</details>

<details><summary>k) Verifiqué la cantidad de usuarios conectados al sistema.</summary>

```shell
who
```

</details>

<details><summary>l) Vuelva a la terminal del usuario root, y envíele un mensaje al usuario anteriormente creado, avisándole que el sistema va a ser apagado.</summary>

```shell
sudo shutdown 1 'El sistema se va a apagar'
tmb sin apagar
wall "En un minuto apagaremos el sistema."
```

</details>

<details><summary>m) Apague el sistema</summary>

```shell
sudo shutdown now
```

</details>

---

## 10) Indique qué comando sería necesario ejecutar para realizar cada una de las siguientes acciones

<details><summary>a) Cree un directorio cuyo nombre sea su número de legajo e ingrese a él.</summary>

```shell
mkdir 19508/3 {No se puede dado q confunde / con un desplazamiento de directorio}
```

</details>

<details><summary>b) Cree un archivo utilizando el editor de textos vi, e introduzca su información personal:</summary>

Nombre, Apellido, Número de alumno y dirección de correo electrónico. El archivo debe llamarse "LEAME".

```
cd legajo
vi LEAME
```

</details>

<details><summary>c) Cambie los permisos del archivo LEAME, de manera que se puedan ver reflejados los siguientes permisos:</summary>

- **Dueño:** ningún permiso
- **Grupo:** permiso de ejecución
- **Otros:** todos los permisos

```shell
chmod 017 LEAME
```

</details>

<details><summary>d) Vaya al directorio /etc y verifique su contenido. Cree un archivo dentro de su directorio personal cuyo nombre sea leame donde el contenido del mismo sea el listado de todos los archivos y directorios contenidos en /etc. ¿Cuál es la razón por la cuál puede crear este archivo si ya existe un archivo llamado "LEAME.en este directorio?.</summary>

Se puede porque unix es case sensitive y distingue entre mayúsculas y minúsculas.

</details>

<details><summary>e) ¿Qué comando utilizaría y de qué manera si tuviera que localizar un archivo dentro del filesystem? ¿Y si tuviera que localizar varios archivos con características similares? Explique el concepto teórico y ejemplifique.</summary>

```shell
find / -name "[0-9]*"
```

</details>

<details><summary>f) Utilizando los conceptos aprendidos en el punto e), busque todos los archivos cuya extensión sea .so y almacene el resultado de esta búsqueda en un archivo dentro del directorio creado en a). El archivo deberá llamarse .ejercicio_f".</summary>

```shell
find / -name "*.os" > /home/user/legajo/ejerciciof
```

</details>

---

## 11) Ejercicio

Indique qué acción realiza cada uno de los comandos indicados a continuación considerando su orden. Suponga que se ejecutan desde un usuario que no es root ni pertenece al grupo de root. (Asuma que se encuentra posicionado en el directorio de trabajo del usuario con el que se logueó). En caso de no poder ejecutarse el comando indique la razón:


- `mkdir iso` Crea el directorio iso
- `cd . / iso; ps > f0` Me situo en iso y creo el archivo f0 con los procesos en ejecucion
- `ls > f1` Guardo en F1 la lista de archivos en el directorio iso
- `cd /` Me posiciono en la raiz 
- `echo $HOME` muestra en pantalla la direccion del directorio personal del usuario
- `ls −l $> $HOME/iso/ls` No se puede acceder a $ no existe el fichero o directorio
- `cd $HOME; mkdir f2` Nos situamos en el directorio personal y creamos el directorio f2
- `ls −ld f2` Se da un listado detallado de f2
- `chmod 341 f2` Se modifican los permisos de f2;Es,Ej para usuario,L para Grupo, y Ej para otros
- `touch dir` se crea el archivo dir
- `cd f2` accedemos al directoriio f2
- `cd ~/ iso` accedemos a la carpeta iso
- `pwd > f3` se guarda en el archivo f3 la direccion de la carpeta iso
- `ps | grep ' ps ' | wc −l >> ../f2/f3` se obtienen los procesos, se usa de entrada para grep el cual filtra todos los que posean ps,pra luego almacenar la cantidad de lineas obtenidas luegro de dicho filtro y añadirlas al archivo f3
- `chmod 700 .. / f2 ; cd ..` Se modifica el acceso de f2 dando al usuario todos los permisos y a los demas nada, volviendo despues al directorio personal
- `find . −name etc / passwd` Lanza un warning por mal uso del comando
- `find / −name etc / passwd` filtra todos los archivos de passwd por nombre en orden
- `mkdir ejercicio5` crea el directorio ejercicio5


a) Inicie 2 sesiones utilizando su nombre de usuario y contraseña. En una sesión vaya siguiendo paso a paso las órdenes que se encuentran escritas en el cuadro superior. En la otra sesión, cree utilizando algún editor de textos un archivo que se llame. ejercicio10_explicacion"dentro del directorio creado en el ejercicio 9.a) y, para cada una de las órdenes que ejecute en la otra sesión, realice una breve explicación de los resultados obtenidos. (ARRIBA)

<details><summary>b) Complete en el cuadro superior los comandos 19 y 20, de manera tal que realicen la siguiente acción:</summary>

- `19:` Copiar el directorio iso y todo su contenido al directorio creado en el inciso 9.a).
- `20:` Copiar el resto de los archivos y directorios que se crearon en este ejercicio al directorio creado en el ejercicio 9.a).

</details>

<details><summary>c) Ejecute las órdenes 19 y 20 y comentelas en el archivo creado en el inciso a).</summary>

![image](https://user-images.githubusercontent.com/55964635/189272687-459c381d-b44c-4a8d-b3d0-aa3acc44e1ae.png)

</details>

---

## 12) Ejercicio

**Enunciado:** Cree una estructura desde el directorio /home que incluya varios directorios, subdirectorios y archivos, según el esquema siguiente. Asuma que “usuario” indica cuál es su nombre de usuario. Además deberá tener en cuenta que dirX hace referencia a directorios y fX hace
referencia a archivos:

a) Utilizando la estructura de directorios anteriormente creada, indique que comandos son necesarios para realizar las siguientes acciones:

**Mueva el archivo "f3.al directorio de trabajo /home/usuario.**

```shell
mv f3 $HOME
```

**Copie el archivo "f4.en el directorio "dir11".**

```shell
cp f4 $HOME/dir11
```

**Haga los mismo que en el inciso anterior pero el archivo de destino, se debe llamar "f7".**

```shell
cp f4 $HOME/dir11/f7
```

**Cree el directorio copia dentro del directorio usuario y copie en él, el contenido de "dir1".**

```shell
mkdir copia; cp -a dir11 copia
```

**Renombre el archivo "f1"por el nombre archivo y vea los permisos del mismo.**

```shell
cd iso;mv f0 archivo; ls  -ld archivo
```

**Cambie los permisos del archivo llamado archivo de manera de reflejar lo siguiente:**

- **``Usuario``** Permisos de lectura y escritura
- **``Grupo``** Permisos de ejecución
- **``Otros``** Todos los permisos

```shell
chmod 617 archivo
```

**Renombre los archivos "f3 2 "f4"de manera que se llamen "f3.exe 2 "f4.exerespectivamente.**

```shell
mv f3 f3.exe; cd $HOME/dir11 ; mov f4 f4.exe
```

**Utilizando un único comando cambie los permisos de los dos archivos renombrados en el inciso anterior, de manera de reflejar lo siguiente:**

- **`Usuario`** Ningún permiso
- **`Grupo`** Permisos de escritura
- **`Otros`** Permisos de escritura y ejecución

```shell
chmod 023 f3.exe f4.exe
```

---

## 13) Indique qué comando/s es necesario para realizar cada una de las acciones de la siguiente secuencia de pasos (considerando su orden de aparición):

**a) Cree un directorio llamado logs en el directorio /tmp.**

```shell
cd /tmp; mkdir logs
```

**b) Copie todo el contenido del directorio /var/log en el directorio creado en el punto anterior.**

```shell
cp -a /var/log/. /tmp/logs
```

**c) Empaquete el directorio creado en 1, el archivo resultante se debe llamar "misLogs.tar".**

```shell
tar cvf misLogs.tar logs
```

**d) Empaquete y comprima el directorio creado en 1, el archivo resultante se debe llamar "misLogs.tar.gz".**

```shell
tar cvfz misLogs.tar.gz logs
```

**e) Copie los archivos creados en 3 y 4 al directorio de trabajo de su usuario.**

```shell
cp misLogs.tar $HOME
cp misLogs.tar.gz $HOME
```

**f) Elimine el directorio creado en 1, logs**

```shell
rm -r logs
```

**g) Desempaquete los archivos creados en 3 y 4 en do directorios diferentes.**

```shell
tar xvf misLogs.tar -C 1 
tar xvfz misLogs.tar.gz -C 2
```

**Fecha** -> Con el comando `Date`

---

> Ejercicios de scripting

---

## 1) Ejercicio

¿Qué es el Shell Scripting? ¿A qué tipos de tareas están orientados los script?  ¿Los scripts deben compilarse? ¿Por qué?

La Shell provee estructuras de control que permiten programar shell scripts. 

El Shell Scripting es la técnica (habilidad / destreza) de diseñar y crear Script (archivo de automatización de tareas) mediante un Shell (preferiblemente) de un Sistema Operativo, o un

Editor de Texto (Gráfico o Terminal). Este es un tipo de lenguaje de programación que generalmente es interpretado.

Está orientado a diferentes tareas:
- Automatización de tareas
- Aplicaciones interactivas
- Aplicaciones con interfaz gráfica (con el comando zenity, por ejemplo). 

---

## 2) Ejercicio

Investigar la funcionalidad de los comandos echo y read

- `Echo:` Es un comando para la impresión de un texto en pantalla. El comando para imprimir el contenido de la variable es:
- `echo $nombreVar `
- `Read:` El comando read lee su entrada estándar y asigna las palabras leídas en la(s) variable(s) cuyo nombre se pasa como argumento. Se trata del input desde teclado. 

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Practicas/Practica3/Imagenes/1.png?raw=true)

**a) ¿Como se indican los comentarios dentro de un script?**

Los comentarios tienen que comenzar con el símbolo \#

**b) ¿Cómo se declaran y se hace referencia a variables dentro de un script?**

No necesita declarar una variable. Se creará sólo con asignarle un valor a su referencia. Luego se referencia con el símbolo $ Ejemplo

Para hacer un script:
- `Paso 1` en la consola usar el comando: `touch script.sh` para crear el directorio.
- `Paso 2` Ver si se creo el directorio con el comando `ls`
- `Paso 3` Ingresar al archivo `script.sh` con el editor de texto vi de la siguiente manera 
   - `vim script.sh `
   - DENTRO DEL EDITOR VIM:
   - Ingresar la letra i para estar en modo insertar y Escribir
   ```bash
   #!/bin/bash 
   CAD="¡Hola Mundo!"
   echo $CAD
   ```
   - `ESC` (para salir del modo editor)
   - `:wq` (para guardar los cambios)
   - Salimos del editor vi e ingresamos a la consola
- `Paso 4:` Damos permiso de ejecución con el comando:
   - `chmod u+x script.sh`
   - Si ponemos el comando ls vamos a ver que el directorio .sh cambio de color.
- `Paso 5:` Con el comando `./script.sh` vamos a ver el contenido de ese script en cosola.
- `Paso 6:` Si queremos borrar ese directorio con script solo es necesario poner en consola el comando `rm script.sh`

Tambien podes ejecutar el script con el comando `bash script.sh`

---

## 3) Ejercicio

Crear dentro del directorio personal del usuario logueado un directorio llamado practicashell-script y dentro de él un archivo llamado mostrar.sh cuyo contenido sea el siguiente:

```sh
#!/bin/bash
# Comentarios acerca de lo que hace el script
# Siempre comento mis scripts, si no hoy lo hago
# y mañana ya no me acuerdo de lo que quise hacer
echo "Introduzca su nombre y apellido:"
read nombre apellido
echo "Fecha y hora actual:"
date
echo "Su apellido y nombre es:"
echo "$apellido $nombre"
echo "Su usuario es: `whoami`"
echo "Su directorio actual es:"
```

![image](https://user-images.githubusercontent.com/55964635/232369884-42f534c8-975e-4053-997a-ad86ffdada50.png)


**(a)** Asignar al archivo creado los permisos necesarios de manera que pueda ejecutarlo

**(b)** Ejecutar el archivo creado de la siguiente manera: ./mostrar

**(c)** ¿Qué resultado visualiza?

![image](https://user-images.githubusercontent.com/55964635/232370167-cc259f97-9771-4169-958f-31ce04e94529.png)

**(d)** Las backquotes (`) entre el comando whoami ilustran el uso de la sustitución de comandos. ¿Qué significa esto?
Son para poder ejecutar comando cuando se encuentran dentro de un string 

**(e)** Realizar modificaciones al script anteriormente creado de manera de poder mostrar distintos resultados (cuál es su directorio personal, el contenido de un directorio en particular, el espacio libre en disco, etc.). Pida que se introduzcan por teclado (entrada estándar) otros datos.


```sh
#!/bin/bash

echo "Nombre y apellido"
read nombre apellido
echo "Fecha y hora actual: `date`"
echo $nombre $apellido
echo "Su usuario es: `whoami`"
echo "su directorio actual es :`pwd`"
echo "su directorio personal es : `$HOME`"
echo "Nombre de un directorio:"
echo contenido
echo "Contenido de $contenido es `ls $contenido`"
echo "Espacio libre en el disco `df`"
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-00-40-25.png?raw=true) 


---

## 4) Ejercicio

Parametrización: ¿Cómo se acceden a los parámetros enviados al script al momento de su invocación? ¿Qué información contienen las variables `$#, $*, $?` y `$HOME` dentro de un script?

- Los scripts pueden recibir argumentos en su invocación. Para accederlos, se utilizan variables especiales:
- `$0` contiene la invocación al script. (nombre del script)
- `$1, $2, $3,...` contienen cada uno de los argumentos.
- `$#` contiene la cantidad de argumentos recibidos.
- `$*` contiene la lista de todos los argumentos separados por espacios.
- `$?` contiene en todo momento el valor de retorno del ultimo comando ejecutado.(si el valor es 0 se ejecuto correctamente, en caso de que haya habido algún error dará un valor entre 1 y 255).

```sh
#!/bin/bash

echo "$0"
echo "$1 $3"
echo "$#"
echo "$*"
echo "$HOME"
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-01-05-38.png?raw=true)

---

## 5) Ejercicio

¿Cual es la funcionalidad de comando exit? ¿Qué valores recibe como parámetro y cual es su significado?

El comando exit finaliza un script. Incluso, puede arrojar un valor de terminación, el cual estará disponible para su proceso padre.

Todo comando posee un estado de terminación (exit status). Un comando que se ejecutó satisfactoriamente arrojará un valor de 0, mientras que un comando que no se procesó de manera correcta, finalizará con un número diferente de 0.

Al igual que un comando, un script posee su propio estado de terminación, el cual será determinado por la última instrucción ejecutada por el script.

Dentro de un script, el comando exit puede arrojar un número dentro de un rango de 0 a 255.

Se puede consultar el exit status imprimiendo la variable `$?` de la siguiente manera:
- Ingresamos al editor VIM con el archivo mostrar.sh
- Una vez hecho el bin bash, como última línea y dentro de insertar ingresamos el siguiente comando: echo $?
- ESC
- :exit

En la consola se mostrara un número de 0 a 255. 

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-01-20-45.png?raw=true)

---

## 6) Ejercicio

El comando **expr** permite la evaluación de expresiones. Su sintaxis es: **expr arg1 op arg2**, donde **arg1 y arg2** representan argumentos y op la operación de la expresión. Investigar que tipo de operaciones se pueden utilizar

- Se puede utilizar 
   - suma
   - resta
   - multiplicación (/*)
   - división (/). 
- Y devuelve solo la parte entera.:
- expr 10 + 10 -> 20, expr 14 % 9 -> 5.

También se puede utilizar para:

- Cálculo de la longitud de la cadena: 
   - expr length “esto es un test” > 
   - devuelve la cantidad de caracteres: 15
- Cadena de rastreo:
   - expr substr “esto es un test” 3 5 > 
   - te devuelve el texto desde la pos 3 y 5 lugares: to es
- La cadena numérica primera posición de rastreo personaje que aparece: 
   - expr index “esto es un test” s 
   - te devuelve el índice de la letra pasado por parámetro en la cadena (la primera aparición).


```sh
#!/bin/bash/

SUMA=`expr 10 + 5`
RESTA=$(expr 10 - 5)
MULTIPLICACION=$(expr 10 \* 5)
DIVISION=$(expr 10 / 5)
MODULO=$(expr 10 % 5)
LONGITUD="Fabian "$(expr length "Fabian")
SUBSTR="Fabian 1 6: "$(expr substr "Fabian" 1 6)
INDICE="Fabian b: "$(expr index "Fabian" b)

echo "var1 = 10, var2 = 5"
echo "SUMA $SUMA"
echo "RESTA $RESTA"
echo "MULTIPLICACION $MULTIPLICACION"
echo "DIVISION $DIVISION"
echo "MODULO $MODULO"
echo "LONGITUD $LONGITUD"
echo "SUBSTR $SUBSTR"
echo "INDICE $INDICE"
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-02-25-09.png?raw=true)

---

## 7) Ejercicio

El comando **“test expresión”** permite evaluar expresiones y generar un valor de retorno, true o false. Este comando puede ser reemplazado por el uso de corchetes de la siguiente manera **[ expresión ]**. Investigar que tipo de expresiones pueden ser usadas con el comando test. Tenga en cuenta operaciones para: evaluación de archivos, evaluación de cadenas de caracteres y evaluaciones numéricas.

Este comando tiene un código de retorno igual a 0 cuando el test es positivo, y diferente de cero en caso contrario

El comando test posee dos sintaxis: **test expresión** y **[ expresión ]**, donde **expresión** representa el test que se debe efectuar

```sh
#!/bin/bash

var1=10
var2=5

if [ -e 7.sh ]; then echo "existe"; else echo "no existe"; fi

if (( $var1 % $var2 == 0 )); then echo "Es Par"; else echo "Es Impar"; fi

if (( $var1 > $var2 )); then echo "Es Mayor"; else echo "Es Menor"; fi

if [ -r 7.sh -a -w 7.sh -a -x 7.sh ]; then echo "Todos los permisos"
else echo "no tiene todos los permisos"; fi

if [ -r 7.sh -o -w 7.sh -o -x 7.sh ]; then echo "algun permiso"
else echo "no tiene todos los permisos"; fi
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-03-25-59.png?raw=true)

---

## 8) Ejercicio

Estructuras de control. Investigue la sintaxis de las siguientes estructuras de control incluidas en shell scripting:

```sh
#!/bin/bash
if [ 3 -eq 3 ]; then
  echo "Son iguales"
else
  echo "Son distintos"
fi
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-04-59-47.png?raw=true) 

```sh
#!/bin/bash
echo "Ingrese un caracter"
read letra
case $letra in
  [a-z]) echo "Es una minuscula";;
  [A-Z]) echo "Es una mayuscula";;
  [0-9]) echo "Es un nro";;
  *) echo "Ingreso un caracter invalida";;
esac
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-04-32-55.png?raw=true)

```sh
#!/bin/bash
var1=0
while [ $var1 -le 5 ]
do
  echo "Hola mundo"
  var1=$((var1+1))
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-04-15-06.png?raw=true)

```sh
#!/bin/bash
for var in 1 2 3 4 5
do
  echo $var
done
echo "--------"
for var2 in {1..5}
do
  echo $var2
done
echo "--------"
for ((i=1; i<=5; i++))
do
  echo $i
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-04-47-29.png?raw=true)

```sh
#!/bin/bash
select opcion in opcion1 opcion2
do
  case $opcion in
    opcion1) echo "Opcion1" ;;
    opcion2) echo "Opcion2";;
    *) exit;;
  esac
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-12-08-38.png?raw=true)

---

## 9) Ejercicio

¿Qué acciones realizan las sentencias break y continue dentro de un bucle? ¿Qué parámetros reciben?

- **`break [n]`** Corta la ejecución de `n` niveles de loops.
- **`continue [n]`** salta a la siguiente iteración del enésimo loop que contiene esta instrucción

```sh
#!/bin/bash/
contador=0
while true
do
  let contador++
  if [ $contador -eq 10 ]; then
    break
  elif [ $contador -eq 5 ]; then
    continue
  fi
  echo $contador
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-12-31-44.png?raw=true)

---

## 10) Ejercicio
¿Qué tipo de variables existen? ¿Es shell script fuertemente tipado? ¿Se pueden definir arreglos? ¿Cómo?

bash soporta `strings` y `arrays`
- Los nombres son case sensitive
- Para crear una variable:
   - NOMBRE="pepe" # SIN espacios alrededor del =
- Para accederla se usa $:
   - echo $NOMBRE

Para evitar ambigüedades se pueden usar llaves:

- Esto no accede a $NOMBRE
- echo $NOMBREesto_no_es_parte_de_la_variable
- Esto sí
- echo ${NOMBRE}esto_no_es_parte_de_la_variable
Los nombres de las variables pueden contener mayúsculas, minúsculas, números y el símbolo (underscore), pero no pueden empezar con un número.

No es fuertemente tipado, y no requiere una declaración explícita de tipo variables.

**Todo sobre los arreglos**

| Bash | Resultado |
| --- | --- |
| arreglo=() | Definir Arreglo vacio |
| arreglo[0]="valor1" | Asignación |
| arreglo=("valor1", "valor2") | Definir con valores |
| read -a arreglo | leer desde teclado <br> tiene que estar definido arriba |
| ${arreglo[0]} | retorna "valor1" |
| ${arreglo[*]} | Retorna todos los elementos del array |
| ${arreglo[@]} | Retorna todos los elementos del array |
| ${#arreglo[@]} | Retorna 2, si contiene valor1 y valor2 |

**Codigo de ejemplo**

```sh
#!/bin/bash
array=()

read -a array
echo "Array pelado" $array
echo "index 3" ${array[3]}
echo "Todos los elementos" ${array[*]}
echo "Cantidad de elementos" ${#array[*]}
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-13-17-14.png?raw=true)

---

## 11) Ejercicio

¿Pueden definirse funciones dentro de un script? ¿Cómo? ¿Cómo se maneja el pasaje de parámetros de una función a la otra?

Si, se pueden definir funciones dentro de un script.
- Las funciones permiten modularizar el comportamiento de los scripts. 
- Se pueden declarar de 2 formas:
   ```
   function nombre { block }
   nombre() { block }
   ```
- Con la sentencia return se retorna un valor entre 0 y 255
- El valor de retorno se puede evaluar mediante la variable $?
- Reciben argumentos en las variables $1, $2, etc

Para definir variables locales podemos usar la palabra clave `local var1`

```sh
#!/bin/bash
sumar(){
  return $(( $1 + $2 ))
}
cadena(){
  echo "Hola $1, como estas"
}

sumar 2 3
echo $?
mensaje=$(cadena "Juan")
echo $mensaje
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-13-30-12.png?raw=true)

---

## 12) Ejercicio

Evaluación de expresione

**(a)** Realizar un script que le solicite al usuario 2 números, los lea de la entrada Standard e imprima la multiplicación, suma, resta y cual es el mayor de los números leídos.


```sh
#!/bin/bash

echo "Ingrese dos nros"
read nro1 nro2
echo "MULTIPLICACION: $(( $nro1 * $nro2 ))"
echo "SUMA: $(( $nro1 + $nro2 ))"
echo "RESTA: $(( $nro1 - $nro2 ))"

if [ $nro1 -gt $nro2 ]; then
  echo "es mayor el $nro1"
else 
  echo "es mayor el $nro2"
fi
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-13-48-29.png?raw=true)

**(b)** Modificar el script creado en el inciso anterior para que los números sean recibidos como parámetros. El script debe controlar que los dos parámetros sean enviados.

```sh
#!/bin/bash

if (( $# != 2 )); then exit 0; fi

echo "MULTIPLICACION: $(( $1 * $2 ))"
echo "SUMA: $(( $1 + $2 ))"
echo "RESTA: $(( $1 - $2 ))"

if [ $1 -gt $2 ]; then
  echo "es mayor el $1"
else 
  echo "es mayor el $2"
fi
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-15-26-52.png?raw=true)


**(c)** Realizar una calculadora que ejecute las 4 operaciones básicas: +, - ,*, %. Esta calculadora debe funcionar recibiendo la operación y los números como parámetros

```sh
#!/bin/bash
select operacion in Multiplicacion Suma Resta CualEsMayor Cerrar
do
   case $operacion in
      Multiplicacion) echo "MULTIPLICACION: $(( $1 * $2 ))" ;;
      Suma) echo "SUMA: $(( $1 + $2 ))" ;;
      Resta) echo "RESTA: $(( $1 - $2 ))" ;;
      CualEsMayor) 
         if [ $1 -gt $2 ]; then echo "es mayor el $1";
         else echo "es mayor el $2" ;fi
         ;;
      Cerrar|*) exit ;;
   esac  
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-15-45-51.png?raw=true)

---

## 13) Ejercicio

Uso de las estructuras de control

**(a)** Realizar un script que visualice por pantalla los números del 1 al 100 así como sus cuadrados.

```sh
#!/bin/bash
for i in {1..100}
do
  echo "$i La potencia es: $(($i * $i))"
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-15-58-03.png?raw=true)

b) Crear un script que muestre 3 opciones al usuario: Listar, DondeEstoy y QuienEsta. Según la opción elegida se le debe mostrar:
- Listar: lista el contenido del directoria actual.
- DondeEstoy: muestra el directorio donde me encuentro ubicado.
- QuienEsta: muestra los usuarios conectados al sistema.

```sh
#!/bin/bash
select opcion in Listar DondeEstoy QuienEsta
do
  case $opcion in
    Listar) echo $(ls) ;;
    DondeEstoy) echo $(pwd);;
    QuienEsta) echo $(who);;
    *) exit;;
  esac
done
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-16-22-17.png?raw=true)

c) Crear un script que reciba como parámetro el nombre de un archivo e informe si el mismo existe o no, y en caso afirmativo indique si es un directorio o un archivo. En caso de que no exista el archivo/directorio cree un directorio con el nombre recibido como parámetro

```sh
#!/bin/bash
if (( $# != 1 )); then exit; fi

fi [ -e $1 ]; then
   echo "El archivo $1 existe"
   fi [ -f $1 ]; then echo "Y es un archivo"; fi
   fi [ -d $1 ]; then echo "Y es un directorio"; fi
   exit
fi
mkdir $1
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-17-16-38-34.png?raw=true)

---

# 14) Ejercicio

Renombrando Archivos: haga un script que renombre solo archivos de un directorio pasado como parametro agregandole una CADENA, contemplando las opciones:
- **“-a CADENA”:** renombra el fichero concatenando CADENA al final del nombre del archivo
- **“-b CADENA”:** renombra el fichero concantenado CADENA al principio del nombre
del archivo

Ejemplo:

- Si tengo los siguientes archivos: /tmp/a /tmp/b
- Al ejecutar: ./renombra /tmp/ -a EJ
- Obtendré como resultado: /tmp/aEJ /tmp/bEJ
- Y si ejecuto: ./renombra /tmp/ -b EJ
- El resultado será: /tmp/EJa /tmp/EJb

Comandos ejecutados
- bash 14.sh prueba -a Ej 
- Despues 
- bash 14.sh prueba -b Ej 

```sh
#!/bin/bash
if [ $# -ne 3 ]; then 
  echo  -e "
  Parametros: \n
  Path \n
  -a/-b \n
  sufijo/prefijo
"; exit;fi

if ! [ -e $1 ]; then 
  echo "El path ingresado no existe"
  exit
fi
cd $1
archivos="$(ls)"
ls -1
if [ $2 = "-a" ];then
  for i in ${archivos[*]};do mv $i $i$3;done
elif [ $2 = "-b" ];then
  for i in ${archivos[*]};do mv $i $3$i;done
else
  echo "Tiene que ingresar -a o -b"
fi
echo "Despues de todo:"
ls -1
```

![](https://github.com/Fabian-Martinez-Rincon/ISO/blob/main/Documentos/2023-04-18-10-12-13.png?raw=true)

---

## 15) Ejercicio

**Comando cut**. El comando cut nos permite procesar la líneas de la entrada que reciba (archivo, entrada estándar, resultado de otro comando, etc) y cortar columnas o campos, siendo posible indicar cual es el delimitador de las mismas. Investigue los parámetros que puede recibir este comando y cite ejemplos de uso.

Comando cut : Su principal utilidad es la de borrar secciones, campos o caracteres de la salida de un comando o de cada una de las líneas de un fichero de texto.

Ejemplos de uso:
- Mostrar los caracteres que nos interesen en una línea de texto o en un conjunto de líneas
- Imaginemos que tenemos un fichero de texto con el nombre `geekland.txt` que tiene el siguiente contenido:
   ``` 
   la utilidad
   es fácil de usar y es útil
   ```
- Si únicamente queremos mostrar el cuarto carácter de cada una de las líneas lo haremos con la opción `-c 4`
- `cut -c 4 geekland.txt`
   ```
   u
   f
   ```
- Si ahora queremos mostrar los caracteres del 2 al 6:
- `cut -c 2-6 geekland.txt`
   ```
   a uti
   s fá
   ```
- Si finalmente queremos mostrar los caracteres 1,2,3 y 5,6,7 y 8 de cada una de las líneas de un fichero de texto:
- `cut -c 1-3,5-8 geekland.txt`
   ```
   la tili
   es áci
   ```

Cut también ofrece la posibilidad de seleccionar un carácter inicial y seleccionar el resto de caracteres hasta el final. Por ejemplo para seleccionar el texto a partir del carácter 5 hasta el final usaremos la opción `-c 5-` del siguiente modo:
- `cut -c 5- geekland.txt`
   ```
   tilidad cut
   ácil de usar y es útil
   ```

O también permite seleccionar un carácter final y seleccionar el resto de caracteres hasta el inicio de la frase o fichero. Por lo tanto para mostrar desde el carácter 4 hasta el inicio de la frase lo haremos del siguiente modo:
- `cut -c -4 geekland.txt`
   ```
   la u
   es f
   ```
- Capturar texto a partir de un delimitador y fijando el campo que queremos mostrar
- Si únicamente queremos mostrar la tercera palabra:
- `a)` Cada palabra esta separada por un espacio. Por lo tanto tendremos que fijar el espacio como delimitador. Para fijar el espacio como delimitador lo haré con la opción
- `-d ' '`
- `b)` A continuación hay que definir la palabra que queremos mostrar. si queremos
mostrar la tercera palabra lo haremos con la opción –f2. La opción –f2 hace que se
muestre la palabra que hay entre el segundo y tercer delimitador.
- `cut -d ' ' –f2`
   ```
   utilidad
   fácil
   ```
- Ahora imaginemos que la salida del comando cat /etc/passwd es la siguiente:
- `cat /etc/passwd`
   ```
   root:x:0:0:root:/root:/bin/bash
   daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
   bin:x:2:2:bin:/bin:/usr/sbin/nologin
   sys:x:3:3:sys:/dev:/usr/sbin/nologin
   ...
   ```

Si únicamente queremos mostrar los usuarios podemos fijar que el delimitador sea : y a posteriori definir que se muestre el primer campo. Para hacer lo que acabo de mencionar podemos usar el siguiente comando:
- `cut -d ':' -f1 /etc/passwd`
```
root
daemon
bin
sys
... 
```

---

## 16) Ejercicio

Realizar un script que reciba como parámetro una extensión y haga un reporte con 2
columnas, el nombre de usuario y la cantidad de archivos que posee con esa extensión. Se debe guardar el resultado en un archivo llamado **reporte.txt**


Funciona un toque raro el find
```sh
#!/bin/bash

if [ $# -ne 1 ]; then echo "error"; exit 1; fi

cadena=""
for i in $(cat /etc/passwd) 
do
  usuario=$(echo $i | cut -d: -f1)
  path=$(echo $i | cut -d: -f6)  
  cadena+="$usuario $(find $path -name "*$1" | wc -l) \n"
done
echo -e "$cadena" > reporte.txt
```

---

## 17) Ejercicio

Escribir un script que al ejecutarse imprima en pantalla los nombre de los archivos que se encuentran en el directorio actual, intercambiando minúsculas por mayúsculas, además de eliminar la letra a (mayúscula o minúscula). Ejemplo, directorio actual:

```bash
IsO
pepE
Maria
Si ejecuto: ./ejercicio17
```
Obtendré como resultado

```
iSo
PEPe
mRI
```

**Ayuda**: Investigar el comando **tr**

```sh
#!/bin/bash

archivos=$(ls)
for i in $archivos
do
  nuevo=$(echo $i | tr '[:lower:][:upper:]' '[:upper:][:lower:]' | tr -d 'aA')
  echo $nuevo
done
```

Tambien podemos eliminar de la siguiente manera
- `nuevo_nombre=${archivo//a}`
- `nuevo_nombre=${archivo^^}` Todo a mayuscula
- `nuevo_nombre=${archivo,,}` Todo a minuscula
- echo $i | tr [a-zA-Z] [A-Za-z] | tr -d 'aA'

---

## 18) Ejercicio

Crear un script que verifique cada 10 segundos si un usuario se ha loqueado en el sistema (el nombre del usuario será pasado por parámetro). Cuando el usuario finalmente se loguee, el programa deberá mostrar el mensaje ”Usuario XXX logueado en el sistema” y salir.

```sh
#!/bin/bash

if [ $# -ne 1 ]; then 
  echo "Parametros incorrectos"; exit 1; 
fi

usuarios=$(cat /etc/passwd | cut -d: -f1 | grep -w $1 | wc -l)
if [ $usuarios -eq 0 ]; then
  echo "El usuario pasado no existe"; exit 2;
fi

while true
do
  if [ $(users | grep -w $1 | wc -l) -eq 1 ]; then
    echo "usuario $1 logueado en el sistema"
    exit
  fi  
  sleep 10
done
```

---

## 19) Ejercicio

Escribir un Programa de “Menu de Comandos Amigable con el Usuario” llamado menu, el cual, al ser invocado, mostrará un menú con la selección para cada uno de los scripts creados en esta práctica. Las instrucciones de como proceder deben mostrarse junto con el menú. El menú deberá iniciarse y permanecer activo hasta que se seleccione Salir. Por ejemplo:

```
MENU DE COMANDOS
03. Ejercicio 3
12. Evaluar Expresiones
13. Probar estructuras de control
...
Ingrese la opción a ejecutar: 03
```

```sh
#!/bin/bash

scripts=$(ls | grep "\.sh")
select opcion in Salir $scripts
do
  case $opcion in
    Salir) exit;;
    *) source $opcion;;
  esac
done
```

---

## 20) Ejercicio

Realice un scrip que simule el comportamiento de una estructura de PILA e implemente las siguientes funciones aplicables sobre una estructura global definida en el script:

- **push:** Recibe un parámetro y lo agrega en la pila 
- **pop:** Saca un elemento de la pila
- **lenght:** Devuelve la longitud de la pila
- **print:** Imprime todos elementos de la pila

```sh
#!/bin/bash
pila=()

push (){
  pila+=($1)
}
pop (){
  unset pila[${#pila[@]}-1]
}
lenght (){
  echo ${#pila[*]}
}
print(){
  echo ${pila[*]}
}
```

---

## 21) Ejercicio

- Agregue 10 elementos a la pila.
- Saque 3 de ellos.
- Imprima la longitud de la cola.
- Luego imprima la totalidad de los elementos que en ella se encuentan.

```sh
#!/bin/bash

pila=()
push (){ pila+=($1); }
pop (){ unset pila[${#pila[@]}-1]; }
lenght (){ echo ${#pila[*]}; }
print(){ echo ${pila[*]}; }

push 2
push 4
echo "$(lenght)"
print
pop
print
```

---

## 22) Ejercicio

Dada la siguiente declaración al comienzo de un script: num=(10 3 5 7 9 3 5 4) (la cantidad de elementos del arreglo puede variar). Implemente la función productoria dentro de este script, cuya tarea sea multiplicar todos los números del arreglo

```sh
#!/bin/bash

num=(10 3 5 7 9 3 5 4)
productora(){
  let resultado=1
  for i in ${num[*]}
  do
    resultado=$(($i * $resultado))
  done
  echo $resultado
}

productora
```

---

## 23) Ejercicio

Implemente un script que recorra un arreglo compuesto por números e imprima en pantalla sólo los números pares y que cuente sólo los números impares y los informe en pantalla al finalizar el recorrido

```sh
#!/bin/bash
nros=(10 3 5 7 9 3 5 4)

imprimir(){
  let nro
  for i in ${nros[*]}
  do
    echo $i
    if (( $i % 2 == 0 )); then
      echo "Par: "$i
    else
      let impares++
    fi
  done
  echo "Nros Impares: "$impares
}

imprimir
```

---

## 24) Ejercicio

Dada la definición de 2 vectores del mismo tamaño y cuyas longitudes no se conocen

```bash
vector1=( 1 .. N)
vector2=( 7 .. N)
Por ejemplo:
vector1=( 1 80 65 35 2 )
y
vector2=( 5 98 3 41 8 ).
```

Complete este script de manera tal de implementar la suma elemento a elemento entre
ambos vectores y que la misma sea impresa en pantalla de la siguiente manera:

```
La suma de los elementos de la posición 0 de los vectores es 6
La suma de los elementos de la posición 1 de los vectores es 178
...
La suma de los elementos de la posición 4 de los vectores es 10
```
```sh
#!/bin/bash
vector1=(1 80 65 35 2 )
vector2=(5 98 3 41 8 )
long=`expr ${#vector1[*]} - 1`

for i in $(seq 0 $long)
do
  resultado=`expr ${vector1[$i]} + ${vector2[$i]}`
  echo "La suma de los elementos de la posicion $i de los vectores es $resultado"
done
```

---

## 25) Ejercicio

Realice un script que agregue en un arreglo todos los nombres de los usuarios del sistema
pertenecientes al grupo “users”. Adicionalmente el script puede recibir como parametro:

- **“-b n”**: Retorna el elemento de la posición n del arreglo si el mismo existe. Caso contrario, un mensaje de error.
- **“-l”:** Devuelve la longitud del arreglo
- **“-i”:** Imprime todos los elementos del arreglo en pantalla

```sh
#!/bin/bash

# En grupo, me quedo con la columna 4 que tiene
# Los usuarios del grupo
# Uso el grep para filtrar por grupo aunque puede haber un usuario con nombre
# users pero bueno
# Cambiamos el separador de , por un espacio para agregarlo al array

if [ $# -ne 1 ] && [ $# -ne 2 ]; then echo "Parametros Invalidos"; exit 1; fi 
grupo=$(cat /etc/group | grep -w "users" |cut -d: -f4 | tr "," " ")
usuarios=($grupo)

case $1 in
  -b)
    if [ $2 -lt ${#usuarios[*]} ]; then
      echo ${usuarios[$2]}
    else
      echo "Parametro fuera de rango"
      exit 1
    fi;;
  -l) echo "Longitud: ${#usuarios}";;
  -i) echo "Todos: ${usuarios[*]}";;
esac
```

---

## 26) Ejercicio

Escriba un script que reciba una cantidad desconocida de parámetros al momento de su invocación (debe validar que al menos se reciba uno). Cada parámetro representa la ruta absoluta de un archivo o directorio en el sistema. El script deberá iterar por todos los parámetros recibidos, y solo para aquellos parámetros que se encuentren en posiciones impares (el primero, el tercero, el qverificar si el archivo o directorio existen en el sistema, imprimiendo en pantalla que tipo de objeto es (archivo o directorio). Además, deberá informar la cantidad de archivos o directorios inexistentes en el sistema.

```bash
#!/bin/bash
if [ $# -le  0 ]; then exit 1;fi

let existen
for ((i=0 ; i<=$cantidad ; i+=2));
do
  actual=${elementos[$i]}
  if [ -d $actual ]; then echo "es un directorio";
  elif [ -f $actual ]; then echo "es un archivo";
  else let existen++;fi
done
echo "La cantidad de archivos que no existen es" $existen
```

---

## 27) Ejercicio

Realice un script que implemente a través de la utilización de funciones las operaciones
básicas sobre arreglos:

- **inicializar:** Crea un arreglo llamado array vacío
- **agregar_elem \<parametro1>:** Agrega al final del arreglo el parámetro recibido
- **eliminar_elem \<parametro1>:** Elimina del arreglo el elemento que se encuentra en la
posición recibida como parámetro. Debe validar que se reciba una posición válida
- **longitud:** Imprime la longitud del arreglo en pantalla
- **imprimir:** Imprime todos los elementos del arreglo en pantalla
- **inicializar_Con_Valores \<parametro1>\<parametro2>:** Crea un arreglo con longitud
\<parametro1>y en todas las posiciones asigna el valor \<parametro2>


```shell
#!/bin/bash

inicializar(){
  array=()
  echo "vecto pa"
}
agregar_elem(){
  array+=($1)
}
eliminar_elem(){
  unset array[$1]
}
imprimir(){
  echo ${array[*]}
}
longitud(){
  echo ${#array[*]}
}
inicializar_Con_Valores(){
  for ((i=0; i<$1; i++));
  do
    array+=($2)
  done
}

select opcion in  inicializar agregar_elem eliminar_elem longitud imprimir inicializar_Con_Valores
do  
  case $opcion in
    inicializar) inicializar;;
    agregar_elem) agregar_elem 9;;
    eliminar_elem) eliminar_elem 0;;
    longitud) longitud ;;
    inicializar_Con_Valores) inicializar_Con_Valores 10 4 ;;
    imprimir) imprimir;;
  esac
done
```

---

## 28) Ejercicio
Realice un script que reciba como parámetro el nombre de un directorio. Deberá validar que el mismo exista y de no existir causar la terminación del script con código de error 4. Si el directorio existe deberá contar por separado la cantidad de archivos que en él se encuentran para los cuales el usuario que ejecuta el script tiene permiso de lectura y escritura, e informar dichos valores en pantalla. En caso de encontrar subdirectorios, no deberán procesarse, y tampoco deberán ser tenidos en cuenta para la suma a informar.

```sh
#!/bin/bash

if [ $# -ne 1 ]; then echo "Ingrese un parametro"; exit 1; fi
if ! [ -e $1 ] && ! [ -d $1 ] ; then exit 4; fi

archivos=($(ls))
let contador=0
for i in ${archivos[*]} 
do
  if [ -f $i ] && [ -w $i ] && [ -r $i ]; then let contador++;fi
done
echo $contador
```

---

## 29) Ejercicio

Implemente un script que agregue a un arreglo todos los archivos del directorio /home cuya terminación sea .doc. Adicionalmente, implemente las siguientes funciones que le permitan acceder a la estructura creada:

- verArchivo \<nombre_de_archivo>: Imprime el archivo en pantalla si el mismo se
encuentra en el arreglo. Caso contrario imprime el mensaje de error “Archivo no encontrado” y devuelve como valor de retorno 5
- cantidadArchivos: Imprime la cantidad de archivos del /home con terminación .doc
- borrarArchivo \<nombre_de_archivo>: Consulta al usuario si quiere eliminar el archivo lógicamente. Si el usuario responde Si, elimina el elemento solo del arreglo. Si el usuario responde No, elimina el archivo del arreglo y también del FileSystem. Debe validar que el archivo exista en el arreglo. En caso de no existir, imprime el mensaje de error “Archivo no encontrado” y devuelve como valor de retorno 10

```sh
#!/bin/bash

archivos_doc=$( ls $HOME | grep '\.doc$' )

verArchivo(){
  encontro=false
  for i in ${archivos_doc[*]}
  do
    if [ $1 = $i ]; then 
      echo $(cat "$HOME/$1")
      encontro=true
    fi
  done
  if [ $encontro = false ]; then echo "No se encontro" ;return 5; fi
}

cantidadArchivos(){
  echo ${#archivos_doc[*]}
}

borrarArchivo(){
  echo "Ingrese un archivo"
  if ! [ -e "$HOME/$1" ]; then echo "Archivo no encontrado"; return 10; fi
  echo "Quiere eliminar el archivo logicamente? SI O NO"
  select desicion in SI NO SALIR  
  do
    case $desicion in
      SI) unset "$archivos_doc[$1]"; echo "Elementos ${archivos_doc[*]}" ;;
      NO) rm "$HOME/$1" ;;
      SALIR) break;;
    esac
  done
}

verArchivo "ejercio292.doc"
cantidadArchivos
borrarArchivo "ejercio9.doc"
echo $?
```

---

## 30) Ejercicio

Realice un script que mueva todos los programas del directorio actual (archivos ejecutables) hacia el subdirectorio “bin” del directorio HOME del usuario actualmente logueado. El script debe imprimir en pantalla los nombres de los que mueve, e indicar cuántos ha movido, o que no ha movido ninguno. Si el directorio “bin” no existe,deberá ser creado.

```sh
#!/bin/bash

# El -F agrega un indicador al final para saber que permisos tiene
# / para directorios
# * para archivos ejecutables

archivos=$(ls -F | grep "*$")
if [ -n ${archivos[*]} ];then exit 1; fi
echo ${archivos[*]}
bin="$HOME/bin"
if ! [ -e $bin ]; then mkdir $bin; fi

mv ${archivos[*]} $bin
```

---