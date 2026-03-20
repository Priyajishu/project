//Functions

1//Basic functions
//without parameter
function greet(){
    console.log("Hellow World")
}
greet()

//Hoisting
function greet(){
    console.log("Hi this funtion")
}

//with parameter
function ispositive(num){
    console.log(num+20)
}
ispositive(100)
ispositive()

//multiple parameter
function isEven(num1,num2,num3){
    return num1 + num2 - num3
}
console.log(isEven(10 , 15 , 12))

//default parameter
function defalt(name = "Ai bot"){
    console.log("hi" , name)
}
defalt('harish')
defalt()

2//Function expression
//without parameter
var a1 = function(){
    console.log("Technical")
}
a1()

//without parameter
var a2 = function(num){
    return num*20
}
console.log(a2(5))

//multi parameter
var a3= function(l , h , b){
    console.log(l*b*h)
}
a3(10,15,20)

//default parameter
var a4 = function(name = "priya"){
    if(name =="tej"){
        console.log("welcome to our site")
    }
    else{
        console.log("wrong website")
    }
}
a4()
a4('arun')

3//Arrow function
//without parameter
let b1 = () => {
    console.log("this is a arrow function")
}
b1()

//with pameter without block of return keyword
let b3 = (num1) => num1 * 10
console.log(b3(15))

//multi parameter
let b2 = (num1 , num2) => console.log(num1 + num2)

b2(18,16)

//default
let b4 = (name = "Unknown" ) => {
    return ("Hi" + name)
}
console.log(b4())
console.log(b4("jai"))


4//IIFE(immediately invoked function expression)
//we can't use directly IIFE
//(function(){
    let pass = "test@123"
    console.log("this is secret")
//})()

5// Anynomous
console.log("START")
setTimeout( () => console.log("Middle") , 5000)
console.log("end")