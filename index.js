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

let playerCount = 0;
let compCount = 0;
let playerScore = document.getElementById("player");
let compScore = document.getElementById("computer");

let game = (result) =>{
    if(/win/.test(result)){
        playerCount += 1;
        playerScore.innerText = `${playerCount}`
        
    }else if (/lose/.test(result)){
        compCount += 1;
        compScore.innerText = `${compCount}`
        }
    }

    


const choices = document.querySelectorAll("img");


choices.forEach(choice => choice.addEventListener("click", function(e){
    const userChoice = this.getAttribute("id");
    const round = playRound(userChoice, computerPlay);
    document.getElementById("winner").innerText = round;
    const roundRes = round;
    game(roundRes);


    // if(playerScore.innerText < 5 && compScore < 5){
    //     document.getElementById("winner").innerText = round;
    // }
    // else if(playerScore.innerText == 5){
    //     document.getElementById("winner").innerText = "You are the winner!";
    // }
    // else if (compScore.innerText == 5){
    //     document.getElementById("winner").innerText = "Computer is the winner!";
    // }else{
    //     playerScore.innerText = 0;
    //     compScore.innerText = 0;
    // }
}))


