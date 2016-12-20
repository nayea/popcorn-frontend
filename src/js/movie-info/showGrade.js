(function(window, $){

  setTimeout(function(){

    var movie_info_comment_rating_group = document.querySelector('.movie-comment-rating-group');
    var movie_info_labels = movie_info_comment_rating_group.querySelectorAll('label');
    var movie_info_output = movie_info_comment_rating_group.querySelector('output');

    // console.log(movie_info_comment_rating_group);
    // console.log(movie_info_labels);
    // console.log(movie_info_output);

    var showStarRatingGrade = function(e) {
      setTimeout(function(){
        var movie_info_rated_star = $('input:radio[name=rating]:checked').val();

        movie_info_output.innerHTML = movie_info_rated_star;

        // console.log(movie_info_rated_star);
        // console.log(movie_info_output);

      },50);
    };





    for ( var i = 0, l = movie_info_labels.length; i < l; i++ ) {
      movie_info_labels[i].onclick = showStarRatingGrade;
    }

  },800);


})(this, jQuery);
