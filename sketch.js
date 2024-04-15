const MARGIN = 0;
const LINE_ITERATIONS = 6;
const SPACE = 20;
const CIRC_SCALE = 1.2;

let frameInnerWidth, frameInnerHeight;
let horizSqAmt, vertSqAmt;
let squareSpacing = SPACE * LINE_ITERATIONS;
let horizSqW, vertSqH;

let topPatSq1_Pos, topPatSq2_Pos, botPatSq1_Pos, botPatSq2_Pos, rightPatSq1_Pos, rightPatSq2_Pos, leftPatSq1_Pos, leftPatSq2_Pos;

// TOP VARIABLES

let topPatSq1_MoveCount = 0;
let topPatSq1_StepIndex = 0;
let topPatSquare1_Sequence = [
  { dir: 'right', count: 3 },
  { dir: 'down', count: 4 },
  { dir: 'right', count: 4 },
  { dir: 'up', count: 2 },
  { dir: 'right', count: 4 },
  { dir: 'up', count: 2 },
];

let topPatSq2_MoveCount = 0;
let topPatSq2_StepIndex = 0;
let topPatSq2_Sequence = [
  { dir: 'right', count: 1 },
  { dir: 'up', count: 2 },
  { dir: 'right', count: 4 },
  { dir: 'up', count: 2 },
  { dir: 'right', count: 4 },
  { dir: 'down', count: 4 },
  { dir: 'right', count: 2 },
];

// RIGHT VARIABLES

let rightPatSq1_MoveCount = 0;
let rightPatSq1_StepIndex = 0;
let rightPatSq1_Sequence = [
  { dir: 'down', count: 3 },//
  { dir: 'left', count: 4 },//
  { dir: 'down', count: 4 },//
  { dir: 'right', count: 2 },//
  { dir: 'down', count: 4 },//
  { dir: 'right', count: 2 },//
];

let rightPatSq2_MoveCount = 0;
let rightPatSq2_StepIndex = 0;
let rightPatSq2_Sequence = [
  { dir: 'down', count: 1 },//
  { dir: 'right', count: 2 },//
  { dir: 'down', count: 4 },//
  { dir: 'right', count: 2 },//
  { dir: 'down', count: 4 },//
  { dir: 'left', count: 4 },//
  { dir: 'down', count: 2 },//
];

// BOTTOM VARIABLES

let botPatSq1_MoveCount = 0;
let botPatSq1_StepIndex = 0;
let botPatSq1_Sequence = [
  { dir: 'left', count: 3 },
  { dir: 'up', count: 4 },
  { dir: 'left', count: 4 },
  { dir: 'down', count: 2 },
  { dir: 'left', count: 4 },
  { dir: 'down', count: 2 },
];

let botPatSq2_MoveCount = 0;
let botPatSq2_StepIndex = 0;
let botPatSq2_Sequence = [
  { dir: 'left', count: 1 },
  { dir: 'down', count: 2 },
  { dir: 'left', count: 4 },
  { dir: 'down', count: 2 },
  { dir: 'left', count: 4 },
  { dir: 'up', count: 4 },
  { dir: 'left', count: 2 },
];

// LEFT VARIABLES

let leftPatSq1_MoveCount = 0;
let leftPatSq1_StepIndex = 0;
let leftPatSq1_Sequence = [
  { dir: 'up', count: 1 },//
  { dir: 'right', count: 2 },//
  { dir: 'up', count: 4 },//
  { dir: 'right', count: 2 },//
  { dir: 'up', count: 4 },//
  { dir: 'left', count: 4 },//
  { dir: 'up', count: 2 },//
];

let leftPatSq2_MoveCount = 0;
let leftPatSq2_StepIndex = 0;
let leftPatSq2_Sequence = [
  { dir: 'up', count: 3 },//
  { dir: 'left', count: 4 },//
  { dir: 'up', count: 4 },//
  { dir: 'right', count: 2 },//
  { dir: 'up', count: 4 },//
  { dir: 'right', count: 2 },//
];

