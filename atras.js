const pagos = [];
const personas = [];
const listado = document.getElementById("lista");
const cuadroResultado = document.getElementById("total");
const usuario = document.getElementById("nombre");
const pago = document.getElementById("pago");

function agregar() {
  agregarGastosAListas();
  ultimoAPantalla();
  mostrarPagoIndvidualEnHTML();
}

function agregarGastosAListas() {
  personas.push(usuario.value);
  pagos.push(parseInt(pago.value));
}

function ultimoAPantalla() {
  const li = document.createElement("li");
  const text = document.createTextNode(
    `${usuario.value} pagó: ${pago.value} pesos.`
  );
  li.classList.add("list-group-item");
  li.appendChild(text);
  listado.appendChild(li);
}

function totalDinero(pagos) {
  let suma = 0;
  for (let pago of pagos) {
    suma += pago;
  }
  return suma;
}

function mostrarPagoIndvidualEnHTML() {
  const Total = totalDinero(pagos);
  let CadaUno = Total / personas.length;
  /*const parrafo = document.createElement("p");
  const leyenda = document.createTextNode(
    `Total : ${Total} A cada uno le toca pagar ${CadaUno}`
  );
  parrafo.appendChild(leyenda);
  cuadroResultado.appendChild(parrafo);*/
  cuadroResultado.innerText = `Total : ${Total} A cada uno le toca pagar ${CadaUno}`;
}
