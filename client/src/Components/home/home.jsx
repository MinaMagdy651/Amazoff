import "./style.css";
import {useState} from "react"
import welcomeImage from "../../Assets/welcomePage.jpeg";
import welcomeImage2 from "../../Assets/welcomePage2.jpeg";
import Product_categories from "../productsCategories/productsCategories";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import axios from "../../APIS/axios";
import { useEffect } from "react";
import urls from "../../APIS/url.json";
const URL = urls.productsCategory;


function Home() {
  let [products, setProducts] = useState({});
 
  let Products_categories = [];
  function categories() {
    for (let category in products) Products_categories.push(category);
  }
  
  useEffect( 
    () => {
      axios.get(URL).then(res => {
        setProducts(res.data)
      })
    }
    , [])

  const welcomeImages = [welcomeImage, welcomeImage2];
  return (
    <div className="home">

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
        {welcomeImages.map((image) => {
          return (
            <div className="image col">
              <img src={image} />
            </div>
          );
        })}
      </Carousel>
      <hr></hr>
      <div className="container categories">
        {categories()}

        {Products_categories.map((category) => (
          <Product_categories
            category={category}
            products={products[`${category}`]}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;


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