import React from 'react';
import './MyServices.css';

function MyServices() {
  const services = [
    {
      name:'Web design',
      description:'Web development is the process of building attractive website for a users'
    },
    {
      name:'App design',
      description:'App design is the process of creating the user interface (UI) and user experience (UX) for a mobile or web application '
    }, 
    {
      name:'Digital marketing',
      description:'Digital marketing is a online platforms to promote products, services, and brands. '
    }, 
  ];

  return (
    <section className="services" id="services">
      <h2>My Services</h2>
      <div className="service-list">
        {services.map((service,index) => (
          <div key={index} className="service-box">
            <h3>{String(index + 1).padStart(2, '0')}</h3>
            <h4>{service.name}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyServices;
