$(document).on('ready', function(){
//makes the navMenu appear when click on hamburger

$('.js-menu').on('click', function(){
	$('.main_nav').slideToggle(function(){
		$('.main_header').animate({height:'400px'}, 100);
	});
});




//$('.main_header').animate({height:'400px'}, 500);




});//end of document.on ready