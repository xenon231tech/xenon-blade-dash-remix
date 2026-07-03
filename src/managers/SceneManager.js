// Scene management system
class SceneManager {
  constructor() {
    this.scenes = {};
    this.currentScene = null;
    this.previousScene = null;
  }
  
  registerScene(name, scene) {
    this.scenes[name] = scene;
  }
  
  switchScene(name, data = null) {
    if (!this.scenes[name]) {
      console.error(`Scene not found: ${name}`);
      return;
    }
    
    if (this.currentScene) {
      this.previousScene = this.currentScene;
      this.currentScene.onExit();
    }
    
    this.currentScene = this.scenes[name];
    this.currentScene.onEnter(data);
  }
  
  goBack() {
    if (this.previousScene) {
      this.switchScene(this.previousScene.name);
    }
  }
  
  update(dt) {
    if (this.currentScene && this.currentScene.update) {
      this.currentScene.update(dt);
    }
  }
  
  render(ctx) {
    if (this.currentScene && this.currentScene.render) {
      this.currentScene.render(ctx);
    }
  }
  
  handleInput(input) {
    if (this.currentScene && this.currentScene.handleInput) {
      this.currentScene.handleInput(input);
    }
  }
  
  getCurrentScene() {
    return this.currentScene;
  }
  
  getCurrentSceneName() {
    return this.currentScene ? this.currentScene.name : null;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SceneManager;
}
