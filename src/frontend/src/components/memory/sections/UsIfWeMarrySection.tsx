import { valentineContent } from '../../../content/valentineContent';
import { Heart, Sparkles } from 'lucide-react';

export default function UsIfWeMarrySection() {
  const content = valentineContent.interface3.usIfWeMarry;

  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center gap-2 mb-4">
          <Sparkles className="w-6 h-6 text-romantic-accent" />
          <h2 className="text-3xl font-romantic text-romantic-dark">
            Us If We Marry
          </h2>
          <Sparkles className="w-6 h-6 text-romantic-accent" />
        </div>
      </div>
      
      <div className="space-y-6">
        {content.paragraphs.map((paragraph, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-white to-soft-pink/30 rounded-2xl p-6 shadow-lg animate-in fade-in slide-in-from-bottom duration-700"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            <p className="text-romantic-dark leading-relaxed text-lg whitespace-pre-line">
              {paragraph}
            </p>
            {index < content.paragraphs.length - 1 && (
              <div className="flex justify-center mt-4">
                <Heart className="w-5 h-5 text-romantic-accent/50 fill-current" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
