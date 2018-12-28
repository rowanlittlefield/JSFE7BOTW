import DisplayWindow from './displayWindow';
import NullWindow from '@/game_window/null_window';
import { c } from '../createContext';
import UnitPostMovePhaseWindow from '@/game_window/unit_post_move_phase_window';
import UnitMapWindow from '@/game_window/unit_map_window';
import TerrainWindow from '@/game_window/terrain_window';
import CombatInformationWindow from '@/game_window/combat_information_window';
import GameFinishedWindow from '@/game_window/game_finished_window';
import BattlePlatformSprite from '../animations/battlePlatformSprite';
import CombatAnimation from '../animations/combatAnimation';

function GlobalDisplay(board, cursor, phaseStage, sF) {
  this.board = board;
  this.displayWindow = new DisplayWindow(sF, 5*sF, 1*sF, 15*sF, 10*sF);
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.combatAnimation = null;
  this.gameIsFinished = false;

  //Temporary fix for pre-loading assets
  this.battlePlatformSprite = new BattlePlatformSprite();
}

GlobalDisplay.prototype.setupCombatAnimation = function(newCombat, phaseStage) {
  this.combatAnimation = new CombatAnimation(
    newCombat, phaseStage, this.battlePlatformSprite
  );
}

GlobalDisplay.prototype.chapterSetup = function(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new NullWindow();
  this.setupUnitHash();
}

GlobalDisplay.prototype.render = function() {
  c.clearRect(
    this.displayWindow.x,
    this.displayWindow.y,
    this.displayWindow.width,
    this.displayWindow.height
   );
    this.renderBoard();
    this.renderObjects(this.displayWindow.sF);
    if(!this.combatAnimation) {
      this.phaseStage.render(45, this.cursor.cursorPos);
    }
    this.displayWindow.updatePosition();
}

GlobalDisplay.prototype.renderBoard = function() {
  this.board.render(this.displayWindow);
}

GlobalDisplay.prototype.setupUnitHash = function(sF) {
  this.units = this.board.setUpUnitHash();
}

GlobalDisplay.prototype.renderObjects = function(sF) {
  if (this.combatAnimation) {
    this.renderCombatAnimation();
  } else {
    if(this.phaseStage.stage === 'player unit moving') this.renderMoveSpaces(sF);
    if(this.phaseStage.stage !== 'Enemy Phase') this.renderCursor();
    this.renderUnits();
    this.renderWindows(sF);
  }
}

GlobalDisplay.prototype.renderUnits = function() {

  for(const unitIndex in this.units) {
    if (this.units[unitIndex].current_hp > 0 && !(this.cursor.selectedUnit &&
      this.cursor.selectedUnit === this.units[unitIndex])) {
      this.units[unitIndex].render(this.displayWindow);
    }
  }

  if(this.cursor.selectedUnit) this.cursor.selectedUnit.render(this.displayWindow);
}

GlobalDisplay.prototype.renderWindows = function(sF) {
  if (this.window instanceof UnitPostMovePhaseWindow ||
    this.window instanceof UnitMapWindow ||
    this.window instanceof TerrainWindow ||
    this.window instanceof CombatInformationWindow ||
    this.window instanceof GameFinishedWindow) {
    this.window.render(this.displayWindow)
  } else {
    this.window.render(sF);
  }
}

GlobalDisplay.prototype.renderMoveSpaces = function(sF) {
  this.cursor.selectedUnit.renderMoveSpaces(this.displayWindow.sF, this.displayWindow.x, this.displayWindow.y, this.displayWindow.width, this.displayWindow.height);
}

GlobalDisplay.prototype.renderCursor = function() {
  this.cursor.renderBoardCursor(this.displayWindow);
}

GlobalDisplay.prototype.renderCombatAnimation = function() {
  this.combatAnimation.render();
  if (this.combatAnimation.nonCombatFrames >= 150) {
    this.combatAnimation = null;
  }
}

export default GlobalDisplay;
