---
title: Parciales Objetos 1
description: "Material con parciales para la materias Orientación a Objetos 1"
heroImage: { src: './thumbnail.jpg', color: '#9AD1EC' }
publishDate: 2023-06-11
tags: 
 - Facultad
 - Finales
language: 'Spanish'
---

Bueno, como primer paso, identificamos todos los objetos, sin los metodos. No hace falta crear el objeto sistema. Con sistema se refiere al conjunto completo de objetos. Una forma de darnos cuenta de que hicimos una buena distribución es que podamos ejecutar todos los metodos desde los test.

## Primer Parcial

![Primer Parcial](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/fbf0355e-d595-4051-aa45-2c4873033002)

#### Uml

![UmpPrimerParcial](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/0c17d973-c87d-444e-8fe9-3e31528288bc)

#### Sistema

```java
import java.util.*;
import java.util.stream.Collectors;

public class Sistema {
  private List<Contribuyente> contribuyentes = new ArrayList<>();

  public void altaContribuyente(Contribuyente c) {
    this.contribuyentes.add(c);
  }

  public List<Contribuyente> masPagan(Integer n){
    return this.contribuyentes.stream().limit(n)
      .sorted((ex1, ex2) -> Double.compare (
      ex1.impuestosAPagar(),ex2.impuestosAPagar()
      ))
      .collect(Collectors.toList());
  }
}
```

#### Contribuyente

```java
import java.util.*;

public class Contribuyente {
  private String nombre;
  private String apellido;
  private String email;
  private String localidad;
  private List<Bien> bienes = new ArrayList<>();

  public Contribuyente(String nombre, String apellido, String email, String localidad) {
    this.nombre=nombre;
    this.apellido=apellido;
    this.email=email;
    this.localidad=localidad;
  }

  public void altaBien(Bien b){
    this.bienes.add(b);
  }
  public double impuestosAPagar() {
    return this.bienes.stream()
      .mapToDouble(bien -> bien.calcularImpuesto())
      .sum();
  }
  }
```

#### Bien

```java
public interface Bien {
  public double calcularImpuesto();
}
```

#### Inmueble

```java
public class Inmueble implements Bien{
  private Integer nroPartida;
  private double valorLote;
  private double valorEdificacion;

  public Inmueble(Integer nroPartida, double valorLote, double valorEdificacion) {
    this.nroPartida=nroPartida;
    this.valorLote=valorLote;
    this.valorEdificacion=valorEdificacion;
  }
  @Override
  public double calcularImpuesto() {
    return (this.valorEdificacion + this.valorEdificacion)/100;
  }
}
```

#### Vehiculo

```java
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

  public abstract class Vehiculo implements Bien{
  private String patente;
  private LocalDate fechaFabricacion;
  private double valor;
  private Contribuyente contribuyente;

  public Vehiculo(String patente, LocalDate fechaFabricacion, double valor, Contribuyente c) {
    this.patente=patente;
    this.fechaFabricacion=fechaFabricacion;
    this.valor=valor;
    this.contribuyente=c;
  }
  public int antiguedad() {
    return (int) ChronoUnit.YEARS.between(this.fechaFabricacion, LocalDate.now());
  }

  @Override
  public double calcularImpuesto() {
    if (this.antiguedad() > 10) {
      return this.valor;
    }
    return this.valor + ((this.valor/100)*porcentaje());
  }

  public double getValor() {
    return this.valor;
  }

  abstract public int porcentaje();
  }
```

#### Embarcación

```java
import java.time.LocalDate;

  public class Embarcacion extends Vehiculo{
  private String nombre;
  public Embarcacion(String patente, LocalDate fechaFabricacion, double valor, Contribuyente c,String nombre) {
    super(patente, fechaFabricacion, valor, c);
    this.nombre=nombre;
  }
  @Override
  public int porcentaje() {
    if (super.getValor() < 1000000) {
      return 10;
    }
    return 15;
  }
}
```

#### Automotor

```java
import java.time.LocalDate;

public class Automotor extends Vehiculo{
  public Automotor(String patente, LocalDate fechaFabricacion, double valor, Contribuyente c) {
    super(patente, fechaFabricacion, valor, c);
    this.marca=marca;
    this.modelo=modelo;
  }

  private String marca;
  private String modelo;

  @Override
  public int porcentaje() {
    return 15;
  }
  }
```

#### Test

```java
  import static org.junit.jupiter.api.Assertions.assertEquals;

  import java.time.LocalDate;

  import org.junit.jupiter.api.BeforeEach;
  import org.junit.jupiter.api.Test;

  public class VehiculoTest {
  Embarcacion embarcacion;
  Embarcacion embarcacion2;
  Embarcacion embarcacion3;
  Automotor automotor;

  Contribuyente c;
  Sistema sistema;
  LocalDate fecha;
  LocalDate fecha2;

  @BeforeEach
  void setup() throws Exception{
    c = new Contribuyente("Fabian", "777", "fab@gmail.com", "Los Hornos");
    sistema = new Sistema();
    sistema.altaContribuyente(c);
    
    fecha = LocalDate.of(2000, 1, 1);
    fecha2 = LocalDate.of(2022, 1, 1);
  }

  @Test
  public void embarcacionTest() {
    embarcacion = new Embarcacion("1",fecha, 10, c,"Barquito");
    embarcacion2 = new Embarcacion("1",fecha2, 10, c,"Barquito");
    embarcacion3 = new Embarcacion("1",fecha2, 1000000, c,"Barquito");
    
    assertEquals(10, embarcacion.calcularImpuesto());
    assertEquals(11, embarcacion2.calcularImpuesto());
    assertEquals(1150000, embarcacion3.calcularImpuesto()); //El valor mas el 15%
  }
  }
```

