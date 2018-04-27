var score1  = document.getElementById("score1");
var score2  = document.getElementById("score2");
var limit = document.getElementById("limit");
var input = document.querySelector("#input");
var winningScore = 5;
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var player1 = 0;
var player2 = 0;
var commonMethods={


    addScore :  function(player , element){
        console.log("function called"+ player)
        player++;
        element.textContent = player.toString();
        return player;
    },

    reset : function () {
        player1 =0;
        player2 =0;
        score1.textContent = player1.toString();
        score2.textContent = player2.toString();
        score1.classList.remove("winner");
        score2.classList.remove("winner");
        winningScore = 5;
        limit.textContent = winningScore.toString();
    },

    scoreCheck : function(p1, p2){
        if(p1< winningScore && p2 < winningScore)
            return true;
        else
            return false;
    },

    changeWinningScore : function() {
       winningScore = input.value;
       limit.textContent = input.value;
    }

};



button1.addEventListener("click", function(){
    if(commonMethods.scoreCheck(player1, player2)) {
        player1 = commonMethods.addScore(player1, score1);
        console.log(player1);
    }
    if(player1 == winningScore){
    score1.classList.add("winner");
}

});

button2.addEventListener("click", function(){
    if(commonMethods.scoreCheck(player1, player2)) {
        player2 = commonMethods.addScore(player2, score2);
        console.log(player2);
    }
    if(player2 == winningScore) {
        score2.classList.add("winner");
    }
});

button3.addEventListener("click", function(){
    commonMethods.reset();
})

input.addEventListener("change", function() {
    commonMethods.changeWinningScore();
})



