// Event system for game events
class EventSystem {
  constructor() {
    this.listeners = {};
  }
  
  on(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }
  
  off(eventName, callback) {
    if (!this.listeners[eventName]) return;
    
    const index = this.listeners[eventName].indexOf(callback);
    if (index > -1) {
      this.listeners[eventName].splice(index, 1);
    }
  }
  
  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
  }
  
  emit(eventName, ...args) {
    if (!this.listeners[eventName]) return;
    
    for (const callback of this.listeners[eventName]) {
      callback(...args);
    }
  }
  
  clear(eventName) {
    if (eventName) {
      delete this.listeners[eventName];
    } else {
      this.listeners = {};
    }
  }
  
  getListenerCount(eventName) {
    return this.listeners[eventName] ? this.listeners[eventName].length : 0;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EventSystem;
}
