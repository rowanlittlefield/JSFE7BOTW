function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, 20 * 52);
  newChapter.display.render(52, newChapter.phase);
}
