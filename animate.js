function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  newChapter.display.render(52, newChapter.phase);
  // fightSprite.renderFromCoordinates(310, 100, 52);

}
