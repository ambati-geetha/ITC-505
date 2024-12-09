const boardSize = 5; // 5x5 grid
const gameBoard = document.getElementById("game-board");
const resetButton = document.getElementById("reset-button");

// Initialize game board
function createBoard() {
  gameBoard.innerHTML = ""; // Clear the board
  for (let i = 0; i < boardSize * boardSize; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    if (Math.random() < 0.5) {
      square.classList.add("is-off"); // Randomly toggle squares
    }
    square.addEventListener("click", () => toggleLights(i));
    gameBoard.appendChild(square);
  }
}

// Toggle the clicked square and its neighbors
function toggleLights(index) {
  const squares = document.querySelectorAll(".square");
  const toggle = (i) => {
    if (i >= 0 && i < squares.length) {
      squares[i].classList.toggle("is-off");
    }
  };

  const row = Math.floor(index / boardSize);
  const col = index % boardSize;

  // Toggle the clicked square
  toggle(index);
  // Toggle neighbors (up, down, left, right)
  if (row > 0) toggle(index - boardSize); // Up
  if (row < boardSize - 1) toggle(index + boardSize); // Down
  if (col > 0) toggle(index - 1); // Left
  if (col < boardSize - 1) toggle(index + 1); // Right

  checkWin();
}

// Check if all lights are off
function checkWin() {
  const squares = document.querySelectorAll(".square");
  const isWin = Array.from(squares).every((square) =>
    square.classList.contains("is-off")
  );
  if (isWin) {
    alert("You win!");
  }
}

// Reset the game
resetButton.addEventListener("click", createBoard);

// Start the game
createBoard();
