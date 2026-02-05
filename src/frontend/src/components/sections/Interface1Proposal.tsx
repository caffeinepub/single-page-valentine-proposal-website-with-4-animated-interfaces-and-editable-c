import { valentineContent } from '../../content/valentineContent';
import FloatingHeartsBackground from '../effects/FloatingHeartsBackground';
import { Button } from '../ui/button';

interface Interface1ProposalProps {
  onNext: () => void;
}

export default function Interface1Proposal({ onNext }: Interface1ProposalProps) {
  const content = valentineContent.interface1;

  return (
    <div className="relative min-h-screen w-full flex flex-col overflow-hidden bg-crimson">
      <FloatingHeartsBackground />
      
      {/* Intro text at top center */}
      <div className="relative z-10 pt-8 md:pt-12 px-6 text-center">
        <p className="text-intro-bubbly text-white whitespace-pre-line">
          {content.introText}
        </p>
      </div>
      
      {/* Main question centered on screen */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-question-romantic text-white whitespace-pre-line leading-relaxed italic">
            {content.questionText}
          </h1>
        </div>
        
        <div className="flex gap-6 justify-center flex-wrap">
          <Button
            onClick={onNext}
            size="lg"
            className="button-glow-enhanced bg-white text-crimson hover:bg-white/90 text-xl px-12 py-6 h-auto rounded-full font-semibold shadow-2xl transition-all duration-300"
          >
            {content.button1}
          </Button>
          <Button
            onClick={onNext}
            size="lg"
            className="button-glow-enhanced bg-white text-crimson hover:bg-white/90 text-xl px-12 py-6 h-auto rounded-full font-semibold shadow-2xl transition-all duration-300"
          >
            {content.button2}
          </Button>
        </div>
      </div>
    </div>
  );
}
