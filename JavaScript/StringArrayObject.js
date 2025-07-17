// string -> Collection of char.

const text = "Hello World!"

// string methods

console.log(text.length)
console.log(text[5])
console.log(text.charAt(4))
console.log(text.indexOf("l", 4))
console.log(text.lastIndexOf("l"))
console.log(text.toUpperCase())
console.log(text.toLowerCase())
console.log(text.slice(0, -4))
console.log(text.includes("Hesdfsdf"))
console.log(text.replaceAll("l", "0"))
console.log(text.split("l"))

// Array -> Collection of elements

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9  ]

console.log(arr.length)
console.log(arr[3])
console.log(arr.at(3))
console.log(arr.indexOf(2))
console.log(arr.lastIndexOf(2))
console.log(arr.includes(40))
console.log(arr.join("="))
console.log(arr.reverse())

arr.push(10, 20, 30, 40, 50)
arr.unshift(-4, -3, -2, -1, 0)

console.log(arr.pop())
console.log(arr.shift())

// splice

// add , remove, add & remove
console.log(arr)

const array = [1, 2, 3, 4];

array.splice(1, 3, 10, 20, 30, 40, 50)

array[0] = 100

console.log(array)


// const str = "Hello"

// console.log(str.split("").reverse().join(""))

// Object -> Collection key value pair

const user_info = {
    name: "John",
    age: 20,
    is_verified: true,
    tags: ["tag1", "tag2"],
    address: {
        city: "Kozhikode",
        state: "Kerala"
    }
}

user_info["name"] = "Joe"
user_info.age = 10
user_info.sample = "hello"

console.log(user_info)

const field = "sample"

console.log(user_info[field])



