'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('moviedetailController',
    ['$scope', 'moviedetailDataShareService', ($scope, moviedetailDataShareService,)=>{

      // popcorn 모델 데이터
    $scope.moviedetail_data = moviedetailDataShareService;

    // console.log($stateParams.id); 
    console.log($scope.moviedetail_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    // $scope.search = '';
    // $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie=function(movie) {
      $scope.moviedetail_data.moviedetail_movie = movie;

    };


  }]);
