import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './Components/Acessibility/AltoContraste/ThemeContext';
import Header from './Components/Header/Header/Header';
import Footer from './Components/Footer/Footer/Footer';
import { RegistroPage } from'./Pages/RegistroPage';
import { LoginPage } from './Pages/LoginPage';
import SearchPage from './Pages/SearchPage';
import AboutPage from './Pages/AboutPage';
import QuestionPage from './Pages/QuestionsPage';
import ServicesPage from './Pages/ServicesPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicos" element={<ServicesPage />} />
          <Route path="/pesquisa" element={<SearchPage />} />
          <Route path="/faq" element={<QuestionPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/registro" element={<RegistroPage/>}/>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;