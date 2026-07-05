// Configuration manager for game settings
class ConfigManager {
  constructor() {
    this.config = {
      game: {
        width: 1280,
        height: 720,
        targetFPS: 60,
        difficulty: 'normal'
      },
      audio: {
        masterVolume: 0.8,
        sfxVolume: 0.7,
        musicVolume: 0.6,
        enabled: true
      },
      graphics: {
        particlesEnabled: true,
        effectsQuality: 'high',
        vsync: true,
        resolution: '1x'
      },
      input: {
        keyboardEnabled: true,
        mouseEnabled: true,
        touchEnabled: true,
        gamepadEnabled: true
      },
      gameplay: {
        difficulty: 'normal',
        showFPS: false,
        showDebug: false,
        autoSave: true
      }
    };
  }
  
  get(path) {
    const keys = path.split('.');
    let value = this.config;
    
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return undefined;
      }
    }
    
    return value;
  }
  
  set(path, value) {
    const keys = path.split('.');
    const lastKey = keys.pop();
    let obj = this.config;
    
    for (const key of keys) {
      if (!(key in obj)) {
        obj[key] = {};
      }
      obj = obj[key];
    }
    
    obj[lastKey] = value;
  }
  
  load(config) {
    this.config = { ...this.config, ...config };
  }
  
  getAll() {
    return JSON.parse(JSON.stringify(this.config));
  }
  
  reset() {
    this.config = {
      game: {
        width: 1280,
        height: 720,
        targetFPS: 60,
        difficulty: 'normal'
      },
      audio: {
        masterVolume: 0.8,
        sfxVolume: 0.7,
        musicVolume: 0.6,
        enabled: true
      },
      graphics: {
        particlesEnabled: true,
        effectsQuality: 'high',
        vsync: true,
        resolution: '1x'
      },
      input: {
        keyboardEnabled: true,
        mouseEnabled: true,
        touchEnabled: true,
        gamepadEnabled: true
      },
      gameplay: {
        difficulty: 'normal',
        showFPS: false,
        showDebug: false,
        autoSave: true
      }
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ConfigManager;
}
