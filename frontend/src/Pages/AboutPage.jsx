import React from 'react';
import Hero from '../Components/About/AboutHero/AboutHero';
import AboutSection1 from '../Components/About/AboutSection1/AboutSection1';
import AboutSection2 from '../Components/About/AboutSection2/AboutSection2';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';
// import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function AboutPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <AboutSection1 />
      <AboutSection2 />
      <AltoContraste />
      {/* <DarkMode /> */}
    </div>
  );
}

export default AboutPage;