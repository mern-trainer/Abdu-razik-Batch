// Destructuring -> Destructuring is a way to extract values from an array or object and assign them to variables.
// Spread Operator -> ... -> Spread operator is used to expand an array or object into individual elements.
// Rest Operator -> ... -> Rest operator is used to collect remaining elements from an array or object.

// Closure -> A closure is a function that has access to variables defined in its parent function, even after the parent function has returned.
// Recursion -> A function that calls itself.

const cities = ["New York", "London", "Tokyo", "Paris", "Sydney"]

// const firstCity = cities[0]
// const secondCity = cities[1]
// const thirdCity = cities[2]

const [firstCity, secondCity, thirdCity] = cities;

console.log(firstCity, secondCity, thirdCity)

const obj = {
    username: "John",
    age: 30,
    city: "New York",
    country: "USA"
}

// const username = obj.username
// const age = obj.age
// const city = obj.city

const { username, age, country } = obj

const copyOfCities = [...cities]
// pass by reference
// pass by value

copyOfCities.push("Mumbai")

console.log(copyOfCities)
console.log(cities)

const copyObj = {...obj}

copyObj.age = 100

console.log(copyObj)
console.log(obj)

const { city, ...remainingProperties } = obj

console.log(obj)

console.log(remainingProperties)

const [first, second, ...rest] = cities

console.log(first, second)
console.log(rest)

// closure

const parentFunc = () => {
    let data = 0;
    const childFunc = () => {
        data++;
        return data
    }
    return childFunc
}

const res = parentFunc()

console.log(res())
console.log(res())
console.log(res())

const counter = (n) => {
    let value = n
    const increment = () => {
        value++
        return value
    }
    const reset = () => {
        value = n
        return value
    }
    const decrement = () => {
        value--
        return value
    }
    return {
        increment: increment,
        reset: reset,
        decrement: decrement
    }
}

const func = counter(10)

console.log(func.increment())
console.log(func.increment())
console.log(func.increment())
console.log(func.increment())
console.log(func.increment())
console.log(func.decrement())
console.log(func.decrement())
console.log(func.decrement())
console.log(func.decrement())
console.log(func.increment())
console.log(func.increment())
console.log(func.increment())
console.log(func.increment())
console.log(func.reset())

// recursion -> call stack -> stack -> 
let i = 0;
const getCount = () => {
    if (i == 3) {
        return 100;
    }
    console.log(i)
    i++
    return getCount()
}

console.log(getCount())

// 100

// getCount() -> return 100 -> 0
// getCount() -> return 100 -> 1
// getCount() -> return 100 -> 2
// getCount() -> return 100 -> 3

// sum of n numbers

const sumOfNNumbers = (n) => {
    if (n == 0) {
        return 0
    }
    return n + sumOfNNumbers(n - 1);
}

console.log(sumOfNNumbers(1000))

// 1 + 2 + 3 + 4
// 4 + sumOfNNumbers(3)
// 4 + 3 + sumOfNNumbers(2)
// 4 + 3 + 2 + sumOfNNumbers(1)
// 4 + 3 + 2 + 1

// example -> palindrome

const isPalindrome = (number=0, temp=number, reverse=0) => {
    if (temp <= 0) {
        return reverse == number
    }
    return isPalindrome(number, parseInt(temp/10), ((reverse * 10) + (temp % 10)))
}

console.log(isPalindrome(123))
