import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopBar from './components/TopBar';
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
      <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
        <TopBar />
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
