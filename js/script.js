$(function() {
	$('.js-slider').indexSlider();
	$("a[href^='#']").click(function(){
        elClick = $(this).attr('href');
        heightToEl = $(elClick).offset();
        destination = heightToEl.top - $('.header').height();
        $('body').animate({scrollTop:destination},1000);
        return false
    })
    $('.menu-mob').click(function(){
    	$('.menu-mob').find('.overflow__menu').toggleClass('overflow__menu-open');
    })
	$(document).mouseup(function (e) {
	    if ($('.overflow__menu').hasClass('overflow__menu-open')) {
		    if ($('.overflow__menu').has(e.target).length === 0){
		        $('.overflow__menu').removeClass('overflow__menu-open');
		    }
	    }
});
});