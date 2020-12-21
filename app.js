// // console.log("Hello Talk Banana")


// //input
// var username = prompt("enter username")

// //processing 
// var welcomeMessage = "This script works "+username;

// //output
// alert(welcomeMessage);


var btnTranslate = document.querySelector("#btn-translate");
// console.log(btnTranslate)
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

// outputDiv.innerText = ("Hello Akshay");

// console.log(outputDiv);

function clickHandler() {
        // console.log("Clicked!!");
        // console.log("input", txtInput.value);
        outputDiv.innerText = "sadas " + txtInput.value;
    };

btnTranslate.addEventListener("click", 
    clickHandler)


