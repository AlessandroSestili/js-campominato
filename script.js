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


// CHIEDE ALL UTENTE DI INSERIRE UN NUMERO, TRAMITE PROMPT, X 
var userNumbers = [];

function askUserNumbers() {
    var userLentghMax = 100 - 16;
    var gameOver = false;

    while (userNumbers.length < userLentghMax && !gameOver) {

        var userInput = prompt("Inserisci un numero tra 1 e 100")

        if(userInput == null) {
            gameOver = true
        }

        var inputIsValid = checkUserInput(userInput)

        if (!inputIsValid && inputIsValid !== "game over") {
            alert("numero inserito non valido")

        } else if (inputIsValid === "game over") {
            gameOver = true;

            alert("Hai perso! Dopo aver inserito " + userNumbers.length + " numeri")

        } else {
            userNumbers.push(parseInt(userInput))
        }

        if (userNumbers.length === userLentghMax) {
            alert("hai vinto!")
        }
    }
}

//CONTROLLA SE:
// - IL VALORE è UN NUMERO REALE
// - IL NUMERO NON  è MINORE DI 1
// - IL NUMERO NON è MAGGIORE DI 100
// - IL NUMERO NON SIA GIA STATO USATO DALL UTENTE
function checkUserInput(inputIsValid) {
    var result = true;
    var numberToCheck = parseInt(inputIsValid)

    if (isNaN(numberToCheck)) {
        return false
    }

    if (numberToCheck < 1 || numberToCheck > 100) {
        return false
    }

    if (userNumbers.indexOf(numberToCheck) > -1) {
        return false
    }

    if (aiNumbers.indexOf(numberToCheck) > -1) {
        return "game over"
    }



    return result
}


//CREA 6 NUMERI INIZIALI DEL PC E SI ASSICURA
//CHE NON CI SIANO DOPPIONI
var aiNumbers = [];

function createAiNumbers() {
    do {
        var numeroRandom = GenerateRandomNum(1, 100);

        if (aiNumbers.indexOf(numeroRandom) === -1) {
            aiNumbers.push(numeroRandom)
        }
    } while (aiNumbers.length < 16)
    console.log(aiNumbers);
}


//FUNZIONE CHE GENERA NUMERI TRA UN MINIMO E MASSIMO
function GenerateRandomNum(min, max) {
    return Math.ceil(Math.random() * max) + min
}

createAiNumbers()
askUserNumbers()