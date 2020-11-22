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

push;
fill(black);
rect(0,460,940,140);
textSize(30);
text("ボルシチを作ろう！",470-textWidth("ボルシチを作ろう")/2,50+textAscent("ボルシチを作ろう"));
fill(255)
text("アイコンにカーソルを合わせるとロシア語で表示されます",470-textWidth("アイコンにカーソルを合わせるとロシア語で表示されます")/2,500+textAscent("アイコンにカーソルを合わせるとロシア語で表示されます"));
pop;

if(x>250 && x<360 && y>100 && y<210){ //タイル1:水
  push();
  fill(gray);
  noStroke();
  rect(250,100,110,110)
  balloon("вода",305,155,black);
  pop();
}

if(x>360 && x<470 && y>100 && y<210){ //タイル2:肉
  push();
  fill(gray);
  noStroke();
  rect(360,100,110,110)
  balloon("мясо",415,155,black);
  pop();
}

if(x>470 && x<580 && y>100 && y<210){ //タイル3:じゃがいも
  push();
  fill(gray);
  noStroke();
  rect(470,100,110,110)
  balloon("Картошка",525,155,black);
  pop();
}

if(x>580 && x<690 && y>100 && y<210){ //タイル4:にんじん
  push();
  fill(gray);
  noStroke();
  rect(580,100,110,110)
  balloon("морковь",635,155,black);
  pop();
}

if(x>250 && x<360 && y>210 && y<320){ //タイル5:たまねぎ
  push();
  fill(gray);
  noStroke();
  rect(250,210,110,110)
  balloon("лук",305,265,black);
  pop();
}

if(x>360 && x<470 && y>210 && y<320){ //タイル6:油
  push();
  fill(gray);
  noStroke();
  rect(360,210,110,110)
  balloon("масло",415,265,black);
  pop();
}

if(x>470 && x<580 && y>210 && y<320){ //タイル7:キャベツ
  push();
  fill(gray);
  noStroke();
  rect(470,210,110,110)
  balloon("капуста",525,265,black);
  pop();
}

if(x>580 && x<690 && y>210 && y<320){ //タイル8:ビーツ
  push();
  fill(gray);
  noStroke();
  rect(580,210,110,110)
  balloon("свёкла",635,265,black);
  pop();
}

if(x>250 && x<360 && y>320 && y<430){ //タイル9:塩
  push();
  fill(gray);
  noStroke();
  rect(250,320,110,110)
  balloon("соль",305,375,black);
  pop();
}

if(x>360 && x<470 && y>320 && y<430){ //タイル10:ハーブ
  push();
  fill(gray);
  noStroke();
  rect(360,320,110,110)
  balloon("зелень",415,375,black);
  pop();
}

if(x>470 && x<580 && y>320 && y<430){ //タイル11:ニンニク
  push();
  fill(gray);
  noStroke();
  rect(470,320,110,110)
  balloon("чеснок",525,375,black);
  pop();
}

if(x>580 && x<690 && y>320 && y<430){ //タイル12:胡椒
  push();
  fill(gray);
  noStroke();
  rect(580,320,110,110)
  balloon("перец",635,375,black);
  pop();
}

//以下吹き出しの設定
function balloon(t,x,y,color){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 14;
  let a = w + p * 2
  let b = h + p * 2
  let c = w /2 + p
  let d = h /2 + p

//吹き出し本体
  noStroke();
  textSize(18);
  fill(black);
  rect(x-c, y-d, a, b);
  ellipse(x-c, y+b/2-d , b);
  ellipse(x+a-c, y+b/2-d, b);
  tri(x+a/2-5-c, y+b-d);
  fill(255);

  text(t, x-c+6, y+h+p/2-d+2)

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
