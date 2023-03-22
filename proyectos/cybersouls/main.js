let section = document.getElementById("section");
let playMain = document.getElementById("playMenu");
let btnPlayMain = document.getElementById("jugar-inicio");
let jugadoresMenu = document.getElementById("jugadoresMenu");
let play = document.getElementById("play");
let loader = document.getElementById("loader");
let cardIngame = document.getElementById("cardIngame");
let prev = document.getElementById("prev");
let next = document.getElementById("next");
let nombreDeJugadoresInCards = document.getElementById(
  "nombreDeJugadoresInCards"
);
let reiniciar = document.getElementById("reiniciar");
let reiniciarModal = document.getElementById("reiniciarModal");
let btnReiniciar = document.getElementById("btn-reiniciar");
let btnRes = document.getElementById("btn-verRes");
let cerrarModalReinciar = document.getElementById("cerrarModalReiniciar");
let btnSalir = document.getElementById("btnSalir");
let resultadosModal = document.getElementById("resultados");
let reiniciarMainModal = document.getElementById("reiniciarMainModal");
let mostrarResultadoMain = document.getElementById("mostrarResultadoMain");
let cerrarVerResultadosModal = document.getElementById(
  "cerrarVerResultadosModal"
);
let verResultadosModal = document.getElementById("verResultadosModal");
//Funcion reset ALL
const reset = () => {
  cartasDeJugadores = [];
  cartasJugador1 = [];
  cartasJugador2 = [];
  numeroDeCarta = 0;
  numeroDeCarta2 = 0;
};

//AVISO//
alert(
  "Holaaa, dejo un pequeño aviso x las dudas jej, está bastante bug el tema del localstorage y el guardado de partidas, lo intentaré resolver lo antes posible!:D. Todo lo demas funciona bien, saludos a todos<3 Y LOS TKMMM"
);

//GUARDAR RESULTADO
let guardarResultado = document.getElementById("btnGuardarResultado");

//Nombre de jugadores
inputName1 = document.getElementById("inputName1");
inputName2 = document.getElementById("inputName2");

//ARRAYS
let cartasDeJugadores = [];
let cartasJugador1 = [];
let cartasJugador2 = [];
let resultadosGanadores = [];
let nombreGanadores = [];
let nombrePerdedores = [];
let partida = [];

//Nombre de los jugadores en las cartas
let nombreDeJugadores = document.getElementById("nombreDeJugadores");

