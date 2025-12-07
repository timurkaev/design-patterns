class Game {
  constructor(name, size, date) {
    this.name = name;
    this.size = size;
    this.date = date;
  }
}

const game = new Game("battlefield 4", 64, 2014);

class GamePrototype {
  constructor(prototype) {
    this.prototype = prototype;
  }

  clone() {
    return Object.assign(new Game(), this.prototype);
  }
}

const gamePrototype = new GamePrototype(game);
const clonedGame = gamePrototype.clone();
clonedGame.name = "Red Dead Redemption 2";
clonedGame.size = 32;

console.log(game.name);
console.log(game.size);

console.log(clonedGame.name);
console.log(clonedGame.size);
