var socket = io();
/*
 Notification.requestPermission().then(function(result){
 console.log(result);
 });

 function spawnNotification(notificationTitle, notificationBody){
 var options = {
 body: notificationBody,
 requireInteraction: true,
 renotify: true,
 tag: 'ready'
 };
 window.alert();
 var n = new Notification(notificationTitle, options);
 }
 */

var buttons = $('.button');

// student detail
buttons.click(function(){
	// if (!$(this).hasClass('selected')){
		buttons.removeClass('selected');
		$(this)
			.addClass('clicked')
			.closest('.buttons')
			.addClass('clicked');
		socket.emit('statusChange', $('.buttons').data('student-id'), $(this).data('id'));
	// }
});


// teacher overview

$("button.ready").click(function(){
	socket.emit('checkStatus');
});


$("button.reset").click(function(){
	socket.emit('resetStatus');
});


socket
	.on('connect', function(){
		socket.emit('auth-request', $('.buttons').data('student-id'));
		socket
			.on('auth-success', function(studentId){

				$('.student').each(function(){
					if ($(this).data('student-id') == studentId){
						$(this).addClass('online');
					}
				});
			});
	})

	.on('disconnected', function(studentId){
		// teacher overview
		$('.student').each(function(){
			if ($(this).data('student-id') == studentId){
				$(this).removeClass('online');
			}
		});
	})

	.on('statusChanged', function(studentId, statusType, statusReset){

		if ($('.buttons').data('student-id') == studentId){

			// student detail
			buttons.each(function(){
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

	.on('checkStatusAlert', function(){
		// student detail
		/*spawnNotification("Tak co?","Nejsi už náhodou hotová?");*/
		if (confirm("Nejsi už náhodou hotová?") == true){
			socket.emit('statusChange', $('.buttons').data('student-id'), 'done');
		} else {
			return false
		}
	})

;