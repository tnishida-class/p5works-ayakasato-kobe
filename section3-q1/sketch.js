// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love yakiniku", 100, 100, 220, 20, 100); //(テキスト,x座標,y座標,吹き出し色)
}

function balloon(t,x,y,r,g,b){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 10;

  noStroke();
  fill(r,g,b);
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
