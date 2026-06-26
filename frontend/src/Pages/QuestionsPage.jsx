import React from 'react';
import Hero from '../Components/FAQ/FAQHero/FAQHero';
import FAQList from '../Components/FAQ/FAQList/FAQList';
import AltoContraste from '../Components/Acessibility/AltoContraste/AltoContraste';
// import DarkMode from '../Components/Acessibility/DarkMode/Darkmode';

function QuestionPage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FAQList />
      <AltoContraste />
      {/* <DarkMode /> */}
    </div>
  );
}

export default QuestionPage;