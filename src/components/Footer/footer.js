import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-box">
        <h3>Travel</h3>
        <p>Travel you choose the destination, we offer you the experience.</p>
        <p>Follow us on: 
          <FontAwesomeIcon icon={faLinkedin} style={{ marginLeft: '10px' }} />
          <FontAwesomeIcon icon={faInstagram} style={{ marginLeft: '10px' }} />
          <FontAwesomeIcon icon={faTwitter} style={{ marginLeft: '10px' }} />
        </p>
      </div>
      <div className="footer-box">
        <h3>About</h3>
        <p>About us</p>
        <p>Features</p>
        <p>News & Blog</p>
      </div>
      <div className="footer-box">
        <h3>Company</h3>
        <p>Team</p>
        <p>Plan Pricing</p>
        <p>Become a Member</p>
      </div>
      <div className="footer-box">
        <h3>Support</h3>
        <p>FAQs</p>
        <p>Support Center</p>
        <p>Contact us</p>
      </div>
    </footer>
  );
}

export default Footer;
