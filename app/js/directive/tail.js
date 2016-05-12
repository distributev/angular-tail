angular.module('myApp').directive('tail',function(){
    return {
        restrict:'E',   
        replace:true,   
        templateUrl:'js/directive/views/tail.html',
        scope: {filePath:'=',lineSeparator: '=',fromBeginning: '=',watchOptions: '=',follow: '=?'},
        controller: ['$scope','SocketService','TailService',function($scope,SocketService,TailService){
            $scope.lineSeparator = $scope.lineSeparator?$scope.lineSeparator:"/[\r]{0,1}\n/";
            $scope.fromBeginning = $scope.fromBeginning == undefined?false:$scope.fromBeginning;
            $scope.watchOptions = $scope.watchOptions == undefined?{}:$scope.watchOptions;
            $scope.follow = $scope.follow == undefined?true:$scope.follow;

            $scope.SocketService=SocketService;
            SocketService.connect();

           
            
            $scope.watch = function(){
                    TailService.tail({option: {lineSeparator: $scope.lineSeparator, fromBeginning: $scope.fromBeginning, watchOptions: $scope.watchOptions, follow: $scope.follow},filePath:$scope.filePath});
            };

            $scope.unwatch = function(){
                TailService.untail().then(function(result){

                });
            };

            $scope.writeFile = function(){
                TailService.writeFile({filePath:$scope.filePath});
            };
            


    }]
};
});


