declare module 'pannellum-react' {
  import { FC } from 'react';

  export interface PannellumProps {
    width?: string | number;
    height?: string | number;
    image: string;
    pitch?: number;
    yaw?: number;
    hfov?: number;
    autoLoad?: boolean;
    showZoomCtrl?: boolean;
    mouseZoom?: boolean;
    showFullscreenCtrl?: boolean;
    autoRotate?: number;
    title?: string;
    children?: React.ReactNode;
  }

  export interface HotspotProps {
    type: string;
    pitch: number;
    yaw: number;
    text?: string;
  }

  export const Pannellum: FC<PannellumProps> & {
    Hotspot: FC<HotspotProps>;
  };
}
