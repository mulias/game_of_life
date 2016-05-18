var clock       : DTClock;
var board       : WorkingCurrentGameBoard;
var otherBoard  : BrokenGameBoard;
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

// if the clock is paused we can modify the board
// when the user clicks a cell, change the board value
// and update the cell color
function OnMouseDown() {
  board.cellLivingToggle(i,j);
  otherBoard.cellLivingToggle(i,j);
  setColor();
}