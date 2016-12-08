


// 빌드시 아래 주석을 해제한 후 빌드
// require('jquery');
// let angular = requrie('angular');
// 의존 모듈 주입
// require('angular-resource');

let popcorn = angular.module('PopcornListApp', []);

// console.log(bipan);
// 
// 모듈 환경설정
// popcorn.config(['$httpProvider',function($httpProvider){
// 	 console.log($httpProvider);
// }])

require('./lib/jquery.js');
require('./lib/jquery.easing.min.js');
require('./lib/scrollmagic/uncompressed/ScrollMagic.js');
require('./lib/scrollmagic/uncompressed/plugins/debug.addIndicators.js');
// require('./lib/scrollmagic/uncompressed/plugins/animation.gsap.js');
require('./lib/scrollmagic/TweenMax.min.js')

// list 연결
require('./controller/listController.js');
//Custom Filter
require('./filters/readingZeroFilter');

// main-script
require('./main-script/ui-carousel.js');
require('./main-script/header-scroll.js');
require('./main-script/recommend-carousel.js');
require('./main-script/scroll-effect.js');
