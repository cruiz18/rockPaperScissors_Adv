var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    var options = ["rock", "paper", "scissors"];
    var pickOption = Math.floor(Math.random()*3);
    console.log(pickOption);
    return options[pickOption];
}
// This function picks the winner
function pickWinner(userValue, aiValue) {
    if(userValue==aiValue){
        return "draw";
    }
    else if (aiValue=="paper" && userValue=="rock"){
        return "ai";
    }
    
    else if(aiValue== "rock" && userValue=="scissors"){
        return "ai";
    }
    else { 
        return "user";
    }
    
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
}

// This function sets the scoreboard with the correct points
function setScore() {
    $("#userPoint").text(userPoint);
    $("#aiPoint").text(aiPoint);
}

function restartGame(){
    userPoint=0;
    aiPoint=0;
    setScore();
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won! Click a box to play again');
        userPoint++;
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost! Click a box to play again');
        aiPoint++;
    }
    setScore();
}



// This function runs on page load
$(document).ready(function(){
    $(".token").click(function(evt){
        evaluate(evt);
    });
    
   $("#restart").click(function(){
    restartGame();
}); 
    
});





//Added a background and started to add a restart button 

