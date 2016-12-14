


// 빌드시 아래 주석을 해제한 후 빌드
// require('jquery');
// let angular = requrie('angular');


// 의존 모듈 로드
require('angular-resource');
// require('ng-infinite-scroll');
// require('spin');
// require('angular-spinner');

// App 모듈 정의 (의존 모듈 주입)
let popcorn = angular.module('PopcornListApp', ['ngResource']);

// 모듈 환경 설정
popcorn.config(['$httpProvider', '$resourceProvider', ($httpProvider,$resourceProvider)=>{
	let token = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
	// let token = 'Token 041d0897d974a2eb65353ae95484974c559d661b';
	$httpProvider.defaults.headers.common['Authorization'] = token;
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);
// bipan.config([
//   '$httpProvider',
//   '$resourceProvider',
//   'usSpinnerConfigProvider',
//   ($httpProvider, $resourceProvider, usSpinnerConfigProvider)=> {
//   let token = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
//   $httpProvider.defaults.headers.common['Authorization'] = token;
//   $resourceProvider.defaults.stripTrailingSlashes = false;
//   // usSpinnerConfigProvider
//   usSpinnerConfigProvider.setTheme('white-spinner', {
//     'color'  : '#ffffff',
//     'radius' : 25,
//     'width'  : 6,
//     'length' : 21,
//     'lines'  : 17,
//     'scale'  : 0.45,
//   });
// }]);

// console.log(bipan);
//
// 모듈 환경설정
// popcorn.config(['$httpProvider',function($httpProvider){
// 	 $httpProvider.defaults.headers.common['Authorization'] = token;
// }])

require('./lib/jquery.js');
require('./lib/jquery.easing.min.js');
// require('./lib/scrollmagic/uncompressed/ScrollMagic.js');
// require('./lib/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
// require('./lib/scrollmagic/uncompressed/plugins/animation.gsap.js');
// require('./lib/scrollmagic/TweenMax.min.js')

// Controllers
require('./controllers/ListController');
require('./controllers/DetailController');
// Services
require('./services/ListDataShareService');
// Filters
require('./filters/readingZeroFilter');

// main-script
require('./main-script/ui-carousel.js');
require('./main-script/header-scroll.js');
require('./main-script/recommend-carousel.js');
require('./main-script/scroll-effect.js');

// movie-info script
require('./movie-info/movieinfo.js');
