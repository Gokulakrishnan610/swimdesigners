import { useEffect, useRef } from 'react';

interface UsePassiveEventListenersOptions {
  onTouchStart?: (e: TouchEvent) => void;
  onTouchMove?: (e: TouchEvent) => void;
  onTouchEnd?: (e: TouchEvent) => void;
  onMouseMove?: (e: MouseEvent) => void;
  onMouseDown?: (e: MouseEvent) => void;
  onMouseUp?: (e: MouseEvent) => void;
  enabled?: boolean;
  target?: HTMLElement | null;
}

export const usePassiveEventListeners = ({
  onTouchStart,
  onTouchMove,
  onTouchEnd,
  onMouseMove,
  onMouseDown,
  onMouseUp,
  enabled = true,
  target
}: UsePassiveEventListenersOptions) => {
  const targetRef = useRef<HTMLElement | null>(target || null);

  useEffect(() => {
    if (!enabled || !targetRef.current) return;

    const element = targetRef.current;

    // Passive event listeners for touch events
    if (onTouchStart) {
      element.addEventListener('touchstart', onTouchStart, { passive: true });
    }
    if (onTouchMove) {
      element.addEventListener('touchmove', onTouchMove, { passive: true });
    }
    if (onTouchEnd) {
      element.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    // Regular event listeners for mouse events
    if (onMouseMove) {
      element.addEventListener('mousemove', onMouseMove);
    }
    if (onMouseDown) {
      element.addEventListener('mousedown', onMouseDown);
    }
    if (onMouseUp) {
      element.addEventListener('mouseup', onMouseUp);
    }

    // Cleanup function
    return () => {
      if (onTouchStart) {
        element.removeEventListener('touchstart', onTouchStart);
      }
      if (onTouchMove) {
        element.removeEventListener('touchmove', onTouchMove);
      }
      if (onTouchEnd) {
        element.removeEventListener('touchend', onTouchEnd);
      }
      if (onMouseMove) {
        element.removeEventListener('mousemove', onMouseMove);
      }
      if (onMouseDown) {
        element.removeEventListener('mousedown', onMouseDown);
      }
      if (onMouseUp) {
        element.removeEventListener('mouseup', onMouseUp);
      }
    };
  }, [onTouchStart, onTouchMove, onTouchEnd, onMouseMove, onMouseDown, onMouseUp, enabled]);

  return targetRef;
}; 