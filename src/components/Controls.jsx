import PropTypes from "prop-types";

const Controls = ({ onReset, onRandomize }) => {
  return (
    <div className="buttons">
      <button className="button" onClick={onReset}>Reset</button>
      <button className="button" onClick={onRandomize}>Randomize</button>
    </div>
  );
};

Controls.propTypes = {
  onReset: PropTypes.func.isRequired,
  onRandomize: PropTypes.func.isRequired,
};

export default Controls;
