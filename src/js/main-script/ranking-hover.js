(function(window, $){

	setTimeout(function(){
'use strict';

 var $ranking_boxoffice_letters = $('.ranking-boxoffice a');
 var $ranking_boxoffice_list = $('.ranking-boxoffice li')

$.each($ranking_boxoffice_letters,function(idx){
	var $ranking_boxoffice_letter = $ranking_boxoffice_letters.eq(idx);
	var $ranking_boxoffice_li = $ranking_boxoffice_list.eq(idx);

	$ranking_boxoffice_letter.on('mouseenter',function(){
	$ranking_boxoffice_li.css('color','#F8E71C');
      });

	$ranking_boxoffice_letter.on('mouseleave',function(){
	$ranking_boxoffice_li.css('color','#fff');
      });

});
},500);

})(this, jQuery);