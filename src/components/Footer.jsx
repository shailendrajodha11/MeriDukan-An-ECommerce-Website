import React from "react";
import './footer.css'

const Footer = () => {
  return (
    <>
      

  <div style={{backgroundColor:"rgba(0, 0, 0, 0.05)"}}>
  <footer className=" text-center " >
  {/* Grid container */}
  <div className="container p-4 pb-0" >
    {/* Section: Social media */}
    <section className="mb-4">
      {/* Facebook */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#3b5998'}} href="#!" role="button"><i className="fab fa-facebook-f" /></a>
      {/* Twitter */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#55acee'}} href="#!" role="button"><i className="fab fa-twitter" /></a>
      {/* Google */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#dd4b39'}} href="#!" role="button"><i className="fab fa-google" /></a>
      {/* Instagram */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#ac2bac'}} href="#!" role="button"><i className="fab fa-instagram" /></a>
      {/* Linkedin */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: '#0082ca'}} href="#!" role="button"><i className="fab fa-linkedin-in" /></a>
      {/* Github */}
      <a data-mdb-ripple-init className="btn text-white btn-floating m-1" style={{backgroundColor: 'green'}} href="#!" role="button"><i className="fab fa-whatsapp" /></a>
    </section>
    {/* Section: Social media */}
  </div>
  {/* Grid container */}
  {/* Copyright */}
  <div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.09)'}}>
  <div className="footerlogo">
  </div>
    © 2024 Copyright : <b>MeriDukan(MD)</b> 
    <br/>
    Developed By : Shailendra & Uday
  </div>
  {/* Copyright */}
</footer>

  </div>
    </>
  );
};

export default Footer;
