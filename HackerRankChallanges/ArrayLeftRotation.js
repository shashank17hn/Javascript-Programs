/*Sample input
        5 4
        1 2 3 4 5

        sample output
        5 1 2 3 4


        Sample input
        20 10
        41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51

        sample output
        77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77

             // Method 2 --> using a temp array
	    /*     Input arr[] = [1, 2, 3, 4, 5, 6, 7], d = 2, n =7
	    		 1) Store d elements in a temp array
	    		    temp[] = [1, 2]
	    		 2) Shift rest of the arr[]
	    		    arr[] = [3, 4, 5, 6, 7, 6, 7]
	    		 3) Store back the d elements
	    		    arr[] = [3, 4, 5, 6, 7, 1, 2]
        */
console.log("hello");
function getInput(){
 /*   console.log("Enter");
    var rawdata = prompt();
    //var indexInfo = rawdata.split('/n');
    //var details  = indexInfo[0].split(' ');  // stores info d and n
    //var mainArray = details[1].split(' '); // stores mail string where rotation has to be done

    var indexInfo = rawdata.split(' ');
    var d = indexInfo[1];
    var n = indexInfo[0];
    var mainArray  = indexInfo.splice(2);

    console.log(rawdata);
    console.log(d);
    console.log(n);
    console.log(mainArray);*/
    var temp = [1,2,3.4,5];
    leftArrainyRotation(5,4,temp);


}
getInput();

function leftArrainyRotation(n,d,mainArray){

    var tempArray = [d];
    var tempArray2 = [mainArray.length-d]
    for(var i =0; i<d-1; i++)
    {
        tempArray[i] = mainArray[i];
    }
    console.log("Phase 1 :" + tempArray );
    for(var i = 0 ; i< tempArray2.length ; i++)
    {
        tempArray2[i] = mainArray[(d-1)+i]
    }
    console.log("Phase 2 :" + tempArray2 );


    console.log("Phase 3 :" + tempArray2.concat(tempArray) );
}

