/*

//promise for api result depends true are false ;
//new create object
//resolve
let myPromise = new Promise((myresolve,myreject)=>{
    myresolve();


})
myPromise.then(()=>{
    console.log('success')
}).catch(()=>{
    console.log('failed')
})

//reject
let myPromise = new Promise((myresolve,myreject)=>{
    myreject();


})
myPromise.then(()=>{
    console.log('success')
}).catch(()=>{
    console.log('failed')
})


//promise settimeout  function my reject  
let myPromise = new Promise((myresolve,myreject)=>{

setTimeout(()=>{
    myreject();
},2000)
})
myPromise.then(()=>{
    console.log('success')
}).catch(()=>{
    console.log('failed')
})


// promise settimeout function myresolve

let myPromise1 =new promise ((myresolve,myreject)=>{
    setTimeout(() => {
        myresolve('joel');
        
    },2000);
})
myPromise1.then((name)=>{
    console.log(name)
}).catch((name)=>{
    console.log(name)
})
*/
let myPromise1 = new Promise((myresolve,myreject)=>{
    setTimeout(()=>{
        myresolve('joel')

    },2000)
})

myPromise1.then((name)=>{
    return 'name:'+name;

}).then((name)=>{
    console.log(name)
})



