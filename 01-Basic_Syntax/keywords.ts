// forEach keyword
let arr:Array<number> = [1, 2, 3, 4, 5, 6, 7]
arr.forEach(function(value, index, array) {
    console.log("arr[", index, "] = ", value)
})

// if - else
const n:number = 3
if (n > 0) {
    console.log("n is a positive number")
} else {
    console.log("n is equal to zero or negative")
}

// switch - case keyword
switch (n) {
    case 3:
        console.log("n is equal to 3")
        break;

    default:
        console.log("n is not equal to 3")
        break;
}

// while keyword