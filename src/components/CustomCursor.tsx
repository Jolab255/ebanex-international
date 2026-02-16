
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  
  const mouse = useRef({ x: 0, y: 0 });
  const dotPos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseDown = () => {
      if (ringRef.current) ringRef.current.style.transform += ' scale(0.8)';
    };

    const onMouseUp = () => {
      if (ringRef.current) ringRef.current.style.transform = ringRef.current.style.transform.replace(' scale(0.8)', '');
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = !!target.closest('button, a, input, [role="button"], select, textarea');
      
      if (ringRef.current) {
        if (isHoverable) {
          ringRef.current.classList.add('is-hovering');
        } else {
          ringRef.current.classList.remove('is-hovering');
        }
      }
    };

    const animate = () => {
      // Physics for the dot (snappy)
      dotPos.current.x += (mouse.current.x - dotPos.current.x) * 0.35;
      dotPos.current.y += (mouse.current.y - dotPos.current.y) * 0.35;

      // Physics for the ring (fluid with velocity stretch)
      const prevRingX = ringPos.current.x;
      const prevRingY = ringPos.current.y;
      
      ringPos.current.x += (mouse.current.x - ringPos.current.x) * 0.15;
      ringPos.current.y += (mouse.current.y - ringPos.current.y) * 0.15;
      
      vel.current.x = ringPos.current.x - prevRingX;
      vel.current.y = ringPos.current.y - prevRingY;
      
      const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
      const stretch = 1 + Math.min(speed / 100, 0.4);
      const angle = Math.atan2(vel.current.y, vel.current.x) * (180 / Math.PI);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotPos.current.x}px, ${dotPos.current.y}px, 0)`;
      }

      if (ringRef.current) {
        const isHovering = ringRef.current.classList.contains('is-hovering');
        const scale = isHovering ? 2.5 : 1;
        const opacity = isHovering ? 0.2 : 1;
        
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotate(${angle}deg) scaleX(${stretch * scale}) scaleY(${(1 / stretch) * scale})`;
        ringRef.current.style.opacity = opacity.toString();
        ringRef.current.style.backgroundColor = isHovering ? 'rgba(139, 92, 246, 0.5)' : 'transparent';
        ringRef.current.style.borderColor = isHovering ? 'transparent' : 'rgba(139, 92, 246, 1)';
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    window.addEventListener('mouseover', onMouseOver);
    const rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      window.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Outer Ring */}
      <div 
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 -ml-5 -mt-5 rounded-full border border-purple-500 will-change-transform transition-[border-color,background-color] duration-300"
      />
      {/* Inner Dot */}
      <div 
        ref={dotRef}
        className="fixed top-0 left-0 w-1.5 h-1.5 -ml-0.75 -mt-0.75 bg-white rounded-full mix-blend-difference will-change-transform" 
      />
    </div>
  );
};

export default CustomCursor;
