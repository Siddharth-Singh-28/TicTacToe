const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector(".status");
const restartBtn = document.querySelector(".restart-btn");

/* ===== AUDIO FILES (WAV) ===== */
const clickSound = new Audio("sounds/winSound.wav");
const winSound = new Audio("sounds/click.wav");

/* ===== GAME STATE ===== */
let currentPlayer = "X";
let gameActive = true;
let boardState = ["", "", "", "", "", "", "", "", ""];

/* ===== WINNING COMBINATIONS ===== */
const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

/* ===== HANDLE CELL CLICK ===== */
function handleCellClick(e) {
  const cell = e.target;
  const index = cell.dataset.index;

  if (boardState[index] !== "" || !gameActive) return;

  boardState[index] = currentPlayer;
  cell.textContent = currentPlayer;

  // Play click sound
  clickSound.currentTime = 0;
  clickSound.play();

  checkResult();
}

/* ===== CHECK WIN OR DRAW ===== */
function checkResult() {
  let winningCombo = null;

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;

    if (
      boardState[a] &&
      boardState[a] === boardState[b] &&
      boardState[a] === boardState[c]
    ) {
      winningCombo = combo;
      break;
    }
  }

  if (winningCombo) {
    statusText.textContent = `Player ${currentPlayer} wins! 🎉`;
    gameActive = false;

    // Play win sound
    winSound.currentTime = 0;
    winSound.play();

    // Highlight winning cells
    winningCombo.forEach(index => {
      cells[index].classList.add("win");
    });

    return;
  }

  if (!boardState.includes("")) {
    statusText.textContent = "It's a Draw 🤝";
    gameActive = false;
    return;
  }

  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.textContent = `Player ${currentPlayer}'s turn`;
}

/* ===== RESTART GAME ===== */
function restartGame() {
  currentPlayer = "X";
  gameActive = true;
  boardState = ["", "", "", "", "", "", "", "", ""];
  statusText.textContent = "Player X's turn";

  cells.forEach(cell => {
    cell.textContent = "";
    cell.classList.remove("win");
  });
}

/* ===== EVENT LISTENERS ===== */
cells.forEach((cell, index) => {
  cell.dataset.index = index;
  cell.addEventListener("click", handleCellClick);
});

restartBtn.addEventListener("click", restartGame);
