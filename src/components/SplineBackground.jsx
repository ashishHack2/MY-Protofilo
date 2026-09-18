import React, { useEffect, useRef } from 'react';

export default function SplineBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animFrameId;
    let W = canvas.width = window.innerWidth;
    let H = canvas.height = window.innerHeight;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    // Sparse floating particles
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.5 + 0.4,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      opacity: Math.random() * 0.4 + 0.1,
    }));

    // Connecting lines between close particles
    const MAX_DIST = 130;

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      // Dark base gradient
      const bg = ctx.createLinearGradient(0, 0, W, H);
      bg.addColorStop(0, '#0D1117');
      bg.addColorStop(0.5, '#111827');
      bg.addColorStop(1, '#0D1117');
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, W, H);

      // Subtle animated orb #1 — teal
      const orb1 = ctx.createRadialGradient(
        W * 0.15 + Math.sin(t * 0.3) * 40,
        H * 0.3 + Math.cos(t * 0.25) * 30,
        0,
        W * 0.15 + Math.sin(t * 0.3) * 40,
        H * 0.3 + Math.cos(t * 0.25) * 30,
        W * 0.32
      );
      orb1.addColorStop(0, 'rgba(42, 157, 143, 0.12)');
      orb1.addColorStop(1, 'transparent');
      ctx.fillStyle = orb1;
      ctx.fillRect(0, 0, W, H);

      // Subtle animated orb #2 — violet
      const orb2 = ctx.createRadialGradient(
        W * 0.82 + Math.cos(t * 0.2) * 50,
        H * 0.65 + Math.sin(t * 0.18) * 40,
        0,
        W * 0.82 + Math.cos(t * 0.2) * 50,
        H * 0.65 + Math.sin(t * 0.18) * 40,
        W * 0.28
      );
      orb2.addColorStop(0, 'rgba(159, 134, 192, 0.10)');
      orb2.addColorStop(1, 'transparent');
      ctx.fillStyle = orb2;
      ctx.fillRect(0, 0, W, H);

      // Update & draw particles
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(42, 157, 143, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.12;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(42, 157, 143, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      t += 0.008;
      animFrameId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Edge fade overlays */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0D1117] to-transparent z-10" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0D1117] to-transparent z-10" />
    </div>
  );
}
