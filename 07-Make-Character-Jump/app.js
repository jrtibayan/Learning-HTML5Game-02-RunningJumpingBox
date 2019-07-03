var context, controller, loop, myPlayer;

// assign context to a variable
context = document.querySelector("canvas").getContext("2d");

// set the canvas height and width
context.canvas.height 	= 180;
context.canvas.width 	= 320;


// make a myPlayer object and set its properties
myPlayer = {

  height		: 32,
  width			: 32,
  x				: null,
  y				: 0,
  x_velocity	: 0,
  y_velocity	: 0

};
// set x property of myPlayer to center of the canvas
myPlayer.x = (context.canvas.width/2)-(myPlayer.width/2);


controller = {

	left		: false,
	right		: false,
	up			: false,
	keyListener	: function(event) {

		var key_state = (event.type == "keydown") ? true : false;

		switch(event.keyCode) {

			case 37: // LEFT
				controller.left = key_state;
			break;
			case 38: // UP
				controller.up = key_state;
			break;
			case 39: // RIGHT
				controller.right = key_state;
			break;

		}

	}

};


loop = function() {
	
	if (controller.left) {
		myPlayer.x_velocity -= 0.5;
	}

	if (controller.right) {
		myPlayer.x_velocity += 0.5;
	}
	
	myPlayer.y_velocity += 1.5; // gravity

	myPlayer.x += myPlayer.x_velocity;
	myPlayer.x_velocity *= 0.9; // friction
	
	myPlayer.y += myPlayer.y_velocity;
	myPlayer.y_velocity *= 0.9; // friction
	
	// Prevent myPlayer from falling beyond the floor
	if (myPlayer.y > 180 - 16 - 32) {

		myPlayer.jumping = false;
		myPlayer.y = 180 - 16 - 32;
		myPlayer.y_velocity = 0;

	}

	// Prevent myPlayer from going off screen on the left side of the canvas
	if (myPlayer.x < 0) {

		myPlayer.x = 0;
		myPlayer.x_velocity = 0;

	}
	// Prevent myPlayer from going off screen on the right side of the canvas
	else if (myPlayer.x > 320-myPlayer.width) {

		myPlayer.x = 320-myPlayer.width;
		myPlayer.x_velocity = 0;

	}

	// draw background using fillRect
	context.fillStyle = "#202020";
	context.fillRect(0, 0, 320, 180);
	
	// draw myPlayer using separate fill and rect
	// this method needs beginPath and fill to achieve the same effect of fillRect
	// this can also be drawn using fillRect but for learning purposes lets leave it as is
	context.beginPath();
	context.fillStyle = "#ff0000";
	context.rect(myPlayer.x, myPlayer.y, myPlayer.width, myPlayer.height);
	context.fill();
	
	// draw floor
	context.beginPath();
	context.strokeStyle = "#202830";
	context.lineWidth = 4;
	context.moveTo(0, 164);
	context.lineTo(320, 164);
	context.stroke();
	
	// continually call the loop when ready to draw
	window.requestAnimationFrame(loop);

};


// listen to keyup and keydown events
// every time a key is pressed or released,
// the corresponding property of the controller will be updated
// it becomes true if keydown and false if released or keyup
window.addEventListener("keydown", controller.keyListener)
window.addEventListener("keyup", controller.keyListener);

// start the loop function once ready to draw
window.requestAnimationFrame(loop);
