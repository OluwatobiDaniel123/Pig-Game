/*********************DICE GAME JS***************************** */
let scores ,roundScores ,activePlayer, gamePlaying;

init();

let lastdice_1 , lastdice_2;

document.querySelector(" .btn-roll").addEventListener("click", function() {
    if (gamePlaying ) {
        // random number
        let dice_1 = Math.floor(Math.random() * 6) + 1;
        let dice_2 = Math.floor(Math.random() * 6) + 1;

        //display the result
        let diceDOM_1 = document.querySelector("#dice-1");
        let diceDOM_2 = document.querySelector("#dice-2");

        diceDOM_1.style.display = "block";
        diceDOM_2.style.display = "block";

        diceDOM_1.src = "dice-" + dice_1 + ".png";
        diceDOM_2.src = "dice-" + dice_2 + ".png";

    // update the round score if the rolled number was not 
        if (dice_1 == 6 && lastdice_1 == 6 || dice_2 ==6 && lastdice_2 == 6){
            scores[activePlayer] = 0;
            document.querySelector("#score-" + activePlayer).textContent = "0";
            nextplayer()
        }else if (dice_1 !== 1 && dice_2 !== 1 ) {
            // add score first
            roundScores += dice_1 + dice_2;
            // update the round score 
            document.getElementById("current-" + activePlayer).textContent = roundScores;
            } else {
                nextplayer();  
            }
            lastdice_1 = dice_1;
            lastdice_2 = dice_2;
        }
    }
);
  

document.querySelector(".btn-hold").addEventListener("click" , function() {
    if (gamePlaying) {
            // add the current score to the GLOBAL
    scores[activePlayer] += roundScores;
    // update the score
    document.querySelector("#score-" + activePlayer).textContent = scores[activePlayer];
    let = input = document.querySelector(" .final-score").value;

    if (input) {
        winning_score = input;
    } else {
        winning_score = 100;
    }
    
    // check if player have won the game 
    if (scores [activePlayer] >= winning_score) {
        document.querySelector("#name-" + activePlayer).textContent = "WINNER";
        document.querySelector("#dice-1").style.display = "none";
        document.querySelector("#dice-2").style.display = "none";
        document.querySelector(" .player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(" .player-" + activePlayer + "-panel").classList.remove("active");
        gamePlaying = false;
    } else{
        // next palyer
    nextplayer();
    }
    }
})


document.querySelector(" .btn-new").addEventListener("click", function() {
    init();
})

function nextplayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    //reset the round score back to zero
    roundScores = 0
    document.getElementById("current-0").textContent = roundScores;
    document.getElementById("current-1").textContent = roundScores;
    document.querySelector(" .player-0-panel").classList.toggle("active");
    document.querySelector(" .player-1-panel").classList.toggle("active");
    document.querySelector(" #dice-1").style.display = "none"; 
    document.querySelector(" #dice-2").style.display = "none";
}

function init() {
    scores = [0,0];
    roundScores = 0;
    activePlayer = 0;

    document.getElementById("score-0").textContent = "0";
    document.getElementById("score-1").textContent = "0";
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";
    document.querySelector(" #dice-1").style.display = "none";
    document.querySelector(" #dice-2").style.display = "none";
    document.getElementById("name-0").textContent = "Player 1";
    document.getElementById("name-1").textContent = "Player 2";
    document.querySelector(" .player-0-panel").classList.remove("winner");
    document.querySelector(" .player-1-panel").classList.remove("winner");
    document.querySelector(" .player-0-panel").classList.remove("active");
    document.querySelector(" .player-1-panel").classList.remove("active");
    document.querySelector(" .player-0-panel").classList.add("active");
    input = "0";
    document.querySelector(" .final-score").value = ""
    gamePlaying = true;
}
























