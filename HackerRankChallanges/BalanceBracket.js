


  /// var input = '{[()]}';
   var input ='{[(])}';
  //  var input ='{{[[(())]]}}';
    console.log(input);
    console.log(findBalanceBracket(input));




function findBalanceBracket(inputString){
    var input  = inputString.split('');
    var stack =[];
    for(var i =0 ; i<input.length ; i++)
    if(input[i] == '(' || input[i] == '{' || input[i] == '[' ){
        stack.push(input[i]);
       // console.log(stack);
    }
    else if(input[i] == ')' || input[i] == '}' || input[i] == ']' ) {
        if(isMatchingPair( stack[stack.length-1], input[i])){
           stack.pop();
           // console.log(stack);
        }
    }
     if(stack.length === 0){
        return true;
    }
    else return false;
}

function isMatchingPair(bracket1 , bracket2){
    if(bracket1 == '{' &&  bracket2 == '}')
        return true;
    if(bracket1 == '[' &&  bracket2 == ']')
        return true;
    if(bracket1 == '(' &&  bracket2 == ')')
        return true;
    else
        return false;
}