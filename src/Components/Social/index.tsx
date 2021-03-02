import React from "react";
import "./social.css";

export default function Social() {
  return (
    <div>
      <ul className="social">
        <li>
          <a href="https://twitter.com/koekkoekmarieke?lang=en" title="twitter">
            <span className="icon fa fa-twitter"></span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/marieke.koekkoek/" title="facebook">
            <span className="icon fa fa-facebook"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/marieke-koekkoek/"
            title="linkedin"
          >
            <span className="icon fa fa-linkedin"></span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/marieke_koekkoek/"
            title="instagram"
          >
            <span className="icon fa fa-instagram"></span>
          </a>
        </li>
      </ul>
    </div>
  );
}
