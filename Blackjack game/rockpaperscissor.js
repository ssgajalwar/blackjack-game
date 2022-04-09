let hand1 = ["rock", "paper", "scissor"]
let hand2 = ["rock", "paper", "scissor"]
let randomHands = () => {
    let count = Math.floor(Math.random() * 3)
    let mount = Math.floor(Math.random() * 3)

    console.log("player 1 : " + hand1[count])
    console.log("player 2 : " + hand2[mount])

    if ((hand1[count] = "rock") && (hand2[mount] = "scissor")) {
        console.log("player 1 won the game")
    } else if ((hand1[count] = "scissor") && (hand2[mount] = "rock")) {
        console.log("player 2 won the game")
    } else if ((hand1[count] = "paper") && (hand2[mount] = "scissor")) {
        console.log("player 2 won the game")
    } else if ((hand1[count] = "scissor") && (hand2[mount] = "paper")) {
        console.log("player 1 won the game")
    } else if ((hand1[count] = "rock") && (hand2[mount] = "paper")) {
        console.log("player 2 won the game")
    } else if ((hand1[count] = "paper") && (hand2[mount] = "rock")) {
        console.log("player 1 won the game")
    } else {
        console.log("No one is winner,try next move")
    }

}
randomHands();