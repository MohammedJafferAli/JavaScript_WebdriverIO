var marks = Array(6)
// var marks  = new Array(20,40,50,30,35,20)

var marks = [20,10,30,45,35,30]

console.log(marks[2])
marks[2] = 39
console.log(marks) //Print all the values
console.log(marks.length) //return the length of the array

marks.push(65) // add 65 at the end
console.log(marks) //Print all the values

marks.pop()// remove any element which was added at the end

marks.unshift(99)
console.log(marks) //Print all the values

console.log(marks.indexOf(45))//Get the index of number45

console.log(marks.includes(120)) // return false when number 120 is not available in the array

submark = marks.slice(2,5) //Sub array from the main array

//iterate over the loop

let sumofArray = 0;
for(let i=0;i<marks.length;i++){
    console.log(marks[i])
    sumofArray = sumofArray + marks[i]
}
console.log(sumofArray)

