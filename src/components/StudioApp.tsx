import React from 'react';
import Hero from './Hero';
import Capabilities from './Capabilities';

interface StudioAppProps {
  onBack: () => void;
  onWatchShowreel?: () => void;
}

const StudioApp: React.FC<StudioAppProps> = ({ onBack, onWatchShowreel }) => {
  return (
    <>
      <Hero onStartProject={onBack} onWatchShowreel={onWatchShowreel} />
      <Capabilities />
    </>
  );
};

export default StudioApp;
