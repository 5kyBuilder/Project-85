canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car_width = 70;
car_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

car_x = 200;
car_y = 200; 

function add() {
	background = new Image();
	background.onload = uploadBackground;
	background.src = background_image

	car = new Image();
	car.onload = uploadgreencar;
	car.src = greencar_image
}

function uploadBackground() {
	ctx.drawImage(background, 0, 0, ctx.canvas.width, ctx.canvas.height);
}

function uploadgreencar() {
	ctx.drawImage(car, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(car_y >=0){
		car_y = car_y - 10;

		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(car_y <= 300){
		car_y = car_y + 10;

		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(car_x >=0){
		car_x = car_x - 10;

		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(car_x <= 700){
		car_x = car_x + 10;

		uploadBackground();
		uploadgreencar();
	}
}
