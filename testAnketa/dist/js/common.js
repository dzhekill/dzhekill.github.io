$(document).ready(function(){
	$(".header-nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
	$('.choise').on("click", function(){
		$('.select').toggleClass('select-active');
	});
	$('.choise, .select' ).on('click', function(){
		$('.year').toggleClass('year-active');
	});
	var selectedP = $('.year p');
	selectedP.on('click', function(){
		$('.year').toggleClass('year-active');
		$('.choise').html($(this).text());
		$('.choise').css('color', 'black');
		$('.select').toggleClass('select-active');
	});
	
});