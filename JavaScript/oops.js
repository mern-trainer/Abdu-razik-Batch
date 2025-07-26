// oops -> object oriented programming system

// class -> blueprint or template for creating objects
// object -> instance of a class
// this -> keyword refers to the current object

// constructor -> special function that is called when an object is created
// properties, attributes -> variables inside a class
// methods -> functions inside a class

// const obj = {
//     first_name: "John",
//     last_name: "Doe",
//     displayName: function () {
//         return this.first_name + " " + this.last_name
//     }
// }

// console.log(obj.displayName())

// pascal case -> FirstLetterCapitalized

class User{

    #first_name
    #last_name

    constructor(first_name, last_name){
        this.#first_name = first_name
        this.#last_name = last_name
    }
    #displayName() {
        return this.#first_name + " " + this.#last_name
    }

    display() {
        return this.#displayName()
    }
}

const user1 = new User("John", "Doe") 

user1.last_name = "Smith"

console.log(user1.display())

const user2 = new User("Jack", "Doe")

console.log(user2.display())


// 4 pillers of oops

// 1. Abstraction -> hiding the implementation details
// 2. Encapsulation -> binding methods and properties into a single unit. access modifiers
// 3. Inheritance -> inheritance allows a class to inherit properties and methods from another class

class Vehicle{
    constructor(make, model, year) {
        this.make = make
        this.model = model
        this.year = year
    }

    display() {
        return this.make + " " + this.model + " " + this.year
    }
}

class Honda extends Vehicle{

}

// const veh = new Vehicle("Honda", "Civic", 2022)

// console.log(veh.display())

const h = new Honda("Honda", "Civic", 2022)

console.log(h.display())

// 4. Polymorphism -> ability to take many forms

// overloading -> same function name with different parameters
// overriding -> same function name with same parameters

class Calc{
    add(a, b) {
        return a + b
    }
}

class Add extends Calc{
    // overloading
    // add(a, b, c) {
    //     return a + b + c
    // }

    parentAdd(a, b) {
        return super.add(a, b)
    }
    // overriding
    add(a, b) {
        return a - b
    }
}

const res = new Add()

console.log(res.add(10, 20))
console.log(res.parentAdd(10, 20))

// prototype -> object that is associated with a function

// String.prototype.reverse = function () {
//     return this.split("").reverse().join("")
// }

// const text = "Hello"
// console.log(text.reverse())