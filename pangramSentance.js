// function taking in the sentance string
function isPangram (sentance) {
    
    //create alphabet and remove whitespace
    let alpahbet = 'abcdefghijklmnopqrstuvwxyz';
    let regex = /\s/g;
    let lowercase = sentance.toLowerCase().replace(regex, "")
    
    
    //iterate through the alphabet string
    for(let i = 0; i < alpahbet.length; i++){
        if(lowercase.indexOf(alpahbet[i]) === -1){
            return "is not a pangram";
        }
    }
    return "is a pangram";
}

console.log(isPangram("The quick brown fox jumps over the lazy"))

//i believe the run time of this function to be O(n)
//space complexity: O(n)

function isPangram(str){
    str = str.toLowerCase();
    const alpahbet = 'abcdefghijklmnopqrstuvwxyz';
    const alphaArr = alphabet.split('');
    for(let i = 0; i < str.length; i++){
        const letter = str[i];
        const index = alphaArr.indexOf(letter);
        if(index !== -1);
            alphaArr.splice(index, 1)
    }
}