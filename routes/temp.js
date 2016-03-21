/*
on this module we will be saving to the database intermitally with values from UPS
these values will be graphed to the front end webpage
*/

var express = require('express');
var snmp = require('snmp-native');
var mongoose = require('mongoose');
/////////////////////////


mongoose.createConnection('mongodb://localhost/localhost');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
});



/////////////////

var getList = function (successCallback) {
    var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});
    var vb;
    session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 3, 2, 0]}, function (err, varbinds) {
        if (err) {
            console.log(err);
        } else {
            vb = varbinds[0];
            console.log('internal temp  is "' + vb.value + '"');
        }
        successCallback(vb.value);
        session.close();
    });
};




var voltageModel = mongoose.model('Voltage', {temp: Number});//new mongoose model
setInterval (function(){//interval function which allows us to store values every 8 seconds
    getList(function(data) {
        var Voltage = new voltageModel({temp:data});//new schema
        Voltage.save(function (err) {
            if (err)//....
                console.log('Done');
        });
    });
}, 600000);//saving to the database every 60 seconds //



mongoose.models = {temp: Number};
mongoose.modelSchemas = {temp: Number};




















/*
 app.get('/volt', function (req, res) {
 var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});

 var vb;
 session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 2, 8, 0]}, function (err, varbinds) {
 if (err) {
 console.log(err);
 } else {
 vb = varbinds[0];
 console.log('The system description is "' + vb.value + '"');
 }
 successCallback(vb.value);
 session.close();
 res.send(vb.value);
 });

 });
 app.listen(3000);

*/

///////////////////////////////////////

/*
 app.get('/', function (req, res) {
 res.send('hello World')
 });
 app.listen(3000);

 */

//////////////////////////////////////////