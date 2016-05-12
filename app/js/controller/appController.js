angular.module('myApp',[])
  .controller('appController', ['$scope','SocketService',function($scope,SocketService) {
    $scope.tail = {
      watch:{
        persistent:true,
        recursive:false,
        encoding:"UTF8"
      },
      fromBeginning:false,
      follow:true
    };


    $scope.$watch("[tail.watch.persistent,tail.watch.recursive,tail.watch.encoding]",function(newVal){
      if(newVal !== undefined){
        $scope.watchOptions = $scope.tail.watch;
      }
    });


  }]);