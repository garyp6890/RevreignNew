// File: src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Links from './pages/Links';
import AmazonStorefront from './pages/AmazonStorefront';
import WalmartStorefront from './pages/WalmartStorefront';
import Partnerships from './pages/Partnerships';
import Merchandise from './pages/Merchandise';
import TemplatePage from './pages/TemplatePage';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/links" element={<Links />} />
              <Route path="/amazon" element={<AmazonStorefront />} />
              <Route path="/walmart" element={<WalmartStorefront />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/merchandise" element={<Merchandise />} />

              {/* Template-driven pages: slug-based */}
              <Route path="/page/:slug" element={<TemplatePage />} />

              {/* Optional: catch-all 404 route (if you have a NotFound component) */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
          <ThemeToggle />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
