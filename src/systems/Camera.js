// Camera system for viewport management
class Camera {
  constructor(x = 0, y = 0, width = 1280, height = 720) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.zoom = 1;
    this.rotation = 0;
    this.targetX = x;
    this.targetY = y;
    this.targetZoom = 1;
    this.smoothing = 0.1;
  }
  
  follow(target, offsetX = 0, offsetY = 0) {
    this.targetX = target.x + offsetX - this.width / 2;
    this.targetY = target.y + offsetY - this.height / 2;
  }
  
  update(dt) {
    // Smooth camera movement
    this.x += (this.targetX - this.x) * this.smoothing;
    this.y += (this.targetY - this.y) * this.smoothing;
    this.zoom += (this.targetZoom - this.zoom) * this.smoothing;
  }
  
  setZoom(zoom) {
    this.targetZoom = Math.max(0.1, Math.min(5, zoom));
  }
  
  shake(intensity = 5, duration = 0.1) {
    const offsetX = (Math.random() - 0.5) * intensity;
    const offsetY = (Math.random() - 0.5) * intensity;
    this.x += offsetX;
    this.y += offsetY;
  }
  
  worldToScreen(worldX, worldY) {
    const screenX = (worldX - this.x) * this.zoom;
    const screenY = (worldY - this.y) * this.zoom;
    return { x: screenX, y: screenY };
  }
  
  screenToWorld(screenX, screenY) {
    const worldX = screenX / this.zoom + this.x;
    const worldY = screenY / this.zoom + this.y;
    return { x: worldX, y: worldY };
  }
  
  isInView(x, y, width = 0, height = 0) {
    return x + width > this.x &&
           x < this.x + this.width / this.zoom &&
           y + height > this.y &&
           y < this.y + this.height / this.zoom;
  }
  
  apply(ctx) {
    ctx.save();
    ctx.translate(this.width / 2, this.height / 2);
    ctx.scale(this.zoom, this.zoom);
    ctx.rotate(this.rotation);
    ctx.translate(-this.x - this.width / (2 * this.zoom), -this.y - this.height / (2 * this.zoom));
  }
  
  restore(ctx) {
    ctx.restore();
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Camera;
}
