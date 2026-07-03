// Animation system for sprite animations
class Animation {
  constructor(frames, speed) {
    this.frames = frames;
    this.speed = speed;
    this.currentFrame = 0;
    this.elapsed = 0;
    this.isPlaying = true;
    this.isLooping = true;
  }
  
  update(dt) {
    if (!this.isPlaying) return;
    
    this.elapsed += dt;
    if (this.elapsed >= this.speed) {
      this.currentFrame++;
      this.elapsed = 0;
      
      if (this.currentFrame >= this.frames.length) {
        if (this.isLooping) {
          this.currentFrame = 0;
        } else {
          this.currentFrame = this.frames.length - 1;
          this.isPlaying = false;
        }
      }
    }
  }
  
  getCurrentFrame() {
    return this.frames[this.currentFrame];
  }
  
  reset() {
    this.currentFrame = 0;
    this.elapsed = 0;
    this.isPlaying = true;
  }
  
  play() {
    this.isPlaying = true;
  }
  
  pause() {
    this.isPlaying = false;
  }
  
  stop() {
    this.isPlaying = false;
    this.currentFrame = 0;
    this.elapsed = 0;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Animation;
}
