let arr:Array<number> = [1, 2, 3, 4, 5, 6, 7]

// forEach keyword
console.log("iterate array by forEach keyword")
arr.forEach(function(value, index, array) {
    console.log("arr[", index, "] = ", value)
})

// map keyword
console.log("iterate array by map keyword")
arr.map(function(value, index, array) {
    console.log("arr[", index, "] = ", value)
})

// iterate array
console.log("iterate array")
for (let i:number = 0; i < arr.length; i++) {
    console.log("arr[", i, "] = ", arr[i])
}

// tuple
let tup:[string, number,string] = ["Hello", 34, "World"]
console.log("tuple:", tup)

// forEach keyword
console.log("iterate tuple by forEach keyword")
tup.forEach(function(value, index, array) {
    console.log(value)
})

// map keyword
console.log("iterate tuple by map keyword")
tup.map(function(value, index, array) {
    console.log(value)
})

// iterate tuple
console.log("iterate tuple")
for (let i:number = 0; i < tup.length; i++) {
    console.log("tup[", i, "] = ", tup[i])
}

// if - else
console.log("if - else keyword")
const n:number = 3
if (n > 0) {
    console.log("n is a positive number")
} else {
    console.log("n is equal to zero or negative")
}

// switch - case keyword
console.log("switch - case keyword")
switch (n) {
    case 3:
        console.log("n is equal to 3")
        break;

    default:
        console.log("n is not equal to 3")
        break;
}

// while keyword
console.log("while keyword")
let i:number = 10
while (i > 0) {
    console.log(i)
    i -= 1
}

// enum keyword
console.log("enum keyword")
enum Color {Red, Green, Blue}
let color:Color = Color.Red
console.log(color)
console.log(Color[1])