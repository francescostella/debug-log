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
	if(!document.getElementById('debug-log-hud')) {
		var element = document.createElement('div');
		
		element.id = 'debug-log-hud';
		element.style.position = "fixed";
		element.style.bottom = "20px";
		element.style.right = "20px";
		element.style.color = "white";
		element.style.backgroundColor = "rgba(0,0,0,.75)";
		element.style.padding = "8px";
		element.style.borderRadius = "3px";
		element.style.fontFamily = "Arial, sans-serif";
		element.style.fontSize = "12px";
		element.style.lineHeight = "1.3";
		element.style.webkitFontSmoothing = "antialiased";
		element.style.zIndex = 99;

		var test = document.getElementById('test')
		document.lastChild.appendChild(element);

		// Bindings
		var isPressed = false;

		$(document).keydown(function(e) {
			console.log('toggle');
			if(!isPressed) {
				isPressed = true;
				if(e.which == 68) {
					e.preventDefault();
					$('#debug-log-hud').slideToggle(400,function() {
						isPressed = false;
					});
				}
			}
		});
	}
		
	// Output
	$("#debug-log-hud").html(output);
};