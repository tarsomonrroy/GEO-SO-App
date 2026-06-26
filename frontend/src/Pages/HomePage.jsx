import React from 'react';
import Hero from '../Components/Home/HomeHero/HomeHero';
import ServiceSection from '../Components/Home/ServiceSection/ServiceSection';
import SearchSection from '../Components/Home/SearchSection/SearchSection';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';
// import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function HomePage() {
  return (
    <div className="flex flex-col">
      <main>
        <Hero />
        <ServiceSection />
        <SearchSection />
        <AltoContraste />
        {/* <DarkMode /> */}
      </main>
    </div>
  );
}

export default HomePage;