import React, { useState, useEffect, useRef, useCallback } from 'react';
import WaterWave from 'react-water-wave';
import backImage from '../assets/Background/back.png';

interface ReactWaterWaveProps {
  children: React.ReactNode;
  className?: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: string;
}

const ReactWaterWaveComponent: React.FC<ReactWaterWaveProps> = ({ 
  children, 
  className = "",
  dropRadius = 20,
  perturbance = 0.03,
  resolution = 256,
  interactive = true,
  crossOrigin = ''
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const [touchActive, setTouchActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseTimeoutRef = useRef<NodeJS.Timeout>();
  const lastMousePosition = useRef({ x: 0, y: 0 });

  // Handle mouse/touch movement for additional effects
  const handleMouseMove = useCallback((e: React.MouseEvent | MouseEvent, dropRipple?: (x: number, y: number, radius: number, strength: number) => void) => {
    if (!containerRef.current || !interactive) return;
    
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
    
    // Calculate movement speed for physics-based ripples
    const speed = Math.sqrt(
      Math.pow(x - lastMousePosition.current.x, 2) + Math.pow(y - lastMousePosition.current.y, 2)
    );
    
    // Create ripples based on movement speed using jQuery.ripples
    if (speed > 3 && dropRipple) {
      const strength = Math.min(speed / 10, 2);
      const radius = Math.min(speed * dropRadius, 200);
      dropRipple(x, y, radius, strength);
    }
    
    lastMousePosition.current = { x, y };
  }, [interactive, dropRadius]);

  // Handle touch events with passive listeners
  const handleTouchMove = useCallback((e: React.TouchEvent, dropRipple?: (x: number, y: number, radius: number, strength: number) => void) => {
    if (!interactive) return;
    // Don't prevent default to allow passive behavior
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsMouseMoving(true);
    setTouchActive(true);
    
    // Create ripples for touch movement using jQuery.ripples
    if (dropRipple) {
      dropRipple(x, y, 150, 1.5);
    }
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 200);
  }, [interactive]);

  // Handle touch start with passive listeners
  const handleTouchStart = useCallback((e: React.TouchEvent, dropRipple?: (x: number, y: number, radius: number, strength: number) => void) => {
    if (!interactive) return;
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setTouchActive(true);
    
    // Create ripples for touch start using jQuery.ripples
    if (dropRipple) {
      dropRipple(x, y, 100, 1.0);
    }
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 300);
  }, [interactive]);

  // Add global mouse move listener for movement-based effects
  useEffect(() => {
    if (!interactive) return;
    
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only track if mouse is within container bounds
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          handleMouseMove(e as any);
        }
      }
    };

    window.addEventListener('mousemove', handleGlobalMouseMove);
    return () => window.removeEventListener('mousemove', handleGlobalMouseMove);
  }, [handleMouseMove, interactive]);

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
    >
      {/* React Water Wave with jQuery.ripples */}
      <WaterWave
        imageUrl={backImage}
        dropRadius={dropRadius}
        perturbance={perturbance}
        resolution={resolution}
        interactive={interactive}
        crossOrigin={crossOrigin}
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -2
        }}
      >
        {({ drop: dropRipple }) => (
          <div 
            className="w-full h-full relative"
            onMouseMove={(e) => handleMouseMove(e, dropRipple)}
            onTouchMove={(e) => handleTouchMove(e, dropRipple)}
            onTouchStart={(e) => handleTouchStart(e, dropRipple)}
            style={{
              // Add CSS properties to improve touch handling
              touchAction: 'manipulation',
              WebkitTouchCallout: 'none',
              WebkitUserSelect: 'none',
              userSelect: 'none'
            }}
          >
            {/* Additional visual effects on top of jQuery.ripples */}
            <div className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }}>
              {/* Mouse/touch cursor effect */}
              {isMouseMoving && (
                <div
                  className="absolute pointer-events-none w-8 h-8 border-2 border-blue-600 rounded-full animate-cursor-ripple"
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
              
              {/* Ripple echo effects */}
              {touchActive && (
                <div
                  className="absolute pointer-events-none w-16 h-16 border-2 border-blue-400 rounded-full animate-ripple-echo"
                  style={{
                    left: mousePosition.x - 32,
                    top: mousePosition.y - 32,
                    zIndex: 9,
                  }}
                />
              )}
              
              {/* Floating particles with movement response */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-float shadow-lg"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${25 + (i % 4) * 15}%`,
                      animationDelay: `${i * 0.3}s`,
                      animationDuration: `${4 + i * 0.5}s`,
                      transform: isMouseMoving ? `translate(${(mousePosition.x - (15 + i * 10) * 8) * 0.001}px, ${(mousePosition.y - (25 + (i % 4) * 15) * 4) * 0.001}px)` : 'none',
                      transition: 'transform 0.3s ease-out'
                    }}
                  />
                ))}
              </div>
              
              {/* Subtle wave effects */}
              <div className="absolute inset-0 opacity-10">
                <div 
                  className="absolute top-1/4 left-1/4 w-60 h-60 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full animate-water-surface blur-sm" 
                  style={{ 
                    animationDuration: '6s',
                    transform: isMouseMoving ? `translate(${(mousePosition.x - 400) * 0.005}px, ${(mousePosition.y - 300) * 0.005}px)` : 'none',
                    transition: 'transform 0.3s ease-out'
                  }}
                />
                <div 
                  className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full animate-water-surface blur-sm" 
                  style={{ 
                    animationDuration: '8s', 
                    animationDelay: '2s',
                    transform: isMouseMoving ? `translate(${(mousePosition.x - 600) * 0.004}px, ${(mousePosition.y - 450) * 0.004}px)` : 'none',
                    transition: 'transform 0.3s ease-out'
                  }}
                />
              </div>
              
              {/* Ambient wave effects */}
              <div className="absolute inset-0 opacity-5">
                <div 
                  className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-600 to-transparent animate-pulse" 
                  style={{ 
                    animationDuration: '10s',
                    transform: isMouseMoving ? `translateY(${(mousePosition.y - 200) * 0.005}px)` : 'none',
                    transition: 'transform 0.4s ease-out'
                  }}
                />
                <div 
                  className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-cyan-500 to-transparent animate-pulse" 
                  style={{ 
                    animationDuration: '10s', 
                    animationDelay: '3s',
                    transform: isMouseMoving ? `translateY(${(mousePosition.y - 600) * -0.005}px)` : 'none',
                    transition: 'transform 0.4s ease-out'
                  }}
                />
              </div>
            </div>
            
            {/* Content */}
            <div className="relative z-10 w-full h-full">
              {children}
            </div>
          </div>
        )}
      </WaterWave>
    </div>
  );
};

export default ReactWaterWaveComponent; 