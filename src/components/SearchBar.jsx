import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS files/Searchbar.css";

const searchLinks = [
  { name: "Home", path: "/" },
  { name: "Tshirts", path: "/tshirts" },
  { name: "Mobiles", path: "/mobiles" },
  { name: "Laptops", path: "/laptops" },
  { name: "Electronics", path: "/electronics" },
  { name: "Toys", path: "/toys" },
  { name: "Cart", path: "/cart" },
];

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredResults = searchLinks.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (path) => {
    setQuery("");
    navigate(path);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products or pages..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <ul className="search-results">
          {filteredResults.length > 0 ? (
            filteredResults.map((item) => (
              <li key={item.path} onClick={() => handleSelect(item.path)}>
                {item.name}
              </li>
            ))
          ) : (
            <li className="no-result">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
