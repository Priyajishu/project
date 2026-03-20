//String methods

var str = new String()
str="Javascript Programming"
console.log(str)
console.log(str.length)   //Property

//slice
str="Javascript Programming"
var store = str.slice(0 , 10)
console.log(store)

//Substring
str="Javascript Programming"
var store = str.substring(-11 , -22)
console.log(store)

//replace
var str=('Javascript Programming , Java Selenium')
var store = str.replace('Java','Type')
console.log(store)

//replaceall
var str=('Javascript Programming , Java Selenium')
var store = str.replaceAll('Java','Type')
console.log(store)

//upper case
var str = ('java script')
var store=str.toUpperCase()
console.log(store)

//lowercase
var str = ('PRIYANKA')
var store=str.toLowerCase()
console.log(store)

//concat
var str1 = "Javascript"
let str2 = 'selenium'
const str3 = `playwright`
console.log(str1.concat(str2+str3))   ///doubt

//boolean
//includes
var str='javascript programming language'
var store=str.includes('pro')
console.log(store)
//startswith
var str='javascript programming language'
var store=str.startsWith('java')
console.log(store)
//endswith
var str='javascript programming language'
var store=str.endsWith('e')
console.log(store)

//Indexof
var str='javascript programming language'
var store=str.indexOf('pro')
console.log(store)
//last indexof
var str='javascript programming language'
var store=str.lastIndexOf('ge')
console.log(store)

//char at
var str='javascript programming language'
var store=str.charAt('12')
console.log(store)

//trim
var str=" javascript programming language "
var store=str.trim()
console.log(store)
//trimEnd
var str=" javascript programming language "
var store=str.trimEnd()
console.log(store)
//trimStart
var str=" javascript programming language "
var store=str.trimStart()
console.log(store)

//split
var str='priyanka@gmail.com'
var store = str.split('')
console.log(store)

var str='priyanka@gmail.com'
var store = str.split('@')
console.log(store)

//repeat
var str='Javascript'
console.log(str.repeat(5))

//reverse a string
var str='priyanka.v'
var rev=str.split('').reverse().join()
console.log(rev)
