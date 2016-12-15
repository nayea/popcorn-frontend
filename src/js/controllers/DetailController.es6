'use strict';


let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('DetailController',
    ['$scope', 'carouselDataShareService', '$stateParams',($scope, carouselDataShareService,$stateParams)=>{
    	// $scope.mode = 'Edit';
      console.log($stateParams.id); 
      $scope.share_data = carouselDataShareService;
      
      // $scope.share_data.selected_movie = carouselDataShareService.selectMovie($stateParams.id);
      $scope.share_data.selectMovie($stateParams.id);
   console.log($scope.share_data.selected_movie);
       // $scope.share_data.selectMovie($stateParams.id);

      //   function gotoListPage() {
      //   $state.go('list');
      //   $scope.share_data.selected_movie = null;
      // }
  }]);