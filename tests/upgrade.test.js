// Upgrade tests
describe('Upgrade', () => {
  let player;
  let upgrade;
  
  beforeEach(() => {
    player = new Player(0, 0);
  });
  
  test('applies vitality upgrade', () => {
    upgrade = new Upgrade('vitality');
    const initialMaxHealth = player.maxHealth;
    upgrade.apply(player);
    expect(player.maxHealth).toBeGreaterThan(initialMaxHealth);
  });
  
  test('applies damage upgrade', () => {
    upgrade = new Upgrade('sharpBlade');
    const initialDamage = player.damage;
    upgrade.apply(player);
    expect(player.damage).toBeGreaterThan(initialDamage);
  });
  
  test('applies speed upgrade', () => {
    upgrade = new Upgrade('swiftFeet');
    const initialSpeed = player.speed;
    upgrade.apply(player);
    expect(player.speed).toBeGreaterThan(initialSpeed);
  });
  
  test('applies range upgrade', () => {
    upgrade = new Upgrade('wideArc');
    const initialRange = player.range;
    upgrade.apply(player);
    expect(player.range).toBeGreaterThan(initialRange);
  });
  
  test('has name and description', () => {
    upgrade = new Upgrade('vitality');
    expect(upgrade.getName()).toBeDefined();
    expect(upgrade.getDescription()).toBeDefined();
  });
});
