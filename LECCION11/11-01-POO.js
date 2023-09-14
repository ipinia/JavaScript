class Empleado{
  constructor(nombre, sueldo) {
    this._nombre = nombre;
    this._sueldo = sueldo;
  }

 obtenerDetalles(){
  return `Nombre: ${this._nombre}, \nSueldo: ${this._sueldo}`;
 }
}


class Gerente extends Empleado{
constructor(nombre, sueldo, departamento) {
  super(nombre, sueldo);
  this._departamento = departamento;
}
obtenerDetalles(){
  return `Gerente: ${super.obtenerDetalles()}, Departamento: ${this._departamento}`
  
}
}

function imprimir(tipo){
  console.log(tipo.obtenerDetalles());
  if(tipo instanceof Gerente){
    console.log("Es un objeto tipo Gerente")
  }
  if(tipo instanceof Empleado){
    console.log("Es un objeto tipo empleado")
  }
}

let empleado1 = new Empleado ( 'Carlos', 34000)
let gerente1 = new  Gerente('José', 23999, ' IT');

imprimir(empleado1);
imprimir(gerente1);
