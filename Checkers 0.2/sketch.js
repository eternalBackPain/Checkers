let checkersRed1 = [];
let checkersRed2 = [];
let checkersRed3 = [];
let checkersBlue1 = [];
let checkersBlue2 = [];
let checkersBlue3 = [];


function setup() {
  createCanvas(800, 800);
  //having moveable pieces
  for (i = 0; i < 4; i++) {
    checkersRed1[i] = new Checker(150 + i * 200, 50, 50);
  }
  for (i = 0; i < 4; i++) {
    checkersRed2[i] = new Checker(50 + i * 200, 150, 50);
  }
  for (i = 0; i < 4; i++) {
    checkersRed3[i] = new Checker(150 + i * 200, 250, 50)
  }
  for (i = 0; i < 4; i++) {
    checkersBlue1[i] = new Checker(50 + i * 200, 550, 50);
  }
  for (i = 0; i < 4; i++) {
    checkersBlue2[i] = new Checker(150 + i * 200, 650, 50);
  }
  for (i = 0; i < 4; i++) {
    checkersBlue3[i] = new Checker(50 + i * 200, 750, 50)
  }
}

function draw() {
  background(220);

  //drawing the board
  lineSquares(0, 0);
  lineSquares(1, 100);
  lineSquares(0, 200);
  lineSquares(1, 300);
  lineSquares(0, 400);
  lineSquares(1, 500);
  lineSquares(0, 600);
  lineSquares(1, 700);

  //displaying and moving the pieces
  for (i = 0; i < 4; i++) {
    checkersRed1[i].display(255, 0);
    checkersRed1[i].move(mouseX, mouseY)
  }
  for (i = 0; i < 4; i++) {
    checkersRed2[i].display(255, 0);
    checkersRed2[i].move(mouseX, mouseY)
  }
  for (i = 0; i < 4; i++) {
    checkersRed3[i].display(255, 0);
    checkersRed3[i].move(mouseX, mouseY)
  }
  for (i = 0; i < 4; i++) {
    checkersBlue1[i].display(0, 255);
    checkersBlue1[i].move(mouseX, mouseY)
  }
  for (i = 0; i < 4; i++) {
    checkersBlue2[i].display(0, 255);
    checkersBlue2[i].move(mouseX, mouseY)
  }
  for (i = 0; i < 4; i++) {
    checkersBlue3[i].display(0, 255);
    checkersBlue3[i].move(mouseX, mouseY)
  }
}

class Checker {
  constructor(x, y, d) {
    this.x = x
    this.y = y
    this.d = d
  }
  display(r, b) {
    fill(r, 0, b)
    ellipse(this.x, this.y, this.d, this.d)
  }
  move(px, py) {
    let d = dist(mouseX, mouseY, this.x, this.y)
    if (d < this.d / 2 && mouseIsPressed) {
      this.x = px
      this.y = py
    }
  }
}

function lineSquares(onoroff, ypos) {
  let x = onoroff;
  for (i = 0; i < 8; i++) {
    x = 1 - x;
    let colour = 255 * x;
    fill(colour);
    noStroke();
    rect(i * 100, ypos, 100, 100)
  }
}