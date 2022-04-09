let myDice = () => {
    let randomNumber = Math.random();
    let randomDiceValue = Math.floor(randomNumber * 6) + 1;
    console.log(randomDiceValue);
}
myDice();