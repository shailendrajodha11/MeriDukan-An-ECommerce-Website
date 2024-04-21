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
            </div>
        </nav>
    )
}

export default Navbar