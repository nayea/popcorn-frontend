


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
			'views': {
				'mainCarousel': {
					'templateUrl' : 'views/mainCarousel.html',
			   		'controller' : 'carouselController'
				},
				'mainRanking':{
					'templateUrl' : 'views/mainRanking.html',
			   		'controller' : 'rankingController'
				},
				'mainRecommend':{
					'templateUrl' : 'views/mainRecommend.html'
				},
				'mainMagazine': {
					'templateUrl' : 'views/mainMagazine.html'
				}
			}
	})
	.state('edit',{
			'url': '/detail/:id',
			'views':{
			  'main':{
				'templateUrl' : 'views/movieinfo.html'
			    }
			}
	});

	// .state('list',{
	// 		'url': '/',
	// 		'templateUrl' : 'views/mainCarousel.html',
	// 		'controller' : 'carouselController'
	// })
	// .state('edit',{
	// 		'url': '/detail/:id',
	// 		'templateUrl' : 'views/movieinfo.html',
	// 		'controller' : 'moviedetailController'
	// });

      //$urlRouterProvider
      $urlRouterProvider.otherwise('/');

      //ngResource
	let token = 'Token ffa44753118e755c0c28070fcbcc6c9a048b99bf';
	$httpProvider.defaults.headers.common['Authorization'] = token;
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);



// --------------------------------------------------------
// directive
// --------------------------------------------------------
require('./directives/mainCarousel');
// require('./directives/mainRecommend');
// require('./directives/movieinfoDirective');



require('./controllers/main/carouselController');
require('./controllers/main/rankingController');
// require('./controllers/main/DetailController');
require('./controllers/main/recommendSelectController');
require('./controllers/main/recommendCountryController');
require('./controllers/main/recommendGradeController');
require('./controllers/main/magazineController.es6')


// --------------------------------------------------------
// controllers: 영화 상세
// --------------------------------------------------------
require('./controllers/movieinfoDetail/moviedetailController');
require('./controllers/movieinfoDetail/movieinfoRelatedController');




// --------------------------------------------------------
//service : main
// --------------------------------------------------------
require('./services/main/carouselDataShareService');
require('./services/main/magazineDataShareService.es6');
require('./services/main/rankingDataShareService');

//recommend-select (genre, country, grade)
require('./services/main/recommendSelectDataShareService');
require('./services/main/recommendCountryDataShareService');
require('./services/main/recommendGradeDataShareService');


// --------------------------------------------------------
// service: 영화상세
// --------------------------------------------------------
require('./services/movieinfodetail/moviedetailDataShareService');
require('./services/movieinfodetail/movieinfoRelatedDataShareService');





// Filters
require('./filters/readingZeroFilter');



// main-script
// require('./main-script/ui-carousel');
require('./main-script/header-scroll');
require('./main-script/recommend-carousel');
// require('./main-script/recommend-choice');
require('./main-script/ranking-hover');
require('./movie-info/movieinfo');
// require('./main-script/scroll-effect.js');
//
// require('../views/mainCarousel.html');
