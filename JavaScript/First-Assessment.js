//5 qsn
var a = 10
console.log(a)

//11 qsn : using pop method
let arr = [1 , 2 , 3 , 4]

arr.pop(600 , 'Jishu' , true , [11 , 22 , 33])

console.log(arr)

//1 qsn : using join method
var arr12

//13 qsn :using reduce method
var arr1 = [10,20,30,40]

var store = arr1.reduce(function(num1,num2){
    return num1 + num2
})                                             
console.log(store)                           //100 output

//15 qsn :remove duplicates
let arr2 = [ 1,2,2,3,4,4]
arr2.splice(2,5)
console.log(arr2)

//16 qsn : Array to String
var arr3 = [10 , 20 , "chennai" , "Andhra Pradesh"]
var store = arr3.toString()
console.log(store)

//17 qsn : remove
let arr4 = [ 10,20,30,40,50,60]
arr4.splice(2,3)
console.log(arr4)              //10,20,60

//18 qsn : Adding new values
let arr5 = [1,2,3,7,8,9]
arr5.splice(3,0,4,5,6)
console.log(arr5)

//19 qsn : even numbers
var arr6 = [18,9,1,22,16,26,15]
var store2 = arr6.filter(function(a){
    return a % 2 == 0 
})
console.log(store2) // [18,22,16,26]

//odd numbers
var arr7 = [18,9,1,22,16,26,15]
var store3 = arr7.filter(function(a){
    return a % 2 != 0 
})
console.log(store3)  //[9,1,15]

//20 qsn : vertical ouput
let arr8 = ["apple","Banana","carrot","orange"]
var store4 = arr8.values()
for (const element of store4){
    console.log(element)
}

let str = [10,20,30,40,50]
var store5 = str.values()
for (const element of store5){
    console.log(element)
}

//21 qsn : using substring method
str1 = "javascript with playwright"
var store6 = str1.substring(16 , 26)
console.log(store6)

//23 qsn : repeat
var str2 = "ha"
console.log(str2.repeat(3))

//24 qsn : uppercase
var str3 = "hello world"
var store7 = str3.toUpperCase()
console.log(store7)

//25 qsn : starts with

let str4 =  "hellow world"
console.log(str4.startsWith("hello"))   // true
console.log(str4.endsWith("world"))     //true


//26 qsn : replace
let str5 = "javascript with playwright , javascript with cypress"
var store8 = str5.replaceAll("java", "Type")
console.log(store8)

//28 qsn : Palindrome or not 

var str0='madam'
var rev=str0.split('').reverse().join()
console.log(rev)

//29 qsn :sorting
let str6 = [5,1,10,23,7,35]
var store9 = str6.sort(function(a , b){
return a - b
})
console.log(store9)    //asending

//decending
let str7 = [5,1,10,23,7,35]
var store10 = str7.sort(function(a , b){
return b - a
})
console.log(store10)

//30 qsn : alphabet
var arr9 = ["Banana","Cherry","Apple","Dragon"]
console.log(arr9.sort())








