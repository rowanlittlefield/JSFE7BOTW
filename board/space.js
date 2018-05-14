function Space(position) {
  this.position = position;
  this.unit = null;
  this.terrain = null;
  this.sprite = null;
}

Space.prototype.render = function(row, col, sF) {
}

Space.prototype.isTraversable = function(unit) {
  // return ((this.unit === null ||
  //   this.unit instanceof(PlayerUnit) === unit instanceof(PlayerUnit)) &&
  //   !(this.terrain instanceof(Wall)));

  return (!(this.terrain instanceof(Wall)) && (this.unit === null ||
    this.unit instanceof(PlayerUnit) === unit instanceof(PlayerUnit)));
}
