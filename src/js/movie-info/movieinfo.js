

 (function(window, $){
// $(function() {
setTimeout(function(){
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

 

},500);
})(this, jQuery);



// var _cnt =0;
// setInterval(_timer,1000);
// function _timer(){
//   if(_cnt<5){
//     _cnt++;
//     console.log(_cnt,'번째');
//     location.reload();
//     var _timeId = setTimeout(_timer,1000);
//   }
//   else{
//     clearInterval(_timeId);
//   }
// }


// var _cnt =0;
// setTimeout(_timer,1000);
// function _timer(){
//   if(_cnt<5){
//     _cnt++;
//     console.log(_cnt,'번째');
//     location.reload();
//     var _timeId = setTimeout(_timer,1000);
//   }
//   else{
//     clearTimeout(_timeId);
//   }
// }

 // setTimeout(function() {
 //   location.reload();
 // }, 1000)
// $('#movieinfo-detail').ready(function() {
 
// setTimeout(function() {
//     location.reload();
// }, 1000); // 3000ms(3초)가 경과하면 이 함수가 실행됩니다.
 
// }
// $( window ).one( 'reload', function( ) {
//     clearTimeout( timer );
//     timer = setTimeout( resizeDone, 700 );
// } );

// function resizeDone( ) {
//     // ...do
// }
// var cnt = 1;
// if(cnt === 1) {
//    location.reload(true);
//    cnt = 0;
// }
// else{
//   location.reload(false);
// }
// setTimeout(function(){
//       // var movieinfo_detail = document.querySelector('#movieinfo-detail');
//         // movieinfo_detail.reload();
//      document.location.reload();
//   },700);
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
