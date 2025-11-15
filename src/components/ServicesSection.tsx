import React from 'react';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import DescriptionIcon from '@mui/icons-material/Description';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import './ServicesSection.css';

const ServicesSection = () => {
  const services = [
    {
      icon: <LocalHospitalIcon className="service-icon" />,
      title: 'Hospital Management',
      description: 'Comprehensive solutions for hospital administration and resource management.'
    },
    {
      icon: <MedicalServicesIcon className="service-icon" />,
      title: 'Doctor Portal',
      description: 'Dedicated interface for healthcare providers to manage patient care.'
    },
    {
      icon: <CalendarTodayIcon className="service-icon" />,
      title: 'Appointment Scheduling',
      description: 'Easy and efficient way to book and manage medical appointments.'
    },
    {
      icon: <DescriptionIcon className="service-icon" />,
      title: 'Electronic Health Records',
      description: 'Secure and centralized storage for patient medical records.'
    },
    {
      icon: <ReceiptIcon className="service-icon" />,
      title: 'Billing & Insurance',
      description: 'Streamlined billing processes and insurance claim management.'
    },
    {
      icon: <SmartphoneIcon className="service-icon" />,
      title: 'Patient Portal',
      description: '24/7 access to medical records, prescriptions, and test results.'
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2>Our Services</h2>
        <p className="services-subtitle">Comprehensive healthcare solutions designed for the modern world</p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon-container">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
