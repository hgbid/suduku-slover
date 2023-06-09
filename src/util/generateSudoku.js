const generateSudoku = (side, missing) => {
  const board = Array(side)
    .fill()
    .map(() => Array(side).fill(null));
  const base = Math.sqrt(side);
  const pattern = (r, c) =>
    (base * (r % base) + Math.floor(r / base) + c) % side;

  const nums = shuffle(Array.from({ length: side }, (_, i) => i + 1));
  for (let r = 0; r < side; r++) {
    for (let c = 0; c < side; c++) {
      board[r][c] = nums[pattern(r, c)];
    }
  }

  const missingNumbers = missing;
  let cellsSetToNull = 0;
  while (cellsSetToNull < missingNumbers) {
    const row = randomInt(0, side - 1);
    const col = randomInt(0, side - 1);
    if (board[row][col] !== null) {
      board[row][col] = null;
      cellsSetToNull++;
    }
  }
  return board;
};

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

export { generateSudoku };
