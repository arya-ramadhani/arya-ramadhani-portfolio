"use client";

import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { techSkillsCatalog, type TechSkill } from "@/data/skills";
import { TechIcon } from "./TechIcons";

interface Point3D {
  x: number;
  y: number;
  z: number;
}

interface ProjectedNode {
  skill: TechSkill;
  x: number;
  y: number;
  z: number;
  scale: number;
  opacity: number;
  zIndex: number;
  isFront: boolean;
}

export default function TechSphere3D({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredSkill, setHoveredSkill] = useState<TechSkill | null>(null);
  const [radius, setRadius] = useState(95);

  // Rotation angles (radians) & velocities
  const rotationRef = useRef({ x: 0.15, y: 0.3 });
  const velocityRef = useRef({ x: 0, y: 0.0035 });
  const isDraggingRef = useRef(false);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const isHoveringNodeRef = useRef(false);
  const animFrameIdRef = useRef<number | null>(null);

  // Dynamic responsive radius using ResizeObserver so nodes never exceed boundaries
  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          const minDim = Math.min(width, height);
          // Scale radius to ~28% of smallest dimension so icons + scale stay fully inside
          const safeRadius = Math.max(68, Math.min(108, Math.round(minDim * 0.28)));
          setRadius(safeRadius);
        }
      }
    });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // Compute uniform 3D sphere positions using Fibonacci Golden Spiral algorithm
  const basePoints = useMemo(() => {
    const total = techSkillsCatalog.length;
    const points: Point3D[] = [];
    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < total; i++) {
      const y = 1 - (i / (total - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = phi * i;

      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      points.push({ x, y, z });
    }
    return points;
  }, []);

  const [nodes, setNodes] = useState<ProjectedNode[]>([]);

  // Update 3D projection
  const updateProjection = useCallback(() => {
    const { x: rotX, y: rotY } = rotationRef.current;
    const cosX = Math.cos(rotX);
    const sinX = Math.sin(rotX);
    const cosY = Math.cos(rotY);
    const sinY = Math.sin(rotY);

    const cameraDistance = 380;

    const projected: ProjectedNode[] = techSkillsCatalog.map((skill, index) => {
      const base = basePoints[index] || { x: 0, y: 0, z: 1 };
      const rawX = base.x * radius;
      const rawY = base.y * radius;
      const rawZ = base.z * radius;

      // Rotate Y (yaw)
      const x1 = rawX * cosY - rawZ * sinY;
      const z1 = rawZ * cosY + rawX * sinY;

      // Rotate X (pitch)
      const y2 = rawY * cosX - z1 * sinX;
      const z2 = z1 * cosX + rawY * sinX;

      // Perspective projection
      const k = cameraDistance / (cameraDistance - z2);
      const projX = x1 * k;
      const projY = y2 * k;

      const depth = (z2 + radius) / (2 * radius);
      const scale = Math.max(0.62, Math.min(1.22, 0.65 + depth * 0.55));
      const opacity = Math.max(0.32, Math.min(1, 0.38 + depth * 0.62));
      const zIndex = Math.round(depth * 100);

      return {
        skill,
        x: projX,
        y: projY,
        z: z2,
        scale,
        opacity,
        zIndex,
        isFront: z2 > 0,
      };
    });

    setNodes(projected);
  }, [basePoints, radius]);

  // Animation Loop with inertia and auto-spin
  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      // On mobile, skip every other frame (30fps instead of 60fps)
      if (isMobile && frameCount % 2 !== 0) {
        animFrameIdRef.current = requestAnimationFrame(animate);
        return;
      }

      if (!isDraggingRef.current) {
        if (!isHoveringNodeRef.current) {
          rotationRef.current.y += velocityRef.current.y;
          rotationRef.current.x += velocityRef.current.x;
        }

        velocityRef.current.x *= 0.95;
        if (Math.abs(velocityRef.current.y) > 0.0032) {
          velocityRef.current.y *= 0.96;
        } else {
          velocityRef.current.y = 0.0032; // steady smooth drift
        }
      }

      updateProjection();
      animFrameIdRef.current = requestAnimationFrame(animate);
    };

    animFrameIdRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameIdRef.current) cancelAnimationFrame(animFrameIdRef.current);
    };
  }, [updateProjection]);

  // Pointer drag controls (Mouse & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    lastMousePosRef.current = { x: e.clientX, y: e.clientY };
    if (containerRef.current) {
      containerRef.current.setPointerCapture(e.pointerId);
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    const dx = e.clientX - lastMousePosRef.current.x;
    const dy = e.clientY - lastMousePosRef.current.y;

    lastMousePosRef.current = { x: e.clientX, y: e.clientY };

    const speed = 0.0065;
    rotationRef.current.y += dx * speed;
    rotationRef.current.x -= dy * speed;

    velocityRef.current = {
      x: -dy * 0.0018,
      y: dx * 0.0018,
    };
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    isDraggingRef.current = false;
    if (containerRef.current && containerRef.current.hasPointerCapture(e.pointerId)) {
      containerRef.current.releasePointerCapture(e.pointerId);
    }
  };

  const ringSize = Math.round(radius * 2.1);
  const innerRingSize = Math.round(radius * 1.5);

  return (
    <div
      ref={containerRef}
      data-cursor="orbit"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full h-full rounded-2xl border border-border/40 bg-bg-alt/30 dark:bg-bg/20 backdrop-blur-sm shadow-md flex items-center justify-center select-none touch-none overflow-hidden ${className}`}
      style={{ perspective: "800px" }}
    >
      {/* Ambient background lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(128,0,32,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Responsive orbital rings — desktop only (decorative, skip on mobile) */}
      <div className="absolute inset-0 items-center justify-center pointer-events-none opacity-30 dark:opacity-20 hidden sm:flex">
        <div
          className="rounded-full border border-dashed border-accent/40 animate-[spin_40s_linear_infinite]"
          style={{ width: `${ringSize}px`, height: `${ringSize}px` }}
        />
        <div
          className="absolute rounded-full border border-border/70 animate-[spin_25s_linear_infinite_reverse]"
          style={{ width: `${innerRingSize}px`, height: `${innerRingSize}px` }}
        />
        <div className="absolute w-8 h-8 rounded-full bg-accent/25 blur-md" />
      </div>

      {/* Pure 3D Floating Logos strictly contained within bounds */}
      {nodes.map((node) => {
        const isHovered = hoveredSkill?.name === node.skill.name;
        const finalScale = isHovered ? node.scale * 1.3 : node.scale;
        const finalZIndex = isHovered ? 999 : node.zIndex;

        return (
          <div
            key={node.skill.name}
            data-cursor="pointer"
            onMouseEnter={() => {
              isHoveringNodeRef.current = true;
              setHoveredSkill(node.skill);
            }}
            onMouseLeave={() => {
              isHoveringNodeRef.current = false;
              setHoveredSkill(null);
            }}
            style={{
              transform: `translate3d(${node.x}px, ${node.y}px, 0px) scale(${finalScale})`,
              zIndex: finalZIndex,
              opacity: isHovered ? 1 : node.opacity,
              willChange: "transform, opacity",
            }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 ease-out group"
          >
            {/* Outer brand halo on hover */}
            <div
              className="absolute -inset-1.5 rounded-xl blur-sm transition-opacity duration-300 pointer-events-none"
              style={{
                backgroundColor: node.skill.brandColor,
                opacity: isHovered ? 0.5 : 0,
              }}
            />

            {/* Clean logo disc */}
            <div
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center p-1.5 border backdrop-blur-md transition-all duration-300 shadow-xs group-hover:shadow-md"
              style={{
                backgroundColor: isHovered ? "var(--color-bg-elevated)" : "var(--color-bg-alt)",
                borderColor: isHovered ? node.skill.brandColor : "var(--color-border)",
                boxShadow: isHovered ? `0 6px 16px -3px ${node.skill.glowColor}` : undefined,
              }}
            >
              <TechIcon
                name={node.skill.name}
                size={20}
                className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Minimalist tooltip on hover */}
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 px-1.5 py-0.5 rounded bg-bg-elevated/95 border border-border shadow-md backdrop-blur-md whitespace-nowrap pointer-events-none transition-all duration-150 flex items-center gap-1 z-50 ${
                isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
              style={{
                borderColor: isHovered ? `${node.skill.brandColor}70` : undefined,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: node.skill.brandColor }}
              />
              <span className="font-bold text-[10px] text-text">{node.skill.name}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
