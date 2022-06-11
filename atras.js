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
  const texto = document.createTextNode(`${usuario.value} pagó: ${pago.value}`);
  li.classList.add("list-group-item");
  li.appendChild(texto);
  listado.appendChild(li);
}

function mostrarPagoIndvidualEnHTML() {}
