var express = require('express');
var app = express();
var http = require('http');
var server = http.createServer(app);
var io = require('socket.io')(server);
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: false}));
	
app.use(bodyParser.json({limit: '50mb'}));

app.all('/*',
		[ function(req, res, next) {
		     res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
		     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
             res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept,Authorization");
		     if (req.method == 'OPTIONS') {
		         res.status(200).end();
		     } 
		     else {
                 next();
		     }
	      }
	    ]
	);

require("./routes/index.js")(app);
require("./socket/socket.js")(io);

app.listen(3001, function () {
	console.log('Started!');
});

server.listen(2000, function(){
  console.log('Socket is listening on *:2000');
});


