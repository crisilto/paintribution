import { useState } from 'react';
import './App.css';
import ContributionGrid from './components/ContributionGrid';
import Controls from './components/Controls';
import Header from './components/Header';

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

  const resetGrid = () => {
    setGrid(Array(ROWS).fill().map(() => Array(COLS).fill(0)));
  };

  const randomizeGrid = () => {
    setGrid(Array(ROWS).fill().map(() => 
      Array(COLS).fill().map(() => Math.floor(Math.random() * (CONTRIBUTION.length + 1)))
    ));
  };

  return (
    <div>
      <Header />
      <Controls onReset={resetGrid} onRandomize={randomizeGrid} />
      <ContributionGrid grid={grid} handleClick={handleClick} getColor={getColor} />
    </div>
  );
}

export default App;