# Sudoku Solver

This project is a web-based Sudoku solver that uses the backtracking algorithm to solve Sudoku puzzles. The project includes an HTML interface for entering Sudoku puzzles, a JavaScript implementation of the Sudoku solver, and CSS for styling the interface.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Backtracking Algorithm](#backtracking-algorithm)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Contributing](#contributing)
- [License](#license)

## Features

- User-friendly interface to input Sudoku puzzles.
- Uses the backtracking algorithm to solve Sudoku puzzles.
- Provides an option to reset the puzzle.

## Usage

1. Open the `index.html` file in a web browser.
2. Enter the Sudoku puzzle into the grid. Use numbers 1-9 to fill the cells, leaving empty cells for unknowns.
3. Click the **Solve** button to solve the puzzle.
4. Click the **Reset** button to clear the grid and enter a new puzzle.

## Backtracking Algorithm

This project uses the backtracking algorithm to solve the Sudoku puzzle. The backtracking algorithm is a depth-first search algorithm used to find solutions by trying partial solutions and then abandoning them if they are not suitable.

### Steps of the Backtracking Algorithm

1. **Find an Empty Cell**: Look for an empty cell in the grid.
2. **Try a Number**: Place a number from 1 to 9 in the empty cell.
3. **Check Validity**: Check if the number is valid in the current cell according to Sudoku rules (no duplicate in row, column, and 3x3 sub-grid).
4. **Recursively Solve**: Recursively attempt to solve the rest of the grid with this number in place.
5. **Backtrack**: If placing the current number does not lead to a solution, reset the cell and try the next number.
6. **Repeat**: Continue the process until the grid is completely filled.
