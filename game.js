/*****************************************/
//    A Very Simple Tic Tac Toe Game     //
/*****************************************/
let board = [[1, 1, 2], [2, 2, 1], [1, 2, 1]]; //will be a matrix 3x3

const printer = board => {
  console.log(JSON.stringify(board));
};

function checkWin(board) {
  let result = false;
  let arrayOfIndex = [];
  let checkedRows = board.filter((row, i) => {
    arrayOfIndex.push(i);
    checkRow(row);
  });
  if (checkedRows.length > 0) {
    return true;
  }
  let rotated = [];
  arrayOfIndex.forEach(index => {
    rotated.push(
      board.map(row => {
        return row[index];
      })
    );
  });
  let checkedCols = rotated.filter(col => {
    return checkRow(col);
  });
  if (checkedCols.length > 0) {
    return true;
  }
  let diags = board.map((row, i) => {
    return row[i];
  });
  let otherIndex = board.length;
  let otherWay = board.map(row => row[--otherIndex]);
  if (checkRow(diags) || checkRow(otherWay)) {
    return true;
  }
  return false;
}
function checkRow(row) {
  let first = row[0];
  let filtered = row.filter(spot => {
    return !!spot && spot === first;
  });
  if (filtered.length !== row.length) {
    return false;
  } else return true;
}
// function placeMove(piece, location)

console.log(checkWin(board));
console.log('hello');
