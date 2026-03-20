//Promise is an object

//Approch - 1
//true case
/*let prom1 = new Promise((reslove , reject)=>{

    let paymentStatus = true

    if(paymentStatus){
        reslove()
    }else{
        reject()
    }
})

//Hoisting

prom1.then(success).catch(failed)

function success(){
    console.log("Thank you for sent money")
}
function failed(){
    console.log("Sorry I did not received")
}

//////////////failed case


let prom2 = new Promise((reslove , reject)=>{

    let paymentStatus = false

    if(paymentStatus){
        reslove()
    }else{
        reject()
    }
})

//Hoisting

prom2.then(success).catch(failed)

function success(){
    console.log("Thank you for sent money")
}
function failed(){
    console.log("Sorry I did not received")
}



//Approch - 2
//true case

let prom3 = new Promise((reslove , reject)=>{

    let paymentStatus = true

    if(paymentStatus){
        reslove(1200)
    }else{
        reject("Network issue")
    }
})

prom3.then((amt)=> console.log('Thank you!' , amt))
.catch((err)=> console.log("Sorry" , err))

//failed case

let prom4 = new Promise((reslove , reject)=>{

    let paymentStatus = false

    if(paymentStatus){
        reslove(1200)
    }else{
        reject("Network issue") 
    }
})

prom4.then((amt)=> console.log('Thank you!' , amt))
.catch((err)=> console.log("Sorry" , err))


//Promise All
Promise.all([
    Promise.reject('start'),
    Promise.reject('Middle'),
    Promise.reject("End")
]).then((res)=> console.log(res)).catch((err)=> console.log(err))


//Promise All Settled
Promise.allSettled([
    Promise.resolve('Morning'),
    Promise.reject('Afternoon'),
    Promise.resolve("Evening")
]).then((res)=> console.log(res)).catch((err)=> console.log(err))

  
//promise race
Promise.race([
    new Promise(res => setTimeout(res , 3000 , "Hi")),
    new Promise(res => setTimeout(res , 1000 , "Priyanka")),
    new Promise(res => setTimeout(res , 2000 , "Hi"))
]).then((res)=> console.log(res))*/



//Async and Await
function greet(){
    return new Promise((resolve , reject)=>{
        settimeout(()=>{
            resolve('This is Async!)'),
            reject('This is Rejected')
        })
    })
}

//console.log(greet())

async function display(){
    console.log("Hello")

    try{
        let fn = await greet()
        console.log(fn)
    }catch(err){
        console.log(Error(err))
    }

    console.log("Bye")
}


display()

























