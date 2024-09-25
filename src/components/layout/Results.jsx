import PropTypes from "prop-types";

const Results = ({ openModal, closeModal, results }) => {
  const handleCloseModal = (event) => {
    if (event.target.id === "modalContainer") {
      closeModal();
    }
  };

  if (openModal !== true) return null;

  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 sm:w-auto sm:mx-8" // Fondo transparente oscuro
      id="modalContainer"
      onClick={handleCloseModal}
    >
      <div className="p-8 rounded-lg shadow-lg w-96 bg-card-bg">
        {" "}
        {/* Fondo rojo solo en el modal */}
        <button
          onClick={closeModal}
          className="text-white bg-amber-500 px-2 mb-8 rounded-2xl"
        >
          &times;
        </button>
        <h2 className="font-pop text-lg font-bold text-white hover:text-amber-500 mb-2">
          Resultados:{" "}
        </h2>
        <p className="font-pop text-sm font-semibold text-white hover:text-amber-500">
          {results}
        </p>
      </div>
    </div>
  );
};

Results.propTypes = {
  openModal: PropTypes.bool.isRequired, // Validación de openModal
  closeModal: PropTypes.func.isRequired, // Validación de closeModal
  results: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Validación de results
};

export default Results;
