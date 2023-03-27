// import { useEffect, useState } from "react";
import ProductGrid from "../product_grid/product_grid";
import { useGetAllProducts } from "../../shared/hooks";

function Products() {
  const { data: products, error, loading } = useGetAllProducts();
  if (error) return <>error</>;
  if (loading) return <>loading</>;
  return (
    <div className="container">
      <div className="row">
        <ProductGrid allProducts={products} cart = {false}></ProductGrid>
      </div>
    </div>
  );
}
export default Products;
