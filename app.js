console.log('Starting app');

// const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js')



// object process and property argument 
var command = process.argv[2]
// var command = argv_[2]

var argv = yargs.argv;
console.log('Command: ', command);

console.log('process',process.argv)
console.log('yargs',argv)


if(command === 'add'){

   var note = notes.addNote(argv.title, argv.body);
   if(note){
    console.log('Note created');
    console.log('___');
    console.log(`Title: ${note.title}`);
    console.log(`body: ${note.body}`);
   }
//  console.log('Adding new node')
 } else if(command === 'list') {
     notes.getAll();
    console.log('Listing notes')
 }else if(command === 'read'){
     notes.getNote(argv.title)
    console.log('Reading node')
 } else if(command === 'remove'){
     notes.removeNote(argv.title);
    console.log('Remove node')
 } else  {
     console.log('command  not recognized')
 }

 const http = require('http');
 const server = http.createServer(function(req,res){
     res.writeHead(200,{'Content-Type':'test/plain'})
     res.end('hello mustaf server')
 })
 server.listen(5000);
 console.log('server listening port')




// console.log(_.isString(true));
// console.log(_.isString('Mustaf'));
// console.log(_.uniq([1,2,2,3,'mustaf', 'ahmed', 'dirie']));



// var res = notes.addNote();
// var result = notes.mustaf();
// var add = notes.addNum(7,3)





// console.log('natiijo:',add)
// console.log(res);
// console.log(result);



// var user = os.userInfo()
// console.log(user)

// // fs.appendFile('greeting.txt','hello world'); 
// fs.appendFile('greetings.txt', `hello ${user.username}! you are ${notes.age}`,function(err){
//     if(err){
//         console.log('unable to write to file')
//     }
// })

