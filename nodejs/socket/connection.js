var tail = require("../routes/tail.js");
var io= null;

module.exports={
  setup:function(ioInput){
     io = ioInput;
     io.sockets.on('connection',this.connection)
  },

  connection:function(socket){
    tail.connection(io,socket);
  }
};

