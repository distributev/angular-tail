// var conn = require('./connection.js');
var Tail = require('tail').Tail;
var io= null;

module.exports={
	setup:function(app){
    app.post('/tail',this.tail);
    app.delete('/tail',this.untail);
    app.post('/tail/write',this.write);
  },
  connection:function(ioInput,socket){
    io=ioInput;
  },
  tail:function(req,res){
    var option = req.body.option;
    var file_path = req.body.filePath;

    tail = new Tail(file_path,option);
    tail.watch();
    tail.on("line", function(data) {
      io.emit('new lines', {data:data});
    });

    tail.on("error", function(error) {
      console.log('ERROR: ', error);
    });
  },
  untail:function(req,res){
    if(tail){
      tail.unwatch();
      res.send({'result':'Tail process stopped'});
    }else{
      res.send({'result':'No tail found'});
    }
  },
  write:function(req,res){
    var fs = require('fs');
    var file_path = req.body.filePath;
    var stream = fs.createWriteStream(file_path);
    var interval = setInterval(function() {
        stream.write((new Date()).toString()+ "\r\n");
    }, 1000);
       
      setTimeout(function() {
        clearInterval(interval);
        stream.end();
    }, 300000);
  }
}


