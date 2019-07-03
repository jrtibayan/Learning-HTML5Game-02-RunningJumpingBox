var context, loop, myPlayer;

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
  y				: 0

};
// set x property of myPlayer to center of the canvas
myPlayer.x =(context.canvas.width/2)-(myPlayer.width/2);

loop = function() {

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

// start the loop function once ready to draw
window.requestAnimationFrame(loop);
