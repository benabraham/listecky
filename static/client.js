var socket = io();


/*
 *
 * Lets emit some events!
 * By clicking on elements.
 *
 * */
var allButtons = $('.button');

// student detail
allButtons.click(function(){
	allButtons.removeClass('selected');
	$(this)
		.addClass('clicked')
		.closest('.buttons')
		.addClass('clicked');
	socket.emit('statusChange', $('.buttons').data('student-id'), $(this).data('id'));
});


// teacher overview

$("button.ready").click(function(){
	socket.emit('checkStatus');
});


$("button.reset").click(function(){
	socket.emit('resetStatus');
});



/*
 *
 * socket.io logic
 *
 * */

socket
// user authentication
	.on('connect', function(){
		socket
			.emit('auth-request', $('.buttons').data('student-id'))
			.on('auth-success', function(studentId){
				$('.student').each(function(){
					if ($(this).data('student-id') == studentId){
						$(this).addClass('online');
					}
				});
			});
	})

	// user disconnected: teacher overview
	.on('disconnected', function(studentId){
		$('.student').each(function(){
			if ($(this).data('student-id') == studentId){
				$(this).removeClass('online');
			}
		});
	})

	// status changed
	.on('statusChanged', function(studentId, statusType, statusReset){

		// student detail
		if ($('.buttons').data('student-id') == studentId){
			allButtons.each(function(){
				$(this).removeClass('clicked selected');
				if ($(this).data('id') == statusType){
					$(this)
						.addClass('selected')
						.closest('.buttons')
						.removeClass('clicked');
				}
			});
			if (statusReset) window.alert('Výklad začíná');
		}

		// teacher overview
		$('.student').each(function(){
			if ($(this).data('student-id') == studentId){
				$(this).removeClass('not_done help done').addClass(statusType);
			}
		});

	})

	// Ask student for status
	.on('checkStatusAlert', function(){
		if (confirm("Nejsi už náhodou hotová?") == true){
			socket.emit('statusChange', $('.buttons').data('student-id'), 'done');
		} else {
			return false
		}
	})

;