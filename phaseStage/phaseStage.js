import Sprite from '../animations/sprite';
import { c } from '../createContext';

function PhaseStage() {
  this.stage = 'select unit';
  this.playerPhaseSprite = new Sprite(
    c, 240, 160, 240*0.4, 160*0.4, 'phaseStage/FE_player_phase_sprite.png', 3, 1
  );

  this.enemyPhaseSprite = new Sprite(
    c, 240, 160, 240*0.4, 160*0.4, 'phaseStage/FE_enemy_phase_sprite.png', 3, 1
  );
}

PhaseStage.prototype.nextStage = function(newStage) {
  this.stage = newStage;
}

PhaseStage.prototype.render = function(sF, cursorPos) {
  const midX = (15 - ((240*0.4)/52))/2;
  if(this.stage === 'Game Finished') return null;
  if (this.stage === 'Enemy Phase') {
    this.enemyPhaseSprite.render(7, 0.95, 45);
  } else if(true) {
    const yCoord = cursorPos[1] <= 3 ? 10.4 : 0.95
    this.playerPhaseSprite.render(midX, yCoord, 45);
  }
}

export default PhaseStage;
