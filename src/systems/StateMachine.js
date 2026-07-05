// State machine for managing entity states
class State {
  constructor(name) {
    this.name = name;
  }
  
  onEnter() {}
  onExit() {}
  update(dt) {}
}

class StateMachine {
  constructor(initialState) {
    this.states = new Map();
    this.currentState = null;
    this.previousState = null;
    
    if (initialState) {
      this.addState(initialState.name, initialState);
      this.setState(initialState.name);
    }
  }
  
  addState(name, state) {
    this.states.set(name, state);
  }
  
  setState(name) {
    if (!this.states.has(name)) {
      console.error(`State not found: ${name}`);
      return;
    }
    
    if (this.currentState) {
      this.previousState = this.currentState;
      this.currentState.onExit();
    }
    
    this.currentState = this.states.get(name);
    this.currentState.onEnter();
  }
  
  update(dt) {
    if (this.currentState) {
      this.currentState.update(dt);
    }
  }
  
  getCurrentStateName() {
    return this.currentState ? this.currentState.name : null;
  }
  
  getPreviousStateName() {
    return this.previousState ? this.previousState.name : null;
  }
  
  hasState(name) {
    return this.states.has(name);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { State, StateMachine };
}
