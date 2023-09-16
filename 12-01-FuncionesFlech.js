let miFuncion = function(){
  console.log('Saludos desde mi funcion');
}

let miFuncionFlecha = () => console.log('Saludos desde mi funcion Flecha')

miFuncion();
miFuncionFlecha();

const hola = function saludar(){
  console.log ('Saludar desde funcion clasica')
}

const holaFlecha = () => 'Saludar desde flecha'


//Funciones callback


let imp = function(mensaje){
    console.log(mensaje);
};

function sumar (op1, op2, funcionCallBack){
  let res = op1 + op2 ;
    funcionCallBack(`Resultado: ${res}`)
}

sumar(3,4, imp)