// Input map for managing key bindings
class InputMap {
  constructor() {
    this.keyBindings = new Map();
    this.setupDefaultBindings();
  }
  
  setupDefaultBindings() {
    // Movement
    this.bind('moveUp', ['ArrowUp', 'w', 'W']);
    this.bind('moveDown', ['ArrowDown', 's', 'S']);
    this.bind('moveLeft', ['ArrowLeft', 'a', 'A']);
    this.bind('moveRight', ['ArrowRight', 'd', 'D']);
    
    // Actions
    this.bind('attack', ['Mouse0', 'Space']);
    this.bind('dash', ['Space', 'Shift']);
    this.bind('pause', ['Escape', 'p', 'P']);
    this.bind('interact', ['Enter', 'e', 'E']);
  }
  
  bind(action, keys) {
    if (typeof keys === 'string') {
      keys = [keys];
    }
    this.keyBindings.set(action, keys);
  }
  
  unbind(action) {
    this.keyBindings.delete(action);
  }
  
  getKeys(action) {
    return this.keyBindings.get(action) || [];
  }
  
  isActionTriggered(action, pressedKeys) {
    const keys = this.getKeys(action);
    for (const key of keys) {
      if (pressedKeys.includes(key)) {
        return true;
      }
    }
    return false;
  }
  
  getAllBindings() {
    const bindings = {};
    for (const [action, keys] of this.keyBindings) {
      bindings[action] = keys;
    }
    return bindings;
  }
  
  reset() {
    this.keyBindings.clear();
    this.setupDefaultBindings();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = InputMap;
}
