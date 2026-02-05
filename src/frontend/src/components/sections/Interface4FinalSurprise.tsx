import { useState } from 'react';
import { valentineContent } from '../../content/valentineContent';
import { Button } from '../ui/button';
import OccasionalFloatingHearts from '../effects/OccasionalFloatingHearts';
import { Heart } from 'lucide-react';

export default function Interface4FinalSurprise() {
  const content = valentineContent.interface4;
  const [isOpen, setIsOpen] = useState(false);

  if (!isOpen) {
    return (
      <div className="relative min-h-screen w-full flex items-center justify-center bg-soft-gradient overflow-hidden">
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="button-glow bg-romantic-accent hover:bg-romantic-accent/90 text-white text-2xl px-16 py-8 h-auto rounded-full font-semibold shadow-2xl"
        >
          {content.buttonText}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-soft-gradient overflow-hidden">
      <OccasionalFloatingHearts />
      
      <div className="container mx-auto px-6 py-12 max-w-3xl">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 journal-paper">
          <div className="prose prose-lg max-w-none">
            <div className="text-handwritten text-romantic-dark whitespace-pre-line leading-loose">
              {content.letter}
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-romantic-accent/20 text-center">
            <p className="text-romantic-accent font-semibold flex items-center justify-center gap-2">
              {content.footer.split('love').map((part, i, arr) => (
                <span key={i}>
                  {part}
                  {i < arr.length - 1 && <Heart className="inline w-5 h-5 fill-current" />}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
