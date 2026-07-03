// Rendering benchmark
function benchmarkRendering() {
  const canvas = document.createElement('canvas');
  const game = new Game(canvas);
  
  const start = performance.now();
  for (let i = 0; i < 1000; i++) {
    game.render();
  }
  const end = performance.now();
  
  console.log('Rendering time:', end - start, 'ms');
}
