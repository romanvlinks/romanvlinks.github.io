let bonfire = document.getElementById("bonfire");
let agregarContainer = document.getElementById("agregarcontainer");
let btnAdd = document.getElementById("btnagregar");
let btnCancelar = document.getElementById("btnCancelar");
let btnConfirmar = document.getElementById("btnConfirmar");
let color = document.querySelector('input[name="colorsito"]:checked');
let tareas = document.getElementById("tareas");

//Inputs
let tareaInput = document.getElementById("tareaInput");
let select = document.getElementById("select");
let descripcionTxt = document.getElementById("descripcionTxt");

btnAdd.addEventListener("click", () => {
  bonfire.classList.toggle("hidden");
  agregarContainer.classList.toggle("active");
  btnAdd.classList.toggle("hidden");
});

btnCancelar.addEventListener("click", () => {
  btnAdd.classList.toggle("active");
  agregarContainer.classList.remove("active");
  agregarContainer.classList.toggle("hidden");
  if (agregarContainer.classList.contains("active")) {
    agregarContainer.classList.remove("active");
  }
});

const enviarDatos = () => {
  let nombreTarea = tareaInput.value;
  let descripcion = descripcionTxt.value;
  let tipoDeTarea = select.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
    .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);
};

btnConfirmar.addEventListener("click", () => {
  enviarDatos();
  crearNuevaTarea();
});

let nuevaTarea = {
  titulo: tareaInput.value,
  descripcion: descripcionTxt.value,
  tipo: select.value,
  color: color,
};

console.log(nuevaTarea);

const crearNuevaTarea = () => {};
