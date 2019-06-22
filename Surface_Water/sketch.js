function setup () {
  createCanvas (650,650);
}

function draw () {
    background (255);
    noStroke ();
   fill(50,50,255,100*noise(80,120));
for  (let i = 10; i <width-4; i=i+40) {
  for  (let j = 10; j <height-2; j=j+40) {
  let x = 18*noise ((millis ()+i*j)/1800.0, 0.0);
  let y= 18*noise (0.0*(millis ()+i*j)/1800.0);
  let r= 15*noise ((millis ()+i*j) /1800.0);


  ellipse (i+x, j+y, r+15, r+15);
}
}
}
