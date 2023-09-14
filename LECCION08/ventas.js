class Producto {
  static contadorProductos = 0;

  constructor(nombre, precio) {
    this._idProducto = ++Producto.contadorProductos;
    this._nombre = nombre;
    this._precio = precio;
  }

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nombre) {
    this._nombre = nombre;
  }

  get precio() {
    return this._precio;
  }

  set precio(precio) {
    this._precio = precio;
  }

  toString() {
    return `Id producto: ${this._idProducto}, 
    Nombre: ${this._nombre},
    Precio: $${this._precio}
    `;
  }
}

class Orden {
  static contadorOrden = 0;
  static get MAXPRODUCTOS() {
    return 5;
  }
  constructor(params) {
    this._idOrden = ++Orden.contadorOrden;
    this._productos = [];
    //this._contadorProducto  sAgregados = 0;
  }

  get idOrden() {
    return this._idOrden;
  }

  agregarProducto(producto) {
    if (this._productos.length < Orden.MAXPRODUCTOS) {
      this._productos.push(producto);
    } else {
      console.log("No se pueden agregar más productos");
    }
  }

  calcularTotal(){
    let totalVenta = 0
    for(let producto of this._productos){
      totalVenta += producto.precio;
    }
    return totalVenta;
  }

  mostrarOrden (){
    let productosOrden = '';
    for ( let producto of this._productos){
      productosOrden  += producto.toString() + ' ';
    }
 
  
  }
}
let producto1 = new Producto("Camisa", 300);
let producto2 = new Producto("Pantalón", 430);

let orden1 = new Orden();

orden1.agregarProducto (producto1)
orden1.agregarProducto (producto2)

orden1.mostrarOrden();