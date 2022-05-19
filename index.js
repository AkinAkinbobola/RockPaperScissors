let computerPlay = () =>{
    let randomNumber = (min,max) =>{
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    let inputs = ["Rock", "Paper", "Scissors"];
    return inputs[randomNumber(0, 2)];
};

let player = () =>{
    let randomNumber = (min,max) =>{
        return Math.floor(Math.random()*(max-min+1)+min);
    };
    let inputs = ["Rock", "Paper", "Scissors"];
    return inputs[randomNumber(0, 2)];
};

let playRound = (computerSelection) =>{
    // let player = playerSelection().toLowerCase();
    let player = prompt("Enter rock, paper or scissors: ").toLowerCase();
    let comp = computerSelection().toLowerCase();
    
    if (player == comp) {
        alert("Draw");
        return "Draw";
    }
    else if ( player == "rock" && comp == "paper"){
        alert("You lose. Paper wraps Rock");
        return "You lose. Paper wraps Rock";
    }
    else if (player == "rock" && comp == "scissors"){
        alert("You win. Rock smashes Scissors");
        return "You win. Rock smashes Scissors";
    }
    else if (player == "paper"&& comp == "scissors"){
        alert("You lose. Scissors cuts Paper");
        return "You lose. Scissors cuts Paper";
    }
    else if (player == "paper" && comp  == "rock"){
        alert("You win. Paper wraps Rock");
        return "You win. Paper wraps Rock";
    }
    else if (player == "scissors"  && comp  == "rock"){
        alert("You lose. Rock smashes Scissors");
        return "You lose. Rock smashes Scissors";
    }
    else if (player == "scissors"  && comp == "paper"){
        alert("You win. Scissors cuts Paper");
        return "You win. Scissors cuts Paper";
    }
    else{
        return "Invalid";
    }
}



let game = () =>{
    let playerCount = 0;
    let compCount = 0;


    while (playerCount < 5 && compCount < 5){
        let result = playRound(computerPlay);

        if(/win/.test(result)){
            playerCount += 1;
        }
        else if (/lose/.test(result)){
            compCount += 1;
        }


        document.writeln(`<p>${result} <br> Player: ${playerCount} Computer: ${compCount} <br></p>`);

    }

    if(playerCount == 5){
        document.getElementById("winner").innerText = "You are the winner!";
    }
    else{
        document.getElementById("winner").innerText = "Computer is the winner!";
    }
}
// game();