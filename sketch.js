var a,b;
function setup() {
  createCanvas(800,400);
  a= createSprite(200, 200, 50, 80);
  b= createSprite(400, 200, 80, 30);
  c =createSprite(300, 250, 20, 30);
}

function draw() {
  background(255,255,255);  
  b.x=World.mouseX;
  b.y=World.mouseY;
if (istouching(a,b)) {
  a.shapeColor = "red";
  b.shapeColor = "red";
}
else{
  a.shapeColor = "green"
  b.shapeColor = "green";
}
if (istouching(c,b)) {
 c.shapeColor = "red";
  b.shapeColor = "red";
}
else{
  c.shapeColor = "green"
  b.shapeColor = "green";
}
  drawSprites();
}

function istouching(ob1,ob2){
  if(ob2.x-ob1.x<ob2.width/2 +ob1.width/2 &&
    ob1.x-ob2.x<ob2.width/2 +ob1.width/2 &&
    ob2.y-ob1.y<ob2.height/2 +ob1.height/2 &&
    ob1.y-ob2.y<ob2.height/ 2 +ob1.height/2){
    return true
  
  }
  else{
    return false
}
}



