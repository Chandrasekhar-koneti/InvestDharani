import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h4>Navigation</h4>
        <ul>
          <li>
            <Link to="/terms">Terms and Conditions</Link>
          </li>
          <li>
            <Link to="/guidelines">Guidelines</Link>
          </li>
          <li>
            <Link to="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Location</h4>
        <span className="footer-section map-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5380841677606!2d78.4989292742106!3d17.433941501464275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbcf5dcd54aecf%3A0xe16a19b417174fb0!2sSecunderabad%20Railway%20Station%20Rd%2C%20Railway%20Officer%20Colony%2C%20Botiguda%2C%20Bhoiguda%2C%20Hyderabad%2C%20Secunderabad%2C%20Telangana%20500003!5e0!3m2!1sen!2sin!4v1702981868630!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
