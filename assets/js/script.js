// updated when the computer or human wins
const totalScore = {computerScore :0, playerScore: 0}

// This function makes the computer randomly selects between `rock`
 // `paper``scissors` `lizard``spock`/

function getComputerChoice(){
    const rpslsChoice = ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
    const randomNumber = Math.floor(Math.random()* 5)
    return rpslsChoice[randomNumber]
    
}
// This function handle the results between Human and computer/

function getResults(playerChoice, computerChoice){

// Where computer and human draws, `score` is 0

    let score;
    if (playerChoice == computerChoice){
        score = 0
    } 
// Situations where human wins, score is 1
    // When rock wins
    else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Lizard'){
        score = 1
    }
    // When paper wins
    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Spock'){
        score = 1
    }
    // When Scissors wins
    else if (playerChoice == 'Scissors' && computerChoice == 'Lizard'){
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    } 
    // When Lizard wins
    else if (playerChoice == 'Lizard' && computerChoice == 'Spock'){
        score = 1
    }
    else if (playerChoice == 'Lizard' && computerChoice == 'Paper'){
        score = 1
    }
    // when Spock wins
    else if (playerChoice == 'Spock' && computerChoice == 'Rock'){
        score = 1
    }
    else if (playerChoice == 'Spock' && computerChoice == 'Scissors'){
        score = 1
    }
// The other situations computer wins    
    else {
        score = -1
    }
    return score
    
}
// updates the DOM to texts 'you lose!', 'it´s a tie!' or 'you win!'
function showResult(score, playerChoice, computerChoice){
    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')
        if(score == -1){
            resultDiv.innerText = 'You Lose!'    
        } else if (score == 0){
            resultDiv.innerText = "It´s a tie!"
        } else {
            resultDiv.innerText = 'You won!'
        }
        handsDiv.innerText = `${playerChoice} vs ${computerChoice}`
        playerScoreDiv.innerText = `Your Score: ${totalScore['playerScore']}`

    
}
// This funtion calculates who won and shows it on the site
function onClickRPSLS(playerChoice){
     console.log({playerChoice})
     const computerChoice = getComputerChoice()
     console.log({computerChoice})
     const score = getResults(playerChoice, computerChoice)
     totalScore['playerScore'] += score
     console.log({score})
     console.log(totalScore)
     showResult(score, playerChoice, computerChoice)
}

//This function plays the game and handles the clicks on buttons
function playGame(){

    const rpslsButtons = document.querySelectorAll('.rpslsButton')
    rpslsButtons[0].onclick = () => console.log(rpslsButtons[0].value)

    rpslsButtons.forEach(rpslsButton => {
        rpslsButton.onclick = () => onClickRPSLS(rpslsButton.value)
    })
    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
}
// This function clears the score and resets the game

function endGame(totalScore){
totalScore['playerScore'] = 0
totalScore['computerScore'] = 0

const resultDiv = document.getElementById('result')
const handsDiv = document.getElementById('hands')
const playerScoreDiv = document.getElementById('player-score')

resultDiv.innerText = ''
handsDiv.innerText = ''
playerScoreDiv.innerText = ''
}

playGame()