---

## Primer Recuperatorio

![Primer Recuperatorio](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/10f819b7-d94a-4a01-9e91-3e5ec9312f64)

![umlSegundo](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/53707e77-8c0a-48c6-9ff1-2b0ae6cf0c6a)

#### Sistema

```java
import java.util.*;

public class Sistema {
private List<Empleado> empleados = new ArrayList<>();

public void altaEmpleado(Empleado e) {
  this.empleados.add(e);
}

public Boolean aplicarDescuento(Orden orden) {
  return empleados.stream()
    .anyMatch(empleado -> empleado.tieneOrden12Meses(orden));
}
}

```

#### Empleado

```java
import java.util.*;
import java.util.stream.Collectors;

  public class Empleado {
  private String nombre;
  private double valorHora;
  private List<Orden> ordenes = new ArrayList<>();

  public Empleado(String nombre, double valorHora) {
    this.nombre=nombre;
    this.valorHora=valorHora;
  }

  public void registrarOrden(Orden o) {
    this.ordenes.add(o);
  }

  public double getValorHora() {
    return this.valorHora;
  }

  public List<Factura> facturarOrdenes(List<Orden> ordenes ){
    return ordenes.stream()
      .map(orden -> orden.generarFactura())
      .collect(Collectors.toList());
  }

  public Boolean tieneOrden12Meses(Orden o) {
    return this.ordenes.stream()
      .allMatch(orden -> (
        orden.equals(o) && orden.antiguedad() == 1
        ));
  }
}
```

#### Orden

```java
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.temporal.ChronoUnit;
import java.util.List;

public abstract class Orden {
  private String patente;
  private LocalDateTime fecha = LocalDateTime.now();
  protected List<Repuesto> repuestos;

  public Orden(String patente) {
    this.patente=patente;
  }
  public Factura generarFactura() {
    return new Factura(LocalDate.now(),this.patente, this.costoOrden(),getDescuento());
  }

  public double totalRepuesto() {
    return this.repuestos.stream()
    .mapToDouble(repuesto -> repuesto.getCosto())
    .sum();
  }

  public int getDescuento() {
    return 0;
  }

  public int antiguedad() {
    return (int) ChronoUnit.YEARS.between(this.fecha, LocalDateTime.now());
  }
  abstract public double costoOrden();
}
```

#### Reparación

```java
import java.time.LocalTime;
import java.util.*;

public class reparacion extends Orden{
  private String descripcion;
  private List<Empleado> empleados = new ArrayList<>();
  private Integer horasNecesarias;
  private LocalTime hora;

  public reparacion(String patente, String descripcion, List<Empleado> empleados, Integer horasNecesarias) {
    super(patente);
    this.descripcion=descripcion;
    this.empleados=empleados;
    this.horasNecesarias=horasNecesarias;
    this.hora=LocalTime.now();
  }

  public double totalEmpleados() {
    return this.empleados.stream()
        .mapToDouble(empleado -> empleado.getValorHora())
        .sum() * this.horasNecesarias;
  }

  @Override
  public double costoOrden() {
    return (super.totalRepuesto() + this.totalEmpleados()) * 1.1;
  }
}
```

#### Compra De Repuesto

```java
public class CompraDeRepuesto extends Orden {

  public CompraDeRepuesto(String patente) {
    super(patente);
    // TODO Auto-generated constructor stub
  }

  public Boolean aplicarDescuento() {
    return super.repuestos.stream()
        .anyMatch(repuesto -> repuesto.antiguedad()>5);
  }

  public double incremento() {
    if (this.aplicarDescuento()) {
      return 1.08;
    }
    return 1.15;
  }

  @Override
  public double costoOrden() {
    return super.totalRepuesto()*this.incremento();
  }
}
```

#### Factura

```java
import java.time.LocalDate;

public class Factura {
  private LocalDate fecha;
  private String patente;
  private double montoTotal;
  private int descuento;

  public Factura(LocalDate fecha, String patente, double montoTotal, int descuento) {
    this.fecha=fecha;
    this.patente=patente;
    this.montoTotal=montoTotal;
    this.descuento=descuento;
  }
}
```

#### Repuesto

```java
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

public class Repuesto {
  private String nombre;
  private LocalDate fechaFabricacion;
  public double costo;

  public Repuesto(String nombre, LocalDate fechaFabricacion, double costo) {
    this.nombre=nombre;
    this.fechaFabricacion=fechaFabricacion;
    this.costo=costo;
  }

  public double getCosto() {
    return this.costo;
  }

  public int antiguedad() {
    return (int) ChronoUnit.YEARS.between(this.fechaFabricacion, LocalDate.now());
  }
}
```

---

## Segundo Recuperatorio

![Segundo Recuperatorio](https://github.com/Fabian-Martinez-Rincon/Fabian-Martinez-Rincon/assets/55964635/c2207c29-e8c7-483e-9852-7f0eec6479ad)