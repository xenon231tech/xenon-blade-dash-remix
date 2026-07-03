# 🎮 Blade Dash Remix

[![License: AGPL-3.0](https://img.shields.io/badge/License-AGPL%203.0-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
[![GitHub Stars](https://img.shields.io/github/stars/xenon231tech/xenon-blade-dash-remix?style=social)](https://github.com/xenon231tech/xenon-blade-dash-remix)
[![GitHub Forks](https://img.shields.io/github/forks/xenon231tech/xenon-blade-dash-remix?style=social)](https://github.com/xenon231tech/xenon-blade-dash-remix)
[![GitHub Issues](https://img.shields.io/github/issues/xenon231tech/xenon-blade-dash-remix)](https://github.com/xenon231tech/xenon-blade-dash-remix/issues)

> A high-octane action game built with Remix SDK and Canvas. Slash enemies, dodge attacks, and survive increasingly difficult waves! 🎯

**[🎮 Play Now](https://remix.gg/g/9ec88076-bb14-4029-a916-3bbf52929dca?ref=6B22F63594)** | **[📖 Documentation](./docs)** | **[🐛 Report Bug](https://github.com/xenon231tech/xenon-blade-dash-remix/issues)** | **[💡 Request Feature](https://github.com/xenon231tech/xenon-blade-dash-remix/issues)**

---

## 🌟 Features

### 🎮 Core Gameplay
- **Fast-paced Combat**: Real-time slash mechanics with responsive controls
- **Wave-based Progression**: Escalating difficulty with boss encounters
- **Upgrade System**: Enhance your abilities between waves
- **Power-ups**: Collect temporary boosts (Speed, Shield, Double Score)
- **Combo System**: Build combos for multiplied rewards
- **Mobile Optimized**: Touch controls with joystick and dash buttons
- **Visual Effects**: Particle systems, screen shake, and smooth animations
- **Audio**: Dynamic sound effects and background music

### 🎯 Game Mechanics
- **8 Enemy Types**: Different behaviors and strategies
- **8 Upgrade Choices**: Customize your playstyle
- **Difficulty Scaling**: Progressive challenge
- **Score Tracking**: Compete for high scores
- **Responsive Controls**: Desktop and mobile support

### 🛠️ Technical Features
- **Pure Canvas 2D**: No external rendering libraries
- **Optimized Performance**: 60 FPS target
- **Responsive Design**: Works on all screen sizes
- **Cross-browser Compatible**: Chrome, Firefox, Safari, Edge
- **Modular Architecture**: Easy to extend and modify

---

## 🎮 Game Mechanics

### ⚔️ Combat System

#### Slash
Tap the attack button to slash nearby enemies. The slash has a limited range and cooldown.

**Mechanics:**
- Range: 100 pixels
- Cooldown: 0.3 seconds
- Damage: 1 HP (upgradeable)
- Area: 180-degree arc

#### Dash
Use the dash button to evade and reposition. Provides invulnerability during dash.

**Mechanics:**
- Distance: 150 pixels
- Cooldown: 1 second (upgradeable)
- Duration: 0.2 seconds
- Invulnerability: Full

#### Movement
Use the joystick to move around the arena. Movement is 8-directional.

**Mechanics:**
- Speed: 200 pixels/second (upgradeable)
- Acceleration: Instant
- Friction: None
- Boundary: Arena edges

### 🎁 Upgrade System

Choose from 8 different upgrades between waves:

| Upgrade | Effect | Impact |
|---------|--------|--------|
| **Vitality** | +1 Max HP | Survivability ↑ |
| **Swift Feet** | +15% Speed | Mobility ↑ |
| **Sharp Blade** | +1 Slash Damage | Damage ↑ |
| **Wide Arc** | +25% Range | Reach ↑ |
| **Treasure Hunter** | +0.5x Score | Economy ↑ |
| **Quick Dash** | -25% Dash Cooldown | Evasion ↑ |
| **Barrier** | Shield for 8 seconds | Defense ↑ |
| **Rejuvenate** | Heal 1 HP | Recovery ↑ |

### 👾 Enemy Types

| Enemy | HP | Speed | Behavior | Strategy |
|-------|----|----|----------|----------|
| **Normal** | 10 | 100 | Direct approach | Standard combat |
| **Fast** | 5 | 200 | Rapid movement | Kite and slash |
| **Tank** | 20 | 50 | Slow advance | Avoid and damage |
| **Swarm** | 3 | 150 | Group attack | Area control |
| **Shooter** | 8 | 80 | Projectile attack | Dodge and counter |
| **Teleport** | 7 | 100 | Teleport around | Predict movement |
| **Splitter** | 5 | 120 | Splits on death | Chain kills |
| **Boss** | 50 | 100 | Special attacks | Pattern recognition |

### 🌊 Wave System

**Wave Progression:**
- Waves 1-5: Introduction (Normal, Fast enemies)
- Waves 6-10: Intermediate (Tank, Swarm enemies)
- Waves 11-15: Advanced (Shooter, Teleport enemies)
- Waves 16-20: Expert (Splitter, Boss enemies)
- Wave 21+: Endless (Random mix, scaling difficulty)

**Difficulty Scaling:**
- Enemy HP increases by 10% per wave
- Enemy speed increases by 5% per wave
- Enemy count increases by 1 per 5 waves
- Boss appears every 5 waves

### 🎯 Combo System

**How Combos Work:**
1. Kill an enemy without taking damage
2. Combo counter increases by 1
3. Score multiplier = 1 + (combo × 0.1)
4. Taking damage resets combo to 0

**Rewards:**
- 10 combo: +50 bonus points
- 25 combo: +200 bonus points
- 50 combo: +1000 bonus points
- 100 combo: Achievement unlocked!

---

## 🎮 Controls

### 🖥️ Desktop

| Action | Key |
|--------|-----|
| Move Up | Arrow Up / W |
| Move Down | Arrow Down / S |
| Move Left | Arrow Left / A |
| Move Right | Arrow Right / D |
| Dash | Space |
| Attack | Left Click |

### 📱 Mobile

| Action | Control |
|--------|---------|
| Move | Joystick (left side) |
| Dash | Dash Button (right side) |
| Attack | Automatic on proximity |
| Pause | Tap pause button |

### 🎮 Gamepad

| Action | Button |
|--------|--------|
| Move | Left Stick |
| Dash | A Button |
| Attack | Right Trigger |
| Pause | Start Button |

---

## 📦 Installation

### Quick Start

1. **Clone the repository:**
```bash
git clone https://github.com/xenon231tech/xenon-blade-dash-remix.git
cd xenon-blade-dash-remix
```

2. **Open in browser:**
```bash
# Option 1: Direct file
open index.html

# Option 2: Local server (recommended)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

3. **Play online:**
Visit: https://remix.gg/g/9ec88076-bb14-4029-a916-3bbf52929dca

### Development Setup

```bash
# Install dependencies (optional)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm run test

# Run benchmarks
npm run benchmark
```

---

## 🌐 Browser Support

| Browser | Support | Version |
|---------|---------|---------|
| Chrome | ✅ Full | Latest |
| Firefox | ✅ Full | Latest |
| Safari | ✅ Full | Latest |
| Edge | ✅ Full | Latest |
| Opera | ✅ Full | Latest |
| Mobile Chrome | ✅ Full | Latest |
| Mobile Safari | ✅ Full | Latest |

**Requirements:**
- HTML5 Canvas support
- JavaScript ES6+ support
- Touch events support (mobile)

---

## ⚡ Performance

### Optimization Features
- **Efficient Rendering**: Dirty rect optimization
- **Object Pooling**: Reusable entity objects
- **Spatial Partitioning**: Quad-tree collision detection
- **Particle Batching**: Grouped particle rendering
- **Audio Caching**: Pre-loaded sound effects

### Performance Metrics
- **FPS Target**: 60 FPS
- **Frame Time**: <16ms
- **Memory Usage**: <50MB
- **Load Time**: <2 seconds
- **Responsiveness**: <50ms input latency

### Performance Tips
1. Close other browser tabs
2. Disable browser extensions
3. Use hardware acceleration
4. Update graphics drivers
5. Play on desktop for best performance

---

## 📚 Documentation

- **[Game Design Document](./GAME_DESIGN.md)** - Design philosophy and mechanics
- **[Technical Specification](./TECHNICAL_SPEC.md)** - Architecture and implementation
- **[API Documentation](./docs/api/GAME_API.md)** - Game API reference
- **[Player Guide](./docs/guides/PLAYER_GUIDE.md)** - How to play
- **[Advanced Strategies](./docs/guides/ADVANCED_STRATEGIES.md)** - Pro tips
- **[Development Guide](./DEVELOPMENT.md)** - For developers
- **[Contributing Guide](./CONTRIBUTING.md)** - How to contribute

---

## 🛠️ Project Structure

```
xenon-blade-dash-remix/
├── index.html              # Main game file
├── docs/                   # Documentation
│   ├── guides/            # Player guides
│   ├── tutorials/         # Tutorials
│   ├── api/               # API documentation
│   ├── advanced/          # Advanced topics
│   └── faq/               # FAQ
├── src/                    # Source code
│   ├── entities/          # Game entities
│   ├── systems/           # Game systems
│   ├── components/        # Reusable components
│   ├── managers/          # Manager classes
│   ├── physics/           # Physics engine
│   ├── rendering/         # Rendering system
│   ├── audio/             # Audio system
│   ├── input/             # Input handling
│   └── utils/             # Utilities
├── config/                 # Configuration files
├── tests/                  # Test files
├── benchmarks/            # Performance benchmarks
├── examples/              # Example code
├── plugins/               # Plugin system
├── scripts/               # Build scripts
├── assets/                # Game assets
└── README.md              # This file
```

---

## 🚀 Roadmap

### Version 1.0.0 (Current)
- ✅ Core gameplay mechanics
- ✅ 8 enemy types
- ✅ Upgrade system
- ✅ Mobile support
- ✅ Audio system

### Version 1.1.0 (Planned)
- 🔄 Leaderboard system
- 🔄 Achievement system
- 🔄 More visual effects
- 🔄 Sound settings
- 🔄 Game settings menu

### Version 1.2.0 (Planned)
- 🔄 Multiplayer mode
- 🔄 Custom game modes
- 🔄 Mod support
- 🔄 Replay system
- 🔄 Advanced statistics

### Version 2.0.0 (Future)
- 🔄 3D graphics
- 🔄 Story campaign
- 🔄 Boss rush mode
- 🔄 PvP battles
- 🔄 Mobile app

---

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Use ES6+ syntax
- Follow the existing code structure
- Add comments for complex logic
- Write tests for new features

---

## 📝 License

This project is licensed under the **AGPL-3.0 License** - see [LICENSE](./LICENSE) file for details.

### What this means:
- ✅ You can use this game for free
- ✅ You can modify the source code
- ✅ You must share your modifications
- ✅ You must provide source code access
- ❌ You cannot use commercially without permission
- ❌ You cannot keep modifications private

---

## 🐛 Bug Reports & Feature Requests

Found a bug? Have a feature idea? Please open an issue:
- **[Bug Report](https://github.com/xenon231tech/xenon-blade-dash-remix/issues/new?template=bug_report.md)**
- **[Feature Request](https://github.com/xenon231tech/xenon-blade-dash-remix/issues/new?template=feature_request.md)**

---

## 📞 Support

- **Documentation**: [./docs](./docs)
- **FAQ**: [./docs/faq](./docs/faq)
- **Issues**: [GitHub Issues](https://github.com/xenon231tech/xenon-blade-dash-remix/issues)
- **Discussions**: [GitHub Discussions](https://github.com/xenon231tech/xenon-blade-dash-remix/discussions)

---

## 🙏 Credits

- **Game Engine**: Canvas 2D API
- **SDK**: Remix SDK
- **Assets**: Custom generated sprites and effects
- **Inspiration**: Classic arcade games and modern roguelikes

---

## 📊 Statistics

- **Total Files**: 276
- **Lines of Code**: 5,000+
- **Documentation Pages**: 70+
- **Supported Platforms**: 5+
- **Languages**: JavaScript, HTML, CSS

---

## 🎮 Play Now!

**[🎮 PLAY BLADE DASH REMIX](https://remix.gg/g/9ec88076-bb14-4029-a916-3bbf52929dca?ref=6B22F63594)**

---

**Made with ❤️ by Xenon**

Last Updated: 2026-06-06

---

## 📱 Share This Game

- **GitHub**: https://github.com/xenon231tech/xenon-blade-dash-remix
- **Play Online**: https://remix.gg/g/9ec88076-bb14-4029-a916-3bbf52929dca
- **Documentation**: https://github.com/xenon231tech/xenon-blade-dash-remix/tree/master/docs

---

**⭐ If you enjoy this game, please star the repository! ⭐**
