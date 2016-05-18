/* Extra game board. Never used directly, but used by the primary game board to
 * temporarily save values
 */

var currentBoard : CurrentGameBoard;

// set the size of the game board.
var height;
var width;

// unityscript doesn't have a good way to declase 2d arrays,
// so we're going to use a kind of ugly workaround -- make
// a generic array, then fill it with boolean arrays.
var cells = new Array();

// fill the cells array with width number of arrays that
// are each of size height
function Awake () {

  height = currentBoard.height;
  width  = currentBoard.width;

  for (var i = 0; i < height; i++) {
    cells[i] = new boolean[height];
    for (var j = 0; j < width; j++) {
      cells[i][j] = false;
    }
  }
}
