/* functions for the game buttons.
 */

var clock          : Clock;
var board          : CurrentGameBoard;
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

function resetBoard () {
  board.reset();
  playButtonText.text = "Play";
}
