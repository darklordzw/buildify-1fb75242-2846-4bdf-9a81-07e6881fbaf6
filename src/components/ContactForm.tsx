
import { useState } from 'react';
import '../styles/ContactForm.css';
import ducatiImage from '../assets/ducati3.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    interest: 'general',
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'general',
      });
      setFormSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-form" id="contact">
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have questions? We're here to help you find your perfect vehicle</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <div className="info-item">
              <span className="info-icon">📍</span>
              <p>123 Auto Boulevard, Car City, CC 12345</p>
            </div>
            <div className="info-item">
              <span className="info-icon">📞</span>
              <p>(555) 123-4567</p>
            </div>
            <div className="info-item">
              <span className="info-icon">✉️</span>
              <p>info@autoelite.com</p>
            </div>
            <div className="info-item">
              <span className="info-icon">🕒</span>
              <p>Monday - Saturday: 9AM - 7PM<br />Sunday: 10AM - 5PM</p>
            </div>
            
            <div className="featured-image">
              <img src={ducatiImage} alt="Ducati Racing Motorcycles" />
              <p>We also service premium motorcycles!</p>
            </div>
          </div>
          
          <div className="form-container">
            {formSubmitted ? (
              <div className="form-success">
                <h3>Thank you for contacting us!</h3>
                <p>We'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <label htmlFor="interest">I'm interested in</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                  >
                    <option value="general">General Inquiry</option>
                    <option value="test-drive">Scheduling a Test Drive</option>
                    <option value="financing">Financing Options</option>
                    <option value="trade-in">Vehicle Trade-In</option>
                    <option value="service">Service Department</option>
                    <option value="motorcycle">Motorcycle Service</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;