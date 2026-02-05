import { Heart } from 'lucide-react';

interface Particle {
  id: number;
  x: number;
  y: number;
}

interface ClickHeartParticlesProps {
  particles: Particle[];
  onRemove: (id: number) => void;
}

export default function ClickHeartParticles({ particles }: ClickHeartParticlesProps) {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-click-heart"
          style={{
            left: particle.x,
            top: particle.y,
          }}
        >
          <Heart className="w-6 h-6 text-romantic-accent fill-current" />
        </div>
      ))}
    </div>
  );
}
