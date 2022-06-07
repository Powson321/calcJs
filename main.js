
// Pobranie elementów z htmla
const currentNumber = document.querySelector('.currentNumber');

const previousNumber = document.querySelector('.previousNumber p');

const mathSign = document.querySelector('.mathSign');

const numbersButtons = document.querySelectorAll('.number');

const operatorsButtons = document.querySelectorAll('.operator');

const equalsButton = document.querySelector('.equals');

const clearButton = document.querySelector('.clear');


// zapis zmiennej do wyświetlania wyniku
let result = '';


// funkcje

function displayNumbers () {
    //  Brak możliwości wpisania więcej niż jednej kropki 
        if(this.textContent === '.' && currentNumber.innerHTML.includes('.')) return;
    // Jeżeli najpierw wpiszemy kropkę to ma przed nią wskoczyć 0
        if(this.textContent === '.' && currentNumber.innerHTML === '') return currentNumber.innerHTML = '.0'
// nasza liczba ma być równa temu co wpiszemy 
        currentNumber.innerHTML += this.textContent;
}


function operate () {
    // warunek który pozwoli wpisać minusową liczbę
    if(currentNumber.innerHTML === '' && this.textContent ==='-'){
        currentNumber.innerHTML = '-';
        return;
    }
    
// Jeśli klikniemy inny operator niż minus to nam zwróci 
     else if (currentNumber.innerHTML === '') {
        return;
     }
// jeśli klikniemy operator wywolamy funkcje showResult 
     if(mathSign.innerHTML !== '') {
         showResult();
     }
    //  
     previousNumber.innerHTML = currentNumber.innerHTML;
     mathSign.innerHTML = this.textContent;
     currentNumber.innerHTML ='';
}


function showResult () {
    // jeśli pierwsza podana liczba lub druga podana liczba będzie pusta to nie przejdziemy dalej 
    if(previousNumber.innerHTML === '' || currentNumber.innerHTML === '') return;

    //  zapisanie zmiennych w skrócie 
    let a = Number(currentNumber.innerHTML);
    let b = Number(previousNumber.innerHTML);
    let operator = mathSign.innerHTML;


    // instrukcja switch, która pozwoli nam wykonać operacje matematyczne na podanych znakach
    switch(operator) {
        case '+':
        result = a + b;
        break;
        case '-':
        result = b - a;
        break;
        case 'x':
        result = a * b;
        break;
        case ':':
        result = b / a;
        break;
       
    }
    // zapisanie wyniku obliczeń na górnej liczbie
    currentNumber.innerHTML = result;
    // wyczyszczenie dolnej liczby
    previousNumber.innerHTML = '';
    // wyczyszczenie znaku operatora
    mathSign.innerHTML = '';
}


function clearScreen () {
    // wyczyszczenie wszystkich wartości poprzez operator C
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';
}


 // Nasluchiwanie przyciskow

//  zapis nasłuchiwania wszystkich buttonow z numerami 
 numbersButtons.forEach((button) => {
    button.addEventListener('click', displayNumbers)
})

//  zapis nasłuchiwania wszystkich buttonow z operatorami
 operatorsButtons.forEach((button) => button.addEventListener('click', operate))

//  zapis nasłuchiwania równości
 equalsButton.addEventListener('click', showResult);

// zapis nasłuchiwania wyczyszczenia ekranu poprzez button C
 clearButton.addEventListener('click', clearScreen);


