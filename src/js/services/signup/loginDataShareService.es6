'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('login', ['$resource', function($resource){
    return $resource(
      'https://django-test.com/member/login/',{},
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
               // window.localStorage.clear();
               // window.localStorage[key] = login.token;
                initServiceSetting();
                _service.loadContacts();
                _service.is_creating = false;
                console.log('created person');
                gotoListPage();
            });
            // _service.is_creating = true;
            // login.save(person).$promise.then(( )=>{
            //   console.log('created person');
            //   _service.is_creating = false;
            // });
        },

     };

   
    // _service.loadContacts();
     return _service;
  }]);