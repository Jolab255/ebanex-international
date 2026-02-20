import React, { useEffect, useRef } from 'react';
import DottedMap from './dotted-map';

// ── Hub cities with lat/lng for markers ────────────────────────────
const MARKERS = [
  { lat: -6.7924, lng: 39.2083, size: 0.5 },   // Dar es Salaam
  { lat: -1.2921, lng: 36.8219, size: 0.4 },   // Nairobi
  { lat: 51.5074, lng: -0.1278, size: 0.4 },   // London
  { lat: 25.2048, lng: 55.2708, size: 0.4 },   // Dubai
  { lat: 1.3521, lng: 103.8198, size: 0.35 },  // Singapore
  { lat: 40.7128, lng: -74.006, size: 0.35 },  // New York
  { lat: -23.5505, lng: -46.6333, size: 0.3 }, // São Paulo
  { lat: -33.8688, lng: 151.2093, size: 0.3 }, // Sydney
  { lat: 6.5244, lng: 3.3792, size: 0.35 },    // Lagos
  { lat: -26.2041, lng: 28.0473, size: 0.3 },  // Johannesburg
];

// ── Arcs between hubs (index pairs into MARKERS) ──────────────────
const ARCS: [number, number][] = [
  [0, 2], // Dar → London
  [0, 3], // Dar → Dubai
  [2, 5], // London → New York
  [3, 4], // Dubai → Singapore
  [4, 7], // Singapore → Sydney
  [5, 6], // New York → São Paulo
  [8, 0], // Lagos → Dar
];

// ── Normalise lat/lng to 0–1 canvas position (Mercator) ───────────
const latLngToXY = (lat: number, lng: number): [number, number] => {
  const x = (lng + 180) / 360;
  const latRad = (lat * Math.PI) / 180;
  const mercN = Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = 0.5 - mercN / (2 * Math.PI);
  return [x, y];
};

interface Packet {
  arcIdx: number;
  t: number;
  speed: number;
  reverse: boolean;
}

type Props = {
  className?: string;
};

