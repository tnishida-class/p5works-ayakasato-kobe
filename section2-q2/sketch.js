// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
      if((i+j)%2==0){
        fill(255);
      }
      else{
        fill(150);
      }
      console.log(i,j);
      rect(size*i,size*j,size,size);
    }
  }
  for(let a = 0; a < 8; a++){
    for(let b = 0; b < 3; b++){
       if((a+b)%2==0){
        fill(255);
      }
      else{
        fill(255,0,0);
      }
      console.log(a,b);
      ellipse(a*size+size/2,b*size+size/2,22);
}
  }
   for(let c = 0; c < 8; c++){
    for(let d = 3; d < 5; d++){
       if((c+d)%2==0){
        fill(255);
      }
      else{
        fill(150);
      }
      console.log(c,d);
      ellipse(c*size+size/2,d*size+size/2,22);
}
   }
     for(let e = 0; e < 8; e++){
    for(let f = 5; f < 8; f++){
       if((e+f)%2==0){
        fill(255);
      }
      else{
        fill(0);
      }
      console.log(e,f);
      ellipse(e*size+size/2,f*size+size/2,22);
}
   }
}
