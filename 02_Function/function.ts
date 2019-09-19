// Named function
function greeting(personName:string, greetingMsg:string) {
    let msg:string = greetingMsg + " " + personName
    console.log(msg)
}
greeting("Akagi", "Hello")
greeting("Yushin", "Hi")


// Anonymous function: function has no name.
const welcome = function(placeName:string, welcomeMsg:string) {
    let msg:string = welcomeMsg + " " + placeName
    console.log(msg)
}
welcome("VietName", "Welcome to")
welcome("Japan", "Welcome to")

// Arrow function
const introduce = (name:string, age:number) => {
    console.log(`Hi. My name is ${name}. I am ${age} years old.`)
}
introduce("Nguyen Hoai Phuong", 34)
