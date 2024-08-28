import PropTypes from 'prop-types';
import GridCell from './GridCell';

const ContributionGrid = ({grid, handleClick, getColor}) => {
    return (
        <div className="contribution-grid">
            {grid.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                    {row.map((cell, colIndex) => (
                        <GridCell
                            key={colIndex}
                            clicks={cell}
                            onClick={() => handleClick(rowIndex, colIndex)}
                            getColor={getColor}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

ContributionGrid.propTypes = {
    grid: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
    handleClick: PropTypes.func.isRequired,
    getColor: PropTypes.func.isRequired,
};

export default ContributionGrid;