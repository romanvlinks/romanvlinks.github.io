let chocolateref = document.getElementById("chocolateref");
let chocolatebtn = document.getElementById("chocolate-btn");

chocolatebtn.addEventListener("click", () => {
  chocolateref.classList.toggle("action");
});

let historial = document.getElementById("historial");
let search = document.getElementById("search");

search.addEventListener("click", () => {
  historial.classList.toggle("action2");
});

let btnsearchHi = document.getElementById("button-search21");
let entrada = document.getElementById("input");
let ul = document.getElementById("historialul");
let btnsearch = document.getElementById("button-search");

btnsearchHi.addEventListener("click", () => {
  let busqueda = entrada.value;

  let sal = document.createElement("p");

  let txt = document.createTextNode(busqueda);

  sal.appendChild(txt);

  ul.appendChild(sal);

  entrada.value = "";
});

btnsearch.addEventListener("click", () => {
  let busqueda = entrada.value;

  let sal = document.createElement("p");

  let txt = document.createTextNode(busqueda);

  sal.appendChild(txt);

  ul.appendChild(sal);

  entrada.value = "";
});

document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") {
    let busqueda = entrada.value;

    let sal = document.createElement("p");

    let txt = document.createTextNode(busqueda);

    sal.appendChild(txt);

    ul.appendChild(sal);

    entrada.value = "";
  }
});

let borrar = document.getElementById("borrar");

let largo = entrada.value;

console.log(largo);

if (largo.length >= 1) {
  borrar.style.display = "block";
}
