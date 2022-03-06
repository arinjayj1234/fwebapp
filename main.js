function preload(){
}

function setup(){
  canvas = createCanvas(640, 480);
  canvas.position(610, 250);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();  

  nosex = 0;
  nosey = 0;
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  
}
function draw(){
  image(video, 0, 0, 640, 480);
}

function modelLoaded(){
  console.log('mloaded');
}

function takeSnapshot(){
}

function gotPoses(results){
  nosex = results[0]['pose']['nose']['x']
  nosey = results[0]['pose']['nose']['y']
  console.log("Nose X is " + nosex +" Nose Y is " +nosey);
}

