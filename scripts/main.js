$(document).on('ready', function(){

	//makes the 700px menu appear when you hit menu
	$('.js_click_menu').on('click', function(){
		$('.main_header').css("height", 500);
		$('.menu_700px').css("display","block");
		$('.banner_700px').css("display","none");


	});







});//end of document.on ready