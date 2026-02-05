import { useState, useEffect } from 'react';
import { valentineContent } from '../../../content/valentineContent';

export default function WhatYouAreToMeSection() {
  const content = valentineContent.interface3.whatYoureToMe;
  const [visibleLines, setVisibleLines] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev < content.lines.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 600);

    return () => clearInterval(timer);
  }, [content.lines.length]);

  return (
    <div className="space-y-8 py-8">
      <h2 className="text-3xl font-romantic text-romantic-dark text-center mb-12">
        What You're To Me
      </h2>
      
      <div className="space-y-6">
        {content.lines.map((line, index) => (
          <p
            key={index}
            className={`text-xl md:text-2xl font-romantic text-romantic-dark text-center transition-all duration-1000 ${
              index < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
