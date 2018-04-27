function CombatAnimationBackgroundWindow(halfWidth, puName, euName) {
  this.halfWidth = halfWidth;
  this.puName = puName;
  this.euName = euName;
}

CombatAnimationBackgroundWindow.prototype = Object.create(PassiveWindow.prototype);
CombatAnimationBackgroundWindow.prototype.constructor = CombatAnimationBackgroundWindow;

CombatAnimationBackgroundWindow.prototype.render = function(sF) {
  this.renderNameWindows();
  // this.renderWeaponWindows();
  // this.renderStatWindows();
  this.renderCentralDelineator();
  // this.renderWeaponNames();
  // this.renderHPWindows();
}

CombatAnimationBackgroundWindow.prototype.renderNameWindows = function() {
  this.renderNameWindow(this.halfWidth, 'rgba(0, 0, 142, 1)',
    this.puName, 250, 325);

  this.renderNameWindow(this.halfWidth, 'rgba(255, 0, 0, 1)',
    this.euName, -250 - 150, -325);
}

CombatAnimationBackgroundWindow.prototype.renderNameWindow = function(halfWidth, color,
  unitName, xDisplacement, nameXCoord) {
  c.fillStyle = color;
  c.fillRect(halfWidth + xDisplacement, 100, 150, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    unitName, halfWidth + nameXCoord, 130);
}

// CombatAnimationBackgroundWindow.prototype.renderStatWindows = function(halfWidth) {
//   this.renderStatWindow(halfWidth, 'rgba(0, 0, 142, 1)', 350, this.playerUnit, this.enemyUnit);
//   this.renderStatWindow(halfWidth, 'rgba(255, 0, 0, 1)', -350 - 100, this.enemyUnit, this.playerUnit);
// }
//
// CombatAnimationBackgroundWindow.prototype.renderStatWindow = function(halfWidth, color, deltaX, attacker, defender) {
//   c.fillStyle = color;
//   c.fillRect(halfWidth + deltaX, 450, 100, 50);
//   renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
//     `HIT`, halfWidth + deltaX, 465);
//   renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
//     `DMG`, halfWidth + deltaX, 480);
//   renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
//     `CRT`, halfWidth + deltaX, 495);
//   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
//     `${attacker.accuracy(defender)}`, halfWidth + deltaX + 100, 465);
//   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
//     `${attacker.damage(defender)}`, halfWidth + deltaX + 100, 480);
//   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
//     `${attacker.criticalChance(defender)}`, halfWidth + deltaX + 100, 495);
// }

CombatAnimationBackgroundWindow.prototype.renderCentralDelineator = function() {
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillRect(this.halfWidth - 1, 460, 2, 130);
}

// CombatAnimationBackgroundWindow.prototype.renderWeaponWindows = function(halfWidth) {
//   c.fillStyle = 'rgba(255, 248, 220, 1)';
//   c.fillRect(halfWidth + 1, 460, 400 - 1, 130);
//
//   c.fillStyle = 'rgba(255, 248, 220, 1)';
//   c.fillRect(halfWidth - 300 - 100, 460, 400 - 1, 130);
// }
//
// CombatAnimationBackgroundWindow.prototype.renderWeaponNames = function(halfWidth) {
//   renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
//    `${this.playerUnit.equippedWeapon.stats['name']}`, halfWidth + 50, 475);
//
//    renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
//     `${this.enemyUnit.equippedWeapon.stats['name']}`, halfWidth - 50, 475);
// }
//
// CombatAnimationBackgroundWindow.prototype.renderHPWindows = function(halfWidth, playerHP, enemyHP) {
//   renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
//    `${this.playerHP}`, halfWidth + 50, 550);
//
//    renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
//     `${this.enemyHP}`, halfWidth - 50, 550);
// }
