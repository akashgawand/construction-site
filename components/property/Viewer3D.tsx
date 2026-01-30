"use client";

import { useEffect, useState } from "react";

interface Viewer3DProps {
  imageUrl: string;
  title?: string;
}

export default function Viewer3D({ imageUrl, title }: Viewer3DProps) {
  const [Pannellum, setPannellum] = useState<any>(null);

  useEffect(() => {
    import("pannellum-react").then((module) => {
      setPannellum(() => module.Pannellum);
    });
  }, []);

  if (!Pannellum) {
    return (
      <div className="w-full h-[500px] flex items-center justify-center bg-stone-900 text-white">
        Loading 360° Viewer...
      </div>
    );
  }

  return (
    <div className="w-full h-[500px] bg-black">
      <Pannellum
        width="100%"
        height="500px"
        image={imageUrl}
        pitch={0}
        yaw={180}
        hfov={110}
        autoLoad
        showZoomCtrl
        showFullscreenCtrl
        mouseZoom
        autoRotate={-2}
        title={title}
      />
    </div>
  );
}
