

var angular = require('angular');

angular
  .module('PopcornListApp')  
  // .controller('carouselController', function($scope) {
  //   $scope.person = {
  //     'name': 'nextreeMember',
  //     'address': 'Gasan'
  //   };
  // })
  .directive('mainCarousel', function() {
    return {
      'restrict' : 'EA',
      'templateUrl': '/views/mainCarousel.html',
      'link': function(scope, element, attrs) {
        var main_carousel = {
          'height': 530,
        
         
          'index': {
            'desktop': 2,
            'tablet': 1,
            'mobile': 0
          },
          'col': {
            'desktop': 5,
            'tablet': 3,
            'mobile': 1
          },
          'margin': 20,
          'infinite': {
            'desktop': true,
            'tablet': true,
            'mobile': false
          }
        }
        scope.repeatComplete = function() {
          var $carousel = element.find('#main-carousel');
          $carousel.popcornCarousel(main_carousel);
        };
      }
   };
      // 'template': 'Name: {{person.name}} </br> Address: {{person.address}}'
});