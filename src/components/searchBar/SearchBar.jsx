import { useState } from "react";
import "./searchBar.scss";

const types = {
  buy: "buy",
  rent: "rent",
};

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="type">
        {Object.values(types).map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={query.type === type ? "active" : ""}
          >
            {type}
          </button>
        ))}
      </div>
      <form>
        <input type="text" placeholder="Search for location" name="location" />
        <input
          type="number"
          placeholder="Min Price"
          name="minPrice"
          min={0}
          max={10000000}
        />
        <input
          type="number"
          placeholder="Max Price"
          name="maxPrice"
          min={0}
          max={10000000}
        />
        <button>
          <img src="/search.png" alt="search" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
