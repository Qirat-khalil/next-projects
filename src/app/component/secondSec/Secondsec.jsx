import React from 'react';

const Secondsec = () => {
  return (
    <div
      className="d-flex align-items-center justify-content-center text-center"
      style={{
        backgroundImage: `url("/assets/images/Frame 1 (2).png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        color: "#fff",
      }}
    >
      <div className="container">
        <h1 className="fw-bold display-5">
          We’re on a Mission To Clean Up the Industry
        </h1>
        <p className="lead">
          Read about our progress in our latest Impact Report.
        </p>
        <button
          className="btn btn-light px-5 py-2 mt-3"
          style={{ borderRadius: "0" }}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Secondsec;
