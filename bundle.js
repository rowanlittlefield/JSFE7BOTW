/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./game/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./animations/battlePlatformSprite.js":
/*!********************************************!*\
  !*** ./animations/battlePlatformSprite.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateSprite */ "./animations/coordinateSprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createContext */ "./createContext.js");



function BattlePlatformSprite() {
  _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_1__["c"],
    194,//width
    57,//height
    194*1.125,//renderWidth

    57*1.125,//renderHeight

    'animations/BattlePlatformSprite.png',//image
    1,//ticksPerFrame

    [
      [0, 0]
    ]//coordinatesList
  );

}

BattlePlatformSprite.prototype = Object.create(_coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
BattlePlatformSprite.prototype.constructor = BattlePlatformSprite;

/* harmony default export */ __webpack_exports__["default"] = (BattlePlatformSprite);


/***/ }),

/***/ "./animations/combatAnimation.js":
/*!***************************************!*\
  !*** ./animations/combatAnimation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_passiveWindow_combatAnimationBackgroundWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window/passiveWindow/combatAnimationBackgroundWindow */ "./window/passiveWindow/combatAnimationBackgroundWindow.js");
/* harmony import */ var _battlePlatformSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./battlePlatformSprite */ "./animations/battlePlatformSprite.js");



function CombatAnimation(combat, phaseStage) {
  this.combat = combat;
  this.combatQueueIndex = combat.queue.length - 1;

  this.phaseStage = phaseStage;
  this.nonCombatFrames = 0;

  this.backgroundWindow = new _window_passiveWindow_combatAnimationBackgroundWindow__WEBPACK_IMPORTED_MODULE_0__["default"](
    combat.pu, combat.eu
  );

  this.battlePlatformSprite = new _battlePlatformSprite__WEBPACK_IMPORTED_MODULE_1__["default"]();
}

CombatAnimation.prototype.render = function() {
  this.battlePlatformSprite.render(7.3, 8.4, 45);
  if(this.nonCombatFrames === 100) this.renderCombat();
  if ((this.nonCombatFrames < 100) ||
  (this.nonCombatFrames >= 101 && this.nonCombatFrames < 150)) {
    this.renderAtEase();
  }
  this.renderBackgroundElements();
  if(this.nonCombatFrames >= 150) this.endAnimation();
}

CombatAnimation.prototype.renderCombat = function() {
  if(this.combatQueueIndex >= 0) {
    this.combat.render(this.combatQueueIndex, 52);
    if (this.modifyHPCondition()) this.modifyHP();
    this.updateQueueIndex();
  } else  {
    this.nonCombatFrames += 1;
  }
}

CombatAnimation.prototype.modifyHPCondition = function() {
  let actAttackerCS = this.currentAttack().attackerCS;
  let currentFrame = [actAttackerCS.queueIndex, actAttackerCS.currentSprite().frameIndex];
  let hitAnimation = this.currentAttack().hitAnimation;
  return (currentFrame[0] === actAttackerCS.damageFrame[0] &&
    currentFrame[1] === actAttackerCS.damageFrame[1] &&
    !this.currentAttack().playedHitAnimation && hitAnimation.tickCount === 0 &&
    hitAnimation.frameIndex === 0);
}

CombatAnimation.prototype.updateQueueIndex = function() {
  let aCS = this.currentAttack().attackerCS;
  if(aCS.queueIndex === 0 && aCS.spriteQueue[0].frameIndex === 0 &&
    aCS.spriteQueue[0].tickCount === 0) {
      this.combatQueueIndex -= 1;
    }
}

CombatAnimation.prototype.renderAtEase = function() {
  this.combat.renderAtEase();
  this.nonCombatFrames += 1;
}

CombatAnimation.prototype.renderBackgroundElements = function() {
  this.backgroundWindow.render();
}

//private methods

CombatAnimation.prototype.endAnimation = function() {
  if(this.phaseStage.stage != "Enemy Phase") {
    this.phaseStage.nextStage('select unit');
  }
}

CombatAnimation.prototype.modifyHP = function() {
  this.backgroundWindow.modifyHP(this.currentAttack().defender, this.currentAttack().defenderPostAttackHP)
}

CombatAnimation.prototype.currentAttack = function() {
  return this.combat.queue[this.combatQueueIndex];
}

/* harmony default export */ __webpack_exports__["default"] = (CombatAnimation);


/***/ }),

/***/ "./animations/coordinateSprite.js":
/*!****************************************!*\
  !*** ./animations/coordinateSprite.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./animations/sprite.js");


function CoordinateSprite(context, width, height, renderWidth,
   renderHeight, image, ticksPerFrame, coordinatesList
 ) {
  _sprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    context,
    width,
    height,
    renderWidth,
    renderHeight,
    image,
    ticksPerFrame,
    coordinatesList.length//numberOfFrames
  );

  this.coordinatesList = coordinatesList;
}

CoordinateSprite.prototype = Object.create(_sprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CoordinateSprite.prototype.constructor = CoordinateSprite;

CoordinateSprite.prototype.render = function(row, col, sF) {
  let scale = sF / 18;
  let cx = (row * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  let cy = (col * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,// this.spriteSheet,
    this.coordinatesList[this.frameIndex][0],// this.frameIndex * this.width,
    this.coordinatesList[this.frameIndex][1],// 0,
    this.width,// this.width,
    this.height,// this.height,
    cx,// cx,
    cy,// cy,
    cWidth,// cWidth,
    cHeight// cHeight
  );
  this.update();
}

/* harmony default export */ __webpack_exports__["default"] = (CoordinateSprite);


/***/ }),

/***/ "./animations/movingAnimation.js":
/*!***************************************!*\
  !*** ./animations/movingAnimation.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _window_interactiveWindow_unitPostMovePhaseWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../window/interactiveWindow/unitPostMovePhaseWindow */ "./window/interactiveWindow/unitPostMovePhaseWindow.js");


function MovingAnimation(unit, route, ticksPerTranslation, phaseStage, display) {
  this.unit = unit;
  this.differentials = this.calculateRouteDifferentials(route);
  this.difIndex = 0;
  this.tick = 0;
  this.ticksPerTranslation = ticksPerTranslation;
  this.x = this.unit.position[0];
  this.y = this.unit.position[1];
  this.phaseStage = phaseStage;
  this.display = display;
}

MovingAnimation.prototype.calculateRouteDifferentials = function(route) {
  let routeDifferentials = [];

  for(let i = 1; i < route.length; i++) {
    routeDifferentials.push([route[i][0] - route[i - 1][0],
       route[i][1] - route[i - 1][1]]);
  }

  return routeDifferentials;
}

MovingAnimation.prototype.render = function(displayWindow) {
  let sF = displayWindow.sF;
  let topX = displayWindow.x/sF;
  let topY = displayWindow.y/sF;
  let highlightPos = [this.x - topX, this.y - topY];

  this.selectSprite().render(highlightPos[0], highlightPos[1], sF);
  this.update();
}

MovingAnimation.prototype.selectSprite = function() {
  let directionHash = {
    '0,-1' : this.unit.backwardWalkSprite,
    '1,0' : this.unit.rightWalkSprite,
    '0,1' : this.unit.forwardWalkSprite,
    '-1,0' : this.unit.leftWalkSprite
  };
  if(!directionHash[this.differentials[this.difIndex]]) return this.unit.forwardWalkSprite;
  return directionHash[this.differentials[this.difIndex]];
}

MovingAnimation.prototype.update = function() {
  if (this.tick >= this.ticksPerTranslation ||
    this.differentials.length === 0) {
    if (this.difIndex == this.differentials.length - 1 ||
      this.differentials.length === 0) {
        this.endAnimation();
    } else {
      this.tick = 0;
      this.difIndex += 1;
    }
  } else {
    this.tick += 1;
    this.x += (this.differentials[this.difIndex][0] *
      (1 / this.ticksPerTranslation));
    this.y += (this.differentials[this.difIndex][1] *
      (1 / this.ticksPerTranslation));
  }
}

MovingAnimation.prototype.endAnimation = function() {
  this.unit.moving = false;
  if (this.phaseStage.stage === 'unit moving animation') {
    this.phaseStage.nextStage('post movement options');
    this.display.window = new _window_interactiveWindow_unitPostMovePhaseWindow__WEBPACK_IMPORTED_MODULE_0__["default"](this.unit);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MovingAnimation);


/***/ }),

/***/ "./animations/normalCriticalDamageAnimation.js":
/*!*****************************************************!*\
  !*** ./animations/normalCriticalDamageAnimation.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateSprite */ "./animations/coordinateSprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createContext */ "./createContext.js");



function NormalCriticalDamageAnimation(defenderCoordinates) {
  _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_1__["c"],
    240,//width
    143,//height
    //238,//renderWidth
    240*1.4,//renderWidth

    //158,//renderHeight
    143*1.3,//renderHeight

    'animations/FE7HitSpriteSheetsTransTest.png',//image
    2,//ticksPerFrame
    // [10, 21]
    [
      // [10, 21],
      // [253, 1033],
      // //[10, 1197],
      // //[253, 1033],
      // [10,21],

      [253, 526], [496, 526],
      [10, 690], [253, 690], [496, 690],
      [10, 853], [253, 853], [496, 853]

    ]//coordinatesList
  );

  this.defenderCoordinates = defenderCoordinates;
}

NormalCriticalDamageAnimation.prototype = Object.create(_coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
NormalCriticalDamageAnimation.prototype.constructor = NormalCriticalDamageAnimation;

NormalCriticalDamageAnimation.prototype.render = function(sF) {
  let scale = sF / 18;
  // let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  // let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2) + (1.5*sF);
  let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight)) + (2*sF);

  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,// this.spriteSheet,
    this.coordinatesList[this.frameIndex][0],// this.frameIndex * this.width,
    this.coordinatesList[this.frameIndex][1],// 0,
    this.width,// this.width,
    this.height,// this.height,
    cx,// cx,
    cy,// cy,
    cWidth,// cWidth,
    cHeight// cHeight
  );
  this.update();
}

/* harmony default export */ __webpack_exports__["default"] = (NormalCriticalDamageAnimation);


/***/ }),

/***/ "./animations/normalDamageAnimation.js":
/*!*********************************************!*\
  !*** ./animations/normalDamageAnimation.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateSprite */ "./animations/coordinateSprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createContext */ "./createContext.js");



function NormalDamageAnimation(defenderCoordinates) {
  _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_1__["c"],
    238,//width
    158,//height
    //238,//renderWidth
    238*1.8,//renderWidth

    // 158,//renderHeight
    158*1.8,//renderHeight

    'animations/FE7HitSpriteSheetsTransTest.png',//image
    2,//ticksPerFrame
    // [10, 21]
    [
      // [10, 21],
      // [253, 1033],
      // [10, 1197],
      // [253, 1033],
      // [10,21],

     [253, 21], [496, 21],
    [10, 184], [253, 184], [496, 184],
    [10, 347], [253, 347], [496, 347]]//coordinatesList
  );

  this.defenderCoordinates = defenderCoordinates;
}

NormalDamageAnimation.prototype = Object.create(_coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
NormalDamageAnimation.prototype.constructor = NormalDamageAnimation;

NormalDamageAnimation.prototype.render = function(sF) {
  let scale = sF / 18;
  // let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  // let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2) + (1.2*sF);
  let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight)) + (sF*2.5);

  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,// this.spriteSheet,
    this.coordinatesList[this.frameIndex][0],// this.frameIndex * this.width,
    this.coordinatesList[this.frameIndex][1],// 0,
    this.width,// this.width,
    this.height,// this.height,
    cx,// cx,
    cy,// cy,
    cWidth,// cWidth,
    cHeight// cHeight
  );
  this.update();
}

/* harmony default export */ __webpack_exports__["default"] = (NormalDamageAnimation);


/***/ }),

/***/ "./animations/royCriticalHitAnimation.js":
/*!***********************************************!*\
  !*** ./animations/royCriticalHitAnimation.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coordinateSprite */ "./animations/coordinateSprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createContext */ "./createContext.js");



function RoyCriticalHitAnimation(defenderCoordinates) {
  _coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_1__["c"],
    236,//width
    156,//height
    //238,//renderWidth
    236,//renderWidth

    //158,//renderHeight
    156*1.3,//renderHeight

    'animations/royCritHitSpriteSheetProg.png',//image
    2,//ticksPerFrame
    // [10, 21]
    [
      // [10, 21],
      // [253, 1033],
      // //[10, 1197],
      // //[253, 1033],
      // [10,21],

      [7, 496], //[7, 496], [7, 496], [7, 496], [7, 496], [7, 496], [7, 496], [7, 496], [7, 496], [7, 496],
      [249, 496], //[249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], //[249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496], [249, 496],
      [492, 496], //[492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], //[492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496], [492, 496],
      [734, 496],// [734, 496], [734, 496], [734, 496], [734, 496], [734, 496], [734, 496], [734, 496], [734, 496], [734, 496],

      [8, 658], //[8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658], [8, 658],
      [250, 658], //[250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658], [250, 658],
      [492, 657], //[492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657], [492, 657],
      [734, 657], //[734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657], [734, 657],

      [8, 819], //[8, 819], [8, 819], [8, 819], [8, 819], [8, 819], [8, 819], [8, 819], [8, 819], [8, 819],
      [250, 819], //[250, 819], [250, 819], [250, 819], [250, 819], [250, 819], [250, 819], [250, 819], [250, 819], [250, 819],
      [492, 819], //[492, 819], [492, 819], [492, 819], [492, 819], [492, 819], [492, 819], [492, 819], [492, 819], [492, 819],
      [734, 819], //[734, 819], [734, 819], [734, 819], [734, 819], [734, 819], [734, 819], [734, 819], [734, 819], [734, 819],

      [8, 982], //[8, 982], [8, 982], [8, 982], [8, 982], [8, 982], [8, 982], [8, 982], [8, 982], [8, 982],
      [250, 982], //[250, 982], [250, 982], [250, 982], [250, 982], [250, 982], [250, 982], [250, 982], [250, 982], [250, 982],
      [492, 982], //[492, 982], [492, 982], [492, 982], [492, 982], [492, 982], [492, 982], [492, 982], [492, 982], [492, 982],
      [734, 982], //[734, 982], [734, 982], [734, 982], [734, 982], [734, 982], [734, 982], [734, 982], [734, 982], [734, 982]


    ]//coordinatesList
  );

  this.defenderCoordinates = defenderCoordinates;
}

RoyCriticalHitAnimation.prototype = Object.create(_coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
RoyCriticalHitAnimation.prototype.constructor = RoyCriticalHitAnimation;

RoyCriticalHitAnimation.prototype.render = function(sF) {
  let scale = sF / 18;
  // let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  // let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cx = (this.defenderCoordinates[0] * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2) + (1.2*sF);
  let cy = (this.defenderCoordinates[1] * sF) + ((scale * 18) - (scale * this.renderHeight)) + (sF*2.5);

  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,// this.spriteSheet,
    this.coordinatesList[this.frameIndex][0],// this.frameIndex * this.width,
    this.coordinatesList[this.frameIndex][1],// 0,
    this.width,// this.width,
    this.height,// this.height,
    cx,// cx,
    cy,// cy,
    cWidth,// cWidth,
    cHeight// cHeight
  );
  this.update();
}

/* harmony default export */ __webpack_exports__["default"] = (RoyCriticalHitAnimation);


/***/ }),

/***/ "./animations/sprite.js":
/*!******************************!*\
  !*** ./animations/sprite.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Sprite(context, width, height, renderWidth, renderHeight, image, ticksPerFrame, numberOfFrames) {
  this.context = context;
  this.width = width;
  this.height = height;
  this.renderWidth = renderWidth;
  this.renderHeight = renderHeight;

  let spriteSheet = new Image();
  spriteSheet.src = image;
  this.spriteSheet = spriteSheet;

  this.frameIndex = 0;
  this.tickCount = 0;
  this.ticksPerFrame = ticksPerFrame;
  this.numberOfFrames = numberOfFrames;
}

Sprite.prototype.update = function() {
  this.tickCount += 1;

  if(this.tickCount > this.ticksPerFrame) {
    this.tickCount = 0;
    if(this.frameIndex < this.numberOfFrames - 1) {
      this.frameIndex += 1;
    } else if(this.frameIndex === this.numberOfFrames - 1) {
      this.frameIndex = 0;
    }
  }
}

Sprite.prototype.render = function(row, col, sF) {
  this.renderCurrentFrame(row, col, sF);
  this.update();
}

Sprite.prototype.renderFromCoordinates = function(cx, cy, cWidth, cHeight) {
  this.context.drawImage(
    this.spriteSheet,
    this.frameIndex * this.width,
    0,
    this.width,
    this.height,
    cx,
    cy,
    cWidth,
    cHeight
  );
  this.update();
}

Sprite.prototype.boardSpriteRender = function(displayWindow) {
let sF = displayWindow.sF;
let numHorizSpaces = displayWindow.width / sF;
let numVerticalSpaces = displayWindow.height / sF;

this.context.drawImage(
  this.spriteSheet,
  0 + (16*displayWindow.x/sF),
  0 + (16*displayWindow.y/sF),
  (16)*(numHorizSpaces),
  (16)*(numVerticalSpaces),
  0,
  0,
  (sF)*(numHorizSpaces),
  (sF)*(numVerticalSpaces)
);
}

//combatAnimationMethods
Sprite.prototype.renderStationaryFrame = function(row, col, sF) {
  this.renderCurrentFrame(row, col, sF);
}

Sprite.prototype.renderFromCoordinatesSpecial = function(row, col, sF) {
  this.render(row, col, sF);
}

Sprite.prototype.renderCurrentFrame = function(row, col, sF) {
  let scale = sF / 18;
  let cx = (row * sF) + (((scale * 18) - (scale * this.renderWidth)) / 2);
  let cy = (col * sF) + ((scale * 18) - (scale * this.renderHeight));
  let cWidth = scale * this.renderWidth;
  let cHeight = scale *  this.renderHeight;
  this.context.drawImage(
    this.spriteSheet,
    this.frameIndex * this.width,
    0,
    this.width,
    this.height,
    cx,
    cy,
    cWidth,
    cHeight
  );
}

//private methods
Sprite.prototype.isFirstFrame = function() {
  return (this.frameIndex === 0 && this.tickCount === 0);
}

/* harmony default export */ __webpack_exports__["default"] = (Sprite);


/***/ }),

/***/ "./animations/spriteSequence/combatSprite.js":
/*!***************************************************!*\
  !*** ./animations/spriteSequence/combatSprite.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spriteSequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteSequence */ "./animations/spriteSequence/spriteSequence.js");


function CombatSprite(context, spriteQueue, positionAdjustment, damageFrame) {
  _spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, context, spriteQueue, positionAdjustment);

  this.damageFrame = damageFrame;
}

CombatSprite.prototype = Object.create(_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CombatSprite.prototype.constructor = CombatSprite;

CombatSprite.prototype.update = function() {
  let sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

CombatSprite.prototype.render = function(row, col, sF) {
  this.currentSprite().render(row, col, sF);
  this.update();
}

CombatSprite.prototype.onDamageFrame = function() {
  return (this.queueIndex === this.damageFrame[0] &&
  this.currentSprite().frameIndex === this.damageFrame[1]);
}

/* harmony default export */ __webpack_exports__["default"] = (CombatSprite);


/***/ }),

/***/ "./animations/spriteSequence/dodgeSprite.js":
/*!**************************************************!*\
  !*** ./animations/spriteSequence/dodgeSprite.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spriteSequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./spriteSequence */ "./animations/spriteSequence/spriteSequence.js");


function DodgeSprite(context, spriteQueue, positionAdjustment, restFrame) {
  _spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, context, spriteQueue, positionAdjustment);

  this.restFrame = restFrame;
  this.restTicks = 15;
  this.restTickCount = 0;
}

DodgeSprite.prototype = Object.create(_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
DodgeSprite.prototype.constructor = DodgeSprite;

DodgeSprite.prototype.update = function() {
  let sprite = this.currentSprite();
  if (this.queueIndex === this.restFrame[0] && sprite.frameIndex === this.restFrame[1]) {
    this.restTickCount += 1;
    if (this.restTickCount >= this.restTicks) {
      this.restTickCount = 0;
      sprite.update();
    }
  } else {
    if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
      sprite.tickCount === sprite.ticksPerFrame) {
        this.updateQueueIndexAndSprite();
      }
  }
}

DodgeSprite.prototype.renderDecision = function(x, y, dP, sF) {
  if (this.queueIndex === this.restFrame[0] &&
    this.currentSprite().frameIndex === this.restFrame[1]) {
    this.currentSprite().renderStationaryFrame(x + dP[0], y + dP[1], sF);
  } else {
    this.currentSprite().renderFromCoordinatesSpecial(x + dP[0], y + dP[1], sF);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DodgeSprite);


/***/ }),

