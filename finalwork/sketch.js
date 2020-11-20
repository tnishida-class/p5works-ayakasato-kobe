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


}
