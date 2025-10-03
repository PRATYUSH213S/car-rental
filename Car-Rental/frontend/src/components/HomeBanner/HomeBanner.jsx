// src/components/HeroSleek.jsx
import React, { useEffect, useRef, useState } from "react";
import img1 from "../../assets/hero1.png";

import { heroStyles as styles } from "../../assets/dummyStyles";

export default function HeroSleek() {
  const wrapRef = useRef(null);
  const bgRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    function onMove(e) {
      const r = el.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = (clientX - r.left) / r.width;
      const y = (clientY - r.top) / r.height;
      setMouse({ x, y });
      el.style.setProperty("--mx", `${x}`);
      el.style.setProperty("--my", `${y}`);
    }

    function onLeave() {
      setMouse({ x: 0.5, y: 0.5 });
      el.style.setProperty("--mx", `0.5`);
      el.style.setProperty("--my", `0.5`);
    }

    el.addEventListener("mousemove", onMove);
    el.addEventListener("touchmove", onMove, { passive: true });
    el.addEventListener("mouseleave", onLeave);
    el.addEventListener("touchend", onLeave);

    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("touchmove", onMove);
      el.removeEventListener("mouseleave", onLeave);
      el.removeEventListener("touchend", onLeave);
    };
  }, []);

  const maxTranslate = 14;
  const tx = (mouse.x - 0.5) * 2 * maxTranslate;
  const ty = (mouse.y - 0.5) * 2 * (maxTranslate * 0.55);

  return (
    <div className="">
      <div
        ref={wrapRef}
        className={styles.container}
        style={{ ["--mx"]: 0.5, ["--my"]: 0.5 }}
      >
        {/* Background */}
        <div
          ref={bgRef}
          className={styles.background}
          style={{
            transform: `translate3d(${tx * 0.55}px, ${
              ty * 0.55
            }px, 0) scale(1.03)`,
            transition: "transform 220ms cubic-bezier(.2,.9,.25,1)",
          }}
        >
          <img
            src={img1}
            alt="Futuristic car"
            className="w-full object-center opacity-95"
              style={{  marginTop: '-220px', // Move image up
    width: '60%',        // Make image smaller
    marginLeft: 'auto',
    marginRight: 'auto',
    display: 'block' }}
          />

          <div className={styles.gradientOverlay} />
        </div>

        {/* SVG sweeps */}
        <svg
          className={styles.svgContainer}
          viewBox="0 0 1590 700"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="gCenter" x1="0" x2="1">
              <stop offset="0%" stopColor="#8ee6ff" stopOpacity="0" />
              <stop offset="20%" stopColor="#58a6ff" stopOpacity="0.9" />
              <stop offset="80%" stopColor="#b78bff" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ff88c2" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gSide" x1="0" x2="1">
              <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0" />
              <stop offset="30%" stopColor="#60a5fa" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
            </linearGradient>
            <filter id="glow2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="8" result="b" />
              <feMerge>
                <feMergeNode in="b" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
<path
            id="centerPath"
            d="M420 420 C 520 120, 520 200, 1080 200 C 1070 400, 1160 350, 1240 320"
            stroke="url(#gCenter)"
            strokeWidth="3"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="center-path"
          />
          <path
            id="leftArc"
           d="M400 340 Q 800 400, 1200 340"
            stroke="url(#gSide)"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="side-path left"
          />
          <path
            id="rightArc"
            d="M1320 480
C 1100 440, 300 440, 80 480"
            stroke="url(#gSide)"
            strokeWidth="4.5"
            strokeLinecap="round"
            fill="none"
            filter="url(#glow2)"
            className="side-path right"
          />
        </svg>

        {/* Refined glass CTA card */}
        <div className={styles.ctaContainer}
        style={{
    position: 'absolute',
   backgroundColor: 'rgba(0, 255, 255, 0.18)',
    left: 0,
    right: 0,
    top: '600px',      // Use 'top' to move up/down from the top
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center',
    zIndex: 2
  }}>
          <div className={styles.ctaCard}>
            <div>
             <p className={styles.subtitle} style={{ color: '#ff69b4', fontWeight: 'bold' }}>
  True_Drive_Rentals
</p>
              <h3 className={styles.title}>Drive the future. No wait.
</h3>
              <p className={styles.description}>
                Ready to roll? Easy booking, clear prices, zero hassle.

              </p>
            </div>

            <a href="/cars" className="flex items-center gap-3">
              <button className={styles.ctaButton}>
                <span className={styles.buttonText}>See fleet</span>
              </button>
            </a>

            <span aria-hidden className={styles.outline} />
          </div>
        </div>
      </div>
    </div>
  );
}
