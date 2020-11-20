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
  let a = w + p * 2
  let b = h + p * 2
  let c = w /2 + p
  let d = h /2 + p

//吹き出し本体
  noStroke();
  fill(color);
  rect(x-c, y-d, a, b);
  ellipse(x-c, y+b/2-d , b);
  ellipse(x+a-c, y+b/2-d, b);
  tri(x+a/2-5-c, y+b-d);
  fill(255);
  text(t, x+p-c, y+h+p/2-d);
}

//吹き出し尻尾
function tri(x, y){
  beginShape();

  vertex(x, y);
  vertex(x+10, y);
  vertex(x+5, y+10);

  endShape(CLOSE);
}


}
