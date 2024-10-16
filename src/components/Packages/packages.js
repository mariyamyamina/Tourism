import React from 'react'
import Singapore from './Singapore.jpg'
import Thailand from './Thailand.jpeg'
import Paris from './Paris.jpeg'
import './packages.css'
const packages = () => {
  return (
    <div class="package" id="packages">
        <h1 align="center">Featured Packages</h1>
        <p align="center">We will help you to find the trip thats perfect for you!</p>
        <div class="container">
        <div className="package-box">
            <img src={Singapore} height="300" width="300"/>
            <h3>Singapore City Tour</h3>
            <p>Experience the vibrant blend of culture,cuisine and cutting-edge architecture</p>
            <a href='#contact'><button>Contact Us</button></a>
        </div>
        <div className="package-box">
            <img src={Paris} height="300" width="300"/>
            <h3>Paris City Tour</h3>
            <p>Experience the vibrant culture and stunning landscape of Paris bustling cities</p>
            <a href='#contact'><button>Contact Us</button></a>
        </div>
        <div className="package-box">
            <img src={Thailand} height="300" width="300"/>
            <h3>Thailand City Tour</h3>
            <p>Experience the vibrant culture and stunning landscape of Thailand's bustling cities</p>
            <a href='#contact'><button>Contact Us</button></a>
        </div>
        </div>
    </div>
  )
}

export default packages