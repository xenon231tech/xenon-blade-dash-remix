// Enemy entity
class Enemy {
  constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.health = 10;
    this.speed = 100;
    this.damage = 1;
  }
  
  update(dt) {
    // Update enemy state
  }
  
  moveTowardPlayer(player) {
    // Move toward player
  }
  
  attack() {
    // Perform attack
  }
  
  takeDamage(amount) {
    this.health -= amount;
  }
}
