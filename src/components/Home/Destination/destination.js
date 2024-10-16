import React from 'react';
import tajmahal from './tajmahal.jpg';
import paris from './paris.jpg';
import burjkalifa from './burjkalifa.jpg';
// import alleppey from './Allepey.jpg';
// import varkala from './varkala.jpg';
import './destination.css';

function ChoosePlace() {
  return (
    <section className="choose-place" id="destination">
        <div class="box-container">
        <div class="box">
            <h3>Best Destinations</h3>
            <p>Discover the most Breathtaking places around the globe</p>
        </div>
        <div class="box">
            <h3>Best Price Guaranteed</h3>
            <p>Enjoy unbeatable prices on every trip you book</p>
        </div>
        <div class="box">
            <h3>Instant Booking</h3>
            <p>Secure ypur dream vacation with just a click</p>
        </div>
        </div>
     <h1>Top Destinations</h1>
      <div className="choose-img">
        <div className="choose-box">
          <img src={tajmahal} alt="Taj Mahal" />
          <div className="place-name">Taj Mahal</div>
        </div>
        <div className="choose-box">
          <img src={paris} alt="Paris" />
          <div className="place-name">Paris</div>
        </div>
        <div className="choose-box">
          <img src={burjkalifa} alt="Burj Khalifa" />
          <div className="place-name">Burj Khalifa</div>
        </div>
      </div><br/>

      {/* <div className="choose-img2">
        <div className="choose-box">
          <img src={alleppey} alt="Alleppey" />
          <div className="place-name">Alleppey</div>
        </div>
        <div className="choose-box">
          <img src={varkala} alt="Varkala" />
          <div className="place-name">Varkala</div>
        </div>
        <div>
          <button className="choose-btn">→</button>
        </div>
      </div> */}
    </section>
  );
}

export default ChoosePlace;
