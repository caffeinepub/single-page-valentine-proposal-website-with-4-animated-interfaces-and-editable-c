import { useState } from 'react';
import { valentineContent } from '../../content/valentineContent';
import MemoryIconGrid from '../memory/MemoryIconGrid';
import MemoryOverlay from '../overlays/MemoryOverlay';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Interface3MemoryMenuProps {
  onNext: () => void;
}

export default function Interface3MemoryMenu({ onNext }: Interface3MemoryMenuProps) {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  return (
    <div className="relative min-h-screen w-full bg-soft-gradient overflow-hidden">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl font-romantic text-center text-romantic-dark mb-12">
          Our Beautiful Memories
        </h1>
        
        <MemoryIconGrid
          items={valentineContent.interface3.menuItems}
          onItemClick={(id) => setSelectedSection(id)}
        />

        <div className="mt-16 flex justify-center">
          <Button
            onClick={onNext}
            size="lg"
            className="bg-romantic-primary hover:bg-romantic-primary/90 text-white font-romantic text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Next
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {selectedSection && (
        <MemoryOverlay
          sectionId={selectedSection}
          onClose={() => setSelectedSection(null)}
        />
      )}
    </div>
  );
}
