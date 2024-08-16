import { Link } from "react-router-dom";
import Form from "../common/forms/Form";
import Footer from "../common/footer/Footer";

const Predictor = () => {
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
          <Form />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Predictor;
