// // variable -> container for storing data
// // keywords -> Pre-Reserved words
// // identifier -> User defined words. variable names, function names
// // data type -> type of data stored in a variable.
// // operators -> used to perform operations on variables and values.

// // Assignment operator
// // Arithmetic operators
// // Comparison operators
// // Logical operators

// // +, -, *, /, %
// // ==, ===, !=, !==, >, <, >=, <=
// // &&, ||, !
// // =, +=, -=, *=, /=, %=

// // function -> block of code that performs a specific task.

// // variable

// // let, const, var

// // scope -> global, functional, block


// // variable name -> camel case, -> firstName, _, letter, $

// // static and dynamic typing
// // static -> data type is known at compile time. -> number, string, boolean, null, undefined, symbol, bigint
// // dynamic -> data type is known at run time. -> object, array, function, date, regex, etc.

// // let -> block scoped, can be updated and can not be re-declared.

// let a;

// console.log(a)

// // const -> block scoped, cannot be updated and re-declared.

// const b = 10;

// console.log(b)

// // var -> function scoped, can be updated and re-declared.

// var c = 10

// console.log(c)

// var c = "Hello"

// console.log(c)

// // -------------------------------------------------------------

// const num = undefined

// const typeOfValue = typeof num

// console.log(typeOfValue)

// // --------------------------------------------------

// function func() {
//     return "Function invoked"
// }
// const val = func()

// console.log(val)

// function sumOfTwoNumbers(num1, num2) { // parameters
//     const sum = num1 + num2
//     return sum
// }

// const res = sumOfTwoNumbers(10, 30) // arguments
// const res2 = sumOfTwoNumbers(100, 300) // arguments

// console.log(res, res2)

// // conditionals
// // if, else, else if
// // switch

// if (10 === "10") {
//     console.log("10 is equal to 10")
// } else {
//     console.log("10 is not equal to 10")
// }

// // else if

// const n1 = 1
// const n2 = 2
// const n3 = 3

// if (n1 > n2 && n1 > n3) {
//     console.log("n1 is greater than n2 and n3")
// } else if (n2 > n3) {
//     console.log("n2 is greater than n3")
// } else {
//     console.log("n3 is greater than n1 and n2")
// }

// // switch

// const day = 10

// switch (day) {
//     case 1:
//         console.log("Monday")
//         break;
//     case 2:
//         console.log("Tuesday")
//         break;
//     case 3:
//         console.log("Wednesday")
//         break;
//     case 4:
//         console.log("Thursday")
//         break;
//     case 5:
//         console.log("Friday")
//         break;
//     case 6:
//         console.log("Saturday")
//         break;
//     case 7:
//         console.log("Sunday")
//         break;
//     default:
//         console.log("Invalid day")
// }

// const number = 10

// switch (number % 2) {
//     case 0:
//         console.log("Number is even")
//         break;
//     case 1:
//         console.log("Number is odd")
//         break;
// }

// // loop -> repeat a block of code until a condition is met.

// // for loop
// // while loop
// // do while loop

// // for loop

// // i++, i--
// // ++i, --i

// // let num1 = 10

// // let num3 = num1++ // pre increment

// // console.log(num3, num1)


// // for(let i = 0; i < 10; i++){
// //     if(i == 5){
// //         continue;
// //     }
// //     console.log(i) // 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// // }

// // console.log("After for loop")
// let i = 0

// // while(i < 10){ // entry controlled loop
// //     if(i == 6){
// //         i++
// //         continue;
// //     }
// //     console.log(i)
// //     i++
// // }



// console.log("After while loop")

// do {
//     console.log(i)
//     i++
// } while (i < 0) // exit controlled loop

// // palindrome, prime, amstrong

// // 153 -> 1^3 + 5^3 + 3^3
// // 1456 -> 1^4 + 4^4 + 5^4 + 6^4

// // 123 => 321
// // 

// function is_palindrome(number = 0) {
    
//     let temp = number

//     let rev = 0
//     while (temp > 0) { // 123
//         let rem = temp % 10
//         rev = rev * 10 + rem
//         temp = parseInt(temp / 10)
//     }
//     if (rev == number) {
//         console.log("Number is palindrome")
//     } else {
//         console.log("Number is not palindrome")
//     }
// }

// is_palindrome(123)

// // 123 -> %10 -> 3 -> 3 -> 123/10 => parseInt(12.3) -> 12
// // 12 % 10 -> 2 -> 30 + 2 -> 32
// // 1 % 10 -> 1 -> 320 + 1 -> 321
// // 0