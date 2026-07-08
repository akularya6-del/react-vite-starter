import React from 'react';
import Hero from './Hero';
import Capabilities from './Capabilities';

interface StudioAppProps {
  onBack: () => void;
}

const StudioApp: React.FC<StudioAppProps> = ({ onBack }) => {
  return (
    <>
      <Hero onStartProject={onBack} />
      <Capabilities />
    </>
  );
};

export default StudioApp;