/***/ "./animations/spriteSequence/spriteSequence.js":
/*!*****************************************************!*\
  !*** ./animations/spriteSequence/spriteSequence.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function SpriteSequence(context, spriteQueue, positionAdjustment) {
  this.context = context;
  this.queueIndex = 0;
  this.spriteQueue = spriteQueue;
  this.positionAdjustment = positionAdjustment;
}

SpriteSequence.prototype.updateQueueIndexAndSprite = function() {
  let sprite = this.currentSprite().update();
  this.queueIndex = (this.queueIndex + 1) % this.spriteQueue.length;
}

SpriteSequence.prototype.renderCurrentFrame = function(x, y, sF) {
  let dP = this.getPositionAdj();
  this.currentSprite().renderCurrentFrame(x + dP[0], y + dP[1], sF);
}

SpriteSequence.prototype.renderStationaryFrame = function(x, y, sF) {
  this.currentSprite().renderStationaryFrame(x, y, sF);
}

SpriteSequence.prototype.renderFromCoordinates = function(x, y, sF) {
  let dP = this.getPositionAdj();
  this.renderDecision(x, y, dP, sF);
  this.update();
}

SpriteSequence.prototype.renderDecision = function(x, y, dP, sF) {
  this.currentSprite().renderFromCoordinatesSpecial(x + dP[0], y + dP[1], sF);
}

//private methods

SpriteSequence.prototype.currentSprite = function() {
  return this.spriteQueue[this.queueIndex];
}

SpriteSequence.prototype.getPositionAdj = function() {
  let spriteI = this.currentSprite().frameIndex;
  if (this.positionAdjustment[[this.queueIndex,spriteI]]) {
    return this.positionAdjustment[[this.queueIndex,spriteI]];
  } else {
    return [0, 0];
  }
}

SpriteSequence.prototype.renderedAnimation = function() {
  return (this.queueIndex === 0 && this.currentSprite().isFirstFrame());
}

/* harmony default export */ __webpack_exports__["default"] = (SpriteSequence);


/***/ }),

/***/ "./board/board.js":
/*!************************!*\
  !*** ./board/board.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space */ "./board/space.js");


function Board(dimensions, sprite){
  this.dimensions = dimensions;
    const new_grid = new Array(dimensions[0]);

    for(var rows = 0; rows < dimensions[0]; rows ++){
      new_grid[rows] = new Array(dimensions[1])
      for(var cols = 0; cols < dimensions[1]; cols ++){
        new_grid[rows][cols] = new _space__WEBPACK_IMPORTED_MODULE_0__["default"]([rows, cols]);
      }
    }

  this.grid = new_grid;
  this.sprite = sprite;
}

Board.prototype.render = function(displayWindow) {
  this.sprite.boardSpriteRender(displayWindow);
}

Board.prototype.space = function(pos) {
  return this.grid[pos[0]][pos[1]];
}

Board.prototype.placeUnit = function(unit, pos) {
  unit.position = pos;
  this.grid[pos[0]][pos[1]].unit = unit;
}

Board.prototype.inBounds = function(pos) {
  return !(pos[0] < 0 || pos[0] > this.grid.length || pos[1] < 0 || pos[1] > this.grid[0].length);
}

Board.prototype.unitDeath = function(unit) {
  this.grid[unit.position[0]][unit.position[1]].unit = null;
}

Board.prototype.listOfUnits = function(type) {
  let units = new Map();

  this.boardIterator(function(row, col) {
    if (this.grid[row][col].unit instanceof(type)) {
      units.set(this.grid[row][col].unit, true);
    }
  }.bind(this));

  return units;
}

Board.prototype.listOfUnitsObject = function(type) {
  let units = {};

  this.boardIterator(function(row, col) {
    if (this.grid[row][col].unit instanceof(type)) {
      units[[row, col]] = true;
    }
  }.bind(this));

  return units;
}

Board.prototype.boardIterator = function(callBack) {
  for(let row = 0; row < this.grid.length; row++){
    for(let col = 0; col < this.grid[row].length; col++){
      callBack(row, col);
    }
  }
}

Board.prototype.setUpUnitHash = function() {
  let index = 0;
  let units = {};
    this.boardIterator(function(row, col) {
      if(this.space([row, col]).unit) {
        let unit = this.space([row, col]).unit;
        units[index] = unit;
        index += 1;
      }
    }.bind(this));

  return units;
}

Board.prototype.space = function(pos) {
  return this.grid[pos[0]][pos[1]];
}

/* harmony default export */ __webpack_exports__["default"] = (Board);


/***/ }),

/***/ "./board/nullBoard.js":
/*!****************************!*\
  !*** ./board/nullBoard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function NullBoard() {

}

NullBoard.prototype.render = function(sF) {

}

/* harmony default export */ __webpack_exports__["default"] = (NullBoard);


/***/ }),

/***/ "./board/space.js":
/*!************************!*\
  !*** ./board/space.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain_wall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain/wall */ "./board/terrain/wall.js");
/* harmony import */ var _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");



function Space(position) {
  this.position = position;
  this.unit = null;
  this.terrain = null;
  this.sprite = null;
}

Space.prototype.isTraversable = function(unit) {
  return (!(this.terrain instanceof(_terrain_wall__WEBPACK_IMPORTED_MODULE_0__["default"])) && (this.unit === null ||
    this.unit instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"]) === unit instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"])));
}

Space.prototype.isTraversableBoolean = function(isPlayerUnit) {
  return (!(this.terrain instanceof(_terrain_wall__WEBPACK_IMPORTED_MODULE_0__["default"])) && (this.unit === null ||
    this.unit instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"]) === isPlayerUnit));
}

/* harmony default export */ __webpack_exports__["default"] = (Space);


/***/ }),

/***/ "./board/terrain/forest.js":
/*!*********************************!*\
  !*** ./board/terrain/forest.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Forest(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Forest.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Forest.prototype.constructor = Forest;

Forest.prototype.terrainName = function() {
  return "Forest";
}

Forest.prototype.defenseBonus = function() {
  return 1;
}

Forest.prototype.avoidBonus = function() {
  return 20;
}

Forest.prototype.healBonus = function() {
  return 0;
}

Forest.prototype.moveCost = function() {
  return 2;
}

/* harmony default export */ __webpack_exports__["default"] = (Forest);


/***/ }),

/***/ "./board/terrain/fort.js":
/*!*******************************!*\
  !*** ./board/terrain/fort.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Fort(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Fort.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Fort.prototype.constructor = Fort;

Fort.prototype.terrainName = function() {
  return "Fort";
}

Fort.prototype.defenseBonus = function() {
  return 2;
}

Fort.prototype.avoidBonus = function() {
  return 20;
}

Fort.prototype.healBonus = function() {
  return 20;
}

Fort.prototype.moveCost = function(constructorName) {
  return 2;
}

/* harmony default export */ __webpack_exports__["default"] = (Fort);


/***/ }),

/***/ "./board/terrain/gate.js":
/*!*******************************!*\
  !*** ./board/terrain/gate.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Gate(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Gate.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Gate.prototype.constructor = Gate;

Gate.prototype.terrainName = function() {
  return "Gate";
}

Gate.prototype.defenseBonus = function() {
  return 3;
}

Gate.prototype.avoidBonus = function() {
  return 20;
}

Gate.prototype.healBonus = function() {
  return 10;
}

Gate.prototype.moveCost = function(constructorName) {
  return 1;
}

/* harmony default export */ __webpack_exports__["default"] = (Gate);


/***/ }),

/***/ "./board/terrain/mountain.js":
/*!***********************************!*\
  !*** ./board/terrain/mountain.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Mountain(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Mountain.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Mountain.prototype.constructor = Mountain;

Mountain.prototype.terrainName = function() {
  return "Mountain";
}

Mountain.prototype.defenseBonus = function() {
  return 1;
}

Mountain.prototype.avoidBonus = function() {
  return 30;
}

Mountain.prototype.healBonus = function() {
  return 0;
}

Mountain.prototype.moveCost = function(constructorName) {
  if (constructorName === 'Brigand') {
    return 3;
  } else {
    return 4;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Mountain);


/***/ }),

/***/ "./board/terrain/peak.js":
/*!*******************************!*\
  !*** ./board/terrain/peak.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Peak(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Peak.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Peak.prototype.constructor = Peak;

Peak.prototype.terrainName = function() {
  return "Peak";
}

Peak.prototype.defenseBonus = function() {
  return 2;
}

Peak.prototype.avoidBonus = function() {
  return 40;
}

Peak.prototype.healBonus = function() {
  return 0;
}

Peak.prototype.moveCost = function(constructorName) {
  if (constructorName === 'Brigand') {
    return 4;
  } else {
    return 10;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Peak);


/***/ }),

/***/ "./board/terrain/terrain.js":
/*!**********************************!*\
  !*** ./board/terrain/terrain.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Terrain(board, position, name) {
  this.board = board;
  this.position = this.setTerrain(position);
}

Terrain.prototype.setTerrain = function(pos) {
  if (this.board.grid[pos[0]][pos[1]].terrain == null) {
    this.position = pos;
    this.board.grid[pos[0]][pos[1]].terrain = this;
  } else {
    throw 'Space already occupied';
  }
}

Terrain.prototype.render = function() {
}

Terrain.prototype.terrainName = function() {
  return "Terrain";
}

Terrain.prototype.defenseBonus = function() {
  return 0;
}

Terrain.prototype.avoidBonus = function() {
  return 0;
}

Terrain.prototype.healBonus = function() {
  return 0;
}

Terrain.prototype.moveCost = function() {
  return 1;
}

/* harmony default export */ __webpack_exports__["default"] = (Terrain);


/***/ }),

/***/ "./board/terrain/thicket.js":
/*!**********************************!*\
  !*** ./board/terrain/thicket.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Thicket(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Thicket.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Thicket.prototype.constructor = Thicket;

Thicket.prototype.terrainName = function() {
  return "Thicket";
}

Thicket.prototype.defenseBonus = function() {
  return "---";
}

Thicket.prototype.avoidBonus = function() {
  return "---";
}

Thicket.prototype.healBonus = function() {
  return 0;
}

Thicket.prototype.moveCost = function() {
  return 20;
}

/* harmony default export */ __webpack_exports__["default"] = (Thicket);


/***/ }),

/***/ "./board/terrain/village.js":
/*!**********************************!*\
  !*** ./board/terrain/village.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Village(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Village.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Village.prototype.constructor = Village;

Village.prototype.terrainName = function() {
  return "Village";
}

Village.prototype.defenseBonus = function() {
  return 0;
}

Village.prototype.avoidBonus = function() {
  return 10;
}

Village.prototype.healBonus = function() {
  return 0;
}

Village.prototype.moveCost = function() {
  return 1;
}

/* harmony default export */ __webpack_exports__["default"] = (Village);


/***/ }),

/***/ "./board/terrain/wall.js":
/*!*******************************!*\
  !*** ./board/terrain/wall.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _terrain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terrain */ "./board/terrain/terrain.js");


function Wall(board, position) {
  _terrain__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, board, position);
}

Wall.prototype = Object.create(_terrain__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Wall.prototype.constructor = Wall;

Wall.prototype.terrainName = function() {
  return "Wall";
}

Wall.prototype.defenseBonus = function() {
  return "---";
}

Wall.prototype.avoidBonus = function() {
  return "---";
}

Wall.prototype.healBonus = function() {
  return 0;
}

Wall.prototype.moveCost = function() {
  return 20;
}

/* harmony default export */ __webpack_exports__["default"] = (Wall);


/***/ }),

/***/ "./campaign/campaign.js":
/*!******************************!*\
  !*** ./campaign/campaign.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chapter_campaignChapters_chapterOne_chapterOne__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chapter/campaignChapters/chapterOne/chapterOne */ "./campaign/chapter/campaignChapters/chapterOne/chapterOne.js");


function Campaign(display, frameSource) {
  this.display = display;
  this.frameSource = frameSource;
  this.chapterQueue = this.setupChapterQueue(display, frameSource);
  this.currentChapter = null;
}

Campaign.prototype.setupChapterQueue = function(display, frameSource) {
  return [new _chapter_campaignChapters_chapterOne_chapterOne__WEBPACK_IMPORTED_MODULE_0__["default"](this.display, frameSource, 52)];
}

Campaign.prototype.play = function() {
  this.currentChapter = this.chapterQueue.shift();
  this.currentChapter.play(this.display, this.frameSource);
}

Campaign.prototype.receiveControllerInput = function(button) {
  this.currentChapter.receiveInput(button);
}

/* harmony default export */ __webpack_exports__["default"] = (Campaign);


/***/ }),

/***/ "./campaign/chapter/campaignChapters/chapterOne/chapterOne.js":
/*!********************************************************************!*\
  !*** ./campaign/chapter/campaignChapters/chapterOne/chapterOne.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _board_board__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../board/board */ "./board/board.js");
/* harmony import */ var _chapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../chapter */ "./campaign/chapter/chapter.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");
/* harmony import */ var _units_playerUnits_roy_roy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../units/playerUnits/roy/roy */ "./units/playerUnits/roy/roy.js");
/* harmony import */ var _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../inventory/inventory */ "./inventory/inventory.js");
/* harmony import */ var _items_weapon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../items/weapon */ "./items/weapon.js");
/* harmony import */ var _units_playerUnits_lyn_lyn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../units/playerUnits/lyn/lyn */ "./units/playerUnits/lyn/lyn.js");
/* harmony import */ var _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../units/enemyUnits/brigand/brigand */ "./units/enemyUnits/brigand/brigand.js");
/* harmony import */ var _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../board/terrain/thicket */ "./board/terrain/thicket.js");
/* harmony import */ var _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../board/terrain/wall */ "./board/terrain/wall.js");
/* harmony import */ var _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../board/terrain/forest */ "./board/terrain/forest.js");
/* harmony import */ var _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../board/terrain/mountain */ "./board/terrain/mountain.js");
/* harmony import */ var _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../board/terrain/peak */ "./board/terrain/peak.js");
/* harmony import */ var _board_terrain_fort__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../board/terrain/fort */ "./board/terrain/fort.js");
/* harmony import */ var _board_terrain_gate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../board/terrain/gate */ "./board/terrain/gate.js");
/* harmony import */ var _board_terrain_village__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../board/terrain/village */ "./board/terrain/village.js");





















function ChapterOne(display, frameSource, sF) {

  _chapter__WEBPACK_IMPORTED_MODULE_1__["default"].call(this,
    this.setupBoard(),
    display,
    frameSource,
    'Seize Throne',
    sF
  );
}

ChapterOne.prototype = Object.create(_chapter__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
ChapterOne.prototype.constructor = ChapterOne;

ChapterOne.prototype.setupBoard = function() {
  let newBoard = new _board_board__WEBPACK_IMPORTED_MODULE_0__["default"]([21, 17], new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 336, 299, 378, 336.375, 'campaign/chapter/campaignChapters/chapterOne//Chapter18xMapSample.png', 1, 1));


  const roy = new _units_playerUnits_roy_roy__WEBPACK_IMPORTED_MODULE_4__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["SwordOfSeals"]()]));
  const lyn = new _units_playerUnits_lyn_lyn__WEBPACK_IMPORTED_MODULE_7__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["ManiKatti"]()]));
  newBoard.placeUnit(roy, [18, 3]);
  newBoard.placeUnit(lyn, [17, 3]);
  //Enemy units
  // newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [13, 1]);
  // newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [9, 6]);
  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'seekAndDestroy'), [10, 11]);
  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'seekAndDestroy'), [13, 12]);

  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'seekAndDestroy'), [18, 4]);
  // newBoard.placeUnit(new Brigand(newBoard, new Inventory([new IronAxe]), 'seekAndDestroy'), [8, 4]);

  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'TWBS'), [9, 14]);
  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'TWBS'), [15, 15]);
  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'TWBS'), [1, 15]);

  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'TWBS'), [1, 7]);
  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'TWBS'), [3, 7]);
  newBoard.placeUnit(new _units_enemyUnits_brigand_brigand__WEBPACK_IMPORTED_MODULE_8__["default"](newBoard, new _inventory_inventory__WEBPACK_IMPORTED_MODULE_5__["default"]([new _items_weapon__WEBPACK_IMPORTED_MODULE_6__["IronAxe"]]), 'idle'), [2, 6]);





//thicket
  for(let i = 0; i < 4; i++) {
    new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [i, 0]);
  }

  for(let i = 0; i < 4; i++) {
    new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [i, 1]);
  }

  for(let i = 0; i < 3; i++) {
    new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [i, 2]);
  }

  for(let i = 0; i < 2; i++) {
    new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [i, 3]);
  }

  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [11, 2]);
  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [12, 2]);
  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [12, 1]);

  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [13, 4]);
  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [13, 5]);
  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [12, 6]);

  for(let i = 6; i < 10; i++) {
    new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [i, 9]);
  }

  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [7, 8]);
  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [8, 8]);
  new _board_terrain_thicket__WEBPACK_IMPORTED_MODULE_9__["default"](newBoard, [8, 10]);






  //wall

  for(let i = 1; i < 4; i++) {
    new _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__["default"](newBoard, [i, 5]);
  }
  new _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__["default"](newBoard, [1, 6]);
  new _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__["default"](newBoard, [3, 6]);

  for(let i = 17; i < 20; i++) {
    new _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__["default"](newBoard, [i, 13]);
  }
  new _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__["default"](newBoard, [17, 14]);
  new _board_terrain_wall__WEBPACK_IMPORTED_MODULE_10__["default"](newBoard, [19, 14]);

//forest
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [17, 0]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [18, 0]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [17, 1]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [19, 1]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [20, 1]);

  for(let i = 17; i < 20; i++) {
    new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [i, 2]);
  }

  for(let i = 3; i < 6; i++) {
    new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [19, i]);
  }
  for(let i = 3; i < 13; i++) {
    new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [20, i]);
  }

  for(let i =  7; i < 11; i++) {
    new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [19, i]);
  }
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [19, 12]);

  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [16, 6]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [17, 7]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [17, 9]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [15, 9]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [15, 10]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [14, 11]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [14, 12]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [13, 13]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [16, 13]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [11, 11]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [12, 11]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [12, 10]);

  for(let i = 14; i < 21; i++) {
    new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [i, 16]);
  }
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [20, 15]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [18, 15]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [20, 14]);

  for(let i = 10; i < 13; i++) {
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [i, 16]);
  }
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [11, 14]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [9, 13]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [9, 12]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [7, 13]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [7, 15]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [8, 15]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [7, 16]);
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [6, 16]);

for(let i = 13; i < 17; i++) {
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [0, i]);
}
for(let i = 13; i < 17; i++) {
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [2, i]);
}
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [3, 15]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [4, 14]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [4, 16]);

new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [1, 13]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [1, 16]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [1, 11]);

new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [0, 9]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [0, 6]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [3, 4]);

new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [6, 3]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [7, 3]);

for(let i = 6; i < 11; i++) {
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [i, 1]);
}

for(let i = 8; i < 12; i++) {
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [i, 0]);
}

for(let i = 4; i < 7; i++) {
  new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [i, 0]);
}
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [4, 1]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [5, 2]);

new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [8, 2]);
new _board_terrain_forest__WEBPACK_IMPORTED_MODULE_11__["default"](newBoard, [9, 2]);



//mountain
  for(let i = 0; i < 4; i++) {
    new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [16, i]);
  }

  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [15, 3]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [15, 4]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [14, 4]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [14, 5]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [13, 6]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [12, 7]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [12, 8]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [11, 8]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [10, 9]);

  for(let i = 5; i < 8; i++) {
    new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [i, 10]);
  }

  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [4, 9]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [5, 9]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [5, 8]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [6, 8]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [6, 7]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [7, 7]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [8, 6]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [8, 5]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [9, 5]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [9, 4]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [10, 4]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [10, 3]);
  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [11, 3]);

  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [11, 1]);

  new _board_terrain_mountain__WEBPACK_IMPORTED_MODULE_12__["default"](newBoard, [12, 0]);

//peak
  for(let i = 0; i < 3; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [15, i])
  }
  for(let i = 0; i < 4; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [14, i])
  }
  for(let i = 0; i < 4; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [13, i])
  }
  for(let i = 3; i < 6; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [12, i])
  }
  for(let i = 4; i < 8; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [11, i])
  }
  for(let i = 5; i < 9; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [10, i])
  }
  for(let i = 6; i < 9; i++) {
    new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [9, i])
  }
  new _board_terrain_peak__WEBPACK_IMPORTED_MODULE_13__["default"](newBoard, [8, 7])
//fort
  new _board_terrain_fort__WEBPACK_IMPORTED_MODULE_14__["default"](newBoard, [17, 3])
  new _board_terrain_fort__WEBPACK_IMPORTED_MODULE_14__["default"](newBoard, [18, 3])
  new _board_terrain_fort__WEBPACK_IMPORTED_MODULE_14__["default"](newBoard, [6, 5])
  new _board_terrain_fort__WEBPACK_IMPORTED_MODULE_14__["default"](newBoard, [6, 11])
  new _board_terrain_fort__WEBPACK_IMPORTED_MODULE_14__["default"](newBoard, [6, 12])

//gate
  new _board_terrain_gate__WEBPACK_IMPORTED_MODULE_15__["default"](newBoard, [2, 6]);
//Village
  new _board_terrain_village__WEBPACK_IMPORTED_MODULE_16__["default"](newBoard, [18, 14]);

//test
  return newBoard;
}

/* harmony default export */ __webpack_exports__["default"] = (ChapterOne);


/***/ }),

/***/ "./campaign/chapter/chapter.js":
/*!*************************************!*\
  !*** ./campaign/chapter/chapter.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _phaseStage_phaseStage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../phaseStage/phaseStage */ "./phaseStage/phaseStage.js");
/* harmony import */ var _players_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../players/player */ "./players/player.js");
/* harmony import */ var _players_enemyPlayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../players/enemyPlayer */ "./players/enemyPlayer.js");
/* harmony import */ var _display_cursor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../display/cursor */ "./display/cursor.js");
/* harmony import */ var _window_nullWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../window/nullWindow */ "./window/nullWindow.js");






function Chapter(board, display, frameSource, objective, sF) {
  this.phase = 0;
  this.phaseStage = new _phaseStage_phaseStage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  this.objective = objective;
  this.numberOfTurns = 0;

  this.board = board;
  this.display = display;
  this.frameSource = frameSource;
  this.sF = sF;

  this.player = new _players_player__WEBPACK_IMPORTED_MODULE_1__["default"](this.board, this.display, this.phaseStage);
  this.enemyPlayer = new _players_enemyPlayer__WEBPACK_IMPORTED_MODULE_2__["default"](this.board, this.display, this.phaseStage, frameSource);
  this.players = {'0': this.player, '1': this.enemyPlayer};
  this.currentPlayer = this.players[0];

}

