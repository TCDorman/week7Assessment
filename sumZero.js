
    //function takes in arr of nums
function sumZero () {
    //get first num from array then cycle
    let array = [1, 2, 3, -1]
    for(let i = 0; i < array.length; i++){
        //get second num to compare then cycle
        for(let j = 0; j < array.length; j++){
            //if first num and second num = 0 say true
            if (i + j === 0) {
                console.log("true")
                //else say false
            } else {
                console.log("false")
            }
        }
    }
}
//show function
console.log(sumZero())

//runtime of this code should be O(n^2)
//space complexity: O(n)