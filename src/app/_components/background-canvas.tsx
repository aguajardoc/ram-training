"use client"
import { useEffect, useRef } from "react";
import "../../styles/canvas.css"

function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const game = canvasRef.current;
    if (!game) return;

    const ctx = game.getContext("2d");
    if (!ctx) return;

    game.width = window.innerWidth;
    game.height = window.innerHeight;
    // "#559cffff";
    const FOREGROUND = "#646cff";
    const BACKGROUND = "#1e1e1e";
    const FPS = 60;
    const SPEED = 0.025;
    const MODEL_SIZE = 0.5 * Math.min(game.height, game.width);
    const dt = SPEED / FPS;
    const CAMERA_Z = 0.75;

    const vs = [
      { x: 0.25, y: 0.25, z: 0.25 },
      { x: -0.25, y: 0.25, z: 0.25 },
      { x: -0.25, y: -0.25, z: 0.25 },
      { x: 0.25, y: -0.25, z: 0.25 },
      { x: 0.25, y: 0.25, z: -0.25 },
      { x: -0.25, y: 0.25, z: -0.25 },
      { x: -0.25, y: -0.25, z: -0.25 },
      { x: 0.25, y: -0.25, z: -0.25 },
    ];

    const fs = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [0, 4],
      [1, 5],
      [2, 6],
      [3, 7],
    ];

    let angle = 0;

    function clear() {
      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, game.width, game.height);
    }

    function screen(p: { x: number; y: number }) {
      return {
        x: game.width / 2 + p.x * MODEL_SIZE,
        y: game.height / 2 - p.y * MODEL_SIZE,
      };
    }

    function project(p: { x: number; y: number; z: number }) {
      return { x: p.x / (p.z + CAMERA_Z), y: p.y / (p.z + CAMERA_Z) };
    }

    function translateZ(p: { x: number; y: number; z: number }, dz: number) {
      return { ...p, z: p.z + dz };
    }

    function rotateXZ(p: { x: number; y: number; z: number }, a: number) {
      const c = Math.cos(a);
      const s = Math.sin(a);
      return {
        x: c * p.x - s * p.z,
        y: p.y,
        z: s * p.x + c * p.z,
      };
    }

    function line(p1: any, p2: any) {
      ctx.lineWidth = 3;
      ctx.strokeStyle = FOREGROUND;
      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.stroke();
    }

    function frame() {
      clear();
      angle += 2 * Math.PI * dt;

      for (const f of fs) {
        for (let i = 0; i < f.length; i++) {
          const a = vs[f[i]];
          const b = vs[f[(i + 1) % f.length]];

          line(
            screen(project(rotateXZ(a, angle))),
            screen(project(rotateXZ(b, angle)))
          );
        }
      }

      requestAnimationFrame(frame);
    }

    frame();

    const onResize = () => {
      game.width = window.innerWidth;
      game.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <canvas
      className="canvas"
      ref={canvasRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
      }}
    />
  );
}

export default BackgroundCanvas;
