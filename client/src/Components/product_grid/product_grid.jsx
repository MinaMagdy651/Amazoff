import ProductCard from "../productCard/productCard";
import "./style.css";
function ProductGrid(probs) {
  console.log(probs)
  return (
    <div className="container product-grid">
      {probs.allProducts !== 'No products found' && <div className="row d-flex align-items-center justify-content-center">
        {probs.allProducts.map((product) => (
          <ProductCard key={product.product_id} product={product}></ProductCard>
        ))}
      </div>}
    </div>
  );
}

export default ProductGrid;
