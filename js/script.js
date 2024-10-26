//1) Creo un array di partenza in cui verrano pushati 5 numeri casuali
//2) far partire un contatore di 30 secondi 
//3) far sparire l'array di partenza, lasciando in pagina 5 input vuoti
//4) far inserire all'utente 5 numeri negli input vuoti che si inseriranno in un array vuoto
//5) confrontare i due array e verificare quali e quanti numeri coinbacino
//6) far apparire in pagina il risultato di quest'ultimo calcolo

//elementi del DOM

const inputGroup = document.getElementById('input-group')

const numbersList = document.getElementById('numbers-list')

const answerForm = document.getElementById('answer-form')



//numeri random da pc

const arrayNumbers = [];
const numberPc = 5;
let min = 0;
let max = 50;

function generateRandomNumbers (min , max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


for (let i = 0 ; i < numberPc; i ++){
    const randomNumbers = generateRandomNumbers(min , max);

    arrayNumbers.push (randomNumbers);

    numbersList.innerHTML += `<li> ${randomNumbers} </li>`;
}





//timer

const counter = document.getElementById('countdown')

let timer;

count = 30;
counter.innerText = count;


timer = setInterval(() => {
counter.innerText = --count;
}, 1000);

setTimeout(function () {
  clearInterval(timer);
}, 30_000);


//a 30 secondi far sparire i numeri random e far apparire il form





