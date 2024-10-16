import React from 'react';

const Login = ({ onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" required />
          <label>Password:</label>
          <input type="password" required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
