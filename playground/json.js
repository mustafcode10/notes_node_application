var obj = {
    name: 'Mustaf'
};

var stringObj = JSON.stringify(obj)
// to know the type of kind 
console.log(typeof stringObj);
// to see the obj
console.log(stringObj);
console.log(obj);

var personString = '{"name": "Mustaf", "age":24}';
var person = JSON.parse(personString);
console.log(personString);
console.log(typeof person);
console.log(person);


// // var peopleString = '{"name":"human"}';
// // var people = JSON.parse(peopleString);
// // console.log(peopleString);
// // console.log(people);
// // console.log(typeof peopleString);


// const fs = require('fs');


// var originalNote = {
//     title:'some title',
//     body:'some body'
// };

// var originalNoteString = JSON.stringify(originalNote);
// fs.writeSync(notes.json,originalNoteString);

// var noteString = fs.readFileSync(notes.json);
// var note = JSON.parse(noteString);
// console.log(typeof note);
// console.log(note.title);


const fs = require('fs');


var originalNote = {
    title: "some titile",
    body: "some body"
};

// originalNoteString.

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);



// note object.

var noteString = fs.readFileSync('notes.json');
 var note = JSON.parse(noteString);
//  console.log(note);
 console.log(typeof note);
console.log(note.title);




















