---
title: 'AWS IoT Node-Red'
publishDate: '2025-10-05'
description: 'Actividad 2'
heroImage: { src: './thumbnail.jpg', color: '#0C294F' }
tags: 
 - Armado
language: 'Spanish'
---

# Indice

## **1) Desplegar dos instancias t3.micro con Linux Debian 13 en AWS EC2: Instancia A e Instancia B.**

Las siguientes imagenes muestran el **inicio exitoso de las instancias EC2** en AWS, **Instancia A** e **Instancia B**.
El proceso de creación se completó correctamente, incluyendo la inicialización, la configuración de grupos y reglas de seguridad, y el lanzamiento final.
Las instancia quedaron listas para su conexión y posterior instalación de Node-RED.

![alt text](image-4.png)

![alt text](image-5.png)

---

## **2) Instalar “Node-RED” en ambas instancias.**

Primero configuramos las **reglas de entrada** del grupo de seguridad asociado a las instancias, habilitando el **puerto 22 (SSH)** para permitir el acceso remoto desde cualquier dirección IP, y se agregando una regla **TCP personalizada en el puerto 1880**, utilizada por **Node-RED** para su interfaz web.
Esta configuración permite acceder al panel de control de Node-RED desde el navegador, garantizando la comunicación externa necesaria para el proyecto.

![alt text](image-7.png)

Ya habiendo configurado las **reglas de entrada**, ejecutamos los siguientes comandos en ambas instancias para instalar **node-red**:

```bash
sudo apt update
sudo apt install snapd
sudo snap install core
sudo snap install node-red
```
---

Y para verificar su correcto funcionamiento utilizamos el comando `sudo apt install net-tools` para disponer de utilidades de red y, posteriormente, `sudo netstat -na | grep 1880` para confirmar que el servicio de Node-RED se encuentra escuchando en el **puerto 1880**, indicando que la instalación y el despliegue se realizaron correctamente.

![alt text](image-6.png)

Posteriormente probamos el acceso a la **interfaz gráfica de Node-RED** mediante el navegador, utilizando las direcciónes públicas de las instancias. 

![alt text](image-8.png)

Estos pasos confirman que la instalación y configuración del entorno Node-RED en las instancias se realizaron correctamente y que el servicio se encuentra operativo.

## **3) Instalar el nodo “node-red-dashboard”.**

En la siguientes imagenes se puede ver el menú de configuración de **Node-RED**, para instalar el paquete **`node-red-dashboard`**.
Este módulo permite crear interfaces gráficas interactivas (dashboards) para visualizar y controlar variables del sistema, como el estado de la iluminación o los temporizadores.
La instalación de este nodo es fundamental para el desarrollo del panel de control utilizado en el proyecto.

![alt text](image-10.png)

![alt text](image-11.png)

---

## **4) Registrar ambas instancias como objetos/dispositivos en AWS IoT para poder operar mediante el protocolo MQTT.**

En la siguiente imagen se muestra el paso de **descarga del kit de conexión** en el servicio **AWS IoT Core**, correspondiente al dispositivo **A01-IOT-A**.
El kit incluye los archivos necesarios para establecer la comunicación segura entre la instancia EC2 y el servicio IoT. Estos elementos permiten autenticar el dispositivo y garantizar una conexión segura mediante el protocolo **MQTT**.

![alt text](image-12.png)

Una configuracion necesaria para su correcto funcionamiento es la de la **política de seguridad**, la cual fue **actualizada** de la siguiente manera: Se configuro la versión activa de la política la **versión 2**, que tiene como proposito permitir todas las acciones (`iot:*`) sobre cualquier recurso (`*`).

![alt text](image-13.png)

**El mismo procesamiento fue realizado para el dispositivo **A01-IOT-B**.**

---

## **5) Desarrollar, en la instancia A, la solución de un “CONTROL REMOTO” para gestionar la iluminación de un ambiente: ´botón “ENCENDIDO/ON”, botón “APAGADO/OFF”, informe de estado de la luminaria y funcionalidad “TIMER de 5s” para que activada dicha funcionalidad, al encender la luminaria se apague a los 5 segundos.**

Dentro de la **Instancia A**, se pueden encontrar los botones **ON**, **OFF** y el **Timer ON/OFF** con distintas funciones que manejan la lógica del encendido, apagado y el temporizador de 5 segundos.
Cuando el temporizador está activo, la lámpara se apaga automáticamente después de esos 5 segundos de apretado el boton **ON**.
Todas las acciones se envían por **MQTT** al canal configurado en **AWS IoT**, que luego es recibido por la **Instancia B**, encargada de mostrar el estado de la luminaria.