Chapter.prototype.play = function(display) {
  let cursor = new _display_cursor__WEBPACK_IMPORTED_MODULE_3__["default"](this.board, display.displayWindow)
  // display.chapterSetup(this.board, new Cursor(this.board), this.phaseStage);
  display.chapterSetup(this.board, cursor, this.phaseStage);
  this.player.cursor = this.display.cursor;

}

Chapter.prototype.gameOver = function() {
  return false;
}

Chapter.prototype.receiveInput = function(button) {
  this.currentPlayer.receiveControllerInput(button);

  this.postPlayerActionUpdate();

}

Chapter.prototype.postPlayerActionUpdate = function() {
  if(this.isPhaseOver()) {
    this.changePhase();
  }
}

Chapter.prototype.postUnitActionCheck = function() {
  if(this.currentPlayer.isPhaseOver()) {
    this.changePhase();
  }
}

Chapter.prototype.isPhaseOver = function() {
  this.player.unitDeath();
  this.enemyPlayer.unitDeath();
  return this.currentPlayer.isPhaseOver();
}

Chapter.prototype.changePhase = function() {
  this.currentPlayer.unitDeath();
  this.currentPlayer.resetUnitsAction();
  this.phase = (this.phase + 1) % 2;
  this.currentPlayer = this.players[this.phase];
  console.log(this.phase);

  //temporary hard coded enemy phase
  this.frameSource.beginAIPhase(this.currentPlayer);
  this.currentPlayer.initiatePhase();

  if(this.phase === 1) {
    this.phase = (this.phase + 1) % 2;
    this.currentPlayer = this.players[this.phase];
  }
  this.display.window = new _window_nullWindow__WEBPACK_IMPORTED_MODULE_4__["default"]();
  if(this.phase === 0) {
    this.numberOfTurns += 1;
  }

  console.log(this.phase);

}

/* harmony default export */ __webpack_exports__["default"] = (Chapter);


/***/ }),

/***/ "./combat/attack/attack.js":
/*!*********************************!*\
  !*** ./combat/attack/attack.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attack; });
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");


function Attack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  this.attacker = attacker;
  this.defender = defender;

  this.attackerCurrentHP = attackerCurrentHP;
  this.defenderInitialHP = defenderInitialHP;
  this.hit = this.rollHit();
  this.isCrit = this.rollCrit();
  this.damage = this.damageDealt();
  this.defenderPostAttackHP = this.postAttackDefHP();

  this.attackerCS = this.isCrit ? this.attacker.critAnimation : this.attacker.combatAnimation;
  this.defenderCS = this.defender.combatAnimation;
  this.defenderReceiveHitAnimation = this.defender.receiveHitAnimation;
  this.dodgeAnimation = this.defender.dodgeAnimation;

  this.playedHitAnimation = false;
  // let scaledHalfInnerWidth = (innerWidth / 2) / 52
  // let enemyWidth = 70 / 52
  // this.playerCoordinates = [scaledHalfInnerWidth + 1.5, 7];
  // this.enemyCoordinates = [scaledHalfInnerWidth - 1.5 - enemyWidth, 7];

  let sF = 45;
  let x = 5*sF;
  let y = 0*sF;
  let height = 15*sF;
  let width = 10*sF;


  let scaledHalfInnerWidth = ((x + width) / 2) / sF
  let enemyWidth = 70 / 52
  // let enemyWidth = this.defenderCS.currentSprite().renderWidth / 45;

  this.playerCoordinates = [scaledHalfInnerWidth + 1.5, 7];
  this.enemyCoordinates = [scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
}

Attack.prototype.rollHit = function() {
  return Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["randomNumberFromOneTo"])(100) <= this.attacker.accuracy(this.defender);
}

Attack.prototype.rollCrit = function() {
  if (!this.hit) return false;

  return Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["randomNumberFromOneTo"])(100) <=
  this.attacker.criticalChance(this.defender);
}

Attack.prototype.damageDealt = function() {
  return (this.hit?(this.isCrit?this.critDamage():this.atkDamage()):0);
}

Attack.prototype.postAttackDefHP = function() {
  if (this.defenderInitialHP - this.damage > 0) {
    return this.defenderInitialHP - this.damage;
  } else {
    return 0;
  }
}

//rendering methods
Attack.prototype.renderFrame = function(attackerC, defenderC, sF) {
  if (this.hitAnimationCondition()) {
    this.renderHit(defenderC);
    this.attackerCS.renderCurrentFrame(attackerC[0], 6, 45);
  } else {
    this.defenderCS.renderStationaryFrame(defenderC[0], 6, 45);
    this.attackerCS.renderFromCoordinates(attackerC[0], 6, 45);
  }
}

Attack.prototype.renderHit = function(defenderC) {
  if (this.hit) {
    // this.defenderReceiveHitAnimation.renderCurrentFrame(defenderC[0], 6, 45);
    if (!this.defenderReceiveHitAnimation.rendered) {
      this.defenderReceiveHitAnimation.render(defenderC[0], 6, 45);
    } else {
      this.defenderCS.renderStationaryFrame(defenderC[0], 6, 45);
    }
    this.renderHitAnimation();
  } else {
    this.renderDodge();
  }
  // this.hit ? this.renderHitAnimation() : this.renderDodge();
}

Attack.prototype.renderDodge = function() {
  this.defender.dodgeAnimation.renderFromCoordinates(this.playerCoordinates[0], 6, 45);

  if (this.dodgeAnimationPlayedCondition()) {
    this.playedHitAnimation = true;
  }
}

Attack.prototype.renderHitAnimation = function() {
  this.hitAnimation.render(45);
  if (this.hitAnimation.tickCount === 0 &&
    this.hitAnimation.frameIndex === 0) {
    this.playedHitAnimation = true;
    this.defenderReceiveHitAnimation.rendered = false;
  }
}

//private methods
Attack.prototype.atkDamage = function() {
  return this.attacker.damage(this.defender);
}

Attack.prototype.critDamage = function() {
  return this.atkDamage() * 3;
}

Attack.prototype.hitAnimationCondition = function() {
  return (
    this.attackerCS.onDamageFrame() && !this.playedHitAnimation
  );
}

Attack.prototype.dodgeAnimationPlayedCondition = function() {
  return this.dodgeAnimation.renderedAnimation();
}


/***/ }),

/***/ "./combat/attack/euAttack.js":
/*!***********************************!*\
  !*** ./combat/attack/euAttack.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attack */ "./combat/attack/attack.js");
/* harmony import */ var _animations_normalDamageAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/normalDamageAnimation */ "./animations/normalDamageAnimation.js");



function EUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  _attack__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );

  this.hitAnimation = new _animations_normalDamageAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]([this.playerCoordinates[0] + 1.7, this.playerCoordinates[1] + 2.8]);
}

EUAttack.prototype = Object.create(_attack__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
EUAttack.prototype.constructor = EUAttack;

EUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(enemyCoordinates, this.playerCoordinates, sF);
}

/* harmony default export */ __webpack_exports__["default"] = (EUAttack);


/***/ }),

/***/ "./combat/attack/puAttack.js":
/*!***********************************!*\
  !*** ./combat/attack/puAttack.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attack */ "./combat/attack/attack.js");
/* harmony import */ var _animations_normalDamageAnimation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/normalDamageAnimation */ "./animations/normalDamageAnimation.js");
/* harmony import */ var _animations_normalCriticalDamageAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations/normalCriticalDamageAnimation */ "./animations/normalCriticalDamageAnimation.js");
/* harmony import */ var _animations_royCriticalHitAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/royCriticalHitAnimation */ "./animations/royCriticalHitAnimation.js");
/* harmony import */ var _units_playerUnits_roy_roy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../units/playerUnits/roy/roy */ "./units/playerUnits/roy/roy.js");







function PUAttack(attacker, defender, attackerCurrentHP, defenderInitialHP) {
  _attack__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this, attacker, defender, attackerCurrentHP, defenderInitialHP
  );
  if (this.isCrit) {
    if (attacker instanceof _units_playerUnits_roy_roy__WEBPACK_IMPORTED_MODULE_4__["default"]) {
      this.hitAnimation = new _animations_royCriticalHitAnimation__WEBPACK_IMPORTED_MODULE_3__["default"]([this.enemyCoordinates[0], this.enemyCoordinates[1]]);
    } else {
      this.hitAnimation = new _animations_normalCriticalDamageAnimation__WEBPACK_IMPORTED_MODULE_2__["default"]([this.enemyCoordinates[0] + 0.7, this.enemyCoordinates[1]]);
    }
  } else {
      this.hitAnimation = new _animations_normalDamageAnimation__WEBPACK_IMPORTED_MODULE_1__["default"]([this.enemyCoordinates[0] + 1.7, this.enemyCoordinates[1] + 2.8]);
  }
}

PUAttack.prototype = Object.create(_attack__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
PUAttack.prototype.constructor = PUAttack;

PUAttack.prototype.render = function(enemyCoordinates, sF) {
  this.renderFrame(this.playerCoordinates, enemyCoordinates, sF);
}

/* harmony default export */ __webpack_exports__["default"] = (PUAttack);


/***/ }),

/***/ "./combat/combat.js":
/*!**************************!*\
  !*** ./combat/combat.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Combat; });
/* harmony import */ var _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../units/playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _attack_puAttack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attack/puAttack */ "./combat/attack/puAttack.js");
/* harmony import */ var _attack_euAttack__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attack/euAttack */ "./combat/attack/euAttack.js");




function Combat(initiator, recipient) {
  this.initiator = initiator;
  this.recipient = recipient;
  this.initiatorInRange = recipient.isInRange(initiator);
  this.queue = this.developCombatSequence();
  this.expAllotment = null;

  let check = this.initiator instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"]);
  this.pu = check ? this.initiator : this.recipient;
  this.eu = !check ? this.initiator : this.recipient;
  this.playerCS = this.pu.combatAnimation;
  this.playerCS = (check ? this.initiator : this.recipient).combatAnimation
  this.enemyCS = this.eu.combatAnimation;
  // this.enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;
  // this.scaledHalfInnerWidth = (innerWidth / 2) / 52;
  // let enemyWidth = this.enemyCS.currentSprite().renderWidth / 52;
  //
  // this.playerCoordinates = [this.scaledHalfInnerWidth + 1.5, 7];
  // this.enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
  let sF = 45;

  this.enemyWidth = this.enemyCS.currentSprite().renderWidth / 45;

  let x = 5*sF;
  let y = 0*sF;
  let height = 15*sF;
  let width = 10*sF;


  this.scaledHalfInnerWidth = ((x + width) / 2) / sF;
  let enemyWidth = this.enemyCS.currentSprite().renderWidth / sF;

  this.playerCoordinates = [this.scaledHalfInnerWidth + 1.5, 7];
  this.enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];

}

Combat.prototype.playerUnit = function() {
  this.initiator instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"]) ? this.initiator : this.recipient;
}

Combat.prototype.developCombatSequence = function() {
  let queue = [];

  queue.unshift(this.developAttack(this.initiator, this.recipient,
     this.initiator.current_hp, this.recipient.current_hp));

  if (this.attackContinue(queue) && this.initiatorInRange) {
    queue.unshift(this.developAttack(this.recipient, this.initiator,
    queue[0].defenderPostAttackHP, queue[0].attackerCurrentHP));
  }

  if (this.attackContinue(queue) && this.isRepeatAttack()) {
    if (this.initiator.isRepeatedAttack(this.recipient)) {
      queue.unshift(this.developAttack(this.initiator, this.recipient,
      queue[0].defenderPostAttackHP, queue[0].attackerCurrentHP));
    } else if(this.initiatorInRange){
      queue.unshift(this.developAttack(this.recipient, this.initiator,
      queue[0].attackerCurrentHP, queue[0].defenderPostAttackHP));
    }
  }

  return queue;
}

Combat.prototype.developAttack = function(attacker, defender, attackerHP, defenderHP) {
  if (attacker instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    return new _attack_puAttack__WEBPACK_IMPORTED_MODULE_1__["default"](attacker, defender, attackerHP, defenderHP);
  } else {
    return new _attack_euAttack__WEBPACK_IMPORTED_MODULE_2__["default"](attacker, defender, attackerHP, defenderHP);
  }
}

Combat.prototype.attackContinue = function(queue) {
  return queue[0].defenderPostAttackHP > 0;
}

Combat.prototype.isRepeatAttack = function() {
  return this.initiator.isRepeatedAttack(this.recipient) ||
  this.recipient.isRepeatedAttack(this.initiator);
}

Combat.prototype.unitDeath = function() {
  if (this.initiator.current_hp === 0) {
    this.initiator.board.unitDeath(this.initiator);
  }
  if(this.recipient.current_hp === 0) {
    this.recipient.board.unitDeath(this.recipient);
  }
}

Combat.prototype.setFinalHP = function() {
  this.queue[0].attacker.current_hp = this.queue[0].attackerCurrentHP;
  this.queue[0].defender.current_hp = this.queue[0].defenderPostAttackHP;
}

Combat.prototype.initiateFight = function() {
  this.setFinalHP();
  this.unitDeath();
}

//render methods

Combat.prototype.render = function(combatQueueIndex, sF) {
  let enemyWidth = this.enemyCS.currentSprite().renderWidth / 45;
  let enemyCoordinates = [this.scaledHalfInnerWidth - 1.5 - enemyWidth, 7];
  this.queue[combatQueueIndex].render(enemyCoordinates, sF);
}

Combat.prototype.renderAtEase = function(scaledHalfInnerWidth) {
  this.playerCS.renderStationaryFrame(this.playerCoordinates[0], 6, 45);
  this.enemyCS.renderStationaryFrame(this.enemyCoordinates[0], 6, 45);
}

// export default Combat;


/***/ }),

/***/ "./createContext.js":
/*!**************************!*\
  !*** ./createContext.js ***!
  \**************************/
/*! exports provided: c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return c; });
var canvas = document.querySelector('canvas');
// canvas.width = window.innerWidth;
// canvas.width = 29 * 52;
canvas.width = 15 * 45;
// canvas.height = window.innerHeight;
// canvas.height = 17 * 52;
canvas.height = 10 * 45;
const c = canvas.getContext('2d');


/***/ }),

/***/ "./display/cursor.js":
/*!***************************!*\
  !*** ./display/cursor.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");


function Cursor(board, displayWindow) {
  this.board = board;
  this.displayWindow = displayWindow
  this.cursorPos = [18, 3];
  this.selectedUnit = null;
}
//NECESSARY METHODS

Cursor.prototype.moveCursorPosition = function(button) {
  this.manipulateCursor(
    button, "left", this.cursorPos[0] > 0, 0, -1
  );
  this.manipulateCursor(
    button, "right", this.cursorPos[0] < this.board.dimensions[0] - 1, 0, 1
  );
  this.manipulateCursor(
    button, "up", this.cursorPos[1] > 0, 1, -1
  );
  this.manipulateCursor(
    button, "down", this.cursorPos[1] < this.board.dimensions[1] - 1, 1, 1
  );

  this.updateDisplayWindowScreen(button);
}


Cursor.prototype.renderBoardCursor = function(displayWindow) {
  let sF = displayWindow.sF;
  let topX = displayWindow.x/sF;
  let topY = displayWindow.y/sF;
  let highlightPos = [this.cursorPos[0] - topX, this.cursorPos[1] - topY];

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["highlight"])(highlightPos, 'rgba(255, 255, 0, 0.5)', displayWindow.sF);
}

//METHODS THAT ARE HIGHLY LIKELY TO BE NECESSARY BUT WILL HOPEFULLY BE
//REFACTORED IF NOT REMOVED

Cursor.prototype.selectUnit = function(unit) {
  this.selectedUnit = unit;
  this.selectedUnit.setMoveForecast();
}

Cursor.prototype.deselectUnit = function() {
  this.selectedUnit = null;
}

//METHODS THAT WILL POTENTIALLY BE REMOVED

Cursor.prototype.moveSelectedUnit = function() {
  this.selectedUnit.prevPos = [this.selectedUnit.position[0], this.selectedUnit.position[1]];
  this.selectedUnit.move([this.cursorPos[0], this.cursorPos[1]]);
}

// private cursor methods

Cursor.prototype.manipulateCursor = function(button, direction, constraint, index, alteration) {
  if (button == direction && constraint) {
    this.prevPos = [this.cursorPos[0], this.cursorPos[1]];
    this.cursorPos[index] = this.cursorPos[index] + alteration;
  }
}

Cursor.prototype.updateDisplayWindowScreen = function(button) {
  const sF = this.displayWindow.sF
  if (button == 'left' && this.cursorPos[0] < (this.displayWindow.x/sF) + 4 &&
  this.displayWindow.x > 0) {
    this.displayWindow.x -= 0.5*sF;
    this.displayWindow.movementDirection = 'left';
  } else if (button == 'right' && this.cursorPos[0] > ((this.displayWindow.x/sF) + (this.displayWindow.width/sF)) - 4 &&
  ((this.displayWindow.x/sF) + (this.displayWindow.width/sF)) < this.board.dimensions[0]) {
    this.displayWindow.x += 0.5*sF;
    this.displayWindow.movementDirection = 'right';
  } else if (button == 'up' && this.cursorPos[1] < (this.displayWindow.y/sF) + 4 &&
  this.displayWindow.y > 0) {
    this.displayWindow.y -= 0.5*sF;
    this.displayWindow.movementDirection = 'up';
  } else if (button == 'down' && this.cursorPos[1] > ((this.displayWindow.y/sF) + (this.displayWindow.height/sF)) - 4 &&
  ((this.displayWindow.y/sF) + (this.displayWindow.height/sF)) < this.board.dimensions[1]) {
    this.displayWindow.y += 0.5*sF;
    this.displayWindow.movementDirection = 'down';

  }
}

/* harmony default export */ __webpack_exports__["default"] = (Cursor);


/***/ }),

/***/ "./display/displayWindow.js":
/*!**********************************!*\
  !*** ./display/displayWindow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function DisplayWindow(sF, x, y, width, height) {
  this.sF = sF;
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.movementDirection = null;
}

DisplayWindow.prototype.moveWindow = function(dx, dy) {
  this.x += dx;
  this.y += dy;
}

DisplayWindow.prototype.eastOrWest = function(position) {
  const relXCoord = (position[0]*this.sF);// - this.x;

  if (relXCoord < (this.x + (this.width / 2)) ) {
    return 'east';
  } else {
    return 'west';
  }
}

DisplayWindow.prototype.northOrSouth = function(position) {
  const relYCoord = (position[1]*this.sF);// - this.x;

  if (relYCoord < (this.y + (this.height / 2)) ) {
    return 'north';
  } else {
    return 'south';
  }
}

DisplayWindow.prototype.updatePosition = function() {
  if (this.movementDirection) {
    if (this.movementDirection == 'left') {
      this.x -= (0.5*this.sF);
    } else if (this.movementDirection == 'right') {
      this.x += (0.5*this.sF);
    } else if (this.movementDirection == 'up') {
      this.y -= (0.5*this.sF);
    } else if (this.movementDirection == 'down') {
      this.y += (0.5*this.sF);
    }

    this.movementDirection = null;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (DisplayWindow);


/***/ }),

/***/ "./display/globalDisplay.js":
/*!**********************************!*\
  !*** ./display/globalDisplay.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _displayWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWindow */ "./display/displayWindow.js");
/* harmony import */ var _window_nullWindow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../window/nullWindow */ "./window/nullWindow.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../createContext */ "./createContext.js");
/* harmony import */ var _window_interactiveWindow_unitPostMovePhaseWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window/interactiveWindow/unitPostMovePhaseWindow */ "./window/interactiveWindow/unitPostMovePhaseWindow.js");
/* harmony import */ var _window_passiveWindow_unitMapWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../window/passiveWindow/unitMapWindow */ "./window/passiveWindow/unitMapWindow.js");
/* harmony import */ var _window_passiveWindow_terrainWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../window/passiveWindow/terrainWindow */ "./window/passiveWindow/terrainWindow.js");
/* harmony import */ var _window_interactiveWindow_combatInformationWindow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../window/interactiveWindow/combatInformationWindow */ "./window/interactiveWindow/combatInformationWindow.js");
/* harmony import */ var _window_passiveWindow_gameFinishedWindow__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../window/passiveWindow/gameFinishedWindow */ "./window/passiveWindow/gameFinishedWindow.js");









function GlobalDisplay(board, cursor, phaseStage, sF) {
  this.board = board;
  this.displayWindow = new _displayWindow__WEBPACK_IMPORTED_MODULE_0__["default"](sF, 5*sF, 1*sF, 15*sF, 10*sF);
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new _window_nullWindow__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.combatAnimation = null;
  this.gameIsFinished = false;
}

GlobalDisplay.prototype.chapterSetup = function(board, cursor, phaseStage) {
  this.board = board;
  this.cursor = cursor;
  this.phaseStage = phaseStage;
  this.window = new _window_nullWindow__WEBPACK_IMPORTED_MODULE_1__["default"]();
  this.setupUnitHash();
}

GlobalDisplay.prototype.render = function() {
  _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].clearRect(
    this.displayWindow.x,
    this.displayWindow.y,
    this.displayWindow.width,
    this.displayWindow.height
   );
    this.renderBoard();
    if(!this.combatAnimation) {
      this.phaseStage.render(45, this.cursor.cursorPos);
    }
    this.renderObjects(this.displayWindow.sF);
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
    this.renderUnits();
    this.renderWindows(sF);
    if(this.phaseStage.stage === 'player unit moving') this.renderMoveSpaces(sF);
    this.renderCursor();
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
  if (this.window instanceof _window_interactiveWindow_unitPostMovePhaseWindow__WEBPACK_IMPORTED_MODULE_3__["default"] ||
    this.window instanceof _window_passiveWindow_unitMapWindow__WEBPACK_IMPORTED_MODULE_4__["default"] ||
    this.window instanceof _window_passiveWindow_terrainWindow__WEBPACK_IMPORTED_MODULE_5__["default"] ||
    this.window instanceof _window_interactiveWindow_combatInformationWindow__WEBPACK_IMPORTED_MODULE_6__["default"] ||
    this.window instanceof _window_passiveWindow_gameFinishedWindow__WEBPACK_IMPORTED_MODULE_7__["default"]) {
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

/* harmony default export */ __webpack_exports__["default"] = (GlobalDisplay);


/***/ }),

