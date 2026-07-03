// Input system for handling keyboard, mouse, touch, and gamepad input
class InputSystem {
  constructor() {
    this.keys = {};
    this.mouse = { x: 0, y: 0, pressed: false };
    this.touch = { x: 0, y: 0, pressed: false };
    this.gamepad = null;
    this.setupListeners();
  }
  
  setupListeners() {
    // Keyboard events
    document.addEventListener('keydown', (e) => {
      this.keys[e.key] = true;
    });
    
    document.addEventListener('keyup', (e) => {
      this.keys[e.key] = false;
    });
    
    // Mouse events
    document.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    });
    
    document.addEventListener('mousedown', () => {
      this.mouse.pressed = true;
    });
    
    document.addEventListener('mouseup', () => {
      this.mouse.pressed = false;
    });
    
    // Touch events
    document.addEventListener('touchstart', (e) => {
      const touch = e.touches[0];
      this.touch.x = touch.clientX;
      this.touch.y = touch.clientY;
      this.touch.pressed = true;
    });
    
    document.addEventListener('touchmove', (e) => {
      const touch = e.touches[0];
      this.touch.x = touch.clientX;
      this.touch.y = touch.clientY;
    });
    
    document.addEventListener('touchend', () => {
      this.touch.pressed = false;
    });
    
    // Gamepad events
    window.addEventListener('gamepadconnected', (e) => {
      this.gamepad = e.gamepad;
    });
    
    window.addEventListener('gamepaddisconnected', () => {
      this.gamepad = null;
    });
  }
  
  isKeyPressed(key) {
    return this.keys[key] || false;
  }
  
  getMousePosition() {
    return { x: this.mouse.x, y: this.mouse.y };
  }
  
  isMousePressed() {
    return this.mouse.pressed;
  }
  
  getTouchPosition() {
    return { x: this.touch.x, y: this.touch.y };
  }
  
  isTouchPressed() {
    return this.touch.pressed;
  }
  
  getGamepadInput() {
    if (!this.gamepad) return null;
    
    const gp = navigator.getGamepads()[this.gamepad.index];
    return {
      leftStick: {
        x: gp.axes[0],
        y: gp.axes[1]
      },
      rightStick: {
        x: gp.axes[2],
        y: gp.axes[3]
      },
      buttons: gp.buttons.map(b => b.pressed)
    };
  }
  
  update() {
    // Update gamepad state if connected
    if (this.gamepad) {
      this.gamepad = navigator.getGamepads()[this.gamepad.index];
    }
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = InputSystem;
}
