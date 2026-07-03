// Collision tests
describe('Collision', () => {
  test('detects circle collision', () => {
    const a = { x: 0, y: 0, radius: 10 };
    const b = { x: 15, y: 0, radius: 10 };
    expect(checkCircleCollision(a, b)).toBe(true);
  });
});
