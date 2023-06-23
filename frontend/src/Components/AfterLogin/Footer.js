import React from "react";
import { Link } from "react-router-dom";
import "../../Styles/AfterLoginStyles/Footer.css";

function Footer() {
  return (
    <div className="container-fluid footer-containere">
      <div className="footer-left">
        <h4 className="copyright-texte">
          Copyright © 2023 Les petits fermiers
        </h4>

        <p>
          <Link to="/">Help Center |</Link>
        </p>
        <p>
          <Link to="/">Jobs |</Link>
        </p>
        <p>
          <Link to="/">Bug Bounty |</Link>
        </p>
        <p>
          <Link to="/">Online Interview |</Link>
        </p>
        <p>
          <Link to="/">Students |</Link>
        </p>
        <p>
          <Link to="/">Terms |</Link>
        </p>
        <p>
          <Link to="/">Privacy Policy </Link>
        </p>
      </div>
      <div className="footer-right">Cameroun</div>
    </div>
  );
}

export default Footer;