function setup() {
  createCanvas(1920, 1080);
  frameRate(12);
  background(0);
  noCursor();

  topPatSq1_Pos = { x: MARGIN + ((LINE_ITERATIONS-2) * SPACE), y: MARGIN };
  topPatSq2_Pos = { x: MARGIN + ((LINE_ITERATIONS-2) * SPACE), y: MARGIN + ((LINE_ITERATIONS-2) * SPACE) };

  rightPatSq1_Pos = { x: width - MARGIN - SPACE, y: MARGIN + (SPACE * (LINE_ITERATIONS-2)) };
  rightPatSq2_Pos = { x: width - MARGIN - (SPACE * (LINE_ITERATIONS-1)), y: MARGIN + (SPACE * (LINE_ITERATIONS-2)) };

  botPatSq1_Pos = { x: width - MARGIN - ((LINE_ITERATIONS - 1) * SPACE)-SPACE, y: height-MARGIN-SPACE };
  botPatSq2_Pos = { x: width - MARGIN - ((LINE_ITERATIONS - 1) * SPACE)-SPACE, y: (height-MARGIN)-(SPACE * (LINE_ITERATIONS-1)) };

  leftPatSq1_Pos = { x: MARGIN, y: height - MARGIN - (SPACE * (LINE_ITERATIONS-1)) };
  leftPatSq2_Pos = { x: MARGIN + (SPACE * (LINE_ITERATIONS -2)), y: height - MARGIN - (SPACE * (LINE_ITERATIONS-1)) };

  frameInnerWidth = width - (MARGIN * 2) - ((SPACE * (LINE_ITERATIONS-1)) * 2);
  frameInnerHeight =  height - (MARGIN * 2) - ((SPACE * (LINE_ITERATIONS-1)) * 2);

  horizSqAmt = Math.floor(frameInnerWidth / squareSpacing) + 1;
  vertSqAmt = Math.floor(frameInnerHeight / squareSpacing) + 2;

  horizSqW = frameInnerWidth / (horizSqAmt * LINE_ITERATIONS);
  vertSqH = frameInnerHeight / (vertSqAmt * LINE_ITERATIONS);
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);

  topPatSq1_Pos = { x: MARGIN + ((LINE_ITERATIONS-2) * SPACE), y: MARGIN };
  topPatSq2_Pos = { x: MARGIN + ((LINE_ITERATIONS-2) * SPACE), y: MARGIN + ((LINE_ITERATIONS-2) * SPACE) };

  botPatSq1_Pos = { x: windowWidth - MARGIN - ((LINE_ITERATIONS - 1) * SPACE)-SPACE, y: height-MARGIN-SPACE };
  botPatSq2_Pos = { x: windowWidth - MARGIN - ((LINE_ITERATIONS - 1) * SPACE)-SPACE, y: (height-MARGIN)-(SPACE * (LINE_ITERATIONS-1)) };

  frameInnerWidth = windowWidth - (MARGIN * 2) - ((SPACE * (LINE_ITERATIONS-1)) * 2);
  frameInnerHeight =  windowHeight - (MARGIN * 2) - ((SPACE * (LINE_ITERATIONS-1)) * 2);

  horizSqAmt = Math.floor(frameInnerWidth / squareSpacing);
  vertSqAmt = Math.floor(frameInnerHeight / squareSpacing);

  horizSqW = frameInnerWidth / (horizSqAmt * LINE_ITERATIONS);
  vertSqH = frameInnerHeight / (vertSqAmt * LINE_ITERATIONS);
}

function draw() {
  push();
  topPattern('topPatSq1');
  topPattern('topPatSq2');
  pop();

  push();
  rightPattern('rightPatSq1');
  rightPattern('rightPatSq2');
  pop();

  push();
  botPattern('botPatSq1');
  botPattern('botPatSq2');
  pop();

  push();
  leftPattern('leftPatSq1');
  leftPattern('leftPatSq2');
  pop();

  drawFrameLines();
  // drawCornerCircles();

  //Blur effect
  fill(0,30);
  noStroke();
  rect(0,0,width,height);
}

function topPattern(square) {
  let pos, moveCount, stepIndex, pattern, originalPos;
  if (square === 'topPatSq1') {
    pos = topPatSq1_Pos;
    moveCount = topPatSq1_MoveCount;
    stepIndex = topPatSq1_StepIndex;
    pattern = topPatSquare1_Sequence;
    originalPos = { x: MARGIN + ((LINE_ITERATIONS-2)*SPACE), y: MARGIN };
  } else if (square === 'topPatSq2'){
    pos = topPatSq2_Pos;
    moveCount = topPatSq2_MoveCount;
    stepIndex = topPatSq2_StepIndex;
    pattern = topPatSq2_Sequence;
    originalPos = { x: MARGIN + ((LINE_ITERATIONS-2)*SPACE), y: MARGIN + ((LINE_ITERATIONS-2)*SPACE) };
  }

  // Get the current step
  const step = pattern[stepIndex];

  // Update position based on step direction
  if (step.dir === 'right') {
    pos.x += horizSqW;
  } else if (step.dir === 'down') {
    pos.y += SPACE;
  } else if (step.dir === 'up') {
    pos.y -= SPACE;
  }

  // Draw square
  noStroke();
  fill(255);
  for(let i = 0; i < horizSqAmt; i++) {
    rect(pos.x + (i * squareSpacing), pos.y, horizSqW, SPACE);
  }
  rect(pos.x, pos.y, horizSqW, SPACE);

  // Update move count and step index
  moveCount++;
  if (moveCount === step.count) {
    moveCount = 0;
    stepIndex = (stepIndex + 1) % pattern.length;
  }

  // If the x position has exceeded the limit, reset position and move count
  if (pos.x >= originalPos.x + SPACE * LINE_ITERATIONS) {
    pos = { ...originalPos };
    moveCount = 0;
    stepIndex = 0;
  }

  // Save state and move count
  if (square === 'topPatSq1') {
    topPatSq1_Pos = pos;
    topPatSq1_MoveCount = moveCount;
    topPatSq1_StepIndex = stepIndex;
  } else if (square === 'topPatSq2'){
    topPatSq2_Pos = pos;
    topPatSq2_MoveCount = moveCount;
    topPatSq2_StepIndex = stepIndex;
  }
}

