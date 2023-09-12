var nombre = 'José';
console.log(nombre); //tipo de sto String
nombre = 45;
console.log(nombre);  
console.log(typeof nombre)

var edad = 28;
console.log(edad); //tipo de dato number

var objeto ={
  nombre: 'José',
  edad: 28,
  ocupacion: 'Desarrollador'
}
console.log(objeto)
console.log( typeof objeto);

var bandera = true;
console.log(typeof bandera);

function miFuncion (){}
console.log( miFuncion);

var simbolo = Symbol('Un símbolo nuevo');
console.log(typeof simbolo)

class Persona{
  constructor(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
  }
}
console.log( typeof Persona)

//tipo undefined
var x;
console.log(x)

// null ausencia de valor
y = null;
console.log(typeof y)

var autos = ['BMW' , 'AUDI' ,  'LOGOS']
console.log(typeof autos)

//cadenas vacías
var z = '';
console.log(z)
console.log( typeof z)

var nombre= 'José';
var apellido = 'Ipiña';

//var nombreCompleto = nombre + ' ' + apellido;
//console.log(nombreCompleto)


//las expresiones se leen de izquierda a derecha por lo que se toma el typo de la primer variable

var x = nombre + 2 + 4;
console.log(x)

var x = 2+4 + nombre;
console.log(x)

// se recomienda usar let y const

//let se usa para una variable que puede cambiar su valor

// const es para variables que no queremos que cambie su valor

//BUENAS PRACTICAS
//para nombrar una variable es recomendable usar altas y bajas
let nombreCompleto = 'José Ipiña';
console.log(nombreCompleto);

let a, b;
a = 34, b = 54;
let c = a+b;
console.log (c)
//**JavaScrip es sensible a maypuscula y minúsculas **
//no se puede iniciar una variable con número, ni caractéres especiales solo "$" y "_"

//pre-incremento
let d = ++a;
console.log(a)
console.log(d)

//post-incremento
d= b++;
console.log(b);
console.log(d);

//OPERADORES DE ASIGNACION

let e = 1

// asignación compuesto 
e += 3 // e = e + 3
console.log(e);

e -= 2
console.log(e)

e *= 4
console.log(e)

e **= 2
console.log(e)

e /= 8
console.log(e);

e %= 2
console.log(e)


//
