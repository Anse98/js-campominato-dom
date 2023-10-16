
//////////////////////////////////FUNZIONI//////////////////////////////////////


// FUNZIONE PER GENERARE LA GRIGLIA IN BASE AL LIVELLO DI DIFFICOLTA


function generateGrill() {

  // Sostituisco il contenuto del button play
  playBtnElement.innerHTML = `Nuova partita <i class="fa-solid fa-rotate-right"></i>` ;

  // Cancello la griglia ogni volta che viene premuto il tasto gioca
  gridElement.innerHTML = "";

  // Mi vado a prendere la select dal DOM
  const selectElement = document.getElementById("difficulty");

  if (selectElement.value === "f") {

    // Mi genera 49 caselle se la select è impostata su facile
    generateGrillEasy();

  } else if (selectElement.value === "m") {
    {
      // Mi genera 81 caselle se la select è impostata su medio
      generateGrillMedium();
    }
  } else {
    // Mi genera 100 caselle se la select è impostata su difficile
    generateGrillHard ();
  }
}

// FUNZIONE CHE MI GENERA 49 CASELLE

function generateGrillEasy () {
  // Genero 49 volte le caselle
  for (let i = 0; i < 100; i++) {
    const n = i + 1;

    //Creo la cella che dovrò stampare tot volte nel DOM
    const cellString = `<div class="cell cell-easy">${n}</div>`;

    //Concateno ad ogni giro del ciclo la variabile cell
    gridElement.innerHTML += cellString;
  }
}

// FUNZIONE CHE MI GENERA 81 CASELLE

function generateGrillMedium () {
  // Genero 81 volte le caselle
  for (let i = 0; i < 81; i++) {
    const n = i + 1;

    //Creo la cella che dovrò stampare tot volte nel DOM
    const cellString = `<div class="cell cell-medium">${n}</div>`;

    //Concateno ad ogni giro del ciclo la variabile cell
    gridElement.innerHTML += cellString;
  }
}

// FUNZIONE CHE MI GENERA 100 CASELLE

function generateGrillHard () {
  // Genero 100 volte le caselle
  for (let i = 0; i < 49; i++) {
    const n = i + 1;

    //Creo la cella che dovrò stampare tot volte nel DOM
    const cellString = `<div class="cell cell-difficult">${n}</div>`;

    //Concateno ad ogni giro del ciclo la variabile cell
    gridElement.innerHTML += cellString;
  }
}

// FUNZIONE PER DARE BG COLOR ALLE CELLE E CONSOLE LOG DEL NUMERO DELLE CELLE

function addBgAndN () {

  // Vado a prendermi tutti gli elementi dal DOM con classe cell
  const cellElements = document.querySelectorAll(".cell");
  console.log(cellElements.length);

  for (let i = 0; i < cellElements.length; i++) {
    const n = i + 1;
    const actualCell = cellElements[i];

    // Aggiungo l'evento click ad ogni casella
    actualCell.addEventListener("click", function () {
      this.classList.add("bg-azure");
      console.log(n);
    })
  }
}

  /////////////////////////////FINE FUNZIONI////////////////////////////////////


  // Mi vado a prendere l'elemento del DOM che contiene le celle
  const gridElement = document.querySelector(".grid");

  // Mi vado a prendere il button play dal DOM
  const playBtnElement = document.getElementById("play-btn");

  // Creiamo un evento al click del button
  playBtnElement.addEventListener("click", function () {

    generateGrill();

    addBgAndN ();
    
  })