

// Create canvas variable
var canvas = new fabric.Canvas('myCanvas');
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object =Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
		top:block_y,
		left:block_x
	});
	canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '67') // add appropriate keycode
	{
		// upload red ranger
		new_image('cap.png')
		console.log("c")
	}
	if(keyPressed == '68')
	{
		block_x = 200;
		// upload green ranger
		new_image('doc.png')
		console.log("d")
	}
	
	if(keyPressed == '86')
	{
		block_x =350;
		// upload yellow ranger
		new_image('vis.png')
		console.log("v")
	}
	if(keyPressed == '66')
	{
		block_x = 600;
		// upload pink ranger
		new_image('bw.png')
		console.log("b")
	}
	if(keyPressed == '77')
	{
		block_x = 700;
	// upload blue ranger
	new_image('ms.png')
		console.log("m")
	}
	
}

