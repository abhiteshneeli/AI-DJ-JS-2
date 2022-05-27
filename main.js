sound="";

leftwristx="";
leftwristy="";

rightwristx="";
rightwristy="";

function preload(){
    sound=loadSound("music.mp3");
}

function play(){
    sound.play();
    sound.setVolume(1);
    sound.rate(1);
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();

    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}

function modelloaded() {
    console.log("posenet is loaded");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        leftwristx=results[0].pose.leftWrist.x;
        leftwristy=results[0].pose.leftWrist.y;
        console.log("leftwristx = "+leftwristx+"leftwristy = "+leftwristy);

        rightwristx=results[0].pose.rightWrist.x;
        rightwristy=results[0].pose.rightWrist.y;
        console.log("rightwristx = "+rightwristx+"rightwristy = "+rightwristy);
    }
}

function draw(){
    image(video,0,0,600,500)
}