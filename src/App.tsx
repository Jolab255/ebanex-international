import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navbar, TopBar, Footer } from './components/layout';
import { ErrorBoundary, PageLoader, CookieConsent } from './components/common';
import { NavigationLoader } from './components/common/NavigationLoader';
import { ThemeProvider } from './context/ThemeContext';
import { ReactLenis } from 'lenis/react';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Training = lazy(() => import('./pages/Training'));
const Contact = lazy(() => import('./pages/Contact'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const TrainingProgramDetail = lazy(() => import('./pages/TrainingProgramDetail'));
const ITAuditAdvisory = lazy(() => import('./pages/ITAuditAdvisory'));
const DigitalTrustConference = lazy(() => import('./pages/DigitalTrustConference'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FC = () => {
  const basename = import.meta.env.DEV ? '/' : '/dev';

  return (
    <HelmetProvider>
      <ThemeProvider>
        <ReactLenis root options={{ lerp: 0.12, duration: 1.2, smoothWheel: true }}>
          <Router basename={basename}>
            <div className="min-h-screen flex flex-col selection:bg-[#00BFFF] selection:text-black bg-black text-white">
              <TopBar />
              <Navbar />
              <main className="flex-grow overflow-x-clip pt-16 sm:pt-20 lg:pt-24">
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
                      <Route
                        path="/it-audit-advisory"
                        element={
                          <Suspense fallback={<PageLoader />}>
                            <ITAuditAdvisory />
                          </Suspense>
                        }
                      />
                      <Route
                        path="/conference"
                        element={
                          <Suspense fallback={<PageLoader />}>
                            <DigitalTrustConference />
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
        </ReactLenis>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
