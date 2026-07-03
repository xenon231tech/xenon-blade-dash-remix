# Advanced Game Example

## Custom Enemy

```javascript
class CustomEnemy extends Enemy {
  constructor(x, y) {
    super(x, y);
    this.type = 'custom';
  }
  
  update() {
    // Custom behavior
    this.moveTowardPlayer();
    this.attackIfNear();
  }
}
```

## Custom Upgrade

```javascript
class CustomUpgrade extends Upgrade {
  apply(player) {
    player.speed *= 1.5;
    player.damage += 5;
  }
}
```

## Event Handling

```javascript
game.on('enemy:killed', (enemy) => {
  console.log('Enemy killed:', enemy.type);
});

game.on('player:damaged', (damage) => {
  console.log('Damage taken:', damage);
});
```
