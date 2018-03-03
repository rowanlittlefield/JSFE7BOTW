function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, 20 * 52);
  // 20 * 52
  newChapter.display.render(52, newChapter.phase);
  // fightSprite.render(6, 4.5, 52);
  // combatAni.render();
}
