"use client";
import React from "react";
import "./Header.css";
import Link from "next/link";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-3 text-black">
          EVERLANE
        </Link>

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

        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 ul-li">
            <li className="nav-item">
              <Link href="/" className="nav-link text-black">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/t-shirt" className="nav-link text-black">
                T-shirt
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/jeans" className="nav-link text-black">
                Jeans
              </Link>
            </li>
          </ul>

          <div className="d-flex gap-3 align-items-center">
            {/* Cart Icon */}
            <Link href="/cart" className="btn btn-outline-dark position-relative">
              <i className="fa-solid fa-cart-shopping"></i>
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              >
                0 {/* yahan dynamically cart items ka number aayega */}
              </span>
            </Link>

            {/* Signup/Login */}
            <Link href="/auth/signup" className="btn btn-outline-dark">
              Signup
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
