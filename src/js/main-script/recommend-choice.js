(function(window,$){
'use strict';

var tabcontent_1 = $('.recommend-tabcontent-1');
var tabcontent_2 = $('.recommend-tabcontent-2');
var tabcontent_3 = $('.recommend-tabcontent-3');

var $tablinks_nextbutton_1 = $('.recommend-choice-tablinks-next-1');
var $tablinks_nextbutton_2 = $('.recommend-choice-tablinks-next-2');

var $tablinks_prevbutton_1 = $('.recommend-choice-tablinks-prev-1');
var $tablinks_prevbutton_2 = $('.recommend-choice-tablinks-prev-2');

$tablinks_nextbutton_1.on('click',function(){
	tabcontent_1.css('display','none');
	tabcontent_2.css('display','block');
})

$tablinks_nextbutton_2.on('click',function(){
	tabcontent_2.css('display','none');
	tabcontent_3.css('display','block');
})

$tablinks_prevbutton_1.on('click',function(){
	tabcontent_2.css('display','none');
	tabcontent_1.css('display','block');
})

$tablinks_prevbutton_2.on('click',function(){
	tabcontent_3.css('display','none');
	tabcontent_2.css('display','block');
})


})(this,jQuery);