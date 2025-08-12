const api = "https://jsonplaceholder.typicode.com/users"

// fetch(api).then(res => {
//     return res.json()
// }).then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

const getData = async () => {
    try {
        const res = await fetch(api)
        const jsonData = await res.json()
        console.log(jsonData)
    } catch (error) {
        console.log(error)
    }
}

getData()





