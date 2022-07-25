rightWristX=0;
leftWristX=0;
difference=0;
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(600, 100);

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}

function modelLoaded() {
    console.log("modelLoaded");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);

    }

}

function draw() {
    background("white");
    textSize(difference);
    fill("black");
    text("Juan Pablo", 50,400 );
}
