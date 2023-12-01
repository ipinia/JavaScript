const personas = [
  new Persona('Juan', 'Perez', 46),
  new Persona('Laura', 'Quintero', 36),
  new Persona('Carlos', 'Lara', 25),
];

function mostrarPersonas(){
  console.log('Mostrando personas...');
  let texto = '';
  for(let persona of personas){
    texto += `<li>${persona.nombre} ${persona.apellido} (${persona.edad})</li>`;
  }
  document.getElementById('personas').innerHTML = texto;
}