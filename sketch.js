function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  ellipseMode(CENTER);
  // blendMode(DIFFERENCE);

  stroke(255);
  strokeWeight(2);
  strokeJoin(MITER);
  strokeCap(PROJECT);

  let wW = windowWidth;
  let wH = windowHeight;
  let marg = 40;
  let lineIterations = 6;
  let space = 20;
  let circScale = 1.15;

  for(let i = 0; i < lineIterations; i++ ){
  //top
  line(marg,marg + (i * space),wW-marg,marg + (i * space));

  //left
  line(marg + (i * space),marg,marg + (i * space),height-marg);

   //right
   line(wW-marg -(i * space),marg ,wW-marg -(i * space),height-marg);

   //bottom
  line(marg,wH-marg - (i * space),wW-marg,wH-marg - (i * space));
  }

noFill();
//top-left
ellipse(marg + (((lineIterations-1) * space)/2), marg + (((lineIterations-1) * space)/2),(lineIterations * space)*circScale, (lineIterations * space)*circScale);  

//top-right
ellipse(wW - marg - (((lineIterations-1) * space)/2), marg + (((lineIterations-1) * space)/2),(lineIterations * space)*circScale, (lineIterations * space)*circScale);  

//bottom-left
ellipse(marg + (((lineIterations-1) * space)/2), wH - marg - (((lineIterations-1) * space)/2),(lineIterations * space)*circScale, (lineIterations * space)*circScale);  

//bottom-right
ellipse(wW - marg - (((lineIterations-1) * space)/2), wH - marg - (((lineIterations-1) * space)/2),(lineIterations * space)*circScale, (lineIterations * space)*circScale);  

// blendMode(BLEND);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
