import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css'; // Import the CSS file

// Adjust the image paths for the public folder
const images = [
  "/Slide_1.jpg",
  "/Slide_2.jpg",
  "/Slide_3.jpg",
  "/Slide_4.jpg",
  "/Slide_5.jpg"
];

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Welcome to the Home Page</h1>
      <p className="home-paragraph">This is the homepage of our application.</p>
      
      {/* Display images */}
      <div className="image-container">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="home-image" />
        ))}
      </div>

      {/* Navigation links to other pages */}
      <div className="link-container">
        <Link to="/login" className="link">Go to Login Page</Link>
      </div>
      <div className="link-container">
        <Link to="/register" className="link">Go to Registration Page</Link>
      </div>
    </div>
  );
};

export default Home;
