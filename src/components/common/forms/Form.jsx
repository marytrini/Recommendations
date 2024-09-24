import PropTypes from "prop-types";

const Form = ({ formData, handleInputChange, handleSubmit, error }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly items-center p-8">
      <div className="2xl:w-fit bg-card-bg items-center p-8 rounded-xl shadow-md shadow-slate-700">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center my-6">
            <select
              name="county"
              id="county"
              value={formData.county}
              onChange={handleInputChange}
              className="h-8 font-pop border-none rounded-md py-2 px-4 ml-[10px]"
            >
              <option value="">Elige un condado</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Alameda">Alameda</option>
              <option value="Orange">Orange</option>
              <option value="Humboldt">Humboldt</option>
              <option value="San Francisco">San Francisco</option>
              <option value="Riverside">Riverside</option>
              <option value="San Diego">San Diego</option>
              <option value="Tuolumne">Tuolumne</option>
              <option value="Placer">Placer</option>
              <option value="Santa Clara">Santa Clara</option>
              <option value="Kings">Kings</option>
              <option value="Kern">Kern</option>
              <option value="San Joaquin">San Joaquin</option>
              <option value="Sacramento">Sacramento</option>
              <option value="San Mateo">San Mateo</option>
              <option value="Inyo">Inyo</option>
              <option value="Sonoma">Sonoma</option>
              <option value="Solano">Solano</option>
              <option value="San Bernardino">San Bernardino</option>
              <option value="Yolo">Yolo</option>
              <option value="Contra Costa">Contra Costa</option>
              <option value="No hay información">No hay información</option>
              <option value="Fresno">Fresno</option>
              <option value="San Luis Obispo">San Luis Obispo</option>
              <option value="Tulare">Tulare</option>
              <option value="Madera">Madera</option>
              <option value="Mono">Mono</option>
              <option value="Stanislaus">Stanislaus</option>
              <option value="Napa">Napa</option>
              <option value="Monterey">Monterey</option>
              <option value="Imperial">Imperial</option>
              <option value="Santa Cruz">Santa Cruz</option>
              <option value="Santa Barbara">Santa Barbara</option>
              <option value="Ventura">Ventura</option>
              <option value="Siskiyou">Siskiyou</option>
              <option value="Lassen">Lassen</option>
              <option value="Merced">Merced</option>
              <option value="Mendocino">Mendocino</option>
              <option value="Lake">Lake</option>
              <option value="Alpine">Alpine</option>
              <option value="San Benito">San Benito</option>
              <option value="Shasta">Shasta</option>
              <option value="El Dorado">El Dorado</option>
              <option value="Butte">Butte</option>
              <option value="Calaveras">Calaveras</option>
              <option value="Yuba">Yuba</option>
              <option value="Sutter">Sutter</option>
              <option value="Plumas">Plumas</option>
              <option value="Marin">Marin</option>
              <option value="Del Norte">Del Norte</option>
              <option value="Modoc">Modoc</option>
              <option value="Tehama">Tehama</option>
              <option value="Amador">Amador</option>
              <option value="Nevada">Nevada</option>
              <option value="Glenn">Glenn</option>
              <option value="Mariposa">Mariposa</option>
              <option value="Trinity">Trinity</option>
              <option value="Colusa">Colusa</option>
              <option value="Sierra">Sierra</option>
            </select>
          </div>
          <div className="flex justify-center my-6">
            <select
              name="categoria"
              id="category"
              value={formData.categoria}
              onChange={handleInputChange}
              className="h-8 font-pop border-none rounded-md py-2 px-4 ml-[10px]"
            >
              <option value="">Opciones de restaurantes</option>
              <option value="korean restaurant">Korean restaurant</option>
              <option value="restaurant">Restaurant</option>
              <option value="mexican restaurant">Mexican restaurant</option>
              <option value="hamburger restaurant">Hamburger restaurant</option>
              <option value="caterer restaurant">Caterer restaurant</option>
              <option value="fast food restaurant">Fast food restaurant</option>
              <option value="thai restaurant">Thai restaurant</option>
              <option value="asian restaurant">Asian restaurant</option>
              <option value="sandwich shop">Sandwich shop</option>
              <option value="health food restaurant">
                Health food restaurant
              </option>
              <option value="pizza restaurant">Pizza restaurant</option>
              <option value="filipino restaurant">Filipino restaurant</option>
              <option value="chinese restaurant">Chinese restaurant</option>
              <option value="mediterranean restaurant">
                Mediterranean restaurant
              </option>
              <option value="vietnamese restaurant">
                Vietnamese restaurant
              </option>
              <option value="italian restaurant">Italian restaurant</option>
              <option value="latin american restaurant">
                Latin American restaurant
              </option>
              <option value="breakfast restaurant">Breakfast restaurant</option>
              <option value="indian restaurant">Indian restaurant</option>
              <option value="american restaurant">American restaurant</option>
              <option value="restaurant supply store">
                Restaurant supply store
              </option>
              <option value="restaurant catering food">
                Restaurant catering food
              </option>
              <option value="sushi restaurant">Sushi restaurant</option>
              <option value="barbecue restaurant">Barbecue restaurant</option>
              <option value="fusion restaurant">Fusion restaurant</option>
              <option value="seafood restaurant">Seafood restaurant</option>
              <option value="asian restaurant ramen">
                Asian restaurant ramen
              </option>
              <option value="chicken wings restaurant">
                Chicken wings restaurant
              </option>
              <option value="cajun restaurant">Cajun restaurant</option>
              <option value="japanese restaurant">Japanese restaurant</option>
              <option value="taiwanese restaurant">Taiwanese restaurant</option>
              <option value="family restaurant">Family restaurant</option>
            </select>
          </div>
          <div className="flex justify-center object-fit my-6">
            <input
              type="text"
              name="negativas"
              id="negativas"
              value={formData.negativas}
              onChange={handleInputChange}
              className="sm:w-2/3 2xl:w-4/5 h-8 font-pop border-none outline-none rounded-md py-5 px-4 ml-[10px]"
            />
          </div>
          <div className="flex justify-center object-fit my-6">
            <input
              type="text"
              name="positivas"
              id="positivas"
              value={formData.positivas}
              onChange={handleInputChange}
              className="sm:w-2/3 2xl:w-4/5 h-8 font-pop border-none outline-none rounded-md py-5 px-4 ml-[10px]"
            />
          </div>
          <button
            type="submit"
            className="w-60 h-auto rounded-lg mr-4 font-pop text-white font-semibold sm:text-base lg:text-lg 2xl:text-xl p-2 hover:bg-title-hover hover:text-amber-500 hover:border-solid hover:border-amber-500 hover:border-[1px]"
          >
            Obtener Predicciones
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
};
Form.propTypes = {
  formData: PropTypes.shape({
    county: PropTypes.string.isRequired,
    categoria: PropTypes.string.isRequired,
    negativas: PropTypes.string.isRequired,
    positivas: PropTypes.string.isRequired,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
};

export default Form;
