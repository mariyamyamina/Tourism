import React from 'react';

const Signup = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Signup</h2>
        <form>
          <label>Name:</label>
          <input type="text" required />
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button type="submit">Signup</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
