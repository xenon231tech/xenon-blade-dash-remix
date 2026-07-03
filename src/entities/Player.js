// Player entity
class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health = 3;
    this.maxHealth = 3;
    this.speed = 200;
    this.damage = 1;
    this.range = 100;
  }
  
  update(dt) {
    // Update player state
  }
  
  slash() {
    // Perform slash attack
  }
  
  dash(direction) {
    // Perform dash
  }
  
  takeDamage(amount) {
    this.health -= amount;
  }
}
