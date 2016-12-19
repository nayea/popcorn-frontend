
'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('movieinfoComment', ['$resource','$stateParams', function($resource,$stateParams){
    return $resource(
      'https://django-test.com/movie/:id/comment/',{id: $stateParams.id},
      { 'get' : {method: 'GET'}}
      );
  }])

   .service('movieinfoCommentDataShareService', ['movieinfoComment' , (movieinfoComment)=>{  
     var _service = {
        'movieinfoComment_movie' : null,
        'movies' : [],
       // 'has_more' : true, // 다음 페이지가 있으면 true
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           movieinfoComment.get((data)  =>{
             angular.forEach(data.results, (movie) => {
                    _service.movies.push(new movieinfoComment(movie));
             });
        });
        }
     };
   
    _service.loadContacts();

     return _service;
  }]);