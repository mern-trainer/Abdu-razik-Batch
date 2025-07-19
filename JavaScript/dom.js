// DOM -> Document Object Model -> A programming interface for web documents.
// It is a tree-structured representation of the HTML document.
// elements -> create, remove, modify
// styles -> add, remove, modify

// methods

// getElementById()
// getElementsByClassName()
// getElementsByTagName()
// querySelector()
// querySelectorAll()

// getElementById

// const element = document.getElementById("demo")

// console.log(element.innerHTML)

// element.innerHTML = "<b>Changed</b>"
// const st = element.style
// st.color = "red"
// st.fontSize = "30px"
// st.fontFamily = "Arial"

// -------------------------------------------------------

// getElementsByClassName

// const elements = document.getElementsByClassName("demo")

// console.log(elements[2])

// elements[0].innerHTML = "<h1>Hello</h1>"
// elements[1].innerHTML = "<h1>World</h1>"
// elements[2].innerHTML = "<h1>JavaScript</h1>"

// const content = [
//     "<h1>Hello</h1>",
//     "<h1>World</h1>",
//     "<h1>JavaScript</h1>"
// ]

// for (let i = 0; i < elements.length; i++){
//     elements[i].innerHTML = content[i]
// }

// const style = elements[2].style

// style.color = "green"
// style.fontSize = "30px"
// style.fontFamily = "Arial"

// --------------------------------------------------------------------

// getElementsByTagName

// const elements1 = document.getElementsByTagName("div")

// console.log(elements1)

// same methods and properties as getElementsByClassName

// --------------------------------------------------------------------

// querySelector

// const element1 = document.querySelector("p")

// console.log(element1)

// same methods and properties as getElementById

// --------------------------------------------------------------------

// querySelectorAll

// const elements2 = document.querySelectorAll("div")

// console.log(elements2)

// same methods and properties as getElementsByClassName



// forms

const error = document.querySelectorAll(".error")

function handleClearErrors() {
    for (let i = 0; i < error.length; i++) {
        error[i].innerHTML = ""
    }
}

function handleForm() {

    // const name = document.getElementById("name").value
    // const username = document.getElementById("username").value
    // const email = document.getElementById("email").value
    // const password = document.getElementById("password").value
    // const confirm_password = document.getElementById("confirm_password").value

    const frm = document.signup
    const name = frm.name.value
    const username = frm.username.value
    const email = frm.email.value
    const password = frm.password.value
    const confirm_password = frm.confirm_password.value

    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]{2,}$/
    const passRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/

    if (name == "") {
        error[0].innerHTML = "Name is required"
        return false
    }
    if (name.length < 4 || name.length > 20) {
        error[0].innerHTML = "Name must be between 4 and 20 characters"
        return false
    }
    if(username == "") {
        error[1].innerHTML = "Username is required"
        return false
    }
    if(username.length < 4 || username.length > 16) {
        error[1].innerHTML = "Username must be between 4 and 16 characters"
        return false
    }
    
    if (email == "") {
        error[2].innerHTML = "Email is required"
        return false
    }

    if (!emailRegex.test(email)) {
        error[2].innerHTML = "Email is invalid"
        return false
    }

    if (password == "") {
        error[3].innerHTML = "Password is required"
        return false
    }

    if (!passRegex.test(password)) {
        error[3].innerHTML = "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character"
        return false
    }

    if(confirm_password == "") {
        error[4].innerHTML = "Confirm Password is required"
        return false
    }

    if (password != confirm_password) {
        error[4].innerHTML = "Passwords do not match"
        return false
    }
    
    return false
}

// events