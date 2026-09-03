"use client";

import { useCallback, useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ISourceOptions } from "@tsparticles/engine";

function ParticlesCanvas() {
  const options: ISourceOptions = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        number: { value: 50, density: { enable: true } },
        color: { value: "#6b162c" },
        links: {
          enable: true,
          color: "#6b162c",
          distance: 150,
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.6,
          outModes: { default: "bounce" },
        },
        opacity: { value: 0.35 },
        size: { value: { min: 1.5, max: 3.5 } },
        shape: { type: "circle" },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          onClick: { enable: true, mode: "push" },
        },
        modes: {
          grab: { distance: 140, links: { opacity: 0.5 } },
          push: { quantity: 3 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <Particles
      id="experience-particles"
      className="absolute inset-0 z-0"
      options={options}
    />
  );
}

export function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Parameters<typeof loadSlim>[0]) => {
    await loadSlim(engine);
  }, []);

  return (
    <ParticlesProvider init={particlesInit}>
      <ParticlesCanvas />
    </ParticlesProvider>
  );
}
