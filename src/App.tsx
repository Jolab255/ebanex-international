import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, TopBar, Footer, ScrollToTop } from './components/layout';
import { ErrorBoundary, PageLoader } from './components/common';
import { NavigationLoader } from './components/common/NavigationLoader';
import { ThemeProvider } from './context/ThemeContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Training = lazy(() => import('./pages/Training'));
const CorporateSolutions = lazy(() => import('./pages/CorporateSolutions'));
const CyberLab = lazy(() => import('./pages/CyberLab'));
const Consulting = lazy(() => import('./pages/Consulting'));
const Research = lazy(() => import('./pages/Research'));
const Partnerships = lazy(() => import('./pages/Partnerships'));
const Careers = lazy(() => import('./pages/Careers'));
const News = lazy(() => import('./pages/News'));
const Contact = lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white bg-slate-950 text-white">
            <TopBar />
            <Navbar />
            <main className="flex-grow">
              <ErrorBoundary>
                <NavigationLoader minDuration={800}>
                  <Routes>
                    <Route
                      path="/"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Home />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/about"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <About />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/training"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Training />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/corporate-solutions"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <CorporateSolutions />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/cyber-lab"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <CyberLab />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/consulting"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Consulting />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/research"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Research />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/partnerships"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Partnerships />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/careers"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Careers />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/news"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <News />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/contact"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Contact />
                        </Suspense>
                      }
                    />
                    <Route
                      path="*"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <Home />
                        </Suspense>
                      }
                    />
                  </Routes>
                </NavigationLoader>
              </ErrorBoundary>
            </main>
            <Footer />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
