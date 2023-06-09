function findEmptyCells(board) {
  let emptyCells = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === null) {
        emptyCells.push([i, j]);
      }
    }
  }
  return emptyCells;
}

export { findEmptyCells };
