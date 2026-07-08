import React, { useState } from 'react';
import LandingHero from './components/LandingHero';
import StudioApp from './components/StudioApp';

const App: React.FC = () => {
  const [showStudio, setShowStudio] = useState(false);

  return showStudio ? (
    <StudioApp onBack={() => setShowStudio(false)} />
  ) : (
    <LandingHero onBeginJourney={() => setShowStudio(true)} />
  );
};

export default App;
