// Settings scene for game configuration
class SettingsScene {
  constructor(name = 'settings') {
    this.name = name;
    this.settings = {
      masterVolume: 0.8,
      sfxVolume: 0.7,
      musicVolume: 0.6,
      difficulty: 'normal',
      showFPS: false,
      particlesEnabled: true
    };
    this.selectedSetting = 0;
    this.settingNames = Object.keys(this.settings);
  }
  
  onEnter() {
    // Load settings
  }
  
  onExit() {
    // Save settings
  }
  
  handleInput(input) {
    if (input.isKeyPressed('ArrowUp')) {
      this.selectedSetting = (this.selectedSetting - 1 + this.settingNames.length) % this.settingNames.length;
    }
    if (input.isKeyPressed('ArrowDown')) {
      this.selectedSetting = (this.selectedSetting + 1) % this.settingNames.length;
    }
    if (input.isKeyPressed('ArrowLeft')) {
      this.decreaseSetting();
    }
    if (input.isKeyPressed('ArrowRight')) {
      this.increaseSetting();
    }
    if (input.isKeyPressed('Escape')) {
      console.log('Back to menu');
    }
  }
  
  increaseSetting() {
    const settingName = this.settingNames[this.selectedSetting];
    const value = this.settings[settingName];
    
    if (typeof value === 'number') {
      this.settings[settingName] = Math.min(1, value + 0.1);
    } else if (typeof value === 'boolean') {
      this.settings[settingName] = !value;
    }
  }
  
  decreaseSetting() {
    const settingName = this.settingNames[this.selectedSetting];
    const value = this.settings[settingName];
    
    if (typeof value === 'number') {
      this.settings[settingName] = Math.max(0, value - 0.1);
    } else if (typeof value === 'boolean') {
      this.settings[settingName] = !value;
    }
  }
  
  update(dt) {
    // Update settings state
  }
  
  render(ctx) {
    // Draw background
    ctx.fillStyle = 'rgba(20, 20, 30, 1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Settings', ctx.canvas.width / 2, 50);
    
    // Draw settings
    ctx.font = '24px Arial';
    ctx.textAlign = 'left';
    
    for (let i = 0; i < this.settingNames.length; i++) {
      const settingName = this.settingNames[i];
      const value = this.settings[settingName];
      const isSelected = i === this.selectedSetting;
      
      ctx.fillStyle = isSelected ? 'rgba(255, 100, 100, 1)' : 'white';
      
      const y = 150 + i * 50;
      ctx.fillText(`${settingName}: ${this.formatValue(value)}`, 50, y);
    }
    
    // Draw instructions
    ctx.fillStyle = 'rgba(150, 150, 150, 1)';
    ctx.font = '16px Arial';
    ctx.fillText('Use Arrow Keys to navigate and adjust settings', 50, ctx.canvas.height - 50);
    ctx.fillText('Press ESC to go back', 50, ctx.canvas.height - 20);
  }
  
  formatValue(value) {
    if (typeof value === 'number') {
      return (value * 100).toFixed(0) + '%';
    } else if (typeof value === 'boolean') {
      return value ? 'ON' : 'OFF';
    }
    return value;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SettingsScene;
}
