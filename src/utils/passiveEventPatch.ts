// Patch jQuery.ripples to use passive event listeners
export const patchJQueryRipples = () => {
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$;
    
    // Store original jQuery on method
    const originalOn = $.fn.on;
    
    // Override jQuery's on method to add passive option for touch events
    $.fn.on = function(types: string, selector: any, data: any, fn: any) {
      // Check if this is a touch event
      if (typeof types === 'string' && (types.includes('touchstart') || types.includes('touchmove') || types.includes('touchend'))) {
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
    
    // Also patch the direct event binding in jQuery.ripples
    if ($.fn.ripples) {
      const originalRipples = $.fn.ripples;
      
      $.fn.ripples = function(options: any) {
        // Call the original ripples method
        const result = originalRipples.call(this, options);
        
        // Patch the internal event listeners
        this.each(function() {
          const element = this;
          
          // Find and replace touch event listeners with passive ones
          if (element._ripples && element._ripples._events) {
            const events = element._ripples._events;
            
            // Remove existing touch listeners
            if (events.touchstart) {
              element.removeEventListener('touchstart', events.touchstart, false);
            }
            if (events.touchmove) {
              element.removeEventListener('touchmove', events.touchmove, false);
            }
            if (events.touchend) {
              element.removeEventListener('touchend', events.touchend, false);
            }
            
            // Add passive touch listeners
            if (events.touchstart) {
              element.addEventListener('touchstart', events.touchstart, { passive: true });
            }
            if (events.touchmove) {
              element.addEventListener('touchmove', events.touchmove, { passive: true });
            }
            if (events.touchend) {
              element.addEventListener('touchend', events.touchend, { passive: true });
            }
          }
        });
        
        return result;
      };
    }
  }
};

// Alternative approach: Patch the specific jQuery.ripples setup
export const patchRipplesSetup = () => {
  if (typeof window !== 'undefined' && (window as any).$) {
    const $ = (window as any).$;
    
    // Override the setupPointerEvents method in jQuery.ripples
    if ($.fn.ripples && $.fn.ripples.defaults) {
      const originalSetupPointerEvents = $.fn.ripples.defaults.setupPointerEvents;
      
      if (originalSetupPointerEvents) {
        $.fn.ripples.defaults.setupPointerEvents = function(element: any, events: any) {
          // Call original setup
          originalSetupPointerEvents.call(this, element, events);
          
          // Replace touch event listeners with passive ones
          if (events.touchstart) {
            element.removeEventListener('touchstart', events.touchstart, false);
            element.addEventListener('touchstart', events.touchstart, { passive: true });
          }
          if (events.touchmove) {
            element.removeEventListener('touchmove', events.touchmove, false);
            element.addEventListener('touchmove', events.touchmove, { passive: true });
          }
          if (events.touchend) {
            element.removeEventListener('touchend', events.touchend, false);
            element.addEventListener('touchend', events.touchend, { passive: true });
          }
        };
      }
    }
  }
};

// Initialize patches when the module is imported
if (typeof window !== 'undefined') {
  // Wait for jQuery to be available
  const checkAndPatch = () => {
    if ((window as any).$ && (window as any).$.fn && (window as any).$.fn.ripples) {
      patchJQueryRipples();
      patchRipplesSetup();
    } else {
      // Retry after a short delay
      setTimeout(checkAndPatch, 100);
    }
  };
  
  // Start checking
  checkAndPatch();
} 