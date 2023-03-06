'Use strict'

/*----------
  Funzioni
 ---------*/

// Funzione per generare numeri casuali
 function getRandomNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}

/*----------
    Main
 ---------*/

/* Generiamo i numeri casuali e mostriamoli su html */
const numeriVisualizzati = document.getElementById('numeri')

for (let i = 0; i < 5; i++) {
    const numeri = getRandomNumber(100);
    console.log(numeri);  
    numeriVisualizzati.innerHTML += numeri + "<br>";
}
