import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const Contact = () => {
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
                <section id="contact" className="container">
                    <h2>Contact Us</h2>
                    <form action="submit_contact_form" method="post">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Submit</button>
                    </form>
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

export default Contact;
