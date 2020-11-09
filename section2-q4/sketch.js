// ギリシャ国旗
function setup() {
  const blue = color(3, 99, 183);
  createCanvas(270, 180);
  noStroke();
  background(255);

  let d = height / 9; // 縞1本の太さ

  for(let i = 0; i < 9; i++){
    // BLANK[1] (hint: 縞の色を交互に変えるには2で割った余りを使おう)
        if(i%2==0){
        fill(blue);
      }
      else{
        fill(255);
      }
    rect(0, i * d, width, (i + 1) * d);
  }

  fill(blue);
  let size = d * 5;
  rect(0, 0, size, size);

  fill(255);
  // BLANK[2] (hint: 白い十字を描くには rect を二つ描こう)
  rect(0, height/9*2, size, height/9);
  rect(height/9*2, 0, height/9, size);
}
