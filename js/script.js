

// var ourPurposeElement = document.getElementsByClassName("story");
var ourPurposeElement1 = document.querySelector('p');
var p2 = document.querySelector('#serena');
var box1 = document.querySelectorAll('.box1');

console.log("box1:=>", box1[1]);


ourPurposeElement1.style.color = "red";
ourPurposeElement1.innerHTML = "Hello, this is a new text added to the paragraph using JavaScript.";

// p2.style.color = "blue";


// console.log("ourPurposeElement:=>", ourPurposeElement);
console.log("ourPurposeElement1:=>", ourPurposeElement1);

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

