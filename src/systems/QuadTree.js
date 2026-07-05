// Quad tree for spatial partitioning and efficient collision detection
class QuadTree {
  constructor(x, y, width, height, maxObjects = 10, maxLevels = 5, level = 0) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.maxObjects = maxObjects;
    this.maxLevels = maxLevels;
    this.level = level;
    this.objects = [];
    this.nodes = [];
  }
  
  split() {
    const nextLevel = this.level + 1;
    const subWidth = this.width / 2;
    const subHeight = this.height / 2;
    const x = this.x;
    const y = this.y;
    
    // Top-left
    this.nodes[0] = new QuadTree(x, y, subWidth, subHeight, this.maxObjects, this.maxLevels, nextLevel);
    // Top-right
    this.nodes[1] = new QuadTree(x + subWidth, y, subWidth, subHeight, this.maxObjects, this.maxLevels, nextLevel);
    // Bottom-left
    this.nodes[2] = new QuadTree(x, y + subHeight, subWidth, subHeight, this.maxObjects, this.maxLevels, nextLevel);
    // Bottom-right
    this.nodes[3] = new QuadTree(x + subWidth, y + subHeight, subWidth, subHeight, this.maxObjects, this.maxLevels, nextLevel);
  }
  
  getIndex(obj) {
    const verticalMidpoint = this.x + this.width / 2;
    const horizontalMidpoint = this.y + this.height / 2;
    
    const topQuadrant = obj.y < horizontalMidpoint;
    const bottomQuadrant = obj.y + obj.height > horizontalMidpoint;
    const leftQuadrant = obj.x < verticalMidpoint;
    const rightQuadrant = obj.x + obj.width > verticalMidpoint;
    
    if (topQuadrant && leftQuadrant) return 0;
    if (topQuadrant && rightQuadrant) return 1;
    if (bottomQuadrant && leftQuadrant) return 2;
    if (bottomQuadrant && rightQuadrant) return 3;
    
    return -1;
  }
  
  insert(obj) {
    if (this.nodes.length > 0) {
      const index = this.getIndex(obj);
      if (index !== -1) {
        this.nodes[index].insert(obj);
        return;
      }
    }
    
    this.objects.push(obj);
    
    if (this.objects.length > this.maxObjects && this.level < this.maxLevels) {
      if (this.nodes.length === 0) {
        this.split();
      }
      
      for (let i = this.objects.length - 1; i >= 0; i--) {
        const index = this.getIndex(this.objects[i]);
        if (index !== -1) {
          this.nodes[index].insert(this.objects[i]);
          this.objects.splice(i, 1);
        }
      }
    }
  }
  
  retrieve(obj) {
    let returnObjects = [];
    
    if (this.nodes.length > 0) {
      const index = this.getIndex(obj);
      if (index !== -1) {
        returnObjects = returnObjects.concat(this.nodes[index].retrieve(obj));
      } else {
        for (let i = 0; i < this.nodes.length; i++) {
          returnObjects = returnObjects.concat(this.nodes[i].retrieve(obj));
        }
      }
    }
    
    return returnObjects.concat(this.objects);
  }
  
  clear() {
    this.objects = [];
    for (let i = 0; i < this.nodes.length; i++) {
      this.nodes[i].clear();
    }
    this.nodes = [];
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = QuadTree;
}
