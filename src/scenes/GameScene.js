// Game scene for main gameplay
class GameScene {
  constructor(name = 'game') {
    this.name = name;
    this.player = null;
    this.enemies = [];
    this.particles = [];
    this.wave = 1;
    this.score = 0;
    this.combo = 0;
    this.isPaused = false;
  }
  
  onEnter() {
    this.initializeGame();
  }
  
  onExit() {
    this.cleanup();
  }
  
  initializeGame() {
    // Initialize player
    this.player = new Player(640, 360);
    
    // Initialize first wave
    this.startWave();
  }
  
  startWave() {
    this.enemies = [];
    const enemyCount = 3 + Math.floor(this.wave / 5);
    
    for (let i = 0; i < enemyCount; i++) {
      const angle = (i / enemyCount) * Math.PI * 2;
      const distance = 300;
      const x = 640 + Math.cos(angle) * distance;
      const y = 360 + Math.sin(angle) * distance;
      
      const enemyType = ['normal', 'fast', 'tank'][Math.floor(Math.random() * 3)];
      this.enemies.push(new Enemy(x, y, enemyType));
    }
  }
  
  handleInput(input) {
    if (input.isKeyPressed('Escape')) {
      this.isPaused = !this.isPaused;
    }
    
    if (!this.isPaused) {
      // Handle player movement
      let dx = 0, dy = 0;
      
      if (input.isKeyPressed('ArrowUp') || input.isKeyPressed('w')) dy -= 1;
      if (input.isKeyPressed('ArrowDown') || input.isKeyPressed('s')) dy += 1;
      if (input.isKeyPressed('ArrowLeft') || input.isKeyPressed('a')) dx -= 1;
      if (input.isKeyPressed('ArrowRight') || input.isKeyPressed('d')) dx += 1;
      
      if (dx !== 0 || dy !== 0) {
        this.player.move(dx, dy);
      }
      
      // Handle attacks and abilities
      if (input.isMousePressed()) {
        this.player.slash();
      }
      
      if (input.isKeyPressed(' ')) {
        this.player.dash(0, 0);
      }
    }
  }
  
  update(dt) {
    if (this.isPaused) return;
    
    // Update player
    this.player.update(dt);
    
    // Update enemies
    for (let i = this.enemies.length - 1; i >= 0; i--) {
      const enemy = this.enemies[i];
      enemy.update(dt);
      enemy.moveTowardPlayer(this.player);
      
      if (enemy.health <= 0) {
        this.score += 100 * (1 + this.combo * 0.1);
        this.combo++;
        this.enemies.splice(i, 1);
      }
    }
    
    // Check collisions
    this.checkCollisions();
    
    // Update particles
    for (let i = this.particles.length - 1; i >= 0; i--) {
      this.particles[i].update(dt);
      if (!this.particles[i].isAlive()) {
        this.particles.splice(i, 1);
      }
    }
    
    // Check wave completion
    if (this.enemies.length === 0) {
      this.wave++;
      this.startWave();
    }
    
    // Check game over
    if (this.player.health <= 0) {
      console.log('Game Over! Final Score:', this.score);
    }
  }
  
  checkCollisions() {
    // Check player-enemy collisions
    for (const enemy of this.enemies) {
      const dx = enemy.x - this.player.x;
      const dy = enemy.y - this.player.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 30) {
        this.player.takeDamage(1);
        this.combo = 0;
      }
    }
  }
  
  render(ctx) {
    // Draw background
    ctx.fillStyle = 'rgba(20, 20, 30, 1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw player
    this.player.render(ctx);
    
    // Draw enemies
    for (const enemy of this.enemies) {
      enemy.render(ctx);
    }
    
    // Draw particles
    for (const particle of this.particles) {
      particle.draw(ctx);
    }
    
    // Draw HUD
    this.drawHUD(ctx);
    
    // Draw pause overlay
    if (this.isPaused) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      
      ctx.fillStyle = 'white';
      ctx.font = 'bold 48px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('PAUSED', ctx.canvas.width / 2, ctx.canvas.height / 2);
    }
  }
  
  drawHUD(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    
    ctx.fillText(`Wave: ${this.wave}`, 20, 40);
    ctx.fillText(`Score: ${this.score}`, 20, 70);
    ctx.fillText(`Health: ${this.player.health}`, 20, 100);
    ctx.fillText(`Combo: ${this.combo}x`, 20, 130);
  }
  
  cleanup() {
    this.enemies = [];
    this.particles = [];
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameScene;
}
