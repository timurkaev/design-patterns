class BoardSquare {
  constructor(color, row, file, startingPiece) {
    this.color = color;
    this.row = row;
    this.file = file;
  }

  occupySquare() {
    this.piece = null;
  }

  clearSquare() {
    this.piece = null;
  }
}

class BoardSquarePrototype {
  constructor(prototype) {
    this.prototype = prototype;
  }

  clone() {
    const boardSquare = new BoardSquare();
    boardSquare.color = this.prototype.color;
    boardSquare.row = this.prototype.row;
    boardSquare.file = this.prototype.file;

    return boardSquare;
  }
}

const whiteSquare = new BoardSquare("white");
const whiteSquarePrototype = new BoardSquarePrototype(whiteSquare);

const whiteSquareTwo = whiteSquarePrototype.clone();
// three four five ...
const whiteSquareLast = whiteSquarePrototype.clone();

console.log(
  whiteSquare.color === whiteSquareTwo.color,
  whiteSquareTwo.color === whiteSquareLast.color
);
