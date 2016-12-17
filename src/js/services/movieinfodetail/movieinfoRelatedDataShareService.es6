'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('movieinfoRelated', ['$resource','$stateParams', function($resource,$stateParams){
    // console.log($stateParams.id); 
    return $resource(
      'https://django-test.com/movie/:id/related/',{id: $stateParams.id},
      { 'get' : {method: 'GET', isArray: true}}
      );
  }])

   .service('movieinfoRelatedDataShareService', ['movieinfoRelated' , (movieinfoRelated)=>{  
     var _service = {
        'movieinfoRelated_movie' : null,
        'movies' : [],
       // 'has_more' : true, // 다음 페이지가 있으면 true
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           movieinfoRelated.get((data)  =>{
             angular.forEach(data, (movie) => {
                    _service.movies.push(new movieinfoRelated(movie));
             });
        });
        }
     };
   
    _service.loadContacts();

     return _service;
  }]);
