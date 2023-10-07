//request

var http = require('http');
http.createServer(function(request,response){
    //http header
    //http status:200 :ok
    //content type:text/plain

    response.writeHead(200,{'content-type':'output/txt'});
//send the response 
response.end('hello world');
}).listen(3000);


console.log('serve running at http://127.0.0.1:3000/')