![alt text](image-45.png)

Si nos fijamos en **panel de control hecho con Node-RED Dashboard**, podemos ver los tres elemento: los botones **ON** y **OFF** y un switch **Timer ON/OFF**.
Desde acá se puede encender y apagar la led o activar el temporizador de la luminaria, que la apaga automáticamente después de 5 segundos de apretado el boton **ON**.

![alt text](image-25.png)

### NODOS A DETALLAR:

* **Function 2** se encarga de **manejar el estado del temporizador** usando una variable global llamada **`TIMER_ON`**, cambiando cada vez que se ejecuta el estado de la variable: Si **`TIMER_ON` está en 1**, la función la cambia a **0** y si está en **0**, la cambia a **1**. De esta forma, el sistema alterna entre los dos modos (automático y manual) y mantiene sincronizado el estado del temporizador con el interruptor del panel.

* **Function 1** se encarga de manejar el apagado de la luz teniendo en cuenta si el temporizador está activo: Esto lo hace revisando el valor de la variable global **`TIMER_ON`**, que guarda el estado del temporizador.
Si el temporizador **está activado**, la función envía un mensaje al **delay** para que luego de 5 segundos se los transmita al la **Function 3**.
En cambio, si el temporizador **no está activo**, no se envía nada, y el delay no se activa.

* A su vez, si **delay** se activa, **Function 3** simplemente cambia el valor del payload a 0 (lo que representa el estado de apagado) y lo envía al mismo canal MQTT que controla la luz. De esta manera, cuando el temporizador está activo, el flujo primero enciende la luz con `payload = 1` y, tras los 5 segundos, esta función la apaga enviando `payload = 0`.
Así logramos un sistema automático que prende y apaga sin intervención manual.


---

## **6) Desarrollar, en la instancia B, la solución para controlar la “ILUMINACIÓN” de un ambiente simulando el “ENCENDIDO/APAGADO” de la luminaria, informando el estado de la “LUMINARIA” y el estado del “TIMER”.**

Dentro de la **Instancia B** se estableció la recepción de las señales recibidas por los canales **A01 - CANAL 1**, **A01 - CANAL 2**, que envian, respectivamente, sus valores hacia un gauge y a una celda de texto que indica el estado del timer. 

![alt text](image-46.png)

Los valores recibidos se muestran en tiempo real dentro del dashboard. 

### TODO: Que muestre el dashboard -> ![alt text](image-XXXXXX.png) 


---

## **7) Las instancias A y B deben comunicarse por medio de MQTT utilizando el bróker de AWS IoT.**

En la intancia 1, en la **configuración del nodo MQTT** dentro de Node-RED, se incorporon los **certificados de seguridad proporcionados por AWS** para establecer una conexión segura con el bróker MQTT.
Se cargon: El **certificado del dispositivo (`A01-IOT-A.cert.pem`)**, la **clave privada (`A01-IOT-A.private.key`)** y el **certificado raíz de Amazon (`AmazonRootCA1.pem`)**, asegurando la autenticación y el cifrado de las comunicaciones.

![alt text](image-14.png)

El nodo está asociado al servidor **A01-ND**, que contiene los certificados de autenticación configurados previamente, y se define el **tópico “A0-CANALLL”**, que representa el canal de comunicación por el cual se enviarán los mensajes MQTT. Ademas, se le configuro el QoS para que tenga **tipo 0**.

![alt text](image-20.png)

Por ultimo, el nodo ademas tiene la siguiente configuracion: Se habilita la opción **“Use TLS”**, asociando el conjunto de certificados **A01-CERTIFICADOS** previamente cargado, garantizando así una conexión segura y cifrada.
Además, se utiliza el protocolo **MQTT versión 3.1.1**, con conexión automática y sesión limpia, lo que asegura una comunicación estable y autenticada con el servidor IoT.

![alt text](image-18.png)


### TODO: El nodo in 2:
![alt text](image-37.png)

---

### TODO: Similarmente, se hicieron las configuraciones necesarias para la instancia B

![alt text](image-19.png)


# Imagenes finales que muestran el funcionamiento

## **Ejemplo** que muestra el funcionamiento esperado

![alt text](image.png)

![alt text](image-1.png)

![alt text](image-2.png)

![alt text](image-3.png)

---

## Resolucion

![alt text](image-43.png)

![alt text](image-44.png)


---

# JSON de instancias

### TODO: Intancia 1


### TODO: Instancia 2
