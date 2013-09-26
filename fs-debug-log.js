var Debug = {};

// Creation of 'message' obj
Debug.messages = {};

Debug.log = function(elem) { 
	// To log use: Debug.log({ 'Label': varName });

	for (var prop in elem)  {
		Debug.messages[prop] = elem[prop];
	}
			
	// Create output message    
	var output = "";
	
	for (var prop in Debug.messages){
		var line = "";
		line = line + ("<b>" + prop + "</b>: " + Debug.messages[prop]);
		output = output + line + "<br>";
	}
	
	// Creation of hud
	if(!($('.debug-log-hud').length > 0)) {
		$('<div/>').addClass('debug-log-hud').css({
			position: "fixed", 
			bottom: "20px", 
			right: "20px", 
			color: "white", 
			backgroundColor: "rgba(0,0,0,.75)", 
			padding: "8px",
			borderRadius: "3px",
			webkitFontSmoothing: "antialiased",
			zIndex: 99
		}).appendTo('body');

		// Bindings
		var isPressed = false;
		$(document).keydown(function(e) {
					console.log('toggle');
			if(!isPressed) {
				isPressed = true;
				if(e.which == 68) {
					e.preventDefault();
					$('.debug-log-hud').slideToggle(400,function() {
						isPressed = false;
					});
				}
			}
		});
	}
		
	// Output
	$(".debug-log-hud").html(output);
};