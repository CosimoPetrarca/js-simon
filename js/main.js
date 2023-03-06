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

/* Funzione per chiedere numeri all'utente */
function appariPrompt() {
    for (let i = 0; i < 5; i++) {
        const utente = Number(prompt('Inserisci il ' + (i + 1) + ' numero che ricordi'));
    }
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
const tempoNascondere = 30;
setTimeout(nascondi, tempoNascondere * 1000);

/* settiamo il timer per far apparire il prompt */
const tempoPrompt = 31;
setTimeout(appariPrompt, tempoPrompt * 1000);