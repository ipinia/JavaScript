class Empleado extends Persona{
  static contadorEmpleado = 0;
  
    constructor(nombre, apellido, edad, sueldo) {
      super (nombre, apellido, edad)
      this._sueldo = sueldo;
      this.idEmpleado = ++Empleado.contadorEmpleado;
    }
  
    get idEmpleado (){
      return this.idEmpleado
    }
  
    get sueldo(){
      return this._sueldo;
    }
  
    set sueldo (sueldo){
      this._sueldo = sueldo;
    }
  
    toString(){
    return `${super.toString() + this.idEmpleado} ${this.sueldo}`;
  }
  }