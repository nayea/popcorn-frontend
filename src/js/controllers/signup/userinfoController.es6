'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('userinfoController',
    ['$scope', 'userinfoDataShareService', ($scope, userinfoDataShareService)=>{

      // popcorn 모델 데이터
    $scope.userinfo_data = userinfoDataShareService;


  console.log($scope.userinfo_data);


      $scope.selectMovie=function(person) {
      $scope.userinfo_data.userinfo_person = person;
      
    };


  }]);