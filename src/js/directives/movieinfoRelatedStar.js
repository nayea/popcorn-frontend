var angular = require('angular');

angular
  .module('PopcornListApp')
  .directive('movieinfoRelatedStar', function() {
    return {
      'restrict' : 'EA',
      'templateUrl': '/views/movieinfoRelatedStar.html',
      'link': function(scope, element, attrs) {
        scope.repeatComplete = function() {


    var movie_grade_movieinforelated = ($('.movie-grade-movieinforelated').text()) * 1;
    var stars_rating_movieinforelated = $('.stars-rating-movieinforelated');
    // console.log(movie_grade);
    // console.log(stars_rating);
    // console.log(typeof(movie_grade));

    if ( 0 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 0.5 ) {
      stars_rating_movieinforelated.addClass('stars-0-0');
    } else if ( 0.5 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 1 ) {
      stars_rating_movieinforelated.addClass('stars-0-5');
    } else if ( 1 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 1.5 ) {
      stars_rating_movieinforelated.addClass('stars-1-0');
    } else if ( 1.5 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 2 ) {
      stars_rating_movieinforelated.addClass('stars-1-5');
    } else if ( 2 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 2.5 ) {
      stars_rating_movieinforelated.addClass('stars-2-0');
    } else if ( 2.5 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 3 ) {
      stars_rating_movieinforelated.addClass('stars-2-5');
    } else if ( 3 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 3.5 ) {
      stars_rating_movieinforelated.addClass('stars-3-0');
    } else if ( 3.5 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 4 ) {
      stars_rating_movieinforelated.addClass('stars-3-5');
    } else if ( 4 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 4.5 ) {
      stars_rating_movieinforelated.addClass('stars-4-0');
    } else if ( 4.5 <= movie_grade_movieinforelated && movie_grade_movieinforelated < 5 ) {
      stars_rating_movieinforelated.addClass('stars-4-5');
    } else if ( movie_grade_movieinforelated >= 5 ) {
      stars_rating_movieinforelated.addClass('stars-5-0');
    }
     

        } // end
      }
    }
});