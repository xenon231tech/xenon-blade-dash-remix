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
