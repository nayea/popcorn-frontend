'use strict';

let angular = require('angular');


angular
  .module('PopcornListApp')
  .factory('Search', ['$resource', function($resource){
    return $resource(
      'https://django-api.com/movie/search/',{},
      { 'get' : {method: 'get', isArray: true}}
      );
  }])

   .service('searchDataShareService', ['Search' , (Search)=>{  

     let initServiceSetting = () =>{
          _service.movies = [];
          _service.page = 1;
          _service.has_more = true;
     };
     var _service = {
        'search_movie' : null,
        'movies' : [],
        'has_more' : true,
        'is_loading' : false,
        'doSearch' : (search) =>{
            initServiceSetting();
          _service.search = search;
          _service.loadContacts();
        },
         'loadContacts': ()=> {
        if ( _service.has_more && !_service.is_loading ) {

          _service.is_loading = true;

          // 서버에 전송할 파라미터(매개변수)
          let params = {
            'keyword'   : _service.search
          };
          console.log(params);
          // 서버에 요청(GET)
          Search.get(params, (data)=>{
            angular.forEach(data, (movie)=>{
              _service.movies.push( new Search(movie) );
            });
            // 더 이상 불러올 다음 데이터가 존재하지 않을 경우
            // _service 객체의 has_more 속성을 false로 변경
            if (!data.next) {
              _service.has_more = false;
            }
            _service.is_loading = false;
          });

        }
      }
     };
   
    _service.loadContacts();

     return _service;
  }]);
