

'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('carouselController',
    ['$scope', 'carouselDataShareService', ($scope, carouselDataShareService)=>{

      // popcorn 모델 데이터
    $scope.share_data = carouselDataShareService;
    // console.log($scope.share_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search = '';
    $scope.order  = 'id';

    // 컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie =function(movie) {
      $scope.share_data.selected_movie = movie;
    // // popcorn 모델 데이터
    // $scope.share_data = ListDataShareService;
    // console.log($scope.share_data);
    // // 컨트롤러 $scope 객체의 속성
    // // $scope.search = {};
    // $scope.search = '';
    // $scope.order  = 'id';

    // // 컨트롤러 $scope 객체의 메소드
    // $scope.selectPerson =function(person) {
    //   $scope.share_data.selected_person = person;
    };
 


    // 엄격하게 일치하는 검색 기능
    // $scope.sensitiveSearch = function(person) {
    //   var search = $scope.search;
    //   if ( search ) {
    //     return person.title.indexOf(search) === 0 ||
    //            person.director.indexOf(search) === 0 ||
    //            person.year.indexOf(search) === 0 ||
    //            person.category.indexOf(search) === 0;
    //   }
    //   return true;
    // };

  }]);

 