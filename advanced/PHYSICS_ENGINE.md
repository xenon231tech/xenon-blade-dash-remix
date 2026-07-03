# Physics Engine Documentation

## Movement
- Velocity-based movement
- No acceleration/friction
- Instant response
- 8-directional

## Collision Detection
- Circle-based collision
- Spatial partitioning
- Quad-tree acceleration
- Early exit optimization

## Damage Calculation
- Direct damage: Slash damage × Hits
- Combo multiplier: 1 + (Combo × 0.1)
- Total damage: Base × Multiplier

## Knockback
- Direction from attacker
- Distance based on damage
- Capped at max distance
- Smooth interpolation
