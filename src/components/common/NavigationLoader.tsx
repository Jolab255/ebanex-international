import React, { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { PageLoader } from '.';

export const NavigationLoader: React.FC<{ children: React.ReactNode; minDuration?: number }> = ({
  children,
  minDuration = 800,
}) => {
  const location = useLocation();
  const [showLoader, setShowLoader] = useState(true);
  const [currentKey, setCurrentKey] = useState(location.pathname);

  useEffect(() => {
    // Show loader IMMEDIATELY when route changes (start with true)
    setShowLoader(true);
    setCurrentKey(location.pathname);

    // Keep loader visible for minimum duration
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [location.pathname, minDuration]);

  return (
    <>
      {showLoader && <PageLoader key={currentKey} />}
      {!showLoader && <Suspense fallback={<PageLoader />}>{children}</Suspense>}
    </>
  );
};

export default NavigationLoader;
