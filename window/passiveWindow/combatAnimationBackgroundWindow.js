function CombatAnimationBackgroundWindow(pu, eu) {
  this.halfWidth = innerWidth / 2;
  this.pu = pu;
  this.eu = eu;
  this.playerHP = pu.current_hp;
  this.enemyHP = eu.current_hp;
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
  this.renderNameWindow('rgba(0, 0, 142, 1)', this.pu.name, 250, 325);
  this.renderNameWindow('rgba(255, 0, 0, 1)', this.eu.name, -250 - 150, -325);
}

CombatAnimationBackgroundWindow.prototype.renderNameWindow = function(color,
  unitName, xDisplacement, nameXCoord) {
  c.fillStyle = color;
  c.fillRect(this.halfWidth + xDisplacement, 100, 150, 50);
  renderTextWithFont("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    unitName, this.halfWidth + nameXCoord, 130);
}

CombatAnimationBackgroundWindow.prototype.renderStatWindows = function() {
  this.renderStatWindow('rgba(0, 0, 142, 1)', 350, this.pu, this.eu);
  this.renderStatWindow('rgba(255, 0, 0, 1)', -350 - 100, this.eu, this.pu);
}

CombatAnimationBackgroundWindow.prototype.renderStatWindow = function(color, deltaX, attacker, defender) {
  c.fillStyle = color;
  c.fillRect(this.halfWidth + deltaX, 450, 100, 50);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `HIT`, this.halfWidth + deltaX, 465);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `DMG`, this.halfWidth + deltaX, 480);
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `CRT`, this.halfWidth + deltaX, 495);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.accuracy(defender)}`, this.halfWidth + deltaX + 100, 465);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.damage(defender)}`, this.halfWidth + deltaX + 100, 480);
  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.criticalChance(defender)}`, this.halfWidth + deltaX + 100, 495);
}

CombatAnimationBackgroundWindow.prototype.renderCentralDelineator = function() {
  c.fillStyle = 'rgba(0, 0, 0, 1)';
  c.fillRect(this.halfWidth - 1, 460, 2, 130);
}

CombatAnimationBackgroundWindow.prototype.renderWeaponWindows = function() {
  c.fillStyle = 'rgba(255, 248, 220, 1)';
  c.fillRect(this.halfWidth + 1, 460, 400 - 1, 130);

  c.fillStyle = 'rgba(255, 248, 220, 1)';
  c.fillRect(this.halfWidth - 300 - 100, 460, 400 - 1, 130);
}

CombatAnimationBackgroundWindow.prototype.renderWeaponNames = function() {
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
    `${this.pu.equippedWeapon.stats['name']}`, this.halfWidth + 50, 475);

  renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.eu.equippedWeapon.stats['name']}`, this.halfWidth - 50, 475);
}

CombatAnimationBackgroundWindow.prototype.renderHPWindows = function() {
  renderTextWithFont("15px Arial", 'left', 'rgba(255, 255, 255 1)',
   `${this.playerHP}`, this.halfWidth + 50, 550);

   renderTextWithFont("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.enemyHP}`, this.halfWidth - 50, 550);
}

CombatAnimationBackgroundWindow.prototype.modifyHP = function(defender, newHP) {
  if (defender === this.pu) {
    this.playerHP = newHP;
  } else {
    this.enemyHP = newHP;
  }
}
