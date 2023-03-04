import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="heading">
        <p>Welcome to VSS | Cohort 9</p>
      </div>
      <div className="cam-options">
        <div>
          <span className="material-symbols-outlined footer-icon ">mic</span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-icon ">
            videocam
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-icon">
            closed_caption
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-icon">
            back_hand
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-icon">mood</span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-icon">
            present_to_all
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-icon">
            more_vert
          </span>
        </div>
        <div>
          <button type="button" className="footer-btn">
            <span className="material-symbols-outlined">call_end</span>
          </button>
        </div>
      </div>
      <div className="setting-option">
        <div>
          <span className="material-symbols-outlined footer-right-icon">
            info
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-right-icon">
            group
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-right-icon">
            chat
          </span>
        </div>
        <div>
          <span className="material-symbols-outlined footer-right-icon">
            widgets
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
