'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('loginController',
    ['$scope', 'loginDataShareService',  ($scope,loginDataShareService)=>{

     $scope.login_data = loginDataShareService; 
     


     $scope.selectMovie=function(movie) {
      $scope.login_data.login_person= movie;
       console.log($scope.login_data,login_person);
    };

     function gotoListPage(){
    	$state.go('list');
    	$scope.signup_data.signup_person = null;
    }

    $scope.create = ()=> {
    	$scope.login_data.createContact($scope.login_data.login_person, gotoListPage);

    }

  }]);