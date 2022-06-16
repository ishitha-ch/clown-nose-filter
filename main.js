noseX=0;
noseY=0;
function preload() {
clown_nose=loadImage("https://i.postimg.cc/PqMPH7hR/clown-nose.gif");
}

function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture (VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet (video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function draw() {
image(video,0,0,300,300);
image(clown_nose, noseX-25, noseY-30, 50, 50);

}

function take_snapshot() {
    save('clown_nose_pic.png');
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x: "+ results[0].pose.nose.x);
        console.log("nose y: "+ results[0].pose.nose.y);

    } 
}