var resetbtn = document.getElementById("reset");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");
var blocks = document.getElementsByClassName("block");
var rgb = document.getElementById("rgb");
var header = document.getElementById("header");
var banner = document.getElementById("banner");
var numOfBlocks = 6;
var colorGameFuncs = {};
var winningColor;



colorGameFuncs.init = function(){
    this.reset();
};

// assigns color to the blocks
colorGameFuncs.assignColors = function(divBlocks){
    var colorList = this.generateColorCode();
   console.log("color list  : " + colorList.length);
    winningColor = this.getWinningColor(colorList);
   for(var i =0 ; i < divBlocks.length ; i++) {
       if (colorList[i]) {
           divBlocks[i].style.backgroundColor = colorList[i];
               divBlocks[i].addEventListener("click", function () {
                  console.log( winningColor + "   :   " + this.style.backgroundColor);
                   if (winningColor === this.style.backgroundColor) {
                       header.style.backgroundColor = this.style.backgroundColor;
                       banner.textContent = "You Win";
                       colorGameFuncs.changeColorToWinning();
                   }
                   else {
                       this.style.backgroundColor = "white";
                       banner.textContent = "Try Again";
                   }
               });
               divBlocks[i].style.display = "block";
       }
       else
       {
           divBlocks[i].style.display = "none";
       }
   }
};


// generate random colors
colorGameFuncs.generateColorCode = function() {
    var colorList= [];
    for(var i=0 ; i<numOfBlocks  ; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        //  console.log("rgb( "+r+", "+g+", "+b+" )");
        // rgb(r, g, b)
        colorList.push("rgb(" + r + ", " + g + ", " + b + ")");
    }
    return colorList;
};

// set winning colors
colorGameFuncs.getWinningColor =  function(divBlocks){

    var i = Math.floor(Math.random() * divBlocks.length);
    return divBlocks[i];
};

// reset function
colorGameFuncs.reset = function(){

    this.assignColors(blocks);

   // console.log(winningColor);
    rgb.textContent = winningColor;
    banner.textContent = " ";
    header.style.backgroundColor = "khaki";

};


colorGameFuncs.changeColorToWinning = function(){
    for(var i =0 ; i< blocks.length ; i++){
        blocks[i].style.backgroundColor = winningColor;
    }
};

// set mode between hard and easy
colorGameFuncs.setmode = function(mode){
    mode === "hard" ? numOfBlocks=6 : numOfBlocks =3;

};


// new button functionality
resetbtn.addEventListener("click", function(){

    colorGameFuncs.reset();

});


// hard button functionality
hard.addEventListener("click", function () {
     colorGameFuncs.setmode("hard");
     hard.classList.add('selected');
     easy.classList.remove('selected');
     colorGameFuncs.reset();
})

easy.addEventListener("click", function () {
    colorGameFuncs.setmode("easy");
    easy.classList.add('selected');
    hard.classList.remove('selected');
    colorGameFuncs.reset();
})



colorGameFuncs.init();