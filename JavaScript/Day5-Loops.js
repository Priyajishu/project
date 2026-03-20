//Handling Loops
//For -: Initialize;Condition;Increment/Decrement
console.log("----- for loop---");


for(let i=1;i<=5;i++){
    console.log(i)
}


//while
console.log("----- while loop---");

let j=1;
while(j<=5){
    console.log(j)
    j++;
}


let k=1;
while(k<=5){
    k++;
    console.log(k)
}

//Do-while
console.log("----- Do-while loop---");

let i1=1;
do{
    console.log(i1);
    i1++;
} while(i1<=5);


//For of
console.log("----- for of loop---");

var arr = [10,20,30,40,50]
for(const val of arr){
    console.log(val)
}


var arr1 = [10,20,"priya","Jishu",true]
for(const val of arr1){
    console.log(val)
}

//for each
console.log("----- for each loop---");

var arr = [10,20,30,40,50]
arr.forEach((val , ind)=>{
    console.log(val , ind)
});

//for In
console.log("----- for in loop---");

var obj = {name:"Priya",day:3,course:true}
for(let key in obj){
    //console.log(key)
    //console.log(obj[key])
    console.log(key + "=" + obj[key])
}


//Condition based loops
console.log("----- condition based for loop---");
for(let a=1;a<=6;a++){
    if(a==6){
        break
    }
    console.log(a)
}

for(let a1=1;a1<=6;a1++){
    if(a1==6){
        continue
    }
    console.log(a1)
}

//nested
console.log("----- condition based nested loop---");

for(let b=1;b<=5;b++){
    for(let b1=1;b1<=5;b1++){
        console.log("b value is :"+1 , "b1 value is:"+1)
    }
}

//Triangle stars
console.log("----- condition based triangle stars loop---");

for(let c=1;c<=5;c++){
    let row = " "
    for(let c1=1;c1<=c;c1++){
        row += "* "
    }
    console.log(row)
}




