import { useState } from 'react';
import { valentineContent } from '../../../content/valentineContent';
import { Mail, X } from 'lucide-react';
import { ScrollArea } from '../../ui/scroll-area';

export default function LettersSection() {
  const letters = valentineContent.interface3.letters;
  const [openLetterId, setOpenLetterId] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-romantic text-romantic-dark text-center mb-8">
        Letters for You
      </h2>
      
      <div className="space-y-4">
        {letters.map((letter) => (
          <div key={letter.id} className="letter-card">
            <button
              onClick={() => setOpenLetterId(openLetterId === letter.id ? null : letter.id)}
              className="w-full text-left p-6 bg-soft-pink/30 rounded-2xl hover:bg-soft-pink/50 transition-all duration-300 flex items-center gap-4"
            >
              <Mail className="w-6 h-6 text-romantic-accent" />
              <span className="text-lg font-medium text-romantic-dark">{letter.title}</span>
            </button>
            
            {openLetterId === letter.id && (
              <div className="mt-4 relative">
                <button
                  onClick={() => setOpenLetterId(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  aria-label="Close letter"
                >
                  <X className="w-5 h-5 text-romantic-dark" />
                </button>
                <ScrollArea className="h-[500px] w-full rounded-2xl">
                  <div className="p-8 bg-vintage-paper rounded-2xl shadow-inner animate-in slide-in-from-top duration-500 letter-unfold vintage-letter">
                    <p className="text-vintage-script text-romantic-dark leading-loose whitespace-pre-line">
                      {letter.content}
                    </p>
                  </div>
                </ScrollArea>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
