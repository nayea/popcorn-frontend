'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('commentController',
    ['$scope', 'commentDataShareService', ($scope, commentDataShareService)=>{

      // popcorn 모델 데이터
    $scope.comment_data = commentDataShareService;
    console.log($scope.comment_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search = '';
    $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie=function(movie) {
      $scope.comment_data.comment_movie = movie;

    };


  }]);
