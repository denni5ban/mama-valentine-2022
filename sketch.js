var bg;
var heart, pic;


function preload() {
  heart = loadImage("heart.png");
  bg = loadImage("card.png");
  pic = loadImage("pic.png");
}

function setup() {
  createCanvas(500,500);
  
}

function draw() {
  image(bg, 0, 0, width, height);
  image(pic, 130, 150, 235, 200);
  image(heart, 215, 320, 75, 75);
  textSize(18);
  fill("red");
  text("HAPPY VALENTINES DAY!", 140, 140);
  textSize(20);
  fill("red");
  text("Love you!", 210, 410);
}


