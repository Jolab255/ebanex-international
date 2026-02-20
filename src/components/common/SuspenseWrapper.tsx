import React, { useState, useEffect } from 'react';

interface SuspenseWrapperProps {
  children: React.ReactNode;
  fallback: React.ReactNode;
  minDuration?: number;
}

export const SuspenseWrapper: React.FC<SuspenseWrapperProps> = ({
  children,
  fallback,
  minDuration = 500,
}) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    setShowLoader(true);

    const timer = setTimeout(() => {
      setShowLoader(false);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [children, minDuration]);

  return showLoader ? <>{fallback}</> : <>{children}</>;
};

export default SuspenseWrapper;
