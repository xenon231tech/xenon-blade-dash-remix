// Audio system for sound effects and music
class AudioSystem {
  constructor() {
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.sounds = {};
    this.music = {};
    this.masterVolume = 0.8;
    this.sfxVolume = 0.7;
    this.musicVolume = 0.6;
  }
  
  loadSound(name, url) {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => this.audioContext.decodeAudioData(buffer))
      .then(decoded => {
        this.sounds[name] = decoded;
      })
      .catch(error => console.error(`Failed to load sound: ${name}`, error));
  }
  
  loadMusic(name, url) {
    fetch(url)
      .then(response => response.arrayBuffer())
      .then(buffer => this.audioContext.decodeAudioData(buffer))
      .then(decoded => {
        this.music[name] = decoded;
      })
      .catch(error => console.error(`Failed to load music: ${name}`, error));
  }
  
  playSound(name, volume = 1) {
    if (!this.sounds[name]) return;
    
    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = this.sounds[name];
    gainNode.gain.value = volume * this.sfxVolume * this.masterVolume;
    
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    source.start(0);
  }
  
  playMusic(name, volume = 1, loop = true) {
    if (!this.music[name]) return;
    
    const source = this.audioContext.createBufferSource();
    const gainNode = this.audioContext.createGain();
    
    source.buffer = this.music[name];
    source.loop = loop;
    gainNode.gain.value = volume * this.musicVolume * this.masterVolume;
    
    source.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    source.start(0);
    return source;
  }
  
  setMasterVolume(volume) {
    this.masterVolume = Math.max(0, Math.min(1, volume));
  }
  
  setSFXVolume(volume) {
    this.sfxVolume = Math.max(0, Math.min(1, volume));
  }
  
  setMusicVolume(volume) {
    this.musicVolume = Math.max(0, Math.min(1, volume));
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AudioSystem;
}
