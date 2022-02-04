var container1 = document.getElementById("container1");

var cardsHTML = "";

// Create masked cards
for (let i=1; i<13; i++){
    
    if((i-1)%4 == 0 || i==1){
        cardsHTML += "<div class='row'>";
    }

    cardsHTML += "<div id='" + 1;
    if(i<10){
        cardsHTML += "-0" + i;
    }
    else{
        cardsHTML += "-" + i;
    }
    
    cardsHTML += "' class='card'></div>"

    // Close row
    if(i%4 == 0){
        cardsHTML += "</div>";
    }
}


container1.innerHTML = cardsHTML;

var card = document.getElementsByClassName("card");
// card = document.getElementsByTagName("div");

for(let i=0; i<card.length; i++){
    // Get card ID
    let idCard = "";
    idCard = i<9 ? "1-0"+(i+1):"1-"+(i+1);
    let area = document.getElementById(idCard);
    revealCardId(area, i+1);

    // Reveal a card
    if(typeof pickRandomNumber(area) != "undefined"){
        console.log(ok);
        pickRandomNumber(area);
    }
}

function revealCardId(clickedArea, cardNumber){
    clickedArea.addEventListener("click", function(){
        return cardNumber;
    })
}

// Random generator
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}

// document.getElementsByClassName("card")[0].classList.add("red")
function pickRandomNumber(clickedArea){
    clickedArea.addEventListener("click", function(){
        if(clickedArea.innerText == ""){
            console.log("cocorico");
            let pickedNumber = getRandomIntInclusive(-2, 12);
            addColor(clickedArea, pickedNumber);
            return clickedArea.innerHTML = pickedNumber;
        }
    })
}

// Stack management
var stackArea = document.getElementById("stack");
var stackGlobalArea = stackArea.parentNode;
var stackPicked = document.createElement('div');
stackPicked.id = "stack-picked";
stackPicked.innerText = "Pi";
stackArea.after(stackPicked);


// Create stack card revealed area
var stackCardRevealed = document.getElementById("stack-picked");

function pickCardInStack(){
    stackArea.addEventListener("click", function(){
            let pickedNumber = getRandomIntInclusive(-2, 12);
            addColor(stackCardRevealed, pickedNumber);
            return stackCardRevealed.innerHTML = pickedNumber;
    })
}

pickCardInStack();

function addColor(area, pickedNumber){
            // area.classList.remove("red", "yellow", "green", "blue", "purple");
            // // console.log(pickedNumber);
            // if(pickedNumber>8){
            //     area.classList.add("red");
            // }
            // else if(pickedNumber>4){
            //     area.classList.add("yellow");
            // }
            // else if(pickedNumber > 0){
            //     area.classList.add("green");
            // }
            // else if(pickedNumber === 0){
            //     area.classList.add("blue");
            // }
            // else if(pickedNumber < 0){
            //     area.classList.add("purple");
            // }
}

// When clicking on stack revealed card (then white border on this card) and on a set card, replace that set card value by the stack revealed card
// And put to the discard the value of the selected set card
var valueSelected;
function getStackCardValue(){
    // console.log(stackCardRevealed.innerText);
    if(stackCardRevealed != "undefined" && stackCardRevealed.innerText != "Pi"){
        valueSelected = parseInt(stackCardRevealed.innerText);
        stackCardRevealed.classList.add("selected-card");
        // console.log(valueSelected);
        return valueSelected;

    }
}
// stackCardRevealed.addEventListener("click", getStackCardValue);

// console.log(valueSelected);
function chooseSetCard(clickedArea){
    console.log(clickedArea);
    clickedArea.addEventListener("click", function(){
        var value = getStackCardValue();
        console.log(value);

        for(let i=0; i<card.length; i++){
            console.log(value);
            // Get card ID
            let idCard = "";
            idCard = i<9 ? "1-0"+(i+1):"1-"+(i+1);
            let area = document.getElementById(idCard);
            replaceSetCardValue(area, value);
        }
    });
}

function replaceSetCardValue(cardToReplace, cardReplacing){
    cardToReplace.addEventListener("click", function(){
        // console.log("cardreplacing:" + cardReplacing.innerText);
        cardToReplace.innerText = cardReplacing;
        // console.log(cardReplacing.innerText);
        addColor(cardToReplace, cardReplacing.innerText);
        stackPicked.innerText = "";
        addColor(stackPicked, "");
    })
}

chooseSetCard(stackPicked);

// chooseSetCard(document.getElementsByClassName("card")[0]);

// document.getElementsByClassName("card")[0].innerText = 9;

// Actions:
// - Choisir un nb au hasard
// - Remplacer la valeur d'une carte par un nb choisi au hasard
// - Remplacer la valeur d'une carte par la valeur de celle du stack (si elle n'a pas encore été choisie)
// - Remplacer la valeur d'une carte par la valeur de celle de la défausse (si elle n'a pas encore été choisie) et découvrir la précédente mise à la défausse
// - 


// Conditions
// - Si clic sur set sans avoir sélectionné stack card : random
// - Si clic sur stack non révélé : random
// - Si clic sur set après avoir sélectionné stack card ou discard card : attribue valeur et couleur de stack card / discard card
// Et dump valeur et couleur de stack card
// Et affiche précédente carte de discard
