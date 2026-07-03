// Save system for persistent data storage
class SaveManager {
  constructor() {
    this.storageKey = 'blade-dash-save';
    this.settingsKey = 'blade-dash-settings';
    this.leaderboardKey = 'blade-dash-leaderboard';
  }
  
  saveGame(data) {
    try {
      const json = JSON.stringify(data);
      localStorage.setItem(this.storageKey, json);
      return true;
    } catch (error) {
      console.error('Failed to save game:', error);
      return false;
    }
  }
  
  loadGame() {
    try {
      const json = localStorage.getItem(this.storageKey);
      return json ? JSON.parse(json) : null;
    } catch (error) {
      console.error('Failed to load game:', error);
      return null;
    }
  }
  
  saveSettings(settings) {
    try {
      const json = JSON.stringify(settings);
      localStorage.setItem(this.settingsKey, json);
      return true;
    } catch (error) {
      console.error('Failed to save settings:', error);
      return false;
    }
  }
  
  loadSettings() {
    try {
      const json = localStorage.getItem(this.settingsKey);
      return json ? JSON.parse(json) : null;
    } catch (error) {
      console.error('Failed to load settings:', error);
      return null;
    }
  }
  
  saveLeaderboard(scores) {
    try {
      const json = JSON.stringify(scores);
      localStorage.setItem(this.leaderboardKey, json);
      return true;
    } catch (error) {
      console.error('Failed to save leaderboard:', error);
      return false;
    }
  }
  
  loadLeaderboard() {
    try {
      const json = localStorage.getItem(this.leaderboardKey);
      return json ? JSON.parse(json) : [];
    } catch (error) {
      console.error('Failed to load leaderboard:', error);
      return [];
    }
  }
  
  clearGame() {
    localStorage.removeItem(this.storageKey);
  }
  
  clearSettings() {
    localStorage.removeItem(this.settingsKey);
  }
  
  clearAll() {
    localStorage.removeItem(this.storageKey);
    localStorage.removeItem(this.settingsKey);
    localStorage.removeItem(this.leaderboardKey);
  }
  
  gameExists() {
    return localStorage.getItem(this.storageKey) !== null;
  }
  
  settingsExist() {
    return localStorage.getItem(this.settingsKey) !== null;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SaveManager;
}
