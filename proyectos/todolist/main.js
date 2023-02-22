let bonfire = document.getElementById("bonfire");
let agregarContainer = document.getElementById("agregarcontainer");
let btnAdd = document.getElementById("btnagregar");
let btnCancelar = document.getElementById("btnCancelar");
let btnConfirmar = document.getElementById("btnConfirmar");
let color = document.querySelector('input[name="colorsito"]:checked');
let tareas = document.getElementById("tareas");
let tareasPendientes = document.getElementById("tareasPendientes");

//Inputs
let tareaInput = document.getElementById("tareaInput");
let select = document.getElementById("select");
let descripcionTxt = document.getElementById("descripcionTxt");

btnAdd.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    bonfire.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.toggle("hidden");
  }

  if (cantidadDeTareas >= 1) {
    bonfire.classList.add("hidden");
    agregarContainer.classList.toggle("active");
    tareas.classList.add("hidden");
    tareas.style.display = "none";
    btnAdd.classList.remove("top");
    btnAdd.classList.toggle("hidden");
  }
});

btnCancelar.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    bonfire.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.toggle("hidden");
  }
  if (cantidadDeTareas >= 1) {
    agregarContainer.classList.add("hidden");
    agregarContainer.classList.remove("active");
    tareas.style.display = "flex";
    btnAdd.classList.add("top");
  }
});
let nombreTarea = tareaInput.value;
const enviarDatos = () => {
  let nombreTarea = tareaInput.value;
  let descripcion = descripcionTxt.value;
  let tipoDeTarea = select.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
    .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);
};

btnConfirmar.addEventListener("click", () => {
  let nombreTarea = tareaInput.value;
  let descripcion = descripcionTxt.value;
  let tipoDeTarea = select.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
    .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);

  if (tipoDeTarea == "trabajo") {
    imgTipo = "./images/tipo/trabajo.svg";
  }
  if (tipoDeTarea == "personal") {
    imgTipo = "./images/tipo/personal.svg";
  }
  if (tipoDeTarea == "domestica") {
    imgTipo = "./images/tipo/casa.svg";
  }
  if (tipoDeTarea == "Entretenimiento") {
    imgTipo = "./images/tipo/gaming.svg";
  }

  if (color == "purpura") {
    colorFondo = "purpura";
  }
  if (color == "rojo") {
    colorFondo = "rojo";
  }
  if (color == "verde") {
    colorFondo = "verde";
  }
  if (color == "amarillo") {
    colorFondo = "amarillo";
  }

  cantidadDeTareas++;
  agregarContainer.classList.add("hidden");
  agregarContainer.classList.remove("active");
  tareas.style.display = "flex";
  btnAdd.style.display = "flex";
  btnAdd.style.position = "absolute";
  btnAdd.classList.add("top");

  tareaPendiente = `<div id="tareasPendientes" class="tareaspendientes">
  <div class="colortarea ${colorFondo}">
    <img src="${imgTipo}" alt="" />
  </div>
  <div class="data">
    <p id="nombretarea"><strong>${nombreTarea}</strong></p>
    <p id="descripciontarea">${descripcion}</p>
  </div>
  <div class="botonestarea">
    <input type="checkbox" name="" id="completada" />
    <button id="btnBorrar" class="borrada">
      <img src="./images/borrar.svg" alt="" />
    </button>
  </div>
</div>`;
  tareas.innerHTML += tareaPendiente;
  console.log(color);

  let btnBorrar = document.getElementById("btnBorrar");
  btnBorrar.addEventListener("click", () => {
    alert("Todavia no está programada xD");
  });
});

let cantidadDeTareas = 0;
