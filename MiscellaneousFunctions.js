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
  c.beginPath();
  c.lineWidth="1";
  c.strokeStyle="black"; // Green path
  c.moveTo(row * sF, col * sF);
  c.lineTo(row * sF + sF, col * sF);
  c.stroke();
  c.lineTo(row * sF + sF, col * sF + sF);
  c.stroke();
  c.lineTo(row * sF, col * sF + sF);
  c.stroke();
  c.lineTo(row * sF, col * sF);
  c.stroke();
}

function renderText(text, alignment, centerX, y) {
  c.font = "15px Arial";
  c.textAlign = alignment;
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText(text, centerX, y);
}

function renderTextWithFont(font, alignment, fill, text, centerX, y) {
  c.font = font;
  c.textAlign = alignment;
  c.fillStyle = fill;
  c.fillText(text, centerX, y);
}

function highlight(pos, color, sF) {
  c.fillStyle = color;
  c.fillRect(pos[0] * sF, pos[1] * sF, sF, sF);
}

function preScaledHighlight(x, y, dx, dy, color) {
  c.fillStyle = color;
  c.fillRect(x, y, dx, dy);
}

function identicalSets(setOne, setTwo) {
  for(element in setOne) {
    if (setTwo[element] === null) { return false; }
  }
  for(element in setTwo) {
    if (setOne[element] === null) { return false; }
  }
  return true;
}
