left_wristX=0;
right_wristX=0;
difference=0;

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,550);
    canvas.position(560, 160)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose',gotPoses)

}
function gotPoses(results){
    if (results.length >0){
        console.log(results);
        
        left_wristX= results[0].pose.leftWrist.x;
        right_wristX= results[0].pose.rightWrist.x;
        difference = floor(left_wristX - right_wristX)
        console.log("leftwrist x = "+left_wristX+"right_wristX = "+right_wristX+"difference = "+ difference)
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized ")
}

function draw(){
    background("#969A97");
    document.getElementById("difference").innerHTML="Height and Width of the text is : "+difference;
    fill('#F90093')
    textSize(difference)
    text("Vir",50,400);
}