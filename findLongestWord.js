//create funcion called longestWord
//have it take in array

function findLongestWord (array) {
    //create variable longest word to be an empty string
    var longestWord = "";
    //loop through each word and compare to the word before it
    array.forEach(function(word) {
        if(word.length > longestWord.length){
            longestWord = word;
        }
    });
    return longestWord;
}

console.log(findLongestWord(["hi", "there", "west"]))

//runtime : O(n)
//space complexity : O(n)