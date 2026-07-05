// Game constants and configuration
const GAME_CONSTANTS = {
  // Canvas
  CANVAS_WIDTH: 1280,
  CANVAS_HEIGHT: 720,
  TARGET_FPS: 60,
  
  // Player
  PLAYER_START_X: 640,
  PLAYER_START_Y: 360,
  PLAYER_RADIUS: 15,
  PLAYER_SPEED: 200,
  PLAYER_HEALTH: 3,
  PLAYER_DASH_DISTANCE: 150,
  PLAYER_DASH_COOLDOWN: 1.0,
  PLAYER_SLASH_RANGE: 100,
  PLAYER_SLASH_COOLDOWN: 0.3,
  PLAYER_SLASH_DAMAGE: 1,
  
  // Enemy
  ENEMY_RADIUS: 12,
  ENEMY_SPAWN_DISTANCE: 300,
  ENEMY_TYPES: {
    NORMAL: 'normal',
    FAST: 'fast',
    TANK: 'tank',
    SWARM: 'swarm',
    SHOOTER: 'shooter',
    TELEPORT: 'teleport',
    SPLITTER: 'splitter',
    BOSS: 'boss'
  },
  
  // Enemy stats
  ENEMY_STATS: {
    normal: { hp: 10, speed: 100, damage: 1 },
    fast: { hp: 5, speed: 200, damage: 1 },
    tank: { hp: 20, speed: 50, damage: 2 },
    swarm: { hp: 3, speed: 150, damage: 0.5 },
    shooter: { hp: 8, speed: 80, damage: 1 },
    teleport: { hp: 7, speed: 100, damage: 1 },
    splitter: { hp: 5, speed: 120, damage: 1 },
    boss: { hp: 50, speed: 100, damage: 2 }
  },
  
  // Upgrades
  UPGRADES: {
    VITALITY: 'vitality',
    SWIFT_FEET: 'swiftFeet',
    SHARP_BLADE: 'sharpBlade',
    WIDE_ARC: 'wideArc',
    TREASURE_HUNTER: 'treasureHunter',
    QUICK_DASH: 'quickDash',
    BARRIER: 'barrier',
    REJUVENATE: 'rejuvenate'
  },
  
  // Upgrade effects
  UPGRADE_EFFECTS: {
    vitality: { maxHealth: 1 },
    swiftFeet: { speed: 1.15 },
    sharpBlade: { damage: 1 },
    wideArc: { range: 1.25 },
    treasureHunter: { scoreMultiplier: 1.5 },
    quickDash: { dashCooldown: 0.75 },
    barrier: { shield: 8 },
    rejuvenate: { heal: 1 }
  },
  
  // Waves
  WAVE_DIFFICULTY_SCALING: 1.1,
  WAVE_SPEED_SCALING: 1.05,
  WAVE_INITIAL_ENEMIES: 3,
  WAVE_ENEMIES_PER_5_WAVES: 1,
  
  // Scoring
  SCORE_ENEMY_KILL: 100,
  SCORE_COMBO_MULTIPLIER: 0.1,
  SCORE_WAVE_BONUS: 500,
  
  // Combo
  COMBO_BONUS_10: 50,
  COMBO_BONUS_25: 200,
  COMBO_BONUS_50: 1000,
  COMBO_BONUS_100: 5000,
  
  // Audio
  MASTER_VOLUME: 0.8,
  SFX_VOLUME: 0.7,
  MUSIC_VOLUME: 0.6,
  
  // Graphics
  PARTICLE_LIFETIME: 1.0,
  PARTICLE_SIZE: 5,
  EFFECT_QUALITY: 'high',
  
  // Input
  KEYBOARD_ENABLED: true,
  MOUSE_ENABLED: true,
  TOUCH_ENABLED: true,
  GAMEPAD_ENABLED: true,
  
  // Difficulty
  DIFFICULTY_LEVELS: {
    EASY: 'easy',
    NORMAL: 'normal',
    HARD: 'hard',
    INSANE: 'insane'
  },
  
  // Difficulty multipliers
  DIFFICULTY_MULTIPLIERS: {
    easy: { enemyHealth: 0.7, enemyDamage: 0.7, scoreMultiplier: 0.5 },
    normal: { enemyHealth: 1.0, enemyDamage: 1.0, scoreMultiplier: 1.0 },
    hard: { enemyHealth: 1.5, enemyDamage: 1.5, scoreMultiplier: 2.0 },
    insane: { enemyHealth: 2.0, enemyDamage: 2.0, scoreMultiplier: 3.0 }
  },
  
  // Colors
  COLORS: {
    PLAYER: 'rgba(100, 200, 255, 1)',
    ENEMY: 'rgba(255, 100, 100, 1)',
    PARTICLE: 'rgba(255, 200, 100, 1)',
    BACKGROUND: 'rgba(20, 20, 30, 1)',
    UI: 'rgba(255, 255, 255, 1)'
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = GAME_CONSTANTS;
}
