function computerPlay(){
    let choices= ["rock", "paper", "scissors"];
    let choice = choices[Math.floor((Math.random()*3))];
    return choice;
}

function playRound(computerSelection, playerSelection){
        if((playerSelection==="rock"&&computerSelection==="scissors")
                    ||(playerSelection==="paper"&&computerSelection=="rock")
                    ||(playerSelection==="scissors"&&computerSelection==="paper")){
            return "win";
        }
        else if(playerSelection==="rock"&&computerSelection==="paper"
                    ||playerSelection==="paper"&&computerSelection==="scissors"
                    ||playerSelection==="scissors"&&computerSelection==="rock"){
            return "loss";
       }
       else return "draw";
}

function playerInput(){
    while(true){
        let playerSelection = window.prompt("Enter rock, paper, or scissors!");
        if(/^(rock|paper|scissors)$/i.test(playerSelection)){
            return playerSelection;
        }
        else alert("Wrong input! Enter again.");
    }
}

function game(){
    let count=1, playerWins=0, computerWins=0; var result;
    while(count<=5){
        playerSelection = playerInput();
        result = playRound(computerPlay(),playerSelection);
        if(result=="loss")computerWins++;
        else if(result=="win")playerWins++;
        console.log(`Round ${count} : ${result}`);
        count++;
    }
    console.log(`Final Score => Computer ${computerWins} : ${playerWins} Player`);
    result = (playerWins > computerWins)?"You win!"
            :(playerWins == computerWins)?"It's a tie!"
            :"You lose.";
    console.log(result);
}

game();