let day ='tuesday '


console.log(day.length)//Get the length

let subDay = day.slice(1,4) //Get the sub string 
console.log(subDay)
console.log(subDay.length)
console.log(day[2])//Get a char from a string using by giving specific index

//Split the string tue day
let splitDay = day.split('s')
console.log(splitDay)
console.log(splitDay[0].length) //After split, consider it as an array and give the index
console.log(splitDay[1].trim().length) //trim extra spaces

//String to int parse

let currentdate = '28';
let brithdate ='18';

//let diff = currentdate - brithdate; 
let diff = parseInt(currentdate) - parseInt(brithdate);
console.log(diff)
console.log(diff.toString())

//String concat

let quote = day + " is Funday"
console.log(quote)

//Find the number of occurance of any string like 'day'