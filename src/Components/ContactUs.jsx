import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactUs.css';

function ContactUs() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fkdgnq4', 'template_iv7evtj', form.current, 'zIvqtIH4gCofOdKKK')
      .then((result) => {
          alert("Message sent successfully!");
      }, (error) => {
          alert("Failed to send message. Please try again.");
      });

    e.target.reset(); // Clear form
  };

  return (
    <section className="contact" id="contact">
      <h2>Get in touch</h2>
      <div className="contact-grid">
        <div className="contact-info">
          <p>I'm currently available for new projects. You can contact me anytime.</p>
          <p>Email: greatstackdev@gmail.com</p>
          <p>Phone: +772-825-524</p>
          <p>Location: CA, United States</p>
        </div>

        <form className="contact-form" ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter your name" required />
          <input type="email" name="email" placeholder="Enter your email" required />
          <textarea name="message" placeholder="Enter your message" required></textarea>
          <button type="submit">Submit now</button>
        </form>
      </div>
    </section>
  );
}

export default ContactUs;
