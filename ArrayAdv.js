//Reduce Filter Map

var marks = [20, 10, 30, 45, 35, 30]

var sum = 0;

marks.reduce((sum, mark) => sum + mark, 0)

var scores = [12, 13, 14, 16, 19]
var evenscores = []

for (let itr = 0; itr < scores.length; itr++) {

    if (scores[itr] % 2 == 0) {

        evenscores.push(scores[itr])

    }
}
console.log(evenscores)

//Alterate method to filter the array
let newfilteredEvenScores = scores.filter(score=>score%2==0)
console.log(newfilteredEvenScores)


//Create new array with even numbers of score and multiply with  #3

let mappedArray = newfilteredEvenScores.map(score=>score*3)
console.log(mappedArray)

//Now sum the newly created array

let totalVal = mappedArray.reduce((sum,val)=>sum+val,0)
console.log(totalVal)


//Combine everything into a chain
//Create a new array from the given array and multiply with 3 then sum

let combinedExp = scores.filter(score=>score%2==0).map(score=>score*3).reduce((sum,score)=>sum+score,0)
console.log(combinedExp)