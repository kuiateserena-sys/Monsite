

// var ourPurposeElement = document.getElementsByClassName("story");
var ourPurposeElement1 = document.querySelector('p');
var p2 = document.querySelector('#serena');
var box1 = document.querySelectorAll('.box1');

// console.log("box1:=>", box1[1]);


ourPurposeElement1.style.color = "red";
ourPurposeElement1.innerHTML = "Hello, this is a new text added to the paragraph using JavaScript.";

// p2.style.color = "blue";


// console.log("ourPurposeElement:=>", ourPurposeElement);
// console.log("ourPurposeElement1:=>", ourPurposeElement1);

p2.addEventListener('click', () => {
    p2.classList.add('blue-background', 'text-white');
    box1[0].classList.add('hidden-box');
    box1[1].classList.add('hidden-box');
});

p2.addEventListener('mouseover', () => {
    p2.classList.remove('blue-background', 'text-white');
    box1[0].classList.remove('hidden-box');
    box1[1].classList.remove('hidden-box');
});


// calculator
const buttons = document.querySelectorAll('.buttons button');
const resultScreen = document.getElementById('result-screen');

console.log("buttons:=>", buttons);


function appendToResult(value) {
    console.log("selected-value:=>", value);
    resultScreen.innerHTML += value;
    
}

function clearResult() {
    resultScreen.innerHTML = '';
}

function calculateResult() {
    try {
        console.log("resultScreen.innerHTML:=>", resultScreen.innerHTML);
        
        const result = eval(resultScreen.innerHTML);
        resultScreen.innerHTML = result;
    } catch (error) {
        resultScreen.innerHTML = 'Erreur de syntaxe';
        resultScreen.style.color = 'red';
        resultScreen.style.border = '1px solid red';
    }
}
