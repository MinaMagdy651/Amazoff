import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import useSearchProduct from "../../shared/useSearchProduct";

function SearchBar() {
  const [query, setQuery] = useState("");
  console.log(query);
  useSearchProduct(query);
  return (
    <div className="col-md-6">
      <div className="form">
        <i className="fa fa-search"></i>
        <input
          type="text"
          className="form-control form-input"
          placeholder="Search anything..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="left-pan">
          <i>
            <FaSearch> </FaSearch>
          </i>
        </span>
      </div>
      <div>
        <ul className="searchbar-list"></ul>
      </div>
    </div>
  );
}

export default SearchBar;
