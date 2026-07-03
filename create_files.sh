#!/bin/bash

# Create documentation files
cat > CONTRIBUTING.md << 'DOC1'
# Contributing to Blade Dash Remix

Thank you for your interest in contributing! We welcome contributions from everyone.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) before contributing.

## How to Contribute

### Reporting Bugs
- Clear and descriptive title
- Exact steps to reproduce
- Expected vs actual behavior
- Screenshots/GIFs if applicable

### Suggesting Enhancements
- Clear and descriptive title
- Step-by-step description
- Use cases and benefits
- Possible implementation approaches

### Pull Requests
- Follow the code style guidelines
- Include appropriate tests
- Update documentation
- Add descriptive commit messages

## Development Setup

```bash
git clone https://github.com/xenon231tech/xenon-blade-dash-remix.git
cd xenon-blade-dash-remix
npm install
npm run dev
```

## Code Style

- Use ESLint for code quality
- Use Prettier for formatting
- Write meaningful variable names
- Add comments for complex logic

---

**Last Updated**: 2026-06-06
DOC1

cat > CODE_OF_CONDUCT.md << 'DOC2'
# Code of Conduct

## Our Commitment

We are committed to providing a welcoming and inspiring community for all.

## Our Standards

Examples of behavior that contributes to creating a positive environment include:
- Using welcoming and inclusive language
- Being respectful of differing opinions
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior include:
- The use of sexualized language or imagery
- Trolling, insulting/derogatory comments
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

## Enforcement

Project maintainers are responsible for clarifying the standards of acceptable behavior.

---

**Last Updated**: 2026-06-06
DOC2

cat > SECURITY.md << 'DOC3'
# Security Policy

## Reporting Security Issues

If you discover a security vulnerability, please email security@xenon-blade-dash.com

## Security Guidelines

### Best Practices

1. **Keep Dependencies Updated**
   - Regularly update npm packages
   - Check for known vulnerabilities
   - Use `npm audit` to identify issues

2. **Code Review**
   - All code changes require review
   - Focus on security during review
   - Document security decisions

3. **Testing**
   - Implement security testing
   - Test error handling
   - Validate input/output

4. **Deployment**
   - Use HTTPS only
   - Enable security headers
   - Implement rate limiting
   - Use secure cookies

---

**Last Updated**: 2026-06-06
DOC3

cat > DEVELOPMENT.md << 'DOC4'
# Development Guide

## Getting Started

### Prerequisites
- Node.js 14+
- npm or yarn
- Git
- Code editor (VS Code recommended)

### Setup

```bash
git clone https://github.com/xenon231tech/xenon-blade-dash-remix.git
cd xenon-blade-dash-remix
npm install
npm run dev
```

## Project Structure

```
xenon-blade-dash-remix/
├── src/
│   ├── utils/
│   ├── entities/
│   ├── systems/
│   └── index.js
├── docs/
├── examples/
├── config/
├── tests/
├── index.html
└── package.json
```

## Development Workflow

### Creating a New Enemy Type

1. Create enemy definition in `src/entities/enemies.js`
2. Add sprite asset reference
3. Define behavior and stats
4. Test in game
5. Document in guides

---

**Last Updated**: 2026-06-06
DOC4

cat > ARCHITECTURE.md << 'DOC5'
# Architecture Overview

## Game Engine

Blade Dash Remix uses a custom Canvas 2D-based game engine.

### Core Systems

1. **Game Loop** - 60 FPS target, delta time-based updates
2. **Entity System** - Player, enemies, particles, projectiles
3. **Physics System** - Collision detection, movement, dash mechanics
4. **Audio System** - Sound effects, background music, volume control
5. **UI System** - HUD rendering, menus, upgrade selection

### Data Flow

```
Input Events → Game State Update → Physics Simulation → 
Collision Detection → Rendering Pipeline → Canvas Output
```

---

**Last Updated**: 2026-06-06
DOC5

cat > API.md << 'DOC6'
# Game API Documentation

## Game Object

### Properties
- `game.player` - Player entity
- `game.enemies` - Array of enemies
- `game.particles` - Array of particles
- `game.score` - Current score
- `game.highScore` - High score
- `game.wave` - Current wave number
- `game.phase` - Game phase

### Methods
- `game.start()` - Start game
- `game.pause()` - Pause game
- `game.resume()` - Resume game
- `game.gameOver()` - End game
- `game.nextWave()` - Progress to next wave

---

**Last Updated**: 2026-06-06
DOC6

cat > ROADMAP.md << 'DOC7'
# Roadmap 2026-2028

## Phase 1: Foundation (2026)

