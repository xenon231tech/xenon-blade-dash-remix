// Wave tests
describe('Wave', () => {
  let waveManager;
  
  beforeEach(() => {
    waveManager = new WaveManager();
  });
  
  test('initializes with wave 1', () => {
    expect(waveManager.currentWave).toBe(1);
  });
  
  test('spawns enemies on wave start', () => {
    waveManager.startWave(1);
    expect(waveManager.enemies.length).toBeGreaterThan(0);
  });
  
  test('increases difficulty with wave number', () => {
    waveManager.startWave(1);
    const wave1Enemies = waveManager.enemies.length;
    
    waveManager.startWave(5);
    const wave5Enemies = waveManager.enemies.length;
    
    expect(wave5Enemies).toBeGreaterThanOrEqual(wave1Enemies);
  });
  
  test('completes wave when all enemies are defeated', () => {
    waveManager.startWave(1);
    waveManager.enemies = [];
    
    const completed = waveManager.completeWave();
    expect(completed).toBe(true);
  });
  
  test('progresses to next wave', () => {
    const currentWave = waveManager.currentWave;
    waveManager.nextWave();
    expect(waveManager.currentWave).toBe(currentWave + 1);
  });
});
