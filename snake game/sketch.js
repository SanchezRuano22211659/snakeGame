let vel = 15;

let numSegments = 2;
let direction = 'right';

const xStart = 0; 
const yStart = 250;
const diff = 10;

let xCor = [];
let yCor = [];

let xFruit;
let yFruit;
let fruitType;
let fruitSize=10;

let scoreElem;
let velocity;

function setup() {
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');
  velocity = createDiv('velocity = ' + vel);
  velocity.position(380, 20);
  velocity.id = 'score';
  velocity.style('color', 'white');

  createCanvas(500, 500);
  frameRate(vel);
  stroke(255);
  strokeWeight(10);
  fruitType = new apple();
  fruitSpawn();
  for (let i = 0; i < numSegments; i++) {
    xCor.push(xStart + i * diff);
    yCor.push(yStart);
  }
}

function draw() {
  background(0);
  for (let i = 0; i < numSegments - 1; i++) {
    line(xCor[i], yCor[i], xCor[i + 1], yCor[i + 1]);
  }
  fruitType.draw();
  updateSnakeCoordinates();
  checkForFruit();
  checkGameStatus();
  velocity.html('velocity = ' + vel);
}
  
function updateSnakeCoordinates() {
  for (let i = 0; i < numSegments - 1; i++) {
    xCor[i] = xCor[i + 1];
    yCor[i] = yCor[i + 1];
  }
  switch (direction) {
    case 'right':
      xCor[numSegments - 1] = xCor[numSegments - 2] + diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'up':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] - diff;
      break;
    case 'left':
      xCor[numSegments - 1] = xCor[numSegments - 2] - diff;
      yCor[numSegments - 1] = yCor[numSegments - 2];
      break;
    case 'down':
      xCor[numSegments - 1] = xCor[numSegments - 2];
      yCor[numSegments - 1] = yCor[numSegments - 2] + diff;
      break;
  }
}
function fruitSpawn()
{
  xFruit = floor(random(10, (width - 100) / 10)) * 10;
  yFruit = floor(random(10, (height - 100) / 10)) * 10;
}
function randomFruit()
{
  let randomType = floor(random(3));
  if (randomType === 0) {
      fruitType = new apple();
    } else if (randomType === 1) {
      fruitType = new carrot();
    } else {
      fruitType = new pear();
    }
  fruitSpawn();
}
function checkGameStatus() {
  if (
    xCor[xCor.length - 1] > width ||
    xCor[xCor.length - 1] < 0 ||
    yCor[yCor.length - 1] > height ||
    yCor[yCor.length - 1] < 0 ||
    checkSnakeCollision()
  ) {
    noLoop();
    const scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! Your score was ' + scoreVal); 
  }
}
function checkForFruit() {
  point(xFruit, yFruit);
  if (xCor[xCor.length - 1] === xFruit && yCor[yCor.length - 1] === yFruit) {
    const prevScore = parseInt(scoreElem.html().substring(8));
    if (fruitType.type == 'apple')
      {
        scoreElem.html('Score = ' + (prevScore + 1));
      }
    else if (fruitType.type == 'carrot')
      {
        scoreElem.html('Score = ' + (prevScore + 2));
      }
    else if (fruitType.type == 'pear')
      {
        scoreElem.html('Score = ' + (prevScore + 3));
      }
    vel += 1;
    xCor.unshift(xCor[0]);
    yCor.unshift(yCor[0]);
    numSegments++;
    randomFruit();
  }
}
function checkSnakeCollision() {
  const snakeHeadX = xCor[xCor.length - 1];
  const snakeHeadY = yCor[yCor.length - 1];
  for (let i = 0; i < xCor.length - 1; i++) {
    if (xCor[i] === snakeHeadX && yCor[i] === snakeHeadY) {
      return true;
    }
  }
}
function keyPressed() //snake movement
{
  switch (keyCode) {
    case 37:
      if (direction !== 'right') {
        direction = 'left';
      }
      break;
    case 39:
      if (direction !== 'left') {
        direction = 'right';
      }
      break;
    case 38:
      if (direction !== 'down') {
        direction = 'up';
      }
      break;
    case 40:
      if (direction !== 'up') {
        direction = 'down';
      }
      break;
  }
}
class fruit
  {
    constructor()
    {
      this.type = 'null'
    }
  }
class apple extends fruit
{
  constructor()
  {
    super()
    this.type = 'apple';
    
  }
  draw()
  {
    ellipse(xFruit, yFruit, fruitSize / 3, fruitSize / 3);
  }
}
class carrot extends fruit
{
  constructor()
  {
    super()
    this.type = 'carrot';
  }
  draw()
  {
    triangle(xFruit - fruitSize / 10,
             yFruit + fruitSize / 10,
             xFruit,
             yFruit - fruitSize / 10,
             xFruit + fruitSize / 10,
             yFruit + fruitSize / 10);
  }
}
class pear extends fruit
{
  constructor()
  {
    super()
    this.type = 'pear';
  }
  draw()
  {
    rect(xFruit, yFruit, fruitSize / 3, fruitSize / 3);
  }
}
