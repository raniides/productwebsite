import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Product = () => {
  return (
    <div>
      <header>
        <div className="container">
          <h1>Building Materials & Hardware</h1>
          <nav>
            <ul>
              <li><Link to="/productwebsite">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section id="products" className="container">
          <h2>Our Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="images/steel_rods.jpg" alt="Steel Rods" />
              <h3>Steel Rods</h3>
              <p>Strong steel rods for building.</p>
              <p>Price: $5.00 per unit</p>
            </div>
            <div className="product-card">
              <img src="images/wiring.jpg" alt="Electrical Wiring" />
              <h3>Electrical Wiring</h3>
              <p>Safe and reliable wiring solutions.</p>
              <p>Price: $0.10 per meter</p>
            </div>
            <div className="product-card">
              <img src="images/plumbing.jpg" alt="Plumbing Supplies" />
              <h3>Plumbing Supplies</h3>
              <p>All essential plumbing materials.</p>
              <p>Price: Varies</p>
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

export default Product;
