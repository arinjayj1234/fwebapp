nosex = 0;
nosey = 0;


function preload(){
  chad=loadImage("https://i.postimg.cc/t4GF8h57/m.png");
}

function setup(){
  canvas = createCanvas(640, 480);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();  

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  
}

function modelLoaded(){
  console.log('mloaded');
}

function gotPoses(results){
  nosex = results[0]['pose']['nose']['x']
  nosey = results[0]['pose']['nose']['y']
  console.log("Nose X is " + nosex +" Nose Y is " +nosey);
}

function draw(){
  image(video, 0, 0, 640, 480);
  image(chad, nosex-50, nosey-10, 120, 80);
}

function takeSnapshot(){
  save("stachePic.png");
}
