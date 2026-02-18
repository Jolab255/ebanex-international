import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';

type FitTextProps = {
  children: React.ReactNode;
  minScale?: number;
  containerClassName?: string;
  textClassName?: string;
  textStyle?: React.CSSProperties;
};

export default function FitText({
  children,
  minScale = 0.6,
  containerClassName,
  textClassName,
  textStyle,
}: FitTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [scale, setScale] = useState(1);

  const safeMinScale = useMemo(() => {
    if (!Number.isFinite(minScale)) return 0.6;
    return Math.max(0.1, Math.min(1, minScale));
  }, [minScale]);

  const recalc = useCallback(() => {
    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const containerWidth = container.clientWidth;
    const textWidth = text.scrollWidth;

    if (!containerWidth || !textWidth) {
      setScale(1);
      return;
    }

    const next = Math.max(safeMinScale, Math.min(1, containerWidth / textWidth));
    setScale(next);
  }, [safeMinScale]);

  useLayoutEffect(() => {
    recalc();

    const container = containerRef.current;
    const text = textRef.current;
    if (!container || !text) return;

    const ro = new ResizeObserver(() => recalc());
    ro.observe(container);
    ro.observe(text);

    // Fonts/images can shift layout after first paint; run a couple extra recalcs.
    const raf1 = requestAnimationFrame(recalc);
    const raf2 = requestAnimationFrame(recalc);
    const t = window.setTimeout(recalc, 250);

    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
      window.clearTimeout(t);
    };
  }, [recalc]);

  return (
    <span 
      ref={containerRef} 
      className={['block w-full', containerClassName].filter(Boolean).join(' ')}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
    >
      <span
        ref={textRef}
        className={['inline-block whitespace-nowrap', textClassName].filter(Boolean).join(' ')}
        style={{
          ...textStyle,
          transform: `scale(${scale})`,
          transformOrigin: 'center',
          willChange: 'transform',
        }}
      >
        {children}
      </span>
    </span>
  );
}

