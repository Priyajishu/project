//Arithmetic

var a = 10
var b = 20
var c=a+b
console.log(c)

var c=a-b
console.log(c)

var c=a*b
console.log(c)

var c=a/b
console.log(c)     //quotient

var c=a%b
console.log(c)     //reminder ( a is least thats why it will give output value is 10)

var c=a**b
console.log(c)     //power root(10*10*10*10   upto 20 times(because b is 20))

//Assignment

var a =200
var b =300
a=a+b
console.log(a)   // a=500

a=a-b            //500=500-300=200
console.log(a)   //a=200

a=a*b            //200*300
console.log(a)   //a=60000

a=a/b           //60000/300
console.log(a)  //a=200

a=a%b           //200%300
console.log(a)   //a=200

a = a ** b         //a=200*200*200  upto 300 times
console.log(a)    

//comparison

var a=100
var b=200
console.log(a==b)
console.log(a===b)
console.log(a<b)
console.log(a>b)
console.log(a>=b)
console.log(a<=b)
console.log(a!=b)
console.log(a!==b)

//logical operators

//&&(AND operator)

let input = 18
if(input>=18 && input<=56)
console.log("Eligible")
else{
    console.log("not eligible")
}

let input1 = 18
if(input1>18 && input1<56)
console.log("Eligible")
else{
    console.log("not eligible")
}

// OR operator(||)
let input2 = 18
if(input2==18 || input2===18)
console.log("Eligible")
else{
    console.log("not eligible")
}

let input3 = 18
if(input3==18 || input3!==18)
console.log("Eligible")
else{
    console.log("not eligible")
}

//Not operator(!)
let n 
if(!n){
    console.log('success')
}
else{
    console.log('fail')
}

let n4 = 23   // (is value is null then output is succuss)
if(!n4){
    console.log('success')
}
else{
    console.log('fail')
}

//ternary operator

let val=9
val=(val>=18) ? "edit":"not edit"
console.log(val)

//unary operator
var a=100
console.log(++a)
console.log(a)

var b=100
console.log(b--)
console.log(b)

//conditional statement
let std=97
if(std<100 && std>85){
    console.log("Grade:A")
}
else if(std<=84 && std>=60)
{
    console.log("Grade:B")
}
else if(std<=59 && std>=35)
{
    console.log("Grae:C")
}
else {
    console.log("Fail")
}

//nested if

let age=18
if (age!=18)
{
    console.log('Most eligible')
}
else {
    console.log('not eligible')
}

//Switch

let day = 3
switch(day){
    case 1:
        console.log('Monday')
    break
    case 2:
        console.log('Tuesday')
    break
    case 3:
        console.log('Wednesday')
    break
    case 4:
        console.log('thursday')
    break
    case 5:
        console.log('Friday')
    break
    default:
        console.log('happy weekend')       
}