import React, { useState, useEffect, useRef, useCallback } from 'react';
import backImage from '../assets/Background/back.png';

interface CustomWaterWaveProps {
  children: React.ReactNode;
  className?: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: string;
}

const CustomWaterWave: React.FC<CustomWaterWaveProps> = ({ 
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
  const rippleRef = useRef<HTMLDivElement>(null);
  const mouseTimeoutRef = useRef<NodeJS.Timeout>();
  const lastMousePosition = useRef({ x: 0, y: 0 });
  const ripplesInstance = useRef<any>(null);

  // Initialize custom canvas ripples
  useEffect(() => {
    console.log('CustomWaterWave useEffect triggered');
    if (!containerRef.current) {
      console.log('Container ref not available');
      return;
    }
    if (typeof window === 'undefined') {
      console.log('Window not available');
      return;
    }

    const element = containerRef.current;
    console.log('Element found:', element);

    // Create a custom ripples implementation
    const initRipples = () => {
      console.log('initRipples called');
      if (!element) {
        console.log('Element not available in initRipples');
        return;
      }
      if (ripplesInstance.current) {
        console.log('Ripples instance already exists');
        return;
      }

      // Create canvas for ripples
      const canvas = document.createElement('canvas');
      canvas.style.position = 'absolute';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '10'; // Much higher z-index
      canvas.style.border = '2px solid red'; // Bright debug border
      canvas.style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Debug background
      
      element.appendChild(canvas);
      
      console.log('Canvas created and added to element:', canvas);
      console.log('Canvas dimensions:', canvas.width, 'x', canvas.height);

      // Set canvas size
      const resizeCanvas = () => {
        const rect = element.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        console.log('Canvas resized to:', canvas.width, 'x', canvas.height);
      };
      
      resizeCanvas();
      window.addEventListener('resize', resizeCanvas);

      // Simple ripple simulation
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        console.log('Could not get 2D context');
        return;
      }
      console.log('2D context obtained');

      const ripples: Array<{
        x: number;
        y: number;
        radius: number;
        strength: number;
        age: number;
        maxAge: number;
      }> = [];

      // Animation loop
      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw a test circle to verify canvas is working
        ctx.beginPath();
        ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'; // More visible red
        ctx.fill();
        
        // Draw a test text
        ctx.fillStyle = 'white';
        ctx.font = '16px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Canvas Working!', canvas.width / 2, canvas.height / 2 + 80);
        
        // Update and draw ripples
        for (let i = ripples.length - 1; i >= 0; i--) {
          const ripple = ripples[i];
          ripple.age += 16; // 60fps
          
          if (ripple.age >= ripple.maxAge) {
            ripples.splice(i, 1);
            continue;
          }
          
          const progress = ripple.age / ripple.maxAge;
          const currentRadius = ripple.radius * progress;
          const opacity = (1 - progress) * ripple.strength * 0.8; // Higher opacity
          
          // Draw multiple circles for better effect
          for (let j = 0; j < 3; j++) {
            const ringRadius = currentRadius + (j * 10);
            const ringOpacity = opacity * (1 - j * 0.3);
            
            // Create gradient effect
            const gradient = ctx.createRadialGradient(
              ripple.x, ripple.y, 0,
              ripple.x, ripple.y, ringRadius
            );
            gradient.addColorStop(0, `rgba(59, 130, 246, ${ringOpacity})`); // Blue-500
            gradient.addColorStop(0.5, `rgba(6, 182, 212, ${ringOpacity * 0.8})`); // Cyan-500
            gradient.addColorStop(1, `rgba(59, 130, 246, ${ringOpacity * 0.3})`); // Blue-500 fade
            
            ctx.beginPath();
            ctx.arc(ripple.x, ripple.y, ringRadius, 0, 2 * Math.PI);
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 6; // Even thicker lines
            ctx.stroke();
          }
        }
        
        requestAnimationFrame(animate);
      };
      
      animate();
      console.log('Animation loop started');

      // Store the ripples instance
      ripplesInstance.current = {
        drop: (x: number, y: number, radius: number, strength: number) => {
          console.log('Creating ripple at:', x, y, 'radius:', radius, 'strength:', strength);
          ripples.push({
            x,
            y,
            radius,
            strength,
            age: 0,
            maxAge: 3000
          });
          
          // Add a second ripple for better effect
          setTimeout(() => {
            ripples.push({
              x: x + Math.random() * 20 - 10,
              y: y + Math.random() * 20 - 10,
              radius: radius * 0.7,
              strength: strength * 0.8,
              age: 0,
              maxAge: 2500
            });
          }, 100);
        },
        destroy: () => {
          window.removeEventListener('resize', resizeCanvas);
          if (element.contains(canvas)) {
            element.removeChild(canvas);
          }
          ripplesInstance.current = null;
        }
      };
      
      // Add some initial test ripples
      setTimeout(() => {
        if (ripplesInstance.current) {
          console.log('Creating initial test ripple');
          ripplesInstance.current.drop(canvas.width / 2, canvas.height / 2, 100, 2.0);
        }
      }, 1000);
    };

    // Initialize after a short delay to ensure DOM is ready
    const timer = setTimeout(initRipples, 100);
    console.log('Timer set for initRipples');

    return () => {
      clearTimeout(timer);
      if (ripplesInstance.current) {
        ripplesInstance.current.destroy();
      }
    };
  }, []);

  // Handle mouse movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
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
    
    // Create ripples based on movement speed
    if (speed > 3 && ripplesInstance.current) {
      const strength = Math.min(speed / 10, 2);
      const radius = Math.min(speed * dropRadius, 200);
      ripplesInstance.current.drop(x, y, radius, strength);
    }
    
    lastMousePosition.current = { x, y };
  }, [interactive, dropRadius]);

  // Handle touch events with passive listeners
  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!interactive || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setMousePosition({ x, y });
    setIsMouseMoving(true);
    setTouchActive(true);
    
    // Create ripples for touch movement
    if (ripplesInstance.current) {
      ripplesInstance.current.drop(x, y, 150, 1.5);
    }
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 200);
  }, [interactive]);

  // Handle touch start with passive listeners
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (!interactive || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    
    setTouchActive(true);
    
    // Create ripples for touch start
    if (ripplesInstance.current) {
      ripplesInstance.current.drop(x, y, 100, 1.0);
    }
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 300);
  }, [interactive]);

  // Handle click events for testing ripples
  const handleClick = useCallback((e: React.MouseEvent) => {
    console.log('Click detected at:', e.clientX, e.clientY);
    if (!interactive) {
      console.log('Interactive disabled');
      return;
    }
    if (!containerRef.current) {
      console.log('Container ref not available in click');
      return;
    }
    if (!ripplesInstance.current) {
      console.log('Ripples instance not available in click');
      return;
    }
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    console.log('Creating click ripple at:', x, y);
    // Create a strong ripple on click
    ripplesInstance.current.drop(x, y, 150, 2.0);
  }, [interactive]);

  // Add passive event listeners
  useEffect(() => {
    if (!interactive || !containerRef.current) return;

    const element = containerRef.current;

    // Mouse move handler
    const mouseMoveHandler = (e: MouseEvent) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Only track if mouse is within container bounds
        if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
          handleMouseMove(e);
        }
      }
    };

    // Touch handlers with passive listeners
    const touchMoveHandler = (e: TouchEvent) => handleTouchMove(e);
    const touchStartHandler = (e: TouchEvent) => handleTouchStart(e);

    // Add event listeners
    window.addEventListener('mousemove', mouseMoveHandler);
    element.addEventListener('touchmove', touchMoveHandler, { passive: true });
    element.addEventListener('touchstart', touchStartHandler, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMoveHandler);
      element.removeEventListener('touchmove', touchMoveHandler);
      element.removeEventListener('touchstart', touchStartHandler);
    };
  }, [interactive, handleMouseMove, handleTouchMove, handleTouchStart]);

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
      onClick={handleClick}
      style={{
        // Add CSS properties to improve touch handling
        touchAction: 'manipulation',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none'
      }}
    >
      {/* Debug info */}
      <div 
        className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded z-50 pointer-events-none"
        style={{ fontSize: '12px' }}
      >
        CustomWaterWave Active
        <br />
        Click to test ripples
        <br />
        Canvas z-index: 10
      </div>
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backImage})`,
          zIndex: -2
        }}
      />
      
      {/* Custom Ripples Canvas */}
      <div ref={rippleRef} className="absolute inset-0 w-full h-full" style={{ zIndex: -1 }} />
      
      {/* Additional visual effects */}
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
  );
};

export default CustomWaterWave; 