import ChapterOne from '@/chapter/chapter_one';

function Campaign(display, frameSource) {
  this.display = display;
  this.frameSource = frameSource;
  this.chapterQueue = this.setupChapterQueue(display, frameSource);
  this.currentChapter = null;
}

Campaign.prototype.setupChapterQueue = function(display, frameSource) {
  return [new ChapterOne(this.display, frameSource, 52)];
}

Campaign.prototype.play = function() {
  this.currentChapter = this.chapterQueue.shift();
  this.currentChapter.play(this.display, this.frameSource);
}

Campaign.prototype.receiveControllerInput = function(button) {
  this.currentChapter.receiveInput(button);
}

export default Campaign;
