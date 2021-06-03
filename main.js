canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");

car1_width-120;
car1_height-70;
car1_image-"Iron-Car-013.jpg";
car1_x-10;
car1_y-10;

car2_width-120;
car2_height-70;
car2_image-"car1.jpg";
car2_x-10;
car2_y-100;

background_image="racing.png";
rover_image="car1.png";

function add(){
    background_imageTag=new Image();
    background_imageTag.onload=uploadBackground();
    background_imageTag.src=background_image;

    rover_imageTag=new Image();
    rover_imageTag.onload=uploadRover();
    rover_imageTag.src=car1_image;
}

function uploadBackground(){
    ctx.drawImage(background_imageTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover(){
    ctx.drawImage(car1_imageTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '39'){
         right();
        console.log("right");
    }
    
    if(keyPressed == '87'){
        car1up();
       console.log("car1up");
   }

    if(keyPressed == '65'){
     car1left();
     console.log("car1left");
   }

   if(keyPressed == '83'){
     car1down();
     console.log("car1down");
   }

   if(keyPressed == '68'){
    car1right();
   console.log("car1right");
}
}