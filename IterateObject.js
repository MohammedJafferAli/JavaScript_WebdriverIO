
let person = {

    firstname: 'Tim',
    lastname: 'Cook',
    age: 24,

    fullname: function () {
        console.log(this.firstname + this.lastname)  //this key represent the current object key
    }

}

//Different methods to get the values of the object
console.log(person.firstname)//object.propertykey
console.log(person['lastname']) //Array notation
console.log(person)
console.log(person.fullname()) //calling obj functions

person.gender = 'Male'

//Iterate the object person and print all the values

for (let key in person) {
    console.log(person[key])
}