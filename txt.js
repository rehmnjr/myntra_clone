const myFunction = (callback)=> {
    callback("fahim")
}

const printEverything = (value) =>
{ 
    value += "dscdv"
    console.log(value);
}





myFunction(printEverything)

printEverything("I am not callback")

// let arr = []

arr.find((object) => {
    console.log(object)
})