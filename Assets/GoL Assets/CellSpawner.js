/* Make all the cell sprites. Note that the position values are hard coded,
 * which is lazy programming. We use a prefab object as our model, and then
 * turn the profab off, because it isn't actually part of the board.
 */


var board : CurrentGameBoard;
var cellPrefab : Cell;

function Awake () {
  for (var i = 0; i <  board.height; i++) {
    for (var j = 0; j <  board.width; j++) {
      cell = Instantiate(cellPrefab, new Vector3((-26 + i), (15-j), 0), Quaternion.identity);
      cell.name = "Cell " + i + "," + j;
      cell.i = i;
      cell.j = j;
      cell.transform.parent = this.transform;
      cell.gameObject.SetActive(true);
	}
  }
  cellPrefab.gameObject.SetActive(false);
}
