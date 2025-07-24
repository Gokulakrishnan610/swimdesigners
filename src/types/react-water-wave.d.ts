declare module 'react-water-wave' {
  import React from 'react';

  interface WaterWaveProps {
    imageUrl: string;
    dropRadius?: number;
    perturbance?: number;
    resolution?: number;
    interactive?: boolean;
    crossOrigin?: string;
    style?: React.CSSProperties;
    children: (api: {
      pause: () => void;
      play: () => void;
      drop: (x: number, y: number, radius: number, strength: number) => void;
      destroy: () => void;
      set: (property: string, value: any) => void;
      updateSize: () => void;
    }) => React.ReactNode;
  }

  const WaterWave: React.FC<WaterWaveProps>;
  export default WaterWave;
} 