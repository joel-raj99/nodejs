/*
var name ="joel";
var age =25;
var hash =true;
console.log(name,age,hash);



//asyn

setTimeout(()=>(
    console.log('timer is out')
),2000);

console.log('hi');

//call back
var fetchData =(callback)=>{
    callback('function executed');

}
setTimeout(()=>{
    fetchData((result)=>{
        console.log(result);
    })
},2000);

//settimeout

var fetchData =(callback)=>{
    setTimeout(()=>{
        callback('function executed');
    },1500)
  

}
setTimeout(()=>{
    fetchData((result)=>{
        console.log(result);
    })
},2000);*/
