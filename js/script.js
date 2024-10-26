//1) Creo un array di partenza in cui verrano pushati 5 numeri casuali
//2) far partire un contatore di 30 secondi 
//3) far sparire l'array di partenza, lasciando in pagina 5 input vuoti
//4) far inserire all'utente 5 numeri negli input vuoti che si inseriranno in un array vuoto
//5) confrontare i due array e verificare quali e quanti numeri coinbacino
//6) far apparire in pagina il risultato di quest'ultimo calcolo

//elementi del DOM

const inputGroup = document.querySelectorAll('#input-group input')

const numbersList = document.getElementById('numbers-list')

const answerForm = document.getElementById('answers-form')

const instructions = document.getElementById('instructions');

const message = document.getElementById('message');





//numeri random da pc

const arrayNumbers = [];
const numberPc = 5;
let min = 1;
let max = 50;

function generateRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// for (let i = 0 ; i < numberPc; i ++){
//     const randomNumbers = generateRandomNumbers(min , max);
//     arrayNumbers.push (randomNumbers);
// }

while (arrayNumbers.length < numberPc) {

  const randomNumbers = generateRandomNumbers(min, max);

  if (!arrayNumbers.includes(randomNumbers)) {
    arrayNumbers.push(randomNumbers)
    numbersList.innerHTML += `<li> ${randomNumbers} </li>`;
  }

}





//timer

const counter = document.getElementById('countdown')

let timer = 3;

counter.innerText = timer

const interval = setInterval(function () {
  timer = timer - 1;
  counter.innerText = timer;
  if (timer === 0) {
    clearInterval(interval);

    numbersList.classList.add('d-none');
    instructions.innerText = 'Quanti numeri riesci a ricordare?';
    answerForm.classList.remove('d-none');
  }
}, 1_000);


//confronto di array

answerForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let currentCount = 0;
  const userNumbers = []

  for (let i = 0; i < inputGroup.lenght; i++) {
    const currentElement = parseInt.apply(inputGroup[i].value);

    if (!isNan(currentElement) &&
      currentElement >= min &&
      currentElement <= max &&
      !userNumbers.includes(currentElement)
    ) {
      userNumbers.push(currentElement);
    }
  }


  if (userNumbers.length !== numberPc) {
    message.innerContent = 'Qualcosa non va, ricontrolla i numeri inseriti';
  }

  for (let i = 0 ; i < userNumbers.length ; i ++){
    const userNumbersValue = userNumbers[i];

    if (arrayNumbers.includes(userNumbersValue)){
      currentCount++;
    }
  }

    if (currentCount > 0){
      message.classList.remove('text-danger');
      message.classList.add('text success');
    }

  message.textContent =`Hai indovinato ${currentCount} numeri su ${numberPc}`;


});




