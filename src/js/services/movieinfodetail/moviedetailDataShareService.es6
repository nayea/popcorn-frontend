'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('moviedetail', ['$resource','$stateParams', function($resource,$stateParams){
    // console.log($stateParams.id); 
    return $resource(
      'https://django-api.com/movie/:id/',{id: $stateParams.id}
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

   
    _service.loadContacts();
     return _service;
  }]);