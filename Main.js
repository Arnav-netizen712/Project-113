function setup(){
    canvas = createCanvas(640,480);
    canvas.position(150,150);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 185, 130, 270, 260);

    fill(73, 196, 89);
    stroke(255, 255, 255);
    rect(30, 20, 535, 55);

    
    fill(73, 196, 89);
    stroke(255, 255, 255);
    rect(20, 20, 55,440);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80); 

    
    fill(73, 196, 89);
    stroke(255, 255, 255);
    rect(560, 20, 55, 445);

    fill(73, 196, 89);
    stroke(255, 255, 255);
    rect(30, 415, 535, 55);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 50, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 438, 80);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(590, 438, 80);
}

function take_snapshot(){
    save('My Selfie Pic');
}