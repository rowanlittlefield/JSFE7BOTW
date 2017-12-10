function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //newDisplay.render();
  //newDisplay.render(50);
  newChapter.display.render(50);
}
