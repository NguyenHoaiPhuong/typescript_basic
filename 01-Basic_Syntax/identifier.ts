// string variable
var message:string = "Hello world";
console.log("message:", message);
var $string = "Welcome"
console.log("$string:", $string)

// number variable
var num:number = 2;
console.log("Number:", num)
num = 3.5;
console.log("Number:", num);

// null and undefined varibale
var var1 = null;
console.log("var1:", var1);
var1 = undefined;
console.log("var1:", var1);

// string and number
let fullName:string = "Nguyen Hoai Phuong"
let age:number = 34
let sentence:string = `Hello, my name is ${fullName}.

I 'll be ${age + 1} years old next month.`;
console.log(sentence)

// type assertion
console.log("type assertion")
let str:any = "Hello world"
let len:number = (<string>str).length
console.log("string", str, "has length", len)

// array of number
let list:Array<number> = [1, 2, 3];
console.log("array:", list)

// tuple
let x:[string, number] = ["hello", 10]
console.log("tuple:", x)

