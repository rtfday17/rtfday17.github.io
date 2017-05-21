$(function() {
	$('.js-slider').indexSlider();
	$("a[href^='#']").click(function(){
        elClick = $(this).attr('href');
        heightToEl = $(elClick).offset();
        destination = heightToEl.top - $('.header').height();
        $('body').animate({scrollTop:destination},1000);
        return false
    })
});