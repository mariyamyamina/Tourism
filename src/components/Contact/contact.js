import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '', email: '', message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'service_vx5e85m';
    const templateID = 'template_fl4u9sa';
    const userID = 'UmaDeupHmxUmDWaXj';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        alert("Message sent!");
        setFormData({ from_name: '', email: '', message: '' });
      })
      .catch((error) => {
        alert("Failed to send message.");
      });
  };

  return (
    <div className="contact-container">
      <section id="contact">
        <h2>Get In Touch</h2>
        <p>If you have any questions or need help planning your next vacation, feel free to reach out!</p>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Type your message here"
              required
            />
            <button type="submit">Send Message</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Contact;
