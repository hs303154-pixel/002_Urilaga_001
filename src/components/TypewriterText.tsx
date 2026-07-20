import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({ text, speed = 50, className = '' }) => {
  const [displayedText, setDisplayedText] = useState('');
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, margin: "-10%" });

  useEffect(() => {
    if (!isInView) return;

    let currentIndex = 0;
    setDisplayedText('');

    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        const char = text[currentIndex];
        setDisplayedText((prev) => prev + char);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, isInView]);

  return (
    <div ref={containerRef} className={className}>
      {displayedText}
      {isInView && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: 5, duration: 0.8 }}
          className="inline-block w-2 h-5 bg-white/70 ml-1 translate-y-1"
        />
      )}
    </div>
  );
};