/***/ "./display/nullCursor.js":
/*!*******************************!*\
  !*** ./display/nullCursor.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function NullCursor() {
  this.selectedUnit = null;
  this.cursorPos = [];
}

NullCursor.prototype.renderBoardCursor = function() {

}

/* harmony default export */ __webpack_exports__["default"] = (NullCursor);


/***/ }),

/***/ "./game/MainMenu.js":
/*!**************************!*\
  !*** ./game/MainMenu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function MainMenu(windowOne) {
  this.windowOne = windowOne;
}

MainMenu.prototype.receiveControllerInput = function(button) {
  if (button == 'A') {
    if (this.windowOne.options[this.windowOne.cursorPos] === 'New Game') {
      return 'New Game';
    }
  } else {
    this.windowOne.scrollCursor(button);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (MainMenu);


/***/ }),

/***/ "./game/controller.js":
/*!****************************!*\
  !*** ./game/controller.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Controller(game) {
  this.game = game;
  let that = this;

  this.checkKeyPress = function(key) {
    if (key.keyCode == "65") {
      that.game.receiveInput('left'); //a
    } else if (key.keyCode == "68") {
      that.game.receiveInput('right'); //d
    } else if (key.keyCode == "87") {
      that.game.receiveInput('up'); //w
    } else if (key.keyCode == "83") {
      that.game.receiveInput('down'); //s
    } else if (key.keyCode == "13") {
      that.game.receiveInput('A'); //enter
    } else if (key.keyCode == "66") {
      that.game.receiveInput('B'); //b
    } else if (key.keyCode == "86") {
      that.game.receiveInput('select'); //v
    } else if (key.keyCode == "67") {
      that.game.receiveInput('start'); //c
    }
  }

  window.addEventListener("keydown", this.checkKeyPress, false);
}

Controller.prototype.removeEventListener = function() {
  window.removeEventListener("keydown", this.checkKeyPress, false);
}

/* harmony default export */ __webpack_exports__["default"] = (Controller);


/***/ }),

/***/ "./game/frameSource.js":
/*!*****************************!*\
  !*** ./game/frameSource.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function FrameSource(display) {
  this.display = display;
  this.aiPlayer = null;
  this.aiPhase = false;
}

FrameSource.prototype.getFrames = function() {
  window.requestAnimationFrame(this.getFrames.bind(this));
  // c.clearRect(0, 0, innerWidth, 17 * 18);
  this.display.render();
  if(this.aiPhase && !this.display.combatAnimation) this.aiPhaseFrameUpdate();
}

FrameSource.prototype.beginAIPhase = function(aiPlayer) {
  this.aiPhase = true;
  this.aiPlayer = aiPlayer;
}

FrameSource.prototype.endAIPhase = function() {
  this.aiPhase = false;
  this.aiPlayer = null;
}


FrameSource.prototype.aiPhaseFrameUpdate = function() {
  this.aiPlayer.phaseFrameUpdate();
}

/* harmony default export */ __webpack_exports__["default"] = (FrameSource);


/***/ }),

/***/ "./game/game.js":
/*!**********************!*\
  !*** ./game/game.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controller */ "./game/controller.js");


function Game(display, frameSource, campaign, menu) {
  this.controller = new _controller__WEBPACK_IMPORTED_MODULE_0__["default"](this);
  this.frameSource = frameSource;

  this.display = display;
  this.campaign = campaign;
  this.menu = menu;

  this.gameStage = null;
}

Game.prototype.receiveInput = function(button) {
  //takes input from controller and takes appropriate action
  if (this.gameStage === 'Main Menu') {
    let response = this.menu.receiveControllerInput(button);
    if (response === 'New Game') {
      this.playCampaign();
    }
  } else if (this.gameStage === 'Play Campaign') {
    this.campaign.receiveControllerInput(button);
  }
}

Game.prototype.play = function() {
  // performs initial tasks, calls this.frameSource.getFrames()
  this.gameStage = 'Main Menu';
  this.display.window = this.menu.windowOne;
  this.frameSource.getFrames();
}

Game.prototype.playCampaign = function() {
  // this.campaign.play();
  // debugger;
  this.gameStage = 'Play Campaign';
  this.campaign.play();
}

/* harmony default export */ __webpack_exports__["default"] = (Game);


/***/ }),

/***/ "./game/script.js":
/*!************************!*\
  !*** ./game/script.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _display_globalDisplay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../display/globalDisplay */ "./display/globalDisplay.js");
/* harmony import */ var _board_nullBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../board/nullBoard */ "./board/nullBoard.js");
/* harmony import */ var _display_nullCursor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../display/nullCursor */ "./display/nullCursor.js");
/* harmony import */ var _phaseStage_nullPhaseStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../phaseStage/nullPhaseStage */ "./phaseStage/nullPhaseStage.js");
/* harmony import */ var _frameSource__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frameSource */ "./game/frameSource.js");
/* harmony import */ var _campaign_campaign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../campaign/campaign */ "./campaign/campaign.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./game */ "./game/game.js");
/* harmony import */ var _MainMenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MainMenu */ "./game/MainMenu.js");
/* harmony import */ var _window_interactiveWindow_mainMenuWindowOne__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../window/interactiveWindow/mainMenuWindowOne */ "./window/interactiveWindow/mainMenuWindowOne.js");










let sF = 45;
let display = new _display_globalDisplay__WEBPACK_IMPORTED_MODULE_0__["default"](new _board_nullBoard__WEBPACK_IMPORTED_MODULE_1__["default"](), new _display_nullCursor__WEBPACK_IMPORTED_MODULE_2__["default"], new _phaseStage_nullPhaseStage__WEBPACK_IMPORTED_MODULE_3__["default"](), sF);
let frameSource = new _frameSource__WEBPACK_IMPORTED_MODULE_4__["default"](display);
let campaign = new _campaign_campaign__WEBPACK_IMPORTED_MODULE_5__["default"](display, frameSource);

let game = new _game__WEBPACK_IMPORTED_MODULE_6__["default"](
  display,
  frameSource,
  campaign,
  new _MainMenu__WEBPACK_IMPORTED_MODULE_7__["default"](new _window_interactiveWindow_mainMenuWindowOne__WEBPACK_IMPORTED_MODULE_8__["default"]()),
);

game.play();


/***/ }),

/***/ "./inventory/inventory.js":
/*!********************************!*\
  !*** ./inventory/inventory.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _items_weapon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../items/weapon */ "./items/weapon.js");


function Inventory(items) {
  this.items = items ? items : [];
}

Inventory.prototype.autoEquipWeapon = function() {
  for(let i = 0; i < this.items.length; i++) {
    if (this.items[i] instanceof(_items_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"])) {
      return this.items[i];
    }
  }
  return null;
}

Inventory.prototype.manualEquipWeapon = function(index) {
  if(this.items[index] instanceof(_items_weapon__WEBPACK_IMPORTED_MODULE_0__["Weapon"])) {
    return this.items[index];
  } else {
    return null;
  }
}

Inventory.prototype.discard = function(index) {
  this.items[index] = null;
  this.items = removeNull(this.items);
}

/* harmony default export */ __webpack_exports__["default"] = (Inventory);


/***/ }),

/***/ "./items/weapon.js":
/*!*************************!*\
  !*** ./items/weapon.js ***!
  \*************************/
/*! exports provided: Weapon, PhysicalWeapon, MagicalWeapon, ManiKatti, SwordOfSeals, IronAxe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Weapon", function() { return Weapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhysicalWeapon", function() { return PhysicalWeapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagicalWeapon", function() { return MagicalWeapon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManiKatti", function() { return ManiKatti; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwordOfSeals", function() { return SwordOfSeals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronAxe", function() { return IronAxe; });
function Weapon() {
  this.stats = {};
}

function PhysicalWeapon() {
}
PhysicalWeapon.prototype = Object.create(Weapon.prototype);
PhysicalWeapon.prototype.constructor = PhysicalWeapon;

function MagicalWeapon() {
}
MagicalWeapon.prototype = Object.create(Weapon.prototype);
MagicalWeapon.prototype.constructor = MagicalWeapon;

function Sword() {
}
Sword.prototype = Object.create(PhysicalWeapon.prototype);
Sword.prototype.constructor = Sword;

function Axe() {
}
Axe.prototype = Object.create(PhysicalWeapon.prototype);
Axe.prototype.constructor = Axe;

function ManiKatti() {
  this.stats = {
    name: 'Mani Katti',
    rank: 'Prf',
    totalUses: 45,
    weight: 3,
    mt: 8,
    ht: 80,
    critical: 20,
    range: [1],
    wex: 2,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
ManiKatti.prototype = Object.create(Sword.prototype);
ManiKatti.prototype.constructor = ManiKatti;

function SwordOfSeals() {
  this.stats = {
    name: 'Sword of Seals',
    rank: 'Prf',
    totalUses: 20,
    weight: 8,
    mt: 18,
    ht: 95,
    critical: 10,
    range: [1],
    wex: 1,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
SwordOfSeals.prototype = Object.create(Sword.prototype);
SwordOfSeals.prototype.constructor = SwordOfSeals;

function IronAxe() {
  this.stats = {
    name: 'Iron Axe',
    rank: 'E',
    totalUses: 45,
    weight: 10,
    mt: 8,
    ht: 75,
    critical: 0,
    range: [1],
    wex: 1,
    cost: 0
  };

  this.numberOfUses = this.stats['totalUses'];
}
IronAxe.prototype = Object.create(Axe.prototype);
IronAxe.prototype.constructor = IronAxe;


/***/ }),

/***/ "./miscellaneousFunctions/MiscellaneousFunctions.js":
/*!**********************************************************!*\
  !*** ./miscellaneousFunctions/MiscellaneousFunctions.js ***!
  \**********************************************************/
/*! exports provided: distance, stringToPos, includePosition, equivalentPositions, randomNumberFromOneTo, renderSquare, renderText, renderTextWithFont, highlight, spaceHighlight, highlightSpaces, galileoHighlightSpaces, preScaledHighlight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distance", function() { return distance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToPos", function() { return stringToPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "includePosition", function() { return includePosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equivalentPositions", function() { return equivalentPositions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "randomNumberFromOneTo", function() { return randomNumberFromOneTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderSquare", function() { return renderSquare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderText", function() { return renderText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderTextWithFont", function() { return renderTextWithFont; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlight", function() { return highlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "spaceHighlight", function() { return spaceHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightSpaces", function() { return highlightSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galileoHighlightSpaces", function() { return galileoHighlightSpaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preScaledHighlight", function() { return preScaledHighlight; });
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../createContext */ "./createContext.js");


function distance(pos1, pos2) {
  let dr = Math.abs(pos1[0] - pos2[0]);
  let dc = Math.abs(pos1[1] - pos2[1]);
  return (dr + dc);
}

function stringToPos(stringPos) {
  let stringArr = stringPos.split(',');
  return [parseInt(stringArr[0]), parseInt(stringArr[1])]
}

function includePosition(array, pos) {
  for(let i = 0; i < array.length; i++) {
    if (array[i][0] === pos[0] && array[i][1] === pos[1]) {
      return true;
    }
  }
  return false;
}

function equivalentPositions(posOne, posTwo) {
  return posOne[0] === posTwo[0] && posOne[1] === posTwo[1];
}

function randomNumberFromOneTo(upperLimit) {
  return Math.floor((Math.random() * upperLimit) + 1)
}

function renderSquare(row, col, sF) {
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].beginPath();
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].lineWidth="1";
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].strokeStyle="black"; // Green path
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].moveTo(row * sF, col * sF);
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(row * sF + sF, col * sF);
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].stroke();
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(row * sF + sF, col * sF + sF);
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].stroke();
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(row * sF, col * sF + sF);
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].stroke();
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].lineTo(row * sF, col * sF);
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].stroke();
}

function renderText(text, alignment, centerX, y) {
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].font = "15px Arial";
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].textAlign = alignment;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = 'rgba(255, 255, 225, 1)';
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillText(text, centerX, y);
}

function renderTextWithFont(font, alignment, fill, text, centerX, y) {
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].font = font;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].textAlign = alignment;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = fill;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillText(text, centerX, y);
}

function highlight(pos, color, sF) {
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = color;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillRect(pos[0] * sF, pos[1] * sF, sF, sF);
}

function spaceHighlight(pos, color, sF) {
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = color;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillRect((pos[0] + 0.05) * sF, (pos[1] + 0.05) * sF, (1 - 0.05) * sF, (1 - 0.05) * sF);
}

function highlightSpaces(spaces, board, color, sF) {
  for(const space in spaces) {
    const pos = stringToPos(space);
    spaceHighlight(pos, color, sF);
  }
}

function galileoHighlightSpaces(sF, x, y, width, height, spaces, color) {
  const topX = x/sF;
  const topY = y/sF;

  for(const space in spaces) {
    const pos = stringToPos(space);
    const highlightPos = [pos[0] - topX, pos[1] - topY];
    spaceHighlight(highlightPos, color, sF);
  }

}

function preScaledHighlight(x, y, dx, dy, color) {
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillStyle = color;
  _createContext__WEBPACK_IMPORTED_MODULE_0__["c"].fillRect(x, y, dx, dy);
}


/***/ }),

/***/ "./phaseStage/nullPhaseStage.js":
/*!**************************************!*\
  !*** ./phaseStage/nullPhaseStage.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function nullPhaseStage() {
  this.stage = null;
}

nullPhaseStage.prototype.render = function(sF) {
  // c.font = "15px Arial";
  // c.fillStyle = 'rgba(0, 0, 0, 1)';
  // c.fillText(`${this.stage}`, 600, 400);
  // this.playerPhaseSprite.render(5, 5, 45);
}

/* harmony default export */ __webpack_exports__["default"] = (nullPhaseStage);


/***/ }),

/***/ "./phaseStage/phaseStage.js":
/*!**********************************!*\
  !*** ./phaseStage/phaseStage.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../createContext */ "./createContext.js");



function PhaseStage() {
  this.stage = 'select unit';
  this.playerPhaseSprite = new _animations_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](
    _createContext__WEBPACK_IMPORTED_MODULE_1__["c"], 240, 160, 240*0.4, 160*0.4, 'phaseStage/FE_player_phase_sprite.png', 3, 1
  );

  this.enemyPhaseSprite = new _animations_sprite__WEBPACK_IMPORTED_MODULE_0__["default"](
    _createContext__WEBPACK_IMPORTED_MODULE_1__["c"], 240, 160, 240*0.4, 160*0.4, 'phaseStage/FE_enemy_phase_sprite.png', 3, 1
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

/* harmony default export */ __webpack_exports__["default"] = (PhaseStage);


/***/ }),

/***/ "./players/enemyPlayer.js":
/*!********************************!*\
  !*** ./players/enemyPlayer.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generalPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalPlayer */ "./players/generalPlayer.js");
/* harmony import */ var _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _units_enemyUnits_enemyUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/enemyUnits/enemyUnit */ "./units/enemyUnits/enemyUnit.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");
/* harmony import */ var _animations_movingAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../animations/movingAnimation */ "./animations/movingAnimation.js");
/* harmony import */ var _combat_combat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../combat/combat */ "./combat/combat.js");
/* harmony import */ var _animations_combatAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../animations/combatAnimation */ "./animations/combatAnimation.js");








function EnemyPlayer(board, display, phaseStage, frameSource) {
  this.board = board;
  this.display = display;
  this.phaseStage = phaseStage;
  this.frameSource = frameSource;
  this.unitType = _units_enemyUnits_enemyUnit__WEBPACK_IMPORTED_MODULE_2__["default"];
  this.opposingUnitType = _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.units = this.listOfOwnUnits();
  this.unitQueue = [];
}

EnemyPlayer.prototype = Object.create(_generalPlayer__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
EnemyPlayer.prototype.constructor = EnemyPlayer;

EnemyPlayer.prototype.initiatePhase = function() {
  this.phaseStage.nextStage('Enemy Phase');
  this.units = this.listOfOwnUnits();

  for(const unitIndex in this.units) {
    if(this.units[unitIndex].current_hp === 0){
      let units = this.units;
      delete units[unitIndex];
    }
  }
  let listOfUnits = this.units;
  listOfUnits.forEach(function(value, key, map) {
    this.unitQueue.push(key);
  }.bind(this));
}

EnemyPlayer.prototype.phaseFrameUpdate = function() {
  if (this.unitQueue.length > 0) {
    if (this.unitQueue[0].movingAnimation === undefined || this.unitQueue[0].movingAnimation === null) {
      this.moveSelectedUnit();
    } else if (this.unitQueue[0].movingAnimation && this.unitQueue[0].moving) {
    } else if (this.unitQueue[0].moving === false) this.finishUnitTurn();
  }
  if (this.unitQueue.length === 0 && this.display.combatAnimation === null) {
    this.endPhase();
  }

}

// 'Private' EnemyPlayer methods

EnemyPlayer.prototype.finishUnitTurn = function() {
  let playerUnit = this.unitQueue[0].selectPlayerUnitInRange();

  if (playerUnit) {
    let newCombat = new _combat_combat__WEBPACK_IMPORTED_MODULE_5__["default"](this.unitQueue[0], playerUnit);
    this.display.combatAnimation = new _animations_combatAnimation__WEBPACK_IMPORTED_MODULE_6__["default"](newCombat, this.phaseStage);
    newCombat.initiateFight();
  }

  this.unitQueue[0].movingAnimation = null;
  this.postUnitActionCheck(this.unitQueue[0]);
  this.unitQueue.shift();
}

EnemyPlayer.prototype.endPhase = function() {
  this.frameSource.endAIPhase();
  this.phaseStage.nextStage('select unit');
}

EnemyPlayer.prototype.moveSelectedUnit = function() {
  const unit = this.unitQueue[0];
  const moveSelection = unit.moveSelection();

  if(Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_3__["equivalentPositions"])(moveSelection, unit.position)) {
    this.finishUnitTurn();
  } else {
    const route = unit.singleMovePathFinder.setupRoute(moveSelection);
    const movementAnimation = new _animations_movingAnimation__WEBPACK_IMPORTED_MODULE_4__["default"](
      unit, route, 8, this.phaseStage, this
    );
      unit.movingAnimation = movementAnimation;
      unit.moving = true;
      unit.move(moveSelection);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (EnemyPlayer);


/***/ }),

/***/ "./players/generalPlayer.js":
/*!**********************************!*\
  !*** ./players/generalPlayer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function GeneralPlayer(board, display, unitType, opposingUnitType) {
  this.board = board;
  this.display = display;
  this.unitType = unitType;
  this.opposingUnitType = opposingUnitType;
  this.units = this.listOfOwnUnits();
}

GeneralPlayer.prototype.postUnitActionCheck = function(unit) {
  console.log('post unit action check carried out');
  if (unit.current_hp === 0) {
    for(const unitIndex in this.display.units) {
      let units = this.display.units;
      if (units[unitIndex] === unit) {
        delete units[unitIndex];
      }
    }
  }
}

GeneralPlayer.prototype.listOfOwnUnits = function() {
  return this.listOfUnits(this.unitType);
}

GeneralPlayer.prototype.listOfUnits = function(type) {
  let units = new Map();

  this.board.boardIterator(function(row, col) {
    if (this.board.grid[row][col].unit instanceof(type)) {
      units.set(this.board.grid[row][col].unit, true);
    }
  }.bind(this));
  return units;
}

GeneralPlayer.prototype.resetUnitsAction = function() {

  this.units.forEach(function(item, key, map) {
    key.actionTaken = false;
  });

}

GeneralPlayer.prototype.unitDeath = function() {
  this.units.forEach(function(item, key, map) {
    if(key.current_hp === 0) {
      key.position = null;
      map.delete(key);
    }
  });
}

GeneralPlayer.prototype.everyUnitMoved = function() {
  let everyActionTaken = true;
  this.units.forEach(function(item, key, map) {
    if(key.actionTaken === false) {
      everyActionTaken = false;
    }
  });

  return everyActionTaken;
}

/* harmony default export */ __webpack_exports__["default"] = (GeneralPlayer);


/***/ }),

/***/ "./players/player.js":
/*!***************************!*\
  !*** ./players/player.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _generalPlayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./generalPlayer */ "./players/generalPlayer.js");
/* harmony import */ var _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../units/playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _units_enemyUnits_enemyUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../units/enemyUnits/enemyUnit */ "./units/enemyUnits/enemyUnit.js");
/* harmony import */ var _window_passiveWindow_terrainWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../window/passiveWindow/terrainWindow */ "./window/passiveWindow/terrainWindow.js");
/* harmony import */ var _window_nullWindow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../window/nullWindow */ "./window/nullWindow.js");
/* harmony import */ var _window_passiveWindow_unitMapWindow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../window/passiveWindow/unitMapWindow */ "./window/passiveWindow/unitMapWindow.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");
/* harmony import */ var _animations_movingAnimation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../animations/movingAnimation */ "./animations/movingAnimation.js");
/* harmony import */ var _window_interactiveWindow_combatInformationWindow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../window/interactiveWindow/combatInformationWindow */ "./window/interactiveWindow/combatInformationWindow.js");
/* harmony import */ var _combat_combat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../combat/combat */ "./combat/combat.js");
/* harmony import */ var _animations_combatAnimation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../animations/combatAnimation */ "./animations/combatAnimation.js");
/* harmony import */ var _window_passiveWindow_gameFinishedWindow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../window/passiveWindow/gameFinishedWindow */ "./window/passiveWindow/gameFinishedWindow.js");
/* harmony import */ var _display_nullCursor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../display/nullCursor */ "./display/nullCursor.js");