const DataFlowMap: React.FC<Props> = ({ className }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let mounted = true;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

    // ── Sizing ──
    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
    };
    resize();

    // ── Pre-compute hub positions in normalised space ──
    const hubPositions = MARKERS.map((m) => latLngToXY(m.lat, m.lng));

    // ── Packets ──
    const packets: Packet[] = [];
    const PACKET_COUNT = 18;
    for (let i = 0; i < PACKET_COUNT; i++) {
      packets.push({
        arcIdx: Math.floor(Math.random() * ARCS.length),
        t: Math.random(),
        speed: 0.12 + Math.random() * 0.22,
        reverse: Math.random() > 0.5,
      });
    }

    // ── Bezier helpers ──
    const getControlPoint = (
      ax: number, ay: number,
      bx: number, by: number,
    ): [number, number] => {
      const mx = (ax + bx) / 2;
      const my = (ay + by) / 2;
      const dx = bx - ax;
      const dy = by - ay;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const offset = dist * 0.35;
      return [mx - (dy / dist) * offset, my + (dx / dist) * offset];
    };

    const quadBezier = (
      t: number,
      p0x: number, p0y: number,
      cpx: number, cpy: number,
      p1x: number, p1y: number,
    ): [number, number] => {
      const mt = 1 - t;
      return [
        mt * mt * p0x + 2 * mt * t * cpx + t * t * p1x,
        mt * mt * p0y + 2 * mt * t * cpy + t * t * p1y,
      ];
    };

    // ── Render loop ──
    let raf = 0;
    let lastTime = 0;

    const render = (timestamp: number) => {
      if (!mounted) return;
      const dt = lastTime ? (timestamp - lastTime) / 1000 : 0.016;
      lastTime = timestamp;

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // ── 1. Draw arcs ──
      ctx.lineWidth = Math.max(0.5, w * 0.0008);
      for (const [fromIdx, toIdx] of ARCS) {
        const [ax0, ay0] = hubPositions[fromIdx];
        const [bx0, by0] = hubPositions[toIdx];
        const ax = ax0 * w, ay = ay0 * h;
        const bx = bx0 * w, by = by0 * h;
        const [cpx, cpy] = getControlPoint(ax, ay, bx, by);

        ctx.beginPath();
        ctx.moveTo(ax, ay);
        ctx.quadraticCurveTo(cpx, cpy, bx, by);
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
        ctx.stroke();
      }

      // ── 2. Animate packets ──
      if (!prefersReducedMotion) {
        for (const pkt of packets) {
          pkt.t += pkt.speed * dt;
          if (pkt.t > 1) {
            pkt.t = 0;
            pkt.arcIdx = Math.floor(Math.random() * ARCS.length);
            pkt.speed = 0.12 + Math.random() * 0.22;
            pkt.reverse = Math.random() > 0.5;
          }

          const [fromIdx, toIdx] = ARCS[pkt.arcIdx];
          const [ax0, ay0] = hubPositions[fromIdx];
          const [bx0, by0] = hubPositions[toIdx];
          let ax = ax0 * w, ay = ay0 * h;
          let bx = bx0 * w, by = by0 * h;

          if (pkt.reverse) {
            [ax, ay, bx, by] = [bx, by, ax, ay];
          }

          const [cpx, cpy] = getControlPoint(ax, ay, bx, by);
          const [px, py] = quadBezier(pkt.t, ax, ay, cpx, cpy, bx, by);

          // Glow
          const glowR = Math.max(4, w * 0.005);
          const grad = ctx.createRadialGradient(px, py, 0, px, py, glowR);
          grad.addColorStop(0, 'rgba(100, 180, 255, 0.85)');
          grad.addColorStop(0.3, 'rgba(59, 130, 246, 0.35)');
          grad.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(px, py, glowR, 0, Math.PI * 2);
          ctx.fill();

          // Core
          const coreR = Math.max(1.2, w * 0.0016);
          ctx.fillStyle = 'rgba(210, 235, 255, 0.95)';
          ctx.beginPath();
          ctx.arc(px, py, coreR, 0, Math.PI * 2);
          ctx.fill();

          // Trail
          for (let ti = 1; ti <= 3; ti++) {
            const tt = pkt.t - ti * 0.025;
            if (tt < 0) continue;
            const [tx, ty] = quadBezier(tt, ax, ay, cpx, cpy, bx, by);
            const alpha = 0.25 - ti * 0.07;
            ctx.fillStyle = `rgba(100, 180, 255, ${Math.max(0, alpha)})`;
            ctx.beginPath();
            ctx.arc(tx, ty, coreR * 0.65, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // ── 3. Draw hub glows ──
      for (const [hx0, hy0] of hubPositions) {
        const hx = hx0 * w;
        const hy = hy0 * h;

        const pulsePhase = prefersReducedMotion
          ? 0
          : Math.sin(timestamp / 1500 + hx0 * 20) * 0.25;
        const outerR = Math.max(4, w * 0.006) * (1 + pulsePhase * 0.2);
        const outerGrad = ctx.createRadialGradient(hx, hy, 0, hx, hy, outerR);
        outerGrad.addColorStop(0, `rgba(59, 130, 246, ${0.45 + pulsePhase * 0.15})`);
        outerGrad.addColorStop(1, 'rgba(59, 130, 246, 0.0)');
        ctx.fillStyle = outerGrad;
        ctx.beginPath();
        ctx.arc(hx, hy, outerR, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      mounted = false;
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      {/* SVG dotted world map */}
      <DottedMap
        markers={MARKERS}
        dotColor="rgba(100, 160, 255, 0.35)"
        markerColor="#3b82f6"
        dotRadius={0.22}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />
      {/* Canvas overlay for animated arcs and pulses */}
      <canvas
        ref={canvasRef}
        aria-label="Animated connection pulses between global offices"
        role="img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
};

export default DataFlowMap;
