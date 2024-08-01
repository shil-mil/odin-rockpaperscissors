let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    
    if (num <= 0.333) {
        return "rock";
    } else if (num > 0.333 && num <= 0.666) {
        return "paper";
    }  
        return "scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose: rock, paper, or scissors?");
    let c = choice.toLowerCase();
    if(c !== "rock" || c !== "paper" || c !== "scissors" || choice == "" || choice == " " || choice == null) {
        console.log("Invalid input. Try again!")
        getHumanChoice();
    }
    return c;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors") {
        console.log("You chose the same thing!");
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            console.log("You lose! Paper beats rock!");
            computerScore++;
        } else {
            console.log("You win! Rock beats scissors!");
            humanScore++;
        } 
    } else if (humanChoice == "paper") {
        if (computerChoice =="rock") {
            console.log("You win! Rock beats paper!");
            humanScore++;
        } else {
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "paper") {
            console.log("You win! Scissors beats paper!");
            humanScore++;
        } else {
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
