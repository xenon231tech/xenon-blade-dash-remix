// Menu scene for game start screen
class MenuScene {
  constructor(name = 'menu') {
    this.name = name;
    this.buttons = [];
    this.selectedButton = 0;
  }
  
  onEnter() {
    this.setupButtons();
  }
  
  onExit() {
    this.buttons = [];
  }
  
  setupButtons() {
    this.buttons = [
      { label: 'Start Game', x: 640, y: 300, width: 200, height: 50 },
      { label: 'Settings', x: 640, y: 400, width: 200, height: 50 },
      { label: 'Leaderboard', x: 640, y: 500, width: 200, height: 50 },
      { label: 'Quit', x: 640, y: 600, width: 200, height: 50 }
    ];
  }
  
  handleInput(input) {
    if (input.isKeyPressed('ArrowUp')) {
      this.selectedButton = (this.selectedButton - 1 + this.buttons.length) % this.buttons.length;
    }
    if (input.isKeyPressed('ArrowDown')) {
      this.selectedButton = (this.selectedButton + 1) % this.buttons.length;
    }
    if (input.isKeyPressed('Enter')) {
      this.selectButton(this.selectedButton);
    }
  }
  
  selectButton(index) {
    const button = this.buttons[index];
    console.log(`Selected: ${button.label}`);
    // Emit event or call callback
  }
  
  update(dt) {
    // Update menu state
  }
  
  render(ctx) {
    // Draw background
    ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Blade Dash Remix', ctx.canvas.width / 2, 100);
    
    // Draw buttons
    for (let i = 0; i < this.buttons.length; i++) {
      const button = this.buttons[i];
      const isSelected = i === this.selectedButton;
      
      ctx.fillStyle = isSelected ? 'rgba(255, 100, 100, 1)' : 'rgba(100, 100, 100, 1)';
      ctx.fillRect(button.x - button.width / 2, button.y - button.height / 2, button.width, button.height);
      
      ctx.fillStyle = 'white';
      ctx.font = '24px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(button.label, button.x, button.y);
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = MenuScene;
}
