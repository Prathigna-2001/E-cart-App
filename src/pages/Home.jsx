import React from 'react';
import ProductCard from '../components/ProductCard';
import tshirt from '../assets/tshirt.jpg';
import electronics from '../assets/electronics.jpg';
import jeans from '../assets/jeans.jpg';
import cable from '../assets/cable.jpg';
import headset from '../assets/headset.jpg';
import Mobile from '../assets/apple mobile.webp';
import Laptop from '../assets/laptop.jpg';
import Toys from '../assets/toys.avif';
import grid from '../assets/mobilesip70.webp';
import power from '../assets/powerbanks.jpg';
import bgVideo from '../assets/video.mp4'; 
import '../bestcss/Home.css';

const productList = [
  { id: 1, name: 'T-shirt', price: 479, image: tshirt },
  { id: 2, name: 'Electronics', price: 457281, image: electronics },
  { id: 3, name: 'Jeans', price: 899, image: jeans },
  { id: 4, name: 'Charging Cable', price: 629, image: cable },
  { id: 5, name: 'Headset', price: 2016, image: headset },
  { id: 6, name: 'Mobile', price: 27549, image: Mobile },
  { id: 7, name: 'Laptop', price: 69859, image: Laptop },
  { id: 8, name: 'Toys', price: 1986, image: Toys },
  { id: 9, name: 'Mobile IP70', price: 54576, image: grid },
  { id: 10, name: 'Powerbanks', price: 54576, image: power },
];

const Home = ({ addToCart }) => {
  return (
    <section className="home">
      {}
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        width="100%"
        height="600px"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="overlay">
        <h1 className="home-title">✨ All Product Items ✨</h1>
        <div className="product-list">
          {productList.map((product) => (
            <ProductCard key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
