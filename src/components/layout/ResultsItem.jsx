import PropTypes from "prop-types";
const ResultsItem = ({ element, onItemClick }) => {
  return (
    <div>
      <div
        onClick={() => onItemClick(element)}
        className="font-pop font-semibold cursor-pointer hover:text-amber-500 text-center max-w-xs mx-auto truncate whitespace-no-wrap"
      >
        {element[0]}
      </div>
    </div>
  );
};

ResultsItem.propTypes = {
  element: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ResultsItem;
