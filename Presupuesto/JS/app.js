const ingresos = [
  new Ingreso("salario", 3100.0),
  new Ingreso("venta coche", 500.0),
];
const egresos = [
  new Egreso("renta departamento", 900.0),
  new Egreso("ropa", 400.0),
];

let cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};
let totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.valor;
  }
  return totalIngreso;
};

let totalEgresos = () => {
  let totalEgresos = 0;
  for (let egreso of egresos) {
    totalEgresos += egreso.valor;
  }
  return totalEgresos;
};
console.log(totalIngresos());
console.log(totalEgresos());

let cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos();
  let porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingreso").innerHTML = formatoMoneda(totalIngresos());
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};
const formatoMoneda = (valor) => {
  return valor.toLocaleString("es-MX", {
    style: "currency",
    currency: "MNX",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
  });
};

const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};
const crearIngresoHTML = (ingreso) => {
  let ingresosHTML = ` <div id="lista-ingresos" class="lista-ingresos">
  <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.descripcion}</div>
    <div class="derecha limpiarEstilos">
      <div class="elemento_valor">${formatoMoneda(ingreso.valor)}</div>
      <div class="elemento_eliminar">
        <button class="elemento_eliminar--btn">
          <ion-icon name="close-circle-outline" onclick = 'eliminarIngreso(${ingreso.id})'></ion-icon>
        </button>
      </div>
    </div>
  </div>
 
</div>`;
  return ingresosHTML;
};
eliminarIngreso= (id)=>{
 let indiceEliminar =  ingresos.findIndex(ingreso => ingreso.id === id);
  ingresos.splice(indiceEliminar,1);
  cargarCabecero();
  cargarIngresos();
}

const cargarEgresos = () => {
  let egresosHTML = "";
  for (let egreso of egresos) {
    egresosHTML += crearEgresoHTML(egreso);
  }
  document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

const crearEgresoHTML = (egreso) => {
let egresosHTML=`<div id="lista-egresos" class="">
<div class="elemento limpiarEstilos">
  <div class="elemento_descripcion">${egreso.descripcion}</div>
  <div class="derecha limpiarEstilos">
    <div class="elemento_valor">-${formatoMoneda(egreso.valor)}</div>
    <div class="elemento_porcentaje">${formatoPorcentaje(egreso.valor / totalIngresos())}</div>
    <div class="elemento_eliminar">
      <button class="elemento_eliminar--btn">
        <ion-icon name="close-circle-outline" onclick = 'eliminarEgreso(${egreso.id})'></ion-icon>
      </button>
    </div>
  </div>
</div>
</div>`;
  return egresosHTML;
};

eliminarEgreso = (id)=>{
  let indiceEliminar =  egresos.findIndex(egreso => egreso.id === id);
  egresos.splice(indiceEliminar,1);
  cargarCabecero();
  cargarEgresos();
}

let agregarDatos = () => {
  let forma = document.forms["forma"];
  let tipo = forma["tipo"];
  let descripcion = forma["descripcion"];
  let valor = forma["valor"];
  if(descripcion.value !== '' && valor.value !== ''){
    if (tipo.value === "ingreso") {
      ingresos.push(new Ingreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarIngresos();
    }else if(tipo.value === "egreso"){
      egresos.push(new Egreso(descripcion.value, +valor.value));
      cargarCabecero();
      cargarEgresos();
    }
  }
}