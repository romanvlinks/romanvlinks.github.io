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
