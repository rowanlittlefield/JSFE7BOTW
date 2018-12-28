import GeneralPlayer from  '@/player/general_player';
import PlayerUnit from '@/unit/player_unit';
import EnemyUnit from '@/unit/enemy_unit';
import TerrainWindow from '../../../window/passiveWindow/terrainWindow';
import NullWindow from '../../../window/nullWindow';
import UnitMapWindow from '../../../window/passiveWindow/unitMapWindow';
import { equivalentPositions } from '~/util';
import MovingAnimation from '../../../animations/movingAnimation';
import CombatInformationWindow from '../../../window/interactiveWindow/combatInformationWindow';
import Combat from '../../../combat/combat';
import GameFinishedWindow from '../../../window/passiveWindow/gameFinishedWindow';
import NullCursor from '../../../display/nullCursor';
import UnitPostMovePhaseWindow from '../../../window/interactiveWindow/unitPostMovePhaseWindow';

function Player(board, display, phaseStage) {
  this.board = board;
  this.display = display;
  this.cursor = this.display.cursor
  this.phaseStage = phaseStage;
  this.unitType = PlayerUnit;
  this.opposingUnitType = EnemyUnit;
  this.units = this.listOfOwnUnits();
  this.gameFinishedWindow = new GameFinishedWindow();
}

Player.prototype = Object.create(GeneralPlayer.prototype);
Player.prototype.constructor = Player;

Player.prototype.receiveControllerInput = function(button) {
  if (this.phaseStage.stage === 'select unit') {
    this.playSelectUnit(button);
  } else if (this.phaseStage.stage === 'player unit moving') {
    this.playPlayerUnitMoving(button);
  } else if (this.phaseStage.stage === 'post movement options') {
    this.playPostMovementOptions(button);
  } else if (this.phaseStage.stage === 'select unit to fight') {
    this.playSelectUnitToFight(button);
  }
}

Player.prototype.isPhaseOver = function() {
  let phaseOver = true;
  this.units.forEach(function(item, key, map) {
    if(key.actionTaken === false) {
      phaseOver = false;
    }
  });

  return phaseOver;
}

// play select unit
Player.prototype.playSelectUnit = function(button) {
  if (button === 'A') {
    this.identifyAndSelectUnit();
  } else {
    this.cursor.moveCursorPosition(button);
    this.updateUnitMapWindow();
  }
}

// helper methods
Player.prototype.identifyAndSelectUnit = function() {
  let spaceOccupant = this.board.space(this.cursorPos()).unit;
  if(spaceOccupant != null && spaceOccupant instanceof(PlayerUnit) &&
  spaceOccupant.actionTaken === false && this.selectedUnit() === null) {
    this.cursor.selectUnit(spaceOccupant);
    this.display.window = new NullWindow();
    this.phaseStage.nextStage('player unit moving');
  }
}

Player.prototype.updateUnitMapWindow = function() {
  let unit = this.board.space(this.cursorPos()).unit;
  if (unit != null && !this.display.combatAnimation) {
    this.display.window = new UnitMapWindow(unit);
  } else if (this.board.space(this.cursorPos()).terrain != null) {
    this.display.window = new TerrainWindow(this.board.space(this.cursorPos()));
  } else {
    this.display.window = new NullWindow();
  }
}

//play player unit moving
Player.prototype.playPlayerUnitMoving = function(button) {
  // const check = this.selectedUnit().validMoveSpaces()[this.cursorPos()];
  // debugger

  if (button === 'A') {
    const moveCondition = this.selectedUnit().validMoveSpaces()[this.cursorPos()];
    if (moveCondition || moveCondition === 0) {
      this.moveSelectedUnit();
    }
  } else if (button === 'B') {
    this.undoSelection();
  } else {
      this.cursor.moveCursorPosition(button);
      this.updateSelectedUnitRouteSpaces();
  }
}

Player.prototype.undoSelection = function() {
  this.deselectUnit();
  this.phaseStage.nextStage('select unit');
}

Player.prototype.moveSelectedUnit = function() {
  this.setMovingAnimation();
  this.cursor.moveSelectedUnit();
  this.phaseStage.nextStage('unit moving animation');
}

