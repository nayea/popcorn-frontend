(function(global) {
  'use strict';

  var movie_info_still = document.querySelector('.movie-still');
  var movie_info_stillControlButtons = movie_info_still.querySelectorAll('button');
  var movie_info_stillView = movie_info_still.querySelector('.movie-still-view');


  var changeStillView = function(e) {
    var movie_info_stillImg = this.querySelector('img');
    var movie_info_view = movie_info_stillView.querySelector('img');
    var movie_info_src = movie_info_stillImg.getAttribute('src');
    var movie_info_alt = movie_info_stillImg.getAttribute('alt');

    // e.preventDefault();
    movie_info_view.setAttribute('src', movie_info_src);
    movie_info_view.setAttribute('alt', movie_info_alt);

  };

  for ( var i = 0, l = movie_info_stillControlButtons.length; i < l; i++ ) {
    movie_info_stillControlButtons[i].onclick = changeStillView;
  }
})(this);

(function($) {
  $('.movie-comment-add-button').click(function() {
    if($(this).siblings('.movie-comment-rating-group').is(':hidden')) {
      $(this).siblings('.movie-comment-rating-group').slideDown('fast');
    } else {
      $(this).siblings('.movie-comment-rating-group').slideUp('fast');
    }
  });

  $('.movie-comment-submit-button').click(function() {
    $(this).closest('.movie-comment-rating-group').slideUp('fast');
  });
})(jQuery);

(function($) {
  $('.movie-dialogue-add-button').click(function() {
    if($(this).siblings('.movie-dialogue-select-group').is(':hidden')) {
      $(this).siblings('.movie-dialogue-select-group').slideDown('fast');
    } else {
      $(this).siblings('.movie-dialogue-select-group').slideUp('fast');
    }
  });

  $('.movie-dialogue-submit-button').click(function() {
    $(this).closest('.movie-dialogue-select-group').slideUp('fast');
  });
})(jQuery);

// (function(global) {
//   'use strict';
//
//   var radios = document.querySelectorAll('#star_rating input[type=radio]');
//   var output = document.querySelector('#star_rating output');
//
//   var do_something = function(stars) {
//   	// An AJAX request could send the data to the server
//   	output.textContent = stars;
//   };
//
//   // Iterate through all radio buttons and add a click
//   // event listener to the labels
//   Array.prototype.forEach.call(radios, function(el, i){
//   	var label = el.nextSibling.nextSibling;
//   	label.addEventListener("click", function(event){
//   		do_something(label.querySelector('span').textContent);
//   	});
//   });
//
//   // If the form gets submitted, do_something
//   document.querySelector('#star_rating').addEventListener('submit', function(event){
//   	do_something(document.querySelector('#star_rating :checked ~ label span').textContent);
//   	event.preventDefault();
//   	event.stopImmediatePropagation();
//   });
// })(this);
