import "./style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "../productCard/productCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Product_categories({ category, products }) {
  return (
    <div className="products-category">
      <h2 className="category-name">{category}</h2>
      <div className="list">
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          swipeable={false}
          draggable={true}
          showDots={false}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          itemClass="carousel-item-padding-40-px"
        >
          {products.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Product_categories;