//CARTAS
let cartas = [
  {
    id: 1,
    nombre: "Demonio del refugio",
    descripcion:
      "Un demonio menor que custodia el refugio de los no muertos, evitando que los prisioneros escapen. ",
    img: "./cards/demonioRefugio.jpg",
    type: "",
    poder: 150,
  },
  {
    id: 2,
    nombre: "Demonio de Tauro",
    descripcion:
      "El Demonio de Tauro es parecido a un minotauro, cubierto de pelaje marrón. Blande una Gran hacha de demonio.",
    img: "./cards/demonioTauro.jpg",
    type: "",
    poder: 300,
  },
  {
    id: 3,
    nombre: "Gárgolas campana",
    descripcion:
      "Las gárgolas se encuentran en la parte más alta de la Parroquia de los no muertos.",
    img: "./cards/gargolas.jpg",
    type: "",
    poder: 300,
  },
  {
    id: 4,
    nombre: "Dragón boquiabierto",
    descripcion:
      "El Dragón boquiabierto es un lejano descendiente de los Dragones Eternos, pero su hambre ciega de alguna manera lo convirtió en una abominación.",
    img: "./cards/dragonBoquiabierto.jpg",
    type: "",
    poder: 350,
  },
  {
    id: 5,
    nombre: "Quelaag la Bruja del caos",
    descripcion:
      "Es una de las hijas de la Bruja de Izalith. Junto con la mayor parte de su familia, falló al escapar de la Llama Caótica y fue corrompida por esta.",
    img: "./cards/quelaag.jpg",
    type: "",
    poder: 400,
  },
  {
    id: 6,
    nombre: "Mariposa lunar",
    descripcion:
      "Las Mariposas lunares son capaces de disparar varios ataques mágicos, pero no poseen ninguna capacidad de ataque cuerpo a cuerpo.",
    img: "./cards/mariposaLunar.jpg",
    type: "",
    poder: 150,
  },
  {
    id: 7,
    nombre: "Sif el Gran lobo gris",
    descripcion:
      "Sif era el compañero lobo de Sir Artorias, el Caminante del Abismo. El lobo acompañó a Artorias en su misión para salvar al reino de Oolacile de las fuerzas del Abismo.",
    img: "./cards/sif.jpg",
    type: "",
    poder: 280,
  },
  {
    id: 8,
    nombre: "Golem de hierro",
    descripcion:
      "El Golem de hierro fue creado para ser el guardián de la Fortaleza de Sen, negando el acceso a cualquiera que buscara Anor Londo.",
    img: "./cards/ironGolem.jpg",
    type: "",
    poder: 370,
  },
  {
    id: 9,
    nombre: "Gwyndolin el Sol Oscuro",
    descripcion:
      "Gwyndolin es el hijo menor del Señor Gwyn y el único dios que aún permanece en Anor Londo.",
    img: "./cards/gwyndolin.jpg",
    type: "",
    poder: 460,
  },
  {
    id: 10,
    nombre: "Priscilla la Mestiza",
    descripcion:
      "Priscilla era una híbrida, hija de un dragón y algún otro ser, sea humano o divinidad.",
    img: "./cards/priscilla.jpg",
    type: "",
    poder: 200,
  },
  {
    id: 11,
    nombre: "Seath el Descamado",
    descripcion:
      "El dragón albino, Seath el Descamado, traicionó a sus semejantes cuando se alió con Gwyn, Señor de la Luz Solar durante la guerra con los Dragones Eternos.",
    img: "./cards/seath.jpg",
    type: "",
    poder: 400,
  },
  {
    id: 12,
    nombre: "Nito el Rey del Cementerio",
    descripcion:
      "Nito, el primero de los muertos, es uno de los Señores originales que encontraron las Almas de los Señores en los albores de la Era del Fuego.",
    img: "./cards/nito.jpg",
    type: "rare",
    poder: 500,
  },
  {
    id: 13,
    nombre: "Cuatro reyes",
    descripcion:
      "Los Cuatro reyes fueron una vez los grandes líderes de la ciudad de Nuevo Londo.",
    img: "./cards/reyes.jpg",
    type: "",
    poder: 480,
  },
  {
    id: 14,
    nombre: "Descarga incesante",
    descripcion:
      "Descarga incesante era el único hijo conocido de la Bruja de Izalith.",
    img: "./cards/descargaIncesante.jpg",
    type: "",
    poder: 330,
  },
  {
    id: 15,
    nombre: "Lecho del Caos",
    descripcion:
      "El Lecho del Caos, la fuente de todos los demonios, fue creado cuando la Bruja de Izalith falló al intentar recrear la Primera Llama a partir de su Alma de Señor.",
    img: "./cards/lechoDelCaos.jpg",
    type: "",
    poder: 100,
  },
  {
    id: 16,
    nombre: "Gwyn, Señor de la ceniza",
    descripcion:
      "Lo poco que se sabe de la vida de Gwyn antes de que existiera la llama, es que tenía un tío llamado Lloyd.",
    img: "./cards/gwyn.jpg",
    type: "rare",
    poder: 550,
  },
  {
    id: 17,
    nombre: "Guardián del Santuario",
    descripcion:
      "Siendo una mezcla de varias criaturas, el Guardián del Santuario posee varias habilidades.",
    img: "./cards/guardianDelSantuario.jpg",
    type: "",
    poder: 480,
  },
  {
    id: 18,
    nombre: "Caballero Artorias",
    descripcion:
      "Sir Artorias, también conocido como el Caminante del Abismo, era uno de los Cuatro Caballeros de Gwyn.",
    img: "./cards/artorias.jpg",
    type: "rare",
    poder: 650,
  },
  {
    id: 19,
    nombre: "Kalameet, el Dragón Negro",
    descripcion:
      "Kalameet, el Dragón Negro es el portador de la calamidad y uno de los últimos dragones ancestrales. Incluso los dioses de Anor Londo temían provocar su ira.",
    img: "./cards/kalameet.jpg",
    type: "rare",
    poder: 590,
  },
  {
    id: 20,
    nombre: "Manus, Padre del Abismo",
    descripcion:
      "Manus fue humano alguna vez, se convirtió en el Padre del Abismo cuando su humanidad enloqueció.",
    img: "./cards/manus.jpg",
    type: "rare",
    poder: 600,
  },
];

