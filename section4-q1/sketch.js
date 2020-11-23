// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」
let count;
let cycle;

function setup(){
  createCanvas(200, 200);
  count = 0;
  cycle = 130;
}

function draw(){
  background(160, 192, 255);
  count = (count + 1) % cycle;
  // BLANK[1]
   let size;
  if (count < 65) {
    size = 130 - count
  }
  else {
    size = count
  }
  ellipse(width / 2, height / 2, size);

}
