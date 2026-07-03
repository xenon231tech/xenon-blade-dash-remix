# Game API Reference

## Core Classes

### Game
- `new Game(canvas)` - Initialize game
- `game.start()` - Start game loop
- `game.pause()` - Pause game
- `game.resume()` - Resume game
- `game.reset()` - Reset game state

### Player
- `player.move(dx, dy)` - Move player
- `player.slash()` - Perform slash attack
- `player.dash(direction)` - Dash in direction
- `player.takeDamage(amount)` - Take damage
- `player.heal(amount)` - Heal player

### Enemy
- `enemy.update()` - Update enemy state
- `enemy.takeDamage(amount)` - Take damage
- `enemy.attack()` - Perform attack
- `enemy.die()` - Death sequence

### Upgrade
- `upgrade.apply(player)` - Apply upgrade to player
- `upgrade.getName()` - Get upgrade name
- `upgrade.getDescription()` - Get description

## Events
- `game:start` - Game started
- `game:over` - Game over
- `wave:complete` - Wave completed
- `enemy:killed` - Enemy killed
- `player:damaged` - Player took damage
- `upgrade:selected` - Upgrade selected
