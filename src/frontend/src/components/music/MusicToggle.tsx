import { Music, VolumeX } from 'lucide-react';
import { Button } from '../ui/button';
import { useMusic } from './MusicController';

export default function MusicToggle() {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <Button
      onClick={toggleMusic}
      variant="ghost"
      size="icon"
      className="fixed top-4 right-4 z-40 rounded-full bg-white/80 hover:bg-white shadow-lg backdrop-blur-sm"
      aria-label={isPlaying ? 'Pause music' : 'Play music'}
    >
      {isPlaying ? (
        <Music className="w-5 h-5 text-romantic-accent" />
      ) : (
        <VolumeX className="w-5 h-5 text-romantic-dark/50" />
      )}
    </Button>
  );
}
