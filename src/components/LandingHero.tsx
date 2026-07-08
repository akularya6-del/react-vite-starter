import React from 'react';

interface LandingHeroProps {
  onBeginJourney: () => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onBeginJourney }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto w-full">
          <div 
            className="text-2xl md:text-3xl tracking-tight text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Velorah<sup className="text-xs">®</sup>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <a href="#" className="text-sm text-foreground transition-colors">Home</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Studio</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Journal</a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Reach Us</a>
          </div>

          <button 
            onClick={onBeginJourney}
            className="liquid-glass rounded-full px-4 py-2 text-xs md:px-6 md:py-2.5 md:text-sm text-foreground hover:scale-[1.03] transition-transform"
          >
            Begin Journey
          </button>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 py-20 md:py-[90px]">
          <h1 
            className="animate-fade-rise text-4xl sm:text-6xl md:text-8xl leading-[1.1] md:leading-[0.95] tracking-[-1px] md:tracking-[-2.46px] max-w-7xl font-normal text-foreground"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Where <em className="not-italic text-muted-foreground">dreams</em> rise <em className="not-italic text-muted-foreground">through the silence.</em>
          </h1>
          
          <p className="animate-fade-rise-delay text-muted-foreground text-sm sm:text-lg max-w-2xl mt-6 md:mt-8 leading-relaxed">
            We're designing tools for deep thinkers, bold creators, and quiet rebels. Amid the chaos, we build digital spaces for sharp focus and inspired work.
          </p>

          <button 
            onClick={onBeginJourney}
            className="animate-fade-rise-delay-2 liquid-glass rounded-full px-8 py-3.5 text-sm md:px-14 md:py-5 md:text-base text-foreground mt-8 md:mt-12 hover:scale-[1.03] transition-transform cursor-pointer"
          >
            Begin Journey
          </button>
        </main>
      </div>
    </div>
  );
};

export default LandingHero;
