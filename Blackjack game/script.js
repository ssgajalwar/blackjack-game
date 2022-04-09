// create two variables ,firstcard and second card
//set their values to a random number between 2-11
//create a variable ,sum,and set it to the two cards
// if sum > 21 is worst case
// if sum = 21 is best case
// if sum < 21 is average case

let firstcard = getRandomCard();
let secondcard = getRandomCard();
let cards = [firstcard, secondcard];
let sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
//let sumEl =document.getElementById("sum-el")
//another method of selecting
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el");

let player= {
    Name: "Tony",
    Chips:145
};

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.Name + " : $ " + player.Chips;

function getRandomCard() {
    let randomNumber = Math.random();
    let randomint = Math.floor(randomNumber * 13);
    if (randomint === 1) {
        return randomint =  11;
    }else if( randomint == 11 || randomint == 12 || randomint == 13){
        return randomint = 10;
    } else {
        return randomint + 1;
    }
}

function startGame() {
    isAlive = true;
    let firstcard = getRandomCard();
    let secondcard = getRandomCard();
    cards [firstcard ,secondcard]
    sum = firstcard + secondcard;
    renderGame();
}

function renderGame() {
    //render out first card and second card
    cardsEl.textContent = "Cards : "
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    //render out all the card we have
    sumEl.textContent = "Sum :" + sum;
    if (sum <= 20) {
        message = "You are close, do you want to draw a new card";
    } else if (sum === 21) {
        message = "Hurray, you've got Blackjack!";
        hasBlackjack = true;
    } else {
    
        message = "Your bad luck, you're out of game, You cannot draw more cards";
        isAlive = false;
    }

    messageEl.textContent = message;
}

function newCard() {
   // console.log("Drawing a new card from the deck!");
   if ( isAlive === true && hasBlackjack === false){
    let card = getRandomCard();
    sum += card;
    cards.push(card)
    renderGame();
   } 


   
    // sum = sum + card;
    // if(sum >=22 ){
    //   document.getElementById("newCard").disabled = true;
    // }else{
    // cards.push(card);
    // }
    // console.log(cards);
    // renderGame();
}