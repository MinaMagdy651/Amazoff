import ProductCard from "../productCard/productCard";
function ProductGrid(probs) {
  return (
    <div className="container">
      <div className="row d-flex align-items-center">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
}

export default ProductGrid;
