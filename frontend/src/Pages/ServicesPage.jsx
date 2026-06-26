import React from 'react';
import Hero from '../Components/Services/ServicesHero/ServicesHero';
import Services from '../Components/Services/ServicesSection/ServicesSection';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';
// import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

const ServicesPage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <Services />
      <AltoContraste />
      {/* <DarkMode /> */}
    </div>
  );
};

export default ServicesPage;