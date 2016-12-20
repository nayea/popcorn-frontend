(function(window, $){

  setTimeout(function(){

    var movie_info_comment_rating_group = document.querySelector('.movie-comment-rating-group');
    var movie_info_labels = movie_info_comment_rating_group.querySelectorAll('label');

    var showStarRatingGrade = function(e) {
      setTimeout(function(){
        var movie_info_rated_star = $('input:radio[name=rating]:checked').val();
        console.log(movie_info_rated_star);
      },50);
    };


    console.log(movie_info_comment_rating_group);
    console.log(movie_info_labels);


    for ( var i = 0, l = movie_info_labels.length; i < l; i++ ) {
      movie_info_labels[i].onclick = showStarRatingGrade;
    }

  },800);


})(this, jQuery);
