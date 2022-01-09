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

function pickRandomNumber(clickedArea){
    clickedArea.addEventListener("click", function(){
        console.log(getRandomIntInclusive(-2, 12));
        return clickedArea.innerHTML = getRandomIntInclusive(-2, 12);
    })
}
