

'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('magazineController',
    ['$scope', 'magazineDataShareService', ($scope, magazineDataShareService)=>{

      // popcorn 모델 데이터
    $scope.magazine_data = magazineDataShareService;
    // console.log($scope.magazine_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search = '';
    $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie=function(movie) {
      $scope.magazine_data.magazines_movie = movie;

    };


  }]);
