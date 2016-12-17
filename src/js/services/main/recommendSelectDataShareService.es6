'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('RankingGenre', ['$resource', function($resource){
    // let url = 'https://codecraftpro.com/api/samples/v1/contact/:id/'; // 서버단에서 주는  api 를 받아서 반환
    return $resource(
      'https://django-test.com/favorite/genre/',{},
      { 'get' : {method: 'GET', isArray: true}}
      );
  }])
 // $http를 넣어서 주입했던 모듈 확인이 가능함
  // .service('ListDataShareService', ['$http', 'Contact' , ($http, Contact)=>{
  .service('recommendSelectDataShareService', ['RankingGenre' , (RankingGenre)=>{  
     var _service = {
        'recommendSelected_movie' : null,
        'movies' : [],
       // 'has_more' : true, // 다음 페이지가 있으면 true
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           RankingGenre.get((data)  =>{
             angular.forEach(data, (movie) => {
                    _service.movies.push(new RankingGenre(movie));
             });
        });
        }
     };
   
    _service.loadContacts();

     return _service;
  }]);
