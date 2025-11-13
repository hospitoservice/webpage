import React from 'react';
import { Link } from 'react-scroll';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container" id="home">
      <div className="hero-content">
        <h1>Welcome to Hospitonet</h1>
        <p>Empowering Hospitals, Enhancing Care</p>
        <div className="hero-btns">
          <Link
            to="contact"
            className="btn btn--primary"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Get Started
          </Link>
          <Link
            to="about"
            className="btn btn--outline"
            smooth={true}
            duration={500}
            offset={-80}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
