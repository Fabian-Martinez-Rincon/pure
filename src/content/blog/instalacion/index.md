---
title: 'Instalación'
publishDate: '2026-03-13'
description: 'Guia paso a paso para instalar y configurar el entorno de desarrollo de Pascal en diferentes tipos de computadoras, desde equipos potentes hasta opciones en línea para PCs de bajos recursos.'
heroImage: { src: './thumbnail.jpg', color: '#6365EF' }
tags: 
 - Blog
language: 'Spanish'
---

# Preparando entorno para Pascal

## PC Decente

https://code.visualstudio.com/download

![alt text](image.png)

Buscamos estas extenciones en el vscode

![alt text](image-1.png)

Descargamos pascal de la pagina oficial

https://www.freepascal.org/download.html

![alt text](image-2.png)

Se descargan este

https://sourceforge.net/projects/freepascal/

> Le dan a todo siguiente

Una vez que estan, se pueden crear un archivo *ejemplo.pas* y pegan lo siguiente


```pascal
program ej1a_promedio;
var
  num1, num2, promedio: real;
begin
  writeln('Ingrese el primer numero:');
  readln(num1);
  writeln('Ingrese el segundo numero:');
  readln(num2);

  promedio := (num1 + num2) / 2;
  writeln('El promedio es: ', promedio:0:2);
end.
```

![alt text](image-3.png)

Ya estaria todo!!

![alt text](image-4.png)

## PC Sobreviviente

Descargamos Geany

https://www.geany.org/

![alt text](image-5.png)

Lo instale normal, todo siguiente y me anduvo

![alt text](image-7.png)

## PC Super Humilde

https://onecompiler.com/pascal

![alt text](image-6.png)

