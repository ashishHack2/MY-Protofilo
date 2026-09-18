import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

export default function VideoBackground() {
  const ref = useRef(null);
  const { isDark } = useTheme();
  const { scrollY } = useScroll();

  // Parallax: video moves up slowly as user scrolls
  const videoY = useTransform(scrollY, [0, 600], ['0%', '15%']);
  const videoScale = useTransform(scrollY, [0, 600], [1, 1.08]);
  const videoOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <div ref={ref} className="absolute inset-0 z-0 overflow-hidden pointer-events-none transition-colors duration-500">
      {/* ── WHITE SCREEN MODE (Light) ── */}
      {!isDark && (
        <div className="absolute inset-0 w-full h-full bg-[#FFFFFF]">
          {/* Subtle soft gradient mesh for a modern clean white look */}
          <div
            className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(42,157,143,0.12) 0%, rgba(159,134,192,0.08) 50%, transparent 70%)',
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-35 blur-3xl pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(244,162,97,0.10) 0%, rgba(42,157,143,0.06) 50%, transparent 70%)',
            }}
          />
          {/* Subtle fine grid pattern for crisp engineering feel */}
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
              backgroundSize: '40px 40px',
            }}
          />
          {/* Bottom blend into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
        </div>
      )}

      {/* ── BLACK SCREEN MODE (Dark) ── */}
      {isDark && (
        <div className="absolute inset-0 w-full h-full bg-[#0D1117]">
          {/* Parallax video wrapper — clearly visible video background */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            style={{ y: videoY, scale: videoScale, opacity: videoOpacity }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
              style={{ filter: 'brightness(0.75) saturate(1.15)' }}
            >
              <source src="/hero-bg.mp4" type="video/mp4" />
              <source src="/hero-bg-original.mp4" type="video/mp4" />
            </video>
          </motion.div>

          {/* Balanced gradient wash to guarantee video clarity while maintaining text legibility */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-b from-[#0D1117]/65 via-[#0D1117]/40 to-[#0D1117]/90"
          />

          {/* Teal glow in top-left corner */}
          <div
            className="absolute top-0 left-0 w-[500px] h-[500px] z-[2] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at top left, rgba(42,157,143,0.22) 0%, transparent 65%)' }}
          />

          {/* Violet glow in bottom-right */}
          <div
            className="absolute bottom-0 right-0 w-[450px] h-[450px] z-[2] pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at bottom right, rgba(159,134,192,0.18) 0%, transparent 65%)' }}
          />

          {/* Bottom fade — smoothly blends into the next section */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#0D1117] to-transparent z-[3]" />

          {/* Top fade — blends under the navbar */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#0D1117]/70 to-transparent z-[3]" />

          {/* Subtle scanline grain texture for a cinematic feel */}
          <div
            className="absolute inset-0 z-[4] opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%23fff' fill-opacity='0.05'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      )}
    </div>
  );
}
