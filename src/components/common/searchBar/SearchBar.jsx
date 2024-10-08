import { useState } from "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch, placeholder }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    onSearch(query);
    setQuery(""); // Reset the query after submission
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="rounded-s-md w-40 sm:max-w-28 h-[33.5px] sm:max-h-8 p-2 border-[1px] border-amber-500 border-solid"
          id="query"
          name="dia"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
        />
        <button
          className="w-40 sm:max-w-20 border-amber-500 border-solid border-[1px] rounded-e-lg mr-4 font-pop text-white font-semibold p-1 bg-title-hover hover:bg-zinc-950 hover:text-amber-500"
          type="submit"
        >
          Buscar
        </button>
      </form>
    </div>
  );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
