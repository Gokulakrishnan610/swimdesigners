import React from 'react';
import backImage from '../assets/Background/back.png';

interface WaterWaveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

const WaterWaveBackground: React.FC<WaterWaveBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  return (
    <div className={`w-full h-full relative overflow-hidden ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backImage})`,
          zIndex: -2
        }}
      />
      
      {/* Water Wave Overlay */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {/* Multiple wave layers */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full animate-pulse blur-sm" style={{ animationDuration: '4s' }}></div>
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-400 to-blue-300 rounded-full animate-pulse blur-sm" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse blur-sm" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-cyan-300 to-blue-200 rounded-full animate-pulse blur-sm" style={{ animationDuration: '3s', animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Ripple effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/3 left-1/3 w-40 h-40 border-2 border-blue-300 rounded-full animate-ping" style={{ animationDuration: '3s' }}></div>
          <div className="absolute top-2/3 right-1/3 w-32 h-32 border-2 border-cyan-300 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-blue-200 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/2 w-36 h-36 border-2 border-cyan-200 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full animate-float shadow-lg"
              style={{
                left: `${15 + i * 7}%`,
                top: `${25 + (i % 4) * 15}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + i * 0.5}s`
              }}
            />
          ))}
        </div>
        
        {/* Additional wave effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-300 to-transparent animate-pulse" style={{ animationDuration: '8s' }}></div>
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-300 to-transparent animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
        </div>
        
        {/* Wave animation elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-24 h-24 border border-blue-200 rounded-full animate-ripple" style={{ animationDelay: '0s' }}></div>
          <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-cyan-200 rounded-full animate-ripple" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-2/3 left-1/3 w-28 h-28 border border-blue-100 rounded-full animate-ripple" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
};

export default WaterWaveBackground; 