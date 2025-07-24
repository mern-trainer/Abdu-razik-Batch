// DOM -> A programming interface for web documents.
// It is a tree-structured representation of the HTML document.
// elements -> create, remove, modify
// styles -> add, remove, modify

// methods

// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()

// callback -> a function that is passed as an argument to another function.

// function sum() {
//     return 10
// }

// // arrow function -> short form of function

// const sum1 = () => 10

// console.log(sum1())

// const display = (n) => {
//     console.log("Display function called", n)
// }

const handleCall = (callbackFunc, n) => {
    callbackFunc(n)
}

// handleCall((n) => {
//     console.log("Display function called", n)
// }, 10)

// anonymous function

handleCall(function (num) {
    console.log("Hi", num)
}, 100)

// example;

const manageLoop = (element, index, array) => {
    console.log(element, index, array)
    // 100 lines of code
}

const handleLoop = (callbackFunc, arr) => {
    for (let i = 0; i < arr.length; i++) {
        const value = arr[i];
        callbackFunc(value, i, arr)
    }
}

handleLoop(manageLoop, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// forEach -> Array Method -> used to iterate over an array.
// filter -> Array Method -> used to filter an array.
// map -> Array Method -> modify an array.
// reduce -> Array Method -> get a single value from an array.

// forEach

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

array.forEach((element, index, arr) => {
    console.log(element, index, arr)
})

// filter

const filteredArray = array.filter((element) => element % 2 === 1)

console.log(filteredArray)

// map

const mappedArray = array.map((element) => {
    if (element % 2 == 0) {
        return element * 100
    }
    return element
})

console.log(mappedArray)

// strings array

const fruits = ["apple", "banana", "orange", "mango", "grapes"]

const mappedStrings = fruits.map((fruit) => fruit.toUpperCase())

console.log(mappedStrings)

// reduce

const value = array.reduce((prev, element, index, arr) => {
    return element + prev // 55
}, 0)

console.log(value)

// object

const users = [{
    name: "John",
    age: 30
}, {
    name: "Jane",
    age: 25
}, {
    name: "Bob",
    age: 35
}, {
    name: "Alice",
    age: 40
}, {
    name: "Charlie",
    age: 45
}]

const filteredUsers = users.filter((user) => user.age > 30)

console.log(filteredUsers)

const mappedUsers = users.map((user) => {
    if (user.age == 30) {
        user.age = 100
    }
    return user
})

console.log(mappedUsers)

const totalAge = users.reduce((prev, user) => prev + user.age, 0)

console.log(totalAge)