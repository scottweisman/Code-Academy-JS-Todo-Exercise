$(document).ready(function(){

	var textFieldInput = $('#todo');
	
	$('#submit').bind('click', function(){
		var value = textFieldInput.val();
		
		var listItem = '<li>' + value + ' <span class="delete">X</span></li>'; // This is plain javascript
		
		var li = $(listItem);										// This is jQuery
		
		$("#todos").append(li);
		textFieldInput.val('');
		
		var count = $('#todos').children('li').length;
		
		$('#count').html(count);
		
	});
		
		$('#todos').on('click', '.delete', function (){
			
			$(this).parent().remove();
			
			var count = $('#todos').children('li').length;
			$('#count').html(count);	
			
		});

	

});