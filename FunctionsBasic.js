//Wrapping the set of codes into a block called functions in java script

//var - global /functional
//let - global/block level

function add(a, b) //method implementation - Traditional
{
    return a + b
}

let sum = add(3, 5) // Method calling and storing the result into a variable
console.log(sum)

//Alternate way  Do not have name => anonymous function 

let sumOfInteger = function (c, d) {
    return c + d
}

let sumOfNumbers = (c, d) => c + d
console.log(sumOfInteger(5,5))
console.log(sumOfNumbers(9,8))

