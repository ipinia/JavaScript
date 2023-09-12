class Persona {
  static contadorPersona = 0;

  constructor(nombre, apellido, edad, ){
    this._nombre = nombre;
    this._apellidos = apellido;
    this._edad = edad;
    this._idPersona = ++Persona.contadorPersona;
  }

  get idPersona(){
    return this._idPersona;
  }

  get nombre(){
    return this._nombre
  }

  get apellido(){
    return this._apellidos
  }

  get edad(){
    return this._edad;
  }

  set nombre(nombre){
    this._nombre = nombre;
  }

  set apellido(apellido){
    this._apellidos = apellido;
  }

  set edad( edad ){
    this._edad = edad;
  }

  toString(){
    return `${this.idPersona}: 
    ${this.nombre}
    ${this._apellidos},
    ${this.edad}`;
  }
}







class Empleado extends Persona{
  static contadorEmpleado = 0;
  
    constructor(nombre, apellido, edad, departamento, sueldo) {
      super (nombre, apellido, edad)
      this._sueldo = sueldo;
      this._departamento = departamento;
      this._idEmpleado = ++Empleado.contadorEmpleado;
    }
  
    get idEmpleado (){
      return this.idEmpleado
    }

    get departamento (){
      return this._departamento;
    }
  
    set departamento(departamento){
      this._departamento = departamento;
    }

    get sueldo(){
      return this._sueldo;
    }
  
    set sueldo (sueldo){
      this._sueldo = sueldo;
    }
  
    toString(){
    return `${super.toString() + ' ' +this._idEmpleado + ' ' +this._departamento + ' ' + this._sueldo}  `;
  }
  }

  class Cliente extends Persona{

    static contadorEmpleado = 0;
  
    constructor(nombre, apellido, edad, fechaRegistro){
      super(nombre, apellido, edad);
      this._idCliente = ++Cliente.contadorEmpleado
      this._fechaRegistro = fechaRegistro;
    }
  
    get idCliente(){
      return this._idCliente;
    }
  
    get fechaRegistro (){
      return this._fechaRegistro  ;
    }
  
    set fechaRegistro(fechaRegistro){
      this._fechaRegistro = fechaRegistro;
    }
  
    toString(){
      return `${super.toString()} ${this._idCliente} ${this.fechaRegistro}` ;
    }
  }

  let persona1 = new Persona ('Carla','Juárez', 34);
  console.log(persona1.toString())

  let persona2 = new Persona('Alejandro', 'Saldivar', 23)
  console.log(persona2.toString());

  let empleado1 = new Empleado ('Leticia', 'Hdz',27,'Managment', 3000)
  console.log(empleado1.toString());
  let empleado2 = new Empleado ('Mine', 'Lopez',45,'RX', 20000)
  console.log(empleado2.toString());
  

  let cliente1 = new Cliente ('Juan', 'Mtz',34, new Date())
  console.log(cliente1.toString());
