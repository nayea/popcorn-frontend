'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('BoxOffice', ['$resource', function($resource){
    // let url = 'https://codecraftpro.com/api/samples/v1/contact/:id/'; // 서버단에서 주는  api 를 받아서 반환
    return $resource(
      'https://django-test.com/main/box-office/',{},
      { 'get' : {method: 'GET', isArray: true}}
      );
  }])
 
  .service('rankingDataShareService', ['BoxOffice' , (BoxOffice)=>{  
     var _service = {
        'ranking_movie' : null,
        'movies' : [],
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           BoxOffice.get((data)  =>{
             angular.forEach(data, (movie) => {
                    _service.movies.push(new BoxOffice(movie));
             });
        });
        }
     };
   
    _service.loadContacts();

     return _service;
  }]);