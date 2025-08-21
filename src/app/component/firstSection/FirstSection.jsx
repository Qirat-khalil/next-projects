import React from 'react';

const FirstSection = () => {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        backgroundImage: `url("/assets/images/Section01.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        padding: 0,
        color: "#fff",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-4 fw-bold">Your Cozy Era</h1>
            <p className="lead">
              Get peak comfy-chic with new winter essentials.
            </p>
            <button
              className="btn btn-light px-4 py-2 mt-3"
              style={{ borderRadius: "0", width: "200px"}}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
