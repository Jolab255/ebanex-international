
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ErrorBoundary from './components/ErrorBoundary';
import PageLoader from './components/ui/PageLoader';
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Training = React.lazy(() => import('./pages/Training'));
const CyberLab = React.lazy(() => import('./pages/CyberLab'));
const Consulting = React.lazy(() => import('./pages/Consulting'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col selection:bg-purple-500 selection:text-white">
        <CustomCursor />
        <Navbar />
        <div className="flex-grow">
          <ErrorBoundary>
            <React.Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/training" element={<Training />} />
                <Route path="/cyber-lab" element={<CyberLab />} />
                <Route path="/consulting" element={<Consulting />} />
                <Route path="/contact" element={<Contact />} />
                {/* Fallback */}
                <Route path="*" element={<Home />} />
              </Routes>
            </React.Suspense>
          </ErrorBoundary>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
