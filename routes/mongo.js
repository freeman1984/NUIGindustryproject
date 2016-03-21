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

    Voltage.find({}, function (err, data) {
        console.log(data);
    });




mongoose.models = {temp: Number};
mongoose.modelSchemas = {temp: Number};



*/






/*
var mongoose = require('mongoose');


///////////////////////////////////////////////////

mongoose.connect('mongodb://localhost/localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
});


var Voltage = mongoose.model('Voltage', {temp: Number});




var Voltage = new Voltage({temp: 27});

Voltage.save(function (err) {
    if (err)//....
        console.log('Done');
});

*/