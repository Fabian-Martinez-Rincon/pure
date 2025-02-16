---
title: '🔑 Strategy'
publishDate: '2024-04-20'
description: 'Patrón Strategy'
heroImage: { src: './thumbnail.jpg', color: '#CEDECD' }
tags: 
 - Facultad
 - Objetos
language: 'Spanish'
---

## [Video de BettaTech](https://youtu.be/VQ8V0ym2JSo?si=TQ_pmyrfQPNl2bGn)

El patrón de diseño Strategy es un patrón de comportamiento que permite definir una familia de algoritmos, encapsular cada uno de ellos como un objeto, y hacerlos intercambiables. Strategy permite variar los algoritmos utilizados por un objeto de manera dinámica sin alterar el uso de los algoritmos por parte de los clientes.

#### Intención

El propósito del patrón Strategy es:
- Desacoplar un algoritmo de su clase y esconder los detalles de implementación al cliente.
- Permitir el cambio dinámico de comportamiento de un objeto cuando su estado interno cambia.

#### Uso

El patrón Strategy es especialmente útil cuando:
- Varias versiones de un algoritmo existen, y el cliente no debe conocer los detalles de implementación.
- La implementación de un algoritmo puede cambiar independientemente de los clientes que lo utilizan.
- Hay múltiples comportamientos condicionales y quieres evitar múltiples sentencias condicionales.

#### Estructura

El patrón Strategy se compone de tres partes principales:

1. **Contexto (Context):**
   - Mantiene una referencia a una estrategia concreta (ConcreteStrategy) y puede definir una interfaz que permite a la estrategia acceder a sus datos.
   - Delega el trabajo a la estrategia asociada en lugar de ejecutarlo por sí mismo.

2. **Estrategia (Strategy):**
   - Es una interfaz o clase abstracta común a todos los algoritmos concretos que forman parte de esta familia de algoritmos.
   - Declara un método usualmente llamado `execute()` o `perform()` que será implementado por cada algoritmo concreto.

3. **Estrategias Concretas (ConcreteStrategies):**
   - Son implementaciones concretas de la interfaz Strategy que encapsulan cada uno de los algoritmos.
   - Cada uno define su propio método `execute()` o `perform()` con el comportamiento específico.

#### Ventajas

- **Flexibilidad:** Al separar las estrategias y el contexto, puedes cambiar el comportamiento del contexto en tiempo de ejecución cambiando su estrategia.
- **Reutilización:** Las estrategias pueden ser reutilizadas entre diferentes contextos.
- **Principios SOLID:** Strategy favorece la programación orientada a interfaces y soporta el principio de inversión de dependencias, que dice que las clases de alto nivel no deberían depender de las clases de bajo nivel, sino de abstracciones.

#### Desventajas

- **Complejidad Adicional:** Puede sobrecomplicar el código si se utiliza para casos que no requieren una variabilidad de comportamientos significativa.
- **Conocimiento de las Estrategias:** Los clientes deben conocer las diferencias entre las estrategias para poder seleccionar la adecuada.

#### Ejemplo Aplicado

Un ejemplo común es un sistema de pago en línea donde puedes tener diferentes estrategias para procesar un pago (por ejemplo, con tarjeta de crédito, PayPal, criptomoneda). El cliente selecciona la estrategía de pago y el contexto (sistema de pago) utiliza la estrategia para procesar el pago sin conocer los detalles de la implementación.

#### Resumen

En conclusión, el patrón Strategy es fundamental para diseñar sistemas flexibles y fácilmente extensibles, permitiendo el cambio de algoritmos en tiempo de ejecución sin gran impacto en el código cliente. Permite separar la selección de un algoritmo de su ejecución, proporcionando una serie de alternativas para realizar una tarea específica.


### Estructura

![image](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/315e3d36-107c-4e53-89eb-795f69baffd2)

Este diagrama UML ilustra el patrón de diseño Strategy. Cada parte del diagrama se explica a continuación:

1. **Contexto (Context):**
   - La clase `Context` es la clase que utiliza la estrategia y tiene un método que se refiere a la estrategia, a menudo llamado algo como `ContextInterface()`. En la práctica, este método utilizará un objeto de la estrategia para ejecutar una parte de su algoritmo.
   - Posee una referencia a la interfaz `Strategy` que se muestra con una línea que termina en un rombo blanco, indicando una relación de asociación; la clase `Context` contiene o tiene acceso a un objeto `Strategy`.

2. **Estrategia (Strategy):**
   - La clase `Strategy` es una interfaz o clase abstracta que define una operación común para todas las estrategias concretas, denominada aquí `AlgorithmInterface()`. Esta operación es el método que el `Context` va a ejecutar.

3. **Estrategias Concretas (ConcreteStrategyA, ConcreteStrategyB, ConcreteStrategyC):**
   - Las clases `ConcreteStrategyA`, `ConcreteStrategyB`, y `ConcreteStrategyC` son implementaciones concretas de la interfaz `Strategy`. Cada una de ellas implementará `AlgorithmInterface()` de manera que realice un comportamiento específico del algoritmo.
   - Aunque comparten la misma operación `AlgorithmInterface()`, cada implementación de la operación realizará probablemente acciones muy diferentes; estas diferencias representan las distintas estrategias que el `Context` puede utilizar.

La esencia de este diagrama es que el objeto `Context` puede cambiar su comportamiento en tiempo de ejecución al cambiar el objeto `Strategy` que está utilizando sin cambiar su interfaz. Esto le permite variar su comportamiento dinámicamente al delegar detalles operativos a los objetos de estrategia, en lugar de implementar múltiples comportamientos en sí mismo.