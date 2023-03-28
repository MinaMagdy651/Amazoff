import "./style.css";
import welcomeImage from "../../Assets/welcomePage.jpeg";
import welcomeImage2 from "../../Assets/welcomePage2.jpeg";
import welcomeImage3 from "../../Assets/welcomePage3.jpg"
import welcomeImage5 from "../../Assets/welcomePage5.jpg"
import Product_categories from "../productsCategories/productsCategories";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useGetProductsCategories from "../../shared/useGetProductsCategories";


function Home() {
 
 
  let Products_categories = [];
  function categories() {
    for (let category in products) Products_categories.push(category);
  }
  
  const { data: products, error, loading }  = useGetProductsCategories();

  if (error) return <>error</>;
  if (loading) return <>loading</>;
  
  const welcomeImages = [ welcomeImage3, welcomeImage5];
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
          
          <Product_categories
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