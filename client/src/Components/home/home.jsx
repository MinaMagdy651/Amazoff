import ProductGrid from "../product_grid/product_grid";
import useGetAllProducts from "../../shared/useGetAllProducts";

function Home() {
  const { data: products, error, loading } = useGetAllProducts();
  console.log(products);
  if (error) return <>error</>;
  if (loading) return <>loading</>;
  return (
    <div className="container">
      <div className="row">
        <ProductGrid allProducts={products}></ProductGrid>
      </div>
    </div>
  );
}
export default Home;
