

buf = new Buffer(256);
len = buf.write('simply easy learning');
console.log("octets written : " + len);



buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf[i] = i + 97;
}

console.log( buf.toString('ascii'));      
console.log( buf.toString('ascii',0,15));  
console.log( buf.toString('utf8',0,25));   
console.log( buf.toString(undefined,0,6));


var buf = new Buffer('Simply Easy');
var json = buf.toJSON(buf);

console.log(json);


var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());



var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" comes before " + buffer2);
} else if(result === 0) {
   console.log(buffer1 +" is same as " + buffer2);
} else {
   console.log(buffer1 +" comes after " + buffer2);
}

var buffer1 = new Buffer('ABC');

//copy a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());




var buffer1 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer2 = buffer1.slice(0,10);
console.log("buffer2 content: " + buffer2.toString());



var buffer = new Buffer('joelpaulinraj');

//length of the buffer
console.log("buffer length: " + buffer.length);