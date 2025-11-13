import React from 'react';
import { Link } from 'react-scroll';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Logo from './Logo';
import './Footer.css';

interface FooterLink {
  to: string;
  label: string;
  external?: boolean;
}

interface ServiceItem {
  name: string;
  description?: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks: FooterLink[] = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About Us' },
    { to: 'services', label: 'Services' },
    { to: 'contact', label: 'Contact' },
  ];

  const services: ServiceItem[] = [
    { name: 'Hospital Management' },
    { name: 'Doctor Portal' },
    { name: 'Appointment Scheduling' },
    { name: 'Electronic Health Records' },
  ];

  const legalLinks: FooterLink[] = [
    { to: '/privacy-policy', label: 'Privacy Policy', external: true },
    { to: '/terms-of-service', label: 'Terms of Service', external: true },
  ];

  const socialLinks = [
    {
      icon: <InstagramIcon />,
      url: 'https://www.instagram.com/hospitonet',
      label: 'Instagram',
    },
    {
      icon: <LinkedInIcon />,
      url: 'https://www.linkedin.com/company/hospitonet/',
      label: 'LinkedIn',
    },
    {
      icon: <WhatsAppIcon />,
      url: 'https://wa.me/8269709625',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Logo height={40} />
            </div>
            <p className="footer-description">
              Transforming healthcare through innovative technology solutions that connect hospitals, doctors, and patients for better healthcare experiences.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links-list">
              {quickLinks.map((link) => (
                <li key={link.to} className="footer-link-item">
                  {link.external ? (
                    <a href={link.to} className="footer-link">
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="footer-link"
                      aria-label={link.label}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Our Services</h3>
            <ul className="footer-services-list">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  {service.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <address className="contact-info">
              <div className="contact-item">
                <LocationOnIcon className="contact-icon" />
                <span>123 Healthcare St, Medical District, City, Country</span>
              </div>
              <div className="contact-item">
                <EmailIcon className="contact-icon" />
                <a href="mailto:info@hospitonet.com" className="contact-link">
                  info@hospitonet.com
                </a>
              </div>
              <div className="contact-item">
                <PhoneIcon className="contact-icon" />
                <a href="tel:+15551234567" className="contact-link">
                  +1 (555) 123-4567
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Hospitonet. All rights reserved.
          </p>
          <div className="legal-links">
            {legalLinks.map((link, index) => (
              <React.Fragment key={link.to}>
                {index > 0 && <span className="divider" aria-hidden="true">|</span>}
                <a href={link.to} className="legal-link">
                  {link.label}
                </a>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;