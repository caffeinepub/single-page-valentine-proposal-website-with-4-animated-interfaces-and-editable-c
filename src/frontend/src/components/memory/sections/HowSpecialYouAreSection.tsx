import { useState, useEffect } from 'react';
import { valentineContent } from '../../../content/valentineContent';
import { Sparkles } from 'lucide-react';

export default function HowSpecialYouAreSection() {
  const content = valentineContent.interface3.howSpecialYouAre;
  const [visibleCards, setVisibleCards] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleCards((prev) => {
        if (prev < content.compliments.length) {
          return prev + 1;
        }
        clearInterval(timer);
        return prev;
      });
    }, 400);

    return () => clearInterval(timer);
  }, [content.compliments.length]);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-romantic text-romantic-dark text-center mb-12">
        How Special You Are
      </h2>
      
      <div className="grid gap-6">
        {content.compliments.map((compliment, index) => (
          <div
            key={index}
            className={`bg-gradient-to-br from-romantic-accent/20 to-soft-pink/30 rounded-2xl p-6 shadow-lg transition-all duration-700 ${
              index < visibleCards
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-4">
              <Sparkles className="w-6 h-6 text-romantic-accent flex-shrink-0" />
              <p className="text-lg text-romantic-dark font-medium">
                {compliment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
