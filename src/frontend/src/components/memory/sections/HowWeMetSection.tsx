import { valentineContent } from '../../../content/valentineContent';
import { Heart } from 'lucide-react';

export default function HowWeMetSection() {
  const content = valentineContent.interface3.howWeMet;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-romantic text-romantic-dark text-center mb-8">
        How We Met
      </h2>
      
      <div className="space-y-6">
        {content.paragraphs.map((paragraph, index) => (
          <div key={index}>
            <p className="text-romantic-dark leading-relaxed text-lg text-center whitespace-pre-line">
              {paragraph}
            </p>
            {index < content.paragraphs.length - 1 && (
              <div className="flex justify-center my-6">
                <Heart className="w-4 h-4 text-romantic-accent fill-current" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
