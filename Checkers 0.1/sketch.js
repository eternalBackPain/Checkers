//Checkers

let gridArray = [];
let piecesArrayTop = [];
let piecesArrayBottom = [];
let cols = 8;
let rows = 8;
let locked = true;

function setup() {
  createCanvas(1000, 1000, );

  //MAKING THE GRID
  //make an array of arrays (you can test by searching gridArray in console)
  for (i = 0; i < cols; i++) {
    gridArray[i] = [];
    piecesArrayTop[i] = [];
    piecesArrayBottom[i] = [];
  }
  //for every column, for every row, make a new square
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      gridArray[i][j] = new Square(i * width / 8, j * height / 8, width / 8)
    }
  }

  //MAKING THE PIECES
  for (i = 0; i < cols; i++) {
    for (j = 0; j < 2; j++) {
      piecesArrayTop[i][j] = new Piece(
        height / 8 / 2 + i * height / 8,
        width / 8 / 2 + j * width / 8,
        50,
        red,
        0)
    }
  }
  for (i = 0; i < cols; i++) {
    for (j = 6; j < rows; j++) {
      piecesArrayBottom[i][j] = new Piece(
        height / 8 / 2 + i * height / 8,
        width / 8 / 2 + j * width / 8, 50,
        255,
        255)
    }
  }
}

function mousePressed() {
  for (i = 0; i < cols; i++) {
    for (j = 0; j < 2; j++) {
      if (locked = false) {
        piecesArrayTop[i][j].changeColour();
      }
    }
  }
}

function draw() {
  background(100, 150, 0);
  // for every column, for every row, draw the sqaure
  for (i = 0; i < cols; i++) {
    for (j = 0; j < rows; j++) {
      if ((i + j) % 2 == 0) {
        gridArray[i][j].displayWhite();
      } else {
        gridArray[i][j].displayBlack();
      }
    }
  }
  //showing the red pieces
  for (i = 0; i < cols; i++) {
    for (j = 0; j < 2; j++) {
      piecesArrayTop[i][j].displayRed();
      if (piecesArrayTop[i][j].cursorOverPiece(mouseX, mouseY) && mouseIsPressed) {
        locked = false;
        print('locked is false')
      } else {
        locked = true
      }
    }
  }
}

//showing the Blue pieces
// for (i = 0; i < cols; i++) {
//   for (j = 6; j < rows; j++) {
//     piecesArrayBottom[i][j].displayBlue();
//   }
// }

