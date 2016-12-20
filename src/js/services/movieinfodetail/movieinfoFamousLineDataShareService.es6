'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('movieinfoFamousLine', ['$resource','$stateParams', function($resource,$stateParams){
    return $resource(
      'https://django-test.com/movie/:id/famous/',{id: $stateParams.id},
      { 'get' : {method: 'GET'}}
      );
  }])

   .service('movieinfoFamousLineDataShareService', ['movieinfoFamousLine' , (movieinfoFamousLine)=>{  
     var _service = {
        'movieinfoFamousLine_movie' : null,
        'movies' : [],
       // 'has_more' : true, // 다음 페이지가 있으면 true
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           movieinfoFamousLine.get((data)  =>{
             angular.forEach(data.results, (movie) => {
                    _service.movies.push(new movieinfoFamousLine(movie));
             });
        });
        }
     };
   
    _service.loadContacts();

     return _service;
  }]);