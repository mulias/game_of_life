var clock          : DTClock;
var brokenBoard    : BrokenGameBoard;
var workingBoard   : WorkingCurrentGameBoard;
var playButtonText : UI.Text;

function togglePlay () {
  if (clock.running) {
    clock.stop();
    playButtonText.text = "Play";
  }
  else {
    clock.run();
    playButtonText.text = "Pause";
  }
}

function stepBoards () {
  brokenBoard.UpdateBoard();
  workingBoard.UpdateBoard();
}

function resetBoards () {
  brokenBoard.reset();
  workingBoard.reset();
  playButtonText.text = "Play";
}