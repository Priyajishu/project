//Array methods
//index
var arr = [10 , 20 , 30 , 40 , [11,22,33]]
console.log(arr.length)


var arr = [10 , 20 , 30 , 40 , [11,22,33]]
console.log(arr [4] [1]) // 4-index , 1 is nested index

//push
console.log("--------- push -----")
var arr = [10 , 20 , 30 , 40 , 50]

arr.push(600 , 'Jishu' , true , [11 , 22 , 33])


console.log(arr)

//pop
console.log("--------- pop -----")
var arr = [10 , 20 , 30 , 40 , 50]

arr.pop(600 , 'Jishu' , true , [11 , 22 , 33])


console.log(arr)


//shift
var arr = [10 , 20 , 30]

arr.shift()

console.log(arr)



//unshift
var arr = [10 , 20 , 40]

arr.unshift(897 , 765 , 543)

console.log(arr)


//tostring
var arr = [101 , 202 , 'Javascript' , false]

var store = arr.toString()

console.log(store)


//concat
let a1 = [1 , 2 , 3]

let a2 = [4 , 5 , 6]

const a3 = [9 , 8 , 7]

console.log(a1.concat(a2 , a3))

console.log(a1.concat(a2+a3))


//slice
var arr =[10 , 20 , 30 , 40 ,50 , 60]

var store = arr.slice(2,4)

console.log(store)

//reverse
var arr =[1,2,'hello',true]

arr.reverse()

console.log(arr)

//map

var arr = [4,9,16,25,36,49]

var store=arr.map(Math.sqrt)

console.log(store)

var arr = [4,9,16,25,36,49]

var store=arr.map(function (v){
    return.2 * v
})

console.log(store)

//filter

var arr = [1,2,3,4,5,6,7,8,9]

var store = arr.filter(function(a){
    return a % 2 == 0
})
console.log(store)

var arr = [1,2,3,4,5,6,7,8,9]

var store = arr.filter(function(a){
    return a * 2 == 0
})
console.log(store)

var arr = [1,2,3,4,5,6,7,8,9]

var store = arr.filter(function(a){
    return a % 2 != 0
})
console.log(store)

//reduce
var arr = [100 , 200 , 300 , 400]

var store = arr.reduce(function(num1,num2){
    return num1 + num2
})
console.log(store)

var arr = [100 , 200 , 300 , 400]

var store = arr.reduce(function(num1,num2){
    return num1 + num2
},10)
console.log(store)

//splice

var arr = [10,202,30,40,50]
//remove
arr.splice(2,3)
console.log(arr)

//update
var arr = [10,202,30,40,50]
arr.splice(2,200,3,4,5)
console.log(arr)

//add
var arr = [10,202,30,40,50]
arr.splice(1,11,2,33,44)
console.log(arr)

//join
var arr = [10,202,30,40,50]
console.log(arr.join('<..>'))

//values

var arr = [10,20,'playwright',true,'hellow']
var store=arr.values()
for (const element of store){
    console.log(element)
}

//for each
let arr1 = [1 , 2 , 3]
arr1.forEach(num => console.log(num)) 

//sort
//ascending
var arr=[11,2,4,5,21,78,45,67,90,12]
var str = arr.sort(function(a , b){
    return a-b
})
console.log(str)
//decending
var arr=[11,2,4,5,21,78,45,67,90,12]
var str = arr.sort(function(a , b){
    return b-a
})
console.log(str)

//min & max
let arr = [15, 9, 18, 26, 17, 23];

let min = Math.min(...arr);
let max = Math.max(...arr);

console.log(min, max);
