'use strict';


let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('DetailController',
    ['$scope', 'ListDataShareService', ($scope, ListDataShareService)=>{
      $scope.share_data = ListDataShareService;
  }]);