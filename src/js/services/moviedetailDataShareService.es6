'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('moviedetail', ['$resource','$stateParams', function($resource,$stateParams){
    // let url = 'https://codecraftpro.com/api/samples/v1/contact/:id/'; // 서버단에서 주는  api 를 받아서 반환
    // console.log($stateParams.id); 
    return $resource(
      'https://django-test.com/movie/:id/',{id: $stateParams.id}
      // { 'get' : {method: 'GET', isArray: true}}
      );
  }])
 
  .service('moviedetailDataShareService', ['moviedetail' , (moviedetail)=>{  
     var _service = {
        'moviedetail_movie' : null,
        'movies' : [],
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           moviedetail.get((data)  =>{
           
                    _service.movies.push(new moviedetail(data));
           
        });
        }
     };

     // var _service = {
     //    'moviedetail_movie' : null,
     //    'movies' : [],
     //    'is_loading' : false,
     //    'loadContacts' : ( ) =>{
     //       moviedetail.get((data)  =>{
     //         angular.forEach(data, (movie) => {
     //                _service.movies.push(new moviedetail(movie));
     //         });
     //    });
     //    }
     // };
   
    _service.loadContacts();
     return _service;
  }]);