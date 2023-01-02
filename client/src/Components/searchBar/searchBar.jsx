import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./style.css";
import useSearchProduct from "../../shared/useSearchProduct";

function SearchBar() {
  const [query, setQuery] = useState("");
  const [search_result, setSearch_result] = useState([]);

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
  console.log(search_result)
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
          {search_result.map((user) => (
            <li className="searchbar-listItem" key={user.product_id}>
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
