import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ContactUs() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: '600px' }}>
        <h3 className="text-center mb-4">Contact Us</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="name">Name <span className="text-danger">*</span></label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              placeholder="Enter your name" 
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email <span className="text-danger">*</span></label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              placeholder="Enter your email" 
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="message">Message <span className="text-danger">*</span></label>
            <textarea 
              className="form-control" 
              id="message" 
              rows="4" 
              placeholder="Enter your message"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
