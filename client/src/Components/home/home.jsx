import { useSelector } from "react-redux";
// import SearchBar from "../searchBar/searchBar";
import ProductGrid from "../product_grid/product_grid";
function Home() {
  const obj = useSelector((state) => state.obj.obj);
  return (
    <div>
      <div>home</div>
      <h1>{obj.counter}</h1>
      {/* <SearchBar></SearchBar> */}
      <ProductGrid></ProductGrid>
    </div>
  );
}
export default Home;
