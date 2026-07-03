// Player tests
describe('Player', () => {
  test('takes damage', () => {
    const player = new Player(0, 0);
    player.takeDamage(1);
    expect(player.health).toBe(2);
  });
  
  test('dies at 0 health', () => {
    const player = new Player(0, 0);
    player.takeDamage(3);
    expect(player.health).toBe(0);
  });
});