function Player(board, display, phaseStage) {
  this.board = board;
  this.display = display;
  this.cursor = this.display.cursor
  this.phaseStage = phaseStage;
  this.unitType = _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"];
  this.opposingUnitType = _units_enemyUnits_enemyUnit__WEBPACK_IMPORTED_MODULE_2__["default"];
  this.units = this.listOfOwnUnits();
}

Player.prototype = Object.create(_generalPlayer__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
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
  if(spaceOccupant != null && spaceOccupant instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"]) &&
  spaceOccupant.actionTaken === false && this.selectedUnit() === null) {
    this.cursor.selectUnit(spaceOccupant);
    this.display.window = new _window_nullWindow__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.phaseStage.nextStage('player unit moving');
  }
}

Player.prototype.updateUnitMapWindow = function() {
  let unit = this.board.space(this.cursorPos()).unit;
  if (unit != null && !this.display.combatAnimation) {
    this.display.window = new _window_passiveWindow_unitMapWindow__WEBPACK_IMPORTED_MODULE_5__["default"](unit);
  } else if (this.board.space(this.cursorPos()).terrain != null) {
    this.display.window = new _window_passiveWindow_terrainWindow__WEBPACK_IMPORTED_MODULE_3__["default"](this.board.space(this.cursorPos()));
  } else {
    this.display.window = new _window_nullWindow__WEBPACK_IMPORTED_MODULE_4__["default"]();
  }
}

//play player unit moving
Player.prototype.playPlayerUnitMoving = function(button) {
  if (button === 'A') {
    if (this.selectedUnit().validMoveSpaces()[this.cursorPos()]) {
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

  const siftedRoute = this.selectedUnit().singleMovePathFinder.setupRoute(this.cursorPos());
  this.selectedUnit().movingAnimation = new _animations_movingAnimation__WEBPACK_IMPORTED_MODULE_7__["default"](
    this.selectedUnit(),
    siftedRoute,
    8,
    this.phaseStage,
    this.display);
}

Player.prototype.updateSelectedUnitRouteSpaces = function() {
  // if (this.selectedUnit().moveSpaces[this.cursorPos()] === true) {
  if (this.selectedUnit().singleMovePathFinder.moveThroughPositions.positions[this.cursorPos()] != undefined &&
      !Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_6__["equivalentPositions"])(this.cursorPos(), this.selectedUnit().position)) {
    // this.selectedUnit().routeSpaces =
    // this.selectedUnit().findAnOptimalRoute(this.cursorPos());
    this.selectedUnit().singleMovePathFinder.bfsMazeSolver.findPath(this.cursorPos());
  } else {
    // this.selectedUnit().routeSpaces = [this.selectedUnit().position];
    this.selectedUnit().singleMovePathFinder.bfsMazeSolver.routePositions = [this.selectedUnit().position];
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
  this.display.window = new _window_nullWindow__WEBPACK_IMPORTED_MODULE_4__["default"]();
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
    this.display.window = new _window_passiveWindow_gameFinishedWindow__WEBPACK_IMPORTED_MODULE_11__["default"]();
    this.display.cursor = new _display_nullCursor__WEBPACK_IMPORTED_MODULE_12__["default"]();
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
  this.display.window = new _window_interactiveWindow_combatInformationWindow__WEBPACK_IMPORTED_MODULE_8__["default"](this.cursor.selectedUnit, fightOptions);
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

  let newCombat = new _combat_combat__WEBPACK_IMPORTED_MODULE_9__["default"](this.selectedUnit(), this.board.space(pos).unit);
  this.display.combatAnimation = new _animations_combatAnimation__WEBPACK_IMPORTED_MODULE_10__["default"](newCombat, this.phaseStage);
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


/* harmony default export */ __webpack_exports__["default"] = (Player);


/***/ }),

/***/ "./units/enemyUnits/brigand/brigand.js":
/*!*********************************************!*\
  !*** ./units/enemyUnits/brigand/brigand.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _enemyUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enemyUnit */ "./units/enemyUnits/enemyUnit.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../createContext */ "./createContext.js");
/* harmony import */ var _combatAnimations_brigandCombatAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combatAnimations/brigandCombatAnimation */ "./units/enemyUnits/brigand/combatAnimations/brigandCombatAnimation.js");
/* harmony import */ var _playerUnits_lyn_combatAnimations_lynDodgeAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../playerUnits/lyn/combatAnimations/lynDodgeAnimation */ "./units/playerUnits/lyn/combatAnimations/lynDodgeAnimation.js");
/* harmony import */ var _combatAnimations_brigandReceiveHitAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combatAnimations/brigandReceiveHitAnimation */ "./units/enemyUnits/brigand/combatAnimations/brigandReceiveHitAnimation.js");
/* harmony import */ var _unitStats_unitStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../unitStats/unitStats */ "./units/unitStats/unitStats.js");








function Brigand(board, inventory, behavior, stats) {
  _enemyUnit__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    stats,
    board,
    inventory,
    'Brigand',
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 18, 18, 18, 18, "units/enemyUnits/brigand/mapSpriteSheets/brigandMapSprite.png", 6, 12),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 22, 25, 22, 25, "units/enemyUnits/brigand/mapSpriteSheets/brigandForwardWalkSpriteSheet.png", 6, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 22, 25, 22, 25, "units/enemyUnits/brigand/mapSpriteSheets/brigandBackwardsWalkSprite.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 22, 27, 22, 27, "units/enemyUnits/brigand/mapSpriteSheets/brigandRightWalkSprite.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 22, 27, 22, 27, "units/enemyUnits/brigand/mapSpriteSheets/brigandLeftWalkSprite.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 80, 72, 18, 18, "units/enemyUnits/brigand/HPWindowImage/brigandHPWindowSprite.png", 6, 1),
    new _combatAnimations_brigandCombatAnimation__WEBPACK_IMPORTED_MODULE_3__["default"](),
    new _combatAnimations_brigandCombatAnimation__WEBPACK_IMPORTED_MODULE_3__["default"](),
    new _playerUnits_lyn_combatAnimations_lynDodgeAnimation__WEBPACK_IMPORTED_MODULE_4__["default"](),
    new _combatAnimations_brigandReceiveHitAnimation__WEBPACK_IMPORTED_MODULE_5__["default"],
    behavior
    );
}

Brigand.prototype = Object.create(_enemyUnit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Brigand.prototype.constructor = Brigand;

Brigand.prototype.defaultStats = function() {
  return new _unitStats_unitStats__WEBPACK_IMPORTED_MODULE_6__["default"](
    {
      level: 1,
      experience: 0,
      hp: 20,
      strength: 5,
      skill: 1,
      speed: 5,
      luck: 0,
      defense: 3,
      resistance: 0,
      move: 5,
      constitution: 12,
      hp_growth_rate: 82,
      strength_growth_rate: 50,
      skill_growth_rate: 30,
      speed_growth_rate: 20,
      luck_growth_rate: 15,
      defense_growth_rate: 10,
      resistance_growth_rate: 13,
      affinity: "wind"
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Brigand);


/***/ }),

/***/ "./units/enemyUnits/brigand/combatAnimations/brigandCombatAnimation.js":
/*!*****************************************************************************!*\
  !*** ./units/enemyUnits/brigand/combatAnimations/brigandCombatAnimation.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/combatSprite */ "./animations/spriteSequence/combatSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function BrigandCombatAnimation() {
  let sprites0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 39, 70, 39, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite0.png', 6, 4);
  let sprites1 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 74, 70, 74, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite1.png', 6, 1);
  let sprites2 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 74, 70, 74, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite2.png', 4, 6);
  let sprites3 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 35, 90, 35, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite3.png', 2, 4);
  let sprites4 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 48, 90, 48, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite4.png', 4, 6);
  let sprites5 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 33, 70, 33, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandCombatSprite5.png', 6, 2);

  let spriteQueue = [
    sprites0, sprites1, sprites2, sprites3, sprites4, sprites5
  ];

  let positionAdjustment = {
    '2,0' : [0.15, 0],
    '2,1' : [0.30, -0.3],
    '2,2' : [0.45, -0.5],
    '2,3' : [0.60, -0.6],
    '2,4' : [0.75, -0.5],
    '2,5' : [0.9, -0.3],

    '3,0' : [2.5, 0],
    '3,1' : [2.5, 0],
    '3,2' : [2.5, 0],
    '3,3' : [2.5, 0],

    '4,0' : [2.5, 0],
    '4,1' : [2.1, -0.2],
    '4,2' : [1.7, -0.3],
    '4,3' : [1.4, -0.4],
    '4,4' : [1.1, -0.3],
    '4,5' : [0.7, -0.1]
  };

  let damageFrame = [3, 2];

  _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

BrigandCombatAnimation.prototype = Object.create(_animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
BrigandCombatAnimation.prototype.constructor = BrigandCombatAnimation;

/* harmony default export */ __webpack_exports__["default"] = (BrigandCombatAnimation);


/***/ }),

/***/ "./units/enemyUnits/brigand/combatAnimations/brigandReceiveHitAnimation.js":
/*!*********************************************************************************!*\
  !*** ./units/enemyUnits/brigand/combatAnimations/brigandReceiveHitAnimation.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/spriteSequence */ "./animations/spriteSequence/spriteSequence.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function BrigandReceiveHitAnimation() {
  const sprites0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 39, 70, 39, 'units/enemyUnits/brigand/combatAnimations/spriteSheets/brigandReceiveHitSprite.png', 4, 1);
  const spriteQueue = [sprites0];
  const positionAdjustment = {};

  _animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment
  );

  this.rendered = false;
}

BrigandReceiveHitAnimation.prototype = Object.create(_animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
BrigandReceiveHitAnimation.prototype.constructor = BrigandReceiveHitAnimation;

BrigandReceiveHitAnimation.prototype.render = function(row, col, sF) {
  const currentSprite = this.currentSprite();
  currentSprite.render(row, col, sF);
  this.update();
  if(this.queueIndex === 0 && currentSprite.frameIndex === 0 &&
    currentSprite.tickCount === 0) {
    this.rendered = true;
  }
}

BrigandReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (BrigandReceiveHitAnimation);


/***/ }),

/***/ "./units/enemyUnits/enemyUnit.js":
/*!***************************************!*\
  !*** ./units/enemyUnits/enemyUnit.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unit */ "./units/unit.js");
/* harmony import */ var _singleMovePathFinder_singleMovePathFinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleMovePathFinder/singleMovePathFinder */ "./units/singleMovePathFinder/singleMovePathFinder.js");



function EnemyUnit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite,backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation, behavior) {
  _unit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, stats, board, inventory, name, mapSprite,
    forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
    leftWalkSprite, hpWindowSprite, combatAnimation, critAnimation,
    dodgeAnimation, receiveHitAnimation);
  this.behavior = behavior;
  this.singleMovePathFinder =  new _singleMovePathFinder_singleMovePathFinder__WEBPACK_IMPORTED_MODULE_1__["default"](board, this);
}

EnemyUnit.prototype = Object.create(_unit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
EnemyUnit.prototype.constructor = EnemyUnit;

EnemyUnit.prototype.waitForAnimationCompletion = function() {

}

/* harmony default export */ __webpack_exports__["default"] = (EnemyUnit);


/***/ }),

/***/ "./units/playerUnits/lyn/combatAnimations/lynCombatAnimation.js":
/*!**********************************************************************!*\
  !*** ./units/playerUnits/lyn/combatAnimations/lynCombatAnimation.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/combatSprite */ "./animations/spriteSequence/combatSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function LynCombatAnimation() {
  let desSprites0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 50, 90, 50, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite0.png', 3, 12);
  let desSprites1 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 100, 41, 100, 41, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite1.png', 3, 8);
  let desSprites2 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 46, 90, 46, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite2.png', 3, 8);
  let desSprites3 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 48, 90, 48, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite3.png', 3, 6);

  let spriteQueue = [desSprites0, desSprites1, desSprites2, desSprites3];

  let positionAdjustment = {
    "0,5": [-0.5, 0],
    "0,6": [-2.9, 0],
    "0,7": [-2.9, 0],
    "0,8": [-2.9, 0],
    "0,9": [-2.9, 0],
    "0,10": [-2.9, 0],
    "0,11": [-2.9, 0],

    "1,0": [-2.3, 0],
    "1,1": [-2.3, 0],
    "1,2": [-2.3, 0],
    "1,3": [-6.5, 0],
    "1,4": [-6.5, 0],
    "1,5": [-6.5, 0],
    "1,6": [-6.5, 0],
    "1,7": [-6.5, 0],
    "1,8": [-6.5, 0],

    "2,0": [-6.5, 0],
    "2,1": [-6.0, -0.6],
    "2,2": [-5.9, -1.6],
    "2,3": [-5.0, -2.4],
    "2,4": [-4.0, -2.3],
    "2,5": [-3.1, -1.7],
    "2,6": [-2.5, -1.2],
    "2,7": [-2.2, -1.0],


    "3,0": [-1.7, 0],
    "3,1": [-1.4, 0],
    "3,2": [-1.4, 0],
    "3,3": [-1.4, 0],
    "3,4": [-1.4, 0],
    "3,5": [-1.4, 0]

  };

  let damageFrame = [1, 3];

  _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

LynCombatAnimation.prototype = Object.create(_animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
LynCombatAnimation.prototype.constructor = LynCombatAnimation;

/* harmony default export */ __webpack_exports__["default"] = (LynCombatAnimation);


/***/ }),

/***/ "./units/playerUnits/lyn/combatAnimations/lynCritCombatAnimation.js":
/*!**************************************************************************!*\
  !*** ./units/playerUnits/lyn/combatAnimations/lynCritCombatAnimation.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/combatSprite */ "./animations/spriteSequence/combatSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function LynCritCombatAnimation() {
  let sprite0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 50, 90, 50, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite0.png', 4, 5);
  let sprite1 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 140, 35, 140, 35, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet1.png', 4, 8);
  let spriteNull1 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheetNull.png', 16, 1);

  let sprite2 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet2.png', 1, 1);
  let sprite3 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet3.png', 1, 1);
  let spriteNull2 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheetNull.png', 1, 1);
  let sprite4 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet3.png', 2, 1);
  let spriteNull3 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheetNull.png', 2, 1);
  let sprite5 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet3.png', 4, 1);
  let spriteNull4 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheetNull.png', 3, 1);
  let sprite6 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet3.png', 3, 1);
  let spriteNull5 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheetNull.png', 3, 1);
  let sprite7 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet3.png', 3, 1);

  let spriteNull6 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 155, 141, 155, 141, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheetNull.png', 15, 1);
  let sprite8 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 50, 87, 50, 87, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet4.png', 1, 2);
  let sprite9 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 110, 28, 110, 28, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet5.png', 1, 2);
  let sprite10 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 110, 28, 110, 28, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet6.png', 1, 2);
  let sprite11 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 173, 44, 173, 44, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCritSpriteSheet7.png', 2, 1);
  let sprite12 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 100, 41, 100, 41, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite1.png', 4, 3);

  let sprite13 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 46, 90, 46, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite2.png', 2, 8);
  let sprite14 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 90, 48, 90, 48, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynCombatSprite3.png', 3, 6);



  let positionAdjustment = {
    "3,0": [-3.6, 2.8],

    "4,0": [-3.6, 2.8],

    "6,0": [-3.6, 2.8],

    "8,0": [-3.6, 2.8],

    "10,0": [-3.6, 2.8],

    "12,0": [-3.6, 2.8],

    "15,0": [-3.6, 0],
    "15,1": [-3.6, 0],

    "17,0": [-3.6, -0.5],
    "17,1": [-3.6, -0.5],

    "19,0": [-3.9, 0.5],
    "19,1": [-3.9, 0.5],


    "24,0": [-2.4, -8.2],
    "24,1": [-2.2, -7.7],
    "24,2": [-2, -6.9],
    "24,3": [-1.9, -6.2],
    "24,4": [-1.9, -4.7],
    "24,5": [-1.8, -3.4],
    "24,6": [-1.6, -2.2],
    "24,7": [-1.4, -1.0],


    "25,0": [-1.7, 0],
    "25,1": [-1.4, 0],
    "25,2": [-1.4, 0],
    "25,3": [-1.4, 0],
    "25,4": [-1.4, 0],
    "25,5": [-1.4, 0]

  };

  let damageFrame = [24, 0];

  let spriteQueue = [
    sprite0, sprite1, spriteNull1,

    sprite2, sprite3, spriteNull2,
    sprite4,spriteNull3, sprite5, spriteNull4, sprite6, spriteNull5,
    sprite7, spriteNull1,

    spriteNull6, sprite8, spriteNull6, sprite9, spriteNull6, sprite10, spriteNull6, sprite11, spriteNull6,

      sprite12, sprite13, sprite14
];

  _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment,
    damageFrame
  );

}

LynCritCombatAnimation.prototype = Object.create(_animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
LynCritCombatAnimation.prototype.constructor = LynCritCombatAnimation;

/* harmony default export */ __webpack_exports__["default"] = (LynCritCombatAnimation);


/***/ }),

/***/ "./units/playerUnits/lyn/combatAnimations/lynDodgeAnimation.js":
/*!*********************************************************************!*\
  !*** ./units/playerUnits/lyn/combatAnimations/lynDodgeAnimation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_dodgeSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/dodgeSprite */ "./animations/spriteSequence/dodgeSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");





function LynDodgeAnimation() {
  let desSprites0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 35, 70, 35, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynDodgeSpriteSheet.png', 3, 3);

  let spriteQueue = [desSprites0];

  let positionAdjustment = {
  };

  let restFrame = [0, 1];

  _animations_spriteSequence_dodgeSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment,
    restFrame
  );

}

LynDodgeAnimation.prototype = Object.create(_animations_spriteSequence_dodgeSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
LynDodgeAnimation.prototype.constructor = LynDodgeAnimation;

/* harmony default export */ __webpack_exports__["default"] = (LynDodgeAnimation);


/***/ }),

/***/ "./units/playerUnits/lyn/combatAnimations/lynReceiveHitAnimation.js":
/*!**************************************************************************!*\
  !*** ./units/playerUnits/lyn/combatAnimations/lynReceiveHitAnimation.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/spriteSequence */ "./animations/spriteSequence/spriteSequence.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function LynReceiveHitAnimation() {
  const sprite0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 43, 70, 43, 'units/playerUnits/lyn/combatAnimations/spriteSheets/lynReceiveHitSprite.png', 4, 1);
  const spriteQueue = [sprite0];
  const positionAdjustment = {};

  _animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment
  );
  this.rendered = false;
}

LynReceiveHitAnimation.prototype = Object.create(_animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
LynReceiveHitAnimation.prototype.constructor = LynReceiveHitAnimation;

LynReceiveHitAnimation.prototype.render = function(row, col, sF) {
  const currentSprite = this.currentSprite();
  currentSprite.render(row, col, sF);
  this.update();
  if(this.queueIndex === 0 && currentSprite.frameIndex === 0 &&
    currentSprite.tickCount === 0) {
    this.rendered = true;
  }
}

LynReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (LynReceiveHitAnimation);


/***/ }),

/***/ "./units/playerUnits/lyn/lyn.js":
/*!**************************************!*\
  !*** ./units/playerUnits/lyn/lyn.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../createContext */ "./createContext.js");
/* harmony import */ var _combatAnimations_lynCombatAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combatAnimations/lynCombatAnimation */ "./units/playerUnits/lyn/combatAnimations/lynCombatAnimation.js");
/* harmony import */ var _combatAnimations_lynCritCombatAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combatAnimations/lynCritCombatAnimation */ "./units/playerUnits/lyn/combatAnimations/lynCritCombatAnimation.js");
/* harmony import */ var _combatAnimations_lynDodgeAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combatAnimations/lynDodgeAnimation */ "./units/playerUnits/lyn/combatAnimations/lynDodgeAnimation.js");
/* harmony import */ var _combatAnimations_lynReceiveHitAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combatAnimations/lynReceiveHitAnimation */ "./units/playerUnits/lyn/combatAnimations/lynReceiveHitAnimation.js");
/* harmony import */ var _unitStats_unitStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../unitStats/unitStats */ "./units/unitStats/unitStats.js");










function Lyn(board, inventory, stats) {
  _playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    stats,
    board,
    inventory,
    'Lyn',
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 18, 18, 18, 18, "units/playerUnits/lyn/mapSpriteSheets/lynMapSpriteSheet.png", 6, 12),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 23, 19, 23, 19, "units/playerUnits/lyn/mapSpriteSheets/lynForwardWalkSpriteSheet.png", 6, 6),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 21, 18, 21, 18, "units/playerUnits/lyn/mapSpriteSheets/lynBackwardWalkSpriteSheet.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 26, 17, 26, 17, "units/playerUnits/lyn/mapSpriteSheets/lynRightWalkSpriteSheet.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 26, 17, 26, 17, "units/playerUnits/lyn/mapSpriteSheets/lynLeftWalkSpriteSheet.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 165, 158, 18, 18, "units/playerUnits/lyn/HPWindowImage/lynHPWindowSprite3.jpg", 6, 1),
    new _combatAnimations_lynCombatAnimation__WEBPACK_IMPORTED_MODULE_3__["default"](),
    new _combatAnimations_lynCritCombatAnimation__WEBPACK_IMPORTED_MODULE_4__["default"](),
    new _combatAnimations_lynDodgeAnimation__WEBPACK_IMPORTED_MODULE_5__["default"](),
    new _combatAnimations_lynReceiveHitAnimation__WEBPACK_IMPORTED_MODULE_6__["default"]()
  );
}

