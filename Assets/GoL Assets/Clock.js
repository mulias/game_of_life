/* The game clock keeps track of real world time, and updates the
 * board state once every 30 seconds.
 */

var board : CurrentGameBoard;

private var cycleLength = .5;
private var cycleLengthSoFar;
var running;

function Start () {
  running = false;
  cycleLengthSoFar = 0;
}

// if the clock is running, keep time
// every time we reach cycleLength, update the
// board with one cycle, reset the counter
function Update () {
  if (running) {
    cycleLengthSoFar += Time.deltaTime;
    if (cycleLengthSoFar > cycleLength) {
      cycleLengthSoFar = 0;
      board.UpdateBoard();
    }
  }
  else {
    cycleLengthSoFar = 0;
  }
}

// turn the clock on and off
function toggleRunning () {
  running = !running;
  cycleLengthSoFar = 0;
}

// turn clock on
function run () {
  running = true;
  cycleLengthSoFar = 0;
}

// turn clock off
function stop () {
  running = false;
  cycleLengthSoFar = 0;
}
