// Enemy system
class EnemySystem {
  constructor() {
    this.enemies = [];
  }
  
  addEnemy(enemy) {
    this.enemies.push(enemy);
  }
  
  removeEnemy(enemy) {
    this.enemies = this.enemies.filter(e => e !== enemy);
  }
  
  update(dt) {
    this.enemies.forEach(e => e.update?.(dt));
  }
}

module.exports = EnemySystem;