Lyn.prototype = Object.create(_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Lyn.prototype.constructor = Lyn;

Lyn.prototype.defaultStats = function() {
  return new _unitStats_unitStats__WEBPACK_IMPORTED_MODULE_7__["default"](
    {
      level: 1,
      experience: 0,
      hp: 31,
      strength: 14,
      skill: 17,
      speed: 15,
      luck: 15,
      defense: 6,
      resistance: 8,
      move: 6,
      constitution: 6,
      hp_growth_rate: 70,
      strength_growth_rate: 40,
      skill_growth_rate: 60,
      speed_growth_rate: 60,
      luck_growth_rate: 55,
      defense_growth_rate: 20,
      resistance_growth_rate: 30,
      affinity: "wind"
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Lyn);


/***/ }),

/***/ "./units/playerUnits/playerUnit.js":
/*!*****************************************!*\
  !*** ./units/playerUnits/playerUnit.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../unit */ "./units/unit.js");
/* harmony import */ var _singleMovePathFinder_singleMovePathFinder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../singleMovePathFinder/singleMovePathFinder */ "./units/singleMovePathFinder/singleMovePathFinder.js");



function PlayerUnit(stats, board, inventory, name, mapSprite,
forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
 hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation) {
  _unit__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite, leftWalkSprite,
   hpWindowSprite, combatAnimation, critAnimation, dodgeAnimation, receiveHitAnimation);
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;

  this.singleMovePathFinder =  new _singleMovePathFinder_singleMovePathFinder__WEBPACK_IMPORTED_MODULE_1__["default"](board, this);
}

PlayerUnit.prototype = Object.create(_unit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
PlayerUnit.prototype.constructor = PlayerUnit;

PlayerUnit.prototype.setMoveForecast = function() {
  this.inTransit = true;
  this.prevPos = [this.position[0], this.position[1]];

  this.singleMovePathFinder.setupSingleMovePositionSets(this.position)
}

PlayerUnit.prototype.nullifyOptions = function(display) {
  this.prevPos = null;
  this.windowOptions = null;
  this.fightOptions = null;
  this.inTransit = false;

  this.singleMovePathFinder.clearAndUpdate(this.position);
}

PlayerUnit.prototype.renderMoveSpaces = function(sF, x, y, width, height) {
  this.singleMovePathFinder.renderSingleMovePositionSets(sF, x, y, width, height);
}

/* harmony default export */ __webpack_exports__["default"] = (PlayerUnit);


/***/ }),

/***/ "./units/playerUnits/roy/combatAnimations/royCombatAnimation.js":
/*!**********************************************************************!*\
  !*** ./units/playerUnits/roy/combatAnimations/royCombatAnimation.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_combatAnimation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/combatAnimation */ "./animations/combatAnimation.js");
/* harmony import */ var _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/spriteSequence/combatSprite */ "./animations/spriteSequence/combatSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");





function RoyCombatAnimation() {

  let sprite0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite0.png', 3, 6);
  let sprite1 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 46, 32, 46, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite.png', 3, 6);
  let sprite2 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 64, 42, 64, 42, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite2.png', 3, 6);
  let sprite3 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 64, 61, 64, 61, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite3.png', 3, 6);
  let sprite4 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 90, 52, 90, 52, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite4.png', 3, 4);
  let sprite5 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 110, 67, 110, 67, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite5.png', 3, 2);
  let sprite6 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 90, 35, 90, 35, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite6.png', 3, 7);
  let sprite7 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 140, 40, 140, 40, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite7.png', 3, 6);
  let sprite8 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 120, 47, 120, 47, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite8.png', 3, 6);
  let sprite9 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 90, 32, 90, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite9.png', 3, 6);
  let sprite10 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 90, 32, 90, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite10.png', 3, 5);
  let sprite11 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 90, 102, 90, 102, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite11.png', 3, 10);
  let sprite12 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_2__["default"](_createContext__WEBPACK_IMPORTED_MODULE_3__["c"], 90, 50, 90, 50, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite12.png', 3, 7);

  let spriteQueue = [
    sprite0, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6,
    sprite7, sprite8, sprite9, sprite10, sprite11, sprite12
  ];

  let positionAdjustment = {
    "6,0": [-2.9, 0],
    "6,1": [-2.9, 0],
    "6,2": [-2.9, 0],
    "6,3": [-2.9, 0],
    "6,4": [-2.9, 0],
    "6,5": [-2.9, 0],
    "6,6": [-2.9, 0],

    "7,0": [-2.9, 0],
    "7,1": [-2.9, 0],
    "7,2": [-2.9, 0],
    "7,3": [-2.9, 0],
    "7,4": [-2.9, 0],
    "7,5": [-2.9, 0],

    "8,0": [-2.9, 0],
    "8,1": [-2.9, 0],
    "8,2": [-2.9, 0],
    "8,3": [-2.9, 0],
    "8,4": [-2.9, 0],
    "8,5": [-2.9, 0],

    "9,0": [-2.9, 0],
    "9,1": [-2.9, 0],
    "9,2": [-2.9, 0],
    "9,3": [-2.9, 0],
    "9,4": [-2.9, 0],
    "9,5": [-2.9, 0],

    "10,0": [-2.9, 0],
    "10,1": [-2.9, 0],
    "10,2": [-2.9, 0],
    "10,3": [-2.9, 0],
    "10,4": [-2.9, 0],

    "11,0": [-2.7, 0],
    "11,1": [-2.5, 0],
    "11,2": [-2.3, 0],
    "11,3": [-2.1, 0],
    "11,4": [-1.9, 0],
    "11,5": [-1.7, 0],
    "11,6": [-1.5, 0],
    "11,7": [-1.3, 0],
    "11,8": [-1.1, 0],
    "11,9": [-0.9, 0],

    "12,0": [-0.7, 0],
    "12,1": [-0.5, 0],
    "12,2": [-0.39, 0],
    "12,3": [-0.39, 0],
    "12,4": [-0.39, 0],
    "12,5": [-0.39, 0],
    "12,6": [-0.39, 0]
  };

  let damageFrame = [6, 1];

  _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_1__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_3__["c"],
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

RoyCombatAnimation.prototype = Object.create(_animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
RoyCombatAnimation.prototype.constructor = RoyCombatAnimation;

/* harmony default export */ __webpack_exports__["default"] = (RoyCombatAnimation);


/***/ }),

/***/ "./units/playerUnits/roy/combatAnimations/royCritCombatAnimation.js":
/*!**************************************************************************!*\
  !*** ./units/playerUnits/roy/combatAnimations/royCritCombatAnimation.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/combatSprite */ "./animations/spriteSequence/combatSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function RoyCritCombatAnimation() {

  let sprite0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite0.png', 3, 6);
  let sprite1 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 46, 32, 46, 32, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite.png', 3, 6);
  let sprite2 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 64, 42, 64, 42, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCombatSprite2.png', 3, 6);
  let sprite3 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 64, 67, 64, 67, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite3.png', 2, 6);
  let sprite4 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 64, 74, 64, 74, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite4.png', 2, 6);
  let sprite5 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 64, 74, 64, 74, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite5.png', 2, 6);
  let sprite6 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 64, 68, 64, 68, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite6.png', 2, 8);
  let sprite7 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 64, 61, 64, 61, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite7.png', 2, 3);
  let sprite8 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 150, 55, 150, 55, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite8.png', 2, 7);
  let sprite9 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 150, 42, 150, 42, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite9.png', 1, 3);
  let sprite10 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 150, 76, 150, 76, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite10.png', 1, 5);
  let sprite11 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 100, 31, 100, 31, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite11.png', 2, 7);
  let sprite12 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 100, 36, 100, 36, 'units/playerUnits/roy/combatAnimations/spriteSheets/royCritSprite12.png', 4, 7);

  let spriteQueue = [
    sprite0, sprite1, sprite2, sprite3, sprite4, sprite5, sprite6,
    sprite7, sprite8, sprite9, sprite10, sprite11, sprite12
  ];

  let positionAdjustment = {
    "9,0": [0, 0.1],
    "9,1": [0, 0.1],
    "9,2": [0, 0.1],

    "12,1": [0, 0.03],
    "12,1": [-0.22, 0.055],
    "12,2": [-0.22, 0.055],
    "12,3": [-0.22, 0.055],
    "12,4": [-0.22, 0.055],
    "12,5": [-0.22, 0.055],
    "12,6": [-0.22, 0.055]
  };

  let damageFrame = [11, 0];

  _animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment,
    damageFrame
  );
}

RoyCritCombatAnimation.prototype = Object.create(_animations_spriteSequence_combatSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
RoyCritCombatAnimation.prototype.constructor = RoyCritCombatAnimation;

/* harmony default export */ __webpack_exports__["default"] = (RoyCritCombatAnimation);


/***/ }),

/***/ "./units/playerUnits/roy/combatAnimations/royDodgeAnimation.js":
/*!*********************************************************************!*\
  !*** ./units/playerUnits/roy/combatAnimations/royDodgeAnimation.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_dodgeSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/dodgeSprite */ "./animations/spriteSequence/dodgeSprite.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function RoyDodgeAnimation() {
  let desSprites0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 33, 70, 33, 'units/playerUnits/roy/combatAnimations/spriteSheets/royDodgeSpriteSheet.png', 3, 3);

  let spriteQueue = [desSprites0];

  let positionAdjustment = {
    '0,0': [0, 0.11],
    '0,1': [0, 0.11],
    '0,2': [0, 0.11]
  };

  let restFrame = [0, 1];

  _animations_spriteSequence_dodgeSprite__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment,
    restFrame
  );

}

RoyDodgeAnimation.prototype = Object.create(_animations_spriteSequence_dodgeSprite__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
RoyDodgeAnimation.prototype.constructor = RoyDodgeAnimation;

/* harmony default export */ __webpack_exports__["default"] = (RoyDodgeAnimation);


/***/ }),

/***/ "./units/playerUnits/roy/combatAnimations/royReceiveHitSprite.js":
/*!***********************************************************************!*\
  !*** ./units/playerUnits/roy/combatAnimations/royReceiveHitSprite.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations/spriteSequence/spriteSequence */ "./animations/spriteSequence/spriteSequence.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../createContext */ "./createContext.js");




function RoyReceiveHitAnimation() {
  const sprite0 = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 70, 43, 70, 43, 'units/playerUnits/roy/combatAnimations/spriteSheets/royReceiveHitSprite.png', 4, 1);
  const spriteQueue = [sprite0];
  const positionAdjustment = {};

  _animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"],
    spriteQueue,
    positionAdjustment
  );
  this.rendered = false;
}

RoyReceiveHitAnimation.prototype = Object.create(_animations_spriteSequence_spriteSequence__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
RoyReceiveHitAnimation.prototype.constructor = RoyReceiveHitAnimation;

RoyReceiveHitAnimation.prototype.render = function(row, col, sF) {
  const currentSprite = this.currentSprite();
  currentSprite.render(row, col, sF);
  this.update();
  if(this.queueIndex === 0 && currentSprite.frameIndex === 0 &&
    currentSprite.tickCount === 0) {
    this.rendered = true;
  }
}

RoyReceiveHitAnimation.prototype.update = function() {
  const sprite = this.currentSprite();
  if (sprite.frameIndex === sprite.numberOfFrames - 1 &&
    sprite.tickCount === sprite.ticksPerFrame) {
    this.updateQueueIndexAndSprite();
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RoyReceiveHitAnimation);


/***/ }),

/***/ "./units/playerUnits/roy/roy.js":
/*!**************************************!*\
  !*** ./units/playerUnits/roy/roy.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../createContext */ "./createContext.js");
/* harmony import */ var _combatAnimations_royCombatAnimation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./combatAnimations/royCombatAnimation */ "./units/playerUnits/roy/combatAnimations/royCombatAnimation.js");
/* harmony import */ var _combatAnimations_royCritCombatAnimation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./combatAnimations/royCritCombatAnimation */ "./units/playerUnits/roy/combatAnimations/royCritCombatAnimation.js");
/* harmony import */ var _combatAnimations_royDodgeAnimation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./combatAnimations/royDodgeAnimation */ "./units/playerUnits/roy/combatAnimations/royDodgeAnimation.js");
/* harmony import */ var _combatAnimations_royReceiveHitSprite__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./combatAnimations/royReceiveHitSprite */ "./units/playerUnits/roy/combatAnimations/royReceiveHitSprite.js");
/* harmony import */ var _unitStats_unitStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../unitStats/unitStats */ "./units/unitStats/unitStats.js");









function Roy(board, inventory, stats) {
  _playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"].call(
    this,
    stats,
    board,
    inventory,
    'Roy',
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 18, 18, 18, 18, "units/playerUnits/roy/mapSpriteSheets/royMapSpriteSheetBlankBackground.png", 6, 12),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 22, 20, 22, 20, "units/playerUnits/roy/mapSpriteSheets/royForwardWalkSpriteSheetRevise.png", 6, 6),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 21, 18, 21, 18, "units/playerUnits/roy/mapSpriteSheets/royBackwardsWalkSpriteSheet.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 34, 18, 34, 18, "units/playerUnits/roy/mapSpriteSheets/royRightWalkSpriteSheet.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 34, 18, 34, 18, "units/playerUnits/roy/mapSpriteSheets/royLeftWalkSpriteSheet.png", 8, 4),
    new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 253, 228, 18, 18, "units/playerUnits/roy/HPWindowImage/RoyMugshotZoom.jpg", 6, 1),
    new _combatAnimations_royCombatAnimation__WEBPACK_IMPORTED_MODULE_3__["default"](),
    new _combatAnimations_royCritCombatAnimation__WEBPACK_IMPORTED_MODULE_4__["default"](),
    new _combatAnimations_royDodgeAnimation__WEBPACK_IMPORTED_MODULE_5__["default"](),
    new _combatAnimations_royReceiveHitSprite__WEBPACK_IMPORTED_MODULE_6__["default"]()
  );
}

Roy.prototype = Object.create(_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
Roy.prototype.constructor = Roy;

Roy.prototype.defaultStats = function() {
  return new _unitStats_unitStats__WEBPACK_IMPORTED_MODULE_7__["default"](
    {
      level: 1,
      experience: 0,
      hp: 42,
      strength: 16,
      skill: 19,
      speed: 22,
      luck: 17,
      defense: 14,
      resistance: 7,
      move: 6,
      constitution: 8,
      hp_growth_rate: 80,
      strength_growth_rate: 40,
      skill_growth_rate: 50,
      speed_growth_rate: 40,
      luck_growth_rate: 60,
      defense_growth_rate: 25,
      resistance_growth_rate: 30,
      affinity: "wind"
    }
  );
}

/* harmony default export */ __webpack_exports__["default"] = (Roy);


/***/ }),

/***/ "./units/singleMovePathFinder/attackPositions.js":
/*!*******************************************************!*\
  !*** ./units/singleMovePathFinder/attackPositions.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");



function AttackPositions(board, unit) {
  this.board = board;
  this.isPlayerUnit = unit instanceof _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.attackRanges = unit.equippedWeapon.stats['range'];
  this.unit = unit;
  this.unitPosition = unit.position;

  this.positions = {};
}

AttackPositions.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

AttackPositions.prototype.clear = function() {
  this.positions = {};
}

//
AttackPositions.prototype.findPositions = function(validMovePositionsHash) {
  const maxRange = Math.max.apply(null, this.attackRanges);

  for(let idx = 0; idx < maxRange; idx++) {
    const seedSpaceFlag = idx === 0;
    this.iterateAttackSpace(validMovePositionsHash, seedSpaceFlag);
  }

  for(const position in this.positions) {
    if(this.unit.isCorrectDistance(position, validMovePositionsHash, this.attackRanges)) {
      delete this.positions[position];
    }
  }

  return this.positions;
}

AttackPositions.prototype.iterateAttackSpace = function(validMovePositionsHash, seedSpaceFlag) {
  const seedSpace = (seedSpaceFlag ? validMovePositionsHash : this.positions);
  for(const positionString in seedSpace) {
    const position = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["stringToPos"])(positionString);
    const adjAttackPositions = this.adjacentAttackablePositions(position, validMovePositionsHash);
    for(let idx = 0; idx < adjAttackPositions.length; idx++) {
      this.positions[adjAttackPositions[idx]] = true;
    }
  }
}


//

AttackPositions.prototype.adjacentAttackablePositions = function(position, validMovePositionsHash) {
  const adjPositions = this.adjacentPositionsList(position);
  const attackableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    const pos = adjPositions[i];
    const unitAtPos = this.board.space(pos).unit;
    if(validMovePositionsHash[pos] === undefined &&
       (unitAtPos === null ||
      unitAtPos instanceof(_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"]) != this.isPlayerUnit)) {
      attackableAdjPositions.push(pos);
    }
  }

  return attackableAdjPositions;
}


AttackPositions.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}


AttackPositions.prototype.render = function(sF, x, y, width, height) {
// Test to verify is working
Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["galileoHighlightSpaces"])(sF, x, y, width, height, this.positions, 'rgba(255, 0, 0, 0.2)');
}

/* harmony default export */ __webpack_exports__["default"] = (AttackPositions);


/***/ }),

/***/ "./units/singleMovePathFinder/bfsMazeSolver.js":
/*!*****************************************************!*\
  !*** ./units/singleMovePathFinder/bfsMazeSolver.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");



function BFSMazeSolver(board, unit) {
  this.board = board;
  this.unit = unit;
  this.isPlayerUnit = unit instanceof _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"];
  this.unitClass = unit.constructor.name;
  this.unitPosition = unit.position;

//TODO: substitute this and others with clear if works
  this.paths = {};
  this.potentialPositions = {};
  this.routePositions = null;
  this.foundNewPositionsFlag = false;
  this.numPositions = 0;
  this.steps = 0;
  this.endPos = null;
}

BFSMazeSolver.prototype.clear = function() {
  this.paths = {};
  this.potentialPositions = {};
  this.routePositions = null;
  this.foundNewPositionsFlag = false;
  this.numPositions = 0;
  this.steps = 0;
  this.endPos = null;
}

BFSMazeSolver.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

BFSMazeSolver.prototype.findPath = function(endPos) {
  this.paths[this.unitPosition] = null;
  this.steps = 1;
  this.endPos = endPos;
  this.foundNewPositionsFlag = true;

  while (true) {
    this.findMovesForOneMoreStep();

    if (!this.foundNewPositionsFlag) {return null;}
    this.steps += 1;
    if (this.paths[endPos] != undefined) {return this.routeList();}
  }

}

BFSMazeSolver.prototype.findMovesForOneMoreStep = function() {
  this.foundNewPositionsFlag = false;
  const prevPositionStrings = Object.keys(this.paths);
  const iterationMoves = {};

  for(let idx = 0; idx < prevPositionStrings.length; idx++) {
    this.findMoveableAdjPositions(prevPositionStrings[idx], iterationMoves);
  }
}

BFSMazeSolver.prototype.findMoveableAdjPositions = function(prevPositionString, iterationMoves) {
  const prevPosition = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["stringToPos"])(prevPositionString);
  const adjMoveablePositions = this.adjacentPositionsCanMoveThrough(prevPosition);
  for(let idx = 0; idx < adjMoveablePositions.length; idx++) {
    if (this.paths[adjMoveablePositions[idx]] === undefined) {
      this.handleTerrainBonus(
        adjMoveablePositions[idx],
        prevPosition,
        this.board.space(adjMoveablePositions[idx]),
        iterationMoves
      );
    }
  }
}

BFSMazeSolver.prototype.handleTerrainBonus = function(pos, prevPos, space, iterationMoves) {
  if (space.terrain === null) {
    this.appendPosition(pos, prevPos);
  } else if (this.potentialPositions[pos] === undefined) {
    this.potentialPositions[pos] = {remainingTerrainBonusCount: space.terrain.moveCost(this.unitClass) - 1, previousPos: prevPos};
  } else if (iterationMoves[pos] === undefined && this.potentialPositions[pos]['remainingTerrainBonusCount'] > 1) {
    this.potentialPositions[pos]['remainingTerrainBonusCount'] -= 1;
  } else if(iterationMoves[pos] === undefined && this.potentialPositions[pos]['remainingTerrainBonusCount'] <= 1) {
    this.appendPosition(pos);
  }
  this.foundNewPositionsFlag = true;
  iterationMoves[pos] = true;
}

BFSMazeSolver.prototype.appendPosition = function(position, prevPos = null) {
  prevPos = (prevPos === null ? this.potentialPositions[position]['previousPos'] : prevPos);
  this.paths[position] = prevPos;
  this.numPositions += 1;
}

BFSMazeSolver.prototype.adjacentPositionsCanMoveThrough = function(pos) {
  const adjPositions = this.adjacentPositionsList(pos);
  const moveableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    const adjPos = adjPositions[i];
    if(this._isTraversableSpace(adjPos) || Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["equivalentPositions"])(adjPos, this.endPos)) {
      moveableAdjPositions.push(adjPos);
    }
  }

  return moveableAdjPositions;
}

BFSMazeSolver.prototype._isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversableBoolean(this.isPlayerUnit);
}

BFSMazeSolver.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}



BFSMazeSolver.prototype.routeList = function() {
  const routePositionsList = [this.endPos];

  while (!Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["equivalentPositions"])(routePositionsList[routePositionsList.length - 1], this.unitPosition)) {
    const position = this.paths[routePositionsList[routePositionsList.length - 1]];
    routePositionsList.push(position);
  }

  this.routePositions = routePositionsList;
  return routePositionsList.reverse();
}

BFSMazeSolver.prototype.renderRouteSpaces = function(sF, x, y, width, height) {
  if(this.routePositions === null) return null;
  const topX = x/sF;
  const topY = y/sF;

  for(let i = 0; i < this.routePositions.length; i++) {


    let highlightPos = [this.routePositions[i][0] - topX, this.routePositions[i][1] - topY];
    Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["spaceHighlight"])(highlightPos, 'rgba(123, 104, 238, 0.4)', sF);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (BFSMazeSolver);


/***/ }),

