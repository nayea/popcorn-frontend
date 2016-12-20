(function(window, $){

  setTimeout(function(){

    var movie_grade = ($('.movie-grade').text()) * 1;
    var stars_rating = $('.stars-rating');
    // console.log(movie_grade);
    // console.log(stars_rating);
    // console.log(typeof(movie_grade));

    if ( 0 <= movie_grade && movie_grade < 0.5 ) {
      stars_rating.addClass('stars-0-0');
    } else if ( 0.5 <= movie_grade && movie_grade < 1 ) {
      stars_rating.addClass('stars-0-5');
    } else if ( 1 <= movie_grade && movie_grade < 1.5 ) {
      stars_rating.addClass('stars-1-0');
    } else if ( 1.5 <= movie_grade && movie_grade < 2 ) {
      stars_rating.addClass('stars-1-5');
    } else if ( 2 <= movie_grade && movie_grade < 2.5 ) {
      stars_rating.addClass('stars-2-0');
    } else if ( 2.5 <= movie_grade && movie_grade < 3 ) {
      stars_rating.addClass('stars-2-5');
    } else if ( 3 <= movie_grade && movie_grade < 3.5 ) {
      stars_rating.addClass('stars-3-0');
    } else if ( 3.5 <= movie_grade && movie_grade < 4 ) {
      stars_rating.addClass('stars-3-5');
    } else if ( 4 <= movie_grade && movie_grade < 4.5 ) {
      stars_rating.addClass('stars-4-0');
    } else if ( 4.5 <= movie_grade && movie_grade < 5 ) {
      stars_rating.addClass('stars-4-5');
    } else {
      stars_rating.addClass('stars-5-0');
    }

  },1000);

})(this, jQuery);
