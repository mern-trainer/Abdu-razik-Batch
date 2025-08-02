// // Sync, async

// // sync  -> line by line execution -> blocking
// // async   -> parallel execution -> non blocking

// var a = 10

// console.log(a)

// var b = 20

// console.log(b)

// // callback -> a function that is passed as an argument to another function

// // promise -> an object that represents the eventual completion or failure of an asynchronous operation.

// // promise state -> Pending, Fulfilled, Rejected


// a = 10;

// const getValue = () => {
//     return 10
// }

// console.log(a)
// console.log(getValue())

// const promise = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Success")
//     }, 5000) // 5 seconds
// })

// promise().then((result) => {
//     console.log("succes:", result)
// }).catch((error) => {
//     console.log("error:", error)
// }).finally(() => {
//     console.log("finally block")
// })

// console.log("Hello World")

// // async await -> wait for a promise to resolve

// const getPromiseResult = async () => {
//     try {
//         const res = await promise()
//         console.log(res)
//         let a = await promise()
//         console.log(a)
//     } catch (error) {
//         console.log("Error:", error)
//     } finally {
//         console.log("finally block")
//     }
// }

// getPromiseResult()

// // use case

// // api -> get data from an external source -> application program interface

// // api calling

// const getDataFromURL = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const result = await response.json()
//         console.log(result.title)
//     } catch (err) {
//         console.log(err)
//     }
// }

// getDataFromURL()

// memoization -> memoization is a technique used to optimize a function by caching the result of a function call.

// 1+2 -> 3
// 1+2 -> 3

// Set -> Collection of unique elements
// Map -> key value pair

const set = new Set()

set.add(10)
set.add(10)
set.add(20)
set.add(30)
set.add(40)
set.add(50)

set.delete(10)

console.log(set.has(300))

console.log(set.size)

// set.clear()

const arr = Array.from(set)

console.log(arr)

console.log(set)

const s = new Set([1, 2, 3, 3, 4, 10, 6, 4, 5, 6, 7, 8, 9, 10])

console.log(Array.from(s))

// map -> key value pair

// const obj = {}

// obj.name = "John"
// obj.age = 30
// obj.city = "New York"

// console.log(obj)

const map = new Map()

map.set("name", "John")
map.set("age", 30)
map.set("city", "New York")

console.log(map.get("name"))

console.log(map.has("agsdfe"))

console.log(map.size)

map.delete("city")

map.clear()

console.log(map)

// ------------------------------------------------

const cache = new Map()

const a = `Hello world`

console.log(a)

const sum = (a, b) => {
    const key = `${a},${b}`
    if (cache.has(key)) {
        console.log("Fetching from cache...")
        return cache.get(key)
    }
    console.log("Calculating...")
    const s = a + b
    cache.set(key, s)
    return s
}

console.log(sum(10, 20))
console.log(sum(102, 0))
console.log(sum(10, 20))
console.log(sum(10, 20))
console.log(sum(13, 20))
console.log(sum(13, 20))

// use case

// api calling

const store = new Map()

const getData = async (user_id) => {
    try {
        if (store.has(user_id)) {
            console.log("Fetching from cache...")
            return store.get(user_id)
        }
        console.log("Fetching data...")
        const response = await fetch(`https://dummyjson.com/users/${user_id}`)  
        const result = await response.json()
        store.set(user_id, result)
        return result
    } catch (err) {
        console.log(err)
    }
}

const handleData = async () => {
    let res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    res = await getData(10)
    console.log(res)
    console.log("Calling completed")
}

// handleData()

// hoisting -> we can access variable before declaration

// undefined -> variable is declared but value is not defined
// not defined -> variable is not defined

console.log(b)



// js -> memory allocation, execution
