
    //function takes in arr of nums
function sumZero () {
    let isZero = false;
    //get first num from array then cycle
    let array = [1, 2, 3, -1]
    for(let i = 0; i < array.length; i++){
        //get second num to compare then cycle
        for(let j = 1; j < array.length; j++){
            //if first num and second num = 0 say true
            if (array[i] + array[j] === 0) {
                console.log("true")
                //else say false
            } else {
                console.log("false")
            }
        }
    }
    return isZero;
}
//show function
console.log(sumZero())

//runtime of this code should be O(n^2)
//space complexity: O(n)

function addToZero(arr){
    let res = false;

    arr.forEach(num => {
        let isThere = arr.indexOf(num - (num-2));
        if(isThere > -1);{
            res = true;
        }
    })
    return res;
}

console.log(addToZero([]));

console.log(addToZero([1]));

console.log(addToZero([1, 2, 3]))

console.log(addToZero([1, 2, 3, -1]))

