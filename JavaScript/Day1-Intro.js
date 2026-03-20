// single Comment Line

/**
 * Multiple
 * Comment
 * Line
 */


//Fixed values
console.log('Priyanka @ 20')    //String

console.log(12345)  //number

console.log(true)   //Boolean

console.log( [10, "Javascript", true] )   //Array

console.log({name : 'Priyanka' , day : 1 , course : true} )   //Object


//Varible values

var a = 101
console.log(a)


{
   var a = 102
console.log(a) 
}


var a = 102
{
    var a = 102
}



let ab = 1000
{
    let ab = 2000
}
console.log(ab)


var boo = true
console.log(typeof boo)


let nu = 'hello' * 2
console.log(nu)

const arr = [ 10 , 20 , 'javascript' , true]
Array.isArray(arr);

const obj = {
    company : 'wipro' , emp : 123 , 
}
console.log(typeof obj)

function greet() {
    console.log('hellow wrold')
}
greet()
console.log(typeof greet)
