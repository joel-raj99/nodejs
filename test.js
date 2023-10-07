/*
var http =require('http');
// request is input value
// response is value to broswer

// create serve  key word createserve 
// var 

//server .listen  never stop untill request get from the broswer 
function rqListener(req,res){
 console.log(req)
}

var Server  = http.createServer(rqListener)
Server.listen(3000);
*/
/*

var http =require('http');
var { url } = require('inspector');
//url get  
function rqListener(req,res){
 console.log(req.url)
}

var Server  = http.createServer(rqListener)
Server.listen(3000);
*/
//methods
/*
var http =require('http');
var { url } = require('inspector');
//url get  
function rqListener(req,res){
 console.log(req.method)
}

var Server  = http.createServer(rqListener)
Server.listen(3000);

*/
/* 
//headers

var http =require('http');
var { url } = require('inspector');
//url get  
function rqListener(req,res){
 console.log(req.headers)
}

var Server  = http.createServer(rqListener)
Server.listen(3000);


*/
//broswer sent repsone
var http = require('http')

var server = http.createServer((res,req)=>{
    res.setHeader('content-type','text/html');
    res.write('<html>')
    res.write('<head><title>joel paulin </title></head>')
    res.write('<body><h1>hello from server</h1></body>')
    res.write('</html>')
res.end();



});

server.listen(3000);


