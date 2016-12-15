'use strict';


let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('DetailController',
    ['$scope', 'carouselDataShareService', '$stateParams',($scope, carouselDataShareService,$stateParams)=>{
    	// $scope.mode = 'Edit';
      $scope.share_data = carouselDataShareService;
      // console.log($scope.share_data.selected);

       // $scope.share_data.selectMovie($stateParams.id);

      //   function gotoListPage() {
      //   $state.go('list');
      //   $scope.share_data.selected_movie = null;
      // }
  }]);