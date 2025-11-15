import React, { useState } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import './ContactSection.css';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // You can add your form submission logic here
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Get In Touch</h2>
        <p className="contact-subtitle">We'd love to hear from you. Reach out to us for any inquiries or feedback.</p>
        
        <div className="contact-content">
          {/*<div className="contact-info">*/}
          {/*  <h3>Contact Information</h3>*/}
          {/*  <p>Feel free to reach out to us through any of these channels.</p>*/}
          {/*  */}
          {/*  <div className="contact-details">*/}
          {/*    <div className="contact-item">*/}
          {/*      <div className="contact-icon">*/}
          {/*        <LocationOnIcon />*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <h4>Location</h4>*/}
          {/*        <p>123 Healthcare St, Medical District, City, Country</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    <div className="contact-item">*/}
          {/*      <div className="contact-icon">*/}
          {/*        <EmailIcon />*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <h4>Email</h4>*/}
          {/*        <p>info@hospitonet.com</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*    */}
          {/*    <div className="contact-item">*/}
          {/*      <div className="contact-icon">*/}
          {/*        <PhoneIcon />*/}
          {/*      </div>*/}
          {/*      <div>*/}
          {/*        <h4>Phone</h4>*/}
          {/*        <p>+1 (555) 123-4567</p>*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  </div>*/}
          {/*  */}
          {/*  <div className="social-links">*/}
          {/*    <a href="https://www.instagram.com/hospitonet" target="_blank" rel="noopener noreferrer" className="social-icon">*/}
          {/*      <InstagramIcon />*/}
          {/*    </a>*/}
          {/*    <a href="https://www.linkedin.com/company/hospitonet" target="_blank" rel="noopener noreferrer" className="social-icon">*/}
          {/*      <LinkedInIcon />*/}
          {/*    </a>*/}
          {/*    <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="social-icon">*/}
          {/*      <WhatsAppIcon />*/}
          {/*    </a>*/}
          {/*  </div>*/}
          {/*</div>*/}
          
          <div className="contact-form-container">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn btn--primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
