import React from 'react'
import './client.css'
import girl1 from './girl1.jpeg'
import girl2 from './girl2.jpeg'
import girl3 from './girl3.jpeg'
import girl4 from './girl4.jpeg'
import boy1 from './boy1.jpeg'
import boy2 from './boy2.jpeg'
import boy3 from './boy3.jpeg'
import boy4 from './boy4.jpeg'
const Client = () => {
  return (
    <div class="conatainer" id="clients">
         <div class="client">
        <h1 align="center">Client Reviews</h1>
        <p align="center">We have many happy customer who booked holiday with us!!</p>
        
        <div class="container">
        <div className="client-box">
            <img src={girl1} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Hema Disousa</h3>
            <p>Software Engineer</p>
        </div>
        <div className="client-box">
            <img src={girl2} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Mariyam nafeela</h3>
            <p>Software Engineer</p>
        </div>
        <div className="client-box">
            <img src={boy1} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>David Martinez</h3>
            <p>Marketing Manager</p>
        </div>
        <div className="client-box">
            <img src={girl3} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Sarah Jhon</h3>
            <p>Financial Analyst</p>
        </div>
        <div className="client-box">
            <img src={boy2} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Micheal Lee</h3>
            <p>Software Engineer</p>
        </div>
        <div className="client-box">
            <img src={boy3} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Johnson raj</h3>
            <p>Hardware Engineer</p>
        </div>
        <div className="client-box">
            <img src={girl4} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Janshio Karshiya</h3>
            <p>Marketing Manager</p>
        </div>
        <div className="client-box">
            <img src={boy3} height="100" width="100"/>
            <p>The instant booking feature is a game changer.I Secured my dream vacation to paris in minutes </p>
            <h3>Sam victor</h3>
            <p>Digital Marketing</p>
        </div>


        </div>
    </div>
    </div>
  )
}

export default Client