/**
 * Cinematic Game Atmosphere Canvas
 * Renders ambient floating embers, warm lighting falloff,
 * and subtle geometric game accents instead of a sci-fi radar grid.
 */

class GameAtmosphereCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    
    this.width = 0;
    this.height = 0;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    
    this.mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    this.embers = [];
    this.emberCount = 42;
    this.animId = null;
    this.prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.targetX = e.clientX;
      this.mouse.targetY = e.clientY;
    });

    this.createEmbers();
    this.animate();
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.canvas.style.width = `${this.width}px`;
    this.canvas.style.height = `${this.height}px`;
    this.ctx.scale(this.dpr, this.dpr);
  }

  createEmbers() {
    this.embers = [];
    for (let i = 0; i < this.emberCount; i++) {
      this.embers.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 2 + 0.8,
        speedX: (Math.random() - 0.5) * 0.35,
        speedY: -Math.random() * 0.55 - 0.15,
        alpha: Math.random() * 0.45 + 0.15,
        hue: Math.random() > 0.6 ? 38 : 45, // Warm gold to amber ember tones
        pulseVal: Math.random() * Math.PI,
        pulseSpeed: Math.random() * 0.03 + 0.01
      });
    }
  }

  drawWarmLighting() {
    if (this.mouse.x < 0) return;
    const ctx = this.ctx;

    // Torchlight / lantern ambient glow following cursor
    const gradient = ctx.createRadialGradient(
      this.mouse.x, this.mouse.y, 20,
      this.mouse.x, this.mouse.y, 500
    );
    gradient.addColorStop(0, 'rgba(234, 179, 8, 0.045)');
    gradient.addColorStop(0.4, 'rgba(249, 115, 22, 0.018)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, this.width, this.height);
  }

  drawEmbers() {
    const ctx = this.ctx;

    for (let p of this.embers) {
      p.pulseVal += p.pulseSpeed;
      const currentAlpha = p.alpha * (0.65 + 0.35 * Math.sin(p.pulseVal));

      ctx.save();
      // Outer glow
      ctx.fillStyle = `hsla(${p.hue}, 95%, 65%, ${currentAlpha * 0.35})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2);
      ctx.fill();

      // Core ember
      ctx.fillStyle = `hsla(${p.hue}, 100%, 78%, ${currentAlpha})`;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      if (!this.prefersReduced) {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.y < -15) {
          p.y = this.height + 15;
          p.x = Math.random() * this.width;
        }
        if (p.x < -15) p.x = this.width + 15;
        if (p.x > this.width + 15) p.x = -15;
      }
    }
  }

  drawSubtleGameGrid() {
    // Elegant, faint dotted background (like a game level design canvas)
    const ctx = this.ctx;
    const spacing = 80;

    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 255, 0.025)';
    for (let x = spacing / 2; x < this.width; x += spacing) {
      for (let y = spacing / 2; y < this.height; y += spacing) {
        ctx.fillRect(x, y, 1.5, 1.5);
      }
    }
    ctx.restore();
  }

  animate() {
    // Smooth lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.08;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.08;

    this.ctx.clearRect(0, 0, this.width, this.height);

    this.drawSubtleGameGrid();
    this.drawWarmLighting();
    this.drawEmbers();

    this.animId = requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new GameAtmosphereCanvas('viewport-canvas');
});
