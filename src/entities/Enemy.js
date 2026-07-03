// Enemy entity
class Enemy {
  constructor(type, x, y) {
    this.type = type;
    this.x = x;
    this.y = y;
    this.health = 10;
  }
  
  takeDamage(amount) {
    this.health -= amount;
  }
  
  isAlive() {
    return this.health > 0;
  }
}

module.exports = Enemy;