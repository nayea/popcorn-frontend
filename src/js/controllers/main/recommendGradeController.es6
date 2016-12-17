let angular = require('angular');

angular
  .module('PopcornListApp')
  .controller('recommendGradeController',
    ['$scope', 'recommendGradeDataShareService', ($scope, recommendGradeDataShareService)=>{

      // popcorn 모델 데이터
    $scope.recommendGrade_data = recommendGradeDataShareService;
    // console.log($scope.recommendGrade_data);
    // 컨트롤러 $scope 객체의 속성
    // $scope.search = {};
    $scope.search = '';
    $scope.order  = 'id';

    //컨트롤러 $scope 객체의 메소드 // 클릭시 세부정보로 가도록
    $scope.selectMovie =function(movie) {
      $scope.recommendGrade_data.recommendGrades_movie = movie;
    };
 

  }]);