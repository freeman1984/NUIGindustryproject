
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var flash = require('connect-flash');


require('./routes/temp');
var routes = require('./routes/index');
var users = require('./routes/users');
var app = express();
var snmp = require('snmp-native');





//full database connection below
mongoose.connect('mongodb://localhost/localhost');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('connected');
});

var Voltage = mongoose.model('Voltage', {temp: Number});


app.get('/solution-two/data6', function (req, res) {
    Voltage.find().select('-_id -__v').exec(function (err, data) {
        res.json(data);
        console.log(data);
    });
})

mongoose.models = {temp: Number};
mongoose.modelSchemas = {temp: Number};





//sending out information regarding capacity of battery available
function foo5 (successCallback) {
    var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});

    setInterval (function() {//.1.3.6.1.4.1.318.1.1.1.2.2.1.0
        session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 2, 1, 0]}, function (err, varbinds) {
            var vb;
            if (err) {
                console.log(err);
            } else {
                vb = varbinds[0];
                //  console.log( + vb.value + '"');
            }
            successCallback(vb.value);
            session.close();
        });
    },1000);
};



app.get('/solution-two/data5', function (req, res) {
    foo5(function (volt) {
        res.json(volt);
    });
});




function foo4 (successCallback) {
    var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});

    setInterval (function() {//.1.3.6.1.4.1.318.1.1.1.2.2.9.0
        session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 2, 3, 0]}, function (err, varbinds) {
            var vb;
            if (err) {
                console.log(err);
            } else {
                vb = varbinds[0];
              //  console.log( + vb.value + '"');
            }
            successCallback(vb.value);
            session.close();
        });
    },1000);
};



app.get('/solution-two/data4', function (req, res) {
    foo4(function (volt) {
        res.json(volt);
    });
});







function foo (successCallback) {
  var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});

  setInterval (function() {
    session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 3, 2, 0]}, function (err, varbinds) {
      var vb;
      if (err) {
        console.log(err);
      } else {
        vb = varbinds[0];
       //console.log('The system Temperature is "' + vb.value + '"');
      }
      successCallback(vb.value);
      session.close();
    });
  },1000);
};



  app.get('/solution-two/data', function (req, res) {
    foo(function (volt) {
      res.json(volt);
    });
  });

///////////////////////


function foo2 (successCallback) {
  var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});

  setInterval (function() {
    session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 3, 4, 0]}, function (err, varbinds) {
      var vb2;
      if (err) {
        console.log(err);
      } else {
        vb2 = varbinds[0];
       // console.log('The system voltage is "' + vb2.value + '"');
      }
      successCallback(vb2.value);
      session.close();
    });
  },1000);
};



app.get('/solution-two/data2', function (req, res) {
  foo2(function (volt2) {
    res.json(volt2);
  });
});








//sending out periodic data to graph

function foo3 (successCallback) {
    var session = new snmp.Session({host: '192.168.24.102', port: 161, community: 'public'});

    setInterval (function() {
        session.get({oid: [1, 3, 6, 1, 4, 1, 318, 1, 1, 1, 2, 3, 2, 0]}, function (err, varbinds) {
            var vb;
            if (err) {
                console.log(err);
            } else {
                vb = varbinds[0];
                console.log('The system Temperature is "' + vb.value + '"');
            }
            successCallback(vb.value);
            session.close();
        });
    },1000);
};

//sending out periodic data to graph


app.get('/solution-two/data3', function (req, res) {
    foo3(function (volt) {
        res.json(volt);
    });
});


//////////////////////////




// view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    app.use('/', routes);
    app.use('/users', users);

// catch 404 and forward to error handler
    app.use(function (req, res, next) {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

// error handlers

// development error handler
// will print stacktrace
    if (app.get('env') === 'development') {
      app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
          message: err.message,
          error: err
        });
      });
    }

// production error handler
// no stacktraces leaked to user
    app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: {}
      });
    });


module.exports = app;



