// Game Constants
const PLAYER_X = 'X';
const PLAYER_O = 'O';
const EMPTY_CELL = '';

// Game Variables
let currentPlayer = PLAYER_X;
let gameBoard = Array(9).fill(EMPTY_CELL);

// Function to make a move
function makeMove(index) {
  if (gameBoard[index] === EMPTY_CELL) {
    gameBoard[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerHTML = currentPlayer;
    document.getElementsByClassName('cell')[index].style.pointerEvents = 'none';
    if (checkWinner()) {
      alert(`Player ${currentPlayer} wins!`);
      resetBoard();
    } else if (gameBoard.indexOf(EMPTY_CELL) === -1) {
      alert('It\'s a tie!');
      resetBoard();
    } else {
      currentPlayer = currentPlayer === PLAYER_X ? PLAYER_O : PLAYER_X;
    }
  }
}

// Function to check if there is a winner
function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let combination of winningCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] !== EMPTY_CELL &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }

  return false;
}

// Function to reset the game board
function resetBoard() {
  currentPlayer = PLAYER_X;
  gameBoard = Array(9).fill(EMPTY_CELL);
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = EMPTY_CELL;
    cells[i].style.pointerEvents = 'auto';
  }
}

