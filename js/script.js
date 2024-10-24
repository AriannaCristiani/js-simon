//1) Creo un array di partenza in cui verrano pushati 5 numeri casuali
//2) far partire un contatore di 30 secondi 
//3) far sparire l'array di partenza, lasciando in pagina 5 input vuoti
//4) far inserire all'utente 5 numeri negli input vuoti che si inseriranno in un array vuoto
//5) confrontare i due array e verificare quali e quanti numeri coinbacino
//6) far apparire in pagina il risultato di quest'ultimo calcolo

const inputGroup = document.getElementById('input-group')

const numberList = document.getElementById('number-list')


//numeri random da pc
function getRandomInt(max) {
    return Math.floor(Math.random() * 50);
  }

let elementList1 = document.getElementById('element-list-1')
elementList1.innerHTML = `${Math.floor(Math.random() * 50)}`

let elementList2 = document.getElementById('element-list-2')
elementList2.innerHTML = `${Math.floor(Math.random() * 50)}`

let elementList3 = document.getElementById('element-list-3')
elementList3.innerHTML = `${Math.floor(Math.random() * 50)}`

let elementList4 = document.getElementById('element-list-4')
elementList4.innerHTML = `${Math.floor(Math.random() * 50)}`

let elementList5 = document.getElementById('element-list-5')
elementList5.innerHTML = `${Math.floor(Math.random() * 50)}`

