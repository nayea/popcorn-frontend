

'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('rankingController',
    ['$scope', 'rankingDataShareService', ($scope, rankingDataShareService)=>{

      // popcorn 모델 데이터
    $scope.ranking_data = rankingDataShareService;
    console.log($scope.ranking_data);
    // 컨트롤러 $scope 객체의 속성
    $scope.search = '';
    $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie =function(movie) {
      $scope.ranking_data.ranking_movie = movie;
    
    };
 

  }]);
