$(document).ready(function(){

	// FAQ Toggling
	$('.faq-question').on('click', function(){
		$(this).next().slideToggle(400);
		$( this ).children( 'span' ).toggleClass("glyphicon-chevron-down glyphicon-chevron-up");
	});

	// Tooltip
	$('#arnav').tooltip({'placement': 'bottom'});
	$('#ryota').tooltip({'placement': 'bottom'});
	$('#shivani').tooltip({'placement': 'bottom'});
	$('#alida').tooltip({'placement': 'bottom'});
	$('#mark').tooltip({'placement': 'bottom'});
	$('#keith').tooltip({'placement': 'bottom'});
	$('#robert').tooltip({'placement': 'bottom'});
	$('#john').tooltip({'placement': 'bottom'});

});

