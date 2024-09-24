import Card from "../common/card/Card";
import PropTypes from "prop-types";

const RecommendationModal = ({ openModal, closeModal, element }) => {
  const handleCloseModal = (event) => {
    if (event.target.id === "ModalContainer") {
      closeModal();
    }
  };
  if (openModal !== true) return null;
  return (
    <div
      id="ModalContainer"
      onClick={handleCloseModal}
      className="fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm"
    >
      <div>
        <Card element={element} />
      </div>
      <button
        className="absolute top-2 right-2 text-white bg-amber-500"
        onClick={closeModal}
      >
        &times;
      </button>
    </div>
  );
};

RecommendationModal.propTypes = {
  openModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  element: PropTypes.array.isRequired,
};
export default RecommendationModal;
