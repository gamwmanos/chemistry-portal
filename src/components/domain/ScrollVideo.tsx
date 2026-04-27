"use client";
import { useRef, useEffect, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, useSpring, useInView } from "framer-motion";

const FRAME_COUNT = 90;

function currentFrame(index: number) {
  if (index === 1) return "/atomo.jpg";
  return `/video-frames/frame_${index.toString().padStart(4, "0")}.jpg`;
}

export default function ScrollVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const hasStartedLoading = useRef(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  const isInView = useInView(containerRef, { margin: "1000px" });

  const renderFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = imagesRef.current[index - 1];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const iw = img.naturalWidth;
    const ih = img.naturalHeight;
    const cw = canvas.width;
    const ch = canvas.height;

    // Cover-fit: fill entire canvas, crop if needed
    const ratio = Math.max(cw / iw, ch / ih);
    const x = (cw - iw * ratio) / 2;
    const y = (ch - ih * ratio) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, 0, 0, iw, ih, x, y, iw * ratio, ih * ratio);
  }, []);

  // Sync Canvas Size
  useEffect(() => {
    const handleResize = () => {
      if (!canvasRef.current) return;
      canvasRef.current.width = window.innerWidth;
      canvasRef.current.height = window.innerHeight;
      const idx = Math.min(FRAME_COUNT, Math.max(1, Math.floor(smoothProgress.get() * FRAME_COUNT) + 1));
      renderFrame(idx);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [renderFrame, smoothProgress]);

  // Preload frames
  useEffect(() => {
    if (!isInView || hasStartedLoading.current) return;
    hasStartedLoading.current = true;

    let count = 0;
    const handleLoadOrError = (i: number) => {
      count++;
      if (i === 1 && imagesRef.current[0]?.complete) {
        renderFrame(1);
        setIsLoaded(true);
      }
      if (count === 1) setIsLoaded(true);
      if (count === FRAME_COUNT) {
        const idx = Math.min(FRAME_COUNT, Math.max(1, Math.floor(smoothProgress.get() * FRAME_COUNT) + 1));
        renderFrame(idx);
      }
    };

    const loadFrame = (i: number) => {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => handleLoadOrError(i);
      img.onerror = () => handleLoadOrError(i);
      imagesRef.current[i - 1] = img;
    };

    // Load first few frames immediately so scrolling starts smoothly
    for (let i = 1; i <= 5; i++) {
      loadFrame(i);
    }

    let startedLoadingRest = false;
    const loadRest = () => {
      if (startedLoadingRest) return;
      startedLoadingRest = true;
      for (let i = 6; i <= FRAME_COUNT; i++) {
        // slight stagger to prevent blocking main thread entirely
        setTimeout(() => loadFrame(i), (i - 6) * 10);
      }
      window.removeEventListener('scroll', loadRest);
      window.removeEventListener('mousemove', loadRest);
      window.removeEventListener('touchstart', loadRest);
    };

    // Defer the rest of the frames until actual user interaction (fixes Lighthouse massive payload)
    window.addEventListener('scroll', loadRest, { passive: true });
    window.addEventListener('mousemove', loadRest, { passive: true });
    window.addEventListener('touchstart', loadRest, { passive: true });

    return () => {
      window.removeEventListener('scroll', loadRest);
      window.removeEventListener('mousemove', loadRest);
      window.removeEventListener('touchstart', loadRest);
    };
  }, [isInView, renderFrame, smoothProgress]);

  // Scrub loop
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (imagesRef.current.length < 1) return;
    const frameIndex = Math.min(FRAME_COUNT, Math.max(1, Math.floor(latest * FRAME_COUNT) + 1));
    requestAnimationFrame(() => renderFrame(frameIndex));
  });

  return (
    <section
      ref={containerRef}
      className="absolute top-0 left-0 w-full"
      style={{ height: "300vh" }}
    >
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* ── HERO ATOM CANVAS – full brightness, no dimming ── */}
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          style={{ opacity: 1 }}
        />

        {/* Subtle vignette only at edges, NOT dimming centre */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, rgba(5,5,12,0.55) 100%)",
          }}
        />

        {/* Bottom fade so content below has a clean entry */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, transparent, #05050C)",
          }}
        />

        {/* Loading spinner */}
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none bg-background-darker">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-brand-purple-light/30 border-t-brand-purple-light rounded-full animate-spin" />
              <span className="text-white/40 text-sm font-inter tracking-widest uppercase">Φόρτωση...</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
