var clock : DTClock;

// set the size of the game board.
var height = 20;

// unityscript doesn't have a good way to declare 2d arrays,
// so we're going to use a kind of ugly workaround -- make
// a generic array, then fill it with boolean arrays.
var cells = new Array();

// fill the cells array with height number of arrays that
// are each of size width
function Awake () {
  for (var i = 0; i < height; i++) {
    cells[i] = new boolean[height];
    for (var j = 0; j < width; j++) {
      cells[i][j] = false;
    }
  }
}

// now we have a game board, with dimensions height*width!
// we can access cell at row i, column j with cells[i][j]
// here's what the grid looks like by i,j index:
// 0,0  0,1  0,2  ...  0,w
// 1,0  1,1  1,2  ...  1,w
// ...  ...  ...  ...  ...
// h,0  h,1  h,2  ...  h,w

// check each cell and update the board once
// we save the next value for each cell to the nextBoard,
// and then after checking all cells we copy over the new
// cell values
function UpdateBoard () {
  // check each cell, save its next value
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      var live = cells[i][j];
      var pop = neighborPopulation(i,j);
      // live, time to die
      if (live && pop != 2 && pop != 3) {
        cells[i][j] = false;
      }
      // dead, time to live
      else if (!live && pop == 3) {
        cells[i][j] = true;
      }
      // otherwise don't change
    }
  }
}

function neighborPopulation (i : int, j : int) : int {
  // this gets a bit arcane, sorry about that. We want the 8 cells around the i,j cell. 
  // cells in the top row have row inex t, middle have index i, bottom have index b
  // cells in the left col have col index l, middle have index j, right have index r
  // so the cells we want are:
  // t,l  t,j  t,r 
  // i,l   *   i,r
  // b,l  b,j  b,r
  // the reason for the extra layer of abstraction is to check for wrapping on rows
  // and cols. This bit uses turnary operators. turnary operator syntax takes the form:
  // var a = (test) ? return this if test true : return this if test false
  var t = (i == 0)        ? height-1 : i-1;
  var b = (i == height-1) ? 0        : i+1;
  var l = (j == 0)        ? width-1  : j-1;
  var r = (j == width-1)  ? 0        : j+1;

  var live = 0;

  if (cells[t][l]) { live++; };
  if (cells[t][j]) { live++; };
  if (cells[t][r]) { live++; };
  if (cells[i][l]) { live++; };
  if (cells[i][r]) { live++; };
  if (cells[b][l]) { live++; };
  if (cells[b][j]) { live++; };
  if (cells[b][r]) { live++; };

  return live;
}

function cellLiving (i : int, j : int) {
  return cells[i][j];
}

function cellLivingToggle (i : int, j : int) {
  cells[i][j] = !cells[i][j];
}

function reset () {
  clock.stop();
  for (var i = 0; i < height; i++) {
    for (var j = 0; j < width; j++) {
      cells[i][j] = false;
    }
  }
}