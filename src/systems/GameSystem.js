// Game system
class GameSystem {
  constructor() {
    this.wave = 1;
    this.score = 0;
    this.combo = 0;
  }
  
  nextWave() {
    this.wave++;
  }
  
  addScore(points) {
    this.score += points * (1 + this.combo * 0.1);
  }
}

module.exports = GameSystem;