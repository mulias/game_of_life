/* Each cell on the screen. The value of the cell (living/dead) is saved on the
 * game board, so the purpose of Cell is to update the color of the cell to
 * match the board, and register mouse clicks.
 */

var clock       : Clock;
var board       : CurrentGameBoard;
private var objRenderer : Renderer;
var i = 0;
var j = 0;

function Start () {
  objRenderer = gameObject.GetComponent.<Renderer>();
}

// every update make sure cell is the right color
function Update () {
  setColor();
}

// update the cell's color to match the game board
function setColor () {
  if (board.cellLiving(i,j)) {
    objRenderer.material.color = Color.black;
  }
  else {
    objRenderer.material.color = Color.white;
  }
}

// when the user clicks a cell, change the board value
// and update the cell color
function OnMouseDown() {
  board.cellLivingToggle(i,j);
  setColor();
}
