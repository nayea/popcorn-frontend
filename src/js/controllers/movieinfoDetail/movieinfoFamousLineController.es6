'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('movieinfoFamousLineController',
    ['$scope', 'movieinfoFamousLineDataShareService', ($scope, movieinfoFamousLineDataShareService)=>{

      // popcorn 모델 데이터
    $scope.movieinfoFamousLine_data = movieinfoFamousLineDataShareService;
    console.log($scope.movieinfoFamousLine_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = '';
    // $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie =function(movie) {
      $scope.movieinfoFamousLine_data.movieinfoFamousLine_movie = movie;
    
    };
 

  }]);