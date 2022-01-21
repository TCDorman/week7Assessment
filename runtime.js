const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(tinyArray);
let resultsAppend = perf.stop();  

// Try it with second function
perf.start();
doublerInsert(tinyArray);
let resultsInsert = perf.stop();


console.log('Results for the extraLargeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);

//APPEND                                
// extralargeArray: 16.156136 ms
//largeArray: 653.225 μs
//mediumArray: 192.144 μs
//smallArray: 125.411 μs
//tinyArray: 122.12 μs

//INSERT
//extralargeArray: 1.026315374 s
//largeArray: 7.014654 ms
//mediumArray: 223.299 μs
//smallArray: 56.147 μs
//tinyArray: 138.029 μs

// looking over the data its quite obvious that the insert function when scaled is much
// much slower than the append function. As you can see by looking at the extralargeArray
// and the large array the differences are quite significant. This can be proven by looking at the
// time differences between the two, the append being 16.156136 ms vs. the insert being 1.026315374 s 
// for the extralargeArray test.
// Extra Credit: the reason that 
// the insert function is so much slower is becasue the unshift() method causes the movement of 
// every index to change every time something is added to the function. Whereas when you use the 
// push() method you are only adding things onto the end of the array. Not having to change the index
// of everything in the array allows the append method to be much quicker.

// here are some different reading I found on the topic. 
// https://www.tutorialspoint.com/difference-between-push-and-unshift-methods-in-javascript
// https://stackoverflow.com/questions/12250697/time-complexity-of-unshift-vs-push-in-javascript
// https://www.perlmonks.org/?node_id=17890



