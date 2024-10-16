import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './navbar.css';

const NavigationMenu = ({ onLoginClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="navbar">
        <div><h1>Tourism</h1></div>

        
        <div className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>

      
        <ul className={`list ${isOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={toggleMenu}>HOME</a></li>
          <li><a href="#destination" onClick={toggleMenu}>DESTINATIONS</a></li>
          <li><a href="#packages" onClick={toggleMenu}>PACKAGES</a></li>
          <li><a href="#clients" onClick={toggleMenu}>CLIENTS</a></li>
          <li><a href="#contact" onClick={toggleMenu}>CONTACT</a></li>
          <li><a href="#" onClick={onLoginClick}><FontAwesomeIcon icon={faUser} style={{ marginLeft: '10px' }} /></a></li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavigationMenu;
