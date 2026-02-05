import { X } from 'lucide-react';
import { Button } from '../ui/button';
import LettersSection from '../memory/sections/LettersSection';
import PlaylistSection from '../memory/sections/PlaylistSection';
import UsIfWeMarrySection from '../memory/sections/UsIfWeMarrySection';
import HowWeMetSection from '../memory/sections/HowWeMetSection';
import WhatYouAreToMeSection from '../memory/sections/WhatYouAreToMeSection';
import HowSpecialYouAreSection from '../memory/sections/HowSpecialYouAreSection';
import WhyIllNeverLeaveYouSection from '../memory/sections/WhyIllNeverLeaveYouSection';

interface MemoryOverlayProps {
  sectionId: string;
  onClose: () => void;
}

export default function MemoryOverlay({ sectionId, onClose }: MemoryOverlayProps) {
  const renderSection = () => {
    switch (sectionId) {
      case 'letters':
        return <LettersSection />;
      case 'playlist':
        return <PlaylistSection />;
      case 'us-if-we-marry':
        return <UsIfWeMarrySection />;
      case 'how-we-met':
        return <HowWeMetSection />;
      case 'what-youre-to-me':
        return <WhatYouAreToMeSection />;
      case 'how-special-you-are':
        return <HowSpecialYouAreSection />;
      case 'why-ill-never-leave':
        return <WhyIllNeverLeaveYouSection />;
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        <Button
          onClick={onClose}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 z-10 rounded-full bg-white/80 hover:bg-white shadow-lg"
        >
          <X className="w-6 h-6" />
        </Button>
        
        <div className="overflow-y-auto max-h-[90vh] p-8 md:p-12">
          {renderSection()}
        </div>
      </div>
    </div>
  );
}
