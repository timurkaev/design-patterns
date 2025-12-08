class Warrior {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Mage {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

class Archer {
  constructor(name, health) {
    this.name = name;
    this.health = health;
  }
}

// ЭТО ПЛОХО — код дублируется везде

// В файле game.js
function startGame(heroType) {
  let hero;
  if (heroType === "warrior") {
    hero = new Warrior("Aragorn", 100);
  } else if (heroType === "mage") {
    hero = new Mage("Gandalf", 1000);
  } else if (heroType === "archer") {
    hero = new Archer("Legolas", 500);
  }
  return hero;
}

// В файле enemy.js — тот же код повторяется!
function spawnEnemy(enemyType) {
  let enemy;
  if (enemyType === "warrior") {
    enemy = new Warrior("Uruk-hai", 80);
  } else if (enemyType === "mage") {
    enemy = new Mage("Dark Sorcerer", 900);
  } else if (enemyType === "archer") {
    enemy = new Archer("Orc Archer", 450);
  }
  return enemy;
}

// В файле shop.js — опять повторяется!
function buyHero(heroClass) {
  let character;
  if (heroClass === "warrior") {
    character = new Warrior("Purchased Warrior", 100);
  } else if (heroClass === "mage") {
    character = new Mage("Purchased Mage", 1000);
  } else if (heroClass === "archer") {
    character = new Archer("Purchased Archer", 500);
  }
  return character;
}

// Добавили новый класс Paladin?
// Нужно менять ВСЕ ТРИ ФУНКЦИИ!

/*---------------------------------------------- */

// characterFactory.js
class CharacterFactory {
  static create(type, name, health) {
    switch (type) {
      case "warrior":
        return new Warrior(name, health);
      case "mage":
        return new Mage(name, health);
      case "archer":
        return new Archer(name, health);
      default:
        throw new Error("Unknown type");
    }
  }
}

// game.js
function startGame(heroType) {
  return CharacterFactory.create(heroType, "Aragorn", 100);
}

// enemy.js
function spawnEnemy(enemyType) {
  return CharacterFactory.create(enemyType, "Uruk-hai", 80);
}

// shop.js
function buyHero(heroClass) {
  return CharacterFactory.create(heroClass, "Purchased Hero", 100);
}

// Добавили Paladin? Меняешь ОДИН файл:
// case "paladin": return new Paladin(name, health);
