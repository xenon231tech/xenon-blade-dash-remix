// Performance monitor for tracking game metrics
class PerformanceMonitor {
  constructor() {
    this.frameCount = 0;
    this.fps = 0;
    this.deltaTime = 0;
    this.lastFrameTime = Date.now();
    this.metrics = {
      totalFrames: 0,
      totalTime: 0,
      minFPS: 60,
      maxFPS: 0,
      averageFPS: 0
    };
  }
  
  update() {
    const now = Date.now();
    this.deltaTime = (now - this.lastFrameTime) / 1000;
    this.lastFrameTime = now;
    
    this.frameCount++;
    this.metrics.totalFrames++;
    this.metrics.totalTime += this.deltaTime;
    
    // Calculate FPS every 10 frames
    if (this.frameCount >= 10) {
      this.fps = Math.round(this.frameCount / (this.deltaTime * 10));
      this.frameCount = 0;
      
      this.metrics.minFPS = Math.min(this.metrics.minFPS, this.fps);
      this.metrics.maxFPS = Math.max(this.metrics.maxFPS, this.fps);
      this.metrics.averageFPS = Math.round(this.metrics.totalFrames / this.metrics.totalTime);
    }
  }
  
  getFPS() {
    return this.fps;
  }
  
  getDeltaTime() {
    return this.deltaTime;
  }
  
  getMetrics() {
    return { ...this.metrics };
  }
  
  reset() {
    this.frameCount = 0;
    this.fps = 0;
    this.deltaTime = 0;
    this.lastFrameTime = Date.now();
    this.metrics = {
      totalFrames: 0,
      totalTime: 0,
      minFPS: 60,
      maxFPS: 0,
      averageFPS: 0
    };
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceMonitor;
}
