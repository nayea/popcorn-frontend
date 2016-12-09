(function(window, $){
'use strict';

var $didScroll = false;
var $header = $('header');
var $header_menu = $('.header-menuname');
var $header_user_name = $('.header-user-name');
var $header_logo = $('.header-logo');
var $lastScrollTop = 0;



$(global).scroll(function(e){
	
	hasScrolled();
});

// setInterval(function(){
//   if($didScroll){
//   	hasScrolled();
//   }
// },250);


  // $tabpanel.parent().stop().animate({
  //   'left': $tabpanel.outerWidth()* index * -1
  // },500, 'easeOutSine');


function hasScrolled(){
	var $st = $(global).scrollTop();
      var $screen_width = $(global).innerWidth();
 
     if($screen_width > 1261){
	if( $st > 50){
		$header.removeClass('header-bg-transparent').addClass('header-bg-white');
		$header_menu.css('color','#484848');
		$header_user_name.css('color','#484848');
	}
	else{
			$header.removeClass('header-bg-white').addClass('header-bg-transparent');
			$header_menu.css('color','#fff');
			$header_user_name.css('color','#fff');
		// 	$header.animate({
  //              'background': 'transparent'
		// },500, 'easeOutSine');
	}
    }
    else{
    	$header.removeClass('header-bg-transparent').removeClass('header-bg-white');
     }

}



})(this, jQuery);