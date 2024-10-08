import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/layout/LandingPage";
import Recommendation from "./components/layout/Recommendation";
import "./App.css";
import Predictor from "./components/layout/Predictor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recommender" element={<Recommendation />} />
      <Route path="/predictor" element={<Predictor />} />
    </Routes>
  );
}

export default App;
