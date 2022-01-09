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
    
    cardsHTML += "' class='card'>X</div>"

    // Close row
    if(i%4 == 0){
        cardsHTML += "</div>";
    }
}


container1.innerHTML = cardsHTML;

var card = document.getElementsByClassName("card");
// card = document.getElementsByTagName("div");

// Get card ID
for(let i=0; i<card.length; i++){
    let idCard = "";
    idCard = i<9 ? "1-0"+(i+1):"1-"+(i+1);
    let area = document.getElementById(idCard);
    revealCardId(area, i+1);

    if(typeof pickRandomNumber(area) != "undefined"){
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
        if(clickedArea.innerText == "X"){
            let pickedNumber = getRandomIntInclusive(-2, 12);
            if(pickedNumber>8){
                clickedArea.classList.add("red");
            }
            else if(pickedNumber>4){
                clickedArea.classList.add("yellow");
            }
            else if(pickedNumber > 0){
                clickedArea.classList.add("green");
            }
            else if(pickedNumber == 0){
                clickedArea.classList.add("blue");
            }
            else{
                clickedArea.classList.add("purple");
            }
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
            stackCardRevealed.classList.remove("red", "yellow", "green", "blue", "purple");
            if(pickedNumber>8){
                stackCardRevealed.classList.add("red");
            }
            else if(pickedNumber>4){
                stackCardRevealed.classList.add("yellow");
            }
            else if(pickedNumber > 0){
                stackCardRevealed.classList.add("green");
            }
            else if(pickedNumber == 0){
                stackCardRevealed.classList.add("blue");
            }
            else{
                stackCardRevealed.classList.add("purple");
            }
            return stackCardRevealed.innerHTML = pickedNumber;
    })
}

pickCardInStack();

// When clicking on stack revealed card (then white border on this card) and on a set card, replace that set card value by the stack revealed card
// And put to the discard the value of the selected set card
var valueSelected;
stackCardRevealed.addEventListener("click", function(){
    valueSelected = parseInt(stackCardRevealed.innerText);
    stackCardRevealed.classList.add("selected-card");
    console.log(typeof valueSelected);
});

function replaceSetCardValue(clickedArea, value){
    console.log(value);
    console.log(clickedArea);
    clickedArea.addEventListener("click", function(){
        // if(typeof value == "number"){
            console.log(value);
            console.log(document.getElementsByClassName("card")[0]);
            return clickedArea.innerText == value;
        // }
    });
}
replaceSetCardValue(document.getElementsByClassName("card")[0], 7);