let i, j, k;
for (i = cartas.length; i; i--) {
  j = Math.floor(Math.random() * i);
  k = cartas[i - 1];
  cartas[i - 1] = cartas[j];
  cartas[j] = k;
}

//Crear una carta pasandole una posicion
const crearCarta = (id) => {
  let modeloCartas = `<div class="cartasPersonajes ${cartas[id].type}" id="cartasPersonajes">
<div class="card" id="card">
  <div class="cardImg" style="background-image:url(${cartas[id].img})"></div>
  <div id="cardName" class="cardName">
    <p class="characterName" id="characterName">
     ${cartas[id].nombre}
    </p>
  </div>
</div>
<div class="cardDescripcion">
  <p class="characterDescription" id="characterDescription">
  ${cartas[id].descripcion}
  </p>
</div>
</div>
`;

  cardIngame.innerHTML += modeloCartas;
};

//Game, juego iniciado
let game = document.getElementById("game");

btnPlayMain.addEventListener("click", () => {
  playMain.style.display = "none";
  jugadoresMenu.style.display = "flex";
});

//BOTON INICIAR JUEGO
play.addEventListener("click", () => {
  //Validacion de nombres ingresados
  if (inputName1.value != "" && inputName2.value != "") {
    jugadoresMenu.style.display = "none";
    loader.style.display = "flex";
    loader3s();
  }

  //Error si no se ingresan los nombres
  else {
    alert("Ingrese los nombres");
  }
});

//Loader 3 segundos, luego ejecuta el juego con iniciarJuego()
const loader3s = () => {
  setTimeout(() => {
    loader.style.display = "none";
    iniciarJuego();
  }, 3000);
};

//Crear un numero random entre 0 y 19
const numRandom = () => {
  return Math.round(Math.random() * (19 - 0) + 0);
};

let numero = 0;
let numeroDeCarta = 0;
let numeroDeCarta2 = 0;

