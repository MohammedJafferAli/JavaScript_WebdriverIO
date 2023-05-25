//To import any class into another class to file, first it should export


module.exports = class Person {
    age = 24 //class variables 

    get locatio() {
        return "Canada"
    }

    //Constrcutor is method which executes by default when you create an object of the class

    constructor(firstName, lastName) //declaration
    {

        this.firstName = firstName // instance variables
        /*this represent Person class object variable... 
        when creating an object I am passing an argument tim which is my firstName ..
        now I want to use it everywhere in my Person class and I created a another variable with this ketword and stored the value*/
        this.lastName = lastName
    }

    Fullname() {
        console.log(this.firstName + this.lastName)
    }

}

// let person = new Person('Tim', 'Cook')//obj to get the properties from class
// console.log(person.age)
// console.log(person.locatio) //Calling method doesn't requires braces
// console.log(person.Fullname())