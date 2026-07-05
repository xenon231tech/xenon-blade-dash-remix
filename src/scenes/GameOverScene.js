// Game over scene
class GameOverScene {
  constructor(name = 'gameOver') {
    this.name = name;
    this.finalScore = 0;
    this.finalWave = 0;
    this.selectedOption = 0;
    this.options = ['Restart', 'Menu', 'Quit'];
  }
  
  onEnter(data) {
    this.finalScore = data?.score || 0;
    this.finalWave = data?.wave || 0;
    this.selectedOption = 0;
  }
  
  onExit() {
    // Cleanup
  }
  
  handleInput(input) {
    if (input.isKeyPressed('ArrowLeft')) {
      this.selectedOption = (this.selectedOption - 1 + this.options.length) % this.options.length;
    }
    if (input.isKeyPressed('ArrowRight')) {
      this.selectedOption = (this.selectedOption + 1) % this.options.length;
    }
    if (input.isKeyPressed('Enter')) {
      this.selectOption(this.selectedOption);
    }
  }
  
  selectOption(index) {
    const option = this.options[index];
    console.log(`Selected: ${option}`);
    // Emit event or call callback
  }
  
  update(dt) {
    // Update game over state
  }
  
  render(ctx) {
    // Draw background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw title
    ctx.fillStyle = 'rgba(255, 100, 100, 1)';
    ctx.font = 'bold 64px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('GAME OVER', ctx.canvas.width / 2, 100);
    
    // Draw stats
    ctx.fillStyle = 'white';
    ctx.font = '32px Arial';
    ctx.fillText(`Final Score: ${this.finalScore}`, ctx.canvas.width / 2, 200);
    ctx.fillText(`Wave Reached: ${this.finalWave}`, ctx.canvas.width / 2, 250);
    
    // Draw options
    ctx.font = '24px Arial';
    const optionX = ctx.canvas.width / 2 - 150;
    const optionY = 400;
    const optionSpacing = 100;
    
    for (let i = 0; i < this.options.length; i++) {
      const isSelected = i === this.selectedOption;
      ctx.fillStyle = isSelected ? 'rgba(255, 100, 100, 1)' : 'rgba(100, 100, 100, 1)';
      
      ctx.fillRect(optionX + i * optionSpacing, optionY, 80, 50);
      
      ctx.fillStyle = 'white';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(this.options[i], optionX + i * optionSpacing + 40, optionY + 25);
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GameOverScene;
}
