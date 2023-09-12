class DispositivoEntrada {
  constructor(tipoEntrada, marca) {
    this._tipoEntrada = tipoEntrada;
    this._marca = marca;
  }

  get tipoEntrada() {
    return this._tipoEntrada;
  }

  set tipoEntrada(tipoEntrada) {
    this._tipoEntrada = tipoEntrada;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  toString() {
    return `Marca: ${this._marca}, \n Tipo entrada: ${this._tipoEntrada}`;
  }
}

class Raton extends DispositivoEntrada {
  static contadorRatones = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idRaton = ++Raton.contadorRatones;
  }

  get idRaton() {
    this._idRaton = this.idRaton;
  }

  toString() {
    return `Id Ratón: ${this._idRaton}, \n ${super.toString()}`;
  }
}



class Teclado extends DispositivoEntrada {
  static contadorTeclado = 0;

  constructor(tipoEntrada, marca) {
    super(tipoEntrada, marca);
    this._idTeclado = ++Teclado.contadorTeclado;
  }

  get idTeclado() {
    this._idTeclado = this.idTeclado;
  }

  toString() {
    return `Id Teclado: ${this._idTeclado}, \n ${super.toString()}`;
  }
}

class Monitor {
  static contadorMonitores = 0;

  constructor(marca, tamaño) {
    this._marca = marca;
    this._tamaño = tamaño;
    this._idMonitor = ++Monitor.contadorMonitores;
  }

  get marca() {
    return this._marca;
  }

  set marca(marca) {
    this._marca = marca;
  }

  get tamaño() {
    return this._tamaño;
  }

  set tamaño(tamaño) {
    this._tamaño = tamaño;
  }

  toString(){
    return `Id Monitor: ${this._idMonitor}, \n Marca: ${this._marca}, \n Tamaño: ${this._tamaño}`
  }

}

class Computadora{

  static contadorComputadoras = 0;
 
  constructor(nombre, monitor, teclado, raton) { 
    this._nombre = nombre;
    this._monitor = monitor;
    this._teclado = teclado;
    this._raton = raton;
    this._idComputadora = ++Computadora.contadorComputadoras;
    
  }

  static get idComputadora (){
    return this._idComputadora;
  }
  
  get nombre(){
    return this._nombre
  }

  set nombre (nombre){
    this._nombre = nombre;
  }

  get monitor(){
    return this._monitor;
  }
get teclado(){
  return this._teclado
}
 

  toString(){
    return `\nMarca:  ${this._nombre}, \n Id Computadora: ${this._idComputadora}, \n ${this.monitor}\n ${this.teclado} \n ${this._raton}`
  }
}


class Orden {

  static contadorOrdenes = 0;

  constructor() {
    this._idOrden = ++Orden.contadorOrdenes;
    this._computadoras = [];

  }

  static get idOrden (){
    return this._idOrden
  }

agregarComputdoras(computadora){
  this._computadoras.push(computadora);
}

mostrarOrden(){
  let computadorasOrden = ' ';
  for (let computadoras of this._computadoras){
    computadorasOrden += computadoras.toString() + '' ;
  }

  console.log(`Id Orden: ${this._idOrden} \n ${computadorasOrden}`)
}

}

let teclado1 = new Teclado ('USB', 'Kyocera')
let teclado2 = new Teclado ('BT','Yetty')

console.log(teclado1.toString());

let raton1 = new Raton ('USB','Samsumg');
let raton2 = new Raton('BT','Medoly')
console.log(raton1.toString())

let monitor1 = new Monitor('Samsumg','32');
let monitor2 = new Monitor('LG','50');
console.log(monitor1.toString())

let computadora1 = new Computadora ('HP',monitor1, teclado1,raton1 )
let computadora2 = new Computadora ('Armada',monitor2, teclado2,raton2 )
console.log(computadora1.toString())

let orden1 = new Orden ();
orden1.agregarComputdoras(computadora1);
orden1.agregarComputdoras(computadora2);
orden1.mostrarOrden();