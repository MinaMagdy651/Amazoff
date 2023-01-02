import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import { useNavigate } from "react-router-dom";
import useSearchProduct from "../../shared/useSearchProduct";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [search_result, setSearch_result] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function execute() {
      try {
        const value = await p;
        if (value) setSearch_result(value);
        else setSearch_result([]);
      } catch (err) {
        console.log(err);
      }
    }
    execute();
    // eslint-disable-next-line
  }, [query]);

  const p = useSearchProduct(query);
  return (
    <div id="parent" className="col-md-6 col-lg-12">
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
      <div id="child">
        <ul className="searchbar-list">
          {search_result.map((product) => (
            <li
              onClick={() => navigate(`/product/${product.product_id}`)}
              className="searchbar-listItem"
              key={product.product_id}
            >
              {product.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
