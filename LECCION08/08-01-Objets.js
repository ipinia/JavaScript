class Persona{
  static contadorPersona = 0;

  static get MAXOBJ(){
    return 5
  }
  
  constructor(nombre, apellido,){
    this._nombre = nombre;
    this._apellido = apellido;
    if (Persona.contadorPersona <= Persona.MAXOBJ){
     this.idPersona = ++Persona.contadorPersona;
    }
  }

  get nombre(){
    return this._nombre
  }
  get apellido(){
    return this._apellido;
  }

  set nombre(nombre){
    this._nombre = nombre;
  }
  set apellido(apellido){
    this._apellido = apellido;
  }

  nombreCompleto(){
    return this._nombre + ' ' + this._apellido;
  }
  toString (){
    return this. idPersona + ' ' + this.nombreCompleto();
  }

  static saludar(){
    console.log('Saludar desde static')
  }

  static saludar2(Persona){
    return Persona.nombre + ' '+ Persona.apellido;
    
  }
}



class Empleado extends Persona{
  constructor(nommbre, apellido, departamento) {
    super(nommbre, apellido)
    this._departamento = departamento;
  }
  get departamento(){
    return this._departamento
  }
  
  set departamento(departamento){
    this._departamento = departamento
  }

  nombreCompleto(){
    return super.nombreCompleto() +', '+ this._departamento
  }
}


let persona1 = new Persona('Juan','Lopez')
console.log(persona1.toString())

let empleado1 = new Empleado('Carlos', 'Perez', 'Contador')
console.log(empleado1.toString())

