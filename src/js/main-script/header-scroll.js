(function(window, $){
'use strict';
setTimeout(function(){


var $didScroll = false;
var $header = $('header');
var $header_menu = $('.header-menuname');
var $header_user_name = $('.header-user-name');
var $header_menu_list = $('.header-scroll-menu li');
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
		$header.css('box-shadow','2px 1px 3px #ededed');
            $header_logo.css('background','url(../images/logo.svg) no-repeat');

            $.each($header_menu_list,function(idx){
                var $header_menu_li = $header_menu_list.eq(idx);
                var $header_menueq = $header_menu.eq(idx);

                 $header_menu_li.on('mouseenter',function(){
                  $header_menu_li.css('border-bottom','3px solid #1D8CF9')
                   $header_menueq.css( 'color' ,'#1D8CF9');
                  });

                  $header_menu_li.on('mouseleave',function(){
                  $header_menu_li.css('border-bottom','none');
                  $header_menueq.css( 'color' ,'#484848');
                  });

            });
	}
	else{
			$header.removeClass('header-bg-white').addClass('header-bg-transparent');
			$header_menu.css('color','#fff');
			$header_user_name.css('color','#fff');
			$header.css('box-shadow','none');
                  $header_logo.css('background','url(../images/logo-white.svg) no-repeat');

               $.each($header_menu_list,function(idx){
                var $header_menu_li = $header_menu_list.eq(idx);
                var $header_menueq = $header_menu.eq(idx);
                
                 $header_menu_li.on('mouseenter',function(){
                  $header_menu_li.css('border-bottom','3px solid #F8E71C')
                   $header_menueq.css( 'color' ,'#F8E71C');
                  });

                  $header_menu_li.on('mouseleave',function(){
                  $header_menu_li.css('border-bottom','none');
                  $header_menueq.css( 'color' ,'#fff');
                  });
            });

	}
    }
    else{
    	$header.removeClass('header-bg-transparent').removeClass('header-bg-white');
     }

}
},800);
})(this, jQuery);



//----------------------------------------------------------------
//  header nav, menu애니메이션
//-----------------------------------------------------------------

(function(window,$){
'use strict';
setTimeout(function(){
  var $doc = $('html, body');
  var $scroll_menu = $('header');

  $('.header-scroll-menu a').on('click', function(e) {
    e.preventDefault();
    var scroll_menu_height = global.parseInt( $scroll_menu.css('height'),10 );
    var target_id             = this.getAttribute('href');
    var $target               = $(target_id);

    $doc.animate({
      'scrollTop': $target.offset().top - scroll_menu_height
    }, 300, 'easeInOutCirc');
  });


},800);

})(this, jQuery);