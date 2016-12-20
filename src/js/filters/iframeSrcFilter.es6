'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .filter('iframeSrc', ['$sce', function($sce) {
    return function(val) {
      $sce.trustAsResourceUrl(val);
    };
  }]);
