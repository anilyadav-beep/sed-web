// components/Navbar.jsx

import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SEDEMAC</div>

      <ul className="menu">
        <li>Mobility</li>
        <li>Expertise</li>
        <li>Insights</li>
        <li>Company</li>
        <li>Careers</li>
        <li>Investors</li>
      </ul>

      <button className="contact-btn">Contact</button>
    </nav>
  );
};

export default Navbar;