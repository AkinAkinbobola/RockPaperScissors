let computerPlay = () =>{
    let randomNumber = (min,max) =>{
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    let inputs = ["Rock", "Paper", "Scissors"];
    return inputs[randomNumber(0, 2)];
};


let playRound = (playerSelection, computerSelection) =>{
    let player = playerSelection.toLowerCase();
    let comp = computerSelection().toLowerCase();
    
    if (player == comp) {
        return "Draw";
    }
    else if ( player == "rock" && comp == "paper"){
        return "You lose. Paper wraps Rock";
    }
    else if (player == "rock" && comp == "scissors"){
        return "You win. Rock smashes Scissors";
    }
    else if (player == "paper"&& comp == "scissors"){
        return "You lose. Scissors cuts Paper";
    }
    else if (player == "paper" && comp  == "rock"){
        return "You win. Paper wraps Rock";
    }
    else if (player == "scissors"  && comp  == "rock"){
        return "You lose. Rock smashes Scissors";
    }
    else if (player == "scissors"  && comp == "paper"){
        return "You win. Scissors cuts Paper";
    }
    else{
        return "Invalid";
    }
}

let playerScore = document.getElementById("player");
let compScore = document.getElementById("computer");

let game = (result) =>{
    if(/win/.test(result)){
        let score = Number(playerScore.innerText) + 1;
        playerScore.innerText = `${score}`;
        
    }else if (/lose/.test(result)){
        let score = Number(compScore.innerText) + 1;
        compScore.innerText = `${score}`
        }
    }

const choices = document.querySelectorAll("img");


choices.forEach(choice => choice.addEventListener("click", function(e){
    const userChoice = this.getAttribute("id");
    const round = playRound(userChoice, computerPlay);


    if(playerScore.innerText < 5 && compScore.innerText < 5){
        document.getElementById("winner").innerText = round;
        game(round);
    }
    
    if(playerScore.innerText == 5){
        document.getElementById("winner").innerText = "YOU BEAT THE BOT!!!";
    }else if(compScore.innerText == 5){
        document.getElementById("winner").innerText = "YOU LOST TO A BOT?!??!!";
    }

    
}));



