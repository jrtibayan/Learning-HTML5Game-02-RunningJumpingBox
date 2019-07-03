var loop;

loop = function() {

	// do something
	// update and draw changes to the screen
	console.log("Hello World");
	
	// continually call the loop when ready to draw
	window.requestAnimationFrame(loop);

};

// start the loop function once ready to draw
window.requestAnimationFrame(loop);
