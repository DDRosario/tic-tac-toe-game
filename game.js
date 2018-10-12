/*****************************************/
//    A Very Simple Tic Tac Toe Game     //
/*****************************************/
let board = [[], [], []]; //will be a matrix 3x3

const printer = board => {
  console.log(JSON.stringify(board));
  // board.map(row => )
};

function checkWin(board) {
  let result = false;
  // board.forEach(row =)
}
function checkRow(row) {
  let result = true;
  //could be x, o, or undefined
  let first = row[0];
  let filtered = row.filter(spot => {
    return !!spot && spot === first;
  });
  console.log('this is filter', filtered);
  if (filtered.length !== row.length) {
    return false;
  }
  // if ()
  // if (row[0] === row[1] && !row[0]) return false; //if undefined return false
  // if
}
function checkCol(col) {}
// function checkDiag ()

console.log(checkRow([1, 2, 1, undefined]));
