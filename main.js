var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

var background_image = "racing.jpg";

var car1_x = 10;

var car1_y = 70;

var car1_image = "car1.png";

var car1_width = 75;

var car1_height = 50;



var car2_height = 50;

var car2_x = 10;

var car2_y = 10;

var car2_image = "car2.png";

var car2_width = 75;

function add() {

    background_imageTag = new Image();

    background_imageTag.onload = uploadBackground;

    background_imageTag.src = background_image;

    car1_imageTag = new Image();

    car1_imageTag.onload = uploadcar1;

    car1_imageTag.src = car1_image;



    background_imageTag = new Image();

    background_imageTag.onload = uploadBackground;

    background_imageTag.src = background_image;

    car2_imageTag = new Image();

    car2_imageTag.onload = uploadcar2;

    car2_imageTag.src = car2_image;

}

function uploadBackground() {

    ctx.drawImage(background_imageTag,0,0,canvas.width,canvas.height);

}

function uploadcar1() {

    ctx.drawImage(car1_imageTag,car1_x,car1_y,car1_width,car1_height);

}

function uploadcar2() {

    ctx.drawImage(car2_imageTag,car2_x,car2_y,car2_width,car2_height);

}

window.addEventListener("keydown",my_keydown);

function my_keydown(e) {

    keypressed = e.keyCode;

    console.log(keypressed);

    if(keypressed=='38') {

        car1_up();

        console.log("up");

    }

    if(keypressed=='40') {

        car1_down();

        console.log("down");

    }

    if(keypressed=='37') {

        car1_left();

        console.log("left");

    }

    if(keypressed=='39') {

       car1_right();

        console.log("right");

    }
    
    if(keypressed=='87') {

        car2_up();
 
         console.log("up");
 
     }
        
    if(keypressed=='83') {

        car2_down();
 
         console.log("down");
 
     }
   
     if(keypressed=='65') {

        car2_left();
 
         console.log("left");
 
     }
   
     if(keypressed=='68') {

        car2_right();
 
         console.log("right");
 
     }

}