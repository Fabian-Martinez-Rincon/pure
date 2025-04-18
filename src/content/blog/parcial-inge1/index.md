---
title: Parciales Ingenieria de Software 1
description: "Historias de Usuario y Casos de uso. Tuve que ir todas las practicas y consultas para poder entender con mejor detalle."
heroImage: { src: './thumbnail.jpg', color: '#EEE2AB' }
publishDate: 2023-05-07
tags: 
 - Facultad
 - Parciales
language: 'Spanish'
---

Podemos extraer todos los datos de nuestro enunciado de la siguiente forma. Tener en cuenta que los roles y actores son los mismos, solo que en HU no tomamos en cuenta el servidor y los actores que surgen por herencia.
Las HI y CU son las mismas tambien, solo que no tenemos las que interactuan unicamente con el servidor. Ejemplo, validar DNI o Cargar Noticias.

Tambien podes ver los ejercicios de las practicas en los repositorios de arriba. Sugiero que los intentes hacer por tu cuenta antes de mirar el ejercicio

Quiero aclarar que estos colores los elegi yo porque a mi me gustaron, no es nada especifico de la catedra



| Colores Para identificar               | !Color Picker Boxes|
| --- | --- |
| Roles/Actores                          | Yellow Color          |
| Historias de Usuario/Casos de uso      | Orange Color          |
| Datos solicitados o que debe realizar  | Purple Color          |
| Reglas de negocios/Verifica el sistema | Cyan Color              |




Vamos a extraer los datos del primer y segundo parcial en 2022

## Primera Fecha

