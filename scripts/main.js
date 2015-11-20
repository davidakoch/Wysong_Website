$(document).on('ready', function(){

	//makes the 700px menu appear when you hit menu
	$('.js_click_menu').on('click', function(){
		$('.main_header').css("height", 500);
		$('.menu_700px').css("display","block");
		$('.banner_700px').css("display","none");


	});

	//makes the 700px banner appear when you hit close
	$('.js_click_banner').on('click', function(){
		$('.banner_700px').css("display","block");
		$('.menu_700px').css("display","none");
		$('.main_header').css("height", 200);
	});

	//makes menu and banner menu disappear when you stretch

});//end of document.on ready