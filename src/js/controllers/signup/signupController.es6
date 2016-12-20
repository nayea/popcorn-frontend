'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('signupController',
    ['$scope', 'signupDataShareService', '$state', ($scope,signupDataShareService,$state)=>{

     $scope.signup_data = signupDataShareService; 
     

     $scope.selectMovie=function(movie) {
      $scope.signup_data.signup_person= movie;

    };

    function gotoLoginPage(){
    	$state.go('signin');
    	$scope.signup_data.signup_person = null;
    };

    $scope.create = ()=> {
    	$scope.signup_data.createContact($scope.signup_data.signup_person, gotoLoginPage);
    };

  }]);