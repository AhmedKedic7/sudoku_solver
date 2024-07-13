function solveSudoku() {
    let board = getBoard();
    if (solve(board)) {
        displaySolution(board);
    } else {
        alert("No solution exists for the given Sudoku.");
    }
}
function resetSudoku() {
    const cells = document.querySelectorAll('.sudoku input');
    cells.forEach(cell => {
        cell.value = '';
    });
}

function getBoard() {
    let board = [];
    const cells = document.querySelectorAll('.sudoku input');
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        if (!board[row]) board[row] = [];
        board[row][col] = cell.value ? parseInt(cell.value) : 0;
    });
    return board;
}

function displaySolution(board) {
    const cells = document.querySelectorAll('.sudoku input');
    cells.forEach((cell, index) => {
        const row = Math.floor(index / 9);
        const col = index % 9;
        cell.value = board[row][col];
    });
}


function solve(board) {
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(board, row, col, num)) {
                        board[row][col] = num;
                        if (solve(board)) {
                            return true;
                        }
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function isValid(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
        if (board[row][x] === num || board[x][col] === num || board[Math.floor(row / 3) * 3 + Math.floor(x / 3)][Math.floor(col / 3) * 3 + x % 3] === num) {
            return false;
        }
    }
    return true;
}