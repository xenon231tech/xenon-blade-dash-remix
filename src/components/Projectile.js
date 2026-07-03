// Projectile system component
class Projectile {
  constructor(x, y, vx, vy, damage) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.damage = damage;
    this.radius = 5;
    this.life = 5;
  }
  
  update(dt) {
    this.x += this.vx * dt;
    this.y += this.vy * dt;
    this.life -= dt;
  }
  
  draw(ctx) {
    ctx.fillStyle = 'rgba(255, 200, 0, 1)';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }
  
  isAlive() {
    return this.life > 0;
  }
  
  checkCollision(entity) {
    const dx = this.x - entity.x;
    const dy = this.y - entity.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < this.radius + entity.radius;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Projectile;
}
