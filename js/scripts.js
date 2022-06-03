$(document).ready(function(){

	
		
});

jQuery(document).ready(function() {
	var finalDate = '2022/06/30';
	jQuery('div.counter').countdown(finalDate)
   	.on('update.countdown', function(event) {

   		jQuery(this).html(event.strftime(
			'<div class="days-wrapper row_timer"><span class="days">%D</span></div>' +
			'<div class="dotet row_timer">:</div>' +  
			'<div class="hours-wrapper row_timer"><span class="hours">%H</span></div>' +
			'<div class="dotet row_timer">:</div>' +   
			'<div class="minutes-wrapper row_timer"><span class="minutes">%M</span></div>' +
			'<div class="dotet row_timer">:</div>' +  
			'<div class="seconds-wrapper row_timer"><span class="seconds">%S</span></div>'
			)
		);
   }); 
});

