import React from "react";

// import "./main.css";

const Home = () => {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0 ">

        <img
          className="card-img img-fluid"
          src="./assets/mainbg.jpg"
          alt="Card"
          height={500}
        />

        <div className="card-img-overlay d-flex align-items-center">
          <div className="container">
            <h5 className="card-title fs-1 text fw-lighter"><b>MERIDUKAN</b></h5>
            <p className="card-text fs-5 d-none d-sm-block ">
            "Bharosa Aur Samman"<br/>
            "Shop smarter, not harder - with our seamless ecommerce app!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
