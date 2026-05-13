import React, { useEffect, useRef } from 'react';

interface TurnstileCaptchaProps {
  onVerify: (token: string) => void;
  sitekey?: string;
  theme?: 'light' | 'dark' | 'auto';
  size?: 'normal' | 'compact' | 'flexible';
}

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          theme?: string;
          size?: string;
          'error-callback'?: () => void;
          'expired-callback'?: () => void;
        },
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

const TurnstileCaptcha: React.FC<TurnstileCaptchaProps> = ({
  onVerify,
  sitekey = '0x4AAAAAADOqU3GlyayYOSi1', // Real sitekey
  theme = 'dark',
  size = 'flexible',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const onVerifyRef = useRef(onVerify);

  // Update the ref whenever onVerify changes without triggering effects
  useEffect(() => {
    onVerifyRef.current = onVerify;
  }, [onVerify]);

  useEffect(() => {
    let isMounted = true;

    const renderTurnstile = () => {
      if (!isMounted) return;

      if (window.turnstile && containerRef.current && !widgetIdRef.current) {
        try {
          widgetIdRef.current = window.turnstile.render(containerRef.current, {
            sitekey,
            callback: (token: string) => {
              if (isMounted) onVerifyRef.current(token);
            },
            theme,
            size,
            'error-callback': () => {
              console.error('Turnstile error');
              if (isMounted) onVerifyRef.current('');
            },
            'expired-callback': () => {
              if (isMounted) onVerifyRef.current('');
            },
          });
        } catch (err) {
          console.error('Turnstile render failed:', err);
        }
      }
    };

    if (window.turnstile) {
      // Small delay to ensure script is fully ready and DOM is stable
      const timeout = setTimeout(renderTurnstile, 100);
      return () => {
        isMounted = false;
        clearTimeout(timeout);
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    } else {
      // If script hasn't loaded yet, check periodically
      const interval = setInterval(() => {
        if (window.turnstile) {
          renderTurnstile();
          clearInterval(interval);
        }
      }, 500);
      return () => {
        isMounted = false;
        clearInterval(interval);
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current);
          widgetIdRef.current = null;
        }
      };
    }
    // We intentionally exclude onVerifyRef from dependencies to prevent re-render loops
    // sitekey, theme and size changes should still trigger a re-render
  }, [sitekey, theme, size]);

  // Use a plain div without 'cf-turnstile' class to avoid auto-rendering by the script
  return (
    <div
      ref={containerRef}
      className="turnstile-container flex justify-center w-full"
      style={{ minHeight: '65px' }}
    />
  );
};

export default TurnstileCaptcha;
