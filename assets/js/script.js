//** This function makes the computer randomly selects between `rock`
 // `paper``scissor` `lizard``spock`/

function getComputerChoice(){
    const rpslsChoice = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock']
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

    else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }
    else if (playerChoice == 'Rock' && computerChoice == 'Lizard'){
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }
    else if (playerChoice == 'Paper' && computerChoice == 'Spock'){
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    }
    else if (playerChoice == 'Scissors' && computerChoice == 'Lizard'){
        score = 1
    } 
    else if (playerChoice == 'Lizard' && computerChoice == 'Spock'){
        score = 1
    }
    else if (playerChoice == 'Lizard' && computerChoice == 'Paper'){
        score = 1
    }
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

