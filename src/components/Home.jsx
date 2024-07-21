import React, { useState } from 'react';
import './Home.css';

const designs = [
  {
    images: ["/image/1.png", "/image/2.png", "/image/3.png"],
    title: "G+2 Luxury building",
    size: "200 sq.m",
    link: "https://t.me/@Deisgn_hub",
    price: "Contact us for detail..."
  },
  {
    images: ["/image/4.jpg", "/image/5.jpg", "/image/6.jpg"],
    title: "Interior design",
    size: "Design: simple style",
    link: "https://t.me/@Deisgn_hub",
    price: "Contact us for detail..."
  },
  {
    images: ["/image/7.jpg", "/image/8.jpg"],
    title: "G+0 Modern villa",
    size: "200 sq.m",
    link: "https://t.me/@Deisgn_hub",
    price: "Contact us for detail..."
  },
  {
    images: ["/image/9.jpg", "/image/10.jpg", "/image/11.jpg"],
    title: "G+2 Residential building",
    size: "200 sq.m",
    link: "https://t.me/@Deisgn_hub",
    price: "Contact us for detail..."
  }
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(designs.map(() => 0));

  const handlePreviousImage = (index) => {
    setCurrentImageIndex(prevState => prevState.map((imageIndex, i) => i === index ? (imageIndex === 0 ? designs[index].images.length - 1 : imageIndex - 1) : imageIndex));
  };

  const handleNextImage = (index) => {
    setCurrentImageIndex(prevState => prevState.map((imageIndex, i) => i === index ? (imageIndex === designs[index].images.length - 1 ? 0 : imageIndex + 1) : imageIndex));
  };

  return (
    <div className="home-container">
      <header>
        <h1>አሻራ</h1>
        <h1>Building Designs</h1>
      </header>
      <main>
        <section className="designs">
          {designs.map((design, index) => (
            <div className="design" key={index}>
              <div className="image-container">
                <button className="arrow-button" onClick={() => handlePreviousImage(index)}>&#8592;</button>
                <img src={design.images[currentImageIndex[index]]} alt={design.title} />
                <button className="arrow-button" onClick={() => handleNextImage(index)}>&#8594;</button>
              </div>
              <h2>{design.title}</h2>
              <p>{design.size}</p>
              <p>{design.price}</p>
              <a href={design.link} className="order-button">Order</a>
            </div>
          ))}
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Ashara Building Designs. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
