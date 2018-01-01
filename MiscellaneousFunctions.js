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

function highlight(pos, color, sF) {
  c.fillStyle = color;
  c.fillRect(pos[0] * sF, pos[1] * sF, sF, sF);
}
