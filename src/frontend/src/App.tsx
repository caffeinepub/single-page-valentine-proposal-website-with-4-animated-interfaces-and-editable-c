import { useState, useEffect } from 'react';
import { ThemeProvider } from 'next-themes';
import Interface1Proposal from './components/sections/Interface1Proposal';
import Interface2Celebration from './components/sections/Interface2Celebration';
import Interface3MemoryMenu from './components/sections/Interface3MemoryMenu';
import Interface4FinalSurprise from './components/sections/Interface4FinalSurprise';
import ClickHeartParticles from './components/effects/ClickHeartParticles';
import MusicToggle from './components/music/MusicToggle';
import { MusicProvider } from './components/music/MusicController';

type InterfaceState = 'proposal' | 'celebration' | 'memory' | 'final';

function App() {
  const [currentInterface, setCurrentInterface] = useState<InterfaceState>('proposal');
  const [clickParticles, setClickParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: React.MouseEvent) => {
    const newParticle = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
    };
    setClickParticles((prev) => [...prev, newParticle]);
    setTimeout(() => {
      setClickParticles((prev) => prev.filter((p) => p.id !== newParticle.id));
    }, 2000);
  };

  const handleRemoveParticle = (id: number) => {
    setClickParticles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <MusicProvider>
        <div className="min-h-screen w-full overflow-x-hidden" onClick={handleClick}>
          <MusicToggle />
          <ClickHeartParticles particles={clickParticles} onRemove={handleRemoveParticle} />
          
          {currentInterface === 'proposal' && (
            <Interface1Proposal onNext={() => setCurrentInterface('celebration')} />
          )}
          
          {currentInterface === 'celebration' && (
            <Interface2Celebration onNext={() => setCurrentInterface('memory')} />
          )}
          
          {currentInterface === 'memory' && (
            <Interface3MemoryMenu onNext={() => setCurrentInterface('final')} />
          )}
          
          {currentInterface === 'final' && (
            <Interface4FinalSurprise />
          )}
        </div>
      </MusicProvider>
    </ThemeProvider>
  );
}

export default App;
