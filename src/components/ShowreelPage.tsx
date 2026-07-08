import React from 'react';

interface ShowreelPageProps {
  onBack: () => void;
}

const ShowreelPage: React.FC<ShowreelPageProps> = ({ onBack }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
        autoPlay
        loop
        muted
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260411_104032_69319010-2458-492b-b04d-b40a5dfa4482.mp4"
      />

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Navigation Bar */}
        <nav className="flex flex-row justify-between items-center px-4 md:px-8 py-4 md:py-6 max-w-7xl mx-auto w-full">
          <div 
            className="text-2xl md:text-3xl tracking-tight text-white cursor-pointer"
            style={{ fontFamily: "'Instrument Serif', serif" }}
            onClick={onBack}
          >
            Velorah<sup className="text-xs">®</sup>
          </div>
          
          <button 
            onClick={onBack}
            className="liquid-glass rounded-full px-4 py-2 text-xs md:px-6 md:py-2.5 md:text-sm text-white hover:scale-[1.03] transition-transform font-studio"
          >
            Close Showreel
          </button>
        </nav>

        {/* Hero Section */}
        <main className="flex flex-col items-center justify-center flex-1 text-center px-4 sm:px-6 py-20">
          <h1 
            className="animate-fade-rise text-4xl sm:text-6xl md:text-8xl leading-[1.1] md:leading-[0.95] tracking-[-1px] md:tracking-[-2.46px] max-w-5xl font-normal text-white"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            <em className="not-italic text-white/70">A glimpse into</em> our world.
          </h1>
          
          <p className="animate-fade-rise-delay text-white/70 text-sm sm:text-lg max-w-xl mt-6 md:mt-8 leading-relaxed font-studio">
            Behind every digital experience is a pursuit of perfection. This is how we shape the silence.
          </p>
        </main>
      </div>
    </div>
  );
};

export default ShowreelPage;
