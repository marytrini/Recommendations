import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/layout/LandingPage";
import Recommendation from "./components/layout/Recommendation";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/recommender" element={<Recommendation />} />
    </Routes>
  );
}

export default App;
