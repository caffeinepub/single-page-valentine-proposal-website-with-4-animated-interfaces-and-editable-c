import { useEffect, useState } from 'react';
import { valentineContent } from '../../content/valentineContent';
import HeartBurstTransition from '../effects/HeartBurstTransition';

interface Interface2CelebrationProps {
  onNext: () => void;
}

export default function Interface2Celebration({ onNext }: Interface2CelebrationProps) {
  const content = valentineContent.interface2;
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowText(true), 800);
    const timer = setTimeout(() => {
      onNext();
    }, content.autoTransitionDelay);
    return () => clearTimeout(timer);
  }, [onNext, content.autoTransitionDelay]);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-soft-pink">
      <HeartBurstTransition />
      
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            showText ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
          }`}
        >
          <p className="text-xl md:text-2xl text-romantic-dark mb-4 font-medium">
            {content.smallText}
          </p>
          <h1 className="text-celebration text-romantic-dark">
            {content.mainText}
          </h1>
        </div>
      </div>
    </div>
  );
}
