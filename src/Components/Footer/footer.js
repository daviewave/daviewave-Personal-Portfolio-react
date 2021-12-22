import React from "react";
import "./footer.css";

export default function Footer() {
  // footer contains "Created by Kaileigh Bonaccorsi using React", github icon linked to profile, linkedin icon linked to profile
  return (
    <div className="footer-container">
      <h6>Created by David Silveira using React</h6>
      <div className="social-media-platforms">
        <a
          className="link"
          href="https://github.com/daviewave"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
}
