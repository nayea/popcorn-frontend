'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('recommendSelectController',
    ['$scope', 'recommendSelectDataShareService', ($scope, recommendSelectDataShareService)=>{

      // popcorn 모델 데이터
    $scope.recommendSelect_data = recommendSelectDataShareService;
    console.log($scope.recommendSelect_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search = '';
    $scope.order  = 'id';

    //컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie =function(movie) {
      $scope.recommendSelect_data.recommendSelected_movie = movie;
    };
 

  }]);