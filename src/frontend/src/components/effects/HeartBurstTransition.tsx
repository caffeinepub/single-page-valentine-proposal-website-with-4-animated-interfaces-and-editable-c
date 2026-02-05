import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface BurstHeart {
  id: number;
  x: number;
  y: number;
  angle: number;
  distance: number;
  delay: number;
  isKiss: boolean;
}

export default function HeartBurstTransition() {
  const [hearts, setHearts] = useState<BurstHeart[]>([]);

  useEffect(() => {
    const newHearts: BurstHeart[] = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: 50,
      y: 50,
      angle: (i * 360) / 30,
      distance: 100 + Math.random() * 250,
      delay: Math.random() * 0.3,
      isKiss: i % 5 === 0, // Every 5th particle is a kiss emoji
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-burst-float"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
            animationDelay: `${heart.delay}s`,
            '--angle': `${heart.angle}deg`,
            '--distance': `${heart.distance}px`,
          } as React.CSSProperties}
        >
          {heart.isKiss ? (
            <span className="text-3xl">😘</span>
          ) : (
            <Heart className="w-8 h-8 text-romantic-accent fill-current" />
          )}
        </div>
      ))}
    </div>
  );
}
