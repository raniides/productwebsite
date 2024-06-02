import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import steelrods from './images/i1.jpeg';
import cement from './images/p1.jpeg';
import bricks from './images/p2.jpeg';
import gravel from './images/p4.jpeg';
import sand from './images/p3.jpeg';
//import tiles from './images/p5.webp';
import wood from './images/p6.jpeg';
import nails from './images/p7.jpeg';
import concreteBlocks from './images/p8.jpeg';
import plywood from './images/p9.jpeg';


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
              <img src={ steelrods } alt="Steel Rods" style={{width: '100%',height: '350px' , display: 'block',objectFit:'cover' }}/>
              <h2>Steel Rods</h2>
              <p>Strong steel rods for building.</p>
              <p>Price: 5.00 <b>AED</b> per unit</p>
            </div>
            <div className="product-card">
              <img src={ cement } alt="Electrical Wiring" style={{width: '100%',height: '350px' , display: 'block',objectFit:'cover' }}/>
              <h2>Cement</h2>
              <p>Best Quality Cement.</p>
              <p>Price: 11.75 <b>AED</b> per 50 kg Bag</p>
            </div>
            <div className="product-card">
            <img src={ bricks } alt="Bricks" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
            <h2>Bricks</h2>
            <p>High-quality building bricks.</p>
            <p>Price: 3.50 <b>AED</b> per unit</p>
            </div>
          </div>
          <div className="product-grid">
            <div className="product-card">
            <img src={ sand } alt="Sand" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
           <h2>Sand</h2>
           <p>Fine river sand for construction.</p>
           <p>Price: 25.00 <b>AED</b> per cubic meter</p>
            </div>
            <div className="product-card">
            <img src={ gravel } alt="Gravel" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
            <h2>Gravel</h2>
            <p>High-quality construction gravel.</p>
            <p>Price: 30.00 <b>AED</b> per cubic meter</p>
            </div>
            <div className="product-card">
            <img src={ plywood } alt="Plywood" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
            <h2>Plywood</h2>
             <p>Durable plywood sheets.</p>
             <p>Price: 50.00 <b>AED</b> per sheet</p>
            </div>
            </div>
            <div className="product-grid">
            <div className="product-card">
            <img src={ wood } alt="Wood" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
            <h2>Wood Planks</h2>
            <p>Durable wood planks for construction.</p>
            <p>Price: 75.00 <b>AED</b> per cubic meter</p>
            </div>
            <div className="product-card">
            <img src={ nails } alt="Nails" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
            <h2>Nails</h2>
            <p>Strong steel nails for construction.</p>
             <p>Price: 10.00 <b>AED</b> per kg</p>
            </div>
            <div className="product-card">
            <img src={ concreteBlocks } alt="Concrete Blocks" style={{width: '100%', height: '350px', display: 'block', objectFit: 'cover' }}/>
            <h2>Concrete Blocks</h2>
            <p>High-quality concrete blocks for construction.</p>
            <p>Price: 4.00 <b>AED</b> per unit</p>
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
