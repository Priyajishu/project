//Object

//Approch -1
console.log("---------Approch1-------")

let obj1 = {
    name : "Priyanka",
    age : 27,
    course : true,

    abc : function (){
        console.log("Hello world!")
    } ,

    xyz : {
        company : "techM",
        empId : 786,
        location : false,
    } , 

    arr : ["java" , "javascript" , 10 , 20 , true]
}

console.log(obj1)

//Dot notation
console.log(obj1.name)

//Brace notation
console.log(obj1['course'])

//Add
obj1.job = "Tester"
console.log(obj1)

//update
obj1.arr[4] = [101, "Dev", true]
console.log(obj1)

//delete
delete obj1.abc
console.log(obj1)

//chaining
console.log(obj1.xyz.empId)

console.log(obj1['xyz']['company'])

console.log(obj1.arr[2])


//Approch2
console.log("---------Approch2-------")

let obj2 = new Object()

obj2.name = "Jishu"
obj2.age = 18
obj2.course = false
obj2.abc = function(){
    console.log("welcome to tech world")
}

obj2.xyz = {
    companyname : "TCS",
    empdId : 123
}
 obj2.arr = [101, 'javascript' , true]

console.log(obj2)

//dot notation
console.log(obj2.name)
 
//brace notation
console.log(obj2["course"])

//add
obj2.job1 = "Tester"
console.log(obj2)

//update
obj2.arr[1] = [101, "Dev", true]
console.log(obj2)

//delete
delete obj2.abc
console.log(obj2)

//chaining
console.log(obj2.xyz.empdId)

console.log(obj2['xyz']['companyname'])

console.log(obj2.arr[2])





/////////////Classes///////
//CLASS
//BASE , PARENT , SUPER - CLASS

//THIS is a keyword. Use to access current class properties and methods


console.log("--------------Classes----------")

class User1{         //className - PascalCase

    #deposit = 500      //

    constructor(courseFee){
        this.course = "Playwright"
        this.courseFee = courseFee

    }

    logIn(name){    //methodName - camel case
        console.log("Hi", name , "welcome to our website")   //local parameter
    }

    logOut(){
        console.log("thank you for visit and your course : ", this.course)
    }

    payment(){
        console.log("Your course fee is :" , this.#deposit , this.courseFee)
    }

}

let p1 = new User1(1000)

p1.logIn("Ram")
p1.logIn("Priya")

p1.logOut()




//class
//derived , child , sub
//static keyword is used to access unique data, and 
// we can access by using only className without creating an object

//Extends is keyword . use to access parent class
//Super keyword

class User2 extends User1{
    constructor(){
        super()
        this.count = 0
        ++User2.usersCount
    }

    static usersCount = 0   //static variable

    fetchData(){
        console.log(`Your website Username's count is : ${++this.count}`)
    }

    static display(){    //static method
        console.log(`Your unique mail id's count : ${User2.usersCount}`)
    }
}

let p2 = new User2

p2.fetchData()
p2.fetchData()

User2.display()
User2.display()
User2.display()

let p3 = new User2()

User2.display()

p3.logIn("Priyanka")







/**
 * In JS, OOPS has 4 main pillars: Object oriented programming language
 
1.Encapsulation
      - Wrapping data + methods together inside a class

2.Abstraction
       - Hide internal implementation

3.Inheritance
    - One class inherits properties & methods from another

4.Plymorphism
    - Same ,ethod name, different behaviour.
    1.method OverRiding
    2.method OverLoading



1.  Constructor
    - A constructor is a special function used to create and initialize objects.
 */



















