import PropTypes from "prop-types";
import '../styles/Controls.css';

const Controls = ({ onReset, onRandomize }) => {
  return (
    <div className="buttons">
      <button className="button-30" role="button" onClick={onReset}>Reset</button>
      <button className="button-30" role="button" onClick={onRandomize}>Randomize</button>
    </div>
  );
};

Controls.propTypes = {
  onReset: PropTypes.func.isRequired,
  onRandomize: PropTypes.func.isRequired,
};

export default Controls;
