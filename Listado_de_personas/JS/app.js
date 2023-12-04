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
function agregarPersona(){
  const forma = document.forms['forma'];
  const nombre = forma['nombre'];
  const apellido = forma['apellido'];
  const edad = forma['edad'];
  if(nombre.value == '' || apellido.value == '' || edad.value == ''){
  const persona = new Persona(nombre.value, apellido.value, edad.value);

  console.log(persona);
  personas.push(persona);
  mostrarPersonas();
  }else{
    alert('Todos los campos son obligatorios');
  }

}