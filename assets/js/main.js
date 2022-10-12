//Mail
//Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.

/*const listEmail = ["andrea.r.4845@gmail.com", "andrea.r.94.varie@gmail.com", "giordanategazio@gmail.com"];

//Chiedi all’utente la sua email
const myEmail = prompt("dimmi la tua email");
console.log(myEmail);

let isValid = false;
//controlla che sia nella lista di chi può accedere, stampa un messaggio appropriato sull’esito del controllo.
for (let i = 0; i < listEmail.length; i++ ){
    const element = listEmail[i];
    
if  ( myEmail === element ){
    isValid = true;
   
} 

} console.log(isValid) */

// another solution const isValid senza false ma vuota
//altro ciclo if 
/* if(isValid){
 console.log('Welcome in the site')
} else {
  console.log('this site is private')
}*/

//Gioco dei dadi

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 

const myNumber = Math.floor(Math.random() *6)+1;
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
