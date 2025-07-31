// Sync, async

// sync  -> line by line execution -> blocking
// async   -> parallel execution -> non blocking

var a = 10

console.log(a)

var b = 20

console.log(b)

// callback -> a function that is passed as an argument to another function

// promise -> an object that represents the eventual completion or failure of an asynchronous operation.

// promise state -> Pending, Fulfilled, Rejected


a = 10;

const getValue = () => {
    return 10
}

console.log(a)
console.log(getValue())

const promise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Success")
    }, 5000) // 5 seconds
})

promise().then((result) => {
    console.log("succes:", result)
}).catch((error) => {
    console.log("error:", error)
}).finally(() => {
    console.log("finally block")
})

console.log("Hello World")

// async await -> wait for a promise to resolve

const getPromiseResult = async () => {
    try {
        const res = await promise()
        console.log(res)
        let a = await promise()
        console.log(a)
    } catch (error) {
        console.log("Error:", error)
    } finally {
        console.log("finally block")
    }
}

getPromiseResult()

// use case

// api -> get data from an external source -> application program interface

// api calling

const getDataFromURL = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const result = await response.json()
        console.log(result.title)
    } catch (err) {
        console.log(err)
    }
}

getDataFromURL()