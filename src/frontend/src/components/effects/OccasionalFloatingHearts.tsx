import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

export default function OccasionalFloatingHearts() {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newHeart: FloatingHeart = {
        id: Date.now(),
        x: Math.random() * 100,
        y: Math.random() * 100,
      };
      setHearts((prev) => [...prev, newHeart]);
      
      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 4000);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-gentle-float opacity-40"
          style={{
            left: `${heart.x}%`,
            top: `${heart.y}%`,
          }}
        >
          <Heart className="w-6 h-6 text-romantic-accent fill-current" />
        </div>
      ))}
    </div>
  );
}