![Primer Parcial](https://user-images.githubusercontent.com/55964635/205096308-5808f9f7-99d8-40d8-82ba-c6a0f3b686e0.jpeg)

En el parcial recomiendo empezar con HU y despues CU para extraer todo lo que hace el sistema y no confundirnos.

![Parcial1](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/e584be28-12fb-4f8f-9811-a3bc7cb31559)


### Roles
  - Persona (Usuario no registrado)
  - Usuario

### Historias de Usuario Resueltas

<details><summary>Ver Noticias</summary><table><tr><td> 
<p><b>ID:</b> Ver Noticias </p>
<p><b>TÍTULO:</b> Como persona quiero ver noticias para informarme</p>
<p><b>REGLAS DE NEGOCIO:</b></p>
</td></tr><tr><td>
<p><b>CRITERIOS DE ACEPTACIÓN:</b> Ver Noticias</p>
<p>Escenario 1: Ver Noticias Exitoso</p>
<p><b>Dado</b> que se establecio conexión con el servidor y hay noticias para mostrar</p>
<p><b>Cuando</b> la persona presiona el boton ver noticias</p>
<p><b>Entonces</b> el sistema muestra las noticias en pantalla</p>
<hr>
<p>Escenario 2: Ver Noticias Fallido por falla de conexión</p>
<p><b>Dado</b> que no se establecio conexión con el servidor</p>
<p><b>Cuando</b> la persona presiona el boton ver noticias</p>
<p><b>Entonces</b> sistema informa que no se pudo establecer conexión con el servidor</p>
<hr>
<p>Escenario 3: Ver Noticias Fallido por falta de noticias</p>
<p><b>Dado</b> que se establecio conexión con el servidor y no hay noticias para mostrar</p>
<p><b>Cuando</b> la persona presiona el boton ver noticias</p>
<p><b>Entonces</b> sistema informa que no hay noticias disponibles</p>
</td></tr></table></details>







<details><summary>Registrar Persona</summary><table><tr><td> 
<p><b>ID:</b> Registrar Persona</p>
<p><b>TÍTULO:</b> Como persona quiero registrarme para poder acceder a los detalles</p>
<p><b>REGLAS DE NEGOCIO:</b></p>
- Persona mayor de 18 Años <br>
- Mail no registrado
</td></tr><tr><td>
<p>CRITERIOS DE ACEPTACIÓN:</p>
<p><b>Escenario 1</b>: Registro Exitoso</p>
<p><b>Dado</b> que la persona Juan, tiene 21 años que es mayor de 18 años y el mail juan@gmail.com no esta registrado</p>
<p><b>Cuando</b> la persona ingresa Juan , Martinez, 21 años, juan@gmail.com</p>
<p><b>Entonces</b> el sistema registra al nuevo usuario, genera una contraseña de manera aleatoria y la manda al mail</p>
<hr>
<p><b>Escenario 2</b>: Registro Fallido por tener menos de 18 años</p>
<p><b>Dado</b> que la persona Martin, tiene 10 años que es menor de 18 años y el mail martin@gmail.com no esta registrado</p>
<p><b>Cuando</b> la persona ingresa Martin , Lopez, 10 años, martin@gmail.com</p>
<p><b>Entonces</b> el sistema informa que la persona es menor de edad</p>
<hr>
<p><b>Escenario 3</b>: Registro Fallido por mail ya registrado</p>
<p><b>Dado</b> que la persona Leonel, tiene 25 años que es mayor de 18 años y el mail lionel@gmail.com esta registrado</p>
<p><b>Cuando</b> la persona ingresa Lionel , Messi, 25 años, lionel@gmail.com</p>
<p><b>Entonces</b> el sistema informa que el mail ingresado ya esta registrado</p>
</td></tr></table></details>







<details><summary>Iniciar Sesión</summary><table><tr><td> 
<p><b>ID:</b> Iniciar Sesión</p>
<p><b>TÍTULO:</b> Como usuario quiero iniciar sesión para poder acceder a los detalles</p>
<p><b>REGLAS DE NEGOCIO:</b></p>
- Tiene 3 intentos antes del bloqueo
</td></tr><tr><td>
<p>CRITERIOS DE ACEPTACIÓN:</p>
<p><b>Escenario 1</b>: Inicio exitoso</p>
<p><b>Dado</b> Que el usuario juan@gmail.com esta registrado, esta en primer intento y la contraseña "hola123" es correcta</p>
<p><b>Cuando</b> el usuario ingresa juan@gmail.com, "hola123"</p>
<p><b>Entonces</b> el sistema inicia sesión y habilita el acceso a los detalles</p>
<hr>
<p><b>Escenario 2</b>: Inicio Fallido por usuario no registrado</p>
<p><b>Dado</b> Que el usuario martin@gmail.com no esta registrado</p>
<p><b>Cuando</b> el usuario ingresa martin@gmail.com, 'contraseña123'</p>
<p><b>Entonces</b> el sistema informa que el mail ingresado no se encuentra registrado</p>
<hr>
<p><b>Escenario 3</b>: Inicio Fallido por contraseña icorrecta</p>
<p><b>Dado</b> Que el usuario lionel@gmail.com esta registrado, esta en primer intento y la contraseña "mundial" es incorrecta</p>
<p><b>Cuando</b> el usuario ingresa lionel@gmail.com, "mundial"</p>
<p><b>Entonces</b> el sistema informa que la contraseña es incorrecta e incrementa en uno los intentos</p>
<hr>
<p><b>Escenario 4</b>: Inicio Fallido por contraseña icorrecta</p>
<p><b>Dado</b> Que el usuario pepe@gmail.com esta registrado, esta en tercer intento y la contraseña "mundial2" es incorrecta</p>
<p><b>Cuando</b> el usuario ingresa pepe@gmail.com, "mundial2"</p>
<p><b>Entonces</b> el sistema informa que la contraseña es incorrecta y bloquea la cuenta</p>
<hr>
<p><b>Escenario 5</b>: Inicio Fallido cuenta bloqueada</p>
<p><b>Dado</b> Que el usuario gonzalo@gmail.com esta registrado y la cuenta esta bloqueada</p>
<p><b>Cuando</b> el usuario ingresa gonzalo@gmail.com</p>
<p><b>Entonces</b> el sistema informa que la cuenta esta bloqueada</p>
</td></tr></table></details>








<details><summary>Cerrar Sesión</summary><table><tr><td> 
<p><b>ID:</b> Cerrar Sesión</p>
<p><b>TÍTULO:</b> Como usuario quiero cerrar sesión para poder proteger mis datos</p>
<p><b>REGLAS DE NEGOCIO:</b></p>
</td></tr><tr><td>
<p>CRITERIOS DE ACEPTACIÓN:</p>
<p><b>Escenario 1:</b> Cierre exitoso</p>
<p><b>Dado</b> que el usuario tiene una sesión abierta </p>
<p><b>Cuando</b> el usuario presiona el boton cerrar sesión</p>
<p><b>Entonces</b> el sistema cierra la sesión y bloquea los accesos a los detalles</p>
</td></tr></table></details>




<details><summary>Acceder Detalle</summary><table><tr><td> 
<p><b>ID:</b> Acceder Detalle</p>
<p><b>TÍTULO:</b> Como usuario quiero acceder a un detalle para informarme</p>
<p><b>REGLAS DE NEGOCIO:</b></p>
- Acceso a 5 detalles por dia
</td></tr><tr><td>
<p>CRITERIOS DE ACEPTACIÓN:</p>
<p><b>Escenario 1:</b> Acceso exitoso</p>
<p><b>Dado</b> que se establecio conexión con el servidor y el usuario juan@gmail.com accedio a 1 detalle que es menor a 5 detalles </p>
<p><b>Cuando</b> el usuario presiona el boton "ver detalles" </p>
<p><b>Entonces</b> El sistema muestra el detalle de la noticia e incrementa la cantidad de detalles visto</p>
<hr>
<p><b>Escenario 2:</b> Acceso exitoso</p>
<p><b>Dado</b> que se establecio conexión con el servidor y el usuario juan@gmail.com accedio a 4 detalles que es menor a 5 detalles </p>
<p><b>Cuando</b> el usuario presiona el boton "ver detalles" </p>
<p><b>Entonces</b> El sistema muestra el detalle de la noticia, incrementa los intentos y Bloquea el acceso a los detalles por el resto del dia</p>
<hr>
<p><b>Escenario 3:</b> Acceso Fallido por falta de conexión</p>
<p><b>Dado</b> que no se establecio conexión con el servidor </p>
<p><b>Cuando</b> el usuario presiona el boton "ver detalles" </p>
<p><b>Entonces</b> El sistema informa que no se establecio conexión con el servidor </p>
<hr>
<p><b>Escenario 4:</b> Acceso fallido por limite de accesos</p>
<p><b>Dado</b> que se establecio conexión con el servidor y el usuario juan@gmail.com accedio a 5 detalles que es igual a 5 detalles </p>
<p><b>Cuando</b> el usuario quiere ver detalles</p>
<p><b>Entonces</b> El sistema informa que el acceso a los detalles fue bloqueado por el resto del dia </p>
</td></tr></table></details>

---

![Parcial1CU](https://github.com/MITH-arg/EI-Materias/assets/55964635/b6659366-c65e-4597-9e72-53a0dc6bf640)

### Actores
  - Persona(Usuario no registrado)
  - Usuario
  - Otro
  - Servidor

### Casos de Uso Resueltos
<details><summary>Ver Noticias</summary>
<table><td> 
<p><b>Nombre:</b> Ver Noticias </p>
<p><b>Descripción:</b> Este Cu describe como otro mira noticias </p>
<p><b>Actores:</b> Otro </p>
<p><b>Precondiciones:</b> </p>
<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td >  
Paso 1: Otro selecciona la opción "Ver noticias"
</td><td>
Paso 2: El sistema ejecuta el cu "Recibir Noticias" <br>
Paso 3: El sistema muestra las noticias en pantalla
</td></tr></table>
<p>Curso alterno:</p>
- Paso alterno 2, no se recibieron noticias. Se informa. Fin del CU
<p>Postcondición: Se mostro una noticias en pantalla</p>
</td></table></details>

<details><summary>Registrar Persona</summary>
<table><td> 
<p><b>Nombre:</b> Registrar Persona  </p>
<p><b>Descripción:</b> Este cu describe como una persona se registra en el sistema</p>
<p><b>Actores:</b> Persona </p>
<p><b>Precondiciones:</b>  </p>
<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  
Paso 1: La persona selecciona la opción "Registrar Persona"<br>
Paso 3: La persona ingresa datos solicitados
</td><td>
Paso 2: El sistema solicita nombre, apellido, edad y mail <br>
Paso 4: El sistema valida que la persona no sea menor de 18 años<br>
Paso 5: El sistema valida que el usuario no este registrado en el sistema
</td></tr></table>
<p>Curso alterno: </p>
- Paso alterno 4: La persona es menor de 18 años. Se informa. Fin del Cu<br>
- Paso alterno 5: El usuario ingresado ya se encuentra registrado. Se notifica. Vuelve al paso 2
<p>Postcondición: Se registro un nuevo usuario</p>
</td></table></details>





<details><summary>Iniciar Sesión</summary>
<table><td> 
<p><b>Nombre:</b> Iniciar Sesión </p>
<p><b>Descripción:</b> Este cu describe como una usuario realiza un inicio de sesión </p>
<p><b>Actores:</b> Usuario </p>
<p><b>Precondiciones:</b>   </p>
<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  
Paso 1: El usuario ingresa la opción "Iniciar Sesión"<br>
Paso 3: El usuario ingresa datos solicitados
</td><td>W
Paso 2: El Sistema solicita nombre de usuario y contraseña<br>
Paso 4: El sistema valida que el usuario este registrado<br>
Paso 5: El Sistema valida que el usuario no este bloqueado<br>
Paso 6: El sistema valida contraseña <br>
Paso 7: El sistema realiza el inicio de sesión y habilita la opción para ver detalles
</td></tr></table>


<p>Curso alterno:</p>

- Paso alterno 4: Usuario no registrado. Se informa. Vuelve al paso 2. <br>
- Paso alterno 5: Usuario Bloqueado. Se informa. Fin del cu <br>
- Paso alterno 6: Contraseña incorrecta. Se informa y se incrementa en un intento <br>
- Paso alterno 6: Contraseña incorrecta en el intento 3. Se informa y se bloquea la cuenta. Fin del Cu <br>

<p>Postcondición:</p>

</td></table></details>





<details><summary>Cerrar Sesión</summary>

<table><td> 

<p><b>Nombre:</b> Cerrar Sesión </p>
<p><b>Descripción:</b> Este cu describe como un usuario logueado cierra la sesión </p>
<p><b>Actores:</b> Usuario</p>
<p><b>Precondiciones:</b> Tener una sesión abierta  </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 1: El usuario selecciona la opción "Cerrar Sesión"<br>
Paso 3: El usuario confirma la operación

</td><td>

Paso 2: El sistema solicita confirmación del usuario<br>
Paso 4: El sistema realiza el cierre de sesión y deshabilita las opciones para el acceso a los detalles

</td></tr></table>


<p>Curso alterno:</p>

- Paso alterno 3: No acepta la confirmación. Se notifica. Fin del CU

<p>Postcondición: La sesión fue cerrada y se deshabilita la opción de ver detalles</p>

</td></table></details>



<details><summary>Acceder Detalle</summary>

<table><td> 

<p><b>Nombre:</b> Acceder Detalle  </p>
<p><b>Descripción:</b> Este cu describe como un usuario logueado accede al detalle de una noticia </p>
<p><b>Actores:</b> Usuario </p>
<p><b>Precondiciones:</b> Debe tener una sesión abierta  </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 1: El usuario selecciona la opción Acceder detalle

</td><td>

Paso 2: El sistema valida la cantidad de accesos

Paso 3: El sistema ejecuta el cu "Recibir Noticias"

Paso 4: El sistema muestra la noticias e incrementa los accesos del usuario

</td></tr></table>


<p>Curso alterno:</p>
- Paso alterno 2: Tiene 5 accesos. Se notifica que ya no puede acceder a detalles por el resto del dia. Fin del CU<br>
- Paso alterno 3: No hay noticias para mostras. Se notifica. Fin del Cu

<p>Postcondición: Se accedio al detalle de una noticia</p>

</td></table></details>





<details><summary>Recibir Noticias</summary>

<table><td> 

<p><b>Nombre:</b> Recibir Noticias </p>
<p><b>Descripción:</b> Este cu describe como se retornan las noticias </p>
<p><b>Actores:</b> Servidor </p>
<p><b>Precondiciones:</b> Se debe haber ejecutado el cu "Ver noticias" o "Acceder Detalle" </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 2: El servidor acepta la conexión y valida el tokem<br>
Paso 3: El servidor retorna un conjunto de noticias<br>

</td><td>

Paso 1: El sistema solicita conexión con el servidor y envia tokem<br>
Paso 4: El sistema valida noticias recibidas<br>
Paso 5: El sistema muestra las noticias en recibidas en pantalla y cierra la conexión con el servidor 

</td></tr></table>


<p>Curso alterno:</p>
- Paso alterno 1: No se establecio conexión con el servidor. Se informa. Fin del cu<br>
- Paso alterno 4: No hay noticias para mostrar. Se informa. Fin del CU.<br>
- Paso alterno 5: Tokem invalido. Se informa. Fin del CU.

<p>Postcondición: Las noticias fueron recibidas</p>

</td></table></details>




## Segunda Fecha

![Segundo Parcial](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/11623658-f01e-4e9d-92ae-d51ae675036d)

Extraemos los datos como en el parcial anterior, la fotocopia esta super borrosa, pero bueno.

![Parcial2](https://github.com/MITH-arg/EI-Materias/assets/55964635/6ca3655d-ff80-4a9b-b4f9-c0bf44e5cd4a)

### Roles
  - Persona (Cliente no registrado)
  - Cliente

### Historias de Usuario Resueltas

En este parcial hablamos que otro sistema se encarga de liberar la reserva pasadas las 48hs, esto lo pregunte y me dijeron que es una abstracción más y que solo pregunte si esta disponible o no.

<details><summary>Registrar Persona</summary><table><tr><td> 
<p><b>ID:</b> Registrar Persona</p>
<p><b>TÍTULO:</b> Como persona me quiero registrar para poder alquilar una carpa</p>
<p><b>REGLAS DE NEGOCIO:</b> </p>
- Dni no registrado <br>
- Solo personas mayores de 21 años<br>
- Contraseña con mas de 6 caracteres
</td></tr><tr><td>
<p><b>CRITERIOS DE ACEPTACIÓN:</b></p>
<p><b>Escenario 1:</b> Registro exitoso</p>
<p><b>Dado</b> que el dni 123456 no esta registrado, la contraseña "contra1321" tiene mas de 6 caracteres y tiene 23 años que es mayor de 21 años </p>
<p><b>Cuando</b> la persona ingresa Juan, Carosella, 01/01/2000,123456, juan@gmail.com, "contra1321" </p>
<p><b>Entonces</b> el sistema registra al nuevo usuario y envia un mensaje de bienvenida al correo ingresado</p>
<hr>
<p><b>Escenario 2:</b> Registro fallido por dni ya registrado</p>
<p><b>Dado</b> que el dni 654321 esta registrado, la contraseña "cosa1233" tiene mas de 6 caracteres y tiene 23 años que es mayor de 21 años </p>
<p><b>Cuando</b> la persona ingresa Martin, Suarez, 01/01/2000, 654321, martin@gmail.com, "cosa1233" </p>
<p><b>Entonces</b> el sistema informa que el usuario ya se encuentra registrado</p>
<hr>
<p><b>Escenario 3:</b> Registro fallido por contraseña con menos de 6 caracteres</p>
<p><b>Dado</b> que el dni 666666 no esta registrado, la contraseña "arbol" no tiene mas de 6 caracteres y tiene 23 años que es mayor de 21 años </p>
<p><b>Cuando</b> la persona ingresa Luis, Miguel, 01/01/2000, 666666, luis@gmail.com, "arbol"</p>
<p><b>Entonces</b> el sistema informa que la contraseña tiene que tener al menos 6 caracteres</p>
<hr>
<p><b>Escenario 4:</b> Registro fallido por ser menor de edad</p>
<p><b>Dado</b> que el dni 77777 no esta registrado, la contraseña "muldialMesi" tiene mas de 6 caracteres y tiene 20 años que es menor de 21 años </p>
<p><b>Cuando</b> la persona ingresa Tomas, Martinez, 01/01/2003, 77777, tomas@gmail.com, "muldialMesi"</p>
<p><b>Entonces</b> el sistema informa que la persona es menor de edad</p>
<hr>
</td></tr></table></details>



<details><summary>Pedir Presupuesto</summary><table><tr><td> 
<p><b>ID:</b> Pedir Presupuesto</p>
<p><b>TÍTULO:</b> Como persona quiero pedir un presupuesto para ir de viaje </p>
<p><b>REGLAS DE NEGOCIO:</b> </p>
- La fecha debe estar en el año actual<br>
- Debe estar disponible
</td></tr><tr><td>
<p><b>CRITERIOS DE ACEPTACIÓN:</b></p>
<p><b>Escenario 1:</b> Pedido exitoso</p>
<p><b>Dado</b> que la fecha 01/01/2023 esta en el año actual y la carpa esta disponible</p>
<p><b>Cuando</b> la persona ingresa Roja, 5, 01/01/2023</p>
<p><b>Entonces</b> el sistema genera un codigo, imprime el presupuesto y reserva la carpa por 48hs</p>
<hr>
<p><b>Escenario 2:</b> Pedido fallido por no estar en el año actual</p>
<p><b>Dado</b> que la fecha 01/01/2021 no esta en el año actual</p>
<p><b>Cuando</b> la persona ingresa Azul, 10, 01/01/2021</p>
<p><b>Entonces</b> el sistema informa que la fecha ingresada no se encuentra en el año actual</p>
<hr>
<p><b>Escenario 3:</b> Pedido fallido por carpa no disponible</p>
<p><b>Dado</b> que la fecha 01/01/2023 esta en el año actual y la carpa no esta disponible</p>
<p><b>Cuando</b> la persona ingresa Roja, 5, 01/01/2023</p>
<p><b>Entonces</b> el sistema informa que la carpa ingresada no se encuentra disponible</p>
<hr>
</td></tr></table></details>


<details><summary>Alquilar Carpa</summary><table><tr><td> 
<p><b>ID:</b> Alquilar Carpa</p>
<p><b>TÍTULO:</b> Como Cliente quiero alquilar una carpa para poder vivir</p>
<p><b>REGLAS DE NEGOCIO:</b> 
- Seña no menor al 50%<br>
- Seña no mayor al 100%<br>
- Pago con tarjeta de credito
</p>
</td></tr><tr><td>
<p><b>CRITERIOS DE ACEPTACIÓN:</b></p>
<p><b>Escenario 1:</b> Alquiler exitoso</p>
<p><b>Dado</b> que el codigo 123 tiene una seña de 70$ que es mayor al 50% , menor al 100% del monto y el cliente posee una tarjeta de credito valida</p>
<p><b>Cuando</b> el cliente ingresa 123, 01/01/2023, 70$ y los datos de una tarjeta valida</p>
<p><b>Entonces</b> el sistema registra el alquiler, envia un comprobante con el numero de alquiler y el monto restante a pagar al correo del cliente</p>
<hr>
<p><b>Escenario 2:</b> Alquiler fallido por seña menor al 50% del monto</p>
<p><b>Dado</b> que el codigo 123 tiene una seña de 10$ que es menor al 50%</p>
<p><b>Cuando</b> el cliente ingresa 123, 01/01/2023, 10$</p>
<p><b>Entonces</b> el sistema informa que la seña es menor al 50%</p>
<hr>
<p><b>Escenario 3:</b> Alquiler fallido por seña mayor al 100% del monto</p>
<p><b>Dado</b> que el codigo 123 tiene una seña de 200$ que es mayor al 50% y mayor al 100% del monto</p>
<p><b>Cuando</b> el cliente ingresa 123, 01/01/2023, 200$</p>
<p><b>Entonces</b> el sistema informa que la seña ingresada es mayor al 100% del monto</p>
<hr>
<p><b>Escenario 4:</b> Alquiler fallido por problemas con la tarjeta de credito</p>
<p><b>Dado</b> que el codigo 123 tiene una seña de 100$ que es mayor al 50% , menor al 100% y el cliente posee una tarjeta de credito invalida</p>
<p><b>Cuando</b> el cliente ingresa 123, 01/01/2023, 100$ y los datos de una tarjeta invalida</p>
<p><b>Entonces</b> el sistema informa hay problemas con el pago</p>
</td></tr></table></details>



<details><summary>Pagar Resto</summary><table><tr><td> 
<p><b>ID:</b> Registrar Persona</p>
<p><b>TÍTULO:</b> </p>
<p><b>REGLAS DE NEGOCIO:</b> </p>
- No se abono el 100% del monto<br>
- Pago con tarjeta de credito
</td></tr><tr><td>
<p><b>CRITERIOS DE ACEPTACIÓN:</b></p>
<p><b>Escenario 1:</b> Pago exitoso</p>
<p><b>Dado</b> que el codigo 123 no pago el 100% y posee una tarjeta de credito valida</p>
<p><b>Cuando</b> el cliente ingresa 123 y los datos de una tarjeta de credito valida</p>
<p><b>Entonces</b> el sistema registra el pago completo </p>
<hr>
<p><b>Escenario 2:</b> Pago fallido por haber pagado el 100% del monto</p>
<p><b>Dado</b> que el codigo 123 pago el 100%</p>
<p><b>Cuando</b> el cliente ingresa 123</p>
<p><b>Entonces</b> el sistema informa que ya se pago el 100% del monto</p>
<hr>
<p><b>Escenario 3:</b> Pago exitoso</p>
<p><b>Dado</b> que el codigo 123 no pago el 100% y posee una tarjeta de credito invalida</p>
<p><b>Cuando</b> el cliente ingresa 123 y los datos de una tarjeta de credito invalida</p>
<p><b>Entonces</b> el sistema informa que hay problemas con el pago </p>

</td></tr></table></details>



<details><summary>Pagar con Tarjeta</summary><table><tr><td> 
<p><b>ID:</b> Pagar con Tarjeta</p>
<p><b>TÍTULO:</b> Como cliente quiero pagar con tarjeta para alquilar una carpa o pagar el resto de la misma </p>
<p><b>REGLAS DE NEGOCIO:</b> </p>
</td></tr><tr><td>
<p><b>CRITERIOS DE ACEPTACIÓN:</b></p>
<p><b>Escenario 1:</b> Pago exitoso</p>
<p><b>Dado</b> que se establecio conexión con el servidor, la fecha 4/4/2030 no esta vencida, el numero 1234 es valido y tiene fondos suficientes</p>
<p><b>Cuando</b> el cliente ingresa 1234</p>
<p><b>Entonces</b> el sistema registra el pago</p>
<hr>
<p><b>Escenario 2:</b> Pago fallido por falta de conexión</p>
<p><b>Dado</b> que no se establecio conexión con el servidor</p>
<p><b>Cuando</b> el cliente intenta pagar</p>
<p><b>Entonces</b> el sistema informa que no se establecio la conexión</p>
<hr>
<p><b>Escenario 3:</b> Pago fallido por tarjeta vencida</p>
<p><b>Dado</b> que se establecio conexión con el servidor, la fecha 4/4/2021 esta vencida, el numero 3214 es valido</p>
<p><b>Cuando</b> el cliente ingresa 3214</p>
<p><b>Entonces</b> el sistema informa que la tarjeta se encuentra vencida</p>
<hr>
<p><b>Escenario 4:</b> Pago fallido por numero invalido</p>
<p><b>Dado</b> que se establecio conexión con el servidor, la fecha 4/4/2030 no esta vencida, el numero 6666 es invalido</p>
<p><b>Cuando</b> el cliente ingresa 6666</p>
<p><b>Entonces</b> el sistema informa que el numero ingresado es invalido</p>
<hr>
<p><b>Escenario 5:</b> Pago fallido por fondos insuficientes</p>
<p><b>Dado</b> que se establecio conexión con el servidor, la fecha 4/4/2030 no esta vencida, el numero 3333 es valido y no tiene fondos suficientes</p>
<p><b>Cuando</b> el cliente ingresa 3333</p>
<p><b>Entonces</b> el sistema informa que la tarjeta no tiene fondos suficientes</p>
<hr>
</td></tr></table></details>




---

![Parcial2Cu](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fbafd933-099b-4ce3-b9f7-b14587d91343)


### Actores
- Persona(Usuario no registrado)
- Usuario
- Otro
- Servidor

### Casos de Uso Resueltos
El iniciar sesión y cerrar sesión no se implementan

<details><summary>Registrar persona</summary>

<table><td> 
<p><b>Nombre:</b> Registrar Persona </p>
<p><b>Descripción:</b> Este cu describe como una persona se registra </p>
<p><b>Actores:</b> Persona </p>
<p><b>Precondiciones:</b> </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>

Paso 1: La persona selecciona la opcion "registrar Persona"

Paso 3: La persona ingresa datos solicitados

</td><td>

Paso 2: El sistema solicita nombre, apellido, fecha de nacimiento, dni, dirección de correo electronico y contraseña

Paso 4: El sistema verifica dni no registrado

Paso 5: El sistema valida que la contraseña no tenga mas de 6 caracteres

Paso 6: El sistema valida que la persona no tenga mas de 21 años

</td></tr></table>
<p>Curso alterno:</p>

- Paso alterno 4: dni registrado. Se informa. Fin del cu
- Paso alterno 5: contraseña con menos de 6 caracteres. Se notifica. Vuelve al paso 2.
- Paso alterno 6: persona menor de 21 años. Se informa. Fin del cu

<p>Postcondición: Se registro el nuevo usuario </p>
</td></table></details>

<details><summary>Pedir Presupuesto</summary>

<table><td> 
<p><b>Nombre:</b> Pedir Presupuesto </p>
<p><b>Descripción:</b> Este cu describe como otro solicita un presupuesto </p>
<p><b>Actores:</b> otro </p>
<p><b>Precondiciones:</b> </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 1: Otro selecciona "Pedir Presupuesto"

Paso 3: Otro ingresa datos solicitados

</td><td>

Paso 2: El sistema solicita un tipo de carpa, cantidad de personas y fecha del evento.

Paso 4: El sistema valida que la fecha se encuentre en el año actual

Paso 5: El sistema valida que la fecha este disponible

Paso 6: El sistema genera un codigo, imprime el presupuesto y reserva la carpa por 48hs

</td></tr></table>
<p>Curso alterno:</p>

- Paso alterno 4: La fecha no se encuentra en el año actual. Se notifica. Vuelve al paso 2
- Paso alterno 5: La carpa no esta disponible. Se notifica. Vuelve al paso 2.

<p>Postcondición: Se reservo la carpa para la fecha ingresada</p>
</td></table></details>


<details><summary>Alquilar Carpa</summary>

<table><td> 
<p><b>Nombre:</b> Alquilar Carpa </p>
<p><b>Descripción:</b> Este cu describe como un usuario alquila una carpa </p>
<p><b>Actores:</b> Usuario </p>
<p><b>Precondiciones:</b> El usuario debe tener una sesión abierta </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 1: El usuario selecciona la opción "alquilar Carpa"

Paso 3: El usuario ingresa datos solicitados

</td><td>

Paso 2: El sistema solicita codigo de presupuesto, dirección y la seña a pagar

Paso 4: El sistema valida que la seña no sea menor al 50% del monto

Paso 5: El sistema valida que la seña no sea mayor al 100% del monto

Paso 6: El sistema ejecuta el cu "Pagar con tarjeta"

Paso 7: El sistema registra el pago, envia un comprobante con el nro de alquiler y monto restante a pagar al correo

</td></tr></table>
<p>Curso alterno:</p>

- Paso alterno 4: La seña es menor al 50%. Se informa. Fin del Cu
- Paso alterno 5: La seña es mayor al 100%. Se informa. Fin del Cu
- Paso alterno 6: El pago no se realiza. Se notifica. Fin del CU

<p>Postcondición: </p>
</td></table></details>


<details><summary>Pagar Resto</summary>

<table><td> 
<p><b>Nombre:</b> Pagar resto </p>
<p><b>Descripción:</b> Este cu describe como un usuario paga el resto de un alquiler </p>
<p><b>Actores:</b> Usuario </p>
<p><b>Precondiciones:</b> El usuario debe tener una sesión iniciada</p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 1: El usuario selecciona la opción "Pagar resto"

Paso 3: El usuario ingresa datos solicitados

</td><td>

Paso 2: El sistema solicita numero de alquiler

Paso 4: El sistema valida que no se pago el 100% del pago

Paso 5: El sistema ejecuta el cu "Pagar con tarjeta"

Paso 6: El sistema registra el pago completo del alquiler

</td></tr></table>
<p>Curso alterno:</p>

- Paso alterno 1: Ya se pago el 100% del alquiler 
<p>Postcondición: </p>
</td></table></details>



<details><summary>Pagar con tarjeta</summary>

<table><td> 
<p><b>Nombre:</b> Recibir Noticias </p>
<p><b>Descripción:</b>  </p>
<p><b>Actores:</b>  </p>
<p><b>Precondiciones:</b> </p>

<b>Curso Normal:</b><table> <tr><td>Acciones del actor</td> <td>Acciones del Sistema</td></tr><tr><td>  

Paso 2: 

</td><td>

Paso 1:

</td></tr></table>
<p>Curso alterno:</p>
<p>Postcondición: </p>
</td></table></details>