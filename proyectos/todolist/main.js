let bonfire = document.getElementById("bonfire");
let agregarContainer = document.getElementById("agregarcontainer");
let btnAdd = document.getElementById("btnagregar");
let btnCancelar = document.getElementById("btnCancelar");
let btnConfirmar = document.getElementById("btnConfirmar");
let color = document.querySelector('input[name="colorsito"]:checked');
let tareas = document.getElementById("tareas");
let tareasPendientes = document.getElementById("tareasPendientes");
let btnBorrar = document.getElementById("btnBorrar");
let darkmodebtn = document.getElementById("darkmodebtn");

//Darkmode
let section = document.getElementById("section");
let imgBtnAdd = document.getElementById("imgBtnAdd");
let titleBonfire = document.getElementById("titleBonfire");

darkmodebtn.addEventListener("click", () => {
  section.classList.toggle("darkBack");
  imgBtnAdd.classList.toggle("darkBtn1");
  tareas.classList.toggle("darkBack");
  titleBonfire.classList.toggle("darkTxt");
});

//Inputs
let tareaInput = document.getElementById("tareaInput");
let select = document.getElementById("select");
let descripcionTxt = document.getElementById("descripcionTxt");
let cantidadDeTareas = 0;

btnAdd.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    bonfire.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.toggle("hidden");
  }

  if (cantidadDeTareas >= 1) {
    bonfire.classList.add("hidden");
    agregarContainer.classList.toggle("active");
    tareas.style.display = "none";
    btnAdd.classList.toggle("hidden");
  }
});

btnCancelar.addEventListener("click", () => {
  if (cantidadDeTareas <= 0) {
    bonfire.classList.toggle("hidden");
    agregarContainer.classList.toggle("active");
    btnAdd.classList.remove("hidden");
  }
  if (cantidadDeTareas >= 1) {
    agregarContainer.classList.add("hidden");
    agregarContainer.classList.remove("active");
    tareas.style.display = "flex";
    btnAdd.classList.toggle("hidden");
  }
});

btnConfirmar.addEventListener("click", () => {
  let nombreTarea = tareaInput.value;
  let descripcion = descripcionTxt.value;
  let tipoDeTarea = select.value;
  let color = document.querySelector('input[name="colorsito"]:checked')
    .classList[1];
  console.log(nombreTarea, tipoDeTarea, descripcion, color);

  switch (tipoDeTarea) {
    case "trabajo":
      imgTipo = "./images/tipo/trabajo.svg";
      break;
    case "personal":
      imgTipo = "./images/tipo/personal.svg";
      break;
    case "domestica":
      imgTipo = "./images/tipo/casa.svg";
      break;
    case "Entretenimiento":
      imgTipo = "./images/tipo/gaming.svg";
  }

  switch (color) {
    case "purpura":
      colorFondo = "purpura";
      break;
    case "rojo":
      colorFondo = "rojo";
      break;
    case "verde":
      colorFondo = "verde";
      break;
    case "amarillo":
      colorFondo = "amarillo";
  }

  cantidadDeTareas++;
  agregarContainer.classList.add("hidden");
  agregarContainer.classList.remove("active");
  tareas.style.display = "flex";
  btnAdd.classList.toggle("hidden");

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
      <img class="remover" src="./images/borrar.svg" alt="" />
    </button>
  </div>
</div>`;
  tareas.innerHTML += tareaPendiente;

  tareaInput.value = "";
  descripcionTxt.value = "";
  select.value = "";
});

document.addEventListener("click", (e) => {
  if (e.target.classList == "remover") {
    e.target.parentNode.parentNode.parentNode.remove();
  }
});

//let cantidadDeTareas = 0;
