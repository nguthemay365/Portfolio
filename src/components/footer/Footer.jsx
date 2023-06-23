import React from "react";
import "./footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
      NhatTruong
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/nhatruongne/">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/ntruong1510/">
          <FaInstagramSquare />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; NhatTruong FrontEnd Devoloper</small>
      </div>
    </footer>
  );
};

export default Footer;
