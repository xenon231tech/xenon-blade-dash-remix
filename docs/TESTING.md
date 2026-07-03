# Testing Guide

## Test Framework

We use Jest for unit testing.

## Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test
npm test -- game.test.js

# Watch mode
npm test -- --watch
```

## Test Structure

```javascript
describe('Feature', () => {
  beforeEach(() => {
    // Setup
  });
  
  test('should do something', () => {
    // Arrange
    const input = 5;
    
    // Act
    const result = calculate(input);
    
    // Assert
    expect(result).toBe(10);
  });
});
```

## Coverage Goals

- Statements: 80%+
- Branches: 75%+
- Functions: 80%+
- Lines: 80%+

## Integration Tests

- Test game flow
- Test enemy spawning
- Test upgrade application
- Test collision detection

## Performance Tests

- Rendering performance
- Collision detection speed
- Memory usage
- Frame rate consistency