### Q2 2026
- [x] Core game mechanics
- [x] Basic enemy types
- [x] Upgrade system
- [x] Mobile controls

### Q3 2026
- [ ] Leaderboard system
- [ ] Achievement system
- [ ] Replay system
- [ ] Settings menu

### Q4 2026
- [ ] Cosmetic skins
- [ ] Particle effects
- [ ] Visual polish
- [ ] Performance optimization

## Phase 2: Expansion (2027)

- [ ] Multiplayer mode
- [ ] New enemy types
- [ ] Story mode
- [ ] Advanced graphics

## Phase 3: Evolution (2028)

- [ ] AI improvements
- [ ] Cross-platform support
- [ ] Advanced monetization
- [ ] Esports support

---

**Last Updated**: 2026-06-06
DOC7

cat > PERFORMANCE.md << 'DOC8'
# Performance Guide

## Optimization Techniques

### Rendering Optimization
- Use requestAnimationFrame
- Batch draw calls
- Minimize state changes
- Use offscreen canvas

### Memory Management
- Object pooling
- Reuse particle objects
- Minimize allocations
- Monitor memory usage

### Mobile Optimization
- Reduce particle count
- Lower resolution on low-end devices
- Optimize touch handling
- Minimize CPU usage

## Benchmarks

### Desktop Performance
- 60 FPS on modern browsers
- <16ms per frame
- <100MB memory usage

### Mobile Performance
- 30-60 FPS on modern devices
- <33ms per frame
- <50MB memory usage

---

**Last Updated**: 2026-06-06
DOC8

cat > TESTING.md << 'DOC9'
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
DOC9

cat > FAQ.md << 'DOC10'
# Frequently Asked Questions

## General Questions

### What is Blade Dash Remix?
A fast-paced action game where you slash enemies and survive waves.

### Is it free to play?
Yes, completely free!

### What devices can I play on?
Any device with a modern web browser.

### How do I get started?
Visit the GitHub repo and open index.html in your browser.

## Gameplay Questions

### How do I increase my score?
- Defeat enemies
- Build combos
- Collect power-ups
- Unlock upgrades

### What's the best strategy?
- Keep moving
- Build combos
- Choose upgrades wisely
- Manage your health

---

**Last Updated**: 2026-06-06
DOC10

cat > TROUBLESHOOTING.md << 'DOC11'
# Troubleshooting Guide

## Common Issues

### Game not loading
1. Clear browser cache
2. Try a different browser
3. Check internet connection
4. Disable browser extensions

### Game running slowly
1. Close other tabs
2. Disable browser extensions
3. Lower graphics quality
4. Try a different browser

### Controls not responding
1. Click on the game canvas
2. Check if browser has focus
3. Try different input method
4. Restart browser

---

**Last Updated**: 2026-06-06
DOC11

cat > DEPLOYMENT.md << 'DOC12'
# Deployment Guide

## Vercel Deployment

1. Connect Repository
2. Configure Settings (Framework: Static)
3. Deploy with `vercel --prod`

## GitHub Pages

1. Go to repository settings
2. Enable GitHub Pages
3. Select main branch
4. Deploy

## Self-Hosted

1. Copy files to web server
2. Serve index.html
3. Enable HTTPS
4. Configure CORS if needed

---

**Last Updated**: 2026-06-06
DOC12

cat > VERSIONING.md << 'DOC13'
# Versioning Strategy

## Semantic Versioning

We follow Semantic Versioning (SemVer):
- MAJOR: Breaking changes
- MINOR: New features
- PATCH: Bug fixes

Format: MAJOR.MINOR.PATCH

## Release Process

1. Update version in package.json
2. Update CHANGELOG.md
3. Create git tag
4. Push to GitHub
5. Create GitHub release

## Version History

- 1.0.0 (2026-06-06) - Initial release

---

**Last Updated**: 2026-06-06
DOC13

cat > SUPPORT.md << 'DOC14'
# Support

## Getting Help

### Documentation
- [README.md](README.md) - Overview
- [DEVELOPMENT.md](DEVELOPMENT.md) - Development guide
- [API.md](API.md) - API documentation
- [FAQ.md](FAQ.md) - Frequently asked questions

### Community
- [GitHub Discussions](https://github.com/xenon231tech/xenon-blade-dash-remix/discussions)
- [GitHub Issues](https://github.com/xenon231tech/xenon-blade-dash-remix/issues)

### Contact
- Email: support@xenon-blade-dash.com
- Discord: [Join our server](https://discord.gg/xenon)

## Response Times

- Bug reports: 24-48 hours
- Feature requests: 1-2 weeks
- General questions: 24 hours

---

**Last Updated**: 2026-06-06
DOC14

echo "✅ Created 14 documentation files"
