import React from "react";
import "./social.css";

export default function Social() {
  return (
    <div>
      <ul className="social">
        <li>
          <a href="#" title="">
            <span className="icon fa fa-twitter"></span>
          </a>
        </li>
        <li>
          <a href="#" title="">
            <span className="icon fa fa-facebook"></span>
          </a>
        </li>
        <li>
          <a href="#" title="">
            <span className="icon fa fa-linkedin"></span>
          </a>
        </li>
        <li>
          <a href="#" title="">
            <span className="icon fa fa-youtube"></span>
          </a>
        </li>
        <li>
          <a href="#" title="">
            <span className="icon fa fa-instagram"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}
