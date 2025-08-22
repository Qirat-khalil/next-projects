"use client"
import React from 'react';
import './Header.css'
import Link from 'next/link';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">

     
        <a className="navbar-brand fw-bold fs-3 text-black" href="#">EVERLANE</a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav  mb-2 mb-lg-0 ul-li ">
            <li className="nav-item">
           <Link href="/" className="nav-link text-black" >Home</Link>
            </li>
            <li className="nav-item">
              <Link href="/t-shirt" className="nav-link text-black">T-shirt</Link>
            </li>
            <li className="nav-item">
              <Link href="/jeans" className="nav-link text-black">Jeans</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">About us</a>
            </li>
          </ul>

          <a href="#" className="btn btn-outline-dark">Shop Now</a>
        </div>

      </div>
    </nav>
  );
};

export default Header;
