//Import JSClass into this class use require keyword

const Person = require('./JSClass') //importing the whole class here so give it to a constant

let person = new Person('Java', 'Script')
console.log(person.Fullname())