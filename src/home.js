import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Building Materials & Hardware</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="hero">
          <div className="container">
            <h2>Welcome to Our Store</h2>
            <p>Your one-stop shop for all building materials and hardware.</p>
            <Link to="/products" className="btn">Shop Now</Link>
          </div>
        </section>
        <section id="features" className="container">
          <h3>Why Choose Us?</h3>
          <div className="feature-list">
            <div className="feature">
              <h4>High-Quality Products</h4>
              <p>We offer the best materials for your construction needs.</p>
            </div>
            <div className="feature">
              <h4>Competitive Prices</h4>
              <p>Get the best deals on top-quality products.</p>
            </div>
            <div className="feature">
              <h4>Excellent Customer Service</h4>
              <p>Our team is here to help you every step of the way.</p>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2024 Building Materials & Hardware</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
