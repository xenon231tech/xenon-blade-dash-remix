// Player entity
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 3;
    this.score = 0;
  }
  
  takeDamage(amount) {
    this.health -= amount;
  }
  
  heal(amount) {
    this.health += amount;
  }
}

module.exports = Player;