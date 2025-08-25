"use client";
import React from "react";
import { motion } from "framer-motion";

const FirstSection = () => {
 
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };


  const buttonVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.5 } },
    hover: { scale: 1.05 },
  };

  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
    
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
      </div>


      <div className="carousel-inner">

        <div className="carousel-item active">
          <div
            className="d-flex align-items-center"
            style={{
              backgroundImage: `url("/assets/images/slider.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              color: "#fff",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
                  <motion.h1
                    className="display-4 fw-bold"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    Your Cozy Era
                  </motion.h1>
                  <motion.p
                    className="lead"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                    Get peak comfy-chic with new winter essentials.
                  </motion.p>
                  <motion.button
                    className="btn btn-light mt-3"
                    style={{
                      borderRadius: "0",
                      Width: "50px", 
                      padding: "0.3rem 0.5rem", 
                    }}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    SHOP NOW
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>

     
        <div className="carousel-item">
          <div
            className="d-flex align-items-center"
            style={{
              backgroundImage: `url("/assets/images/slider-2.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
              color: "#fff",
            }}
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 d-flex flex-column justify-content-center text-center text-md-start">
                  <motion.h1
                    className="display-4 fw-bold"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    New Collection
                  </motion.h1>
                  <motion.p
                    className="lead"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 0.3 }}
                  >
                    Stay stylish and warm this season.
                  </motion.p>
                  <motion.button
                    className="btn btn-light mt-3"
                    style={{
                      borderRadius: "0",
                      minWidth: "100px", 
                      padding: "0.3rem 0.7rem", 
                    }}
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                  >
                    SHOP NOW
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default FirstSection;
