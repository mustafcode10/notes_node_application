console.log("starting notes.js");
// console.log(module);
// module.exports.age = 25;

const fs = require("fs");

// var fetchNote = () => {
//   try {
//     var noteString = fs.readFileSync("notes-date.json");
//     return JSON.parse(noteString);
//   } catch (e) {
//     return [];
//   }
// };

// var saveNotes = (notes) => {
//         fs.writeFileSync("notes-date.json", JSON.stringify(notes));
// };

var addNote = (title, body) => {
  //     console.log('Adding note', title, body);
//   var notes = fetchNote();
  var notes = [];
  var note = {
    title,
    body
  };
  
//   var doubleNotes = notes.filter((note)=>{
//           return note.title === title;
//           notes.push(note);
//           saveNotes(notes);
//           return note;

//   })

  notes.push(note);
  fs.writeFileSync("note-date.json", JSON.stringify(notes));
       var noteString = fs.readFileSync('note-date.json');
        notes = JSON.parse(noteString);
};

var getAll = () => {
  console.log("Get all notes");
};
var getNote = title => {
  console.log("read the material", title);
};
var removeNote = title => {
  //     console.log('remove the',title)
  var notes2 = [];
  var note2 = {
    title
  };
  /// object change into string.
  var obj = {
    name: "mustaf",
    email: "mustaf@gmail.com",
    country: "Somali",
    age: 24
  };

  // to push the new array of notes2
  notes2.push(note2);
  // to create file mustaf.json and  change into string and save it.
  fs.writeFileSync("mustaf.json", JSON.stringify(note2));
  // to create file name mustafString.json and change object into
  // into the string and then save it.
  fs.writeFileSync("mustafString.json", JSON.stringify(obj));

  // var result = fs.readFileSync(JSON.parse(objt));
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

// module.exports.addNote = (title,body)=>{
// console.log('addNote', title,body);
// // return 'New node' ;
// }

// module.exports.mustaf = function(){
//     console.log('mustaf ahmed dirie');
//     return 'Nationality Somalia';
// }

// module.exports.addNum = (a,b)=>{
//     return a + b;
// }
