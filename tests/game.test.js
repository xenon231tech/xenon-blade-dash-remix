// Game tests
describe('Game', () => {
  test('initializes correctly', () => {
    const game = new Game();
    expect(game.running).toBe(false);
  });
  
  test('starts game', () => {
    const game = new Game();
    game.start();
    expect(game.running).toBe(true);
  });
});
