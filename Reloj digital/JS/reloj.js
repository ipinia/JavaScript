const mostrarReloj = () => {
  let fecha = new Date();
  let hr = formatoHora(fecha.getHours());
  let min = formatoHora(fecha.getMinutes());
  let seg = formatoHora(fecha.getSeconds());
  document.getElementById("hora").innerHTML = `${hr}:${min}:${seg}`;

  const meses = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'nov','oct', 'dic'];
  const dias = ['dom', 'lun', 'mar', 'mie', 'jue', 'vie', 'sab'];
  let diaSemana = dias[fecha.getDay()];
  let dia = fecha.getDate();
  let mes = meses[fecha.getMonth()];
  let anio = fecha.getFullYear();
  let fechaTexto = `${diaSemana}, ${dia} ${mes} ${anio}`;
  document.getElementById("fecha").innerHTML = fechaTexto;
  
  document.getElementById('contenedor').classList.toggle('animar');/*toggle: si tiene la clase la quita y si no la tiene la pone*/

};


const formatoHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};



setInterval(mostrarReloj, 1000);
