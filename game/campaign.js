function Campaign(display) {
  this.display = display;
  this.chapterQueue = this.setupChapterQueue();
  this.currentChapter = null;
}

Campaign.prototype.setupChapterQueue = function() {
  return [new ChapterOne(52)];
}

Campaign.prototype.play = function() {
  this.currentChapter = this.chapterQueue.shift();
  this.currentChapter.play(display);
}
