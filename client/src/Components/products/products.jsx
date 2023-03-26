import { useEffect, useState } from "react";
import ProductGrid from "../product_grid/product_grid";
import useGetAllProducts from "../../shared/useGetAllProducts";

function Products() {
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
        <ProductGrid allProducts={products}></ProductGrid>
      </div>
    </div>
  );
}
export default Products;
