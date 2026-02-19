'use client';

import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface ProgressSliderContextType {
  activeSlider: string;
  setActiveSlider: (value: string) => void;
  goNext: () => void;
  vertical: boolean;
}

const ProgressSliderContext = createContext<ProgressSliderContextType | undefined>(undefined);

export const useProgressSlider = () => {
  const context = useContext(ProgressSliderContext);
  if (!context) {
    throw new Error('useProgressSlider must be used within ProgressSlider');
  }
  return context;
};

interface ProgressSliderProps {
  children: React.ReactNode;
  activeSlider: string;
  vertical?: boolean;
}

export const ProgressSlider: React.FC<ProgressSliderProps> = ({
  children,
  activeSlider: initialActiveSlider,
  vertical = false,
}) => {
  const [activeSlider, setActiveSlider] = useState(initialActiveSlider);

  // Find all slider values from SliderBtn children
  const sliderValues = useRef<string[]>([]);

  useEffect(() => {
    // Extract slider values from children
    const extractSliderValues = (node: React.ReactNode): string[] => {
      const values: string[] = [];
      React.Children.forEach(node, (child) => {
        if (React.isValidElement(child)) {
          const props = child.props as { value?: string; children?: React.ReactNode };
          if (props.value) {
            values.push(props.value);
          }
          if (props.children) {
            values.push(...extractSliderValues(props.children));
          }
        }
      });
      return values;
    };

    sliderValues.current = extractSliderValues(children);
  }, [children]);

  const goNext = () => {
    setActiveSlider((current) => {
      const values = sliderValues.current;
      if (!values.length) return current;
      const currentIndex = values.indexOf(current);
      const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % values.length;
      return values[nextIndex];
    });
  };

  return (
    <ProgressSliderContext.Provider value={{ activeSlider, setActiveSlider, goNext, vertical }}>
      <div className="relative w-full h-full">{children}</div>
    </ProgressSliderContext.Provider>
  );
};

interface SliderContentProps {
  children: React.ReactNode;
}

export const SliderContent: React.FC<SliderContentProps> = ({ children }) => {
  return <div className="relative w-full h-full">{children}</div>;
};

interface SliderWrapperProps {
  children: React.ReactNode;
  value: string;
}

export const SliderWrapper: React.FC<SliderWrapperProps> = ({ children, value }) => {
  const { activeSlider } = useProgressSlider();
  const isActive = activeSlider === value;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.06 }}
      animate={{ opacity: isActive ? 1 : 0, scale: isActive ? 1 : 1.02 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        'absolute inset-0 w-full h-full',
        isActive ? 'z-10' : 'z-0 pointer-events-none',
      )}
    >
      {children}
    </motion.div>
  );
};

interface SliderBtnGroupProps {
  children: React.ReactNode;
  className?: string;
}

export const SliderBtnGroup: React.FC<SliderBtnGroupProps> = ({ children, className }) => {
  return <div className={cn('flex', className)}>{children}</div>;
};

interface SliderBtnProps {
  children: React.ReactNode;
  value: string;
  className?: string;
  progressBarClass?: string;
}

export const SliderBtn: React.FC<SliderBtnProps> = ({
  children,
  value,
  className,
  progressBarClass,
}) => {
  const { activeSlider, setActiveSlider } = useProgressSlider();
  const isActive = activeSlider === value;
  const animationId = `progress-animation-${value}`;
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (isActive) {
      setAnimationKey(Date.now());
    }
  }, [isActive]);

  return (
    <>
      <style>
        {`
          @keyframes ${animationId} {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
      <button
        onClick={() => setActiveSlider(value)}
        className={cn(
          'relative overflow-hidden transition-all',
          isActive ? 'opacity-100' : 'opacity-60 hover:opacity-80',
          className,
        )}
      >
        <div className="relative z-10">{children}</div>
        {isActive && (
          <div
            key={animationKey}
            className={cn('absolute bottom-0 left-0 h-1', progressBarClass)}
            style={{
              width: '0%',
              animation: `${animationId} 9.8s linear forwards`,
            }}
          />
        )}
      </button>
    </>
  );
};

interface AutoProgressBarProps {
  /** Duration in ms (default: 9800) */
  durationMs?: number;
  className?: string;
  barClassName?: string;
}

export const AutoProgressBar: React.FC<AutoProgressBarProps> = ({
  durationMs = 9800,
  className,
  barClassName,
}) => {
  const { activeSlider, goNext } = useProgressSlider();
  const animationId = `auto-progress-${activeSlider}`;
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    setAnimationKey(Date.now());
  }, [activeSlider]);

  return (
    <>
      <style>
        {`
          @keyframes ${animationId} {
            from { width: 0%; }
            to { width: 100%; }
          }
        `}
      </style>
      <div className={cn('relative h-1 w-full overflow-hidden', className)}>
        <div
          key={animationKey}
          className={cn('absolute left-0 top-0 h-full bg-blue-500', barClassName)}
          style={{
            width: '0%',
            animation: `${animationId} ${durationMs}ms linear forwards`,
          }}
          onAnimationEnd={() => {
            // Only advance when the current active animation completes.
            goNext();
          }}
        />
      </div>
    </>
  );
};
