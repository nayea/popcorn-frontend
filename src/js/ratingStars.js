(function(window, $){

  
// $(function() {
  // setTimeout(function(){
  $(document).ready(function() {
    var movie_grade = ($('.movie-grade').text()) * 1;
    var stars_rating = $('.stars-rating');
    // console.log(movie_grade);
    // console.log(stars_rating);
    // console.log(typeof(movie_grade));

    if ( 0.00 <= movie_grade && movie_grade < 0.50 ) {
      stars_rating.addClass('stars-0-0');
    } else if ( 0.50 <= movie_grade && movie_grade < 1.00 ) {
      stars_rating.addClass('stars-0-5');
    } else if ( 1.00 <= movie_grade && movie_grade < 1.50 ) {
      stars_rating.addClass('stars-1-0');
    } else if ( 1.50 <= movie_grade && movie_grade < 2.00 ) {
      stars_rating.addClass('stars-1-5');
    } else if ( 2.00 <= movie_grade && movie_grade < 2.50 ) {
      stars_rating.addClass('stars-2-0');
    } else if ( 2.50 <= movie_grade && movie_grade < 3.00 ) {
      stars_rating.addClass('stars-2-5');
    } else if ( 3.00 <= movie_grade && movie_grade < 3.50 ) {
      stars_rating.addClass('stars-3-0');
    } else if ( 3.50 <= movie_grade && movie_grade < 4.00 ) {
      stars_rating.addClass('stars-3-5');
    } else if ( 4.00 <= movie_grade && movie_grade < 4.50 ) {
      stars_rating.addClass('stars-4-0');
    } else if ( 4.50 <= movie_grade && movie_grade < 5.00 ) {
      stars_rating.addClass('stars-4-5');
    } else {
      stars_rating.addClass('stars-5-0');
    }

    // },2000);
});
 // });

})(this, jQuery);
