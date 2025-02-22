---
title: 'Parciales DBD'
publishDate: '2022-11-27'
description: 'Parciales practicas de la materia Diseño de Base de Datos'
heroImage: { src: './thumbnail.jpg', color: '#B6AFEC' }
tags: 
 - Facultad
 - Parciales
language: 'Spanish'
---


## Conceptual

### Parcial Conceptual


<details >
<summary>📚 Enunciado Parcial</summary>
<br>

Diseño de Bases De Datos- Examen práctico- Primer Fecha- Tema 1- 8/11/2022
<br>
<br>
Importante: Consignar en primer hoja: nombre, apellido, legajo, tema de examen, turno de práctica, temas rendidos y cantidad de hojas entregadas, En restantes hojas poner legajo y nro hoja/total hojas
<br>
<br>
¿Modelado conceptual - (Tema 1)
<br>
<br>
Se debe modelar mediante modelo conceptual la información necesaria para un sistema encargado
de las ventas de una papelera.
<br>
<br>
La papelera cuenta con varios puntos de venta de los cuales se conoce: número único de punto de
venta, dirección detallada, teléfonos y empleados que trabajan en el punto de venta. Un empleado
puede ser repositor, vendedor o administrativo. De todos los empleados se conoce: D.N.I, apellidos,
nombres y C.U.LT. De los repositores se conoce además la edad; de los vendedores se conocen los
títulos, en caso de que posean y de los administrativos se registra el número de pasaporte. Un empleado trabaja en un único punto de venta en un momento determinado pero puede rotar entre los diferentes puntos de venta a lo largo del tiempo. Es necesario conocer el historial de rotaciones
de cada empleado en los diferentes puntos de venta de manera cronológica.
<br>
<br>
Cada punto de venta tiene información de los productos que comercializa, de cada producto se
registra: precio actual [precio de compra] código de producto (puede repetirse para diferentes puntos
de ventas pero no en el mismo punto de venta)| stock actual] stock mínimo, descripción y ubicación.
<br>
<br>
Para las ventas es necesario almacenar: nro ticket fiscal, precio total de la venta, fecha de la venta,
iproductos comprados, vendedor que realizó la venta, cliente involucrado y una descripción de la
forma de pago. Si la venta es con tarjeta de crédito es necesario además, guardar la cantidad de
¡cuotas en que se realiza el pago y el interés aplicado. Tenga en cuenta que es posible que en un
futuro se consulte a cuánto se vendió un determinado producto en una venta determinada.
<br>
<br>
En cambio, para las compras se debe almacenar código único de comprá, fecha, productos
involucrados, precio total y proveedor. Tenga en cuenta que es posible que en un futuro se consulte
a cuánto se compró un determinado producto en una compra X. 
De cada proveedor se conoce: razón social, C.U.I.T, posición frente a la afip, nombre de fantasía (puede no tener), dirección
detallada, teléfono y mail.
<br>
<br>
Por último de los clientes se conoce D.N.I, apellidos, nombres y C.U.1,T. Los empleados de la papelera pueden ser clientes.

</details>

#### 📚 Contexto Resuelto

- **Punto de venta**
    - número unico (Identificador)
    - dirección detallada
    - (0,n) teléfonos
    - 1,n \<trabaja> empleados
    - 1,n \<tiene> productos 
- **Persona**
    - D.N.I 
    - apellidos
    - nombres
    - C.U.I.T
- **Cliente**
- **Empleado** 
    - +repositor
        - edad
    - +vendedor
        - (0,n) titulos
    - +administrativo
        - nroPasaporte
    - \<trabaja> 1,1 punto de venta
- **\<trabaja>**
    - FechaInicio
    - (0,1) FechaFin
- **Producto**
    - precio actual
    - precio de compra
    - código de producto (puede repetirse para diferentes puntos de ventas pero no en el mismo punto de venta) \<idExterno>
    - stock actual 
    - stock mínimo
    - descripción
    - ubicación.
- **Venta**
    - nro ticket fiscal (Identificador)
    - precio total de la venta
    - fecha de la venta
    - <tiene> 1,n productos comprados
    - <tiene> 1,1 vendedor que realizó la venta
        - Fecha
    - <tiene> 1,1 cliente involucrado 
    - descripción forma de pago
    - (0, 1) cantidad de cuotas
    - (0, 1) interés aplicado
