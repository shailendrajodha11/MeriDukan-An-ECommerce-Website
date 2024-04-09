import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import navlogo from "../utils/navlogo.png"

const Navbar = () => {
    const state = useSelector(state => state.handleCart)
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top" style={{ boxShadow: "2px 2px 10px "}}>
            <div className="container" >
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> <img src={navlogo} style={{ width: "11rem" }} /></NavLink>

                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav    text-center"style={{marginLeft:"29em"}}>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product">Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons">
                        <NavLink to="/login" className="btn"><i className="fa fa-sign-in-alt mr-1"></i></NavLink>
                        <NavLink to="/register" className="btn"><i className="fa fa-user-plus mr-1"></i></NavLink>
                        <NavLink to="/cart" className="btn "><i className="fa fa-cart-shopping mr-1"></i>({state.length}) </NavLink>
                    </div>
                </div>


{/* <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
  <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="index.html">
        <img src="images/main-logo.png" className="logo" />
      </a>
      <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#bdNavbar" aria-controls="bdNavbar" aria-expanded="false" aria-label="Toggle navigation">
        <svg className="navbar-icon">
          <use xlinkHref="#navbar-icon" />
        </svg>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex={-1} id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
        <div className="offcanvas-header px-4 pb-0">
          <a className="navbar-brand" href="index.html">
            <img src="images/main-logo.png" className="logo" />
          </a>
          <button type="button" className="btn-close btn-close-black" data-bs-dismiss="offcanvas" aria-label="Close" data-bs-target="#bdNavbar" />
        </div>
        <div className="offcanvas-body">
          <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
            <li className="nav-item">
              <a className="nav-link me-4 active" href="#billboard">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#company-services">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#mobile-products">Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#smart-watches">Watches</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#yearly-sale">Sale</a>
            </li>
            <li className="nav-item">
              <a className="nav-link me-4" href="#latest-blog">Blog</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link me-4 dropdown-toggle link-dark" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Pages</a>
              <ul className="dropdown-menu">
                <li>
                  <a href="about.html" className="dropdown-item">About</a>
                </li>
                <li>
                  <a href="blog.html" className="dropdown-item">Blog</a>
                </li>
                <li>
                  <a href="shop.html" className="dropdown-item">Shop</a>
                </li>
                <li>
                  <a href="cart.html" className="dropdown-item">Cart</a>
                </li>
                <li>
                  <a href="checkout.html" className="dropdown-item">Checkout</a>
                </li>
                <li>
                  <a href="single-post.html" className="dropdown-item">Single Post</a>
                </li>
                <li>
                  <a href="single-product.html" className="dropdown-item">Single Product</a>
                </li>
                <li>
                  <a href="contact.html" className="dropdown-item">Contact</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <div className="user-items ps-5">
                <ul className="d-flex justify-content-end list-unstyled">
                  <li className="search-item pe-3">
                    <a href="#" className="search-button">
                      <svg className="search">
                        <use xlinkHref="#search" />
                      </svg>
                    </a>
                  </li>
                  <li className="pe-3">
                    <a href="#">
                      <svg className="user">
                        <use xlinkHref="#user" />
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="cart.html">
                      <svg className="cart">
                        <use xlinkHref="#cart" />
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</header> */}


            </div>
        </nav>
    )
}

export default Navbar