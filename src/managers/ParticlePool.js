// Particle pool for efficient particle management
class ParticlePool {
  constructor(initialSize = 100) {
    this.particles = [];
    this.activeParticles = [];
    this.initialSize = initialSize;
    this.initialize();
  }
  
  initialize() {
    for (let i = 0; i < this.initialSize; i++) {
      this.particles.push(new Particle(0, 0, 0, 0, 0));
    }
  }
  
  acquire(x, y, vx, vy, life) {
    let particle;
    
    if (this.particles.length > 0) {
      particle = this.particles.pop();
      particle.x = x;
      particle.y = y;
      particle.vx = vx;
      particle.vy = vy;
      particle.life = life;
      particle.maxLife = life;
    } else {
      particle = new Particle(x, y, vx, vy, life);
    }
    
    this.activeParticles.push(particle);
    return particle;
  }
  
  release(particle) {
    const index = this.activeParticles.indexOf(particle);
    if (index > -1) {
      this.activeParticles.splice(index, 1);
      this.particles.push(particle);
    }
  }
  
  update(dt) {
    for (let i = this.activeParticles.length - 1; i >= 0; i--) {
      const particle = this.activeParticles[i];
      particle.update(dt);
      
      if (!particle.isAlive()) {
        this.release(particle);
      }
    }
  }
  
  render(ctx) {
    for (const particle of this.activeParticles) {
      particle.draw(ctx);
    }
  }
  
  clear() {
    this.activeParticles = [];
    this.particles = [];
    this.initialize();
  }
  
  getActiveCount() {
    return this.activeParticles.length;
  }
  
  getPoolSize() {
    return this.particles.length;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ParticlePool;
}
