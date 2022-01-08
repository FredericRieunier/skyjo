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
card = document.getElementsByTagName("div");
console.log(card);


for(let i=0; i<card.length; i++){
    card[i].addEventListener("click", function(){revealCard(i)});
}

function revealCard(cardNumber){

    alert(cardNumber);
}