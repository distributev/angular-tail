angular.module('myApp').factory('SocketService',['$rootScope',function($rootScope){
	 var socket = null;
	 var lines = [];
	 var line = null;
	 
	 var socketService = {
	 	connect:function(profile,token){
	 		if(!socket){
		 		socket = io.connect(config.socketio_url);
		 		socket.on('connect', function (data) {		
		 			socket.on('new lines',function(data){
		 				line = data.data;
						lines.push(data.data);	
						$rootScope.$apply(); 
					});	   
			
			    });

		    }
	 	},
	 	getSocket:function(){
	 		return socket;
	 	},
	 	getLines:function(){
	 		return lines;
	 	},
	 	getOneLine: function(){
	 	 	return line;
	 	},
	 };

	 return socketService;
}]);
