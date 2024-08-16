import PropTypes from "prop-types";

const Results = ({ results }) => {
  return (
    <div className="sm:w-32 lg:w-60 h-auto p-6 rounded-md bg-card-blocks">
      <h2 className="font-pop text-lg font-bold text-white hover:text-amber-500">
        Resultados:{" "}
      </h2>
      <p className="font-pop text-sm font-semibold text-white hover:text-amber-500">
        {results}
      </p>
    </div>
  );
};

Results.propTypes = {
  results: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Asegura que results sea un string o un object y sea requerido
};

export default Results;
