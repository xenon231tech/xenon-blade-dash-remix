// Collision detection utilities
class Collision {
  // Circle to circle collision
  static circleToCircle(circle1, circle2) {
    const dx = circle2.x - circle1.x;
    const dy = circle2.y - circle1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle1.radius + circle2.radius;
  }
  
  // Circle to rectangle collision
  static circleToRect(circle, rect) {
    const closestX = Math.max(rect.x, Math.min(circle.x, rect.x + rect.width));
    const closestY = Math.max(rect.y, Math.min(circle.y, rect.y + rect.height));
    
    const dx = circle.x - closestX;
    const dy = circle.y - closestY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    return distance < circle.radius;
  }
  
  // Rectangle to rectangle collision (AABB)
  static rectToRect(rect1, rect2) {
    return rect1.x < rect2.x + rect2.width &&
           rect1.x + rect1.width > rect2.x &&
           rect1.y < rect2.y + rect2.height &&
           rect1.y + rect1.height > rect2.y;
  }
  
  // Point to circle collision
  static pointToCircle(point, circle) {
    const dx = point.x - circle.x;
    const dy = point.y - circle.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < circle.radius;
  }
  
  // Point to rectangle collision
  static pointToRect(point, rect) {
    return point.x >= rect.x &&
           point.x <= rect.x + rect.width &&
           point.y >= rect.y &&
           point.y <= rect.y + rect.height;
  }
  
  // Line to circle collision
  static lineToCircle(line, circle) {
    const dx = line.x2 - line.x1;
    const dy = line.y2 - line.y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    
    const t = Math.max(0, Math.min(1, 
      ((circle.x - line.x1) * dx + (circle.y - line.y1) * dy) / (len * len)
    ));
    
    const closestX = line.x1 + t * dx;
    const closestY = line.y1 + t * dy;
    
    const distX = circle.x - closestX;
    const distY = circle.y - closestY;
    const distance = Math.sqrt(distX * distX + distY * distY);
    
    return distance < circle.radius;
  }
  
  // Get collision normal (for response)
  static getCollisionNormal(obj1, obj2) {
    const dx = obj2.x - obj1.x;
    const dy = obj2.y - obj1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) return { x: 1, y: 0 };
    
    return {
      x: dx / distance,
      y: dy / distance
    };
  }
  
  // Get collision depth (for separation)
  static getCollisionDepth(circle1, circle2) {
    const dx = circle2.x - circle1.x;
    const dy = circle2.y - circle1.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return circle1.radius + circle2.radius - distance;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Collision;
}
