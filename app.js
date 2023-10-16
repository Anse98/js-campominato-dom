
//////////////////////////////////FUNZIONI//////////////////////////////////////


// FUNZIONE PER GENERARE LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA


function generateGrill() {

  // Sostituisco il contenuto del button play
  playBtnElement.innerHTML = `Nuova partita <i class="fa-solid fa-rotate-right"></i>`;

  // Cancello la griglia ogni volta che viene premuto il tasto gioca
  gridElement.innerHTML = "";

  // Rimuovo la classe che non permetteva di cliccare altre caselle all'utente
  gridElement.classList.remove("match-ended");

  counter = 0;

  if (selectElement.value === "hard") {

    // Mi genera 49 caselle se la select è impostata su facile
    generateGrillCell(49, 'hard');

  } else if (selectElement.value === "medium") {
    {
      // Mi genera 81 caselle se la select è impostata su medio
      generateGrillCell(81, 'medium');
    }
  } else {
    // Mi genera 100 caselle se la select è impostata su difficile
    generateGrillCell(100, 'easy');
  }
}

// FUNZIONE CHE MI GENERA LE CASELLE

function generateGrillCell(num, difficulty) {
  // Genero tot volte le caselle
  for (let i = 0; i < num; i++) {
    const n = i + 1;

    //Creo la cella che dovrò stampare tot volte nel DOM
    const cellString = `<div class="cell cell-${difficulty}">${n}</div>`;

    //Concateno ad ogni giro del ciclo la variabile cell
    gridElement.innerHTML += cellString;
  }
}


// FUNZIONE CHE MI GENERA UN NUMERO CASUALE

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// FUNZIONE CHE MI GENERA LE 16 BOMBE

function generateBombs() {

  // Genero un array che conterrà le mie 16 bombe
  //const bombs = [];
  bombs = [];

  // Inserisco nell'array tutti i 16 numeri diversi uno dall'altro
  while (bombs.length < 16) {

    let nBomb;
    // In base al livello di difficoltà i numeri delle bombe generate variano
    if (selectElement.value === "easy") {
      nBomb = getRandomInt(1, 100);
    } else if (selectElement.value === "medium") {
      nBomb = getRandomInt(1, 81);
    } else {
      nBomb = getRandomInt(1, 49);
    }

    // Se il numero non è presente nell'array allora inseriscilo
    if (bombs.includes(nBomb) === false) {
      bombs.push(nBomb);
    }
  }
  console.log(bombs);
}

/////////////////////////////FINE FUNZIONI////////////////////////////////////


// Mi vado a prendere l'elemento del DOM che contiene le celle
const gridElement = document.querySelector(".grid");

// Mi vado a prendere il button play dal DOM
const playBtnElement = document.getElementById("play-btn");

// Mi vado a prendere la select dal DOM
const selectElement = document.getElementById("difficulty");

// Mi vado a prendere tutti gli elementi con la classe cell dal DOM
const cellElements = document.querySelectorAll(".cell");

//Mi creo una variabile contatore
let counter = 0;

//Creo l'array vuoto delle bombe
let bombs = [];


// Creiamo un evento al click del button
playBtnElement.addEventListener("click", function () {

  generateGrill();

  generateBombs();

});


// Creo un evento al click della griglia (e caselle)
gridElement.addEventListener('click', function (event) {

  const target = event.target;
  const targetNumber = parseInt(target.innerHTML);

  // SE la casella cliccata ha un numero che è contenuto in bombs allora hai perso
  if (bombs.includes(targetNumber)) {
    // la cella si colora di rosso 
    target.classList.add("bg-red");

    //Stampo che hai perso
    console.log("Hai perso, hai pestato la bomba!");

    // aggiungo una classe che evita che l'utente possa cliccare su altre caselle dopo che ha perso
    // gridElement.classList.add("match-ended");

  } else {

    if (target.classList.contains("bg-azure") === false) {

      // Il contatore incrementa di uno a ogni click e viene aggiunta la classe bg-azure alla cella
      counter++;

      target.classList.add("bg-azure");

    }
    console.log(counter)
    // in base al valore della select il match finisce
    if (selectElement.value === "hard" && counter === 33) {

      console.log("hai vinto!");
      gridElement.classList.add("match-ended");

    } else if (selectElement.value === "medium" && counter === 65) {

      console.log("hai vinto!");
      gridElement.classList.add("match-ended");

    } else if (counter === 84) {

      console.log("hai vinto!");
      gridElement.classList.add("match-ended");

    }
  }


  // Messaggio finale di quanti punti hai totalizzato
  if (gridElement.classList.contains("match-ended")) {

    console.log(`Hai totalizzato ${counter} punti`);

  }


});