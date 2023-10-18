import React from 'react';
import './Services.css';
export default function Services() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const serviceBoxStyle = {
    border: '1px solid #ccc',
    padding: '20px',
    width: '70%',
    marginBottom: '20px',
    backgroundColor: '#f0f0f0',
  };

  const sectionStyle = {
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={containerStyle} className="service-container">
      <div style={serviceBoxStyle} className="interior-detailing-box">
        <div style={sectionStyle} className="description">
          <h2>Interior Detailing</h2>
          <p>
            Discover our exceptional Interior Detailing service where we employ the finest methods and techniques to transform your vehicle's interior into a haven of cleanliness and comfort. Our meticulous process goes above and beyond traditional vehicle cleaning, ensuring your vehicle's interior is treated with the most care and attention to detail.
          </p>
        </div>
        <div style={sectionStyle} className="additional-info">
          <h3>Our interior detailing package includes:</h3>
          <ul>
            <li>Vacuum Carpets, Seats & Ashtrays</li>
            <li>Wipe Plastic & Vinyl Surfaces</li>
            <li>Clean All Interior Glass</li>
            <li>Clean Door Jambs</li>
            <li>Towel Drying</li>
          </ul>
        </div>
      </div>

      <div style={serviceBoxStyle} className="exterior-detailing-box">
        <div style={sectionStyle} className="description">
          <h2>Exterior Detailing</h2>
          <p>
            Experience excellence with our Exterior Detailing service, where we employ cutting-edge techniques to reveal the full splendor of your vehicle's exterior. We take pride in offering top-tier methods, ensuring your vehicle not only shines but is also protected against the elements.
          </p>
        </div>
        <div style={sectionStyle} className="additional-info">
          <h3>Our exterior detailing package includes:</h3>
          <ul>
            <li>Basic Wash: Standard exterior cleaning.</li>
            <li>Deluxe Wash: Premium wash with tire and rim cleaning.</li>
            <li>Premium Wash: Basic wash with additional wax or polish.</li>
            <li>Hand Wash: Thorough hand washing for a more personalized touch.</li>
          </ul>
        </div>
      </div>

      <div style={serviceBoxStyle} className="full-service-packages-box">
        <div style={sectionStyle} className="description">
          <h2>Full-Service Packages</h2>
          <p>
            Discover our Full-Service Packages, where we blend expertise with state-of-the-art methods to offer you a comprehensive vehicle care experience like no other. With an unwavering commitment to excellence, our packages go beyond traditional car care, ensuring your vehicle receives the utmost attention, rejuvenation, and protection.
          </p>
        </div>
        <div style={sectionStyle} className="additional-info">
          <h3>Our full-service packages include:</h3>
          <ul>
            <li>Full-Service Wash: Includes both exterior and interior cleaning.</li>
            <li>Express Detail: A combination of exterior wash and interior detailing.</li>
            <li>Paint Brilliance: We enhance your vehicle's paint to reveal its true brilliance, giving it a deep and radiant shine.</li>
            <li>Wheel and Rim Excellence: Our specialized care ensures wheels and rims shine brilliantly, adding to your vehicle's overall appeal.</li>
          </ul>
        </div>
      </div>

      <div style={serviceBoxStyle} className="additional-services-box">
        <div style={sectionStyle} className="description">
          <h2>Additional Services</h2>
          <p>
            Explore our Additional Services, where we extend our commitment to excellence to accommodate your specific vehicle care preferences. With unparalleled attention to detail and a passion for perfection, our additional services are designed to enhance your vehicle's aesthetics, performance, and overall experience.
          </p>
        </div>
        <div style={sectionStyle} className="additional-info">
          <h3>Our specialty-service packages include:</h3>
          <ul>
            <li>Tire Dressing: Applying a glossy finish to tires.</li>
            <li>Window Tinting: Tinting windows for privacy and UV protection.</li>
            <li>Ceramic Coating: Long-lasting paint protection and shine.</li>
            <li>Windshield Repair/Replacement: Fixing or replacing damaged windshields.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
