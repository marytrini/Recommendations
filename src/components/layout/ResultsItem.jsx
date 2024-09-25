import PropTypes from "prop-types";
import "animate.css";

const ResultsItem = ({ element, onItemClick }) => {
  return (
    <div>
      <div
        onClick={() => onItemClick(element)}
        className="justify-between font-pop font-semibold cursor-pointer text-white hover:text-amber-500 text-center max-w-xs mx-auto truncate whitespace-no-wrap bg-black bg-opacity-20 backdrop-blur-sm border-solid border-[1px] border-amber-500 rounded-lg p-2 hover:text-2xl duration-500"
      >
        {element[0]}
        <p className="text-xs text-amber-300">ver más</p>
      </div>
    </div>
  );
};

ResultsItem.propTypes = {
  element: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ResultsItem;
