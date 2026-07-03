# Architecture Overview

## High-Level Design

### Core Components
1. **Game Engine** - Main game loop and state management
2. **Rendering System** - Canvas-based 2D rendering
3. **Physics Engine** - Collision detection and movement
4. **Entity System** - Player, enemies, projectiles
5. **Input Handler** - Keyboard, mouse, touch, gamepad
6. **Audio Manager** - Sound effects and music
7. **UI System** - HUD, menus, dialogs
8. **Save System** - LocalStorage persistence

### Data Flow
```
Input → Game Loop → Update → Physics → Render → Audio
```

## Module Dependencies

### Game Engine
- Depends on: All systems
- Provides: Game state, event system

### Rendering System
- Depends on: Entity system, UI system
- Provides: Visual output

### Physics Engine
- Depends on: Entity system
- Provides: Collision data, movement

### Entity System
- Depends on: Physics engine
- Provides: Game objects

### Input Handler
- Depends on: Game engine
- Provides: User input events

### Audio Manager
- Depends on: None
- Provides: Sound output

### UI System
- Depends on: Game engine
- Provides: User interface

### Save System
- Depends on: Game engine
- Provides: Data persistence

## Design Patterns

### Singleton Pattern
- Game instance
- Audio manager
- Input handler

### Observer Pattern
- Event system
- UI updates

### Object Pool Pattern
- Particles
- Projectiles
- Enemies

### State Pattern
- Game states (menu, playing, paused, over)
- Entity states (idle, moving, attacking)

### Strategy Pattern
- Enemy behaviors
- Upgrade effects
- Rendering modes
