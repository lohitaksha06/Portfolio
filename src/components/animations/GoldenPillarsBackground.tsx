'use client';

import React, { useRef, useEffect } from 'react';

export default function GoldenPillarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    class Pillar {
      x: number;
      y: number;
      w: number;
      h: number;
      speed: number;
      baseLightness: number;

      constructor(customY?: number) {
        this.w = Math.random() * 200 + 150; // HUGE pillars (150 to 350px wide) 
        this.x = Math.random() * width;
        this.y = customY !== undefined ? customY : Math.random() * height - height;
        this.h = Math.random() * (height * 1.5) + 500; // Very tall
        this.speed = Math.random() * 4 + 2; // Shifting and moving down
        this.baseLightness = Math.random() * 180 + 30; // 30 to 210 (dark to light grey)
      }

      update() {
        this.y += this.speed;
        if (this.y > height + 200) {
          this.y = -Math.random() * this.h - 200;
          this.x = Math.random() * width;
          this.w = Math.random() * 200 + 150;
          this.speed = Math.random() * 4 + 2;
        }

        // Interaction: Pillars shift away slightly from mouse
        const dx = mouseX - (this.x + this.w / 2);
        const dy = mouseY - (this.y + this.h / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 300) {
          this.x -= dx * 0.03; // Shift away from mouse
        }
      }

      draw() {
        if (!ctx) return;

        // Calculate distance to mouse for brightness
        const dx = mouseX - (this.x + this.w / 2);
        const dy = mouseY - (this.y + this.h / 2);
        const dist = Math.sqrt(dx * dx + dy * dy);

        let lightness = this.baseLightness;
        if (dist < 400) {
          lightness = Math.min(255, lightness + (400 - dist) * 0.6); // Gets brighter near mouse
        }

        const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.h);
        gradient.addColorStop(0, `rgba(${lightness}, ${lightness}, ${lightness}, 0)`);
        gradient.addColorStop(0.5, `rgba(${lightness}, ${lightness}, ${lightness}, 0.2)`);
        gradient.addColorStop(1, `rgba(${lightness}, ${lightness}, ${lightness}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fillRect(this.x, this.y, this.w, this.h);
      }
    }

    const numPillars = Math.floor(width / 60);
    const pillars = Array.from({ length: numPillars }, () => new Pillar(Math.random() * height * 2 - height));

    const render = () => {
      // Trail effect
      ctx.fillStyle = 'rgba(5, 5, 5, 0.3)';
      ctx.fillRect(0, 0, width, height);

      // Sort drawing order by width for a parallax effect (wider ones drawn last = foreground)
      pillars.sort((a, b) => a.w - b.w).forEach(p => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 bg-[#050505] pointer-events-none"
    />
  );
}