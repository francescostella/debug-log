/*!
 *	Devkit-js - https://github.com/francescostella/devkit-js
 *	Author: Francesco Stella
 *	Devkit-js may be freely distributed under the MIT license. 
 *
 *	To use it: Devkit.log({ 'Label': varName });
 */

'use strict';

var Devkit = Devkit || {};
Devkit.eventsList = ['mousedown', 'mouseup', 'touchstart', 'touchend', 'touchmove'];
Devkit.messages = {};

/*
 * Devkit Logger
 */
Devkit.log = function(elem) {
	
	for (var prop in elem)  {
		Devkit.messages[prop] = elem[prop];
	}
	
	var output = "";
	
	for (var prop in Devkit.messages){
		var line = "";
		line = line + ("<b>" + prop + "</b>: " + Devkit.messages[prop]);
		output = output + line + "<br>";
	}

	if(!document.getElementById('devkit-hud')) { 
		Devkit.createHud(); 
		Devkit.devkitHud = document.getElementById('devkit-hud');
	}
	
	Devkit.devkitHud.innerHTML = output;
};

Devkit.bindings = function () {
	document.onkeydown = function(e) {	
		if(e.which != 27) {
			return; // Do not return false otherwise it will prevents browser's hotkeys
		}

		if (Devkit.devkitHud.style.display === 'none') {
			Devkit.devkitHud.style.display = 'block';
		} else {
			Devkit.devkitHud.style.display = 'none';
		}
	};
};

Devkit.createHud = function () {		
	var element = document.createElement('div');
	
	element.id = 'devkit-hud';
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

	document.lastChild.appendChild(element);
	Devkit.bindings(element);
};

/*
 * Devkit Viewport Info
 */
Devkit.info = function () {
	window.onload =  function () {
		viewportInfo();
	};

	window.onresize = function () {
		viewportInfo();
	};

	var viewportInfo = function () {
		var width = window.innerWidth;
		var height = window.innerHeight;

		Devkit.log({ 'Document w: ' : width });
		Devkit.log({ 'Document h: ' : height });
	};

	var eventsInfo = function (e) {
		Devkit.log({ 'Event Type: ' : e.type });
	};

	Devkit.addMultipleListener(Devkit.eventsList, eventsInfo)	
};

/*
 *	Helpers
 */
Devkit.addMultipleListener = function (arrayEvents, callback) {
	for (var ev in arrayEvents) {
		document.addEventListener(arrayEvents[ev], callback);
	}
};

Devkit.dragger = function (element) {
	element
};
