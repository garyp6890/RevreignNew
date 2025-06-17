import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ErrorBoundary from './components/ui/ErrorBoundary';
import LoadingSpinner from './components/ui/LoadingSpinner';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import { ROUTES } from './utils/constants';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));
const Links = lazy(() => import('./pages/Links'));
const AmazonStorefront = lazy(() => import('./pages/AmazonStorefront'));
const WalmartStorefront = lazy(() => import('./pages/WalmartStorefront'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Merchandise = lazy(() => import('./pages/Merchandise'));
const TemplatePage = lazy(() => import('./pages/TemplatePage'));

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-rev-light">
    <LoadingSpinner size="lg" />
  </div>
);

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Suspense fallback={<LoadingFallback />}>
                <Routes>
                  <Route path={ROUTES.HOME} element={<Home />} />
                  <Route path={ROUTES.LINKS} element={<Links />} />
                  <Route path={ROUTES.AMAZON} element={<AmazonStorefront />} />
                  <Route path={ROUTES.WALMART} element={<WalmartStorefront />} />
                  <Route path={ROUTES.PARTNERSHIPS} element={<Partnerships />} />
                  <Route path={ROUTES.MERCHANDISE} element={<Merchandise />} />
                  <Route path={ROUTES.PAGE} element={<TemplatePage />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <ScrollToTop />
            <ThemeToggle />
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;