Player.prototype.setMovingAnimation = function() {
  this.selectedUnit().moving = true;
  // debugger
  const siftedRoute = this.selectedUnit().pathFinder.setupRoute(this.cursorPos());
  this.selectedUnit().movingAnimation = new MovingAnimation(
    this.selectedUnit(),
    siftedRoute,
    8,
    this.phaseStage,
    this.display);
}

Player.prototype.updateSelectedUnitRouteSpaces = function() {
  if (this.selectedUnit().pathFinder.moveThroughPositions.positions[this.cursorPos()] != undefined &&
      !equivalentPositions(this.cursorPos(), this.selectedUnit().position)) {
    this.selectedUnit().pathFinder.mazeSolver.findPath(this.cursorPos());
  } else {
    this.selectedUnit().pathFinder.mazeSolver.routePositions = [this.selectedUnit().position];
  }
}

//play post movement options

Player.prototype.playPostMovementOptions = function(button) {
  if (button === 'A') {
    this.postMovementDecision();
  } else if(button === 'B') {
    this.undoMove();
  } else {
      this.display.window.scrollCursor(button);
  }
}

Player.prototype.undoMove = function() {
  let prevPos = this.selectedUnit().prevPos;
  this.selectedUnit().move(prevPos);
  this.selectedUnit().setMoveForecast();
  this.updateSelectedUnitRouteSpaces();
  this.display.window = new NullWindow();
  this.cursor.selectUnit(this.selectedUnit());
  this.phaseStage.nextStage('player unit moving');
}

Player.prototype.postMovementDecision = function() {
  let option = this.display.window.returnOption();

  if (option === 'Wait') {
    this.endUnitTurn();
  } else if (option === 'Fight') {
    this.fightPreparations();
  } else if (option === 'Seize') {
    this.phaseStage.stage = 'Game Finished';
    this.display.window = this.gameFinishedWindow;
    // this.display.window = new GameFinishedWindow();
    this.display.cursor = new NullCursor();
  }
}

Player.prototype.endUnitTurn = function() {
  this.cursor.windowCursorPos = 0;
  this.selectedUnit().actionTaken = true;
  this.updateUnitMapWindow();
  this.postUnitActionCheck(this.selectedUnit());
  this.deselectUnit();

  this.phaseStage.nextStage('select unit');
}

Player.prototype.fightPreparations = function() {
  this.cursor.windowCursorPos = 0;
  let fightOptions = this.cursor.selectedUnit.isOppInRange();
  this.display.window = new CombatInformationWindow(this.cursor.selectedUnit, fightOptions);
  this.phaseStage.nextStage('select unit to fight');
}

// play select unit to fight

Player.prototype.playSelectUnitToFight = function(button) {
  if (button === 'A') {
    this.initiateFight();
  } else if(button === 'B') {
    this.returnToPostMovementOptions();
  } else {
    this.display.window.scrollCursor(button);
    this.display.window.updateCoordinates(this.cursor.windowCursorPos);
  }
}

Player.prototype.returnToPostMovementOptions = function() {
  this.phaseStage.nextStage('post movement options');
  this.display.window = new UnitPostMovePhaseWindow(this.selectedUnit());
}

Player.prototype.initiateFight = function() {
  let pos = this.display.window.returnOption();

  let newCombat = new Combat(this.selectedUnit(), this.board.space(pos).unit);
  this.display.setupCombatAnimation(newCombat, this.phaseStage);
  newCombat.initiateFight();
  this.phaseStage.nextStage('combat animation');
  this.cursor.selectedUnit.actionTaken = true;
  this.deselectUnit()
  this.updateUnitMapWindow();

}

//next play method followed by sub-methods


// lower level methods
Player.prototype.selectedUnit = function() {
  return this.cursor.selectedUnit;
}

Player.prototype.cursorPos = function() {
  return this.cursor.cursorPos;
}

Player.prototype.deselectUnit = function() {
  this.selectedUnit().nullifyOptions(this.display);
  this.cursor.deselectUnit();
}


export default Player;
