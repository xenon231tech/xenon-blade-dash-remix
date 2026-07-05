// Resource loader for managing game assets
class ResourceLoader {
  constructor() {
    this.resources = new Map();
    this.loadingQueue = [];
    this.isLoading = false;
  }
  
  loadImage(name, url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.resources.set(name, img);
        resolve(img);
      };
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  }
  
  loadAudio(name, url) {
    return new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.oncanplaythrough = () => {
        this.resources.set(name, audio);
        resolve(audio);
      };
      audio.onerror = () => reject(new Error(`Failed to load audio: ${url}`));
      audio.src = url;
    });
  }
  
  loadJSON(name, url) {
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        this.resources.set(name, data);
        return data;
      })
      .catch(error => {
        throw new Error(`Failed to load JSON: ${url}`);
      });
  }
  
  getResource(name) {
    return this.resources.get(name);
  }
  
  hasResource(name) {
    return this.resources.has(name);
  }
  
  async loadBatch(resources) {
    const promises = [];
    
    for (const [name, { type, url }] of Object.entries(resources)) {
      let promise;
      
      switch (type) {
        case 'image':
          promise = this.loadImage(name, url);
          break;
        case 'audio':
          promise = this.loadAudio(name, url);
          break;
        case 'json':
          promise = this.loadJSON(name, url);
          break;
        default:
          continue;
      }
      
      promises.push(promise);
    }
    
    return Promise.all(promises);
  }
  
  clear() {
    this.resources.clear();
  }
  
  getResourceCount() {
    return this.resources.size;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ResourceLoader;
}
