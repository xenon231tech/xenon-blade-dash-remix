// Game loop
class GameLoop {
  constructor(game) {
    this.game = game;
    this.running = false;
  }
  
  start() {
    this.running = true;
    this.loop();
  }
  
  loop() {
    if (!this.running) return;
    
    this.update();
    this.render();
    
    requestAnimationFrame(() => this.loop());
  }
  
  update() {
    // Update game state
  }
  
  render() {
    // Render game
  }
}
