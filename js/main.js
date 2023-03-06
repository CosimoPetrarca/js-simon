'Use strict'

/*----------
  Funzioni
 ---------*/

// Funzione per generare numeri casuali
 function getRandomNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}

/* Funzione per nascondere i numeri */
function nascondi() {
    numeriVisualizzati.innerHTML = '';
}

/*----------
    Main
 ---------*/

/* Generiamo i numeri casuali e mostriamoli su html */
const numeriVisualizzati = document.getElementById('numeri')

for (let i = 0; i < 5; i++) {
    const numeri = getRandomNumber(100);
    console.log(numeri);  
    numeriVisualizzati.innerHTML += numeri + "<br>"; /* brutto a livelli altissimi */
}

/* settiamo il timer per nascondere i numeri */
const tempoNascondere = 10
setTimeout (nascondi, tempoNascondere * 1000);