/***/ "./units/singleMovePathFinder/moveThroughPositions.js":
/*!************************************************************!*\
  !*** ./units/singleMovePathFinder/moveThroughPositions.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");


function MoveThroughPositions(board, isPlayerUnit, unit) {
  this.board = board;
  this.isPlayerUnit = isPlayerUnit;
  this.unitPosition = unit.position;
  this.moveStat = unit.stats.move;
  this.unitClass = unit.constructor.name;

  this.positions = {};
  this.potentialPositions = {};
  this.potentialPosChangedFlag = false;
  this.numPositions = 0;
  this.steps = 0;
}

MoveThroughPositions.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

MoveThroughPositions.prototype.clear = function() {
  this.positions = {};
  this.potentialPositions = {};
  this.potentialPosChangedFlag = false;
  this.steps = 0;
}

//
MoveThroughPositions.prototype.findPositions = function() {
  this.positions[this.unitPosition] = 0;

  for(this.steps = 1; this.steps < this.moveStat + 1; this.steps++) {
    this.findPositionsForNextStep();
  }
  return this.positions;
}

MoveThroughPositions.prototype.findPositionsForNextStep = function() {
  this.potentialPosChangedFlag = false;
  const positionStrings = Object.keys(this.positions);
  const iterationMoves = {};

  for(let idx = 0; idx < positionStrings.length; idx++) {
    this.findMoveableAdjPositions(positionStrings[idx], iterationMoves);
  }
}

MoveThroughPositions.prototype.findMoveableAdjPositions = function(positionString, iterationMoves) {
  const position = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["stringToPos"])(positionString);
  const adjMoveablePositions = this.adjacentPositionsCanMoveThrough(position);
  for(let idx = 0; idx < adjMoveablePositions.length; idx++) {
    if (this.positions[adjMoveablePositions[idx]] === undefined) {
      this.handleTerrainBonus(
        adjMoveablePositions[idx],
        this.board.space(adjMoveablePositions[idx]),
        iterationMoves
      );
    }
  }
}

MoveThroughPositions.prototype.handleTerrainBonus = function(pos, space, iterationMoves) {
  if (space.terrain === null) {
    this.appendPosition(pos);
  } else if (this.potentialPositions[pos] === undefined) {
    this.potentialPositions[pos] = space.terrain.moveCost(this.unitClass) - 1;
    this.potentialPosChangedFlag = true;
  } else if (iterationMoves[pos] === undefined && this.potentialPositions[pos] > 1) {
    this.potentialPositions[pos] -= 1;
    this.potentialPosChangedFlag = true;
  } else if(iterationMoves[pos] === undefined && this.potentialPositions[pos] <= 1) {
    this.appendPosition(pos);
  }
  iterationMoves[pos] = true;
}

MoveThroughPositions.prototype.appendPosition = function(position) {
  this.positions[position] = this.steps;
  this.numPositions += 1;
}


//
MoveThroughPositions.prototype.adjacentPositionsCanMoveThrough = function(pos) {
  let adjPositions = this.adjacentPositionsList(pos);
  let moveableAdjPositions = [];

  for (let i = 0; i < adjPositions.length; i++) {
    let adjPos = adjPositions[i];
    if(this._isTraversableSpace(adjPos)) {
      moveableAdjPositions.push(adjPos);
    }
  }

  return moveableAdjPositions;
}

MoveThroughPositions.prototype._isTraversableSpace = function(pos) {
  return this.board.space(pos).isTraversableBoolean(this.isPlayerUnit);
}

MoveThroughPositions.prototype.adjacentPositionsList = function(pos) {
  const dimensions = this.board.dimensions;
  const spaces = [];

  if(pos[0] + 1 <= dimensions[0] - 1) spaces.push([pos[0] + 1, pos[1]]);
  if(pos[0] - 1 >= 0) spaces.push([pos[0] - 1, pos[1]]);
  if(pos[1] + 1 <= dimensions[1] - 1) spaces.push([pos[0], pos[1] + 1]);
  if(pos[1] - 1 >= 0) spaces.push([pos[0], pos[1] - 1]);

  return spaces;
}


MoveThroughPositions.prototype.render = function(sF, x, y, width, height) {
  // need to test this!
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["galileoHighlightSpaces"])(sF, x, y, width, height, this.positions, 'rgba(0, 0, 255, 0.3)');
}

/* harmony default export */ __webpack_exports__["default"] = (MoveThroughPositions);


/***/ }),

/***/ "./units/singleMovePathFinder/singleMovePathFinder.js":
/*!************************************************************!*\
  !*** ./units/singleMovePathFinder/singleMovePathFinder.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _moveThroughPositions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moveThroughPositions */ "./units/singleMovePathFinder/moveThroughPositions.js");
/* harmony import */ var _validMovePositions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validMovePositions */ "./units/singleMovePathFinder/validMovePositions.js");
/* harmony import */ var _attackPositions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attackPositions */ "./units/singleMovePathFinder/attackPositions.js");
/* harmony import */ var _bfsMazeSolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bfsMazeSolver */ "./units/singleMovePathFinder/bfsMazeSolver.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");







function SingleMovePathFinder(board, unit) {
  this.board = board;
  this.moveStat = unit.stats.move;
  this.isPlayerUnit = unit instanceof _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"];

  this.moveThroughPositions = new _moveThroughPositions__WEBPACK_IMPORTED_MODULE_1__["default"](board, this.isPlayerUnit, unit);
  this.validMovePositions = new _validMovePositions__WEBPACK_IMPORTED_MODULE_2__["default"](board, unit);
  this.attackPositions = new _attackPositions__WEBPACK_IMPORTED_MODULE_3__["default"](board, unit);

  this.bfsMazeSolver = new _bfsMazeSolver__WEBPACK_IMPORTED_MODULE_4__["default"](board, unit);
}

SingleMovePathFinder.prototype.clearAndUpdate = function(unitPosition) {
  this.clear();
  this.moveThroughPositions.update(unitPosition);
  this.validMovePositions.update(unitPosition);
  this.attackPositions.update(unitPosition);
  this.bfsMazeSolver.update(unitPosition);
}

SingleMovePathFinder.prototype.clear = function() {
  this.moveThroughPositions.clear();
  this.validMovePositions.clear();
  this.attackPositions.clear();
  this.bfsMazeSolver.clear();
}

SingleMovePathFinder.prototype.setupSingleMovePositionSets = function(unitPosition) {
  this.clearAndUpdate(unitPosition);
  const moveThrougPositionsHash = this.moveThroughPositions.findPositions();
  const validMovePositionsHash = this.validMovePositions.findPositions(moveThrougPositionsHash);
  const attackPositionsHash = this.attackPositions.findPositions(validMovePositionsHash);
}

SingleMovePathFinder.prototype.setupRoute = function(endPos) {
  return this.bfsMazeSolver.findPath(endPos);
}

SingleMovePathFinder.prototype.findSingleMoveAttackPosition = function(unitPosition, unitRanges) {
  this.setupSingleMovePositionSets(unitPosition, unitRanges);
  const playerUnitPositions = this.board.listOfUnitsObject(_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"]);
  for(const pos in playerUnitPositions) {
    if(this.attackPositions.positions[pos]) {
      return this.validMovePositions.selectAttackSetupSpace(pos, unitRanges);
    }
  }
  return unitPosition;
}

SingleMovePathFinder.prototype.findSeekAndDestroySingleTurnPosition = function(unitPosition, unitRanges) {
  const singleMoveAttackPosition = this.findSingleMoveAttackPosition(
    unitPosition, unitRanges
  );
  if(!Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_5__["equivalentPositions"])(unitPosition, singleMoveAttackPosition)) {
    return singleMoveAttackPosition;
  }

  const multiTurnRoute = this.findSeekAndDestroyMultiTurnRoute(unitPosition, unitRanges);
  if(Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_5__["equivalentPositions"])(unitPosition, multiTurnRoute)) return unitPosition;

  this.clearAndUpdate(unitPosition);
  this.setupSingleMovePositionSets(unitPosition);

  for(let i = multiTurnRoute.length - 1; i >= 0; i--){
    const position = multiTurnRoute[i];
    if(this.validMovePositions.positions[position] != undefined) {
      return position;
    }
  }
}

SingleMovePathFinder.prototype.findSeekAndDestroyMultiTurnRoute = function(unitPosition, unitRanges) {
  const playerUnitPositions = this.board.listOfUnitsObject(_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_0__["default"]);

  for(const positionString in playerUnitPositions) {
    const position = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_5__["stringToPos"])(positionString);
    this.bfsMazeSolver.clear();
    this.bfsMazeSolver.update(unitPosition);
    // debugger;
    const route = this.bfsMazeSolver.findPath(position);
    // debugger
    if(route !== null) return route;
  }

  return unitPosition;
}


SingleMovePathFinder.prototype.renderSingleMovePositionSets = function(sF, x, y, width, height) {
  this.moveThroughPositions.render(sF, x, y, width, height);
  this.attackPositions.render(sF, x, y, width, height);
  this.bfsMazeSolver.renderRouteSpaces(sF, x, y, width, height);
}

/* harmony default export */ __webpack_exports__["default"] = (SingleMovePathFinder);


/***/ }),

/***/ "./units/singleMovePathFinder/validMovePositions.js":
/*!**********************************************************!*\
  !*** ./units/singleMovePathFinder/validMovePositions.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");


function ValidMovePositions(board, unit) {
  this.board = board;
  this.unitPosition = unit.position;
  this.positions = {};
}

ValidMovePositions.prototype.update = function(unitPosition) {
  this.unitPosition = unitPosition;
}

ValidMovePositions.prototype.clear = function() {
  this.positions = {};
}

ValidMovePositions.prototype.findPositions = function(moveThroughPositionsHash) {
  for(const positionString in moveThroughPositionsHash) {
    const position = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["stringToPos"])(positionString);

    if(this.isValidMove(position)) {
      this.positions[position] = moveThroughPositionsHash[position];
    }
  }

  return this.positions;
}

ValidMovePositions.prototype.isValidMove = function(position) {
  if(!(this.board.space(position).unit === null ||
   Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["equivalentPositions"])(position, this.unitPosition))) {
    return false;
  }

  return true;
}

ValidMovePositions.prototype.selectAttackSetupSpace = function(attackPositionString, ranges) {
  const viablePositions = [];
  const attackPosition = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["stringToPos"])(attackPositionString);
  for(const positionString in this.positions) {
    const position = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["stringToPos"])(positionString);
    const dist = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["distance"])(position, attackPosition);
    if(ranges.includes(dist)) {
      viablePositions.push(position);
    }
  }

  const moveSpaceIndex = Math.floor(Math.random() * viablePositions.length);
  const pos = viablePositions[moveSpaceIndex];
  return pos;
}

/* harmony default export */ __webpack_exports__["default"] = (ValidMovePositions);


/***/ }),

/***/ "./units/unit.js":
/*!***********************!*\
  !*** ./units/unit.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Unit; });
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");
/* harmony import */ var _enemyUnits_enemyUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemyUnits/enemyUnit */ "./units/enemyUnits/enemyUnit.js");
/* harmony import */ var _playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _board_terrain_gate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../board/terrain/gate */ "./board/terrain/gate.js");
/* harmony import */ var _items_weapon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items/weapon */ "./items/weapon.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../createContext */ "./createContext.js");







function Unit(stats, board, inventory, name, mapSprite,
  forwardWalkSprite, backwardWalkSprite, rightWalkSprite,
  leftWalkSprite, hpWindowSprite, combatAnimation, critAnimation,
  dodgeAnimation, receiveHitAnimation) {
  if (!stats) stats = this.defaultStats();
  this.stats = stats;
  this.board = board;
  this.current_hp = this.stats['hp'];
  this.inventory = inventory;
  this.equippedWeapon = inventory.autoEquipWeapon();
  this.name = name;
  this.mapSprite = mapSprite;
  this.forwardWalkSprite = forwardWalkSprite;
  this.backwardWalkSprite = backwardWalkSprite;
  this.rightWalkSprite = rightWalkSprite;
  this.leftWalkSprite = leftWalkSprite;
  this.hpWindowSprite = hpWindowSprite;
  this.combatAnimation = combatAnimation;
  this.critAnimation = critAnimation;
  this.dodgeAnimation = dodgeAnimation;
  this.receiveHitAnimation = receiveHitAnimation
  this.position = null;
  this.actionTaken = false;
}

//rendering
Unit.prototype.render = function(displayWindow) {
  let sF = displayWindow.sF;
  let topX = displayWindow.x/sF;
  let topY = displayWindow.y/sF;
  let highlightPos = [this.position[0] - topX, this.position[1] - topY];


  if (this.moving) {
    this.movingAnimation.render(displayWindow);
    this.mapSprite.update();
  } else if (this.inTransit) {
    this.forwardWalkSprite.render(highlightPos[0], highlightPos[1], sF);
    this.mapSprite.update();
  } else {
    this.mapSprite.render(highlightPos[0], highlightPos[1], sF);

    if(this.actionTaken) {
      _createContext__WEBPACK_IMPORTED_MODULE_5__["c"].fillStyle = "rgba(128, 128, 128, 0.2)";
      _createContext__WEBPACK_IMPORTED_MODULE_5__["c"].fill();
    }
  }
}

//unit combat
Unit.prototype.fight = function(opposingUnit) {
  const newCombat = new Combat(this, opposingUnit);
  newCombat.initiateFight();
}

Unit.prototype.isInRange = function(opposingUnit) {
  const sep = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["distance"])(this.position, opposingUnit.position);

  return this.equippedWeapon.stats['range'].includes(sep);
}

//unit movement
Unit.prototype.move = function(pos) {
  this.board.space(this.position).unit = null;
  this.board.space(pos).unit = this;
  this.position = pos;
}

Unit.prototype.validMoveSpaces = function() {
  // if (this.__proto__.constructor === Roy || this.__proto__.constructor === Lyn) {
  // if (this instanceof(PlayerUnit)) {
    return this.singleMovePathFinder.validMovePositions.positions;
  // }
  // return this.movementSpace.validMovePos();
}

Unit.prototype.isCorrectDistance = function(key, moveSpaces, weaponRange) {
  let keyArray = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["stringToPos"])(key);
  for(let mSpace in moveSpaces) {
    let mSpaceArray = Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["stringToPos"])(key);
    if(weaponRange.includes(Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["distance"])(keyArray, mSpaceArray))) {
      return true;
    }
  }

  return false;
}

//AI movement selection

Unit.prototype.moveSelection = function() {
   if(this.behavior === 'idle') {
     return this.position;
   } else if(this.behavior === 'TWBS') {
      return this.singleMovePathFinder.findSingleMoveAttackPosition(
        this.position,
        this.equippedWeapon.stats['range']
      );
   } else if(this.behavior === 'seekAndDestroy') {
     return this.singleMovePathFinder.findSeekAndDestroySingleTurnPosition(
       this.position,
       this.equippedWeapon.stats['range']
     );
   }
}

Unit.prototype.selectPlayerUnitInRange = function() {
  let playerUnitPositionsInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit instanceof(_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_2__["default"]) &&
        this.equippedWeapon.stats['range'].includes(Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["distance"])(this.position, [row, col]))) {
      playerUnitPositionsInRange.push([row, col]);
    }
  }.bind(this));

  if (playerUnitPositionsInRange.length > 0) {
    let attackIndex = Math.floor(Math.random() * playerUnitPositionsInRange.length);
    let pos = playerUnitPositionsInRange[attackIndex];
    return this.board.grid[pos[0]][pos[1]].unit;
  }

  return null;
}

// Possibly non-AI methods that may need to be sorted into their own
// methods later

Unit.prototype.isOppInRange = function() {
  let ranges = this.equippedWeapon.stats['range'];
  let oppUnitPositions = [];
  let oppUnitsPosInRange = [];

  this.board.boardIterator(function(row, col){
    if (this.board.grid[row][col].unit &&
      this.board.grid[row][col].unit instanceof(_enemyUnits_enemyUnit__WEBPACK_IMPORTED_MODULE_1__["default"])) {
      oppUnitPositions.push([row, col]);
    }
  }.bind(this));

  for(let i = 0; i < oppUnitPositions.length; i++) {
    if (ranges.includes(Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_0__["distance"])(oppUnitPositions[i], this.position))) {
      oppUnitsPosInRange.push(oppUnitPositions[i]);
    }
  }

  return oppUnitsPosInRange;
}

Unit.prototype.postMoveWindowOptions = function() {
  const options = [];
  if (this.isOppInRange().length > 0) {
    options.push('Fight');
  }
  if (this.board.space(this.position).terrain instanceof _board_terrain_gate__WEBPACK_IMPORTED_MODULE_3__["default"]) {
    options.push('Seize')
  }
  options.push('Wait');

  return options;
}

//Unit Combat Stats
Unit.prototype.attackSpeed = function() {
  if(this.stats['constitution'] >= this.equippedWeapon.stats['weight']) {
    return this.stats['speed'];
  }

  return this.stats['speed'] - (this.equippedWeapon.stats['weight'] - this.stats['constitution']);
}

Unit.prototype.isRepeatedAttack = function(opposingUnit) {
  return (this.attackSpeed() > opposingUnit.attackSpeed() + 3);
}

Unit.prototype.hitRate = function() {
  return (this.equippedWeapon.stats['ht'] + (this.stats['skill'] * 2) + Math.floor(this.stats['luck'] / 2));
}

Unit.prototype.avoid = function() {
  return (this.attackSpeed() * 2) + this.stats['luck'];
}

Unit.prototype.accuracy = function(opposingUnit) {
  let calculatedAccuracy = this.hitRate() - opposingUnit.avoid();

  if(calculatedAccuracy >= 0 && calculatedAccuracy < 100) {
    return calculatedAccuracy;
  } else if(calculatedAccuracy < 0) {
    return 0;
  } else if(calculatedAccuracy >= 100) {
    return 100;
  }
}

Unit.prototype.attack = function() {
  return this.stats['strength'] + this.equippedWeapon.stats['mt'];
}

Unit.prototype.defensePower = function(opposingUnit) {
  if(opposingUnit.equippedWeapon instanceof(_items_weapon__WEBPACK_IMPORTED_MODULE_4__["PhysicalWeapon"])) {
    return this.stats['defense'];
  } else if(opposingUnit.equippedWeapon.prototype instanceof(_items_weapon__WEBPACK_IMPORTED_MODULE_4__["MagicalWeapon"])) {
    return this.stats['resistance'];
  }
}

Unit.prototype.damage = function(opposingUnit) {
  let outputDamage = this.attack() - opposingUnit.defensePower(this);
  if(outputDamage > 1) {
    return outputDamage;
  } else {
    return 1;
  }
}

Unit.prototype.criticalRate = function() {
  return this.equippedWeapon.stats['critical'] + Math.floor(this.stats['skill'] / 2);
}

Unit.prototype.criticalEvade = function() {
  return this.stats['luck'];
}

Unit.prototype.criticalChance = function(opposingUnit) {
  let chance = this.criticalRate() - opposingUnit.criticalEvade();
  if(chance >= 0 && chance <= 100) {
    return chance;
  } else if(chance < 0) {
    return 0;
  } else if(chance > 100) {
    return chance;
  }
}

// export default Unit;


/***/ }),

/***/ "./units/unitStats/unitStats.js":
/*!**************************************!*\
  !*** ./units/unitStats/unitStats.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function UnitStats(options) {
  this.level = options["level"];
  this.experience = options["experience"];
  this.hp = options["hp"];
  this.strength = options["strength"];
  this.skill = options["skill"];
  this.speed = options["speed"];
  this.luck = options["luck"];
  this.defense = options["defense"];
  this.resistance = options["resistance"];
  this.move = options["move"];
  this.constitution = options["constitution"];
  this.hp_growth_rate = options["hp_growth_rate"];
  this.strength_growth_rate = options["strength_growth_rate"];
  this.skill_growth_rate = options["skill_growth_rate"];
  this.speed_growth_rate = options["speed_growth_rate"];
  this.luck_growth_rate = options["luck_growth_rate"];
  this.defense_growth_rate = options["defense_growth_rate"];
  this.resistance_growth_rate = options["resistance_growth_rate"];
  this.affinity = options["affinity"];
}

/* harmony default export */ __webpack_exports__["default"] = (UnitStats);


/***/ }),

/***/ "./window/gameWindow.js":
/*!******************************!*\
  !*** ./window/gameWindow.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// parameters
 // rx - reference x
 // ry - reference y
 // hd - horizontal displacement
 // vd - vertical displacement
 // dx - width
 // dy - height


function GameWindow(rx, ry, hd, vd, dx, dy) {
  let sF = 52;
  let attributes = this.setDimensions(rx, ry, hd, vd, dx, dy, sF);
  this.x = attributes[0];
  this.y = attributes[1];
  this.dx = attributes[2]
  this.dy = attributes[3];

}

GameWindow.prototype.setDimensions = function(sF) {
  return [this.unit.position[0], this.unit.position[1]];
}

GameWindow.prototype.render = function(sF) {
}

/* harmony default export */ __webpack_exports__["default"] = (GameWindow);


/***/ }),

/***/ "./window/interactiveWindow/combatInformationWindow.js":
/*!*************************************************************!*\
  !*** ./window/interactiveWindow/combatInformationWindow.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interactiveWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactiveWindow */ "./window/interactiveWindow/interactiveWindow.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../createContext */ "./createContext.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");




function CombatInformationWindow(unit, options) {
  _interactiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, options[0][0], options[0][1], 2, 1.5, 150, 135, options);
  this.centerX = this.x + (this.dx / 2);
  this.unit = unit;
}

