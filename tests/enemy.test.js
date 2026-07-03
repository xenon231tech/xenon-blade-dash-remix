// Enemy tests
describe('Enemy', () => {
  let enemy;
  let player;
  
  beforeEach(() => {
    enemy = new Enemy(0, 0, 'normal');
    player = { x: 100, y: 0 };
  });
  
  test('initializes correctly', () => {
    expect(enemy.x).toBe(0);
    expect(enemy.y).toBe(0);
    expect(enemy.type).toBe('normal');
    expect(enemy.health).toBe(10);
  });
  
  test('moves toward player', () => {
    const initialX = enemy.x;
    enemy.moveTowardPlayer(player);
    expect(enemy.x).toBeGreaterThan(initialX);
  });
  
  test('takes damage', () => {
    enemy.takeDamage(5);
    expect(enemy.health).toBe(5);
  });
  
  test('dies when health reaches 0', () => {
    enemy.takeDamage(10);
    expect(enemy.health).toBeLessThanOrEqual(0);
  });
  
  test('can perform attack', () => {
    const result = enemy.attack();
    expect(result).toBeDefined();
  });
});