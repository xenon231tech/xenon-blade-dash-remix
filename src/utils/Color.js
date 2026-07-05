// Color utility functions
class Color {
  constructor(r = 0, g = 0, b = 0, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  
  // Convert to CSS string
  toCss() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }
  
  // Convert to hex string
  toHex() {
    const toHex = (n) => {
      const hex = n.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(this.r)}${toHex(this.g)}${toHex(this.b)}`;
  }
  
  // Create from hex
  static fromHex(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return new Color(r, g, b);
  }
  
  // Create from HSL
  static fromHsl(h, s, l) {
    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs((h / 60) % 2 - 1));
    const m = l - c / 2;
    
    let r, g, b;
    if (h < 60) { r = c; g = x; b = 0; }
    else if (h < 120) { r = x; g = c; b = 0; }
    else if (h < 180) { r = 0; g = c; b = x; }
    else if (h < 240) { r = 0; g = x; b = c; }
    else if (h < 300) { r = x; g = 0; b = c; }
    else { r = c; g = 0; b = x; }
    
    return new Color(
      Math.round((r + m) * 255),
      Math.round((g + m) * 255),
      Math.round((b + m) * 255)
    );
  }
  
  // Interpolate between colors
  static lerp(color1, color2, t) {
    return new Color(
      Math.round(color1.r + (color2.r - color1.r) * t),
      Math.round(color1.g + (color2.g - color1.g) * t),
      Math.round(color1.b + (color2.b - color1.b) * t),
      color1.a + (color2.a - color1.a) * t
    );
  }
  
  // Predefined colors
  static get WHITE() { return new Color(255, 255, 255); }
  static get BLACK() { return new Color(0, 0, 0); }
  static get RED() { return new Color(255, 0, 0); }
  static get GREEN() { return new Color(0, 255, 0); }
  static get BLUE() { return new Color(0, 0, 255); }
  static get YELLOW() { return new Color(255, 255, 0); }
  static get CYAN() { return new Color(0, 255, 255); }
  static get MAGENTA() { return new Color(255, 0, 255); }
  static get TRANSPARENT() { return new Color(0, 0, 0, 0); }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Color;
}
