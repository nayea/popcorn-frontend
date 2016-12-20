'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('loginController',
    ['$scope', 'loginDataShareService', '$state', ($scope,loginDataShareService,$state)=>{

     $scope.login_data = loginDataShareService; 
     


     $scope.selectMovie=function(person) {
      $scope.login_data.login_person= person;
       
    };

     function gotoListPage(){
    	$state.go('list');
    	$scope.login_data.login_person = null;
    }

    $scope.create = ()=> {
    	$scope.login_data.createContact($scope.login_data.login_person,  gotoListPage);

    };

  }]);