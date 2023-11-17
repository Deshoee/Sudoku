const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  // process.argv[2];
  const sudokuStrings = fs.readFileSync('puzzles.txt', 'utf-8');

  const rows = sudokuStrings.trim().split('\n')[process.argv[2] - 1];
  const sudokuBoard = [];
  for (let i = 0; i < rows.length; i += 9) {
    sudokuBoard.push(Array.from(rows.slice(i, i + 9)));
    for (let i = 0; i < sudokuBoard.length; i++) {
      for (let j = 0; j < sudokuBoard[i].length; j++) {
        if (sudokuBoard[i][j] === '-') {
          sudokuBoard[i][j] = '-';
        } else {
          sudokuBoard[i][j] = Number(sudokuBoard[i][j]);
        }
      }
    }
  }

  return sudokuBoard;
}
// console.log(read());

function solve(sudokuBoard) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */

  if (solve(sudokuBoard) === true) {
    return matrix;
  }
  return 'NO SOLUTION';

  const UNASSIGNED = 0;

  function solve(sudokuBoard) {
    let row = 0;
    let col = 0;
    let checkBlankSpaces = false;

    for (row = 0; row < sudokuBoard.length; row++) {
      for (col = 0; col < sudokuBoard[row].length; col++) {
        if (sudokuBoard[row][col] === UNASSIGNED) {
          checkBlankSpaces = true;
          break;
        }
      }
      if (checkBlankSpaces === true) {
        break;
      }
    }

    if (checkBlankSpaces === false) {
      return true;
    }

    for (let num = 1; num <= 9; num++) {
      if (isSafe(sudokuBoard, row, col, num)) {
        sudokuBoard[row][col] = num;

        if (solve(sudokuBoard)) {
          return true;
        }

        sudokuBoard[row][col] = UNASSIGNED;
      }
    }
    return false;
  }
}

function isSafe(sudokuBoard, row, col, num) {
  return (
    !usedInRow(sudokuBoard, row, num) &&
    !usedInCol(sudokuBoard, col, num) &&
    !usedInBox(sudokuBoard, row - (row % 3), col - (col % 3), num)
  );
}

function usedInRow(sudokuBoard, row, num) {
  for (let col = 0; col < sudokuBoard.length; col++) {
    if (sudokuBoard[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInCol(sudokuBoard, col, num) {
  for (let row = 0; row < sudokuBoard.length; row++) {
    if (sudokuBoard[row][col] === num) {
      return true;
    }
  }
  return false;
}

function usedInBox(sudokuBoard, boxStartRow, boxStartCol, num) {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (sudokuBoard[row + boxStartRow][col + boxStartCol] === num) {
        return true;
      }
    }
  }
  return false;
}

sudokuBoard1= read();
console.table(solve(sudokuBoard1))


//   const [i, j] = emptyCell;
//   for (let num = 1; num <= 9; num++) {
//     const numStr = num.toString();

//     if (istrueMove(sudokuBoard, i, j, numStr)) {
//       sudokuBoard[i][j] = numStr;
//       if (solve(sudokuBoard)) {
//         return sudokuBoard;
//       }
//     }
//     sudokuBoard[i][j] = emptyCell;
//   }

//   return false;
// }

// function findEmptyCell(sudokuBoard) {
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (sudokuBoard[i][j] === '-') {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// function istrueMove(sudokuBoard, i, j, num) {
//   return (
//     !usedInRow(sudokuBoard, j, num) &&
//     !usedInCol(sudokuBoard, i, num) &&
//     !usedInBox(sudokuBoard, j - (j % 3), i - (i % 3), num)
//   );
// }

// function usedInRow(sudokuBoard, j, num) {
//   for (let i = 0; j < sudokuBoard.length; i++) {
//     if (sudokuBoard[j][i] === num) {
//       return true;
//     }
//   }
//   return false;
// }

// function usedInCol(sudokuBoard, i, num) {
//   for (let j = 0; j < sudokuBoard.length; j++) {
//     if (matrix[j][i] === num) {
//       return true;
//     }
//   }
//   return false;
// }

// function usedInBox(sudokuBoard, boxStartRow, boxStartCol, num) {
//   for (let j = 0; j < 3; j++) {
//     for (let i = 0; i < 3; i++) {
//       if (sudokuBoard[j + boxStartRow][i + boxStartCol] === num) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.table(solve(sudokuBoard))

function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */

  function prettyBoard() {
    /**
     * Принимает игровое поле в том формате, в котором его вернули из функции solve.
     * Выводит в консоль/терминал судоку.
     * Подумай, как симпатичнее его вывести.
     */
  }
}
