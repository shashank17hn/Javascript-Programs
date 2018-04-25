
function detectNoWords(sentence){
    var counter = 1;
    for(var i =0; i< sentence.length ; i++){
        if(/[A-Z]/.test(sentence.charAt(i))){
            counter ++;
        }
    }
    return counter;
}

detectNoWords("saveChangesInTheEditor");