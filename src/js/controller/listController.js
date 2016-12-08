'use strict';


// let angular = require('angular');
angular
  .module('PopcornListApp')
  .controller('ListController', ['$scope', function($scope){
   $scope.movies = 
  {
    "category": "opening",
    "title": "캡틴 판타스틱",
    "english_title": "CaptainFantastic",
    "director": "맷 로스",
    "year": "2016",
    "duration": "118",
    "nation": "USA",
    "image": "http://cfile8.uf.tistory.com/image/034B164F50E40D1D350BF8"
  };

//컨트롤러 $scope 객체의 속성
$scope.selected_index = null;

// 컨트롤러 $scope 객체의 메소드
  $scope.selectMovie = function(movie, $index){
  	$scope.selected_index = $index;
  	$scope.selected_movie= movie ;
  };

}]);