import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "../common/forms/Form";
import Footer from "../common/footer/Footer";
import Results from "../layout/Results";

const Predictor = () => {
  const [formData, setFormData] = useState({
    county: "",
    categoria: "",
    negativas: 0,
    positivas: 0,
  });
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Convierte los valores a minúsculas
    const { county, categoria, negativas, positivas } = formData;
    const lowerCounty = county.toLowerCase();
    const lowerCategoria = categoria.toLowerCase();
    console.log(formData);

    // Verifica que todos los campos estén completos
    if (!negativas || !positivas || !lowerCounty || !lowerCategoria) {
      setError("Todos los campos son requeridos.");
      return;
    }
    setError("");

    try {
      const response = await axios.get(
        `https://restaurants.rammerbot.com/predictor/?county=${lowerCounty}&categoria=${lowerCategoria}&negativas=${negativas}&positivas=${positivas}`
      );
      const data = response.data;
      setResults(data);
      setIsModalOpen(true);
      console.log("Predicción: ", JSON.stringify(data));
    } catch (error) {
      console.error("Error en la solicitud:", error);
      setError("Error en la solicitud");
    }
  };
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-custom-bg mb-40">
      <header className="my-8">
        <h1 className="font-pop text-white font-black 2xl:text-xl">
          Predicciones
        </h1>
      </header>
      <main className="flex-grow">
        <div className="mb-5 w-full flex">
          <Link to="/">
            <button
              type="submit"
              className="w-40 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-2 hover:bg-title-hover hover:text-amber-500 hover:border-solid hover:border-amber-500 hover:border-[1px]"
            >
              Home
            </button>
          </Link>
        </div>
        <div className="w-full max-w-2xl 2xl:max-w-xl sm:max-w-sm">
          <Form
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            error={error}
          />
        </div>
        <div>
          <Results
            results={results}
            openModal={isModalOpen}
            closeModal={() => setIsModalOpen(false)}
          />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Predictor;