- **Compra**
    - código único de comprá
    - fecha
    - \<compro> productos involucrados
        - Precio Compra
    - precio total
    - (1, 1) <tiene> proveedor
- **proveedor** 
    - razón social (identificador)
    - C.U.I.T (identificador)
    - posición frente a la afip
    - (0, 1) nombre de fantasía (puede no tener)
    - dirección detallada
    - teléfono 
    - mail



<details open>
<summary>📚 Parcial Resuelto</summary>
<br>
<img src='https://user-images.githubusercontent.com/55964635/204165975-87cae88d-72ad-41c2-a329-783bca8e5476.png'>

</details>



---

## Logico|Fisico


<details >
<summary>📚 Resumen Logico</summary>
<br>
<img src='https://user-images.githubusercontent.com/55964635/204165940-e363b9a8-f672-4606-b046-3dcb4f1e734c.png'>

</details>

<details >
<summary>📚 Resumen Fisico</summary>
<br>
<img src='https://user-images.githubusercontent.com/55964635/204166839-63012958-7bed-4e3e-831e-82af542665a5.png'>
<br>

</details>


### Logico

- Solo en (T,E) se puede dejar solo a los hijos, en el resto se puede realizar cualquier opearción.

### Fisico Entidades

- Los atributos son siempre propios
- (0, 1) Solo subrayas el id propio (no importa el caso)
- (1, 1)
    - (0, 1) Forkeas el identificador y subrayas el id propio
    - (1, 1) Lo de arriba pero se puede hacer para uno de los dos lados
    - (1, n) Forkeas el identificador y subrayas el id propio
- (0, n) - Solo subrayas el id propio (no importa el caso)



### Fisico Relaciones
Cuando hablamos de (0, n), hablamos de las dos formas (0, n) y (1, n)

- Se generan cuando hay (0, 1) o (0, n) de cualquier lado
- (0, 1)
    - (0, 1) Junto los dos identificadores y subrayo cualquiera de los dos
    - (0, n) Junto los dos identificadores y subrayo el id del lado del (0, 1)
- (0, n), (0, n) Junto los dos identificadores y los subrayo los dos (dependiendo del dominio, puedo subrayar el atributo de la relación o no como en el caso del historial)


### Parcial

<details >
<summary>📚 Enunciado</summary>
<br>

<img src='https://user-images.githubusercontent.com/55964635/204159760-6a40c834-60c0-4443-8681-6c90018fcf82.png'>

</details>

### Parcial Logico

<details open>
<summary>📚 Parcial Resuelto</summary>
<br>
<img src='https://user-images.githubusercontent.com/55964635/204168183-726bc9ab-398e-47c4-9297-472f1322fd67.png'>

Tramos y posee tiene relacion (1, 1)
</details>


### Parcial Fisico

#### Entidades

- **Telefono** = (`nro`)
- **Persona** = (`Dni`, fk(nombre, distancia), Ny Ap, Dirección, Tipo, Antecedentes Medicos?)
- **Mail** = (`mail`)
- **Tramos** = (`Distancia, fk(nombre)`, Recaudado)
- **Carrera** = (`nombre`, Dir Fin, Dia Comienzo)

#### Relaciones

- **Llega** = (`Dni`, nombre, Distancia, puesto)
- **Tiene** = (`nro, dni`)
- **Tiene2** = (`mail, dni`)

---

## Algebra y Sql

<details >
<summary>📚 Resumen Algebra Relacional</summary>
<br>
<img src='https://user-images.githubusercontent.com/55964635/204201478-8f69348e-87ea-4c50-a6a9-323af90dc08b.png'>
<img src='https://user-images.githubusercontent.com/55964635/204202217-4b6f9917-8ca6-4b70-b64d-78295046daa1.png'>
<br>
</details>


<details >
<summary>📚 Resumen Sql</summary>
<br>
<img src='https://user-images.githubusercontent.com/55964635/204203457-d6ec9a2b-3ac3-4514-be92-c1ab14d6449a.png'>
<img src='https://user-images.githubusercontent.com/55964635/204204108-3b8ae2dd-d7a7-4049-a7fa-252fcc873c66.png'>
<br>
</details>

### Algebra Relacional Operaciones importantes




