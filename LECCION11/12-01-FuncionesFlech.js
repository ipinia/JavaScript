let reloj = ()=>{
  let fecha = new Date();
  console.log(`${fecha.getHours()}: ${fecha.getMinutes()}: ${fecha.getSeconds()}`);
}

//setInterval(reloj, 1000 );

// let miPromesa = new Promise((resolved, rejected) => {
//   let estado = false

//   if (estado){
//     console.log('Prosesa resuelta')
//   }else{
//     console.log('Promesa rechazada')
//   }
// });

//miPromesa.then(valor= ()=>console.log(valor), error = () =>console.log(error));

// let promesa = new Promise((resolved)=>{
//   console.log('Inicio promesa')
//   setTimeout(()=>resolved ('Saludos desde promesa con timeout'),3000)
//   console.log('Fin promesa')

// });

// promesa.then(valor => console.log(valor));

// async function miPromesa(){
//   return'Funcion async';
// }

// miPromesa().then(valor => console.log(valor));

async function promesaConAsyncAwait(){
  let miPromesa = new Promise( (resolve)=>{
    resolve('Promesa con Await')
  })
  console.log(await(miPromesa))
}

// promesaConAsyncAwait();

async function promesaAwiatAsyncTimeout(){
  console.log('Inicio de la funcion')
  let promesa = new Promise(resolced =>{
    setTimeout(()=> resolced('Promesa con timeout'),3000);
  });

  console.log(await promesa);
  console.log('Fin de la funcion')

}

promesaAwiatAsyncTimeout();