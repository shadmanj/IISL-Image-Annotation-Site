
$(document).ready(function(){

	$('.img-thumbnail').keyup(function(event){
		$('#msg-keyup').html('keyup() is triggered!, keyCode = ' 
	              + event.keyCode + ' which = ' + event.which)
	});

	$('.img-thumbnail').keydown(function(event){
		$('#msg-keydown').html('keydown() is triggered!, keyCode = ' 
	              + event.keyCode + ' which = ' + event.which)
	});

	$('.img-thumbnail').keypress(function(event){
		$('#msg-keypress').html('keypress() is triggered!, keyCode = ' 
	              + event.keyCode + ' which = ' + event.which)
	});

});