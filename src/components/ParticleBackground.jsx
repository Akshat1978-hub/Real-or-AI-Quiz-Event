import React from "react";
export default function ParticleBackground() {
  return (
    <div className="particles" aria-hidden="true">
      {Array.from({ length: 35 }).map((_, i) => <span key={i} />)}
    </div>
  );
}