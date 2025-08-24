import React from "react";

const FirstSection = () => {
  return (
    <div id="heroCarousel" className="carousel slide" data-bs-ride="carousel">
      {/* Carousel Indicators */}
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

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* Slide 1 */}
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
                  <h1 className="display-4 fw-bold">Your Cozy Era</h1>
                  <p className="lead">
                    Get peak comfy-chic with new winter essentials.
                  </p>
                  <button
                    className="btn btn-light px-4 py-2 mt-3"
                    style={{ borderRadius: "0", minWidth: "150px" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
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
                  <h1 className="display-4 fw-bold">New Collection</h1>
                  <p className="lead">Stay stylish and warm this season.</p>
                  <button
                    className="btn btn-light px-4 py-2 mt-3"
                    style={{ borderRadius: "0", minWidth: "150px" }}
                  >
                    SHOP NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Controls */}
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
