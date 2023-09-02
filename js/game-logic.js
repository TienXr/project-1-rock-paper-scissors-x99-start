// All code should be written in this file.

// player one global variables
let playerOneMoveOneType = undefined;
let playerOneMoveTwoType = undefined;
let playerOneMoveThreeType = undefined;
let playerOneMoveOneValue = undefined;
let playerOneMoveTwoValue = undefined;
let playerOneMoveThreeValue = undefined;

// player two global variables
let playerTwoMoveOneType = undefined;
let playerTwoMoveTwoType = undefined;
let playerTwoMoveThreeType = undefined;
let playerTwoMoveOneValue = undefined;
let playerTwoMoveTwoValue = undefined;
let playerTwoMoveThreeValue = undefined;
const validMoves = ["rock", "paper", "scissors"]

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (validMoves.includes(moveOneType) && validMoves.includes(moveTwoType) && validMoves.includes(moveThreeType) && moveOneType && moveOneValue && moveTwoType && moveTwoValue && moveThreeType && moveThreeValue) {
        if (player == "Player One" && moveOneValue > 0 && moveTwoValue > 0 && moveThreeValue > 0 && moveOneValue < 100 && moveTwoValue < 100 && moveThreeValue < 100 && (moveOneValue + moveTwoValue + moveThreeValue) < 100) {    
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;
        } else if (player == "Player Two" && moveOneValue > 0 && moveTwoValue > 0 && moveThreeValue > 0 && moveOneValue < 100 && moveTwoValue < 100 && moveThreeValue < 100 && (moveOneValue + moveTwoValue + moveThreeValue) < 100) {
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
        }
    }
   
}

function getRoundWinner(round) {
    if (round == 1 && playerOneMoveOneType && playerTwoMoveOneType && playerOneMoveOneValue && playerTwoMoveOneValue) {
        if (playerOneMoveOneType == playerTwoMoveOneType) {
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One'
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                return 'Player Two'
            } else {
                return 'Tie'
            }
        } else if (playerOneMoveOneType == "rock" && playerTwoMoveOneType == "scissors") {
            return "Player One"
        } else if (playerOneMoveOneType == "rock" && playerTwoMoveOneType == "paper") {
            return "Player Two"
        } else if (playerOneMoveOneType == "scissors" && playerTwoMoveOneType == "paper") {
            return "Player One"
        } else if (playerOneMoveOneType == "scissors" && playerTwoMoveOneType == "rock") {
            return "Player Two"
        } else if (playerOneMoveOneType == "paper" && playerTwoMoveOneType == "rock") {
            return "Player One"
        } else if (playerOneMoveOneType == "paper" && playerTwoMoveOneType == "scissors") {
            return "Player Two"
        } 
    } else if (round == 2 && playerOneMoveTwoType && playerTwoMoveTwoType && playerOneMoveTwoValue && playerTwoMoveTwoValue) {
        if (playerOneMoveTwoType == playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One'
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                return 'Player Two'
            } else {
                return 'Tie'
            }
        } else if (playerOneMoveTwoType == "rock" && playerTwoMoveTwoType == "scissors") {
            return "Player One"
        } else if (playerOneMoveTwoType == "rock" && playerTwoMoveTwoType == "paper") {
            return "Player Two"
        } else if (playerOneMoveTwoType == "scissors" && playerTwoMoveTwoType == "paper") {
            return "Player One"
        } else if (playerOneMoveTwoType == "scissors" && playerTwoMoveTwoType == "rock") {
            return "Player Two"
        } else if (playerOneMoveTwoType == "paper" && playerTwoMoveTwoType == "rock") {
            return "Player One"
        } else if (playerOneMoveTwoType == "paper" && playerTwoMoveTwoType == "scissors") {
            return "Player Two"
        } 
    } else if (round == 3 && playerOneMoveThreeType && playerTwoMoveThreeType && playerOneMoveThreeValue && playerTwoMoveThreeValue) {
        if (playerOneMoveThreeType == playerTwoMoveThreeType && validMoves.includes(playerOneMoveThreeType) && validMoves.includes(playerTwoMoveThreeType)) {
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One'
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                return 'Player Two'
            } else {
                return 'Tie'
            }
        } else if (playerOneMoveThreeType == "rock" && playerTwoMoveThreeType == "scissors") {
            return "Player One"
        } else if (playerOneMoveThreeType == "rock" && playerTwoMoveThreeType == "paper") {
            return "Player Two"
        } else if (playerOneMoveThreeType == "scissors" && playerTwoMoveThreeType == "paper") {
            return "Player One"
        } else if (playerOneMoveThreeType == "scissors" && playerTwoMoveThreeType == "rock") {
            return "Player Two"
        } else if (playerOneMoveThreeType == "paper" && playerTwoMoveThreeType == "rock") {
            return "Player One"
        } else if (playerOneMoveThreeType == "paper" && playerTwoMoveThreeType == "scissors") {
            return "Player Two"
        } 
    } 
    return null;
}

function getGameWinner() {
    let playerOneWin = 0
    let playerTwoWin = 0

    if (getRoundWinner(1) == null || getRoundWinner(2) == null || getRoundWinner(3) == null) {
        return null
    }

    if (getRoundWinner(1) == "Player One") {
        playerOneWin += 1
    } else if (getRoundWinner(1) == "Player Two") {
        playerTwoWin += 1
    }

    if (getRoundWinner(2) == "Player One") {
        playerOneWin += 1
    } else if (getRoundWinner(2) == "Player Two") {
        playerTwoWin += 1
    }

    if (getRoundWinner(3) == "Player One") {
        playerOneWin += 1
    } else if (getRoundWinner(3) == "Player Two") {
        playerTwoWin += 1
    }

    if (playerOneWin == playerTwoWin) {
        return "Tie"
    } else if (playerOneWin > playerTwoWin) {
        return "Player One"
    } else {
        return "Player Two"
    }
}

function setComputerMoves() {
    const randomMoveOneType = validMoves[Math.floor(Math.random() * (3 - 0) + 0)]
    const randomMoveTwoType = validMoves[Math.floor(Math.random() * (3 - 0) + 0)]
    const randomMoveThreeType = validMoves[Math.floor(Math.random() * (3 - 0) + 0)]
    console.log(randomMoveOneType)
    console.log(randomMoveTwoType)
    console.log(randomMoveThreeType)
    let total = 99
    const randomMoveOneValue = Math.floor(Math.random() * (total + 1 - 1) + 1)
    total -= randomMoveOneValue
    const randomMoveTwoValue = Math.floor(Math.random() * (total + 1 - 1) + 1)
    total -= randomMoveTwoValue
    const randomMoveThreeValue = Math.floor(Math.random() * (total + 1 - total) + total)

    setPlayerMoves("Player Two", randomMoveOneType, randomMoveOneValue, randomMoveTwoType, randomMoveTwoValue, randomMoveThreeType, randomMoveThreeValue)
}