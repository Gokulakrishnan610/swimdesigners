import React, { useState, useEffect, useRef, useCallback } from 'react';

interface NaturalWaterWaveProps {
  children: React.ReactNode;
  className?: string;
  dropRadius?: number;
  perturbance?: number;
  resolution?: number;
  interactive?: boolean;
  crossOrigin?: string;
}

const getResponsiveRipplesConfig = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;
  return {
    dropRadius: isMobile ? 15 : 25,
    perturbance: isMobile ? 0.03 : 0.04,
    resolution: isMobile ? 256 : 512,
    dropMinRadius: isMobile ? 10 : 15,
    dropMaxRadius: isMobile ? 30 : 60,
    dropFrequency: isMobile ? 6 : 10,
    dropAnimationDuration: isMobile ? 1200 : 2000,
  };
};

const NaturalWaterWave: React.FC<NaturalWaterWaveProps> = ({ 
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

  // Use public path for the background image
  const backImage = '/image/back.png';

  // Responsive container style
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  // Initialize jQuery.ripples with passive event listeners
  useEffect(() => {
    console.log('NaturalWaterWave useEffect triggered');
    if (!rippleRef.current) {
      console.log('Ripple ref not available');
      return;
    }
    if (typeof window === 'undefined') {
      console.log('Window not available');
      return;
    }
    if (!(window as any).$) {
      console.log('jQuery not available');
      console.log('Available window properties:', Object.keys(window));
      return;
    }

    const $ = (window as any).$;
    console.log('jQuery found:', $);
    console.log('jQuery version:', $.fn.jquery);
    console.log('jQuery.ripples available:', !!$.fn.ripples);
    
    const element = rippleRef.current;
    console.log('Element found:', element);
    console.log('Using back.png image:', backImage);
    
    // Patch jQuery.ripples to use passive event listeners
    const patchRipples = () => {
      if ($.fn.ripples) {
        console.log('jQuery.ripples plugin found');
        
        // Store original jQuery on method globally
        const originalOn = $.fn.on;
        
        // Permanently override jQuery's on method to add passive option for touch events
        $.fn.on = function(types: string, selector: any, data: any, fn: any) {
          // Check if this is a touch event
          if (typeof types === 'string' && (types.includes('touchstart') || types.includes('touchmove') || types.includes('touchend'))) {
            console.log('Intercepting touch event:', types);
            
            // Add passive option to the event listener
            if (typeof fn === 'function') {
              // Store the original function
              const originalFn = fn;
              
              // Create a wrapper that doesn't call preventDefault
              const passiveFn = function(this: any, ...args: any[]) {
                // Call the original function but don't prevent default
                return originalFn.apply(this, args);
              };
              
              // Call the original on method with our passive wrapper
              return originalOn.call(this, types, selector, data, passiveFn);
            }
          }
          
          // For non-touch events, use the original method
          return originalOn.call(this, types, selector, data, fn);
        };
        
        // Also patch the addEventListener method on DOM elements
        const originalAddEventListener = Element.prototype.addEventListener;
        Element.prototype.addEventListener = function(type: string, listener: any, options?: any) {
          if (type === 'touchstart' || type === 'touchmove' || type === 'touchend') {
            console.log('Intercepting addEventListener for:', type);
            // Force passive option for touch events
            if (typeof options === 'object') {
              options.passive = true;
            } else if (typeof options === 'boolean') {
              options = { passive: true, capture: options };
            } else {
              options = { passive: true };
            }
          }
          return originalAddEventListener.call(this, type, listener, options);
        };
        
        console.log('jQuery and DOM event listeners patched for passive touch events');
      } else {
        console.log('jQuery.ripples plugin not found');
      }
    };

    // Apply the patch
    patchRipples();

    // Initialize ripples
    const initRipples = () => {
      if (!element || ripplesInstance.current) return;
      const $element = $(element);
      
      console.log('Initializing jQuery.ripples with options:', {
        imageUrl: backImage,
        dropRadius: 25,
        perturbance: 0.04,
        resolution: 512,
        interactive: interactive,
        crossOrigin: crossOrigin,
        dropMinRadius: 15,
        dropMaxRadius: 60,
        dropFrequency: 10,
        dropAnimationDuration: 2000,
      });
      
      // Set background image directly on the element
      element.style.backgroundImage = `url(${backImage})`;
      element.style.backgroundSize = 'cover';
      element.style.backgroundPosition = 'center';
      element.style.backgroundRepeat = 'no-repeat';
      element.style.width = '100%';
      element.style.height = '100%';
      element.style.position = 'absolute';
      element.style.top = '0';
      element.style.left = '0';
      element.style.zIndex = '-2';

      try {
        const config = getResponsiveRipplesConfig();
        $element.ripples({
          imageUrl: backImage,
          dropRadius: config.dropRadius,
          perturbance: config.perturbance,
          resolution: config.resolution,
          interactive: interactive,
          crossOrigin: crossOrigin,
          dropMinRadius: config.dropMinRadius,
          dropMaxRadius: config.dropMaxRadius,
          dropFrequency: config.dropFrequency,
          dropAnimationDuration: config.dropAnimationDuration,
        });
        
        ripplesInstance.current = $element.data('ripples');
        console.log('jQuery.ripples initialized successfully');
        
        // Force the background image to persist after jQuery.ripples initialization
        setTimeout(() => {
          if (element) {
            element.style.backgroundImage = `url(${backImage})`;
            element.style.backgroundSize = 'cover';
            element.style.backgroundPosition = 'center';
            element.style.backgroundRepeat = 'no-repeat';
            console.log('Background image restored after jQuery.ripples initialization');
          }
        }, 100);

        // MutationObserver to watch for background image changes
        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
              const target = mutation.target as HTMLElement;
              if (target.style.backgroundImage === 'none' || !target.style.backgroundImage.includes(backImage)) {
                target.style.backgroundImage = `url(${backImage})`;
                target.style.backgroundSize = 'cover';
                target.style.backgroundPosition = 'center';
                target.style.backgroundRepeat = 'no-repeat';
                console.log('Background image restored by MutationObserver');
              }
            }
          });
        });
        observer.observe(element, { attributes: true, attributeFilter: ['style'] });
        
        // Add some initial test ripples
        setTimeout(() => {
          if (ripplesInstance.current) {
            console.log('Creating initial test ripple');
            ripplesInstance.current.drop(100, 100, 60, 0.8); // Smaller, gentler ripple
            
            // Create fewer test ripples with longer intervals
            setTimeout(() => {
              ripplesInstance.current?.drop(200, 200, 50, 0.6);
            }, 2000); // 2 seconds instead of 0.5
            
            setTimeout(() => {
              ripplesInstance.current?.drop(300, 150, 70, 0.7);
            }, 4000); // 4 seconds instead of 1
            
            // Remove the fourth test ripple to reduce density
          }
        }, 3000); // 3 seconds instead of 2
        
        // Create continuous water movement effect
        const createContinuousRipples = () => {
          if (!ripplesInstance.current) return;
          
          const width = element.offsetWidth;
          const height = element.offsetHeight;
          
          // Create random ripples across the surface
          const x = Math.random() * width;
          const y = Math.random() * height;
          const radius = 20 + Math.random() * 30; // Smaller ripples (20-50 instead of 30-80)
          const strength = 0.3 + Math.random() * 0.7; // Lower strength (0.3-1.0 instead of 0.5-2.0)
          
          console.log('Creating continuous ripple at:', x, y, 'radius:', radius, 'strength:', strength);
          ripplesInstance.current.drop(x, y, radius, strength);
          
          // Much longer interval between ripples (3-8 seconds instead of 0.5-1.5 seconds)
          setTimeout(createContinuousRipples, 3000 + Math.random() * 5000);
        };
        
        // Start continuous ripples after initial setup with longer delay
        setTimeout(createContinuousRipples, 5000); // 5 seconds instead of 3
        
        return () => { observer.disconnect(); }; // Cleanup observer
      } catch (error) {
        console.error('Error initializing jQuery.ripples:', error);
      }
    };

    // Initialize after a short delay
    const timer = setTimeout(initRipples, 500);
    console.log('Timer set for initRipples');

    return () => {
      clearTimeout(timer);
      if (ripplesInstance.current) {
        ripplesInstance.current.destroy();
      }
    };
  }, [dropRadius, perturbance, resolution, interactive, crossOrigin]);

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
    
    // Create ripples based on movement speed using jQuery.ripples
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
    
    // Create ripples for touch movement using jQuery.ripples
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
    
    // Create ripples for touch start using jQuery.ripples
    if (ripplesInstance.current) {
      ripplesInstance.current.drop(x, y, 100, 1.0);
    }
    
    // Clear touch active state after a delay
    setTimeout(() => setTouchActive(false), 300);
  }, [interactive]);

  // Handle click events for testing ripples
  const handleClick = useCallback((e: React.MouseEvent) => {
    if (!interactive || !containerRef.current || !ripplesInstance.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Create a strong ripple on click using jQuery.ripples
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
      className={`w-full h-full fixed inset-0 -z-10 overflow-hidden cursor-none ${className}`}
      onClick={handleClick}
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: dimensions.height,
        minWidth: dimensions.width,
        touchAction: 'manipulation',
        WebkitTouchCallout: 'none',
        WebkitUserSelect: 'none',
        userSelect: 'none',
      }}
    >
      {/* Debug info */}
      <div 
        className="absolute top-4 left-4 bg-black bg-opacity-50 text-white p-2 rounded z-50 pointer-events-none"
        style={{ fontSize: '12px' }}
      >
        NaturalWaterWave Active
        <br />
        jQuery.ripples enabled
        <br />
        Click to test ripples
        <br />
        Auto-ripples: ON
      </div>
      
      {/* Background image fallback */}
      <div 
        className="absolute inset-0 w-full h-full water-background"
        style={{ zIndex: -3 }}
      />
      
      {/* jQuery.ripples container */}
      <div 
        ref={rippleRef}
        className="absolute inset-0 w-full h-full water-background"
        style={{ zIndex: -2 }}
      />
      
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

export default NaturalWaterWave; 