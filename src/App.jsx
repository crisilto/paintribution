import { useState } from 'react';
import './App.css';

const CONTRIBUTION = [
  { number: 1, color: "#0D2A20" },
  { number: 2, color: "#063F24" },
  { number: 3, color: "#26A641" },
  { number: 4, color: "#39D353" }
];

const ROWS = 7;
const COLS = 53;

function App() {
  const [grid, setGrid] = useState(Array(ROWS).fill().map(() => Array(COLS).fill(0)));

  const handleClick = (row, col) => {
    setGrid(prevGrid => {
      const newGrid = prevGrid.map(row => [...row]);
      newGrid[row][col] = (newGrid[row][col] + 1) % (CONTRIBUTION.length + 1); 
      return newGrid;
    });
  };

  const getColor = (clicks) => {
    if (clicks === 0) return '#161B22'; 
    const contribution = CONTRIBUTION.find(c => c.number === clicks);
    return contribution ? contribution.color : '#161B22'; 
  };

  return (
    <div className="contribution-grid">
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <div
              key={colIndex}
              className="cell"
              style={{ backgroundColor: getColor(cell) }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
