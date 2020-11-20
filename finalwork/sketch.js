// 最終課題を制作しよう
//https://tnishida-class.github.io/p5works-ayakasato-kobe/finalwork/index.html

function setup(){
  createCanvas(720, 595);
}

let img;
function preload(){
  img = loadImage('test.png');
}

function draw(){
  background(160, 192, 255);
  image(img,0,0);

keyPressed();
let x = mouseX;
let y = mouseY;
let gray = color(255, 255, 255);
let black = color(0);

if(x>250 && x<360 && y>100 && y<210){ //タイル1:水
  push();
  fill(gray);
  noStroke();
  rect(250,100,110,110)
  balloon(вода,305,155,black);
  pop();
}


//以下吹き出しの設定
function balloon(t,x,y,color){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;
  let x = x - (w/2-p);
  let y = y - (h/2-p);

  noStroke();
  fill(color);
  rect(x, y, w + p * 2, h + p * 2);
  ellipse(x, y + (h+p*2)/2, h+p*2);
  ellipse(x + (w+p*2), y+(h+p*2)/2, h+p*2);
  tri(x+(w+p*2)/2-5, y+(h+p*2));
  fill(255);
  text(t, x + p, y + h + p/2);
}


function tri(x, y){
  beginShape();

  vertex(x, y);
  vertex(x+10, y);
  vertex(x+5, y+10);

  endShape(CLOSE);
}

}
