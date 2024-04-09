import React from "react";

import "./main.css";

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



  // <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
  //   <div className="carousel-inner" >
  //     <div className="carousel-item active carousel-image bg-img-1" data-bs-interval={10000}>
  //       <img src="https://w.forfun.com/fetch/11/117d5517d03199e18bea1425162d5ff9.jpeg" className="d-block w-100" alt="..." style={{height:"100%",}}/>
  //     </div>
  //     <div className="carousel-item carousel-image bg-img-2" data-bs-interval={2000}>
  //       <img src="https://w.forfun.com/fetch/ed/eda0e65d98d5c8353676d3f18daceaaf.jpeg" className="d-block w-100" alt="..." style={{height:"100%"}}/>
  //     </div>
  //     <div className="carousel-item carousel-image bg-img-3" data-bs-interval={10000}>
  //       <img src="https://w.forfun.com/fetch/78/78a737153dc0e793449951247598097d.jpeg" className="d-block w-100" alt="..." style={{height:"100%"}}/>
  //     </div>
  //     <div className="carousel-item carousel-image bg-img-4">
  //       <img src="https://w.forfun.com/fetch/35/351b405a241b57270dbc3a34ce9afa36.jpeg" className="d-block w-100" alt="..." style={{height:"100%"}} />
  //     </div>
  //   </div>
  //   <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
  //     <span className="carousel-control-prev-icon" aria-hidden="true" />
  //     <span className="visually-hidden">Previous</span>
  //   </button>
  //   <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
  //     <span className="carousel-control-next-icon" aria-hidden="true" />
  //     <span className="visually-hidden">Next</span>
  //   </button>
  // </div>






};

export default Home;
