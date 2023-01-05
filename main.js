function getComputerChoice(){
    let choice = ["rock", "paper", "scissors"];
    return choice[Math.floor(Math.random()*choice.length)]

}

function playRound(playerSelection, computerSelection){
    let playerSelectionlowercase = playerSelection.toLowerCase();

    if (computerSelection == "rock" && playerSelection == "scissors")
        {
            return "You lose! Rock beats Scissors" ;
        }
    else if (computerSelection == "rock" && playerSelection == "paper")
        {
            return "You Win! Paper beats Rock"
        }
    else if (computerSelection == "paper" && playerSelection == "scissors")
        {
            return "You Win! Scissors beats Paper";
        }
    else if (computerSelection == "paper" && playerSelection == "rock")
        {
            return "You Lose! Paper beats Rock";
        }
    else if (computerSelection == "scissors" && playerSelection == "rock")
        {
            return "You win! Rock beats Scissors";
        }
    else if (computerSelection == "scissors" && playerSelection == "paper")
        {
            return "You Lose! Scissors beats Paper";
        }
    else if (computerSelection == playerSelection)
        {
            return "It is a draw!";
        }
    }

    function game(){
        let playerScore = 0
        let computerScore = 0
        for (let i = 0; i < 5; i++) {
            let playerSelection = prompt("Enter rock paper or scissors: ");
            let computerSelection = getComputerChoice();
            let results = playRound(playerSelection, computerSelection);
            if (results.includes("You Win!")){
                playerScore += 1;
            }
            else if (results.includes("You Lose!")){
                computerScore += 1;
            }
        }
        console.log(playerScore);
        console.log(computerScore);
    }

game()
