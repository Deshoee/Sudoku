const { log } = require('console');
const fs = require('fs');

function read() {
  /**
   * Прочесть файл puzzles.txt в кодировке 'utf-8' и вернуть эти данные из функции
   */
  const readFile = (fs.readFileSync('./puzzles.txt', 'utf8'));
  const newStr = readFile.trim().split('\n')[process.argv[2] - 1];
  const sudoku = [];

  for (let i = 0; i < newStr.length - 1; i += 9) {
    sudoku.push(Array.from(newStr.slice(i, i + 9)));
    // console.log(sudoku);
    for (let i = 0; i < sudoku.length; i++) {
      for (let j = 0; j < sudoku[i].length; j++) {
        if (sudoku[i][j] === '-') {
          sudoku[i][j] = '-';
        } else { sudoku[i][j] = Number(sudoku[i][j]); }
      }
    }
  }

  return sudoku;
}
// console.table(read());

function solve(arr) {
  /**
   * Принимает игровое поле в том формате, в котором его вернули из функции read.
   * Возвращает игровое поле после попытки его решить.
   */
  const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof arr[i][j] === 'string') {
        
        for (const num of allNumbers) {
          if (!arr[i].includes(num) && !arr[j].includes(num)) {
            arr[i][j] = num;
          }
        }
      }
    }


  }
  return arr;
}
console.table(solve(read()));

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