### Parcial Algebra y Sql

<details >
<summary>📚 Enunciado</summary>
<br>

<img src='https://user-images.githubusercontent.com/55964635/204280298-a9affdcc-f6eb-478e-95dc-2f4cc17cb428.jpeg'>

</details>

- **SOCIO=**(`nro_socio`, DNI, Apellido, Nombre, Fecha_Nacimiento, Fecha_ingreso)
- **LIBRO=**(`ISBN`, Titulo, Cod_Genero, Descripcion)
- **COPIA=**(`ISBN(FK), Nro_Ejemplar`, Estado)
- **EDITORIAL=**(`Cod_Editorial`, Denominación, Telefono, Calle, Numero, Piso, Dpto)
- **LIBRO-EDITORIAL=**(`ISBN(FK), Cod_Editorial(FK), Año_Edicion`)
- **GENERO=**(`Cod_Genero`, Nombre_genero)
- **PRESTAMO=** (`Nro_Prestamo`, nro_Socio(FK), ISBN(FK), Nro_Ejemplar(FK), Fecha_Prestamo, Fecha_Devolucion)

ISBN(FK) y Nro_Ejemplar son foraneas de copia

- `1)` Listar el titulo, género (el Nombre del Género) y descripción de aquellos libros editados por la editorial "Nueva Editorial". Dicho listado deberá estar ordenado por titulo.
    ```
    Select Distinct (L.Titulo, G.Nombre_genero, L.Descripcion)
    from LIBRO L 
        INNER JOIN LIBRO-EDITORIAL LE (L.ISBN = LE.ISBN)
        INNER JOIN EDITORIAL E (LE.Cod_Editorial = E.Cod_Editorial)
        INNER JOIN GENERO G (L.Cod_Genero = G.Cod_Genero)
    where (E.Denominacion = Nueva Editorial)
    ORDER BY T.Titulo
    ```
- `2)` Listar el apellido y nombre de aquellos socios cuya fecha de ingreso esté entre el 01/9/2022 y el 30/09/2022. Dicho listado debera estar ordenado por apellido y nombre.
    ```
    Select s.Apellido, Nombre
    from SOCIO s
    WHERE (s.Fecha_ingreso BETWEEN "01-9-2022" and "30-09-2022")
    ORDER BY s.Apellido, s.Nombre
    ```
- `3)` Listar el nombre, apellido, fecha de Nacimiento y cantidad de prestamos de aquellos socios que hayan solicitado más de 5 prestamos. Dicho listado deberá estar ordenado por Apellido.
```
    Select s.Nombre, s.Apellido, Fecha_Nacimiento, CONT(*)
    from SOCIO s
        INNER JOIN PRESTAMO P()
```
- `4)` Listar el DNI, apellido, y nombre de aquellos socios que no tengan préstamos de libros editados por la editorial "Gran Editorial". Dicho listado deberá estar ordenado por Apellido y Nombre
- `5)` Mostrar que cantidad de socios tienen actualmente libros prestados cuyo estado sea "Bueno"
- `6)` Listar el titulo, genero, denominación de la editorial y año de edición de aquellos libros editados entre los años 1980 y 2015.
- **Resultado**
    GENERO, LIBRO, LIBRO-EDITORIAL, EDITORIAL
    ```
    π Titulo, Nombre_genero , Denominación, Año_Edicion(
        GENERO ⨝ LIBRO ⨝ (
            σ Año_Edicion >= '01-1-1980' ʌ Año_Edicion <= '01-1-2015' 
            (LIBRO-EDITORIAL)
        )
        ⨝
        EDITORIAL
        )
    ```
- `7)` Agregar un nuevo socio con el nro_socio, DNI, Apellido, Nombre y Fecha de nacimiento que prefiera.
- **Resultado**
    ```
    SOCIO <= SOCIO ∪ {(1234, 777, "Rey", "Vegeta", 1-1-2000, 1-1-2022)}
    ```
- `8)` Modificar el titulo del libro cuyo ISBN es 2152-2020 por el titulo "El Código X"
    ```
    δTITULO <= 'El codigo x' (σ ISBN = 2152-2020 (Libro))
    ```


## Links
- [Algunas operaciones de Algebra Relacional](https://gist.github.com/miporto/01d443e83269c555baa435cf48eaaf76)
