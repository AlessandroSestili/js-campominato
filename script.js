// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.


// In seguito deve chiedere all’utente (100 - 16) volte di inserire
// un numero alla volta, sempre compreso tra 1 e 100.


// L’utente non può inserire più volte lo stesso numero.


// Se il numero è presente nella lista dei numeri generati, la partita termina, 
// altrimenti si continua chiedendo all’utente un altro numero.


// La partita termina quando il giocatore inserisce un numero “vietato” 
// o raggiunge il numero massimo possibile di numeri consentiti.


// Al termine della partita il software deve comunicare il punteggio, 
// cioè il numero di volte che l’utente ha inserito un numero consentito.





// ---------------------------------------------------





//Crea i numeri iniziali del computer e si assicura che non ci siano doppioni
var aiNumbers = [];

function createAiNumbers() {
    do {
        var numeroRandom = GenerateRandomNum(1, 100);

        if (aiNumbers.indexOf(numeroRandom) === -1) {
            aiNumbers.push(numeroRandom)
        }
    } while (aiNumbers.length < 16)
}

//Funzione che genera numeri random da min a max
function GenerateRandomNum(min, max) {
    return Math.ceil(Math.random() * max) + min
}

createAiNumbers()