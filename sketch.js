var back1,back2;
var system,code,security;
var score=0;

function preload() {
  back1 = loadImage("aladdin_cave2.jpg");
  back2= loadImage("treasure.jpg")
}

function setup() {
  createCanvas(1000,500);
  system = new System()
  security = new Security()
}

function draw() {
  background(back1);
  hints();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 3) {
    clear()
    background(back2)
    fill("Yellow")
    textSize(50);
    text("Tresure Unlocked",250, 200);
    text("Congratulations" , 280 , 150);
  }

  drawSprites()
}