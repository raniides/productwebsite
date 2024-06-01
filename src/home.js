import React from 'react';
import './styles.css'; 

const Home = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Building Materials & Hardware</h1>
          <nav>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="products.html">Products</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="hero">
          <div className="container">
            <h2>Welcome to Our Store</h2>
            <p>Your one-stop shop for all building materials and hardware.</p>
            <a href="products.html" className="btn">Shop Now</a>
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

