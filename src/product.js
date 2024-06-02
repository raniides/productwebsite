import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import steelrods from './images/i1.jpeg';
import electricalwire from './images/i2.jpeg';
import plumbing from './images/i3.jpeg';

const Product = () => {
  return (
    <div >
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
      <main id='main2'>
        <section id="products" className="container">
          <h1 className='Name'>Our Products</h1>
          <div className="product-grid">
            <div className="product-card">
              <img src={ steelrods } alt="Steel Rods" style={{ width:'360px',height: '350px' }}/>
              <h2>Steel Rods</h2>
              <p>Strong steel rods for building.</p>
              <p>Price: 5.00 <b>AED</b> per unit</p>
            </div>
            <div className="product-card">
              <img src={ electricalwire } alt="Electrical Wiring" style={{ width:'360px',height: '350px' }}/>
              <h2>Electrical Wiring</h2>
              <p>Safe and reliable wiring solutions.</p>
              <p>Price: 0.10 <b>AED</b> per meter</p>
            </div>
            <div className="product-card">
              <img src={ plumbing }  alt="Plumbing Supplies" style={{ height: '350px' }}/>
              <h2>Plumbing Supplies</h2>
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
