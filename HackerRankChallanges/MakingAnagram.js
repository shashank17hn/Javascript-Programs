/*Sample Input

cde
abc
Sample Output

4
Explanation

We delete the following characters from our two strings to turn them into anagrams of each other:

Remove d and e from cde to get c.
Remove a and b from abc to get c.
We must delete  characters to make both strings anagrams, so we print  on a new line.

Sample Input

fcrxzwscanmligyxyvym
jxwtrhvujlmrpdoqbisbwhmgpmeoke
Sample Output

30
Explanation


*/
console.log("Start");
getInput();

function getInput() {
    var first = "fcrxzwscanmligyxyvym";
    var second = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";
    var output = numberNeeded(first, second);
    console.log(output);
}

function numberNeeded(first,second){
  var obj1 = createObjMap(first);
  var obj2 = createObjMap(second);
  var result = [];
  var result2 = [];

 var map1 = createMap(first);
 var map2 = createMap(second);

 // to iterate a object
 for(var key in obj1)
    {
        if(obj2.hasOwnProperty(key))
        {
            var count = Math.min(obj1[key] , obj2[key]);
            for(var i =0 ; i < count ; i++) {
                result.push(1);
            }
        }
    }

   // to iterate a map
  for(var[k,v] of map1){
      if(map2.has(k)){
         var count =  Math.min(map1.get(k), map2.get(k));
        // console.log( map1.get(k) + " " + map2.get(k));

         for(var i =0 ; i < count ; i++) {
             result2.push(1);
         }
      }
  }



  console.log(result);
  console.log(result2);
  return (first.length-result.length) + (second.length- result.length);
}

// one way creating map using object
function createObjMap(inputSting){
    var obj ={};
    for(var i =0 ; i< inputSting.length; i++)
    {
        var count =  obj[inputSting.charAt(i)];
        obj[inputSting.charAt(i)] = count ? count+1 : 1;
    }
    return obj;
}

// second way creating map using inbuilt provided by javascript
function createMap(inputString){
   var  map = new Map();
    for(var i =0 ; i< inputString.length; i++)
    {
        if(map.has(inputString.charAt(i)))
        {
            map.set(inputString.charAt(i) , map.get(inputString.charAt(i))+1 )
        }
        else{
            map.set(inputString.charAt(i) , 1 )
        }
    }
    return map;
}


