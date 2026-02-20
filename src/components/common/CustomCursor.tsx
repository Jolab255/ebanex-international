import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Hide default cursor
    const originalCursor = document.body.style.cursor;
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      // Cancel any pending frame
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      // Use requestAnimationFrame for smooth but instant updates
      rafRef.current = requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      });
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = !!target.closest(
        'button, a, input, [role="button"], select, textarea, label, [onclick]',
      );

      if (isClickable) {
        cursor.style.width = '20px';
        cursor.style.height = '20px';
        cursor.style.marginLeft = '-10px';
        cursor.style.marginTop = '-10px';
        cursor.style.backgroundColor = 'rgb(59, 130, 246)';
        cursor.style.mixBlendMode = 'normal';
      } else {
        cursor.style.width = '8px';
        cursor.style.height = '8px';
        cursor.style.marginLeft = '-4px';
        cursor.style.marginTop = '-4px';
        cursor.style.backgroundColor = 'white';
        cursor.style.mixBlendMode = 'difference';
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseover', onMouseOver, { passive: true });

    return () => {
      document.body.style.cursor = originalCursor;
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999] hidden md:block rounded-full"
      style={{
        width: '8px',
        height: '8px',
        marginLeft: '-4px',
        marginTop: '-4px',
        backgroundColor: 'white',
        mixBlendMode: 'difference',
        transition:
          'width 0.15s ease-out, height 0.15s ease-out, margin 0.15s ease-out, background-color 0.15s ease-out, mix-blend-mode 0.15s ease-out',
        willChange: 'transform',
        transform: 'translate3d(0, 0, 0)',
      }}
    />
  );
};

export default CustomCursor;
