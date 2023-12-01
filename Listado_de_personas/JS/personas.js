class Persona{
  constructor(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  get nombre(){return this._nombre;}
  set nombre(nombre){this._nombre = nombre;}

  get apellido(){return this._apellido;}
  set apellido(apellido){this._apellido = apellido;}

  get edad(){return this._edad;}
  set edad(edad){this._edad = edad;}
}