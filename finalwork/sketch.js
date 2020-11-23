// 最終課題を制作しよう
//https://tnishida-class.github.io/p5works-ayakasato-kobe/finalwork/index.html

function setup(){
  createCanvas(940, 600);
}

let img;
function preload(){
  img = loadImage('background.png');
}

function draw(){
  background(160, 192, 255);
  image(img,0,0);


let x = mouseX;
let y = mouseY;
let gray = color(217, 215, 212);
let black = color(0);


if(x>250 && x<360 && y>100 && y<210){ //タイル1:水
  push();
  fill(gray);
  noStroke();
  rect(250,100,110,110);
  balloon("вода",305,155,black);
  pop();
}

if(x>360 && x<470 && y>100 && y<210){ //タイル2:肉
  push();
  fill(gray);
  noStroke();
  rect(360,100,110,110);
  balloon("мясо",415,155,black);
  pop();
}

if(x>470 && x<580 && y>100 && y<210){ //タイル3:じゃがいも
  push();
  fill(gray);
  noStroke();
  rect(470,100,110,110);
  balloon("Картошка",525,155,black);
  pop();
}

if(x>580 && x<690 && y>100 && y<210){ //タイル4:にんじん
  push();
  fill(gray);
  noStroke();
  rect(580,100,110,110);
  balloon("морковь",635,155,black);
  pop();
}

if(x>250 && x<360 && y>210 && y<320){ //タイル5:たまねぎ
  push();
  fill(gray);
  noStroke();
  rect(250,210,110,110);
  balloon("лук",305,265,black);
  pop();
}

if(x>360 && x<470 && y>210 && y<320){ //タイル6:油
  push();
  fill(gray);
  noStroke();
  rect(360,210,110,110);
  balloon("масло",415,265,black);
  pop();
}

if(x>470 && x<580 && y>210 && y<320){ //タイル7:キャベツ
  push();
  fill(gray);
  noStroke();
  rect(470,210,110,110);
  balloon("капуста",525,265,black);
  pop();
}

if(x>580 && x<690 && y>210 && y<320){ //タイル8:ビーツ
  push();
  fill(gray);
  noStroke();
  rect(580,210,110,110);
  balloon("свёкла",635,265,black);
  pop();
}

if(x>250 && x<360 && y>320 && y<430){ //タイル9:塩
  push();
  fill(gray);
  noStroke();
  rect(250,320,110,110);
  balloon("соль",305,375,black);
  pop();
}

if(x>360 && x<470 && y>320 && y<430){ //タイル10:ハーブ
  push();
  fill(gray);
  noStroke();
  rect(360,320,110,110);
  balloon("зелень",415,375,black);
  pop();
}

if(x>470 && x<580 && y>320 && y<430){ //タイル11:ニンニク
  push();
  fill(gray);
  noStroke();
  rect(470,320,110,110);
  balloon("чеснок",525,375,black);
  pop();
}

if(x>580 && x<690 && y>320 && y<430){ //タイル12:胡椒
  push();
  fill(gray);
  noStroke();
  rect(580,320,110,110);
  balloon("перец",635,375,black);
  pop();
}

//ボルシチ
if(x>645 && x<770 && y>10 && y<95){
  push();
  fill(gray);
  noStroke();
  rect(645,10,125,85);
  balloon("Борщ",708,53,black);
  pop();
}

//少女
if(x>15 && x<165 && y>0 && y<440){
  push();
  balloon("Девушка",220,130,black);
  pop();
}

//鳥
if(x>810 && x<920 && y>120 && y<240){
  push();
  balloon("птица",840,70,black);
  pop();
}

//犬
if(x>700 && x<860 && y>280 && y<460){
  push();
  balloon("собака",730,190,black);
  pop();
}

//以下吹き出しの設定
push();
function balloon(t,x,y,color){
  let w = textWidth(t);



//吹き出し本体
  noStroke();
  textSize(18);
  fill(black);
  rect(x-(textWidth(t)/2+10), y-23, textWidth(t)+20, 46);
  ellipse(x-(textWidth(t)/2+10), y , 46);
  ellipse(x+(textWidth(t)/2+10), y, 46);
  tri(x-5, y+23);
  fill(255);
  text(t, x-(textWidth(t)/2), y+6);

}

//吹き出し尻尾
function tri(x, y){
  beginShape();

  vertex(x, y);
  vertex(x+10, y);
  vertex(x+5, y+10);

  endShape(CLOSE);
}
pop();

}
