"use client";

import { useState, useEffect } from "react";

export default function CursorSpotlight() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.pageX,
        y: event.pageY,
      });
    };
    window.addEventListener("mousemove", handleWindowMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `radial-gradient(400px at ${coords.x}px ${coords.y}px, rgba(13, 69, 218, 0.15), transparent 80%)`,
      }}
    />
  );
}
