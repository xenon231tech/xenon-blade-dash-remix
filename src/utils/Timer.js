// Timer utility for managing time-based events
class Timer {
  constructor(duration = 1, callback = null, loop = false) {
    this.duration = duration;
    this.callback = callback;
    this.loop = loop;
    this.elapsed = 0;
    this.isRunning = false;
    this.isPaused = false;
  }
  
  start() {
    this.isRunning = true;
    this.isPaused = false;
    this.elapsed = 0;
  }
  
  pause() {
    this.isPaused = true;
  }
  
  resume() {
    this.isPaused = false;
  }
  
  stop() {
    this.isRunning = false;
    this.elapsed = 0;
  }
  
  reset() {
    this.elapsed = 0;
  }
  
  update(dt) {
    if (!this.isRunning || this.isPaused) return;
    
    this.elapsed += dt;
    
    if (this.elapsed >= this.duration) {
      if (this.callback) {
        this.callback();
      }
      
      if (this.loop) {
        this.elapsed = 0;
      } else {
        this.isRunning = false;
      }
    }
  }
  
  getProgress() {
    return Math.min(1, this.elapsed / this.duration);
  }
  
  getRemainingTime() {
    return Math.max(0, this.duration - this.elapsed);
  }
  
  isFinished() {
    return this.elapsed >= this.duration;
  }
}

// Stopwatch for measuring elapsed time
class Stopwatch {
  constructor() {
    this.startTime = 0;
    this.pausedTime = 0;
    this.isRunning = false;
  }
  
  start() {
    this.startTime = Date.now();
    this.pausedTime = 0;
    this.isRunning = true;
  }
  
  stop() {
    this.isRunning = false;
  }
  
  reset() {
    this.startTime = 0;
    this.pausedTime = 0;
    this.isRunning = false;
  }
  
  getElapsedTime() {
    if (!this.isRunning) return this.pausedTime;
    return (Date.now() - this.startTime) / 1000;
  }
  
  pause() {
    if (this.isRunning) {
      this.pausedTime = this.getElapsedTime();
      this.isRunning = false;
    }
  }
  
  resume() {
    if (!this.isRunning) {
      this.startTime = Date.now() - (this.pausedTime * 1000);
      this.isRunning = true;
    }
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { Timer, Stopwatch };
}
