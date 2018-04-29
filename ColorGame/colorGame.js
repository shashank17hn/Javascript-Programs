var resetbtn = document.getElementById("reset");
var hard = document.getElementById("hard");
var easy = document.getElementById("easy");
var blocks = document.getElementsByClassName("block");
var rgb = document.getElementById("rgb");
var header = document.getElementById("header");
var banner = document.getElementById("banner");
var colorGameFuncs = {};
var winningColor;



colorGameFuncs.init = function(){
    this.reset();
};

// assigns color to the blocks
colorGameFuncs.assignColors = function(divBlocks){
   for(var i =0 ; i < divBlocks.length ; i++)
   {
       divBlocks[i].style.backgroundColor = this.generateColorCode();
       divBlocks[i].addEventListener("click", function () {

          if(winningColor === this.style.backgroundColor){
                header.style.backgroundColor = this.style.backgroundColor;
                banner.textContent = "You Win";
          }
              else{
                  this.style.backgroundColor = "white";
                  banner.textContent = "Try Again";
              }
       });
   }
};


// generate random colors
colorGameFuncs.generateColorCode = function() {

    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
     console.log("rgb( "+r+", "+g+", "+b+" )");
    // rgb(r, g, b)
    return "rgb( "+r+" , "+g+" , "+b+" )";
};

// set winning colors
colorGameFuncs.getWinningColor =  function(divBlocks){

    var i = Math.floor(Math.random() * divBlocks.length);
    return divBlocks[i].style.backgroundColor;
};

colorGameFuncs.reset = function(){

    this.assignColors(blocks);
    winningColor = this.getWinningColor(blocks);
    console.log(winningColor);
    rgb.textContent = winningColor;
    banner.textContent = " ";

};



resetbtn.addEventListener("click", function(){

    colorGameFuncs.reset();
/*    colorGameFuncs.assignColors(blocks);
    winningColor = colorGameFuncs.getWinningColor(blocks);
    console.log(winningColor);
    rgb.textContent = winningColor;
    banner.textContent = " ";*/

});



colorGameFuncs.init();