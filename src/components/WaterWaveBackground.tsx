import React, { useState, useEffect, useRef, useCallback } from 'react';
import backImage from '../assets/Background/back.png';
//import backImage from '../assets/Background/back.png';

interface WaterWaveBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  createdAt: number;
}

const WaterWaveBackground: React.FC<WaterWaveBackgroundProps> = ({ 
  children, 
  className = "" 
}) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [touchActive, setTouchActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rippleIdRef = useRef(0);
  const mouseTimeoutRef = useRef<NodeJS.Timeout>();
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Create a new ripple
  const createRipple = useCallback((x: number, y: number, size: number = 100) => {
    const newRipple: Ripple = {
      id: rippleIdRef.current++,
      x,
      y,
      size,
      opacity: 1,
      createdAt: Date.now(),
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 3000);
  }, []);

  // Handle mouse/touch movement
  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsMouseMoving(true);
    
    // Clear previous timeout
    if (mouseTimeoutRef.current) {
      clearTimeout(mouseTimeoutRef.current);
    }
    
    // Set timeout to stop movement detection
    mouseTimeoutRef.current = setTimeout(() => {
      setIsMouseMoving(false);
    }, 100);
    
    // Create ripples based on movement speed
    const speed = Math.sqrt(
      Math.pow(x - lastMousePosition.current.x, 2) + Math.pow(y - lastMousePosition.current.y, 2)
    );
    
    if (speed > 3) {
      createRipple(x, y, Math.min(speed * 1.5, 180));
    }
    
    lastMousePosition.current = { x, y };
  }, [createRipple]);

  // Handle touch events
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsMouseMoving(true);
    setTouchActive(true);
    
    // Create ripples for touch movement
    createRipple(x, y, 150);
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 200);
  }, [createRipple]);

  // Handle click/tap events
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    createRipple(x, y, 120);
  }, [createRipple]);

  // Handle touch start
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setTouchActive(true);
    createRipple(x, y, 100);
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 300);
  }, [createRipple]);

  // Add global mouse move listener for movement-based effects
  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only create ripples if mouse is within container bounds
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          handleMouseMove(e as any);
        }
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [handleMouseMove]);

  // Cleanup timeouts
  useEffect(() => {
    return () => {
      if (mouseTimeoutRef.current) {
        clearTimeout(mouseTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`w-full h-full relative overflow-hidden cursor-none ${className}`}
      onMouseMove={handleMouseMove}
      onClick={handleClick}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backImage})`,
          zIndex: -2
        }}
      />
      
      {/* Interactive Water Wave Overlay */}
      <div className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
        {/* Dynamic ripples from interactions */}
        {ripples.map((ripple) => {
          const age = Date.now() - ripple.createdAt;
          const progress = Math.min(age / 3000, 1);
          const scale = 1 + progress * 3;
          const opacity = 1 - progress;
          
          return (
            <div
              key={ripple.id}
              className="absolute pointer-events-none"
              style={{
                left: ripple.x - ripple.size / 2,
                top: ripple.y - ripple.size / 2,
                width: ripple.size,
                height: ripple.size,
                transform: `scale(${scale})`,
                opacity: opacity,
                transition: 'transform 3s ease-out, opacity 3s ease-out',
              }}
            >
              <div className="w-full h-full border-2 border-blue-400 rounded-full animate-water-ripple" 
                   style={{ animationDuration: '3s' }} />
            </div>
          );
        })}
        
        {/* Mouse/touch cursor effect */}
        {isMouseMoving && (
          <div
            className="absolute pointer-events-none w-8 h-8 border-2 border-blue-600 rounded-full animate-cursor-glow"
            style={{
              left: mousePosition.x - 16,
              top: mousePosition.y - 16,
              zIndex: 10,
            }}
          />
        )}
        
        {/* Touch active indicator */}
        {touchActive && (
          <div
            className="absolute pointer-events-none w-12 h-12 border-4 border-cyan-500 rounded-full animate-touch-ripple"
            style={{
              left: mousePosition.x - 24,
              top: mousePosition.y - 24,
              zIndex: 10,
            }}
          />
        )}
        
        {/* Multiple wave layers with movement response */}
        <div className="absolute inset-0 opacity-40">
          <div 
            className={`absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse blur-sm ${touchActive ? 'animate-water-disturbance' : ''}`}
            style={{ 
              animationDuration: '4s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 400) * 0.01}px, ${(mousePosition.y - 300) * 0.01}px) scale(${touchActive ? 1.1 : 1})` : `scale(${touchActive ? 1.1 : 1})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className={`absolute top-3/4 right-1/4 w-64 h-64 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse blur-sm ${touchActive ? 'animate-water-disturbance' : ''}`}
            style={{ 
              animationDuration: '5s', 
              animationDelay: '1s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 600) * 0.008}px, ${(mousePosition.y - 450) * 0.008}px) scale(${touchActive ? 1.05 : 1})` : `scale(${touchActive ? 1.05 : 1})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className={`absolute bottom-1/4 left-1/2 w-72 h-72 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-pulse blur-sm ${touchActive ? 'animate-water-disturbance' : ''}`}
            style={{ 
              animationDuration: '6s', 
              animationDelay: '2s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 500) * 0.012}px, ${(mousePosition.y - 600) * 0.012}px) scale(${touchActive ? 1.08 : 1})` : `scale(${touchActive ? 1.08 : 1})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className={`absolute top-1/2 right-1/3 w-56 h-56 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-pulse blur-sm ${touchActive ? 'animate-water-disturbance' : ''}`}
            style={{ 
              animationDuration: '3s', 
              animationDelay: '0.5s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 700) * 0.015}px, ${(mousePosition.y - 400) * 0.015}px) scale(${touchActive ? 1.12 : 1})` : `scale(${touchActive ? 1.12 : 1})`,
              transition: 'transform 0.3s ease-out'
            }}
          />
        </div>
        
        {/* Enhanced ripple effects with movement */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/3 left-1/3 w-40 h-40 border-2 border-blue-600 rounded-full animate-ping" 
            style={{ 
              animationDuration: '3s',
              transform: isMouseMoving ? `scale(${1 + Math.abs(mousePosition.x - 300) * 0.0001})` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
          />
          <div 
            className="absolute top-2/3 right-1/3 w-32 h-32 border-2 border-cyan-500 rounded-full animate-ping" 
            style={{ 
              animationDuration: '4s', 
              animationDelay: '0.5s',
              transform: isMouseMoving ? `scale(${1 + Math.abs(mousePosition.y - 400) * 0.0001})` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
          />
          <div 
            className="absolute bottom-1/3 left-1/4 w-48 h-48 border-2 border-blue-600 rounded-full animate-ping" 
            style={{ 
              animationDuration: '5s', 
              animationDelay: '1s',
              transform: isMouseMoving ? `scale(${1 + Math.abs(mousePosition.x - 200) * 0.0001})` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
          />
          <div 
            className="absolute top-1/2 right-1/2 w-36 h-36 border-2 border-cyan-500 rounded-full animate-ping" 
            style={{ 
              animationDuration: '2.5s', 
              animationDelay: '1.5s',
              transform: isMouseMoving ? `scale(${1 + Math.abs(mousePosition.y - 300) * 0.0001})` : 'none',
              transition: 'transform 0.2s ease-out'
            }}
          />
        </div>
        
        {/* Floating particles with movement response */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-float shadow-lg"
              style={{
                left: `${15 + i * 7}%`,
                top: `${25 + (i % 4) * 15}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${4 + i * 0.5}s`,
                transform: isMouseMoving ? `translate(${(mousePosition.x - (15 + i * 7) * 8) * 0.001}px, ${(mousePosition.y - (25 + (i % 4) * 15) * 4) * 0.001}px)` : 'none',
                transition: 'transform 0.3s ease-out'
              }}
            />
          ))}
        </div>
        
        {/* Additional wave effects with movement */}
        <div className="absolute inset-0 opacity-20">
          <div 
            className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-600 to-transparent animate-pulse" 
            style={{ 
              animationDuration: '8s',
              transform: isMouseMoving ? `translateY(${(mousePosition.y - 200) * 0.01}px)` : 'none',
              transition: 'transform 0.4s ease-out'
            }}
          />
          <div 
            className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-cyan-500 to-transparent animate-pulse" 
            style={{ 
              animationDuration: '8s', 
              animationDelay: '2s',
              transform: isMouseMoving ? `translateY(${(mousePosition.y - 600) * -0.01}px)` : 'none',
              transition: 'transform 0.4s ease-out'
            }}
          />
        </div>
        
        {/* Wave animation elements with movement */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 right-1/4 w-24 h-24 border border-blue-600 rounded-full animate-ripple" 
            style={{ 
              animationDelay: '0s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 600) * 0.02}px, ${(mousePosition.y - 200) * 0.02}px)` : 'none',
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute bottom-1/3 right-1/3 w-20 h-20 border border-cyan-500 rounded-full animate-ripple" 
            style={{ 
              animationDelay: '1s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 500) * 0.025}px, ${(mousePosition.y - 500) * 0.025}px)` : 'none',
              transition: 'transform 0.3s ease-out'
            }}
          />
          <div 
            className="absolute top-2/3 left-1/3 w-28 h-28 border border-blue-600 rounded-full animate-ripple" 
            style={{ 
              animationDelay: '2s',
              transform: isMouseMoving ? `translate(${(mousePosition.x - 300) * 0.03}px, ${(mousePosition.y - 400) * 0.03}px)` : 'none',
              transition: 'transform 0.3s ease-out'
            }}
          />
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