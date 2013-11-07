WebDev-logger
=========
Javascript console HTML/JS interface to logging web development data, avoiding use the browser console, via console.log(). 

Useful on touch/mobile devices, where the browser's console needs to be activated or sometime miss.


### How to use the WebDev-logger
Logging single params:

	Debug.log({ 'Label': varName });

or appending multiple params:

	Debug.log({ 'Label1': varName1, 'Label2': varName2 });