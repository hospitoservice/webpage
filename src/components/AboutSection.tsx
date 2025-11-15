import React from 'react';
import './AboutSection.css';

const AboutSection = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2>About Hospitonet</h2>
          <p>
            Hospitonet is a revolutionary healthcare ecosystem designed to seamlessly connect hospitals, 
            medical professionals, and patients. Our comprehensive Hospital and Patient Management 
            Application empowers healthcare providers to streamline administrative tasks, enhance patient 
            care, and optimize resource utilization.
          </p>
          <p>
            From appointment scheduling and medical records management to billing and patient engagement, 
            Hospitonet simplifies complex healthcare processes through intuitive design and cutting-edge 
            technology. We are redefining healthcare management by enabling smarter, more efficient, 
            and patient-centered experiences for everyone involved.
          </p>
          <div className="about-features">
            <div className="feature">
              <h3>Patient-Centric</h3>
              <p>Focused on delivering exceptional patient experiences through technology.</p>
            </div>
            <div className="feature">
              <h3>Efficient</h3>
              <p>Streamlining healthcare processes for better efficiency and outcomes.</p>
            </div>
            <div className="feature">
              <h3>Innovative</h3>
              <p>Leveraging cutting-edge technology to transform healthcare delivery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