function rightPattern(square) {
  let pos, moveCount, stepIndex, pattern, originalPos;
  if (square === 'rightPatSq1') {
    pos = rightPatSq1_Pos;
    moveCount = rightPatSq1_MoveCount;
    stepIndex = rightPatSq1_StepIndex;
    pattern = rightPatSq1_Sequence;
    originalPos = { x: width - MARGIN - SPACE, y: MARGIN + (SPACE * (LINE_ITERATIONS-2)) };
  } else if (square === 'rightPatSq2'){
    pos = rightPatSq2_Pos;
    moveCount = rightPatSq2_MoveCount;
    stepIndex = rightPatSq2_StepIndex;
    pattern = rightPatSq2_Sequence;
    originalPos = { x: width - MARGIN - (SPACE * (LINE_ITERATIONS-1)), y: MARGIN + (SPACE * (LINE_ITERATIONS-2)) };
  }

  // Get the current step
  const step = pattern[stepIndex];

// Update position based on step direction
if (step.dir === 'down') {
  pos.y += vertSqH;
} else if (step.dir === 'left') {
  pos.x -= SPACE;
} else if (step.dir === 'right') {
  pos.x += SPACE;
}

  // Draw square
  noStroke();
  fill(255);
  for(let i = 0; i < vertSqAmt; i++) {
    rect(pos.x, pos.y + (i * squareSpacing), SPACE, vertSqH);
  }
  rect(pos.x, pos.y, SPACE, vertSqH);

  // Update move count and step index
  moveCount++;
  if (moveCount === step.count) {
    moveCount = 0;
    stepIndex = (stepIndex + 1) % pattern.length;
  }

  // If the x position has exceeded the limit, reset position and move count
  if (pos.y >= originalPos.y + SPACE * LINE_ITERATIONS) {
    pos = { ...originalPos };
    moveCount = 0;
    stepIndex = 0;
  }

  // Save state and move count
  if (square === 'rightPatSq1') {
    rightPatSq1_Pos = pos;
    rightPatSq1_MoveCount = moveCount;
    rightPatSq1_StepIndex = stepIndex;
  } else if (square === 'rightPatSq2'){
    rightPatSq2_Pos = pos;
    rightPatSq2_MoveCount = moveCount;
    rightPatSq2_StepIndex = stepIndex;
  }
}

function botPattern(square) {
  let pos, moveCount, stepIndex, pattern, originalPos;
  if (square === 'botPatSq1') {
    pos = botPatSq1_Pos;
    moveCount = botPatSq1_MoveCount;
    stepIndex = botPatSq1_StepIndex;
    pattern = botPatSq1_Sequence;
    originalPos = { x: width - MARGIN - ((LINE_ITERATIONS - 1) * SPACE), y: height-MARGIN-SPACE };
  } else if (square === 'botPatSq2'){
    pos = botPatSq2_Pos;
    moveCount = botPatSq2_MoveCount;
    stepIndex = botPatSq2_StepIndex;
    pattern = botPatSq2_Sequence;
    originalPos = { x: width - MARGIN - ((LINE_ITERATIONS - 1) * SPACE), y: (height-MARGIN)-(SPACE * (LINE_ITERATIONS-1)) };
  }

  // Get the current step
  const step = pattern[stepIndex];

  // Update position based on step direction
  if (step.dir === 'left') {
    pos.x -= horizSqW;
  } else if (step.dir === 'down') {
    pos.y += SPACE;
  } else if (step.dir === 'up') {
    pos.y -= SPACE;
  }

  // Draw square
  noStroke();
  fill(255);
for(let i = horizSqAmt - 1; i >= 0; i--) {
  rect(pos.x - (i * squareSpacing), pos.y, horizSqW, SPACE);
}
  rect(pos.x, pos.y, horizSqW, SPACE);

  // Update move count and step index
 moveCount++;
if (moveCount === step.count) {
  moveCount = 0;
  stepIndex = (stepIndex + 1) % pattern.length;
}

  // If the x position has exceeded the limit, reset position and move count
  if (pos.x <= originalPos.x - SPACE * LINE_ITERATIONS) {
    pos = { ...originalPos };
    moveCount = 0;
    stepIndex = 0;
  }

  // Save state and move count
  if (square === 'botPatSq1') {
    botPatSq1_Pos = pos;
    botPatSq1_MoveCount = moveCount;
    botPatSq1_StepIndex = stepIndex;
  } else if (square === 'botPatSq2'){
    botPatSq2_Pos = pos;
    botPatSq2_MoveCount = moveCount;
    botPatSq2_StepIndex = stepIndex;
  }
}

