'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('movieinfoRelatedController',
    ['$scope', 'movieinfoRelatedDataShareService', ($scope, movieinfoRelatedDataShareService)=>{

      // popcorn 모델 데이터
    $scope.movieinfoRelated_data = movieinfoRelatedDataShareService;
    console.log($scope.movieinfoRelated_data);
    // 컨트롤러 $scope 객체의 속성
    $scope.search = '';
    $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie =function(movie) {
      $scope.movieinfoRelated_data.movieinfoRelated_movie = movie;
    
    };
 

  }]);
