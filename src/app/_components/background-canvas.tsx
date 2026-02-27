"use client"
import { useEffect, useRef, useState } from "react";
import "../../styles/canvas.css"

interface ModelData {
  vs: { x: number, y: number, z: number }[];
  fs: number[][];
}

function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [vs, setVs] = useState<ModelData['vs']>([]);
  const [fs, setFs] = useState<ModelData['fs']>([]);

  const loadRandomModel = async () => {
    const models = ['real-penger', 'cube', 'duck', 'crane'];
    const randomName = models[Math.floor(Math.random() * models.length)];
    try {
      const response = await fetch(`/modelling/models/${randomName}.json`);
      const data: ModelData = await response.json();
      setVs(data.vs);
      setFs(data.fs);
    } catch (err) {
      console.error("Fetch failed", err);
    }
  };

  useEffect(() => {
    loadRandomModel();
  }, []);

  useEffect(() => {
    const game = canvasRef.current;
    if (!game || vs.length === 0 || fs.length === 0) return;

    const ctx = game.getContext("2d");
    if (!ctx) return;

    game.width = window.innerWidth;
    game.height = window.innerHeight;
    
    const FOREGROUND = "#646cff67";
    const BACKGROUND = "#1e1e1e";
    const FPS = 60;
    const SPEED = 0.025;
    const MODEL_SIZE = 0.5 * Math.min(game.height, game.width);
    const dt = SPEED / FPS;
    const CAMERA_Z = 0.75;

    let angle = 0;
    let animationId: number; 

    function clear() {
      if (!ctx || !game) return;
      ctx.fillStyle = BACKGROUND;
      ctx.fillRect(0, 0, game.width, game.height);
    }

    function screen(p: { x: number; y: number } | undefined) {
      if (!ctx || !game || !p) return undefined;
      return {
        x: game.width / 2 + p.x * MODEL_SIZE,
        y: game.height / 2 - p.y * MODEL_SIZE,
      };
    }

    function project(p: { x: number; y: number; z: number }) {
      return { x: p.x / (p.z + CAMERA_Z), y: p.y / (p.z + CAMERA_Z) };
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

    function line(p1: { x: number; y: number } | undefined, p2: { x: number; y: number } | undefined) {
      if (!ctx || !game || !p1 || !p2) return;
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
          const a = vs[f[i] as number];
          const b = vs[f[(i + 1) % f.length] as number];

          if (!a || !b) continue; 

          line(
            screen(project(rotateXZ(a, angle))),
            screen(project(rotateXZ(b, angle)))
          );
        }
      }

      animationId = requestAnimationFrame(frame);
    }

    frame();

    const onResize = () => {
      if (!game) return;
      game.width = window.innerWidth;
      game.height = window.innerHeight;
    };

    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationId); 
    };
  }, [vs, fs]);

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
