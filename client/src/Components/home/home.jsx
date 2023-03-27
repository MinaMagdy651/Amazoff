import "./style.css";
import welcomeImage from "../../welcomePage.jpeg";
import welcomeImage2 from "../../welcomePage2.jpeg";
import ProductCategories from "../productsCategories/productsCategories";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
// import { Container } from "react-bootstrap";

function Home() {
  const products = {
    electronics: [
      {
        product_id: 2,
        url: 1,
        price: 500,
        rating: 1,
        name: "test1",
        category: "electronics ",
      },
      {
        url: 1,
        price: 500,
        rating: 1,
        name: "test2",
        category: "electronics ",
      },
      {
        url: 1,
        price: 500,
        rating: 1,
        name: "test3",
        category: "electronics ",
      },
      {
        url: 1,
        price: 500,
        rating: 1,
        name: "test4",
        category: "electronics ",
      },
      {
        url: 1,
        price: 500,
        rating: 1,
        name: "test5",
        category: "electronics ",
      },
      {
        url: 1,
        price: 500,
        rating: 1,
        name: "test6",
        category: "electronics ",
      },
    ],
    Jewellery_Accessories: [
      { url: 1, price: 500, rating: 1, name: "test", category: "electronics " },
      { url: 1, price: 500, rating: 1, name: "test", category: "electronics " },
    ],
  };
  let Products_categories = [];
  function categories() {
    for (let category in products) Products_categories.push(category);
  }
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const welcomeImages = [welcomeImage, welcomeImage2];
  return (
    <div className="home">
      {/* <div className = "welcome">
                <h1>Get Start</h1>
                <h1>Your favourite shopping</h1>
            </div> */}

      <Carousel
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={500}
        infinite={true}
        swipeable={true}
        draggable={false}
        showDots={false}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
        // deviceType={this.props.deviceType}
      >
        {welcomeImages.map((image, index) => {
          return (
            <div className="image col" key={index}>
              <img src={image} alt="" />
            </div>
          );
        })}
      </Carousel>
      <hr></hr>
      <div className="container categories">
        {categories()}

        {Products_categories.map((category, index) => (
          <ProductCategories
            key={index}
            category={category}
            products={products[`${category}`]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
