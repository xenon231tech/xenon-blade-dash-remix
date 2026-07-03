// UI components for HUD display
class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 24;
    this.padding = 20;
    this.lineHeight = 30;
  }
  
  draw(ctx) {
    this.drawHealth(ctx);
    this.drawScore(ctx);
    this.drawWave(ctx);
    this.drawCombo(ctx);
    this.drawFPS(ctx);
  }
  
  drawHealth(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = `${this.fontSize}px Arial`;
    const text = `Health: ${this.game.player.health}/${this.game.player.maxHealth}`;
    ctx.fillText(text, this.padding, this.padding + this.fontSize);
  }
  
  drawScore(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = `${this.fontSize}px Arial`;
    ctx.fillText(`Score: ${this.game.score}`, this.padding, this.padding + this.fontSize * 2);
  }
  
  drawWave(ctx) {
    ctx.fillStyle = 'white';
    ctx.font = `${this.fontSize}px Arial`;
    ctx.fillText(`Wave: ${this.game.wave}`, this.padding, this.padding + this.fontSize * 3);
  }
  
  drawCombo(ctx) {
    ctx.fillStyle = 'yellow';
    ctx.font = `${this.fontSize}px Arial`;
    const text = `Combo: ${this.game.combo}x`;
    ctx.fillText(text, this.padding, this.padding + this.fontSize * 4);
  }
  
  drawFPS(ctx) {
    ctx.fillStyle = 'lime';
    ctx.font = `${this.fontSize}px Arial`;
    const fps = Math.round(1 / this.game.deltaTime);
    ctx.fillText(`FPS: ${fps}`, ctx.canvas.width - 150, this.padding + this.fontSize);
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = UI;
}