const iniciarJuego = () => {
  console.log("funsiona");
  game.style.display = "flex";
  reiniciar.style.display = "flex";

  //Creo 6 cartas aleatorias diferentes
  for (let i = 0; i < 6; i++) {
    cartasDeJugadores.push(cartas[i]);
  }

  cartasJugador1 = cartasDeJugadores.slice(0, 3);
  cartasJugador2 = cartasDeJugadores.slice(3);

  cartasJugador1.forEach((element) => {
    numero++;
    numeroDeCarta2++;

    let modelo = `<div class="cartasPersonajes ${element.type}" id="cartasPersonajes${numero}">
    <div id="nickJugadores" ><p class="nicksJugadores">Carta ${numeroDeCarta2}/${cartasJugador1.length} de ${inputName1.value} </p></div>
    <div class="card" id="card">
      
      <div class="cardImg" style="background-image:url(${element.img})"></div>
      <div class="cardPower" id="cardPower">${element.poder}P</div>
      <div id="cardName" class="cardName">
        <p class="characterName" id="characterName">
         ${element.nombre}
        </p>
      </div>
    </div>
    <div class="cardDescripcion">
      <p class="characterDescription" id="characterDescription">
      ${element.descripcion}
      </p>
    </div>
    </div>
    `;

    cardIngame.innerHTML += modelo;
  });

  cartasJugador2.forEach((element) => {
    numero++;
    numeroDeCarta++;

    let modelo = `<div class="cartasPersonajes ${element.type}" id="cartasPersonajes${numero}">
    <div id="nickJugadores" ><p class="nicksJugadores">Carta ${numeroDeCarta}/${cartasJugador2.length} de ${inputName2.value} </p></div>
    <div class="card" id="card">
      
      <div class="cardImg" style="background-image:url(${element.img})"></div>
      <div class="cardPower" id="cardPower">${element.poder}P</div>
      <div id="cardName" class="cardName">
        <p class="characterName" id="characterName">
         ${element.nombre}
        </p>
      </div>
    </div>
    <div class="cardDescripcion">
      <p class="characterDescription" id="characterDescription">
      ${element.descripcion}
      </p>
    </div>
    </div>
    `;

    cardIngame.innerHTML += modelo;
  });
};

//Carousel vanilla
prev.addEventListener("click", () => {
  cardIngame.scrollLeft -= 373;
});
next.addEventListener("click", () => {
  cardIngame.scrollLeft += 373;
});

//Boton REINICIAR
reiniciar.addEventListener("click", () => {
  reiniciarModal.style.display = "flex";
});

btnReiniciar.addEventListener("click", () => {
  numeroDeCarta = 0;
  numeroDeCarta2 = 0;
  cartasJugador1 = [];
  cartasJugador2 = [];
  cartasDeJugadores = [];
  cardIngame.innerHTML = "";
  reiniciarModal.style.display = "none";
  let i, j, k;
  for (i = cartas.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = cartas[i - 1];
    cartas[i - 1] = cartas[j];
    cartas[j] = k;
  }
  iniciarJuego();
});

cerrarModalReinciar.addEventListener("click", () => {
  reiniciarModal.style.display = "none";
});

