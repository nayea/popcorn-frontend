'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('signup', ['$resource', function($resource){
    // console.log($stateParams.id); 
    return $resource(
      'https://django-test.com/member/registration/',{},
       {'create': { method:'post' }}
      );
  }])
 
  .service('signupDataShareService', ['signup' , (signup)=>{  
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
          //  signup.get((data)=>{
          //   angular.forEach(data, (person)=>{
          //     _service.people.push( new signup(person) );
          //   });
          // });
        },
        'createContact' : (person, gotoLoginPage) => {
            // console.log('create');
            // console.log(person);
           
            _service.is_creating = true;
            (new signup(person)).$create().then(()=> {
                initServiceSetting();
                _service.loadContacts();
                _service.is_creating = false;
                gotoLoginPage();
            });
        },

     };

   
    // _service.loadContacts();
     return _service;
  }]);