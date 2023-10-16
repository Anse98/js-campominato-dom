
//////////////////////////////////FUNZIONI//////////////////////////////////////


// FUNZIONE PER GENERARE LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA


function generateGrill() {

  // Sostituisco il contenuto del button play
  playBtnElement.innerHTML = `Nuova partita <i class="fa-solid fa-rotate-right"></i>`;

  // Cancello la griglia ogni volta che viene premuto il tasto gioca
  gridElement.innerHTML = "";

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
    if (selectElement.value === "f") {
      nBomb = getRandomInt(1, 100);
    } else if (selectElement.value === "m") {
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
  console.log(targetNumber);
});