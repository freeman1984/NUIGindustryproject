
/*
//////below we will be getting code from database/////////////////////////////////
var mongoose = require('mongoose');


///////getting to database in this page and getting stored values///////////////////

mongoose.connect('mongodb://localhost/localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});


var Voltage = mongoose.model('Voltage', {temp: Number});



Voltage.find(function(err, data) {
    console.log(data);
});



*/



















/*
 Kitten.find({ name: /^Fluff/ }, function(err, kittens) {

 });

 Kitten.find(function (err, kittens) {
 if (err) // TODO handle err
 console.log(kittens)
 })*/



/*
 var kittySchema = mongoose.Schema({
 name: String
 });


 // NOTE: methods must be added to the schema before compiling it with mongoose.model()
 kittySchema.methods.speak = function () {
 var greeting = this.name
 ? "Meow name is " + this.name
 : "I don't have a name";
 console.log(greeting);
 }


 ////mongoose. model/////
 var Kitten = mongoose.model('Kitten', kittySchema);

 var silence = new Kitten({ name: 'Silence' });
 console.log(silence.name); // 'Silence'



 var Kitten = mongoose.model('Kitten', kittySchema);



 var fluffy = new Kitten({ name: 'fluffy' });
 fluffy.speak(); // "Meow name is fluffy"


 fluffy.save(function (err, fluffy) {
 if (err) return console.error(err);
 fluffy.speak();
 });

 */
/////////////////////
