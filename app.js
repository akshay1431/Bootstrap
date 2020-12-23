var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
var errorHandler = document.querySelector("#error");

//added Minion API translator
var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslaterURL(input){
    return serverURL + "?" + "text=" + input
}
// function for errorHandler
function errorHandler(error){
    console.log("error occured", error);
}
function clickHandler() {

    var inputText = txtInput.value; // taking input 
    
    fetch(getTranslaterURL(inputText)) //calling server for processing the data
    .then(Response => Response.json())
    .then(json => {
                    var translatedText = json.contents.translated;
                    outputDiv.innerText = translatedText
                    }) // Getting output
    //shows error
    .catch(error)
    };
        btnTranslate.addEventListener("click", 
        clickHandler)


