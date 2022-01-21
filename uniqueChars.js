//function that takes in a single word as a string
function uniqueChars (stg) {
    //get first char in string 

    let string = ""

    for(let i = 0; i < stg.length; i++){
        //loop through string starting at index 0 comparing to i
        for(let j = i + 1; j < stg.length; j++){
            //if I and j are equal console.log false
            if( stg[i] === stg[j]){
                console.log('false')
                // if i is not equal to j anywhere in the string console.log true
            } else if ( i !== j){
                console.log('true')
            }
        }
    }
}
// i believe the runtime of this function to be O(n^2)
//space complexity: o(n)