//Sort an array of string in alphabet order

let fruits = ["banana", "mango","pineapple","apple"]
fruits.sort()
console.log(fruits)


var score = [12,003,19,30,14]

console.log(score.sort()) //Wrong implementation

//Correct implementation

console.log(score.sort((a,b)=>a-b))//Recursive assign array values to the variables a and b , find the difference and print it
//Reverse the array in descending order

console.log(score.reverse())
console.log(score.sort((a,b)=>b-a))