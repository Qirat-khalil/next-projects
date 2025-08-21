import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>
              Sehlvet is your go-to store for the latest fashion and accessories.
            </p>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Collection</a></li>
              <li><a href="#" className="text-light text-decoration-none">Brands</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@sehlvet.com</p>
            <p>Phone: +1 234 567 8900</p>
            <p>Address: 123 Fashion St, Style City</p>
          </div>

        </div>

        <hr className="bg-light" />

        <div className="text-center">
          &copy; {new Date().getFullYear()} Sehlvet. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
