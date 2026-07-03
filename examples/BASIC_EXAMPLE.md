# Basic Game Example

```javascript
// Initialize game
const canvas = document.getElementById('gameCanvas');
const game = new Game(canvas);

// Start game loop
game.start();

// Handle input
document.addEventListener('keydown', (e) => {
  game.handleInput(e);
});

// Listen to events
game.on('gameOver', () => {
  console.log('Game Over!');
  console.log('Final Score:', game.score);
});
```

## Customization

### Difficulty
```javascript
game.difficulty = 'hard';
```

### Audio
```javascript
game.audioEnabled = true;
game.masterVolume = 0.8;
```

### Graphics
```javascript
game.particlesEnabled = true;
game.effectsQuality = 'high';
```
