//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

/*const listEmail = ["andrea.r.4845@gmail.com", "andrea.r.94.varie@gmail.com", "giordanategazio@gmail.com"];

//Chiedi all’utente la sua email
const myEmail = prompt("dimmi la tua email");
console.log(myEmail);

//controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

if  ( myEmail == listEmail ){
    console.log("La tua email è presente, gioca ora!")
} else {
    console.log("registrati correttamente per giocare!")
}*/


//Gioco dei dadi

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

const myNumber = Number(prompt ('Scegli il tuo numero tra 1 e 6'));
const pcNumber = Math.floor(Math.random() *6)+1;


console.log(myNumber);
console.log(pcNumber);


//Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (myNumber > pcNumber){
    console.log("hai vinto", myNumber)
} else if (myNumber < pcNumber){
    console.log("hai perso", pcNumber)
} else  {
    console.log("avete pareggiato scegli un altro numero")
}
