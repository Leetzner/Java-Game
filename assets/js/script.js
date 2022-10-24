//** This function makes the computer randomly selects between `rock`
 //`paper``scissor` `lizard``spock`**

function getComputerChoice(){
    const rpslsChoice = ['Rock', 'Paper', 'Scissor', 'Lizard', 'Spock']
    const randomNumber = Math.floor(Math.random()* 5)
    return rpslsChoice[randomNumber]
}


