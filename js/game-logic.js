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

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (player == "Player One" && moveOneType && moveOneValue && moveTwoType && moveTwoValue && moveThreeType && moveThreeValue) {
        playerOneMoveOneType = moveOneType;
        playerOneMoveTwoType = moveTwoType;
        playerOneMoveThreeType = moveThreeType;
        playerOneMoveOneValue = moveOneValue;
        playerOneMoveTwoValue = moveTwoValue;
        playerOneMoveThreeValue = moveThreeValue;
    } else if (player == "Player Two" && moveOneType && moveOneValue && moveTwoType && moveTwoValue && moveThreeType && moveThreeValue) {
        playerTwoMoveOneType = moveOneType;
        playerTwoMoveTwoType = moveTwoType;
        playerTwoMoveThreeType = moveThreeType;
        playerTwoMoveOneValue = moveOneValue;
        playerTwoMoveTwoValue = moveTwoValue;
        playerTwoMoveThreeValue = moveThreeValue;
    }
}

function getRoundWinner(round) {
    if (round == 1) {
        if (playerOneMoveOneType == playerTwoMoveOneType) {
            if (playerOneMoveOneValue > playerTwoMoveOneValue) {
                return 'Player One'
            } else if (playerOneMoveOneValue < playerTwoMoveOneValue) {
                return 'Player Two'
            } else {
                return 'Tie'
            }
        } else if (playerOneMoveOneType == "Rock" && playerTwoMoveOneType == "Scissors") {
            return "Player One"
        } else if (playerOneMoveOneType == "Rock" && playerTwoMoveOneType == "Paper") {
            return "Paper Two"
        } else if (playerOneMoveOneType == "Scissors" && playerTwoMoveOneType == "Paper") {
            return "Paper One"
        } else if (playerOneMoveOneType == "Scissors" && playerTwoMoveOneType == "Rock") {
            return "Player Two"
        } else if (playerOneMoveOneType == "Paper" && playerTwoMoveOneType == "Rock") {
            return "Player One"
        } else if (playerOneMoveOneType == "Paper" && playerTwoMoveOneType == "Scissors") {
            return "Player Two"
        } 
    } else if (round == 2) {
        if (playerOneMoveTwoType == playerTwoMoveTwoType) {
            if (playerOneMoveTwoValue > playerTwoMoveTwoValue) {
                return 'Player One'
            } else if (playerOneMoveTwoValue < playerTwoMoveTwoValue) {
                return 'Player Two'
            } else {
                return 'Tie'
            }
        } else if (playerOneMoveTwoType == "Rock" && playerTwoMoveTwoType == "Scissors") {
            return "Player One"
        } else if (playerOneMoveTwoType == "Rock" && playerTwoMoveTwoType == "Paper") {
            return "Paper Two"
        } else if (playerOneMoveTwoType == "Scissors" && playerTwoMoveTwoType == "Paper") {
            return "Paper One"
        } else if (playerOneMoveTwoType == "Scissors" && playerTwoMoveTwoType == "Rock") {
            return "Player Two"
        } else if (playerOneMoveTwoType == "Paper" && playerTwoMoveTwoType == "Rock") {
            return "Player One"
        } else if (playerOneMoveTwoType == "Paper" && playerTwoMoveTwoType == "Scissors") {
            return "Player Two"
        } 
    } else if (round == 3) {
        if (playerOneMoveThreeType == playerTwoMoveThreeType) {
            if (playerOneMoveThreeValue > playerTwoMoveThreeValue) {
                return 'Player One'
            } else if (playerOneMoveThreeValue < playerTwoMoveThreeValue) {
                return 'Player Two'
            } else {
                return 'Tie'
            }
        } else if (playerOneMoveThreeType == "Rock" && playerTwoMoveThreeType == "Scissors") {
            return "Player One"
        } else if (playerOneMoveThreeType == "Rock" && playerTwoMoveThreeType == "Paper") {
            return "Paper Two"
        } else if (playerOneMoveThreeType == "Scissors" && playerTwoMoveThreeType == "Paper") {
            return "Paper One"
        } else if (playerOneMoveThreeType == "Scissors" && playerTwoMoveThreeType == "Rock") {
            return "Player Two"
        } else if (playerOneMoveThreeType == "Paper" && playerTwoMoveThreeType == "Rock") {
            return "Player One"
        } else if (playerOneMoveThreeType == "Paper" && playerTwoMoveThreeType == "Scissors") {
            return "Player Two"
        } 
    }
}