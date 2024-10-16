import React from 'react';
import { useParams } from 'react-router-dom';
import './book.css';  // Add styling for the booking page

const Book = () => {
  const { destination } = useParams();  // Get the destination parameter from the URL

  return (
    <div className="book-container">
      <h1>{destination.charAt(0).toUpperCase() + destination.slice(1)} City Tour Booking</h1>
      <p>You're about to book an amazing trip to {destination}!</p>
      <form className="booking-form">
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" required />
        </div>
        <div className="form-group">
          <label>Travel Date:</label>
          <input type="date" required />
        </div>
        <div className="form-group">
          <label>Number of Travelers:</label>
          <input type="number" min="1" placeholder="Number of travelers" required />
        </div>
        <button type="submit" className="book-btn">Confirm Booking</button>
      </form>
    </div>
  );
}

export default Book;