function leftPattern(square) {
  let pos, moveCount, stepIndex, pattern, originalPos;
  if (square === 'leftPatSq1') {
    pos = leftPatSq1_Pos;
    moveCount = leftPatSq1_MoveCount;
    stepIndex = leftPatSq1_StepIndex;
    pattern = leftPatSq1_Sequence;
    originalPos = { x: MARGIN, y: height - MARGIN - (SPACE * (LINE_ITERATIONS-1)) };
  } else if (square === 'leftPatSq2'){
    pos = leftPatSq2_Pos;
    moveCount = leftPatSq2_MoveCount;
    stepIndex = leftPatSq2_StepIndex;
    pattern = leftPatSq2_Sequence;
    originalPos = { x: MARGIN + (SPACE * (LINE_ITERATIONS -2)), y: height - MARGIN - (SPACE * (LINE_ITERATIONS-1)) };
  }

  // Get the current step
  const step = pattern[stepIndex];

// Update position based on step direction
if (step.dir === 'up') {
  pos.y -= vertSqH;
} else if (step.dir === 'right') {
  pos.x += SPACE;
} else if (step.dir === 'left') {
  pos.x -= SPACE;
}

  // Draw square
  noStroke();
  fill(255);
for(let i = vertSqAmt - 1; i >= 0; i--) {
  rect(pos.x, pos.y - (i * squareSpacing), SPACE, vertSqH);
}
  rect(pos.x, pos.y, SPACE, vertSqH);

  // Update move count and step index
 moveCount++;
if (moveCount === step.count) {
  moveCount = 0;
  stepIndex = (stepIndex + 1) % pattern.length;
}

  // If the x position has exceeded the limit, reset position and move count
  if (pos.y <= originalPos.y - SPACE * LINE_ITERATIONS) {
    pos = { ...originalPos };
    moveCount = 0;
    stepIndex = 0;
  }

  // Save state and move count
  if (square === 'leftPatSq1') {
    leftPatSq1_Pos = pos;
    leftPatSq1_MoveCount = moveCount;
    leftPatSq1_StepIndex = stepIndex;
  } else if (square === 'leftPatSq2'){
    leftPatSq2_Pos = pos;
    leftPatSq2_MoveCount = moveCount;
    leftPatSq2_StepIndex = stepIndex;
  }
}

function drawFrameLines() {
  stroke(255);
  strokeWeight(2);
  strokeJoin(MITER);
  strokeCap(PROJECT);
  
  for(let i = 0; i < LINE_ITERATIONS; i++ ){
    //top
    line(MARGIN,MARGIN + (i * SPACE),width-MARGIN,MARGIN + (i * SPACE));
    //left
    line(MARGIN + (i * SPACE),MARGIN,MARGIN + (i * SPACE),height-MARGIN);
    //right
    line(width-MARGIN -(i * SPACE),MARGIN ,width-MARGIN -(i * SPACE),height-MARGIN);
    //bottom
    line(MARGIN,height-MARGIN - (i * SPACE),width-MARGIN,height-MARGIN - (i * SPACE));
  }
}

function drawCornerCircles() {
  ellipseMode(CENTER);
  noFill();
  stroke(255);
  for(let i = 0; i < 4; i++) {
    let x = i % 2 === 0 ? MARGIN + (((LINE_ITERATIONS-1) * SPACE)/2) : width - MARGIN - (((LINE_ITERATIONS-1) * SPACE)/2);
    let y = i < 2 ? MARGIN + (((LINE_ITERATIONS-1) * SPACE)/2) : height - MARGIN - (((LINE_ITERATIONS-1) * SPACE)/2);
    ellipse(x, y, (LINE_ITERATIONS * SPACE)*CIRC_SCALE, (LINE_ITERATIONS * SPACE)*CIRC_SCALE);
  }
}
