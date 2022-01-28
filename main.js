canvas=document.getElementById("myCanvas");
ctx=canvas.getContext('2d');
car_width=200;
car_height=200;
//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
car_x=5;
car_y=225;
//Set initial position for a car image.

function add() {
	background_imgtag=new Image();
	background_imgtag.onload=uploadBackground;
	background_imgtag.src="concrete-road.jpg";
	car_imgtag=new Image();
	car_imgtag.onload=uploadgreencar;
	car_imgtag.src="car2.png";
	//upload car, and background images on the canvas.
}

function uploadBackground() {
	ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
	//Define function ‘uploadBackground’

}

function uploadgreencar() {
	ctx.drawImage(car_imgtag,car_x,car_y,car_width,car_height);
	//Define function ‘uploadgreencar’.

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	
	keypressed=e.keyCode;
        console.log (keypressed);
        if(keypressed=='38'){
           Up();
           console.log("Up");
        }
        if(keypressed=='40'){
            down();
            console.log("down");
         }
         if(keypressed=='37'){
            left();
            console.log("left");
         }
         if(keypressed=='39'){
            right();
            console.log("right");
         }
    }
    function Up(){
        if(car_y>=0){
            car_y=car_y-10;
            console.log("when Up arrow is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadgreencar();
        }
    }
    function down(){
        if(car_y<=500){
            car_y=car_y+10;
            console.log("when down arrow is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadgreencar();
        }
    }
    function left(){
        if(car_x>=0){
            car_x=car_x-10;
            console.log("when left arrow is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadgreencar();
        }
    }
    function right(){
        if(car_x<=700){
           car_x=car_x+10;
            console.log("when right arrow is pressed,x="+car_x+"y="+car_y);
            uploadBackground();
            uploadgreencar();
        }
    }
	