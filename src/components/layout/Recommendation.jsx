import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../common/navBar/NavBar";
import Footer from "../common/footer/Footer";

const Recommendation = () => {
  const [query, setQuery] = useState("");
  const [recommendation, setRecommendation] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getRecommendations = async (element) => {
    setLoading(true);
    setError(null);
    setRecommendation([]);
    try {
      const response = await axios.get(
        `https://restaurants.rammerbot.com/recommender/?name=${element}`
      );

      const data = response.data;
      console.log(data);

      if (typeof data === "string") {
        setError(data);
      } else {
        setRecommendation(data);
      }
    } catch (error) {
      console.error("Error fetching data", error);
      setError("No se encontraron recomendaciones");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (query) {
      getRecommendations(query);
    }
  }, [query]);

  const handleRecommendation = (query) => {
    setQuery(query);
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-custom_gradient">
      <header>
        <div className="mt-8 mb-12">
          <h1 className="font-pop text-2xl text-center text-white font-black">
            Recomendaciones para ti
          </h1>
        </div>
        <div>
          <NavBar
            onSearch={handleRecommendation}
            placeholder="Ingrese un restaurante"
          />
        </div>
      </header>
      <main className="flex-grow">
        {loading && (
          <p className="font-pop text-white font-bold text-center mt-8">
            Loading...
          </p>
        )}
        {error && (
          <p className="font-pop text-white font-bold text-center mt-8">
            {error}
          </p>
        )}
        <div className="flex flex-col items-center gap-12">
          {!error && recommendation.length > 0 && (
            <h1 className="font-pop text-white font-bold text-center sm:text-xs lg:text-lg 2xl:text-xl mt-8 mx-12">
              Recomendaciones basadas en {query}:
            </h1>
          )}
        </div>
        <div className="flex flex-wrap gap-4 sm:items-center sm:ml-10">
          {recommendation.map((element, index) => (
            <div
              key={index}
              className="sm:w-32 lg:w-60 h-auto p-6 rounded-md bg-slate-500"
            >
              <h2>{element[0]}</h2>
              <p>{element[1]}</p>
              <p>{element[2]}</p>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Recommendation;
