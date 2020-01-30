function computerPlay(){
    let choices= ["rock", "paper", "scissors"];
    let choice = choices[Math.floor((Math.random()*3))];
    return choice;
}
function playRound(computerSelection, playerSelection){
    playerSelection=playerSelection.toLowerCase();
    switch(computerSelection){
        case "paper":
           if(playerSelection==="scissors") return "win";
           else if(playerSelection==="paper")return "draw";
           else return "loss";
           break;
        case "scissors":
            if(playerSelection==="scissors") return "draw";
           else if(playerSelection==="paper")return "loss";
           else return "win";
           break;
        case "rock":
            if(playerSelection==="scissors") return "loss";
           else if(playerSelection==="paper")return "win";
           else return "draw";
           break;
    }
}
function game(){
    let count=1, playerWins=0, computerWins=0;
    while(count<=5){
        playerSelection = window.prompt("Enter rock, paper or scissors!");
        if(/^(rock|paper|scissors)$/i.test(playerSelection)){
            let result = playRound(computerPlay(),playerSelection);
            if(result=="win")playerWins++;
            else if(result=="loss")computerWins++;
            console.log("Round "+count+" : "+result);
            count++;
        }
        else alert("Wrong input!");
    }
    console.log("Wins = "+playerWins);
}
game();