//BOTON PARA VER EL RESULTADO
let totalPoderJ1 = 0;
let totalPoderJ2 = 0;
btnRes.addEventListener("click", () => {
  reiniciarModal.style.display = "none";
  reiniciarMainModal.style.display = "flex";
  for (let i = 0; i < 3; i++) {
    console.log("Poder Jugador 1:", cartasJugador1[i].poder);
  }

  for (let i = 0; i < 3; i++) {
    console.log("Poder Jugador 2:", cartasJugador2[i].poder);
  }

  totalPoderJ1 =
    cartasJugador1[0].poder + cartasJugador1[1].poder + cartasJugador1[2].poder;
  totalPoderJ2 =
    cartasJugador2[0].poder + cartasJugador2[1].poder + cartasJugador2[2].poder;

  if (totalPoderJ1 > totalPoderJ2) {
    nombreGanadores.push(inputName1.value);
    nombrePerdedores.push(inputName2.value);
    //alert(`Gano ${inputName1.value} con: ${totalPoderJ1} puntos`);

    reiniciarMainModal.innerHTML = `<div class="resultados" id="resultados" style="display: flex;">
    <h1>El ganador es ${inputName1.value}</h1>
    <div class="jugador1resultado">
      <p>Cartas de ${inputName1.value}</p>
      <div class="contImgRes">
        <img class="imgRes" src="${cartasJugador1[0].img}" alt="" />
        <img class="imgRes" src="${cartasJugador1[1].img}" alt="" />
        <img class="imgRes" src="${cartasJugador1[2].img}" alt="" />
      </div>
    </div>
    <div class="jugador2resultado">
      <p>Cartas de ${inputName2.value}</p>
      <div class="contImgRes">
        <img class="imgRes" src="${cartasJugador2[0].img}" alt="" />
        <img class="imgRes" src="${cartasJugador2[1].img}" alt="" />
        <img class="imgRes" src="${cartasJugador2[2].img}" alt="" />
      </div>
    </div>
    <button onclick="guardarResultadoG()" class="guardarResultado" id="btnGuardarResultado">
      Guardar resultado
    </button>
    <button onclick="salirMain()" class="guardarResultado" id="btnSalir">Salir</button>
  </div>`;
  } else {
    nombreGanadores.push(inputName2.value);
    nombrePerdedores.push(inputName1.value);
    //alert(`Gano ${inputName2.value} con: ${totalPoderJ2} puntos`);
    reiniciarMainModal.innerHTML = `<div class="resultados" id="resultados" style="display: flex;">
    <h1>El ganador es ${inputName2.value}!</h1>
    <div class="jugador1resultado">
      <p>Cartas de ${inputName1.value}</p>
      <div class="contImgRes">
        <img class="imgRes" src="${cartasJugador1[0].img}" alt="" />
        <img class="imgRes" src="${cartasJugador1[1].img}" alt="" />
        <img class="imgRes" src="${cartasJugador1[2].img}" alt="" />
      </div>
    </div>
    <div class="jugador2resultado">
      <p>Cartas de ${inputName2.value}</p>
      <div class="contImgRes">
        <img class="imgRes" src="${cartasJugador2[0].img}" alt="" />
        <img class="imgRes" src="${cartasJugador2[1].img}" alt="" />
        <img class="imgRes" src="${cartasJugador2[2].img}" alt="" />
      </div>
    </div>
    <button onclick="guardarResultadoG()" class="guardarResultado" id="btnGuardarResultado">
      Guardar resultado
    </button>
    <button onclick="salirMain()" class="guardarResultado" id="btnSalir">Salir</button>
  </div>`;
  }
});

//Boton para salir al menu principal
const salirMain = () => {
  let i, j, k;
  for (i = cartas.length; i; i--) {
    j = Math.floor(Math.random() * i);
    k = cartas[i - 1];
    cartas[i - 1] = cartas[j];
    cartas[j] = k;
  }
  reset();
  inputName1.value = "";
  inputName2.value = "";
  cardIngame.innerHTML = "";
  playMain.style.display = "flex";
  reiniciarMainModal.style.display = "none";
  game.style.display = "none";
};

//Boton Para guardar el resultado de la partida con el ganador
const guardarResultadoG = () => {
  let partidaAGuadar = {
    nombreGanador: nombreGanadores[0],
    nombrePerdedor: nombrePerdedores[0],
    cartasJugador1: cartasJugador1,
    cartasJugador2: cartasJugador2,
  };
  partida.push(partidaAGuadar);
  //Guardo los resultados de partidas, nombre del jugador que ganó y el nombre del jugador que perdió
  nombreGanadores = [];
  nombrePerdedores = [];
  localStorage.setItem("partidas", JSON.stringify(partida));
};

//Boton para mostrar los RESULTADOS GUARDADOS de las partidas

const cerrarModalVerResultado = () => {
  verResultadosModal.style.display = "none";
};

mostrarResultadoMain.addEventListener("click", () => {
  verResultadosModal.style.display = "flex";
});

//GET STORAGE
let partidasStorage = JSON.parse(localStorage.getItem("partidas"));

//Cambiar el color del boton ver resultados si hay storage
if (partidasStorage) {
  partida.push(partidasStorage);
  console.log("hay partidas guardadas en storage");
  mostrarResultadoMain.classList.add("activeBtnOrange");
  partidasStorage.forEach((partida) => {
    let impPartida = `
    <div id="containerGanador" class="containerGanador">
          <div class="vs" id="vs">
            <p>${partida.nombreGanador}</p>
            <p>vs</p>
            <p>${partida.nombrePerdedor}</p>
          </div>
        </div>
    `;

    verResultadosModal.innerHTML += impPartida;
  });
}
