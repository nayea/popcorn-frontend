'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('userinfo', ['$resource', function($resource){
    return $resource(
      'https://django-api.com/member/my-info/',{},
      { 'get' : {
            method: 'get', 
            header: {'Authorization' : 'window.localStorage[‘key1’]'}
          }
      });
  }])
 
  .service('userinfoDataShareService', ['userinfo' , (userinfo)=>{  
     var _service = {
        'userinfo_movie' : null,
        'movies' : [],
        'is_loading' : false,
        'loadContacts' : ( ) =>{
           userinfo.get((data)  =>{
           
                    _service.movies.push(new userinfo(data));
                    // _service.userinfo(data);
           
        });
        }
     };

   
    _service.loadContacts();
     return _service;
  }]);