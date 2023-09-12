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
    return `${super.toString()} ${this.idCliente} ${this.fechaRegistro}` ;
  }
}