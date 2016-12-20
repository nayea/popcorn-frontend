'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('login', ['$resource', function($resource){
    return $resource(
      'https://django-api.com/member/login/',{},
       {'create': { method:'post' }}
      );
  }])
 
  .service('loginDataShareService', ['login' , (login)=>{  
    let initServiceSetting = ()=> {
      _service.people   = [];
      _service.page     = 1;
      _service.has_more = true;
    };
    
     var _service = {
        'login_person' : null,
        'people' : [],
        'is_loading' : false,
        'is_creating' : false,
        'loadContacts' : ( ) =>{

           _service.is_loading = true;
          //  login.get((data)=>{
          //   angular.forEach(data, (person)=>{
          //     _service.people.push( new login(person) );
          //   });
          // });
        },
        'createContact' : (person,gotoListPage) => {
           
            _service.is_creating = true;

            (new login(person)).$create().then(()=> {
                initServiceSetting();
                _service.loadContacts();
                _service.is_creating = false;
                 window.localStorage.clear();
                 window.localStorage['key'] = (new login(person)).token;
                gotoListPage();
            });
        },

     };

   
    // _service.loadContacts();
     return _service;
  }]);