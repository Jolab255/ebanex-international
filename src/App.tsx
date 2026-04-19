import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, TopBar, Footer, ScrollToTop } from './components/layout';
import { ErrorBoundary, PageLoader, CookieConsent } from './components/common';
import { NavigationLoader } from './components/common/NavigationLoader';
import { ThemeProvider } from './context/ThemeContext';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Training = lazy(() => import('./pages/Training'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const TrainingProgramDetail = lazy(() => import('./pages/TrainingProgramDetail'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col selection:bg-[#00BFFF] selection:text-black bg-black text-white">
            <TopBar />
            <Navbar />
            <main className="flex-grow overflow-x-clip">
              <ErrorBoundary>
                <NavigationLoader minDuration={300}>
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
                    {/* Dynamic Template Route for all Training Programs */}
                    <Route
                      path="/training/:programId"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <TrainingProgramDetail />
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
                      path="/privacy"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <PrivacyPolicy />
                        </Suspense>
                      }
                    />
                    <Route
                      path="/terms"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <TermsOfService />
                        </Suspense>
                      }
                    />
                    <Route
                      path="*"
                      element={
                        <Suspense fallback={<PageLoader />}>
                          <NotFound />
                        </Suspense>
                      }
                    />
                  </Routes>
                </NavigationLoader>
              </ErrorBoundary>
            </main>
            <Footer />
            <CookieConsent />
          </div>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
