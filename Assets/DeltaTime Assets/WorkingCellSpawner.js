var board      : WorkingCurrentGameBoard;
var cellPrefab : WorkingCell;

function Awake () {
  for (var i = 0; i <  board.height; i++) {
    for (var j = 0; j <  board.width; j++) {
      cell = Instantiate(cellPrefab, new Vector3((-22 + i), (11-j), 0), Quaternion.identity);
      cell.name = "Cell " + i + "," + j;
      cell.i = i;
      cell.j = j;
      cell.transform.parent = this.transform;
      cell.gameObject.SetActive(true);
	}
  }
  cellPrefab.gameObject.SetActive(false);
}