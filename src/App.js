import React, { useState, useEffect } from 'react';
import NavigationMenu from './components/Navbar/navbar';
import Home from './components/Home/home';
import ChoosePlace from './components/Home/Destination/destination';
import Packages from './components/Packages/packages';
import Client from './components/Client/client';
import Contact from './components/Contact/contact';
import Video from './components/Video/video'
import Footer from './components/Footer/footer';
import Login from './components/Login/login';
import Signup from './components/Login/signup';
import './App.css'
const App = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
  };

  const handleSignupClick = () => {
    setIsSignupOpen(true);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  useEffect(() => {
    if (isLoginOpen || isSignupOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }, [isLoginOpen, isSignupOpen]);


  return (
    <> <div>
    <NavigationMenu onLoginClick={handleLoginClick} />
    {isLoginOpen && <Login onClose={closeModal} />}
    {isSignupOpen && <Signup onClose={closeModal} />}
  </div>
    <div>
    <Home/>
    <ChoosePlace />
    <Video />
    <Packages/>
    <Client/>
    <Contact/>
    <Footer/>
    </div>
    </>
  )
}

export default App