import React, { useState } from 'react';
import LandingHero from './components/LandingHero';
import StudioApp from './components/StudioApp';
import ShowreelPage from './components/ShowreelPage';

type ViewState = 'landing' | 'studio' | 'showreel';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  if (currentView === 'showreel') {
    return <ShowreelPage onBack={() => setCurrentView('landing')} />;
  }

  return currentView === 'studio' ? (
    <StudioApp 
      onBack={() => setCurrentView('landing')} 
      onWatchShowreel={() => setCurrentView('showreel')}
    />
  ) : (
    <LandingHero onBeginJourney={() => setCurrentView('studio')} />
  );
};

export default App;
