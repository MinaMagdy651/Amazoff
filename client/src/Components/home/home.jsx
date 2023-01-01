// import { useSelector } from "react-redux";
import ProductGrid from "../product_grid/product_grid";
import useGetAllProducts from "../../shared/useGetAllProducts";
import { useEffect, useState } from "react";
function Home() {
  // const obj = useSelector((state) => state.obj.obj);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function execute() {
      try {
        const value = await p;
        if (value) setProducts(value);
        else setProducts([]);
      } catch (err) {
        console.log(err);
      }
    }
    execute();
    // eslint-disable-next-line
  }, []);

  const p = useGetAllProducts();

  return (
    <div className="container">
      <div className="row">
        home
        <ProductGrid allProducts={products}></ProductGrid>
      </div>
    </div>
  );
}
export default Home;
