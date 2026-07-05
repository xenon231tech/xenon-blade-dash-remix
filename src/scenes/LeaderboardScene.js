// Leaderboard scene for displaying high scores
class LeaderboardScene {
  constructor(name = 'leaderboard') {
    this.name = name;
    this.scores = [
      { rank: 1, name: 'Player1', score: 50000, wave: 25 },
      { rank: 2, name: 'Player2', score: 45000, wave: 23 },
      { rank: 3, name: 'Player3', score: 40000, wave: 21 },
      { rank: 4, name: 'Player4', score: 35000, wave: 19 },
      { rank: 5, name: 'Player5', score: 30000, wave: 17 },
      { rank: 6, name: 'Player6', score: 25000, wave: 15 },
      { rank: 7, name: 'Player7', score: 20000, wave: 13 },
      { rank: 8, name: 'Player8', score: 15000, wave: 11 },
      { rank: 9, name: 'Player9', score: 10000, wave: 9 },
      { rank: 10, name: 'Player10', score: 5000, wave: 5 }
    ];
    this.selectedScore = 0;
  }
  
  onEnter() {
    // Load leaderboard data
  }
  
  onExit() {
    // Cleanup
  }
  
  handleInput(input) {
    if (input.isKeyPressed('ArrowUp')) {
      this.selectedScore = Math.max(0, this.selectedScore - 1);
    }
    if (input.isKeyPressed('ArrowDown')) {
      this.selectedScore = Math.min(this.scores.length - 1, this.selectedScore + 1);
    }
    if (input.isKeyPressed('Escape')) {
      console.log('Back to menu');
    }
  }
  
  update(dt) {
    // Update leaderboard state
  }
  
  render(ctx) {
    // Draw background
    ctx.fillStyle = 'rgba(20, 20, 30, 1)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    
    // Draw title
    ctx.fillStyle = 'white';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Leaderboard', ctx.canvas.width / 2, 50);
    
    // Draw column headers
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'left';
    ctx.fillText('Rank', 100, 120);
    ctx.fillText('Name', 200, 120);
    ctx.fillText('Score', 400, 120);
    ctx.fillText('Wave', 600, 120);
    
    // Draw separator
    ctx.strokeStyle = 'rgba(100, 100, 100, 1)';
    ctx.beginPath();
    ctx.moveTo(50, 140);
    ctx.lineTo(ctx.canvas.width - 50, 140);
    ctx.stroke();
    
    // Draw scores
    ctx.font = '18px Arial';
    for (let i = 0; i < this.scores.length; i++) {
      const score = this.scores[i];
      const isSelected = i === this.selectedScore;
      
      ctx.fillStyle = isSelected ? 'rgba(255, 100, 100, 1)' : 'white';
      
      const y = 180 + i * 40;
      ctx.fillText(`${score.rank}`, 100, y);
      ctx.fillText(`${score.name}`, 200, y);
      ctx.fillText(`${score.score}`, 400, y);
      ctx.fillText(`${score.wave}`, 600, y);
    }
    
    // Draw instructions
    ctx.fillStyle = 'rgba(150, 150, 150, 1)';
    ctx.font = '16px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('Press ESC to go back', ctx.canvas.width / 2, ctx.canvas.height - 30);
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = LeaderboardScene;
}
