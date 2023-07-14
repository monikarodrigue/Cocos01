img ="";
status="";

function preload(){
  img = loadImage('dog_cat.jpg');
}


function setup() {
  canvas = createCanvas(640, 420);
  canvas.center();
  objectDetector=ml5.objectDetector('cocossd',modelLoaded);
  document.getElementById("status").innerHTML="Estatus: detectando objetos";
}


function draw() {
  image(img, 0, 0, 640, 420);
  fill(255, 0, 0);
  text("Perro", 45, 75);
  noFill();
  stroke(255, 0, 0);
  rect(30, 60, 450, 350 );
}
