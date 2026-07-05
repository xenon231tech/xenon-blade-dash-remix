// Entity manager for managing all game entities
class EntityManager {
  constructor() {
    this.entities = [];
    this.entityMap = new Map();
    this.nextId = 0;
  }
  
  addEntity(entity) {
    const id = this.nextId++;
    entity.id = id;
    this.entities.push(entity);
    this.entityMap.set(id, entity);
    return id;
  }
  
  removeEntity(id) {
    const entity = this.entityMap.get(id);
    if (!entity) return false;
    
    const index = this.entities.indexOf(entity);
    if (index > -1) {
      this.entities.splice(index, 1);
    }
    this.entityMap.delete(id);
    return true;
  }
  
  getEntity(id) {
    return this.entityMap.get(id);
  }
  
  getEntitiesByType(type) {
    return this.entities.filter(e => e.type === type);
  }
  
  update(dt) {
    for (const entity of this.entities) {
      if (entity.update) {
        entity.update(dt);
      }
    }
  }
  
  render(ctx) {
    // Sort by depth for proper rendering order
    this.entities.sort((a, b) => (a.depth || 0) - (b.depth || 0));
    
    for (const entity of this.entities) {
      if (entity.render) {
        entity.render(ctx);
      }
    }
  }
  
  clear() {
    this.entities = [];
    this.entityMap.clear();
    this.nextId = 0;
  }
  
  getCount() {
    return this.entities.length;
  }
  
  getAll() {
    return [...this.entities];
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = EntityManager;
}
