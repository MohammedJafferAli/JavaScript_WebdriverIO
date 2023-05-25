const Person = require("./JSClass"); //Import the exported the class


class Pet extends Person //extend keyword to inherit the parent class

{
    //During inheritance both the parent and child class should have the same constructor

    constructor(firstName, lastName) 
    {
        //calling parent class construct using super keyword
        super(firstName, lastName)

    }

    get Location()//Location method present in both the classes.. and it takes the preference of current class method
    {
        return "BlueCross"
    }

}

let pet1 = new Pet('Tom ','Jerry')
console.log(pet1.Fullname())
console.log(pet1.Location) //Current class method