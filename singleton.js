class GameConfig {
  constructor() {
    if (GameConfig.instance) {
      return GameConfig.instance;
    }
    this.size = 72;
    GameConfig.instance = this;
  }
}

const config1 = new GameConfig();
const config2 = new GameConfig();
config2.size = 11;

console.log(config1.size); // 11
console.log(config1.size === config2.size); // true
