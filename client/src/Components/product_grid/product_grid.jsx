import ProductCard from "../productCard/productCard";
import "./style.css";
function ProductGrid(probs) {
  return (
    <div className="container product-grid">
      <div className="row d-flex align-items-center justify-content-center">
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
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
