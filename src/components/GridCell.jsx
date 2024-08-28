import PropTypes from 'prop-types';
const GridCell = ({ clicks, onClick, getColor }) => {
    return (
        <div
            className="cell"
            style={{ backgroundColor: getColor(clicks) }}
            onClick={onClick}
        ></div>
    );
}

GridCell.propTypes = {
    clicks: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,
    getColor: PropTypes.func.isRequired,
};

export default GridCell;