const MARGIN = 40;
const LINE_ITERATIONS = 6;
const SPACE = 15;
const CIRC_SCALE = 1.2;

let square1State = 'right';
let square1Pos = { x: MARGIN + ((LINE_ITERATIONS-1)*SPACE), y: MARGIN };
let square1MoveCount = 0;

let square2State = 'right';
let square2Pos = { x: MARGIN + ((LINE_ITERATIONS-1)*SPACE), y: MARGIN + ((LINE_ITERATIONS-2)*SPACE) };
let square2MoveCount = 0;

// Define the movement patterns
const square1Pattern = [
  { direction: 'right', count: 3 },
  { direction: 'down', count: 4 },
  { direction: 'right', count: 4 },
  { direction: 'up', count: 2 },
  { direction: 'right', count: 4 },
  { direction: 'up', count: 2 },
];

const square2Pattern = [
  { direction: 'right', count: 1 },
  { direction: 'up', count: 2 },
  { direction: 'right', count: 4 },
  { direction: 'up', count: 2 },
  { direction: 'right', count: 4 },
  { direction: 'down', count: 4 },
  { direction: 'right', count: 2 },
];

let square1StepIndex = 0;
let square2StepIndex = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(12);
  background(0);

}

function draw() {
  ellipseMode(CENTER);
  
  stroke(255);
  strokeWeight(2);
  strokeJoin(MITER);
  strokeCap(PROJECT);

  drawFrameLines();
  drawCornerCircles();

  // Update and draw squares
  updateSquare('Square 1');
  updateSquare('Square 2');

  //Blur effect
  fill(0,50);
  noStroke();
  rect(0,0,windowWidth,windowHeight);
}

function updateSquare(square) {
  let pos, moveCount, stepIndex, pattern;
  if (square === 'Square 1') {
    pos = square1Pos;
    moveCount = square1MoveCount;
    stepIndex = square1StepIndex;
    pattern = square1Pattern;
  } else {
    pos = square2Pos;
    moveCount = square2MoveCount;
    stepIndex = square2StepIndex;
    pattern = square2Pattern;
  }

  // Get the current step
  const step = pattern[stepIndex];

  // Update position based on step direction
  if (step.direction === 'right') {
    pos.x += SPACE;
  } else if (step.direction === 'down') {
    pos.y += SPACE;
  } else if (step.direction === 'up') {
    pos.y -= SPACE;
  }

  // Draw square
  noStroke();
  fill(255);
  rect(pos.x, pos.y, SPACE, SPACE);

  // Update move count and step index
  moveCount++;
  if (moveCount === step.count) {
    moveCount = 0;
    stepIndex = (stepIndex + 1) % pattern.length;
  }

  // Save state and move count
  if (square === 'Square 1') {
    square1Pos = pos;
    square1MoveCount = moveCount;
    square1StepIndex = stepIndex;
  } else {
    square2Pos = pos;
    square2MoveCount = moveCount;
    square2StepIndex = stepIndex;
  }
}

function drawFrameLines() {
  for(let i = 0; i < LINE_ITERATIONS; i++ ){
    //top
    line(MARGIN,MARGIN + (i * SPACE),windowWidth-MARGIN,MARGIN + (i * SPACE));
    //left
    line(MARGIN + (i * SPACE),MARGIN,MARGIN + (i * SPACE),height-MARGIN);
    //right
    line(windowWidth-MARGIN -(i * SPACE),MARGIN ,windowWidth-MARGIN -(i * SPACE),height-MARGIN);
    //bottom
    line(MARGIN,windowHeight-MARGIN - (i * SPACE),windowWidth-MARGIN,windowHeight-MARGIN - (i * SPACE));
  }
}

function drawCornerCircles() {
  noFill();
  for(let i = 0; i < 4; i++) {
    let x = i % 2 === 0 ? MARGIN + (((LINE_ITERATIONS-1) * SPACE)/2) : windowWidth - MARGIN - (((LINE_ITERATIONS-1) * SPACE)/2);
    let y = i < 2 ? MARGIN + (((LINE_ITERATIONS-1) * SPACE)/2) : windowHeight - MARGIN - (((LINE_ITERATIONS-1) * SPACE)/2);
    ellipse(x, y, (LINE_ITERATIONS * SPACE)*CIRC_SCALE, (LINE_ITERATIONS * SPACE)*CIRC_SCALE);
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}