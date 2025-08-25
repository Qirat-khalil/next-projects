"use client";
import React from "react";
import "./Header.css";
import Link from "next/link";
import { motion } from "framer-motion";


const Header = () => {
 
  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.1 }, 
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
    hover: { scale: 1.05 },
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
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
          <ul className="navbar-nav mb-2 mb-lg-0 ul-li mx-auto">
            {["Home", "T-shirt", "Jeans", "About"].map((item, index) => (
              <motion.li
                key={index}
                className="nav-item"
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  href={
                    item === "Home"
                      ? "/"
                      : item === "T-shirt"
                      ? "/t-shirt"
                      : item === "Jeans"
                      ? "/jeans"
                      : "/about"
                  }
                  className="nav-link text-black nav-link-custom"
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="d-flex gap-3 align-items-center">
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link
                href="/cart"
                className="btn btn-outline-dark position-relative"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  0
                </span>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <Link href="/auth/signup" className="btn btn-outline-dark">
                Signup
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Header;
