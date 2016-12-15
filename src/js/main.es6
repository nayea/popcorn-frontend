


// 빌드시 아래 주석을 해제한 후 빌드
require('./lib/jquery');
require('./lib/jquery.easing.min');

let angular = require('angular');


// 의존 모듈 로드
require('angular-resource');
require('angular-ui-router');
// require('ng-infinite-scroll');
// require('spin');
// require('angular-spinner');

// App 모듈 정의 (의존 모듈 주입)
let popcorn = angular.module('PopcornListApp', [
	'ngResource',
	'ui.router',
	]);



// 모듈 환경 설정
popcorn.config([
	'$httpProvider',
	'$resourceProvider',
	'$stateProvider',
	'$urlRouterProvider',
	($httpProvider,$resourceProvider,$stateProvider,$urlRouterProvider)=>{

      //$stateProvider
      $stateProvider
	.state('list',{
			'url': '/',
			'templateUrl' : 'views/mainCarousel.html',
			'controller' : 'carouselController'
	})
	.state('edit',{
			'url': '/detail/:id',
			'templateUrl' : 'views/movieinfo.html',
			'controller' : 'moviedetailController'
	});

      //$urlRouterProvider
      $urlRouterProvider.otherwise('/');

      //ngResource
	let token = 'Token ffa44753118e755c0c28070fcbcc6c9a048b99bf';
	$httpProvider.defaults.headers.common['Authorization'] = token;
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);




// Controllers
require('./controllers/carouselController');
require('./controllers/rankingController');
// require('./controllers/DetailController');
require('./controllers/recommendSelectController');
require('./controllers/recommendCountryController');
require('./controllers/recommendGradeController');
require('./controllers/magazineController.es6')
require('./controllers/moviedetailController');



// Services
require('./services/carouselDataShareService');
require('./services/magazineDataShareService.es6');
require('./services/rankingDataShareService');

//recommend-select (genre, country, grade)
require('./services/recommendSelectDataShareService');
require('./services/recommendCountryDataShareService');
require('./services/recommendGradeDataShareService');

require('./services/moviedetailDataShareService');


//directives
require('./directives/mainCarousel');
// require('./directives/movieinfoDirectives');

// Filters
require('./filters/readingZeroFilter');



// main-script
// require('./main-script/ui-carousel');
require('./main-script/header-scroll');
require('./main-script/recommend-carousel');
require('./main-script/recommend-choice');
require('./main-script/ranking-hover');
// require('./main-script/scroll-effect.js');
//
// require('../views/mainCarousel.html');
