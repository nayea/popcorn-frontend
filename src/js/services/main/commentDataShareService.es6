'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('comment', ['$resource', function($resource){
    return $resource(
      'https://django-test.com/main/comments/',{},
      { 'get' : {method: 'GET', isArray: true}}
      );
  }])

  .service('commentDataShareService', ['comment' , (comment)=>{
     var _service = {
        'comment_movie' : null,
        'movies' : [],
       'has_more' : true, // 다음 페이지가 있으면 true
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           comment.get((data)  =>{
             angular.forEach(data, (movie) => {
                    _service.movies.push(new comment(movie));
             });
        });
        }
     };

    _service.loadContacts();

     return _service;
  }]);
