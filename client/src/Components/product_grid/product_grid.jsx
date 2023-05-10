import ProductCard from "../productCard/productCard";
import ProductCardCart from "../productCardInCart/ProductCardCart";
import "./style.css";

function withoutCart(probs) {
  return (
    <div className="container product-grid">
      {probs.allProducts !== "No products found" && (
        <div className="row d-flex align-items-center justify-content-center">
          {probs.allProducts.map((product) => (
            <ProductCard
              product={product}
              key={product.product_id}
            ></ProductCard>
          ))}
        </div>
      )}
    </div>
  );
}
function withCart(probs) {
  return (
    <div className="container">
      <hr />
      {probs.allProducts.map((product, index) => (
        <ProductCardCart
          allProducts={probs.allProducts}
          setAllProducts={probs.setAllProducts}
          product={product}
          key={index}
        />
      ))}
    </div>
  );
}
function ProductGrid(probs) {
  return probs.cart === true ? withCart(probs) : withoutCart(probs);
}

export default ProductGrid;
