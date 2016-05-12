angular.module('myApp')
    .factory('TailService',['$http',function($http){
    	var base_url=config.service_url+'/tail';
    	return {
            tail:function(data){
                var url=base_url;
                return $http({
                    method:'POST',
                    url:url,
                    data:data,
                    headers:{
                        'Content-type':'application/json'
                    }
                });
            },
            untail:function(query){
                var url=base_url;
                return $http({
                    method:'DELETE',
                    url:url
                });
            },
            writeFile:function(data){
                var url=base_url+'/write';
                return $http({
                    method:'POST',
                    url:url,
                    data:data,
                    headers:{
                        'Content-type':'application/json'
                    }
                });    
            },
          

    	};
    }]);