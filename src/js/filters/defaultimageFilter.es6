'use strict';

let angular = require('angular');

angular
  .module('PopcornListApp')
  .filter('defaultImage', ()=>{
    return function(input){
       return input || 'http://www.novelupdates.com/img/noimagefound.jpg';
    };
  });
