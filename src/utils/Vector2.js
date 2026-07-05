// Vector2 utility class for 2D math operations
class Vector2 {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
  
  // Basic operations
  add(other) {
    return new Vector2(this.x + other.x, this.y + other.y);
  }
  
  subtract(other) {
    return new Vector2(this.x - other.x, this.y - other.y);
  }
  
  multiply(scalar) {
    return new Vector2(this.x * scalar, this.y * scalar);
  }
  
  divide(scalar) {
    if (scalar === 0) throw new Error('Division by zero');
    return new Vector2(this.x / scalar, this.y / scalar);
  }
  
  // Vector operations
  dot(other) {
    return this.x * other.x + this.y * other.y;
  }
  
  cross(other) {
    return this.x * other.y - this.y * other.x;
  }
  
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  
  lengthSquared() {
    return this.x * this.x + this.y * this.y;
  }
  
  normalize() {
    const len = this.length();
    if (len === 0) return new Vector2(0, 0);
    return this.divide(len);
  }
  
  distance(other) {
    return this.subtract(other).length();
  }
  
  angle() {
    return Math.atan2(this.y, this.x);
  }
  
  rotate(angle) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return new Vector2(
      this.x * cos - this.y * sin,
      this.x * sin + this.y * cos
    );
  }
  
  clone() {
    return new Vector2(this.x, this.y);
  }
  
  toString() {
    return `Vector2(${this.x}, ${this.y})`;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Vector2;
}
