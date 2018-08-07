import PassiveWindow from './passiveWindow';
import { c } from '../../createContext';
import { renderTextWithFont } from '../../miscellaneousFunctions/MiscellaneousFunctions';
import CombatPUNameWindow from '../../animations/preloadedAssetSprite/combatPUNameWindow';
import CombatEUNameWindow from '../../animations/preloadedAssetSprite/combatEUNameWindow';

function CombatAnimationBackgroundWindow(pu, eu) {
  const sF = 45;
  this.sF = sF;
  this.x = 5*sF;
  this.y = 0*sF;
  this.height = 15*sF;
  this.width = 10*sF;

  // this.halfWidth = innerWidth / 2;
  this.halfWidth = (this.x + this.width) / 2;
  this.pu = pu;
  this.eu = eu;
  this.playerHP = pu.current_hp;
  this.enemyHP = eu.current_hp;

  this.puNameWindowSprite = new CombatPUNameWindow();
  this.euNameWindowSprite = new CombatEUNameWindow();
}

CombatAnimationBackgroundWindow.prototype = Object.create(PassiveWindow.prototype);
CombatAnimationBackgroundWindow.prototype.constructor = CombatAnimationBackgroundWindow;

CombatAnimationBackgroundWindow.prototype.render = function(sF) {
  this.renderNameWindows();
  this.renderWeaponWindows();
  this.renderStatWindows();
  this.renderCentralDelineator();
  this.renderWeaponNames();
  this.renderHPWindows();
}

CombatAnimationBackgroundWindow.prototype.renderNameWindows = function() {
  // let midX = (this.x + this.width)/2;
  this.puNameWindowSprite.render(12.8, 0.8, 45);
  this.euNameWindowSprite.render(1.2, 0.8, 45);
  this.renderNameWindow('rgba(255, 0, 0, 1)', this.eu.name, -200 - 150, -275);
  this.renderNameWindow('rgba(0, 0, 142, 1)', this.pu.name, 200, 275);
}

CombatAnimationBackgroundWindow.prototype.renderNameWindow = function(color,
  unitName, xDisplacement, nameXCoord) {
  // c.fillStyle = color;
  // c.fillRect(this.halfWidth + xDisplacement, this.y + 20, 150, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    unitName, this.halfWidth + nameXCoord, this.y + 50);
}

CombatAnimationBackgroundWindow.prototype.renderStatWindows = function() {

  this.renderStatWindow('rgba(0, 0, 142, 1)', 238, this.pu, this.eu);
  this.renderStatWindow('rgba(255, 0, 0, 1)', -238 - 100, this.eu, this.pu);
}

CombatAnimationBackgroundWindow.prototype.renderStatWindow = function(color, deltaX, attacker, defender) {
  c.fillStyle = color;
  let y = 340;
  c.fillRect(this.halfWidth + deltaX, y, 100, 50);

  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `HIT`, this.halfWidth + deltaX, y + 15);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `DMG`, this.halfWidth + deltaX, y + 30);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `CRT`, this.halfWidth + deltaX, y + 45);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.accuracy(defender)}`, this.halfWidth + deltaX + 100, y + 15);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.damage(defender)}`, this.halfWidth + deltaX + 100, y + 30);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.criticalChance(defender)}`, this.halfWidth + deltaX + 100, y + 45);
}

CombatAnimationBackgroundWindow.prototype.renderCentralDelineator = function() {
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillRect(this.halfWidth - 1, 360, 2, 90);
}

CombatAnimationBackgroundWindow.prototype.renderWeaponWindows = function() {
  c.fillStyle = 'rgba(255, 248, 220, 1)';
  c.fillRect(this.halfWidth + 1, 360, 400 - 1, 90);

  c.fillStyle = 'rgba(255, 248, 220, 1)';
  c.fillRect(this.halfWidth - 300 - 100, 360, 400 - 1, 90);
}

CombatAnimationBackgroundWindow.prototype.renderWeaponNames = function() {
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
    `${this.pu.equippedWeapon.stats['name']}`, this.halfWidth + 50, 380);

  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.eu.equippedWeapon.stats['name']}`, this.halfWidth - 50, 380);
}

CombatAnimationBackgroundWindow.prototype.renderHPWindows = function() {
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
   `${this.playerHP}`, this.halfWidth + 50, 420);

   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.enemyHP}`, this.halfWidth - 50, 420);
}

CombatAnimationBackgroundWindow.prototype.modifyHP = function(defender, newHP) {
  if (defender === this.pu) {
    this.playerHP = newHP;
  } else {
    this.enemyHP = newHP;
  }
}

export default CombatAnimationBackgroundWindow;
