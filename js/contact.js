// $(function() {
// 	$('#contact-form').on('submit', function(e) {
// 		if (!e.isDefaultPrevented()) {
// 			var url = 'contact.php';

// 			$.ajax({
// 				type: 'POST',
// 				url: url,
// 				data: $(this).serialize(),
// 				success: function(data) {
// 					var messageAlert = 'alert-' + data.type;
// 					var messageText = data.message;
// 					var alertBox =
// 						'<div class="alert ' +
// 						messageAlert +
// 						' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
// 						messageText +
// 						'</div>';
// 					if (messageAlert && messageText) {
// 						$('#contact-form').find('.messages').html(alertBox);
// 						$('#contact-form')[0].reset();
// 					}
// 				}
// 			});
// 			return false;
// 		}
// 	});
// });

// // $(function() {
// // 	// initialize the validator

// // 	$('#contact-form').validator();

// // 	// when the form is submitted
// // 	$('#contact-form').on('submit', function(e) {
// // 		// if the validator does not prevent form submit
// // 		if (!e.isDefaultPrevented()) {
// // 			var url = 'contact.php';

// // 			// POST values in the background the the script URL
// // 			$.ajax({
// // 				type: 'POST',
// // 				url: url,
// // 				data: $(this).serialize(),
// // 				success: function(data) {
// // 					// data = JSON object that contact.php returns

// // 					let messageAlert = 'alert-' + data.type;
// // 					let messageText = data.message;

// // 					// Bootstrap alert box HTML
// // 					let alertBox =
// // 						'<div class="alert ' +
// // 						messageAlert +
// // 						' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
// // 						messageText +
// // 						'</div>';

// // 					// If we have messageAlert and messageText
// // 					if (messageAlert && messageText) {
// // 						// inject the alert to .messages div in our form
// // 						$('#contact-form').find('.messages').html(alertBox);
// // 						// empty the form
// // 						$('#contact-form')[0].reset();
// // 					}
// // 				}
// // 			});
// // 			return false;
// // 		}
// // 	});
// // });
