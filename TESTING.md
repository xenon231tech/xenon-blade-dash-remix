# Testing Guide

## Unit Tests

```javascript
test('player moves correctly', () => {
  const player = new Player(100, 100);
  player.move(10, 0);
  expect(player.x).toBe(110);
});
```

## Integration Tests

```javascript
test('wave progresses correctly', () => {
  const game = new Game();
  game.start();
  game.completeWave();
  expect(game.wave).toBe(2);
});
```

## Browser Compatibility

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

**Last Updated**: 2026-06-06
