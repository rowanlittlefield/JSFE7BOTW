import { c } from '../createContext';

export function distance(pos1, pos2) {
  let dr = Math.abs(pos1[0] - pos2[0]);
  let dc = Math.abs(pos1[1] - pos2[1]);
  return (dr + dc);
}

export function stringToPos(stringPos) {
  let stringArr = stringPos.split(',');
  return [parseInt(stringArr[0]), parseInt(stringArr[1])]
}

export function includePosition(array, pos) {
  for(let i = 0; i < array.length; i++) {
    if (array[i][0] === pos[0] && array[i][1] === pos[1]) {
      return true;
    }
  }
  return false;
}

export function equivalentPositions(posOne, posTwo) {
  return posOne[0] === posTwo[0] && posOne[1] === posTwo[1];
}

export function randomNumberFromOneTo(upperLimit) {
  return Math.floor((Math.random() * upperLimit) + 1)
}

export function renderSquare(row, col, sF) {
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

export function renderText(text, alignment, centerX, y) {
  c.font = "15px Arial";
  c.textAlign = alignment;
  c.fillStyle = 'rgba(255, 255, 225, 1)';
  c.fillText(text, centerX, y);
}

export function renderTextWithFont(font, alignment, fill, text, centerX, y) {
  c.font = font;
  c.textAlign = alignment;
  c.fillStyle = fill;
  c.fillText(text, centerX, y);
}

export function highlight(pos, color, sF) {
  c.fillStyle = color;
  c.fillRect(pos[0] * sF, pos[1] * sF, sF, sF);
}

export function spaceHighlight(pos, color, sF) {
  c.fillStyle = color;
  c.fillRect((pos[0] + 0.05) * sF, (pos[1] + 0.05) * sF, (1 - 0.05) * sF, (1 - 0.05) * sF);
}

export function highlightSpaces(spaces, board, color, sF) {
  for(const space in spaces) {
    const pos = stringToPos(space);
    spaceHighlight(pos, color, sF);
  }
}

export function galileoHighlightSpaces(sF, x, y, width, height, spaces, color) {
  const topX = x/sF;
  const topY = y/sF;

  for(const space in spaces) {
    const pos = stringToPos(space);
    const highlightPos = [pos[0] - topX, pos[1] - topY];
    spaceHighlight(highlightPos, color, sF);
  }

}

export function preScaledHighlight(x, y, dx, dy, color) {
  c.fillStyle = color;
  c.fillRect(x, y, dx, dy);
}