CombatInformationWindow.prototype = Object.create(_interactiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
CombatInformationWindow.prototype.constructor = CombatInformationWindow;

CombatInformationWindow.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  let x = (rx + hd + (dx / sF)) * sF <= window.innerWidth ? (rx + hd) * sF : (rx - hd - (dx/sF)) * sF;
  let y = (ry - vd) * sF >= 0 ? (ry - vd) * sF : (ry + vd) * sF;
  return [x, y, dx, dy];
}

CombatInformationWindow.prototype.updateCoordinates = function(windowCursorPos) {
  let pos = this.options[this.cursorPos];
  let coord = this.setDimensions(pos[0], pos[1], 2, 1.5, 150, 135, 52);
  this.x = coord[0];
  this.y = coord[1];
  this.centerX = this.x + (this.dx / 2);
}

CombatInformationWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  let pos = this.options[this.cursorPos];
  const eastX = (displayWindow.x + (displayWindow.width / 2) -  sF * 7.22);
  const westX = (displayWindow.x + (displayWindow.width / 2) +  (sF * 7.22) - this.dx);
  const x = displayWindow.eastOrWest(this.unit.position) === 'east' ? (westX) : (eastX);
  let topX = (x) - displayWindow.x;
  // let topY = (displayWindow.y + (displayWindow.height / 2) - (sF * 5.5));
  let topY = (displayWindow.height / 2) - (sF * 4.75);
  const centerX = topX + (this.dx/2);

  let opponent = this.unit.board.grid[pos[0]][pos[1]].unit;

  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = "rgba(0, 255, 255, 1)";
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(topX, topY, this.dx, 35);
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(topX, topY + 35, 50, 65);

  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = "rgba(204, 204, 0, 1)";
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(topX + 50, topY + 35, 50, 65);

  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = "rgba(255, 0, 0, 1)";
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(topX + 100, topY + 35, 50, 65);
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(topX, topY + 100, this.dx, 35);

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(this.unit.name, 'center', centerX, topY + 15);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(this.unit.equippedWeapon.stats['name'], 'center', centerX, topY + 30);
  this.renderStatRow(this.unit.current_hp, opponent.current_hp, 'HP', centerX, topY + 50, this.dx);

  if (opponent.equippedWeapon.stats['range'].includes(Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["distance"])(opponent.position, this.unit.position))) {
    this.renderStatRow(this.unit.damage(opponent),
    opponent.damage(this.unit), 'MT', centerX, topY + 65, this.dx);
    this.renderStatRow(this.unit.accuracy(opponent),
    opponent.accuracy(this.unit), 'HT', centerX, topY + 80, this.dx);
    this.renderStatRow(this.unit.criticalChance(opponent),
    opponent.criticalChance(this.unit), 'CT', centerX, topY + 95, this.dx);

  } else {
    this.renderStatRow(this.unit.damage(opponent),
    '--', 'MT', centerX, topY + 65, this.dx);
    this.renderStatRow(this.unit.accuracy(opponent),
    '--', 'HT', centerX, topY + 80, this.dx);
    this.renderStatRow(this.unit.criticalChance(opponent),
    '--', 'CT', centerX, topY + 95, this.dx);
    Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(opponent.equippedWeapon.stats['name'], 'center', centerX, topY + 115);
    Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(opponent.name, 'center', centerX, topY + 130);
  }
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(opponent.equippedWeapon.stats['name'], 'center', centerX, topY + 115);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(opponent.name, 'center', centerX, topY + 130);

  if (this.unit.isRepeatedAttack(opponent)) {
    Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])('x2', 'right', topX + this.dx, topY + 30);
  }
  if (opponent.isRepeatedAttack(this.unit)) {
    Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])('x2', 'right', topX + this.dx, topY + 115);
  }
  const oppPosGalileo = [opponent.position[0] - displayWindow.x/sF, opponent.position[1] - displayWindow.y/sF]
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["highlight"])(oppPosGalileo, 'rgba(255, 0, 255, 0.2)', sF); //blue
}

CombatInformationWindow.prototype.renderStatRow = function(unitStat, oppStat, statName, centerX, y, width) {
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(`${unitStat}`, 'left', centerX - (width/ 2), y);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(`${statName}`, 'center', centerX, y);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderText"])(`${oppStat}`, 'right', centerX + (width/ 2), y);
}

/* harmony default export */ __webpack_exports__["default"] = (CombatInformationWindow);


/***/ }),

/***/ "./window/interactiveWindow/interactiveWindow.js":
/*!*******************************************************!*\
  !*** ./window/interactiveWindow/interactiveWindow.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameWindow */ "./window/gameWindow.js");


function InteractiveWindow(rx, ry, hd, vd, dx, dy, options) {
  _gameWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, rx, ry, hd, vd, dx, dy);
  this.options = options;
  this.cursorPos = 0;
}

InteractiveWindow.prototype = Object.create(_gameWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
InteractiveWindow.prototype.constructor = InteractiveWindow;

InteractiveWindow.prototype.scrollCursor = function(button) {
  if (button == "down" && this.cursorPos < this.options.length - 1) {
    this.cursorPos += 1;
  } else if(button == "up" && this.cursorPos > 0) {
    this.cursorPos -= 1;
  }
}

InteractiveWindow.prototype.returnOption = function() {
  return this.options[this.cursorPos];
}

/* harmony default export */ __webpack_exports__["default"] = (InteractiveWindow);


/***/ }),

/***/ "./window/interactiveWindow/mainMenuWindowOne.js":
/*!*******************************************************!*\
  !*** ./window/interactiveWindow/mainMenuWindowOne.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interactiveWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactiveWindow */ "./window/interactiveWindow/interactiveWindow.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../animations/sprite */ "./animations/sprite.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../createContext */ "./createContext.js");
/* harmony import */ var _animations_coordinateSprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/coordinateSprite */ "./animations/coordinateSprite.js");





function MainMenuWindowOne() {
  let options = ['New Game']//, 'Credits']
  _interactiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, 0, 0, 0, 0, innerWidth, 100, options);
  this.color = "rgba(65, 105, 225, 1)";
  this.logoSprite = new _animations_sprite__WEBPACK_IMPORTED_MODULE_1__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 240, 160, 240, 160, "window/InteractiveWindow/FE_titlescreen_logo.png", 1, 1);

  this.backgroundSpriteTwo = new _animations_coordinateSprite__WEBPACK_IMPORTED_MODULE_3__["default"](
    //238, 319
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 239, 150, 600/2.22, 450/2.5, "window/InteractiveWindow/FE_7_story_scenes.png", 1,
    [[490, 330]]
  );

  this.textOpacity = 0;
}

MainMenuWindowOne.prototype = Object.create(_interactiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
MainMenuWindowOne.prototype.constructor = MainMenuWindowOne;

MainMenuWindowOne.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  // innerWidth;
  // let centerX = innerWidth / 2;
  let centerX = (45*15)/2;

  let xf = centerX - 100;
  let yf = 300;
  let dxf = 200;
  let dyf = 60;
  return [xf, yf, dxf, dyf];
}

MainMenuWindowOne.prototype.render = function(sF) {
  this.backgroundSpriteTwo.render(7, 9, 45);
  if (this.backgroundSpriteTwo.coordinatesList[0][1] < 490) {
    this.backgroundSpriteTwo.coordinatesList[0][1] += 0.15;
  } else if(this.textOpacity < 1) {
    this.textOpacity = this.textOpacity + 0.01
    drawStroked(`Press Enter`, 290, 400, this.textOpacity);
  } else {
    drawStroked(`Press Enter`, 290, 400, this.textOpacity);
  }
  this.logoSprite.render(7, 5.2, 45);

}

function drawStroked(text, x, y, opacity) {
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].font = "20px Serif"
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].strokeStyle = 'black';
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].lineWidth = 7;
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].strokeText(text, x, y);
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].fillStyle = `rgba(255, 255, 255, ${opacity})`;
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"].fillText(text, x, y);
}

/* harmony default export */ __webpack_exports__["default"] = (MainMenuWindowOne);


/***/ }),

/***/ "./window/interactiveWindow/unitPostMovePhaseWindow.js":
/*!*************************************************************!*\
  !*** ./window/interactiveWindow/unitPostMovePhaseWindow.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interactiveWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interactiveWindow */ "./window/interactiveWindow/interactiveWindow.js");
/* harmony import */ var _units_unit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../units/unit */ "./units/unit.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../createContext */ "./createContext.js");





function UnitPostMovePhaseWindow(unit) {
  this.unit = unit;
  let options = unit.postMoveWindowOptions();
  _interactiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, unit.position[0], unit.position[1], 2,
    unit.position[1], 2, (options.length * 0.5) + 0.2, options);
  this.color = "rgba(65, 105, 225, 1)";
}

UnitPostMovePhaseWindow.prototype = Object.create(_interactiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
UnitPostMovePhaseWindow.prototype.constructor = UnitPostMovePhaseWindow;

UnitPostMovePhaseWindow.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  return [(rx + hd) * sF, ry * sF, dx * sF, dy * sF];
}

UnitPostMovePhaseWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const eastX = (displayWindow.x + (displayWindow.width / 2) -  sF * 6.5);
  const westX = (displayWindow.x + (displayWindow.width / 2) +  (sF * 6.5) - this.dx);
  const x = displayWindow.eastOrWest(this.unit.position) === 'east' ? (westX) : (eastX);
  let topX = (x) - displayWindow.x;
  // let topY = ((displayWindow.height/4)) - displayWindow.y;
  let topY = ((displayWindow.height/4));


  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["preScaledHighlight"])(topX, topY, this.dx, this.dy, this.color);

  for(let i = 0; i < this.options.length; i++) {
    Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("20px Arial", 'left', 'rgba(255, 255, 225, 1)',
    `${this.options[i]}`, topX, topY + ((1 + i) * sF * 0.5));

    if (this.cursorPos === i) {
      _createContext__WEBPACK_IMPORTED_MODULE_3__["c"].fillStyle = "rgba(255, 223, 0, 0.5)";
      _createContext__WEBPACK_IMPORTED_MODULE_3__["c"].fillRect(topX, topY + ((0.1) + (i * 0.5)) * sF , this.dx, sF * 0.5);
    }
  }
}

/* harmony default export */ __webpack_exports__["default"] = (UnitPostMovePhaseWindow);


/***/ }),

/***/ "./window/nullWindow.js":
/*!******************************!*\
  !*** ./window/nullWindow.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameWindow */ "./window/gameWindow.js");


function NullWindow() {

}

NullWindow.prototype = Object.create(_gameWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
NullWindow.prototype.constructor = NullWindow;

NullWindow.prototype.render = function(sF, windowCursorPos) {

}

/* harmony default export */ __webpack_exports__["default"] = (NullWindow);


/***/ }),

/***/ "./window/passiveWindow/combatAnimationBackgroundWindow.js":
/*!*****************************************************************!*\
  !*** ./window/passiveWindow/combatAnimationBackgroundWindow.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _passiveWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveWindow */ "./window/passiveWindow/passiveWindow.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../createContext */ "./createContext.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");




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

}

CombatAnimationBackgroundWindow.prototype = Object.create(_passiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
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
  this.renderNameWindow('rgba(0, 0, 142, 1)', this.pu.name, 200, 275);
  this.renderNameWindow('rgba(255, 0, 0, 1)', this.eu.name, -200 - 150, -275);
}

CombatAnimationBackgroundWindow.prototype.renderNameWindow = function(color,
  unitName, xDisplacement, nameXCoord) {
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = color;
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(this.halfWidth + xDisplacement, this.y + 20, 150, 50);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'center', 'rgba(255, 255, 255, 1)',
    unitName, this.halfWidth + nameXCoord, this.y + 50);
}

CombatAnimationBackgroundWindow.prototype.renderStatWindows = function() {

  this.renderStatWindow('rgba(0, 0, 142, 1)', 238, this.pu, this.eu);
  this.renderStatWindow('rgba(255, 0, 0, 1)', -238 - 100, this.eu, this.pu);
}

CombatAnimationBackgroundWindow.prototype.renderStatWindow = function(color, deltaX, attacker, defender) {
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = color;
  let y = 340;
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(this.halfWidth + deltaX, y, 100, 50);

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `HIT`, this.halfWidth + deltaX, y + 15);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `DMG`, this.halfWidth + deltaX, y + 30);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 255, 1)',
    `CRT`, this.halfWidth + deltaX, y + 45);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.accuracy(defender)}`, this.halfWidth + deltaX + 100, y + 15);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.damage(defender)}`, this.halfWidth + deltaX + 100, y + 30);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 255, 1)',
    `${attacker.criticalChance(defender)}`, this.halfWidth + deltaX + 100, y + 45);
}

CombatAnimationBackgroundWindow.prototype.renderCentralDelineator = function() {
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = 'rgba(0, 0, 0, 1)';
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(this.halfWidth - 1, 360, 2, 90);
}

CombatAnimationBackgroundWindow.prototype.renderWeaponWindows = function() {
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = 'rgba(255, 248, 220, 1)';
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(this.halfWidth + 1, 360, 400 - 1, 90);

  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillStyle = 'rgba(255, 248, 220, 1)';
  _createContext__WEBPACK_IMPORTED_MODULE_1__["c"].fillRect(this.halfWidth - 300 - 100, 360, 400 - 1, 90);
}

CombatAnimationBackgroundWindow.prototype.renderWeaponNames = function() {
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 255 1)',
    `${this.pu.equippedWeapon.stats['name']}`, this.halfWidth + 50, 380);

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.eu.equippedWeapon.stats['name']}`, this.halfWidth - 50, 380);
}

CombatAnimationBackgroundWindow.prototype.renderHPWindows = function() {
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 255 1)',
   `${this.playerHP}`, this.halfWidth + 50, 420);

   Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 255 1)',
    `${this.enemyHP}`, this.halfWidth - 50, 420);
}

CombatAnimationBackgroundWindow.prototype.modifyHP = function(defender, newHP) {
  if (defender === this.pu) {
    this.playerHP = newHP;
  } else {
    this.enemyHP = newHP;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (CombatAnimationBackgroundWindow);


/***/ }),

/***/ "./window/passiveWindow/gameFinishedWindow.js":
/*!****************************************************!*\
  !*** ./window/passiveWindow/gameFinishedWindow.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _animations_coordinateSprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../animations/coordinateSprite */ "./animations/coordinateSprite.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../createContext */ "./createContext.js");
/* harmony import */ var _animations_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations/sprite */ "./animations/sprite.js");





function GameFinishedWindow() {
  this.dx = 45 * 2;
  this.dy = 45 * 1;

  this.backgroundSpriteOne = new _animations_coordinateSprite__WEBPACK_IMPORTED_MODULE_0__["default"](
    _createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 118, 79, 118, 79, "window/InteractiveWindow/FE_6_story_scenes.png", 1,
    [[4, 3]]
  );

  this.scrollSprite = new _animations_sprite__WEBPACK_IMPORTED_MODULE_3__["default"](_createContext__WEBPACK_IMPORTED_MODULE_2__["c"], 480, 320, 480*0.5, 320*0.5, "window/InteractiveWindow/fe_6_scroll_you_win.png", 1, 1);
}

GameFinishedWindow.prototype.render = function(displayWindow) {
  this.backgroundSpriteOne.render(6.8, 6, 45);
  this.scrollSprite.render(6.9, 10.5, 45);

  const sF = displayWindow.sF;
  const northY = ( (displayWindow.height / 2) -  sF * 1);
  let topX = (displayWindow.width / 2) -  (sF * 1);
  let topY = (northY) - displayWindow.y;

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["preScaledHighlight"])(topX, topY, this.dx, this.dy, 'rgba(0,255,0,0.9)');

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["renderTextWithFont"])('20px Arial', 'center', 'rgba(0,0,0,1)',
    'You win!!', topX + (1 * sF), topY + 0.5 *sF);
}

/* harmony default export */ __webpack_exports__["default"] = (GameFinishedWindow);


/***/ }),

/***/ "./window/passiveWindow/passiveWindow.js":
/*!***********************************************!*\
  !*** ./window/passiveWindow/passiveWindow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameWindow */ "./window/gameWindow.js");


function PassiveWindow(rx, ry, hd, vd, dx, dy) {
  _gameWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, rx, ry, hd, vd, dx, dy);
}

PassiveWindow.prototype = Object.create(_gameWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
PassiveWindow.prototype.constructor = PassiveWindow;

PassiveWindow.prototype.setDimensions = function(rx, ry, hd, vd, dx, dy, sF) {
  let x = (rx + hd + dx) * sF <= window.innerWidth ? (rx + hd) * sF : (rx - hd - dx) * sF;
  let y = (ry - vd) * sF >= 0 ? (ry - vd) * sF : (ry + vd) * sF;

  return [x, y, dx * sF, dy * sF];
}

/* harmony default export */ __webpack_exports__["default"] = (PassiveWindow);


/***/ }),

/***/ "./window/passiveWindow/terrainWindow.js":
/*!***********************************************!*\
  !*** ./window/passiveWindow/terrainWindow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _passiveWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveWindow */ "./window/passiveWindow/passiveWindow.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");



function TerrainWindow(space) {
  let terrain = space.terrain;
  _passiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, space.position[0], space.position[1], 2, 2, 2, 1.4);
  this.name = terrain.terrainName();
  this.position = space.position;
  this.defenseBonus = terrain.defenseBonus();
  this.avoidBonus = terrain.avoidBonus();
  this.color = "rgba(0, 255, 255, 0.7)";
}

TerrainWindow.prototype = Object.create(_passiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
TerrainWindow.prototype.constructor = TerrainWindow;

TerrainWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const eastX = ((displayWindow.width / 2) -  sF * 7);
  const westX = ((displayWindow.width / 2) +  (sF * 7) - this.dx);
  const topX = displayWindow.eastOrWest(this.position) === 'east' ? (westX) : (eastX);
  const topY = (displayWindow.height / 2) + (sF * 3);


  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["preScaledHighlight"])(topX, topY, this.dx, this.dy, this.color);
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["renderTextWithFont"])("20px Arial", 'center', 'rgba(255, 255, 225, 1)',
  this.name, topX + (this.dx / 2), topY + (0.5 * sF));
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 225, 1)',
  'DEF', topX, topY + (1 * sF));
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 225, 1)',
  this.defenseBonus, topX + (this.dx), topY + (1 * sF));
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["renderTextWithFont"])("15px Arial", 'left', 'rgba(255, 255, 225, 1)',
  'AVO', topX, topY + (1.5 * sF));
  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_1__["renderTextWithFont"])("15px Arial", 'right', 'rgba(255, 255, 225, 1)',
  this.avoidBonus, topX + (this.dx), topY + (1.5 * sF));
}

/* harmony default export */ __webpack_exports__["default"] = (TerrainWindow);


/***/ }),

/***/ "./window/passiveWindow/unitMapWindow.js":
/*!***********************************************!*\
  !*** ./window/passiveWindow/unitMapWindow.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _passiveWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passiveWindow */ "./window/passiveWindow/passiveWindow.js");
/* harmony import */ var _units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../units/playerUnits/playerUnit */ "./units/playerUnits/playerUnit.js");
/* harmony import */ var _miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../miscellaneousFunctions/MiscellaneousFunctions */ "./miscellaneousFunctions/MiscellaneousFunctions.js");
/* harmony import */ var _createContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../createContext */ "./createContext.js");





function UnitMapWindow(unit) {
  _passiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].call(this, unit.position[0], unit.position[1], 2, 1.5, 4.76, 1.73);
  this.unit = unit;
  this.name = unit.name;
  this.current_hp = unit.current_hp;
  this.hp = unit.stats['hp'];
  this.color = unit instanceof(_units_playerUnits_playerUnit__WEBPACK_IMPORTED_MODULE_1__["default"]) ? "rgba(0, 255, 255, 0.7)" : "rgba(255, 0, 0, 0.7)";
}

UnitMapWindow.prototype = Object.create(_passiveWindow__WEBPACK_IMPORTED_MODULE_0__["default"].prototype);
UnitMapWindow.prototype.constructor = UnitMapWindow;

UnitMapWindow.prototype.render = function(displayWindow) {
  const sF = displayWindow.sF;
  const northY = (displayWindow.y + (displayWindow.height / 2) -  sF * 4.75);
  const southY = (displayWindow.y + (displayWindow.height / 2) +  (sF * 4.75) - this.dy);
  const y = (displayWindow.northOrSouth(this.unit.position) === 'north' && displayWindow.eastOrWest(this.unit.position) === 'east') ? (southY) : (northY);
  let topX = (displayWindow.width / 2) -  (sF * 7.25);
  let topY = (y) - displayWindow.y;

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["preScaledHighlight"])(topX, topY, this.dx, this.dy, this.color);

  this.unit.hpWindowSprite.renderFromCoordinates(
    topX, topY, 2 * sF, 2 * sF
  );

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["renderTextWithFont"])('20px Arial', 'left', 'rgba(0,0,0,1)',
    this.name, topX + (2 * sF), topY + 0.5 *sF);
  _createContext__WEBPACK_IMPORTED_MODULE_3__["c"].fillText(`HP: ${this.current_hp} / ${this.hp}`,
    topX + (2 * sF), topY + 1 * sF);

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["preScaledHighlight"])(topX + (2 * sF), (1.2 * sF) + topY, 3.5 * sF,
   0.5 * sF, "rgba(0, 0, 0, 0.9)");

  Object(_miscellaneousFunctions_MiscellaneousFunctions__WEBPACK_IMPORTED_MODULE_2__["preScaledHighlight"])(topX + (2 * sF), topY + (1.3 * sF),
  3.5 * sF *(this.current_hp / this.hp), 0.3 * sF,
   "rgba(255, 223, 0, 1)");
}

/* harmony default export */ __webpack_exports__["default"] = (UnitMapWindow);


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map