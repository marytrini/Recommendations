import PropTypes from "prop-types";

const Card = ({ element }) => {
  return (
    <div className="grid gap-4 sm:w-40 sm:h-auto 2xl:w-60 2xl:h-auto rounded-md bg-card-bg text-amber-400 text-xs font-pop font-semibold p-4">
      <div className="sm:h-auto 2xl:h-32 bg-card-blocks rounded-md p-4">
        {" "}
        Restaurante:
        <h2 className="text-gray-100 font-bold sm:text-sm 2xl:text-lg text-center hover:text-amber-500 py-2">
          {element[0]}
        </h2>
      </div>
      <div className="sm:h-auto 2xl:h-32 bg-card-blocks rounded-md p-4 text-amber-400 text-xs">
        {" "}
        Dirección:
        <p className="sm:text-xs 2xl:text-sm text-center text-white hover:text-amber-600 py-2">
          {element[1]}
        </p>
      </div>
      <div className="h-24 bg-card-blocks rounded-md p-4 text-amber-400 text-xs">
        {" "}
        Calificación:
        <p className="sm:text-xs 2xl:text-base text-center py-4">
          {element[2]}
        </p>
      </div>
      <div className="sm:h-auto 2xl:h-40 bg-card-blocks rounded-md p-4 text-amber-400 text-xs">
        Descripción:{" "}
        <p className="sm:text-xs 2xl:text-base text-center text-white hover:text-amber-600 py-2">
          {" "}
          {element[3]}
        </p>
      </div>
    </div>
  );
};

Card.propTypes = {
  element: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ).isRequired,
};

export default Card;
