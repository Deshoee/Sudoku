const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  // process.argv[2];
  const sudokuStrings = fs.readFileSync('puzzles.txt', 'utf-8');

  const rows = sudokuStrings.trim().split('\n')[process.argv[2] - 1];
  const sudokuBoard = [];
  for (let f = 0; f < rows.length; f += 9) {
    sudokuBoard.push(Array.from(rows.slice(f, f + 9)));
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
const sudokuBoard = read();
console.table(sudokuBoard);

function solve(sudokuRes) {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < sudokuRes.length; i += 1) {
    for (let j = 0; j < sudokuRes[i].length; j += 1) {
      if (sudokuRes[i][j] === '-') {
        for (let n = 0; n < number.length; n += 1) {
          for (let el = j; el < sudokuRes[i].length - j; el += 1) {
            sudokuRes[i][j] = number[n] 
            // if (number[n] === el) {
            //   number[n] = number[n + 1];
            // } else {
            //   el = number[n];
            // }
          }
        }
      }

      // sudokuRes[i][j] = Math.floor(Math.random() * 9);
    }
  }
  return sudokuRes;
}
//   return sudokuRes;
/**
 * Принимает игровое поле в том формате, в котором его вернули из функции read.
 * Возвращает игровое поле после попытки его решить.
 */

console.table(solve(sudokuBoard));
function isSolved() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Возвращает булевое значение — решено это игровое поле или нет.
   */
}

function prettyBoard() {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции solve.
   * Выводит в консоль/терминал судоку.
   * Подумай, как симпатичнее его вывести.
   */
}
