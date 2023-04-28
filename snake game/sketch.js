//var
let fruitType;
let snakePlayer;

const xStart = 0; 
const yStart = 250;
const diff = 10;

let vel=15;
let direction='right';

let scoreElem;
let velocity;

let compareX;
let compareY;

function gameRestart()
{
  if (keyCode === ENTER)
    {
      location.reload()
    }
  }

function drawCompareX()
{
  compareX = createDiv(0 + ' = ' + 0);
  compareX.position(380, 50);
  compareX.id = 'compareX';
  compareX.style('color', 'white');
}
function drawCompareY()
{
  compareY = createDiv(0 + ' = ' + 0);
  compareY.position(20, 50);
  compareY.id = 'compareY';
  compareY.style('color', 'white');
}
function drawScore()
{
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.id = 'score';
  scoreElem.style('color', 'white');
}
function drawVelocity()
{
  velocity = createDiv('velocity = ' + vel);
  velocity.position(380, 20);
  velocity.id = 'velocity';
  velocity.style('color', 'white');
}

function setup()
{
  drawScore();
  drawVelocity();
  drawCompareX();
  drawCompareY();
  
  createCanvas(500,500);
  frameRate(vel);
  
  snakePlayer = new snake(direction);
  snakePlayer.snakeStart();

  fruitType = new apple();
  fruitType.fruitSpawn();
}
function draw()
{
  gameRestart();
  background(0);
  snakePlayer.draw();
  fruitType.draw();
  snakePlayer.direction = direction;
  snakePlayer.updateSnakeCoordinates();
  snakePlayer.checkForFruit();
  snakePlayer.checkGameStatus();
  velocity.html('velocity = ' + vel);
  
  compareX.html(floor(snakePlayer.xCor[snakePlayer.xCor.length - 1]) + ' = ' + fruitType.xFruit);
  compareY.html(floor(snakePlayer.yCor[snakePlayer.yCor.length - 1]) + ' = ' + fruitType.yFruit);
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

class snake
  {
    constructor(direction)
    {
      this.numSegments=3;
      this.xCor=[];
      this.yCor=[];
      this.direction=direction;
    }
    draw()
    {
      stroke(255);
      strokeWeight(10);
      for (let i = 0; i < this.numSegments - 1; i++)
      {
         line(this.xCor[i], this.yCor[i], this.xCor[i + 1], this.yCor[i + 1]);
      }
    }
    updateSnakeCoordinates() {
  for (let i = 0; i < this.numSegments - 1; i++) {
    this.xCor[i] = this.xCor[i + 1];
    this.yCor[i] = this.yCor[i + 1];
  }
  switch (this.direction) {
    case 'right':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] + diff;
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
      break;
    case 'up':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] - diff;
      break;
    case 'left':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2] - diff;
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2];
      break;
    case 'down':
      this.xCor[this.numSegments - 1] = this.xCor[this.numSegments - 2];
      this.yCor[this.numSegments - 1] = this.yCor[this.numSegments - 2] + diff;
      break;
  }
    }
    snakeStart()
    {
      for (let i = 0; i < this.numSegments; i++)
      {
          this.xCor.push(xStart + i * diff);
          this.yCor.push(yStart);
      }
    }
    checkGameStatus() {
  if (
    this.xCor[this.xCor.length - 1] > width ||
    this.xCor[this.xCor.length - 1] < 0 ||
    this.yCor[this.yCor.length - 1] > height ||
    this.yCor[this.yCor.length - 1] < 0 ||
    this.checkSnakeCollision()
  ) {
    noLoop();
    const scoreVal = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Game ended! Your score was ' + scoreVal);
    let endtime = second();
    while (second() < endtime + 4){} 
      location.reload()
      }
  }
    checkForFruit() {
    point(fruitType.xFruit, fruitType.yFruit);
  if (floor(this.xCor[this.xCor.length - 1]) === fruitType.xFruit && floor(this.yCor[this.yCor.length - 1]) === fruitType.yFruit) {
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
    this.xCor.unshift(this.xCor[0]);
    this.yCor.unshift(this.yCor[0]);
    this.numSegments += 1;
    fruitType.randomFruit();
    }
  }
    checkSnakeCollision() {
  const snakeHeadX = this.xCor[this.xCor.length - 1];
  const snakeHeadY = this.yCor[this.yCor.length - 1];
  for (let i = 0; i < this.xCor.length - 1; i++) {
    if (this.xCor[i] === snakeHeadX && this.yCor[i] === snakeHeadY) {
      return true;
    }
  }
    }
    
  }
class fruit
{
    constructor()
    {
      this.type = 'null'
      this.xFruit=floor(random(10,( (width-100)/10))) * 10;
      this.yFruit=floor(random(10,( (height-100)/10))) * 10;
      this.fruitSize=10;
    }
    fruitSpawn()
{
  const xIndex = floor(random(10,( (width-100)/10)));
  const yIndex = floor(random(10,( (height-100)/10)));
  this.xFruit = xIndex * 10;
  this.yFruit = yIndex * 10;
}
    randomFruit()
  {
    let randomType = floor(random(3));
    if (randomType === 0) {
      fruitType = new apple();
    } else if (randomType === 1) {
      fruitType = new carrot();
    } else {
      fruitType = new pear();
    }
  this.fruitSpawn();
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
    stroke(227, 37, 37);
    strokeWeight(10);
    ellipse(this.xFruit, this.yFruit, this.fruitSize / 3, this.fruitSize / 3);
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
    stroke(237, 145, 33);
    strokeWeight(10);
    triangle(this.xFruit - this.fruitSize / 10,
             this.yFruit + this.fruitSize / 10,
             this.xFruit,
             this.yFruit - this.fruitSize / 10,
             this.xFruit + this.fruitSize / 10,
             this.yFruit + this.fruitSize / 10
  );
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
    stroke(164, 255, 0);
    strokeWeight(10);
    rect(this.xFruit, this.yFruit, this.fruitSize / 3, this.fruitSize / 3);
  }
}
