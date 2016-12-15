


// 빌드시 아래 주석을 해제한 후 빌드
// require('jquery');
let angular = require('angular');


// 의존 모듈 로드
require('angular-resource');
// require('ng-infinite-scroll');
// require('spin');
// require('angular-spinner');

// App 모듈 정의 (의존 모듈 주입)
let popcorn = angular.module('PopcornListApp', ['ngResource']);

// 모듈 환경 설정
popcorn.config([
	'$httpProvider',
	'$resourceProvider',
	($httpProvider,$resourceProvider)=>{
	// let token = 'Token dab1748ebaceb34ed6796bc3b7dc84741b77af54';
	let token = 'Token ffa44753118e755c0c28070fcbcc6c9a048b99bf';
	$httpProvider.defaults.headers.common['Authorization'] = token;
	$resourceProvider.defaults.stripTrailingSlashes = false;
}]);


// require('./lib/jquery.js');
// require('./lib/jquery.easing.min.js');
// require('./lib/scrollmagic/uncompressed/ScrollMagic.js');
// require('./lib/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
// require('./lib/scrollmagic/uncompressed/plugins/animation.gsap.js');
// require('./lib/scrollmagic/TweenMax.min.js')

// Controllers
require('./controllers/carouselController');
// require('./controllers/rankingController');
// require('./controllers/DetailController');
require('./controllers/recommendSelectController');
require('./controllers/recommendCountryController');
require('./controllers/recommendGradeController');



// Services
require('./services/carouselDataShareService');
// require('./services/rankingDataShareService');

//recommend-select (genre, country, grade)
require('./services/recommendSelectDataShareService');
require('./services/recommendCountryDataShareService');
require('./services/recommendGradeDataShareService');


// Filters
require('./filters/readingZeroFilter');



// main-script
require('./main-script/ui-carousel.js');
require('./main-script/header-scroll.js');
require('./main-script/recommend-carousel.js');
require('./main-script/recommend-choice.js');
require('./main-script/ranking-hover.js');
// require('./main-script/scroll-effect.js');

// movie-info script
require('./movie-info/movieinfo.js');
