const flag = true;

if (flag) //if(!flag)->False-> NOT satisfied
{
    console.log("Condition satisfied")

}
else {
    console.log("Condition NOT satisfied")
}


let i = 0;
while (i > 10) // Use while when you are not sure how many time you want to iterate
{
    i++;
    console.log(i)
}

do {
    i++;
} while (i > 10); // It will run until it satisfy the condition
console.log(i)


let n = 0;
for (let k = 1; k <= 100; k++) // Use when you know definite no of times 
{
    //Challenge a # divided by 2 and 5

    if (k % 2 == 0 && k % 5 == 0) {
        n++;
        console.log(k + " is divisible by 2 and 5")
        if (n == 4) {
            break
        }
    }
    // console.log(k)
}


