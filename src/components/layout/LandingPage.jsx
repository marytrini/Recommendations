import Header from "../common/header/Header";
import Footer from "../common/footer/Footer";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom_gradient overflow-hidden">
      <header>
        <div className="flex-shrink-0">
          <Header />
        </div>
      </header>
      <main className="flex-grow mb-8">
        <div className="flex flex-col space-y-4 mt-8 sm:mt-32">
          <div className="flex justify-center">
            <Link to="/recommender">
              <button className="w-60 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-2 hover:bg-zinc-950 hover:text-white">
                Recommendations
              </button>
            </Link>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
