// Collision benchmark
function benchmarkCollision() {
  const entities = [];
  for (let i = 0; i < 100; i++) {
    entities.push({ x: Math.random() * 1280, y: Math.random() * 720 });
  }
  
  const start = performance.now();
  for (let i = 0; i < 1000; i++) {
    detectCollisions(entities);
  }
  const end = performance.now();
  
  console.log('Collision time:', end - start, 'ms');
}
