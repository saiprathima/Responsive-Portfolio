$(document).ready(function(){
	
	$('.collapsed').click(function(){
		$('ul.navbar-right').removeClass('breadcrumb');
		$('ul.navbar-right').addClass('nav');
		$('ul.navbar-right').addClass('navbar-nav');
	});
});